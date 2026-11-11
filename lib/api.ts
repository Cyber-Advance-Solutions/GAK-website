/**
 * Backend API client for the public website.
 *
 * Every page reads its content from GAK-Backend (the same data the admin panel edits).
 * Server components call `api()` directly; client components receive the data as props
 * from their server page, or (forms) call `postForm()`.
 *
 * Config (.env.local):
 *   NEXT_PUBLIC_API_URL      URL the BROWSER uses for the API. "/api" = through this site's own domain
 *                            (next.config.mjs forwards /api and /uploads to the backend) — works locally
 *                            and behind ngrok. Default http://localhost:5000/api.
 *   NEXT_PUBLIC_BACKEND_URL  where /uploads/... files are loaded from ("" = this site's own domain).
 *                            Default: NEXT_PUBLIC_API_URL without /api.
 *   API_INTERNAL_URL         URL the Next.js SERVER uses for the API (default http://localhost:5000/api)
 *   API_REVALIDATE_SECONDS   default 0 = always fresh (admin edits show on the next page load)
 */

const PUBLIC_API = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api").replace(/\/$/, "");
const INTERNAL_API = (
  process.env.API_INTERNAL_URL || (PUBLIC_API.startsWith("/") ? "http://localhost:5000/api" : PUBLIC_API)
).replace(/\/$/, "");

/** Server code calls the backend directly; browser code goes through PUBLIC_API (may be relative, e.g. "/api") */
export const API_URL = typeof window === "undefined" ? INTERNAL_API : PUBLIC_API;
export const BACKEND_URL = (process.env.NEXT_PUBLIC_BACKEND_URL ?? PUBLIC_API.replace(/\/api$/, "")).replace(/\/$/, "");
const REVALIDATE = Number(process.env.API_REVALIDATE_SECONDS || 0);

/**
 * GET an endpoint and return its `data` payload (the backend wraps responses as { status, data }).
 * Never throws: if the backend is down or returns an error, `fallback` is returned and the
 * error is logged on the server, so one failing section cannot take the whole page down.
 *
 *   const events = await api<ApiEvent[]>("/events", []);
 */
export async function api<T>(path: string, fallback: T): Promise<T> {
  const url = `${API_URL}${path.startsWith("/") ? path : `/${path}`}`;
  try {
    const res = await fetch(url, REVALIDATE > 0 ? { next: { revalidate: REVALIDATE } } : { cache: "no-store" });
    if (!res.ok) {
      console.error(`[api] ${res.status} ${url}`);
      return fallback;
    }
    const json = await res.json();
    const data = json && typeof json === "object" && "data" in json ? json.data : json;
    return (data ?? fallback) as T;
  } catch (err) {
    console.error(`[api] ${url} failed:`, (err as Error)?.message);
    return fallback;
  }
}

/** Unwraps list endpoints that may return either an array or { rows | items | data: [...] } */
export function asList<T = any>(value: unknown): T[] {
  if (Array.isArray(value)) return value as T[];
  if (value && typeof value === "object") {
    const v = value as Record<string, unknown>;
    for (const k of ["rows", "items", "data", "results"]) if (Array.isArray(v[k])) return v[k] as T[];
  }
  return [];
}

/** Parses JSON columns that may arrive as a string ("[...]") or already parsed */
export function asJson<T>(value: unknown, fallback: T): T {
  if (value == null || value === "") return fallback;
  if (typeof value === "string") {
    try {
      return JSON.parse(value) as T;
    } catch {
      return fallback;
    }
  }
  return value as T;
}

/**
 * Turns a stored file path into a URL the browser can load.
 * Uploaded files (/uploads/..., /public/uploads/...) live on the backend; anything else
 * (e.g. "/logo.png" from this site's own /public folder, or a full https:// URL) is returned unchanged.
 */
export function assetUrl(path?: string | null): string {
  if (!path) return "";
  const p = String(path).trim();
  if (/^(https?:|data:|blob:)/i.test(p)) return p;
  if (p.startsWith("/public/uploads/")) return `${BACKEND_URL}${p.replace(/^\/public/, "")}`;
  if (p.startsWith("/uploads/") || p.startsWith("uploads/")) return `${BACKEND_URL}/${p.replace(/^\//, "")}`;
  return p;
}

/** Published + enabled filter used by most content tables (missing flags count as "on") */
export function isLive(item: any): boolean {
  return item && item.isPublished !== false && item.isEnabled !== false && item.isActive !== false;
}

/** Sort helper for displayOrder / order columns */
export function byOrder(a: any, b: any): number {
  const oa = Number(a?.displayOrder ?? a?.order ?? a?.sortOrder ?? 0);
  const ob = Number(b?.displayOrder ?? b?.order ?? b?.sortOrder ?? 0);
  return oa - ob || Number(a?.id ?? 0) - Number(b?.id ?? 0);
}

/**
 * POST a public form (contact, feedback, admission, job application) from the browser.
 * Pass FormData for file uploads, or a plain object for JSON.
 * Throws an Error with the backend's message when the submission is rejected.
 */
export async function postForm<T = unknown>(path: string, body: FormData | Record<string, unknown>): Promise<T> {
  const isForm = typeof FormData !== "undefined" && body instanceof FormData;
  const res = await fetch(`${API_URL}${path.startsWith("/") ? path : `/${path}`}`, {
    method: "POST",
    headers: isForm ? undefined : { "Content-Type": "application/json" },
    body: isForm ? (body as FormData) : JSON.stringify(body),
  });
  const json = await res.json().catch(() => null);
  if (!res.ok) {
    const msg =
      (json && (json.message || json.error || (Array.isArray(json.errors) && json.errors.map((e: any) => e.message || e).join(", ")))) ||
      `Submission failed (${res.status})`;
    throw new Error(String(msg));
  }
  return (json && "data" in json ? json.data : json) as T;
}

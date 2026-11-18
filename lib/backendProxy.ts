/**
 * Forwards a browser request (/api/..., /uploads/...) to GAK-Backend and streams the answer back.
 *
 * The backend address is read from BACKEND_URL in .env when the server runs (not when it is built),
 * so the same build works on any server: change BACKEND_URL, restart, done.
 */
import type { NextRequest } from "next/server";

/**
 * Backend base URL without a trailing slash, e.g. "http://localhost:5000". First one set wins:
 *   BACKEND_URL       full address (backend on another server/domain)
 *   BACKEND_PORT      only the port, backend on this same server (http://127.0.0.1:<port>)
 *   API_INTERNAL_URL  older setting, full address ending in /api
 */
export function backendBase(): string {
  const port = (process.env.BACKEND_PORT || "").trim();
  const raw =
    process.env.BACKEND_URL ||
    (/^\d{2,5}$/.test(port) ? `http://127.0.0.1:${port}` : "") ||
    (process.env.API_INTERNAL_URL || "").replace(/\/api\/?$/, "") ||
    "http://localhost:5000";
  return raw.trim().replace(/\/+$/, "").replace(/\/api$/, "");
}

// Headers that describe one connection only and must not be copied to the next one
const HOP_BY_HOP = new Set([
  "connection", "keep-alive", "proxy-authenticate", "proxy-authorization", "te", "trailer",
  "transfer-encoding", "upgrade", "host", "content-length",
]);

export async function proxyToBackend(req: NextRequest, prefix: string): Promise<Response> {
  const { pathname, search } = new URL(req.url);
  const target = `${backendBase()}${prefix}${pathname.slice(prefix.length)}${search}`;

  const headers = new Headers();
  req.headers.forEach((value, key) => {
    if (!HOP_BY_HOP.has(key.toLowerCase()) && key.toLowerCase() !== "accept-encoding") headers.set(key, value);
  });
  // Visitor IP for the backend's rate limits (backend .env: TRUST_PROXY=1)
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip");
  if (ip) headers.set("x-forwarded-for", ip);
  headers.set("x-forwarded-host", req.headers.get("host") || "");

  const hasBody = !["GET", "HEAD"].includes(req.method);
  let upstream: Response;
  try {
    upstream = await fetch(target, {
      method: req.method,
      headers,
      body: hasBody ? req.body : undefined,
      redirect: "manual",
      cache: "no-store",
      // required by Node when streaming a request body (file uploads)
      ...(hasBody ? { duplex: "half" } : {}),
    } as RequestInit);
  } catch (err) {
    console.error(`[proxy] backend not reachable at ${backendBase()}:`, err instanceof Error ? err.message : err);
    return Response.json(
      { status: "error", message: `The server could not reach the backend at ${backendBase()}. Check BACKEND_PORT / BACKEND_URL in .env.` },
      { status: 502 }
    );
  }

  const out = new Headers();
  upstream.headers.forEach((value, key) => {
    const k = key.toLowerCase();
    // fetch() already decompressed the body, so these would be wrong now
    if (!HOP_BY_HOP.has(k) && k !== "content-encoding") out.append(key, value);
  });
  return new Response(req.method === "HEAD" ? null : upstream.body, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers: out,
  });
}

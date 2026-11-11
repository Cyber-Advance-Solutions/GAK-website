/** /streams (APSAC, APSIS) with their pathway steps — edited in the admin "Streams" module */
import { api, asJson, asList, assetUrl, byOrder, isLive } from "@/lib/api";

export type StreamStep = { id: string; n: number; title: string; gradeRange: string; lines: string[]; href: string };
export type StreamView = { name: string; badge: string; description: string; image: string; steps: StreamStep[] };

/**
 * The backend has no link field on a step; the pathway cards link to the matching section page.
 * Matched on the step title (falls back to no link).
 */
function stepHref(title: string): string {
  const t = title.toLowerCase();
  if (/pre[- ]?school|nursery|eys/.test(t)) return "/sections/pre";
  if (/junior/.test(t)) return "/sections/junior";
  if (/middle/.test(t)) return "/sections/middle-boys";
  if (/senior|fbise|intermediate/.test(t)) return "/sections/senior-boys";
  if (/o ?level|a ?level|cambridge|igcse|apsis/.test(t)) return "/sections/apsis";
  return "";
}

export async function getStream(slug: string): Promise<StreamView | null> {
  const rows = asList<any>(await api<unknown>("/streams", [])).filter(isLive);
  const s = rows.find(
    (r) => String(r.exploreLink || "").replace(/\/$/, "").toLowerCase() === `/streams/${slug}` || String(r.name || "").toLowerCase() === slug
  );
  if (!s) return null;
  const steps = asList<any>(asJson(s.steps, []))
    .filter(isLive)
    .sort((a, b) => Number(a.stepNumber ?? a.order ?? 0) - Number(b.stepNumber ?? b.order ?? 0) || byOrder(a, b))
    .map((st, i) => ({
      id: String(st.id ?? i),
      n: Number(st.stepNumber) || i + 1,
      title: String(st.title || ""),
      gradeRange: String(st.gradeRange || ""),
      lines: String(st.description || "")
        .split(/\r?\n/)
        .map((l) => l.trim())
        .filter(Boolean),
      href: stepHref(String(st.title || "")),
    }));
  return {
    name: String(s.name || ""),
    badge: String(s.badge || s.tagline || ""),
    description: String(s.description || ""),
    image: assetUrl(s.imageUrl),
    steps,
  };
}

// About / history / people data from GAK-Backend (edited in the admin "About", "History",
// "Our Team" and "Alumni" modules).
import { api, asJson, asList, assetUrl, byOrder, isLive } from "@/lib/api";

/* ---------------------------------------------------------------- about overview */

export type AboutOverview = {
  pageHeading?: string;
  subHeading?: string;
  badge?: string;
  coverImage?: string;
  isEnabled?: boolean;
};

export async function getAboutOverview(): Promise<AboutOverview | null> {
  return api<AboutOverview | null>("/about/overview", null);
}

/* ---------------------------------------------------------------- founder */

export type Founder = {
  name: string;
  role: string;
  designation: string;
  intro: string;
  image: string;
  imageAlt: string;
  description: string[];
};

export async function getFounder(): Promise<Founder | null> {
  const f = await api<any>("/about/founder", null);
  if (!f || f.isEnabled === false) return null;
  return {
    name: f.name || "",
    role: f.rankAndTitle || f.designation || "",
    designation: f.designation || "",
    intro: f.establishmentInfo || "",
    image: assetUrl(f.founderPhoto),
    imageAlt: [f.name, f.designation].filter(Boolean).join(", "),
    description: splitParagraphs(f.description),
  };
}

/* ---------------------------------------------------------------- principals roll */

export type PrincipalCard = { id: number | string; name: string; role?: string; period: string; image: string };

export async function getPrincipals(): Promise<PrincipalCard[]> {
  const rows = asList<any>(await api("/about/principals", []));
  return rows
    .filter(isLive)
    .sort(byOrder)
    .map((p) => ({
      id: p.id,
      name: p.name || "",
      // the website only prints a role line when it is more than the plain "Principal" title
      role: p.designation && p.designation.trim().toLowerCase() !== "principal" ? p.designation : undefined,
      period: p.tenure || "",
      image: assetUrl(p.photo),
    }));
}

/* ---------------------------------------------------------------- facilities */

export type Facility = { id: number | string; name: string; category: string; description: string; image: string };

export async function getFacilities(): Promise<Facility[]> {
  const rows = asList<any>(await api("/about/facilities", []));
  return rows
    .filter(isLive)
    .sort(byOrder)
    .map((f) => ({
      id: f.id,
      name: f.name || "",
      category: f.category || "",
      description: f.description || "",
      image: assetUrl(f.coverImage),
    }));
}

/* ---------------------------------------------------------------- code of conduct */

export type ConductCategory = { id: string; title: string; description: string; rules: { label: string; text: string }[] };
export type Conduct = { title: string; preamble: string; documentUrl: string; values: ConductCategory[]; pillars: ConductCategory[] };

const PILLAR_LABELS = ["vision target", "mission vehicle", "core value"];

export async function getConduct(): Promise<Conduct | null> {
  const c = await api<any>("/about/conduct", null);
  if (!c || c.isEnabled === false) return null;
  const cats: ConductCategory[] = asJson<any[]>(c.categories, []).map((cat, i) => ({
    id: String(cat.id ?? i),
    title: cat.category || cat.title || "",
    description: cat.description || "",
    rules: asList<string>(asJson(cat.rules, [])).map((r) => {
      const m = /^([^:]{2,40}):\s*([\s\S]*)$/.exec(String(r));
      return m ? { label: m[1].trim(), text: m[2].trim() } : { label: "", text: String(r) };
    }),
  }));
  const isPillar = (cat: ConductCategory) => cat.rules.some((r) => PILLAR_LABELS.some((l) => r.label.toLowerCase().startsWith(l)));
  return {
    title: c.title || "",
    preamble: c.preamble || "",
    documentUrl: assetUrl(c.documentUrl),
    values: cats.filter((cat) => !isPillar(cat)),
    pillars: cats.filter(isPillar),
  };
}

/** Picks the rule whose "Label:" prefix starts with `label`, falling back to the n-th rule. */
export function ruleFor(cat: ConductCategory, label: string, index: number): string {
  const hit = cat.rules.find((r) => r.label.toLowerCase().startsWith(label.toLowerCase()));
  if (hit) return hit.text;
  const unlabeled = cat.rules.filter((r) => !r.label);
  return unlabeled[index]?.text ?? "";
}

/* ---------------------------------------------------------------- history */

export type HistoryOverview = { heading: string; subHeading: string; tagline: string; image: string };
export type Milestone = { id: number | string; year: string; title: string; principal: string; principalImage: string; eventImage: string };

export async function getHistory(): Promise<{ overview: HistoryOverview | null; milestones: Milestone[] }> {
  const [o, rows] = await Promise.all([api<any>("/history/overview", null), api<any>("/history/milestones", [])]);
  const overview =
    o && o.isEnabled !== false
      ? { heading: o.heading || "", subHeading: o.subHeading || "", tagline: o.tagline || "", image: assetUrl(o.charterDocumentUrl) }
      : null;
  const milestones = asList<any>(rows)
    .filter(isLive)
    .sort(byOrder)
    .map((m) => {
      const extra = asJson<Record<string, any>>(m.extraData, {}) || {};
      return {
        id: m.id,
        year: m.year || "",
        title: m.title || "",
        principal: extra.principal || m.subtitle || "",
        principalImage: assetUrl(extra.principalImage),
        eventImage: assetUrl(m.imageUrl),
      };
    });
  return { overview, milestones };
}

/* ---------------------------------------------------------------- our team */

export type TeamMember = { id: number | string; name: string; role: string; intro: string; photo: string; initials: string };

export async function getTeamMembers(): Promise<TeamMember[]> {
  const rows = asList<any>(await api("/team-members/published", []));
  return rows
    .filter(isLive)
    .sort(byOrder)
    .map((t) => ({
      id: t.id,
      name: t.name || "",
      role: t.designation || t.role || "",
      intro: t.biography || "",
      photo: assetUrl(t.photograph),
      initials: initialsOf(t.name),
    }));
}

/* ---------------------------------------------------------------- alumni */

export type AlumniRow = { id: number | string; sr: number | string; name: string; father: string; session: string; role: string };
export type AlumniCard = { id: number | string; initials: string; name: string; post: string; photo: string };

export async function getAlumni(): Promise<{ table: AlumniRow[]; featured: AlumniCard[] }> {
  const rows = asList<any>(await api("/alumni", []))
    .filter((a) => isLive(a) && a.status !== "Archived")
    .sort(byOrder);
  // Admin: status "Featured" = "Where our graduates are today" cards; "Active" = the alumni table.
  const featured = rows.filter((a) => a.status === "Featured");
  const table = rows.filter((a) => a.status !== "Featured");
  return {
    table: table.map((a, i) => {
      const fields = asJson<{ label?: string; value?: string }[]>(a.customFields, []) || [];
      const father = fields.find((f) => /father/i.test(String(f?.label || "")))?.value || "";
      return {
        id: a.id,
        sr: i + 1,
        name: a.studentName || "",
        father,
        session: a.session || "",
        role: a.presentPost || a.currentOrganization || "",
      };
    }),
    featured: featured.map((a) => {
      const extra = asJson<Record<string, any>>(a.extraData, {}) || {};
      const photo = a.photograph && !/\/principal\.png$/.test(a.photograph) ? assetUrl(a.photograph) : "";
      return {
        id: a.id,
        initials: extra.initials || initialsOf(a.studentName),
        name: a.studentName || "",
        post: [a.presentPost, a.currentOrganization].filter(Boolean).join(", "),
        photo,
      };
    }),
  };
}

/* ---------------------------------------------------------------- helpers */

export function initialsOf(name?: string | null): string {
  const words = String(name || "")
    .replace(/[^A-Za-z\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w && !/^(mr|mrs|ms|dr|prof|capt|maj|lt|col|brig|gen|syed|sqn|ldr)$/i.test(w));
  return words
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

export function splitParagraphs(text?: string | null): string[] {
  return String(text || "")
    .split(/\n\s*\n|\r\n\s*\r\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

/* ---------------------------------------------------------------- organograms */

export type Organogram = { id: number | string; key: string; title: string; subtitle: string; image: string; imageAlt: string; href: string };

const ORG_PAGES: Record<string, string> = { academic: "/organogram/academic", admin: "/organogram/admin" };

function toOrganogram(o: any): Organogram {
  const key = String(o.key || o.id);
  return {
    id: o.id,
    key,
    title: o.title || "",
    subtitle: o.subtitle || "",
    image: assetUrl(o.imageUrl),
    imageAlt: o.imageAlt || o.title || "",
    href: ORG_PAGES[key] || `/organogram/${encodeURIComponent(key)}`,
  };
}

export async function getOrganograms(): Promise<Organogram[]> {
  const rows = asList<any>(await api("/organograms", []));
  return rows.filter(isLive).sort(byOrder).map(toOrganogram);
}

export async function getOrganogram(key: string): Promise<Organogram | null> {
  const all = await getOrganograms();
  return all.find((o) => o.key === key) ?? null;
}

/**
 * School sections (Pre-School … APSIS) — maps GAK-Backend /school-sections, /faculty and
 * /coordinators rows to the plain shapes the section components render.
 *
 * Admin: gak_admin_dashboard components/sections/SingleSectionManager.tsx edits one record per
 * section (head, facts/deputy, studentLife = activities, achievements, facilities, banner).
 */
import { api, asJson, asList, assetUrl, byOrder, isLive } from "@/lib/api";
import type { Staff } from "@/lib/staff";

/** Website URL slug -> backend section key (the admin uses these keys) */
const SLUG_TO_KEY: Record<string, string> = {
  pre: "pre-school",
  junior: "junior-section",
};
const KEY_TO_SLUG: Record<string, string> = Object.fromEntries(Object.entries(SLUG_TO_KEY).map(([s, k]) => [k, s]));

export const sectionKey = (slug: string) => SLUG_TO_KEY[slug] ?? slug;
export const sectionSlug = (key: string) => KEY_TO_SLUG[key] ?? key;

/** Shown when a person/student has no photo (next/image needs a src) */
export const PHOTO_FALLBACK = "/logo.png";

/** Categories the admin modals write over the original grouping when an item is saved */
const ADMIN_DEFAULT_CATEGORIES = new Set(["facility", "activity", "academic distinction"]);

export type SectionActivity = { id: string; label: string; photo: string; date: string; note: string };
export type SectionAchiever = Staff & {
  id: string;
  competition: string;
  award: string;
  category: string;
  description: string;
  heading: string; // short heading for the main page (APSIS mainPageHeading), falls back to competition
};
export type SectionFacility = { id: string; title: string; description: string; text: string; category: string; photos: string[] };
export type SectionSubPage = { slug: string; label: string; eyebrow: string };
export type OtherSection = { slug: string; name: string; sub: string };

export type SectionView = {
  id: number | string;
  key: string;
  slug: string;
  name: string;
  sub: string;
  intro: string;
  banner: string;
  head: (Staff & { message: string[] }) | null;
  headEyebrow: string;
  deputyName: string;
  deputies: Staff[];
  classesRange: string;
  curriculum: string;
  stream: string;
  timings: string;
  activities: SectionActivity[];
  achievers: SectionAchiever[];
  facilities: SectionFacility[];
  subPages: SectionSubPage[];
  others: OtherSection[];
  extra: Record<string, any>;
  overview: Record<string, any>;
};

const str = (v: unknown) => (v == null ? "" : String(v).trim());
const photo = (p: unknown) => assetUrl(str(p)) || PHOTO_FALLBACK;

/** Splits a stored message into paragraphs (admin textarea; paragraphs separated by blank lines) */
export function paragraphs(text: unknown): string[] {
  return str(text)
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

/** Items the admin re-saved lose their group (category reset to the modal default): keep them in the group they sit in */
function fillCategories<T extends { category: string }>(items: T[]): T[] {
  let last = "";
  return items.map((it) => {
    const reset = ADMIN_DEFAULT_CATEGORIES.has(it.category.toLowerCase());
    if (!reset) last = it.category;
    return { ...it, category: reset ? last : it.category };
  });
}

/** Groups items by a key, keeping first-appearance order */
export function groupBy<T>(items: T[], keyOf: (t: T) => string): { name: string; items: T[] }[] {
  const out: { name: string; items: T[] }[] = [];
  for (const it of items) {
    const name = keyOf(it);
    let g = out.find((x) => x.name === name);
    if (!g) out.push((g = { name, items: [] }));
    g.items.push(it);
  }
  return out;
}

const live = (v: unknown) => asList<any>(asJson(v, [])).filter(isLive).sort(byOrder);

function toSubPages(extra: any, defaults: Record<string, string>): SectionSubPage[] {
  const list = asJson<any[]>(extra?.subPages, []);
  const labels = asJson<Record<string, string>>(extra?.subPageLabels, {});
  const out: SectionSubPage[] = [];
  for (const p of Array.isArray(list) ? list : []) {
    if (typeof p === "string") out.push({ slug: p, label: labels[p] || p, eyebrow: defaults[p] || "" });
    else if (p && p.slug && p.isEnabled !== false)
      out.push({ slug: String(p.slug), label: str(p.label) || labels[p.slug] || String(p.slug), eyebrow: str(p.eyebrow) || defaults[p.slug] || "" });
  }
  return out;
}

/** Default sub-page eyebrows (small UI labels; the backend stores them only for some sections) */
const SUB_EYEBROWS: Record<string, string> = {
  activities: "Curriculum",
  "high-achievers": "Recognition",
  achievements: "Recognition",
  facilities: "Campus",
  "cca-activities": "Co-Curricular",
  "faculty-by-department": "Our Teachers",
  coordinators: "Leadership",
  "subject-coordinators": "Leadership",
  "deputy-section-head": "Leadership",
  "deputy-section-heads": "Leadership",
  "deputy-section-head-cca": "Leadership",
  "section-head": "Leadership",
};

/** Per-section eyebrow wording of the original sub-pages (not stored in the backend for these sections) */
const SECTION_EYEBROWS: Record<string, Record<string, string>> = {
  "middle-boys": { activities: "Academic year 2026–27" },
  "middle-girls": { activities: "Calendar", achievements: "Awards" },
};

function toView(s: any, all: any[], eyebrows: Record<string, string> = {}): SectionView {
  const overview = asJson<Record<string, any>>(s.overview, {}) || {};
  const extra = asJson<Record<string, any>>(s.extraData, {}) || {};
  const headRaw = asJson<any>(s.head, null);
  const head =
    headRaw && headRaw.isEnabled !== false && str(headRaw.name)
      ? {
          name: str(headRaw.name),
          role: str(headRaw.designation),
          qualification: str(headRaw.qualification),
          joined: str(headRaw.joined),
          photo: photo(headRaw.image),
          message: paragraphs(headRaw.messageQuote),
        }
      : null;

  const deputies: Staff[] = live(s.deputyHeads).map((d) => ({
    name: str(d.name),
    role: str(d.designation),
    qualification: str(d.qualification),
    joined: str(d.joined),
    photo: photo(d.image),
  }));
  // Same precedence the admin "Facts" tab reads with
  const deputyName = str(overview.deputyHead || extra.deputyHead || deputies[0]?.name);

  const activities: SectionActivity[] = live(s.studentLife).map((a) => ({
    id: str(a.id),
    label: str(a.title),
    photo: assetUrl(str(a.image || asList<string>(a.images)[0])),
    date: str(a.schedule),
    note: str(a.description),
  }));

  const rawAch = live(s.achievements).map((a) => ({
    id: str(a.id),
    name: str(a.recipient || a.title),
    competition: str(a.competition || a.title),
    award: str(a.award || a.badge),
    category: str(a.category),
    description: str(a.description),
    heading: str(a.mainPageHeading),
    photo: photo(a.image),
    joined: "",
    qualification: str(a.award || a.badge),
    role: str(a.competition || a.title),
  }));
  // A re-saved achiever loses mainPageHeading: reuse the heading of its competition group
  const achievers: SectionAchiever[] = fillCategories(rawAch).map((a) => ({
    ...a,
    heading: a.heading || rawAch.find((x) => x.competition === a.competition && x.heading)?.heading || a.competition,
  }));

  const facilities: SectionFacility[] = fillCategories(
    live(s.facilities).map((f) => {
      const title = str(f.title || f.name);
      const description = str(f.description);
      const photos = asList<string>(f.images).map((p) => assetUrl(str(p))).filter(Boolean);
      if (!photos.length && str(f.image)) photos.push(assetUrl(str(f.image)));
      return { id: str(f.id), title, description, text: description ? `${title}: ${description}` : title, category: str(f.category), photos };
    })
  );

  const others: OtherSection[] = all
    .filter((o) => o.key !== s.key)
    .map((o) => ({ slug: sectionSlug(o.key), name: str(o.name), sub: str(o.tagline || o.gradeRange) }));

  return {
    id: s.id,
    key: s.key,
    slug: sectionSlug(s.key),
    name: str(s.name),
    sub: str(s.tagline),
    intro: str(overview.intro),
    banner: assetUrl(str(s.bannerImage)),
    head,
    headEyebrow: str(extra.headMessageEyebrow),
    deputyName,
    deputies,
    classesRange: str(s.gradeRange || overview.classesRange),
    curriculum: str(s.affiliation || overview.curriculum),
    stream: str(s.stream || overview.stream || extra.stream),
    timings: str(s.shiftTimings || overview.timings || extra.timings),
    activities,
    achievers,
    facilities,
    subPages: toSubPages(extra, { ...SUB_EYEBROWS, ...eyebrows }),
    others,
    extra,
    overview,
  };
}

const sectionOn = (s: any) => s && s.key && isLive(s) && String(s.status || "Active").toLowerCase() !== "inactive";

/** All published sections (admin order) */
export async function getSectionRows(): Promise<any[]> {
  return asList<any>(await api<unknown>("/school-sections", [])).filter(sectionOn).sort(byOrder);
}

/** One section by website slug, or null when it does not exist / is hidden in the admin */
export async function getSection(slug: string, eyebrows?: Record<string, string>): Promise<SectionView | null> {
  const all = await getSectionRows();
  const key = sectionKey(slug);
  const row = all.find((s) => s.key === key && sectionSlug(s.key) === slug);
  return row ? toView(row, all, eyebrows ?? SECTION_EYEBROWS[slug]) : null;
}

/** Sub-page by slug, limited to the slugs a component can render */
export function findSubPage(view: SectionView | null, sub: string, supported: string[]): SectionSubPage | null {
  if (!view || !supported.includes(sub)) return null;
  return view.subPages.find((p) => p.slug === sub) ?? null;
}

export const supportedSubPages = (view: SectionView, supported: string[]) => view.subPages.filter((p) => supported.includes(p.slug));

/** Faculty of one section grouped by the department name shown on the website */
export async function getSectionFaculty(key: string): Promise<{ name: string; teachers: (Staff & { isCoordinator: boolean })[] }[]> {
  const rows = asList<any>(await api<unknown>(`/faculty?sectionId=${encodeURIComponent(key)}`, []))
    .filter((f) => f.sectionId === key && isLive(f) && String(f.status || "Active").toLowerCase() !== "inactive")
    .sort(byOrder);
  const people = rows.map((f) => {
    const extra = asJson<Record<string, any>>(f.extraData, {}) || {};
    const designation = str(f.designation);
    // Imported teachers with no role on the website got the required placeholder "Teacher"
    const hideRole = designation === "Teacher" && "designationOnWebsite" in extra && !extra.designationOnWebsite;
    return {
      dept: str(extra.websiteDepartment || f.department) || "Faculty",
      name: str(f.name),
      role: hideRole ? "" : designation,
      qualification: str(f.qualification),
      joined: str(f.joiningDate),
      photo: photo(f.avatar),
      isCoordinator: !!f.isCoordinator || /coordinator/i.test(designation),
    };
  });
  return groupBy(people, (p) => p.dept).map((g) => ({ name: g.name, teachers: g.items }));
}

/** Coordinators of one section (/coordinators) */
export async function getSectionCoordinators(key: string): Promise<Staff[]> {
  return asList<any>(await api<unknown>(`/coordinators?sectionId=${encodeURIComponent(key)}`, []))
    .filter((c) => c.sectionId === key && isLive(c) && String(c.status || "Active").toLowerCase() !== "inactive")
    .sort(byOrder)
    .map((c) => {
      const extra = asJson<Record<string, any>>(c.extraData, {}) || {};
      return {
        name: str(c.name),
        role: str(c.designation),
        qualification: str(c.qualification),
        joined: str(extra.joined),
        photo: photo(c.photograph),
      };
    });
}

/** Fact rows without empty values (a fact cleared in the admin disappears instead of showing blank) */
export const facts = (rows: [string, string][]): [string, string][] => rows.filter(([, v]) => !!v);

/** Category of a facility list, by index of first appearance */
export function facilityGroups(view: SectionView) {
  return groupBy(view.facilities, (f) => f.category);
}

/**
 * Heading of a facility group on the Facilities sub-page. The import kept the sub-page wording in
 * extraData.facilityGroupHeadings ({ mainPage: [...], facilitiesSubPage: [...] }); otherwise the
 * category itself (or a component default for that column) is used.
 */
export function subFacilityHeading(view: SectionView, category: string, index: number, defaults: string[] = []): string {
  const h = view.extra.facilityGroupHeadings as { mainPage?: string[]; facilitiesSubPage?: string[] } | undefined;
  const i = h?.mainPage?.indexOf(category) ?? -1;
  if (i >= 0 && h?.facilitiesSubPage?.[i]) return h.facilitiesSubPage[i];
  return defaults[index] && index < defaults.length && defaultsMatch(view, category, index) ? defaults[index] : category;
}
// Defaults only replace the category when the section still has its original groups in that position
function defaultsMatch(view: SectionView, category: string, index: number) {
  return facilityGroups(view)[index]?.name === category;
}

/** Senior sections' CCA table: description "Class IX"/"Class X" = one class only, otherwise both */
export function ccaRow(a: SectionActivity): { date: string; ix: string | null; x: string | null } {
  const n = a.note.toLowerCase().replace(/\s+/g, " ").trim();
  if (n === "class ix") return { date: a.date, ix: a.label, x: "---" };
  if (n === "class x") return { date: a.date, ix: "---", x: a.label };
  return { date: a.date, ix: null, x: null };
}

/** Loads /faculty or /coordinators only for the sub-pages that show them */
export async function loadStaffExtras(view: SectionView, subSlug: string) {
  const out: {
    faculty?: Awaited<ReturnType<typeof getSectionFaculty>>;
    coordinators?: Staff[];
  } = {};
  if (subSlug === "faculty-by-department") out.faculty = await getSectionFaculty(view.key);
  if (subSlug.includes("coordinators") || subSlug.endsWith("-cca")) out.coordinators = await getSectionCoordinators(view.key);
  return out;
}

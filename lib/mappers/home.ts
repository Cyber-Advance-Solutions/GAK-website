/**
 * Homepage + site chrome: backend rows -> the props the existing components expect.
 * Mirrors the admin panel's homepage simulator (gak_admin_dashboard/components/homepage/sim/useSimHomepageData.ts)
 * so the website shows exactly what the admin previews.
 */
import { api, asJson, asList, assetUrl, byOrder, isLive } from "@/lib/api";
import type { AchieverPoster } from "@/components/HighAchieversSection";
import type { HomepageVideo } from "@/components/OverviewSection";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2026-06-12" -> { day: 12, month: 5 } without timezone drift */
function parseDate(iso?: string | null): { y: number; m: number; d: number } | null {
  const match = String(iso ?? "").match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (match) return { y: +match[1], m: +match[2] - 1, d: +match[3] };
  const dt = new Date(String(iso ?? ""));
  return isNaN(dt.getTime()) ? null : { y: dt.getFullYear(), m: dt.getMonth(), d: dt.getDate() };
}

/** "12 Jun" */
export function shortDate(iso?: string | null): string {
  const p = parseDate(iso);
  return p ? `${String(p.d).padStart(2, "0")} ${MONTHS[p.m]}` : String(iso ?? "");
}

/** { day: "05", month: "OCT" } */
export function dayMonth(iso?: string | null): { day: string; month: string } {
  const p = parseDate(iso);
  return p ? { day: String(p.d).padStart(2, "0"), month: MONTHS[p.m].toUpperCase() } : { day: "", month: "" };
}

const isRealLink = (href?: string | null) => Boolean(href && href.trim() && href.trim() !== "#");

// ---------------------------------------------------------------- types used by app/page.tsx
export type HomeStream = { id: string; name: string; tag: string; description: string; image: string; href: string };
export type HomeWelcome = { eyebrow: string; heading: string; description: string };
export type HomePrincipal = { eyebrow: string; quote: string; name: string; role: string; photo: string };
export type HomeVisionMission = {
  intro: string;
  visionHeading: string;
  visionText: string;
  missionHeading: string;
  missionText: string;
};
/** caption = section title; captions[i] = text for images[i] ("" when the admin left it empty) */
export type HomeCampusBlock = { id: string; key: string; caption: string; images: string[]; captions: string[] };
export type HomeNotice = { id: string; date: string; title: string; href: string; external: boolean };
export type HomeEvent = { id: string; day: string; month: string; title: string };
export type HomeAdmissions = {
  eyebrow: string;
  heading: string;
  description: string;
  primaryText: string;
  primaryHref: string;
  secondaryText: string;
  secondaryHref: string;
};

export type HomeData = {
  heroSlides: string[];
  achievers: AchieverPoster[];
  video: HomepageVideo | null;
  welcome: HomeWelcome | null;
  streams: HomeStream[];
  principal: HomePrincipal | null;
  visionMission: HomeVisionMission | null;
  campusHeading: string;
  campus: HomeCampusBlock[];
  notices: HomeNotice[];
  events: HomeEvent[];
  admissions: HomeAdmissions | null;
};

/** Today as YYYY-MM-DD in Pakistan time, so an event stays "upcoming" for the whole school day */
const todayPk = () => new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Karachi" }).format(new Date());

function upcomingEvents(calendar: unknown, events: unknown, limit: number): HomeEvent[] {
  const today = todayPk();
  const fromCalendar = asList(calendar)
    .filter((e) => e.isEnabled !== false && e.startDate && String(e.endDate || e.startDate).slice(0, 10) >= today)
    .map((e) => ({ id: String(e.id), date: String(e.startDate).slice(0, 10), title: String(e.title || ""), order: Number(e.order ?? 0) }));
  const fromEvents = asList(events)
    .filter((e) => isLive(e) && !e.isArchived && !e.showOnLatest && e.date && String(e.date).slice(0, 10) >= today)
    .map((e) => ({ id: String(e.id), date: String(e.date).slice(0, 10), title: String(e.title || ""), order: Number(e.displayOrder ?? 0) }));
  return [...fromCalendar, ...fromEvents]
    .filter((e) => e.title)
    .sort((a, b) => a.date.localeCompare(b.date) || a.order - b.order)
    .slice(0, limit)
    .map((e) => ({ id: e.id, ...dayMonth(e.date), title: e.title }));
}

const one = (v: any) => (Array.isArray(v) ? v[0] : v) || null;

export async function loadHomeData(): Promise<HomeData> {
  const [banners, achievers, video, overview, streams, principal, vm, campus, news, events, admission, calendar] = await Promise.all([
    api<any>("/banners", []),
    api<any>("/high-achievers", []),
    api<any>("/site-settings/homepageVideo", null),
    api<any>("/overview", null),
    api<any>("/streams", []),
    api<any>("/messages/role/principal", null),
    api<any>("/vision-mission", null),
    api<any>("/campus-life", []),
    api<any>("/news", []),
    api<any>("/events", []),
    api<any>("/homepage-admissions", null),
    api<any>("/academics/calendar", []), // admin "Upcoming Events Calendar"
  ]);

  const ov = one(overview);
  const pr = one(principal);
  const vmRow = one(vm);
  const adm = one(admission);
  const vid = one(video) as HomepageVideo | null;

  const campusRows = asList(campus).filter(isLive).sort(byOrder);

  return {
    // Hero: enabled banners with an image, by admin order (images only — the slider has no text)
    heroSlides: asList(banners)
      .filter((b) => isLive(b) && b.imageUrl)
      .sort(byOrder)
      .map((b) => assetUrl(b.imageUrl)),

    achievers: asList(achievers)
      .filter(isLive)
      .sort(byOrder)
      .filter((a) => a.imageUrl)
      .map((a) => ({
        id: String(a.id),
        title: a.title || "",
        badge: a.sessionYear || "",
        subtitle: a.description || "",
        image: assetUrl(a.imageUrl),
      })),

    video: vid ? { ...vid, thumbnailUrl: assetUrl(vid.thumbnailUrl) } : null,

    welcome:
      ov && isLive(ov) ? { eyebrow: ov.badge || "", heading: ov.heading || "", description: ov.description || "" } : null,

    streams: asList(streams)
      .filter(isLive)
      .sort(byOrder)
      .map((s) => ({
        id: String(s.id),
        name: s.name || "",
        tag: s.tagline || "",
        description: s.description || "",
        image: assetUrl(s.imageUrl),
        href: s.exploreLink || "#",
      })),

    principal:
      pr && isLive(pr)
        ? {
            eyebrow: pr.roleTitle || "",
            quote: pr.quote || "",
            name: pr.personName || "",
            role: pr.designation || "",
            photo: assetUrl(pr.profileImage),
          }
        : null,

    visionMission:
      vmRow && isLive(vmRow)
        ? {
            intro: vmRow.introDescription || "",
            visionHeading: vmRow.visionHeading || "Vision",
            visionText: vmRow.visionText || "",
            missionHeading: vmRow.missionHeading || "Mission",
            missionText: vmRow.missionText || "",
          }
        : null,

    campusHeading: campusRows.find((c) => c.subtitle)?.subtitle || "",
    campus: campusRows
      .map((c) => {
        // Each photo is a URL string (old data) or { url, isEnabled, caption }; disabled photos are skipped
        const photos = asJson<any[]>(c.images, [])
          .map((i: any) =>
            typeof i === "string"
              ? { url: i, caption: "", on: true }
              : { url: i?.url || "", caption: String(i?.caption || "").trim(), on: i?.isEnabled !== false }
          )
          .filter((p) => p.url && p.on);
        return {
          id: String(c.id),
          key: String(c.sectionKey || c.id),
          caption: c.title || "",
          images: photos.map((p) => assetUrl(p.url)),
          captions: photos.map((p) => p.caption),
        };
      })
      .filter((c) => c.images.length > 0),

    // First 4 published notices, pinned first, then admin order
    notices: asList(news)
      .filter(isLive)
      .sort((a, b) => Number(Boolean(b.isPinned)) - Number(Boolean(a.isPinned)) || byOrder(a, b))
      .slice(0, 4)
      .map((n) => {
        const href = isRealLink(n.attachmentUrl) ? assetUrl(n.attachmentUrl) : "/downloads";
        return { id: String(n.id), date: shortDate(n.date), title: n.title || "", href, external: /^https?:/i.test(href) };
      }),

    // "Events & Activities": the next 3 upcoming events — from the admin "Upcoming Events Calendar",
    // plus any homepage events (published, not Latest/Archive albums) — that have not ended yet
    events: upcomingEvents(calendar, events, 3),

    admissions:
      adm && isLive(adm)
        ? {
            eyebrow: adm.sessionYear || "",
            heading: adm.heading || "",
            description: adm.description || "",
            primaryText: adm.primaryBtnText || "",
            primaryHref: adm.primaryBtnLink || "/admissions",
            secondaryText: adm.secondaryBtnText || "",
            secondaryHref: adm.secondaryBtnLink || "/downloads",
          }
        : null,
  };
}

// ---------------------------------------------------------------- site settings (header / footer / tickers)
export type NavSetting = { key: string; label: string; href?: string; isVisible?: boolean; children?: NavSetting[] };

export type HeaderSettings = {
  logoUrl?: string;
  siteName?: string;
  phones?: string[];
  emails?: string[];
  contactHref?: string;
  portals?: { label?: string; teachersLabel?: string; teachersUrl?: string; studentsLabel?: string; studentsUrl?: string };
  navigation?: NavSetting[];
};

export type FooterLink = { label: string; href: string };
export type FooterSettings = {
  logoUrl?: string;
  schoolName?: string;
  description?: string;
  exploreHeading?: string;
  exploreLinks?: FooterLink[];
  parentsHeading?: string;
  parentsLinks?: FooterLink[];
  connectHeading?: string;
  connectLinks?: FooterLink[];
  copyrightText?: string;
  copyrightYear?: string;
  quotation?: string;
  whatsappUrl?: string;
};

export type ContactSettings = {
  whatsappUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  [k: string]: unknown;
};

/** One request for several site-settings keys: GET /site-settings?keys=a,b */
export async function loadSiteSettings<T extends Record<string, any>>(keys: string[]): Promise<Partial<T>> {
  const data = await api<Record<string, any>>(`/site-settings?keys=${keys.join(",")}`, {});
  return (data && typeof data === "object" ? data : {}) as Partial<T>;
}

import { api, asList } from "@/lib/api";

/**
 * Ticker at the top of every page.
 *  - Results: site-settings key "resultsStrip" (admin: Layout settings > Results strip)
 *  - APSACS calendar: GET /calendar-strip (strip settings + Academic Calendar entries per column)
 */

type ResultsStrip = {
  isVisible?: boolean;
  items?: { title: string; grades?: { label: string; count: number }[] }[];
};

type CalendarEntry = { id: string; date: string; endDate?: string | null; title: string };
type CalendarStrip = {
  isVisible?: boolean;
  title?: string;
  columns?: { key: string; label: string; subtitle?: string; entries?: CalendarEntry[] }[];
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const parts = (iso?: string | null) => {
  const m = String(iso ?? "").match(/^(\d{4})-(\d{2})-(\d{2})/);
  return m ? { m: +m[2] - 1, d: +m[3] } : null;
};

/** "2 Oct", "19–23 Oct", "28 Sep–3 Oct" */
function dateLabel(from: string, to?: string | null): string {
  const a = parts(from);
  if (!a) return from;
  const b = parts(to);
  if (!b || (a.m === b.m && a.d === b.d)) return `${a.d} ${MONTHS[a.m]}`;
  if (a.m === b.m) return `${a.d}–${b.d} ${MONTHS[a.m]}`;
  return `${a.d} ${MONTHS[a.m]}–${b.d} ${MONTHS[b.m]}`;
}

export default async function Marquee() {
  const [settings, calendar] = await Promise.all([
    api<{ resultsStrip?: ResultsStrip }>("/site-settings?keys=resultsStrip", {}),
    api<CalendarStrip | null>("/calendar-strip", null),
  ]);

  const words: string[] = [];

  const results = settings?.resultsStrip;
  if (results && results.isVisible !== false) {
    for (const item of asList<NonNullable<ResultsStrip["items"]>[number]>(results.items)) {
      words.push(item.title);
      for (const g of asList<{ label: string; count: number }>(item.grades)) words.push(`${g.label} Grades ${g.count}`);
    }
  }

  if (calendar && calendar.isVisible !== false) {
    const columns = asList<NonNullable<CalendarStrip["columns"]>[number]>(calendar.columns);
    if (calendar.title && columns.some((c) => asList(c.entries).length > 0)) words.push(calendar.title);
    for (const col of columns) {
      const entries = asList<CalendarEntry>(col.entries);
      if (!entries.length) continue;
      words.push(col.subtitle ? `${col.label} (${col.subtitle})` : col.label);
      for (const e of entries) words.push(`${dateLabel(e.date, e.endDate)} – ${e.title}`);
    }
  }

  if (words.length === 0) return null;

  return (
    <div className="marquee">
      <div className="mq-track">
        {[...words, ...words].map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>
    </div>
  );
}

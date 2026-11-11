// Shared building blocks for the school-section pages (/sections/* and their sub-pages).
// Markup and inline styles are the ones each section page used before it read from the backend.
import Link from "next/link";
import Image from "next/image";
import StaffCard from "@/components/StaffCard";
import type { Staff } from "@/lib/staff";
import type { OtherSection, SectionSubPage } from "@/lib/mappers/sections";

export function OtherSectionsCard({ others }: { others: OtherSection[] }) {
  if (!others.length) return null;
  return (
    <div className="factcard">
      <h4>Other sections</h4>
      <ul>
        {others.map((o) => (
          <li
            key={o.slug}
            title={o.sub ? `${o.name} - ${o.sub}` : o.name}
            style={{
              display: "block",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <Link href={`/sections/${o.slug}`} style={{ color: "var(--green-700)", fontWeight: 600 }}>
              {o.name}
            </Link>
            {o.sub && (
              <span
                style={{
                  fontWeight: 500,
                  color: "var(--ink-soft)",
                  marginLeft: "6px",
                }}
              >
                - {o.sub}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SubPagesCard({ title, base, pages, current }: { title: string; base: string; pages: SectionSubPage[]; current: string }) {
  if (!pages.length) return null;
  return (
    <div className="factcard">
      <h4>{title}</h4>
      <ul>
        {pages.map((p) => (
          <li key={p.slug} style={{ display: "block" }}>
            <Link
              href={`${base}/${p.slug}`}
              style={{ color: p.slug === current ? "var(--ink)" : "var(--green-700)", fontWeight: 600 }}
            >
              {p.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function StaffGrid({ people }: { people: Staff[] }) {
  return (
    <div className="staffgrid">
      {people.map((s, i) => (
        <StaffCard key={s.name + s.photo + i} s={s} />
      ))}
    </div>
  );
}

const subLabel: React.CSSProperties = {
  fontSize: "0.72rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--gold-600)",
  marginBottom: 10,
};

/** Faculty grouped by department (optionally coordinators listed first under their own label) */
export function FacultyByDepartment({
  departments,
  splitCoordinators = false,
}: {
  departments: { name: string; teachers: (Staff & { isCoordinator?: boolean })[] }[];
  splitCoordinators?: boolean;
}) {
  if (!departments.length) return <p style={{ color: "var(--ink-soft)" }}>Faculty details will be published soon.</p>;
  return (
    <>
      {departments.map((d) => {
        if (!splitCoordinators) {
          return (
            <div className="deptblock" key={d.name} style={{ marginBottom: 34 }}>
              <h3>{d.name}</h3>
              <StaffGrid people={d.teachers} />
            </div>
          );
        }
        const coordinators = d.teachers.filter((s) => s.isCoordinator);
        const teachers = d.teachers.filter((s) => !s.isCoordinator);
        return (
          <div className="deptblock" key={d.name} style={{ marginBottom: 34 }}>
            <h3>{d.name}</h3>
            {coordinators.length > 0 && (
              <>
                <div style={{ ...subLabel, marginTop: 4 }}>Coordinator</div>
                <div className="staffgrid" style={{ marginBottom: teachers.length > 0 ? 18 : 0 }}>
                  {coordinators.map((s, i) => <StaffCard key={s.name + s.photo + i} s={s} />)}
                </div>
              </>
            )}
            {teachers.length > 0 && (
              <>
                {coordinators.length > 0 && <div style={subLabel}>Teachers</div>}
                <StaffGrid people={teachers} />
              </>
            )}
          </div>
        );
      })}
    </>
  );
}

/** Head message paragraphs: first without top margin, the rest spaced like the original blockquotes */
export function MessageParagraphs({ paras, lastStyle }: { paras: string[]; lastStyle?: React.CSSProperties }) {
  return (
    <>
      {paras.map((p, i) => (
        <p
          key={i}
          style={{
            ...(i > 0 ? { marginTop: "1rem" } : null),
            ...(lastStyle && paras.length > 1 && i === paras.length - 1 ? lastStyle : null),
          }}
        >
          {p}
        </p>
      ))}
    </>
  );
}

/** "Section Head" quote block used by every section main page */
export function HeadQuote({
  head,
  eyebrow,
  footRole,
  portraitStyle = "wrap",
  blockquoteStyle,
  footMarginTop,
  lastParagraphStyle,
  single = false,
}: {
  head: Staff & { message: string[] };
  eyebrow: string;
  footRole?: string;
  /** "wrap": round portrait wrapper (most pages); "image": round image inside a square wrapper */
  portraitStyle?: "wrap" | "image";
  blockquoteStyle?: React.CSSProperties;
  footMarginTop?: string;
  lastParagraphStyle?: React.CSSProperties;
  /** render the message as plain text instead of paragraphs (Middle Boys) */
  single?: boolean;
}) {
  return (
    <div className="quoteband" style={{ borderRadius: "var(--r)" }}>
      <div className="qb" style={{ padding: 32, alignItems: "flex-start" }}>
        <div
          className="qb-portrait"
          style={{
            width: 110,
            height: 110,
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#f0f0f0",
            ...(portraitStyle === "wrap" ? { borderRadius: "50%", flexShrink: 0 } : null),
          }}
        >
          <Image
            src={head.photo}
            alt={head.name}
            fill
            sizes="110px"
            style={portraitStyle === "wrap" ? { objectFit: "cover" } : { borderRadius: "50%", objectFit: "cover" }}
          />
        </div>
        <div className="qb-body">
          <span className="eyebrow">{eyebrow}</span>
          <blockquote style={blockquoteStyle}>
            {single ? head.message.join(" ") : <MessageParagraphs paras={head.message} lastStyle={lastParagraphStyle} />}
          </blockquote>
          <div className="qb-foot" style={footMarginTop ? { marginTop: footMarginTop } : undefined}>
            <div className="qb-who">
              <div className="nm">{head.name}</div>
              {(footRole ?? head.role) && <div className="rl">{footRole ?? head.role}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const QUOTE_PLAIN: React.CSSProperties = {
  fontSize: "0.85rem",
  borderLeft: "none",
  paddingLeft: 0,
  marginTop: "1rem",
  fontStyle: "normal",
};

/** Bullet list with gold dots (facilities on the main section pages) */
export function DotList({ items, style }: { items: string[]; style?: React.CSSProperties }) {
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        paddingLeft: 0,
        listStyle: "none",
        ...style,
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            display: "flex",
            gap: "0.75rem",
            alignItems: "flex-start",
            padding: "0.85rem 1rem",
            background: "var(--paper)",
            border: "1px solid var(--line)",
            borderRadius: "var(--r)",
            fontSize: "0.93rem",
            color: "var(--ink)",
          }}
        >
          <span
            style={{
              flexShrink: 0,
              width: 8,
              height: 8,
              marginTop: 6,
              borderRadius: "50%",
              background: "var(--gold-500)",
            }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Photo grid (activities) */
export function PhotoGrid({
  items,
  centered = false,
}: {
  items: { label: string; photo: string; id?: string }[];
  /** Pre-School / APSIS sub-page style: flex-centered, image not cropped */
  centered?: boolean;
}) {
  return (
    <div className="classgrid">
      {items
        .filter((a) => a.photo)
        .map((a, i) => (
          <div className="figure" key={(a.id || a.label + a.photo) + i}>
            <div
              className="fimg"
              style={
                centered
                  ? { backgroundColor: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center" }
                  : { backgroundColor: "#f0f0f0" }
              }
            >
              <Image
                src={a.photo}
                alt={a.label}
                fill
                sizes="(max-width: 820px) 100vw, 33vw"
                style={centered ? undefined : { objectFit: "cover" }}
              />
            </div>
            <figcaption style={{ fontSize: "0.9rem", lineHeight: "1.2" }}>{a.label}</figcaption>
          </div>
        ))}
    </div>
  );
}

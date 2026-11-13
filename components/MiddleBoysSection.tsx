import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import { DotList, HeadQuote, OtherSectionsCard, QUOTE_PLAIN } from "@/components/SectionParts";
import { CalendarTable } from "@/components/SectionTables";
import { facilityGroups, facts, type SectionView } from "@/lib/mappers/sections";

export default function MiddleBoysSection({ d }: { d: SectionView }) {
  const groups = facilityGroups(d);
  return (
    <>
      <PageHero
        eyebrow={d.hero.classes}
        title={d.hero.title}
        intro={d.hero.description}
        image={d.hero.image}
        crumb={[
          { label: "Quick Links", href: "/quick-links" },
          { label: d.name },
        ]}
      />

      <section className="sec">
        <Editorial
          rail={
            <>
              <FactCard
                title="Section facts"
                rows={facts([
                  ["Section Head", d.headFact],
                  ["Classes", d.classesRange],
                  ["Stream", d.stream],
                  ["Timings", d.timings],
                ])}
              />
              <OtherSectionsCard others={d.others} />
            </>
          }
        >
          {/* ── Section Head Message ── */}
          {d.head && (
            <section>
              <SectionHead eyebrow="Leadership" title="Section Head" />
              <HeadQuote
                head={d.head}
                eyebrow={d.headEyebrow || "Message from the Section Head"}
                blockquoteStyle={QUOTE_PLAIN}
                footMarginTop="1.5rem"
                footRole={[d.head.role, d.head.qualification].filter(Boolean).join(" — ")}
                single
              />
            </section>
          )}

          {/* ── Activities (calendar) ── */}
          {d.activities.length > 0 && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Academic Year 2026–27" title="Activities" />
              <CalendarTable items={d.activities} />
            </section>
          )}

          {/* ── Achievements ── */}
          {d.achievers.length > 0 && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Recognition" title="Achievements" />
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  paddingLeft: 0,
                  listStyle: "none",
                }}
              >
                {d.achievers.map((item, i) => (
                  <li
                    key={item.id + i}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "center",
                      padding: "0.85rem 1.25rem",
                      background: "var(--green-tint)",
                      border: "1px solid var(--line)",
                      borderRadius: "var(--r)",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--green-900)",
                    }}
                  >
                    <span style={{ fontSize: "1.3rem" }}>🏆</span>
                    {item.name}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ── Facilities ── */}
          {groups.length > 0 && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Campus" title="Facilities" />
              {groups.map((g, gi) => (
                <div key={g.name + gi}>
                  {g.name && (
                    <h3 style={gi === 0 ? { marginBottom: "1rem", marginTop: "1.5rem" } : { marginBottom: "1rem" }}>{g.name}</h3>
                  )}
                  <DotList items={g.items.map((f) => f.text)} style={gi < groups.length - 1 ? { marginBottom: "1.5rem" } : undefined} />
                </div>
              ))}
            </section>
          )}
        </Editorial>
      </section>
    </>
  );
}

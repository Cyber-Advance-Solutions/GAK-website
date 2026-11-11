import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import { DotList, HeadQuote, OtherSectionsCard, StaffGrid } from "@/components/SectionParts";
import { CalendarTable } from "@/components/SectionTables";
import { facts, groupBy, type SectionView } from "@/lib/mappers/sections";

export default function MiddleGirlsSection({ d }: { d: SectionView }) {
  const holders = groupBy(d.achievers, (a) => a.category);
  return (
    <>
      <PageHero
        eyebrow={d.sub}
        title={d.name}
        intro={d.intro}
        image={d.banner}
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
                  ["Section Head", d.head?.name ?? ""],
                  ["Classes", d.classesRange],
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
                portraitStyle="image"
                blockquoteStyle={{ fontSize: "0.85rem" }}
                lastParagraphStyle={{ fontStyle: "italic", fontWeight: "bold" }}
              />
            </section>
          )}

          {/* ── Activities (calendar) ── */}
          {d.activities.length > 0 && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Calendar" title="Activities" />
              <CalendarTable items={d.activities} />
            </section>
          )}

          {/* ── High Achievers / Position Holders ── */}
          {holders.length > 0 && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Awards" title="Position Holders" />
              {holders.map((cls, ci) => (
                <div key={cls.name + ci} style={{ marginBottom: "2rem" }}>
                  {cls.name && <h3 style={{ marginBottom: "1rem" }}>{cls.name}</h3>}
                  <StaffGrid people={cls.items} />
                </div>
              ))}
            </section>
          )}

          {/* ── Facilities ── */}
          {d.facilities.length > 0 && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Campus" title="Facilities" />
              <DotList items={d.facilities.map((f) => f.text)} />
            </section>
          )}
        </Editorial>
      </section>
    </>
  );
}

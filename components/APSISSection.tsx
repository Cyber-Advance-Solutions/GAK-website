import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import StaffCard from "@/components/StaffCard";
import { DotList, HeadQuote, OtherSectionsCard, PhotoGrid, QUOTE_PLAIN } from "@/components/SectionParts";
import { facilityGroups, facts, groupBy, type SectionView } from "@/lib/mappers/sections";

export default function APSISSection({ d }: { d: SectionView }) {
  const labels = (d.extra.factLabels || {}) as { head?: string; deputyHead?: string };
  const headLabel = labels.head || "Vice Principal";
  const achieverGroups = groupBy(d.achievers, (a) => a.competition);
  const facilityGroupList = facilityGroups(d);

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
                  [headLabel, d.head?.name ?? ""],
                  [labels.deputyHead || "Section Head", d.deputyName],
                  ["Curriculum", d.curriculum],
                ])}
              />
              <OtherSectionsCard others={d.others} />
            </>
          }
        >
          {/* ── Vice Principal Message ── */}
          {d.head && (
            <section>
              <SectionHead eyebrow="Leadership" title={headLabel} />
              <div style={{ marginBottom: "3rem" }}>
                <HeadQuote
                  head={d.head}
                  eyebrow={d.headEyebrow || `Message from the ${headLabel}`}
                  blockquoteStyle={QUOTE_PLAIN}
                  footMarginTop="2rem"
                  lastParagraphStyle={{
                    marginTop: "1.5rem",
                    fontWeight: 600,
                    textAlign: "center",
                    color: "var(--green-700)",
                  }}
                />
              </div>
            </section>
          )}

          {/* ── Activities (photo grid) ── */}
          {d.activities.length > 0 && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Curriculum" title="Activities" />
              <PhotoGrid items={d.activities} />
            </section>
          )}

          {/* ── High Achievers ── */}
          {d.achievers.length > 0 && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Recognition" title="High Achievers" />
              {achieverGroups.map((g, gi) => (
                <div key={g.name + gi}>
                  <h3 style={{ margin: gi === 0 ? "1.5rem 0 1rem" : "2rem 0 1rem" }}>{g.items[0].heading}</h3>
                  <div className="staffgrid">
                    {g.items.map((a, i) => (
                      <StaffCard key={a.id + i} s={{ ...a, role: a.description }} />
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* ── Facilities ── */}
          {facilityGroupList.length > 0 && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Campus" title="Facilities" />
              {facilityGroupList.map((g, gi) => (
                <div key={g.name + gi}>
                  {g.name && <h3 style={{ margin: gi === 0 ? "1.5rem 0 1rem" : "2rem 0 1rem" }}>{g.name}</h3>}
                  <DotList items={g.items.map((f) => f.text)} />
                </div>
              ))}
            </section>
          )}
        </Editorial>
      </section>
    </>
  );
}

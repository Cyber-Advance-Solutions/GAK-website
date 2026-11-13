import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import { DotList, HeadQuote, OtherSectionsCard, QUOTE_PLAIN } from "@/components/SectionParts";
import { facilityGroups, facts, type SectionView } from "@/lib/mappers/sections";

/** Senior Boys / Senior Girls main page (both sections share this layout) */
export function SeniorSection({ d }: { d: SectionView }) {
  const labels = (d.extra.factLabels || {}) as { headOnMainPage?: string };
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
                  [labels.headOnMainPage || "Section Head", d.head?.name ?? ""],
                  ["Deputy Head", d.deputyName],
                  ["Classes", d.classesRange],
                  ["Curriculum", d.curriculum],
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
              />
            </section>
          )}

          {/* ── Facilities ── */}
          {groups.length > 0 && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Campus" title="Facilities" />
              {groups.map((g, gi) => (
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

export default function SeniorBoysSection({ d }: { d: SectionView }) {
  return <SeniorSection d={d} />;
}

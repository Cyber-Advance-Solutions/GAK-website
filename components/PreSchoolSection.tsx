import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import PreFacilities from "@/components/pre-school/PreFacilities";
import { HeadQuote, OtherSectionsCard, PhotoGrid, StaffGrid } from "@/components/SectionParts";
import { facts, type SectionView } from "@/lib/mappers/sections";

export default function PreSchoolSection({ d }: { d: SectionView }) {
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
              />
            </section>
          )}

          {/* ── Activities ── */}
          {d.activities.length > 0 && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Curriculum" title="Activities" />
              <PhotoGrid items={d.activities} centered />
            </section>
          )}

          {/* ── High Achievers ── */}
          {d.achievers.length > 0 && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Recognition" title="High Achievers" />
              <StaffGrid people={d.achievers} />
            </section>
          )}

          {/* ── Facilities ── */}
          {d.facilities.length > 0 && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Campus" title="Facilities" />
              <PreFacilities items={d.facilities} />
              <Link
                className="link-arrow"
                href="/admissions"
                style={{ marginTop: "2rem", display: "flex" }}
              >
                Apply for admission
              </Link>
            </section>
          )}
        </Editorial>
      </section>
    </>
  );
}

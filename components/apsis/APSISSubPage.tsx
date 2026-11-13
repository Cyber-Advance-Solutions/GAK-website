import Link from "next/link";
import { ArrowRight, Building2, Monitor } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import StaffCard from "@/components/StaffCard";
import { FacultyByDepartment, PhotoGrid, StaffGrid, SubPagesCard } from "@/components/SectionParts";
import type { Staff } from "@/lib/staff";
import {
  facilityGroups,
  facts,
  groupBy,
  subFacilityHeading,
  supportedSubPages,
  type SectionSubPage,
  type SectionView,
} from "@/lib/mappers/sections";

/** Sub-page slugs this component can render (others listed in the backend stay unavailable) */
export const APSIS_SUPPORTED = ["section-head", "coordinators", "faculty-by-department", "activities", "high-achievers", "facilities"];

type Extra = {
  faculty?: { name: string; teachers: (Staff & { isCoordinator?: boolean })[] }[];
  coordinators?: Staff[];
};

function SectionBody({ slug, d, extra }: { slug: string; d: SectionView; extra: Extra }) {
  switch (slug) {
    case "section-head":
      return <StaffGrid people={d.deputies} />;

    case "coordinators":
      return <StaffGrid people={extra.coordinators ?? []} />;

    case "faculty-by-department":
      return <FacultyByDepartment departments={extra.faculty ?? []} />;

    case "activities":
      return <PhotoGrid items={d.activities} centered />;

    case "high-achievers":
      return (
        <>
          {groupBy(d.achievers, (a) => a.competition).map((g, gi) => (
            <div style={{ marginBottom: "3rem" }} key={g.name + gi}>
              <h4 style={{ textAlign: "center", marginBottom: "1rem" }}>
                {g.items[0].category ? (
                  <>
                    {g.items[0].category}
                    <br />
                  </>
                ) : null}
                {g.name}
              </h4>
              <div className="staffgrid">
                {g.items.map((a, i) => (
                  <StaffCard key={a.id + i} s={{ ...a, role: a.description }} />
                ))}
              </div>
            </div>
          ))}
        </>
      );

    case "facilities": {
      const groups = facilityGroups(d);
      const icons = [Building2, Monitor];
      return (
        <>
          <div className="grid g2">
            {groups.map((g, gi) => {
              const Icon = icons[gi % icons.length];
              return (
                <div key={g.name + gi}>
                  <h3 style={{ marginBottom: 12, fontSize: "1.05rem", display: "flex", alignItems: "center", gap: 8 }}>
                    <Icon size={18} strokeWidth={1.8} /> {subFacilityHeading(d, g.name, gi, ["Campus & Infrastructure", "Technology & Learning"])}
                  </h3>
                  <div className="prose"><ul>{g.items.map((f) => <li key={f.id}>{f.text}</li>)}</ul></div>
                </div>
              );
            })}
          </div>
          <Link className="link-arrow" href="/admissions" style={{ marginTop: "2rem", display: "flex" }}>Apply for admission <ArrowRight size={16} /></Link>
        </>
      );
    }

    default:
      return null;
  }
}

export default function APSISSubPage({ d, sub, extra = {} }: { d: SectionView; sub: SectionSubPage; extra?: Extra }) {
  const labels = (d.extra.factLabels || {}) as { head?: string; deputyHead?: string };
  return (
    <>
      <PageHero
        eyebrow={sub.eyebrow}
        title={sub.label}
        image={d.banner}
        crumb={[
          { label: "Quick Links", href: "/quick-links" },
          { label: d.name, href: `/sections/${d.slug}` },
          { label: sub.label },
        ]}
      />

      <section className="sec">
        <Editorial
          rail={
            <>
              <FactCard
                title="Section facts"
                rows={facts([
                  [labels.head || "Vice Principal", d.headFact],
                  [labels.deputyHead || "Section Head", d.deputyName],
                  ["Curriculum", d.curriculum],
                ])}
              />
              <SubPagesCard title={`${d.name} pages`} base={`/sections/${d.slug}`} pages={supportedSubPages(d, APSIS_SUPPORTED)} current={sub.slug} />
            </>
          }
        >
          <section>
            <SectionHead eyebrow={sub.eyebrow} title={sub.label} />
            <SectionBody slug={sub.slug} d={d} extra={extra} />
          </section>
        </Editorial>
      </section>
    </>
  );
}

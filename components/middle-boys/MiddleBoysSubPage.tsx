import Link from "next/link";
import { ArrowRight, Trophy, Building2, GraduationCap } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import { FacultyByDepartment, StaffGrid, SubPagesCard } from "@/components/SectionParts";
import { NumberedCalendarTable } from "@/components/SectionTables";
import type { Staff } from "@/lib/staff";
import {
  facilityGroups,
  facts,
  subFacilityHeading,
  supportedSubPages,
  type SectionSubPage,
  type SectionView,
} from "@/lib/mappers/sections";

export const MIDDLE_BOYS_SUPPORTED = ["deputy-section-heads", "faculty-by-department", "activities", "achievements", "facilities"];

type Extra = { faculty?: { name: string; teachers: (Staff & { isCoordinator?: boolean })[] }[] };

function SectionBody({ slug, d, extra }: { slug: string; d: SectionView; extra: Extra }) {
  switch (slug) {
    case "deputy-section-heads":
      return <StaffGrid people={d.deputies} />;

    case "faculty-by-department":
      return <FacultyByDepartment departments={extra.faculty ?? []} splitCoordinators />;

    case "activities":
      return <NumberedCalendarTable items={d.activities} />;

    case "achievements":
      return (
        <ul className="achlist">
          {d.achievers.map((a, i) => (
            <li key={a.id + i}><Trophy size={18} strokeWidth={1.8} /> {a.name}</li>
          ))}
        </ul>
      );

    case "facilities": {
      const icons = [Building2, GraduationCap];
      return (
        <>
          <div className="grid g2">
            {facilityGroups(d).map((g, gi) => {
              const Icon = icons[gi % icons.length];
              return (
                <div key={g.name + gi}>
                  <h3 style={{ marginBottom: 12, fontSize: "1.05rem", display: "flex", alignItems: "center", gap: 8 }}>
                    <Icon size={18} strokeWidth={1.8} /> {subFacilityHeading(d, g.name, gi, ["Campus & Infrastructure", "Academic & Development Framework"])}
                  </h3>
                  <div className="prose"><ul>{g.items.map((f) => <li key={f.id}>{f.text}</li>)}</ul></div>
                </div>
              );
            })}
          </div>
          <Link className="link-arrow" href="/admissions">Apply for admission <ArrowRight size={16} /></Link>
        </>
      );
    }

    default:
      return null;
  }
}

export default function MiddleBoysSubPage({ d, sub, extra = {} }: { d: SectionView; sub: SectionSubPage; extra?: Extra }) {
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
                  ["Section head", d.headFact],
                  ["Classes", d.classesRange],
                  ["Stream", d.stream],
                  ["Timings", d.timings],
                ])}
              />
              <SubPagesCard title="Middle Boys pages" base={`/sections/${d.slug}`} pages={supportedSubPages(d, MIDDLE_BOYS_SUPPORTED)} current={sub.slug} />
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

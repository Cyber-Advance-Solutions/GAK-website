import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import { FacultyByDepartment, PhotoGrid, StaffGrid, SubPagesCard } from "@/components/SectionParts";
import type { Staff } from "@/lib/staff";
import { facts, supportedSubPages, type SectionSubPage, type SectionView } from "@/lib/mappers/sections";

export const JUNIOR_SUPPORTED = ["deputy-section-heads", "faculty-by-department", "activities", "high-achievers"];

type Extra = { faculty?: { name: string; teachers: (Staff & { isCoordinator?: boolean })[] }[] };

function SectionBody({ slug, d, extra }: { slug: string; d: SectionView; extra: Extra }) {
  switch (slug) {
    case "deputy-section-heads":
      return <StaffGrid people={d.deputies} />;
    case "faculty-by-department":
      return <FacultyByDepartment departments={extra.faculty ?? []} splitCoordinators />;
    case "activities":
      return <PhotoGrid items={d.activities} />;
    case "high-achievers":
      return <StaffGrid people={d.achievers} />;
    default:
      return null;
  }
}

export default function JuniorSubPage({ d, sub, extra = {} }: { d: SectionView; sub: SectionSubPage; extra?: Extra }) {
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
                  ["Section Head", d.headFact],
                  ["Classes", d.classesRange],
                  ["Curriculum", d.curriculum],
                ])}
              />
              <SubPagesCard title={`${d.name} pages`} base={`/sections/${d.slug}`} pages={supportedSubPages(d, JUNIOR_SUPPORTED)} current={sub.slug} />
            </>
          }
        >
          <section>
            <SectionHead eyebrow={sub.eyebrow} title={sub.label} />
            <SectionBody slug={sub.slug} d={d} extra={extra} />
          </section>

          {sub.slug === "high-achievers" && (
            <section>
              <Link className="link-arrow" href="/admissions" style={{ display: "flex" }}>Apply for admission <ArrowRight size={16} /></Link>
            </section>
          )}
        </Editorial>
      </section>
    </>
  );
}

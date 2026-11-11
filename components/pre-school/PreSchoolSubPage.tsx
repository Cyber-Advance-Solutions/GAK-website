import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import PreFacilities from "@/components/pre-school/PreFacilities";
import { FacultyByDepartment, PhotoGrid, StaffGrid, SubPagesCard } from "@/components/SectionParts";
import type { Staff } from "@/lib/staff";
import { facts, supportedSubPages, type SectionSubPage, type SectionView } from "@/lib/mappers/sections";

export const PRE_SUPPORTED = ["deputy-section-head", "coordinators", "faculty-by-department", "activities", "high-achievers", "facilities"];

type Extra = {
  faculty?: { name: string; teachers: (Staff & { isCoordinator?: boolean })[] }[];
  coordinators?: Staff[];
};

function SectionBody({ slug, d, extra }: { slug: string; d: SectionView; extra: Extra }) {
  switch (slug) {
    case "deputy-section-head":
      return <StaffGrid people={d.deputies} />;
    case "coordinators":
      return <StaffGrid people={extra.coordinators ?? []} />;
    case "faculty-by-department":
      return <FacultyByDepartment departments={extra.faculty ?? []} />;
    case "activities":
      return <PhotoGrid items={d.activities} centered />;
    case "high-achievers":
      return <StaffGrid people={d.achievers} />;
    case "facilities":
      return (
        <>
          <PreFacilities items={d.facilities} />
          <Link className="link-arrow" href="/admissions" style={{ marginTop: "2rem", display: "flex" }}>Apply for admission <ArrowRight size={16} /></Link>
        </>
      );
    default:
      return null;
  }
}

export default function PreSchoolSubPage({ d, sub, extra = {} }: { d: SectionView; sub: SectionSubPage; extra?: Extra }) {
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
                  ["Section head", d.head?.name ?? ""],
                  ["Classes", d.classesRange],
                  ["Timings", d.timings],
                ])}
              />
              <SubPagesCard title={`${d.name} pages`} base={`/sections/${d.slug}`} pages={supportedSubPages(d, PRE_SUPPORTED)} current={sub.slug} />
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

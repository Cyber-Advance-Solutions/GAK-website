import Link from "next/link";
import { ArrowRight, Building2, BookOpen } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import { FacultyByDepartment, StaffGrid, SubPagesCard } from "@/components/SectionParts";
import { CcaTable } from "@/components/SectionTables";
import type { Staff } from "@/lib/staff";
import {
  facilityGroups,
  facts,
  subFacilityHeading,
  supportedSubPages,
  type SectionSubPage,
  type SectionView,
} from "@/lib/mappers/sections";

export const SENIOR_BOYS_SUPPORTED = ["deputy-section-head", "faculty-by-department", "cca-activities", "facilities"];

export type SeniorExtra = {
  faculty?: { name: string; teachers: (Staff & { isCoordinator?: boolean })[] }[];
  coordinators?: Staff[];
};

/** Body of the Senior Boys / Senior Girls sub-pages */
export function SeniorBody({ slug, d, extra }: { slug: string; d: SectionView; extra: SeniorExtra }) {
  switch (slug) {
    case "deputy-section-head":
    case "deputy-section-heads":
      return <StaffGrid people={d.deputies} />;

    case "subject-coordinators":
      return <StaffGrid people={extra.coordinators ?? []} />;

    case "faculty-by-department":
      return <FacultyByDepartment departments={extra.faculty ?? []} />;

    case "cca-activities":
      return <CcaTable items={d.activities} />;

    case "facilities": {
      const intro = String(d.extra.facilitiesIntro || "");
      const icons = [Building2, BookOpen];
      return (
        <>
          {intro && <p style={{ marginBottom: "1.5rem", color: "var(--ink-soft)" }}>{intro}</p>}
          <div className="grid g2">
            {facilityGroups(d).map((g, gi) => {
              const Icon = icons[gi % icons.length];
              return (
                <div key={g.name + gi}>
                  <h3 style={{ marginBottom: 12, fontSize: "1.05rem", display: "flex", alignItems: "center", gap: 8 }}>
                    <Icon size={18} strokeWidth={1.8} /> {subFacilityHeading(d, g.name, gi, ["Campus & Infrastructure", "Academic & Student Development"])}
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

/** Shared Senior sub-page layout */
export function SeniorSubLayout({
  d,
  sub,
  extra,
  supported,
  railTitle,
  heroImage,
}: {
  d: SectionView;
  sub: SectionSubPage;
  extra: SeniorExtra;
  supported: string[];
  railTitle: string;
  heroImage: string;
}) {
  const labels = (d.extra.factLabels || {}) as { headOnSubPages?: string };
  return (
    <>
      <PageHero
        eyebrow={sub.eyebrow}
        title={sub.label}
        crumb={[
          { label: "Quick Links", href: "/quick-links" },
          { label: d.name, href: `/sections/${d.slug}` },
          { label: sub.label },
        ]}
        image={heroImage}
      />

      <section className="sec">
        <Editorial
          rail={
            <>
              <FactCard
                title="Section facts"
                rows={facts([
                  [labels.headOnSubPages || "Section Head", d.head?.name ?? ""],
                  ["Deputy Head", d.deputyName],
                  ["Classes", d.classesRange],
                  ["Curriculum", d.curriculum],
                ])}
              />
              <SubPagesCard title={railTitle} base={`/sections/${d.slug}`} pages={supportedSubPages(d, supported)} current={sub.slug} />
            </>
          }
        >
          <section>
            <SectionHead eyebrow={sub.eyebrow} title={sub.label} />
            <SeniorBody slug={sub.slug} d={d} extra={extra} />
          </section>
        </Editorial>
      </section>
    </>
  );
}

export default function SeniorBoysSubPage({ d, sub, extra = {} }: { d: SectionView; sub: SectionSubPage; extra?: SeniorExtra }) {
  return (
    <SeniorSubLayout d={d} sub={sub} extra={extra} supported={SENIOR_BOYS_SUPPORTED} railTitle="Senior Boys pages" heroImage={d.banner} />
  );
}

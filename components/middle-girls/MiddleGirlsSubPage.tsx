import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import StaffCard from "@/components/StaffCard";
import { FacultyByDepartment, StaffGrid, SubPagesCard } from "@/components/SectionParts";
import { NumberedCalendarTable } from "@/components/SectionTables";
import type { Staff } from "@/lib/staff";
import {
  facilityGroups,
  facts,
  groupBy,
  supportedSubPages,
  type SectionSubPage,
  type SectionView,
} from "@/lib/mappers/sections";

export const MIDDLE_GIRLS_SUPPORTED = [
  "deputy-section-head-cca",
  "subject-coordinators",
  "faculty-by-department",
  "activities",
  "achievements",
  "facilities",
];

type Extra = {
  faculty?: { name: string; teachers: (Staff & { isCoordinator?: boolean })[] }[];
  coordinators?: Staff[];
};

const isCca = (s: Staff) => /\bcca\b/i.test(s.role || "");

function SectionBody({ slug, d, extra }: { slug: string; d: SectionView; extra: Extra }) {
  switch (slug) {
    case "deputy-section-head-cca":
      return <StaffGrid people={[...d.deputies, ...(extra.coordinators ?? []).filter(isCca)]} />;

    case "subject-coordinators":
      return <StaffGrid people={(extra.coordinators ?? []).filter((s) => !isCca(s))} />;

    case "faculty-by-department":
      return <FacultyByDepartment departments={extra.faculty ?? []} />;

    case "activities":
      return <NumberedCalendarTable items={d.activities} />;

    case "achievements":
      return (
        <>
          {groupBy(d.achievers, (a) => a.category).map((ph, i) => (
            <div className="deptblock" key={ph.name + i} style={{ marginBottom: 34 }}>
              {ph.name && <h4 className="text-center font-display text-lg mb-6">{ph.name}</h4>}
              <div className="staffgrid justify-center flex flex-wrap">
                <StaffCards people={ph.items} />
              </div>
            </div>
          ))}
        </>
      );

    case "facilities": {
      const intro = String(d.extra.facilitiesIntro || "");
      return (
        <>
          {intro && (
            <div className="prose mb-8">
              <p className="text-gray-700 font-body text-lg">{intro}</p>
            </div>
          )}
          {facilityGroups(d).map((g, gi) => (
            <div key={g.name + gi}>
              {g.name && <h3 className="text-xl font-bold text-green-800 mb-6">{g.name}</h3>}
              <ul className="grid md:grid-cols-2 gap-6 list-none pl-0">
                {g.items.map((facility, idx) => (
                  <li key={facility.id + idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                    <div className="bg-green-50 p-2 rounded-lg shrink-0 mt-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                    </div>
                    <p className="text-gray-700 text-[15px] leading-relaxed m-0">{facility.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>
      );
    }

    default:
      return null;
  }
}

// staffgrid children without an extra wrapper (keeps the flex classes on the original element)
function StaffCards({ people }: { people: Staff[] }) {
  return (
    <>
      {people.map((s, i) => (
        <StaffCard key={s.name + s.photo + i} s={s} />
      ))}
    </>
  );
}

export default function MiddleGirlsSubPage({ d, sub, extra = {} }: { d: SectionView; sub: SectionSubPage; extra?: Extra }) {
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
                  ["Timings", d.timings],
                ])}
              />
              <SubPagesCard title="Middle Girls pages" base={`/sections/${d.slug}`} pages={supportedSubPages(d, MIDDLE_GIRLS_SUPPORTED)} current={sub.slug} />
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

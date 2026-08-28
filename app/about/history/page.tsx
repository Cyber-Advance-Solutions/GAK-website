import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";

export const metadata = { title: "History" };

const MILESTONES: [string, string][] = [
  ["1970's", "Toddlers' Nursery established."],
  ["1975", "Renamed to Kehkashan Academy."],
  ["1980", "Raised to Middle Level."],
  ["1988", "Renamed as Army Public School (APS)."],
  ["1996", "Upgraded to Higher Secondary Level."],
  ["2000", "Quaid & Administration Block inaugurated."],
  ["2001", "Renamed as Garrison Academy Kharian (GAK)."],
  ["2006", "Ibn e Sina Auditorium established."],
  ["2010", "New Block for Pre-School added."],
  ["2017", "Senior Section Science Labs inaugurated."],
  ["2020", "Cambridge Section initiated."],
  ["2021", "KG & Prep Class Block added."],
  ["2024", "Renamed as APS&C GAK Campus & APSIS Classes launched."],
  ["2025", "APSIS New Building constructed."],
];

export default function AboutHistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our heritage"
        title="History"
        intro="Five decades of educating Kharian Cantt — heritage, leadership, conduct and facilities."
        image={BANNER.about}
        crumb={[{ label: "About Us", href: "/about" }, { label: "History" }]}
      />

      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Our heritage" title="A legacy since 1970's" />
          <div className="splitimg">
            <div className="prose">
              <p>Established in 1970's within Kharian Cantonment as Toddlers&apos; Nursery, the institution evolved into Kehkashan Academy and eventually Army Public School &amp; College, Garrison Academy Kharian Cantt. Over five decades it has grown into one of the region&apos;s most respected schools — educating thousands across Pre-School, Middle, Senior and the Cambridge-aligned APSIS stream.</p>
              <p>Today the campus operates under the Army Public Schools &amp; Colleges System (APSACS), combining the discipline of a cantonment institution with modern, child-centred pedagogy.</p>
            </div>
            <div className="fig" style={{ backgroundImage: "url(/hero1.png)" }} />
          </div>
          <div className="timeline" style={{ marginTop: 40 }}>
            {MILESTONES.map(([yr, txt]) => (
              <div className="tl-item" key={yr}>
                <div className="yr">{yr}</div>
                <p>{txt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

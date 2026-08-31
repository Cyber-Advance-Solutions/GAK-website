import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Monitor, FlaskConical, BookOpen, Palette, Trophy, Puzzle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";

export const metadata = { title: "About Us" };

const timelineEvents = [
  {
    year: "1970's",
    title: "Toddlers' Nursery",
    principal: "Ms Tallat Azeem Ch",
    principalImage: "/history/tallat-azeem.png",
    eventImage: "/history/toddlers-nursery.png",
  },
  {
    year: "1975",
    title: "Kehkashan Academy",
    principal: "Ms Tallat Azeem Ch",
    principalImage: "/history/tallat-azeem.png",
    eventImage: "/history/kehkashan-academy-1975.png",
  },
  {
    year: "1980",
    title: "Raised to Middle Level",
    principal: "Ms Tallat Azeem Ch",
    principalImage: "/history/tallat-azeem.png",
    eventImage: "/history/middle-level-1980.png",
  },
  {
    year: "1988",
    title: "Renamed as APS",
    principal: "Mrs Tasneem Shaheed",
    principalImage: "/history/mrs-tasneem-shaheed.png",
    eventImage: "/history/as-APS-1988.png",
  },
  {
    year: "1996",
    title: "Higher Secondary Lvl",
    principal: "Lt Col ® M. Younis",
    principalImage: "/history/m-younis.png",
    eventImage: "/history/higher-secondary-1996.png",
  },
  {
    year: "2000",
    title: "Quaid & Adm Block",
    principal: "Mrs Tasneem Naqvi",
    principalImage: "/history/tasneem-naqvi.png",
    eventImage: "/history/quaid-adm-block-2000.png",
  },
  {
    year: "2001",
    title: "Renamed as GAK",
    principal: "Mrs Tasneem Naqvi",
    principalImage: "/history/tasneem-naqvi.png",
    eventImage: "/history/renamed-as-GAK-2001.png",
  },
  {
    year: "2006",
    title: "Ibn e Sina Auditorium",
    principal: "Syed Ghalib Raza Gillani",
    principalImage: "/history/syed-ghalib-raza-gillani.png",
    eventImage: "/history/ibn-e-sina-auditorium-2006.png",
  },
  {
    year: "2010",
    title: "New Block Pre-School",
    principal: "Mrs Tasneem Naqvi",
    principalImage: "/history/tasneem-naqvi.png",
    eventImage: "/history/new-block-pre-school-2010.png",
  },
  {
    year: "2017",
    title: "Senior Sec Sci Labs",
    principal: "Prof Arjasab Khan Zafar",
    principalImage: "/history/prof-arjasab-khan-zafar2.png",
    eventImage: "/history/senior-sec-sci-labs-2017.png",
  },
  {
    year: "2020",
    title: "Cambridge Sec",
    principal: "Prof Arjasab Khan Zafar",
    principalImage: "/history/prof-arjasab-khan-zafar2.png",
    eventImage: "/history/cambridge-sec-2020.png",
  },
  {
    year: "2021",
    title: "KG & Prep Class Block",
    principal: "Prof Arjasab Khan Zafar",
    principalImage: "/history/prof-arjasab-khan-zafar2.png",
    eventImage: "/history/kg-prep-class-block-2021.png",
  },
  {
    year: "2024",
    title: "Renamed as APS&C GAK Campus",
    principal: "Prof Dr Syed Waqar Ali Rizvi",
    principalImage: "/history/prof-dr-syed-waqar-ali-rizvi.png",
    eventImage: "/history/renamed-as-APS&C-GAK-campus-2024.png",
  },
  {
    year: "2024",
    title: "Launch of APSIS Classes I-V",
    principal: "Prof Dr Syed Waqar Ali Rizvi",
    principalImage: "/history/prof-dr-syed-waqar-ali-rizvi.png",
    eventImage: "/history/launch-of-APSIS-classes-I-V.png",
  },
  {
    year: "2025",
    title: "APSIS New Building",
    principal: "Prof Dr Syed Waqar Ali Rizvi",
    principalImage: "/history/prof-dr-syed-waqar-ali-rizvi.png",
    eventImage: "/history/APSIS-new-building-2025.png",
  }
];

const FACILITIES: [React.ReactNode, string, string][] = [
  [<Monitor key="a" size={22} strokeWidth={1.8} />, "ICT labs", "Modern computer labs with high-speed internet for digital learning and coding."],
  [<FlaskConical key="b" size={22} strokeWidth={1.8} />, "Science laboratories", "Fully equipped Physics, Chemistry and Biology labs for hands-on experiments."],
  [<BookOpen key="c" size={22} strokeWidth={1.8} />, "Library", "A well-stocked library with reference, fiction and digital resources."],
  [<Palette key="d" size={22} strokeWidth={1.8} />, "Art & music room", "Dedicated studios nurturing creativity in visual and performing arts."],
  [<Trophy key="e" size={22} strokeWidth={1.8} />, "Sports grounds", "Cricket, football and hockey grounds with an athletics track."],
  [<Puzzle key="f" size={22} strokeWidth={1.8} />, "Activity rooms", "Flexible spaces for clubs, societies and early-years play-based learning."],
];

const PRINCIPALS: [string, string, string, string][] = [
  ["TC", "Ms Tallat Azeem Ch", "1970's – 1973", "/history/tallat-azeem2.png"],
  ["NR", "Mrs. Najm Rao", "1982 – 1985", "/history/najam-rao.png"],
  ["HH", "Mrs. Humaira Munir Hafeez", "Jan – Jun 1986", "/history/humaira-muneer-hafeez.png"],
  ["SM", "Mrs. Sehba Musharraf", "Aug – Sept 1986", "/history/sehba-musharraf.png"],
  ["TS", "Mrs. Tasneem Shaheen", "Oct 1986 – Apr 1989", "/history/tasneem-shaheen.png"],
  ["WH", "Sqn Ldr (R) Walayat Hussain", "Apr 1989 – Dec 1992", "/history/walayat-hussain.png"],
  ["MY", "Lt Col (R) M. Younis", "Jan 1993 – Jul 1996", "/history/m-younis.png"],
  ["AK", "Mr. A. D. Khan", "Aug 1996 – Sep 1997", "/history/mr-a-d-khan.png"],
  ["AZ", "Col (R) Abu Zar Khan", "Oct 1997 – Apr 2000", "/history/abu-zar-khan.png"],
  ["TN", "Mrs. Tasneem Naqvi", "2000–03, 2010–15", "/history/tasneem-naqvi.png"],
  ["NP", "Mrs. Naheed Pirzada", "Aug 2003 – Dec 2005", "/history/naheed-prizad.png"],
  ["SG", "Syed Ghalib Raza Gillani", "Dec 2005 – Apr 2007", "/history/syed-ghalib-raza-gillani.png"],
  ["SR", "Mrs. Salma Raza Gillani", "Apr 2007 – Sep 2009", "/history/salma-raza.png"],
  ["MS", "Lt Col (R) M. Sarwar", "Sep 2009 – Jul 2010", "/history/m-sarwar.png"],
  ["AZ", "Prof Arjasab Khan Zafar", "Oct 2015 – Oct 2023", "/history/prof-arjasab-khan-zafar2.png"],
  ["WR", "Prof Dr. Syed Waqar Ali Rizvi", "Sep 2023 – Mar 2026", "/history/prof-dr-syed-waqar-ali-rizvi.png"],
];


export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="About Garrison Academy Kharian Cantt"
        intro="Five decades of educating Kharian Cantt — heritage, leadership, conduct and facilities."
        image={BANNER.about}
        crumb={[{ label: "About Us" }]}
      />

      <section className="sec" id="overview" style={{ scrollMarginTop: 150 }}>
        <div className="wrap">
          <SectionHead eyebrow="Our heritage" title="A legacy since 1970's" />
          <div className="splitimg">
            <div className="prose">
              <p>Established in 1970's within Kharian Cantonment as Toddlers&apos; Nursery, the institution evolved into Kehkashan Academy and eventually Army Public School &amp; College, Garrison Academy Kharian Cantt. Over five decades it has grown into one of the region&apos;s most respected schools — educating thousands across Pre-School, Middle, Senior and the Cambridge-aligned APSIS stream.</p>
              <p>Today the campus operates under the Army Public Schools &amp; Colleges System (APSACS), combining the discipline of a cantonment institution with modern, child-centred pedagogy.</p>
            </div>
            <div className="fig" style={{ backgroundImage: "url(/hero1.png)" }} />
          </div>
        </div>
      </section>

      {/* ── History Timeline ── */}
      <section className="sec" id="history" style={{ scrollMarginTop: 150, background: "var(--paper-2)" }}>
        <div className="wrap">
          <SectionHead eyebrow="Our journey" title="History &amp; Milestones" intro="From a humble nursery in the 1970's to a modern multi-stream campus — tracing every major milestone in our story." />
          <div style={{ display: "flex", flexDirection: "column", gap: 0, position: "relative" }}>
            {/* vertical line */}
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 3, background: "var(--green-700, #1a472a)", transform: "translateX(-50%)", opacity: 0.15, borderRadius: 4 }} />
            {timelineEvents.map((ev, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={ev.year + ev.title}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 80px 1fr",
                    alignItems: "center",
                    gap: "0 16px",
                    marginBottom: 40,
                  }}
                >
                  {/* left side */}
                  {isLeft ? (
                    <div style={{ background: "white", borderRadius: 16, boxShadow: "0 2px 16px rgba(0,0,0,0.08)", overflow: "hidden", justifySelf: "end", width: "100%", maxWidth: 420 }}>
                      <div style={{ position: "relative", height: 180 }}>
                        <Image src={ev.eventImage} alt={ev.title} fill className="object-cover" />
                      </div>
                      <div style={{ padding: "16px 20px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <div style={{ position: "relative", width: 44, height: 44, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "2px solid var(--green-700, #1a472a)" }}>
                            <Image src={ev.principalImage} alt={ev.principal} fill className="object-cover object-top" />
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, fontSize: 15 }}>{ev.title}</div>
                            <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{ev.principal}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : <div />}

                  {/* centre badge */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, zIndex: 1 }}>
                    <div style={{ background: "var(--green-700, #1a472a)", color: "white", borderRadius: 999, padding: "6px 14px", fontWeight: 700, fontSize: 13, whiteSpace: "nowrap", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>{ev.year}</div>
                  </div>

                  {/* right side */}
                  {!isLeft ? (
                    <div style={{ background: "white", borderRadius: 16, boxShadow: "0 2px 16px rgba(0,0,0,0.08)", overflow: "hidden", justifySelf: "start", width: "100%", maxWidth: 420 }}>
                      <div style={{ position: "relative", height: 180 }}>
                        <Image src={ev.eventImage} alt={ev.title} fill className="object-cover" />
                      </div>
                      <div style={{ padding: "16px 20px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <div style={{ position: "relative", width: 44, height: 44, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "2px solid var(--green-700, #1a472a)" }}>
                            <Image src={ev.principalImage} alt={ev.principal} fill className="object-cover object-top" />
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, fontSize: 15 }}>{ev.title}</div>
                            <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{ev.principal}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : <div />}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sec" id="vision-mission" style={{ scrollMarginTop: 150 }}>
        <div className="wrap">
          <SectionHead eyebrow="Our Direction" title="Vision, Mission & Values" intro="The strategic framework that guides every decision, lesson, and interaction across our institution." />

          <div className="grid g2" style={{ marginBottom: 40 }}>
            <div style={{ background: "rgba(103, 91, 166, 0.1)", borderLeft: "6px solid #4a3e8e", padding: 24, borderRadius: "0 12px 12px 0" }}>
              <h4 style={{ color: "#4a3e8e", textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>Vision <span style={{ fontWeight: 400, fontStyle: "italic" }}>(The Destination)</span></h4>
              <p style={{ fontSize: 18, margin: 0, fontWeight: 500, lineHeight: 1.5 }}>To develop capable individuals who think independently, act responsibly, and thrive bravely in a rapidly evolving world.</p>
            </div>
            <div style={{ background: "rgba(224, 186, 68, 0.1)", borderLeft: "6px solid #d4a017", padding: 24, borderRadius: "0 12px 12px 0" }}>
              <h4 style={{ color: "#b8860b", textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>Mission <span style={{ fontWeight: 400, fontStyle: "italic" }}>(The Vehicle)</span></h4>
              <p style={{ fontSize: 18, margin: 0, fontWeight: 500, lineHeight: 1.5 }}>We create challenging, real-world learning experiences that develop critical thinkers, ethical decision-makers, and adaptable individuals — empowering every student, staff member, and leader to grow, contribute, and succeed — together.</p>
            </div>
          </div>

          <div style={{ background: "rgba(34, 139, 34, 0.1)", borderLeft: "6px solid #228b22", padding: 32, borderRadius: "0 12px 12px 0", marginBottom: 40 }}>
            <h4 style={{ color: "#006400", textTransform: "uppercase", fontWeight: 700, marginBottom: 24, fontSize: 22 }}>Values <span style={{ fontWeight: 400, fontStyle: "italic" }}>(The Fuel)</span></h4>
            <div className="grid g2">
              <div>
                <h5 style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>Think Critically</h5>
                <p style={{ fontStyle: "italic", marginBottom: 16 }}>Ask Why. Find Out How. Think Before You Act.</p>

                <h5 style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>Act Righteously</h5>
                <p style={{ fontStyle: "italic", marginBottom: 16 }}>Always Do the Right Thing, Even When No One is Watching</p>
              </div>
              <div>
                <h5 style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>Adapt Bravely</h5>
                <p style={{ fontStyle: "italic", marginBottom: 16 }}>Try, Fail, Learn, Repeat - Every Single Day</p>

                <h5 style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>Work Together</h5>
                <p style={{ fontStyle: "italic", marginBottom: 16 }}>Respect Differences. Support Others. Grow Together</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

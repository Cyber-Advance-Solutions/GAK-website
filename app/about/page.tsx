import Link from "next/link";
import { ArrowRight, Monitor, FlaskConical, BookOpen, Palette, Trophy, Puzzle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";

export const metadata = { title: "About Us" };

const MILESTONES: [string, string][] = [
  ["1985", "GAK Campus founded inside Kharian Cantonment, serving garrison families."],
  ["1998", "Senior School established with FBISE affiliation."],
  ["2011", "APSIS Cambridge international stream launched."],
  ["2020", "ICT labs and a digital LMS introduced across sections."],
];

const FACILITIES: [React.ReactNode, string, string][] = [
  [<Monitor key="a" size={22} strokeWidth={1.8} />, "ICT labs", "Modern computer labs with high-speed internet for digital learning and coding."],
  [<FlaskConical key="b" size={22} strokeWidth={1.8} />, "Science laboratories", "Fully equipped Physics, Chemistry and Biology labs for hands-on experiments."],
  [<BookOpen key="c" size={22} strokeWidth={1.8} />, "Library", "A well-stocked library with reference, fiction and digital resources."],
  [<Palette key="d" size={22} strokeWidth={1.8} />, "Art & music room", "Dedicated studios nurturing creativity in visual and performing arts."],
  [<Trophy key="e" size={22} strokeWidth={1.8} />, "Sports grounds", "Cricket, football and hockey grounds with an athletics track."],
  [<Puzzle key="f" size={22} strokeWidth={1.8} />, "Activity rooms", "Flexible spaces for clubs, societies and early-years play-based learning."],
];

const PRINCIPALS: [string, string, string][] = [
  ["IA", "Lt Col (R) Iftikhar Ahmed", "1985 – 1996"],
  ["NB", "Col (R) Nadeem Baig", "1996 – 2008"],
  ["RF", "Brig (R) Rukhsana Farooq", "2008 – 2019"],
  ["AK", "Brig (R) Asad Khan", "2019 – Present"],
];

const NAV = [
  { id: "overview", label: "Overview" },
  { id: "facilities", label: "Facilities" },
  { id: "streams", label: "Streams" },
  { id: "leadership", label: "Leadership" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="About GAK Campus"
        intro="Four decades of educating Kharian Cantt — heritage, leadership, conduct and facilities."
        image={BANNER.about}
        crumb={[{ label: "About Us" }]}
      />
      <SubNav items={NAV} />

      <section className="sec" id="overview" style={{ scrollMarginTop: 150 }}>
        <div className="wrap">
          <SectionHead eyebrow="Our heritage" title="A legacy since 1985" />
          <div className="splitimg">
            <div className="prose">
              <p>Established in 1985 within Kharian Cantonment, the Army Public School &amp; College, GAK Campus began as a modest institution serving the families of the garrison. Over four decades it has grown into one of the region&apos;s most respected schools — educating thousands across Pre-School, Middle, Senior and the Cambridge-aligned APSIS stream.</p>
              <p>Today the campus operates under the Army Public Schools &amp; Colleges System (APSACS), combining the discipline of a cantonment institution with modern, child-centred pedagogy.</p>
            </div>
            <div className="fig" style={{ backgroundImage: "url(/hero3.jpg)" }} />
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

      <section className="sec" id="facilities" style={{ scrollMarginTop: 150, background: "var(--paper-2)" }}>
        <div className="wrap">
          <SectionHead eyebrow="Campus" title="Purpose-built facilities" intro="Spaces that support academics, creativity and well-being." />
          <div className="linkcards">
            {FACILITIES.map(([ic, t, d]) => (
              <div className="linkcard" key={t}>
                <div className="lc-ic">{ic}</div>
                <div><h4>{t}</h4><p>{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="streams" style={{ scrollMarginTop: 150 }}>
        <div className="wrap">
          <SectionHead eyebrow="Two pathways" title="One campus, two academic streams" />
          <div className="streams">
            <Link className="streamcard" href="/sections/senior">
              <div className="sc-img" style={{ backgroundImage: "url(/hero2.jpg)" }}><span className="sc-tag">National</span></div>
              <div className="sc-bd"><h3>APSACS · FBISE</h3><p>The national curriculum from Pre-School to Intermediate, with consistently strong board results.</p><span className="more">Explore stream <ArrowRight size={15} /></span></div>
            </Link>
            <Link className="streamcard" href="/sections/apsis">
              <div className="sc-img" style={{ backgroundImage: "url(/hero1.jpg)" }}><span className="sc-tag alt">International</span></div>
              <div className="sc-bd"><h3>APSIS · Cambridge</h3><p>A globally benchmarked Cambridge pathway, opening doors to universities at home and abroad.</p><span className="more">Explore stream <ArrowRight size={15} /></span></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="sec" id="leadership" style={{ scrollMarginTop: 150, background: "var(--paper-2)" }}>
        <div className="wrap">
          <SectionHead eyebrow="Leadership" title="Principals through the years" intro="Every Principal who has led GAK Campus, with their years of service." />
          <div className="grid g4">
            {PRINCIPALS.map(([ph, nm, role]) => (
              <div className="card person" key={nm}><div className="ph">{ph}</div><div className="nm">{nm}</div><div className="role">{role}</div></div>
            ))}
          </div>
          <div className="note-box mt2">
            The full code of conduct handbook is available in the{" "}
            <Link href="/downloads" style={{ color: "var(--green-700)", fontWeight: 700, textDecoration: "underline" }}>Downloads</Link> section.
          </div>
        </div>
      </section>
    </>
  );
}

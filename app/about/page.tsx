import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Monitor, FlaskConical, BookOpen, Palette, Trophy, Puzzle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";

export const metadata = { title: "About Us" };

const MILESTONES: [string, string][] = [
  ["1970", "Toddlers' Nursery established."],
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

const NAV = [
  { id: "overview", label: "Overview" },
  { id: "vision-mission", label: "Vision & Mission" },
  { id: "facilities", label: "Facilities" },
  { id: "streams", label: "Streams" },
  { id: "leadership", label: "Leadership" },
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
      <SubNav items={NAV} />

      <section className="sec" id="overview" style={{ scrollMarginTop: 150 }}>
        <div className="wrap">
          <SectionHead eyebrow="Our heritage" title="A legacy since 1970" />
          <div className="splitimg">
            <div className="prose">
              <p>Established in 1970 within Kharian Cantonment as Toddlers&apos; Nursery, the institution evolved into Kehkashan Academy and eventually Army Public School &amp; College, Garrison Academy Kharian Cantt. Over five decades it has grown into one of the region&apos;s most respected schools — educating thousands across Pre-School, Middle, Senior and the Cambridge-aligned APSIS stream.</p>
              <p>Today the campus operates under the Army Public Schools &amp; Colleges System (APSACS), combining the discipline of a cantonment institution with modern, child-centred pedagogy.</p>
            </div>
            <div className="fig" style={{ backgroundImage: "url(/hero1.jpg)" }} />
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

      <section className="sec" id="vision-mission" style={{ scrollMarginTop: 150, background: "var(--paper-2)" }}>
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

          <div className="prose" style={{ maxWidth: "none", marginBottom: 40 }}>
            <h3 style={{ marginBottom: 16 }}>The Universal Standard: Our Shared Values Code</h3>
            <p>Our Core Values are a universal code. From students in classrooms and teachers in staffrooms, to leaders in offices and support staff across our campus — we hold ourselves to the exact same standards. We will not demand from students and colleagues what we do not actively model as professionals. Each value below is translated into specific, observable behaviours for every role in this institution.</p>
            
            <div style={{ overflowX: "auto", marginTop: 24 }}>
              <table style={{ width: "100%", minWidth: 800, borderCollapse: "collapse", background: "white", fontSize: 14 }}>
                <thead>
                  <tr style={{ background: "#1a472a", color: "white" }}>
                    <th style={{ padding: 12, textAlign: "left", border: "1px solid #ddd" }}>Core Value</th>
                    <th style={{ padding: 12, textAlign: "left", border: "1px solid #ddd" }}>For Students</th>
                    <th style={{ padding: 12, textAlign: "left", border: "1px solid #ddd" }}>For Staff</th>
                    <th style={{ padding: 12, textAlign: "left", border: "1px solid #ddd" }}>For Leadership</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: 12, border: "1px solid #ddd", background: "#1a472a", color: "white" }}><strong>★ Think Critically</strong><br/><span style={{ fontStyle: "italic", fontSize: 12 }}>Ask Why. Find out How. Think before you Act.</span></td>
                    <td style={{ padding: 12, border: "1px solid #ddd" }}>I ask questions to understand better. I look for facts and answers before deciding what to believe. I use what I learn to make wise choices, solve problems, and improve myself every day.</td>
                    <td style={{ padding: 12, border: "1px solid #ddd" }}>I question my own practice before questioning others. I seek evidence through data, observation, and feedback before forming opinions about what works. I actively pursue better ways to teach, not just familiar ones. When findings challenge my current practice, I see an opportunity to learn and improve.</td>
                    <td style={{ padding: 12, border: "1px solid #ddd" }}>I base every decision on evidence, not assumption, habit, or convenience. I actively seek information that challenges what I already believe, not just information that confirms it. When findings are uncomfortable, I embrace them as opportunities for growth. I act on what the evidence demands.</td>
                  </tr>
                  <tr style={{ background: "#e8f5e9" }}>
                    <td style={{ padding: 12, border: "1px solid #ddd", background: "#1a472a", color: "white" }}><strong>★ Act Righteously</strong><br/><span style={{ fontStyle: "italic", fontSize: 12 }}>Do The Right Thing Always — Even When No One is Watching.</span></td>
                    <td style={{ padding: 12, border: "1px solid #ddd" }}>I choose honesty even when it is difficult. I take responsibility for my mistakes without excuse. I treat every person in our community with dignity, fairness, and respect.</td>
                    <td style={{ padding: 12, border: "1px solid #ddd" }}>I act with integrity in every interaction. I provide honest feedback, even when it is difficult. I admit mistakes openly, learn from them, and take responsibility for making things right.</td>
                    <td style={{ padding: 12, border: "1px solid #ddd" }}>I lead with transparency, fairness, and accountability. I distribute opportunities, resources, and recognition based on merit. I support my team publicly, address concerns respectfully, and model the standards I expect from others.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: 12, border: "1px solid #ddd", background: "#1a472a", color: "white" }}><strong>★ Adapt Bravely</strong><br/><span style={{ fontStyle: "italic", fontSize: 12 }}>Try, Fail, Learn, Repeat — Every Single Day.</span></td>
                    <td style={{ padding: 12, border: "1px solid #ddd" }}>I embrace challenges as opportunities to learn. I try new approaches even when success is not guaranteed. I learn from mistakes and never allow "I can't" to be my final answer.</td>
                    <td style={{ padding: 12, border: "1px solid #ddd" }}>I continuously develop new skills and embrace innovation. I adjust my practice when evidence shows a better way forward. I remain flexible, resilient, and focused when circumstances change.</td>
                    <td style={{ padding: 12, border: "1px solid #ddd" }}>I lead change proactively rather than reactively. I make thoughtful decisions under pressure and remain composed during uncertainty. I build systems that are sustainable, adaptable, and capable of supporting future growth.</td>
                  </tr>
                  <tr style={{ background: "#e8f5e9" }}>
                    <td style={{ padding: 12, border: "1px solid #ddd", background: "#1a472a", color: "white" }}><strong>★ Work Together</strong><br/><span style={{ fontStyle: "italic", fontSize: 12 }}>Respect Differences. Support Others. Grow Together.</span></td>
                    <td style={{ padding: 12, border: "1px solid #ddd" }}>I respect every difference—background, ability, experience, and opinion. I help others learn, grow, and succeed. I understand that our success is stronger when we support one another.</td>
                    <td style={{ padding: 12, border: "1px solid #ddd" }}>I break down barriers and work collaboratively with colleagues. I share knowledge, resources, and credit generously. I treat every challenge faced by a colleague as an opportunity for collective problem-solving and growth.</td>
                    <td style={{ padding: 12, border: "1px solid #ddd" }}>I value diverse perspectives, consider them thoughtfully, and make decisions guided by evidence, shared values, and the strategic goals of the institution. I build trust, strengthen collaboration, and resolve challenges before they become barriers. I create an environment where people feel valued, supported, and inspired to give their best.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose" style={{ maxWidth: "none", marginBottom: 40 }}>
            <h3 style={{ marginBottom: 16 }}>Alignment Analysis</h3>
            <p>The following table shows precisely how our Vision, Mission and Values interlock across four strategic pillars:</p>
            
            <div style={{ overflowX: "auto", marginTop: 24 }}>
              <table style={{ width: "100%", minWidth: 600, borderCollapse: "collapse", background: "white", fontSize: 14 }}>
                <thead>
                  <tr style={{ background: "#1a472a", color: "white" }}>
                    <th style={{ padding: 12, textAlign: "left", border: "1px solid #ddd" }}>Strategic Pillar</th>
                    <th style={{ padding: 12, textAlign: "left", border: "1px solid #ddd" }}>Vision Target (Outcome)</th>
                    <th style={{ padding: 12, textAlign: "left", border: "1px solid #ddd" }}>Mission Vehicle (Input)</th>
                    <th style={{ padding: 12, textAlign: "left", border: "1px solid #ddd" }}>Core Value (Action)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ background: "#e8f5e9" }}>
                    <td style={{ padding: 12, border: "1px solid #ddd", fontWeight: 700, background: "#1a472a", color: "white" }}>Pillar 1 Intellect</td>
                    <td style={{ padding: 12, border: "1px solid #ddd", fontStyle: "italic" }}>...think independently</td>
                    <td style={{ padding: 12, border: "1px solid #ddd", fontStyle: "italic" }}>...challenge students to solve problems</td>
                    <td style={{ padding: 12, border: "1px solid #ddd" }}>Think Critically — Ask Why. Find out How. Think before you Act.</td>
                  </tr>
                  <tr style={{ background: "#fffde7" }}>
                    <td style={{ padding: 12, border: "1px solid #ddd", fontWeight: 700, background: "#1a472a", color: "white" }}>Pillar 2 Character</td>
                    <td style={{ padding: 12, border: "1px solid #ddd", fontStyle: "italic" }}>...act responsibly</td>
                    <td style={{ padding: 12, border: "1px solid #ddd", fontStyle: "italic" }}>...make ethical choices</td>
                    <td style={{ padding: 12, border: "1px solid #ddd" }}>Act Righteously — Do the right thing always, even when no one is watching.</td>
                  </tr>
                  <tr style={{ background: "#e8f5e9" }}>
                    <td style={{ padding: 12, border: "1px solid #ddd", fontWeight: 700, background: "#1a472a", color: "white" }}>Pillar 3 Agility</td>
                    <td style={{ padding: 12, border: "1px solid #ddd", fontStyle: "italic" }}>...thrive bravely</td>
                    <td style={{ padding: 12, border: "1px solid #ddd", fontStyle: "italic" }}>...adaptable individuals</td>
                    <td style={{ padding: 12, border: "1px solid #ddd" }}>Adapt Bravely — Try, fail, learn, repeat — every single day.</td>
                  </tr>
                  <tr style={{ background: "#fffde7" }}>
                    <td style={{ padding: 12, border: "1px solid #ddd", fontWeight: 700, background: "#1a472a", color: "white" }}>Pillar 4 Synergy</td>
                    <td style={{ padding: 12, border: "1px solid #ddd", fontStyle: "italic" }}>...capable Individuals</td>
                    <td style={{ padding: 12, border: "1px solid #ddd", fontStyle: "italic" }}>...grow, contribute, and succeed — together</td>
                    <td style={{ padding: 12, border: "1px solid #ddd" }}>Work Together — Respect differences. Support Others. Grow Together</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid g2">
            <div style={{ background: "rgba(224, 186, 68, 0.1)", borderLeft: "4px solid #d4a017", padding: 24, borderRadius: 8 }}>
              <h4 style={{ color: "#b8860b", fontWeight: 700, marginBottom: 12 }}>What This Is Not</h4>
              <p style={{ fontStyle: "italic", margin: 0 }}>This framework is not a motto to display. It is not satisfied by a poster on the wall or a slide in an assembly. It is satisfied only by consistent, observable behaviour — in every classroom, every staffroom, and every office, every single day.</p>
            </div>
            <div style={{ background: "rgba(34, 139, 34, 0.1)", borderLeft: "4px solid #228b22", padding: 24, borderRadius: 8 }}>
              <h4 style={{ color: "#006400", fontWeight: 700, marginBottom: 12 }}>The Ultimate Test of Interrelation</h4>
              <p style={{ fontStyle: "italic", marginBottom: 8, fontWeight: 700 }}>If a teacher asks: "Why am I grading a student on asking big questions today?"</p>
              <p style={{ marginBottom: 8 }}><strong>The answer:</strong> Because our Value is to Think Critically, which executes our Mission to challenge students with real problems, so we can achieve our Vision of developing independent thinkers.</p>
              <p style={{ margin: 0, fontWeight: 700, color: "#1a472a" }}>The loop is completely closed. Every daily action on campus is directly tied to our ultimate institutional purpose.</p>
            </div>
          </div>

        </div>
      </section>

      <section className="sec" id="facilities" style={{ scrollMarginTop: 150 }}>
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
            <Link className="streamcard" href="/sections/senior-girls">
              <div className="sc-img" style={{ backgroundImage: "url(/adm-block.jpg)" }}><span className="sc-tag">National</span></div>
              <div className="sc-bd"><h3>APSACS · FBISE</h3><p>The national curriculum from Pre-School to Intermediate, with consistently strong board results.</p><span className="more">Explore stream <ArrowRight size={15} /></span></div>
            </Link>
            <Link className="streamcard" href="/sections/apsis">
              <div className="sc-img" style={{ backgroundImage: "url(/apsis.jpg)" }}><span className="sc-tag alt">International</span></div>
              <div className="sc-bd"><h3>APSIS · Cambridge</h3><p>A globally benchmarked Cambridge pathway, opening doors to universities at home and abroad.</p><span className="more">Explore stream <ArrowRight size={15} /></span></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="sec" id="leadership" style={{ scrollMarginTop: 150, background: "var(--paper-2)" }}>
        <div className="wrap">
          <SectionHead eyebrow="Leadership" title="Principals through the years" intro="Every Principal who has led Garrison Academy Kharian Cantt, with their years of service." />
          <div className="grid g4">
            {PRINCIPALS.map(([ph, nm, role, img]) => (
              <div className="card person" key={nm}>
                <div className="ph" style={{ position: "relative", overflow: "hidden" }}>
                  {img ? (
                    <Image src={img} alt={nm} fill className="object-cover object-top" />
                  ) : (
                    ph
                  )}
                </div>
                <div className="nm">{nm}</div>
                <div className="role">{role}</div>
              </div>
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

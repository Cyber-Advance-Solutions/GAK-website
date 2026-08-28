import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";
import { Shield, Users, Award, Star } from "lucide-react";

export const metadata = { title: "Student Council" };

interface CouncilSession {
  session: string;
  headBoys: string;
  headGirls: string;
}

const HISTORICAL_COUNCIL: CouncilSession[] = [
  {
    session: "2025 – 2026",
    headBoys: "M. Hashir Abbasi (College)",
    headGirls: "Zainab Fatima (College)",
  },
  {
    session: "2024 – 2025",
    headBoys: "Abdullah Imran (College)",
    headGirls: "Eshal Rehman (College)",
  },
  {
    session: "2023 – 2024",
    headBoys: "Shahzaman Ali (School)",
    headGirls: "Maryam Siddique (School)",
  },
  {
    session: "2022 – 2023",
    headBoys: "Hamza Farooq (School)",
    headGirls: "Minahil Tanveer (School)",
  },
  {
    session: "2021 – 2022",
    headBoys: "Muhammad Ali (School)",
    headGirls: "Ayesha Noor (School)",
  },
  {
    session: "2020 – 2021",
    headBoys: "Saad Mehmood",
    headGirls: "Laiba Tahir",
  },
];

const PILLARS = [
  {
    icon: <Shield size={24} strokeWidth={1.8} className="text-green-800" />,
    title: "Leadership & Integrity",
    desc: "Representing Garrison Academy with honor, serving as role models of conduct and character.",
  },
  {
    icon: <Users size={24} strokeWidth={1.8} className="text-green-800" />,
    title: "Student Voice",
    desc: "Acting as an active bridge of communication between the student body and the school administration.",
  },
  {
    icon: <Award size={24} strokeWidth={1.8} className="text-green-800" />,
    title: "Event Coordination",
    desc: "Coordinating inter-house challenges, sports galas, and school-wide co-curricular celebrations.",
  },
  {
    icon: <Star size={24} strokeWidth={1.8} className="text-green-800" />,
    title: "Peer Support",
    desc: "Fostering inclusivity and guidance to welcome and assist younger students across sections.",
  },
];

export default function StudentCouncilPage() {
  return (
    <>
      <PageHero
        eyebrow="Student Leadership"
        title="Student Council"
        intro="Developing tomorrow's leaders through responsibility, representation, and proactive service."
        image={BANNER["student-council"]}
        crumb={[{ label: "Academics", href: "/sections/pre" }, { label: "Student Council" }]}
      />

      <section className="sec">
        <div className="wrap">
          <SectionHead
            eyebrow="Council Pillars"
            title="Leadership in Action"
            intro="The Student Council is dedicated to fostering community, excellence, and communication at Garrison Academy Kharian Cantt."
          />
          <div className="linkcards" style={{ marginTop: 32 }}>
            {PILLARS.map((p, i) => (
              <div className="linkcard" key={i} style={{ cursor: "default" }}>
                <div className="lc-ic">{p.icon}</div>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="splitimg">
            <div className="prose">
              <SectionHead
                eyebrow="Our Structure"
                title="Council Representation"
              />
              <p style={{ marginTop: 16 }}>
                The Student Council comprises students selected through a rigorous process of academic evaluations, behavioral screening, and panel interviews. Each session, student leaders are appointed to fulfill critical roles across the institution.
              </p>
              <p>
                Under the guidance of our Principal and Section Heads, the Student Council manages discipline, represents student concerns, coordinates academic and sports events, and supports GAK&apos;s daily operations.
              </p>
            </div>
            <div
              className="fig"
              style={{
                backgroundImage: "url(/hero2.png)",
                borderRadius: "var(--r)",
                minHeight: 300,
              }}
            />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead
            eyebrow="Roll of Honor"
            title="Historical Leadership"
            intro="A proud record of student leaders who have served the academy as Head Boys and Head Girls."
          />

          <div className="tbl-wrap" style={{ marginTop: 32 }}>
            <table className="tbl">
              <thead>
                <tr>
                  <th>Academic Session</th>
                  <th>Head Boys</th>
                  <th>Head Girls</th>
                </tr>
              </thead>
              <tbody>
                {HISTORICAL_COUNCIL.map((c, i) => (
                  <tr key={i}>
                    <td>
                      <strong>{c.session}</strong>
                    </td>
                    <td>{c.headBoys}</td>
                    <td>{c.headGirls}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

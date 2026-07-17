import Link from "next/link";
import { Trophy } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Alumni" };

const EX: [string, string, string][] = [
  ["AM", "Dr. Aisha Malik", "Cardiologist, AFIC Rawalpindi"],
  ["UK", "Capt. Usman Khalid", "Pakistan Army"],
  ["SR", "Sana Raza", "Software Engineer, Systems Ltd"],
  ["BH", "Bilal Hussain", "Chartered Accountant, ACCA"],
  ["MN", "Maryam Nawaz", "PhD Scholar, NUST"],
  ["FK", "Farhan Khan", "Civil Servant, CSS 2019"],
];
const TOP: [string, string, string, string][] = [
  ["Ayesha Hameed", "XII (Pre-Med)", "1st", "2025"],
  ["Muhammad Umar", "XI (Pre-Eng)", "2nd", "2025"],
  ["Fatima Zahra", "X (Science)", "1st", "2024"],
  ["Zain Abbas", "XII (ICS)", "3rd", "2024"],
  ["Hira Saleem", "IX (Science)", "2nd", "2023"],
];
const pill = (p: string) => (p === "1st" ? "o" : p === "2nd" ? "g" : "b");

export default function AlumniPage() {
  return (
    <>
      <PageHero
        eyebrow="Once a GAKian"
        title="Alumni"
        intro="Celebrating Ex-GAK students making their mark, and the top achievers of recent years."
        image={BANNER.alumni}
        crumb={[{ label: "Alumni (AMULNI)" }]}
      />

      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Notable Ex-GAK" title="Where our graduates are today" />
          <div className="grid g3">
            {EX.map(([ph, nm, ps]) => (
              <div className="card person" key={nm} style={{ textAlign: "left" }}>
                <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <div className="ph" style={{ width: 56, height: 56, margin: 0, fontSize: "1.1rem" }}>{ph}</div>
                  <div><div className="nm" style={{ fontSize: "1.02rem" }}>{nm}</div><div className="role" style={{ margin: 0 }}>{ps}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <SectionHead eyebrow="Hall of fame" title="Top position holders" intro="Overall top three per class across the last two to three sessions." />
          <div className="tbl-wrap"><table className="tbl">
            <thead><tr><th>Student</th><th>Class</th><th>Position</th><th>Session</th></tr></thead>
            <tbody>
              {TOP.map(([s, c, p, y]) => (
                <tr key={s}><td>{s}</td><td>{c}</td><td><span className={`pill ${pill(p)}`}>{p}</span></td><td>{y}</td></tr>
              ))}
            </tbody>
          </table></div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap"><div className="ctaband">
          <span className="eyebrow" style={{ color: "var(--gold-300)" }}>AMULNI network</span>
          <h2 className="h-lg" style={{ marginBottom: 12 }}>Join the GAK alumni network</h2>
          <p>Reconnect with old classmates, mentor current students and stay part of the GAK family.</p>
          <div className="cta-row">
            <Link className="btn-primary" href="/feedback">Register as alumnus <Trophy size={16} /></Link>
            <Link className="btn-ghost" href="/contact">Contact the office</Link>
          </div>
        </div></div>
      </section>
    </>
  );
}

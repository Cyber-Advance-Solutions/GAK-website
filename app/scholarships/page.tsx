import Link from "next/link";
import { Award, Coins, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Scholarships & Incentives" };

const ELIGIBILITY: [string, string][] = [
  ["Academic merit", "Minimum 85% aggregate in the previous annual examination."],
  ["Conduct", "A clean disciplinary record and attendance above 90%."],
  ["Application", "Submit the scholarship request with supporting result documents."],
  ["Renewal", "Awards are reviewed and renewed each session on performance."],
];

const TYPES: [React.ReactNode, string, string][] = [
  [<Award key="a" size={22} strokeWidth={1.8} />, "Merit scholarship", "Fee concessions for board-class students (IX–XII) with outstanding results."],
  [<Coins key="b" size={22} strokeWidth={1.8} />, "Need-based support", "Assistance for deserving families of the garrison, assessed case by case."],
  [<Users key="c" size={22} strokeWidth={1.8} />, "Core teacher incentive", "Recognition and rewards for faculty delivering exceptional results."],
];

const INCENTIVES: [string, string, string][] = [
  ["Position holder", "1st in class / board", "Up to 100% tuition waiver"],
  ["Distinction", "85% and above", "50% tuition concession"],
  ["Merit", "80–84%", "25% tuition concession"],
  ["Sibling", "Two or more enrolled", "Concession per APSACS policy"],
];

export default function ScholarshipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Merit & support"
        title="Scholarships & incentives"
        intro="Recognising academic excellence among students and rewarding our core teaching faculty."
        image={BANNER.scholarships}
        crumb={[{ label: "Scholarships & Incentives" }]}
      />

      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Eligibility" title="How to qualify" intro="Merit-based scholarships are open to board-class students who meet the following." />
          <div className="steps">
            {ELIGIBILITY.map(([t, d]) => (
              <div className="step" key={t}><div><h4>{t}</h4><p>{d}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <SectionHead eyebrow="What's available" title="Types of support" />
          <div className="linkcards">
            {TYPES.map(([ic, t, d]) => (
              <div className="linkcard" key={t}><div className="lc-ic">{ic}</div><div><h4>{t}</h4><p>{d}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="At a glance" title="Incentive structure" />
          <div className="tbl-wrap"><table className="tbl">
            <thead><tr><th>Award</th><th>Eligibility</th><th>Benefit</th></tr></thead>
            <tbody>{INCENTIVES.map(([a, e, b]) => (<tr key={a}><td>{a}</td><td>{e}</td><td>{b}</td></tr>))}</tbody>
          </table></div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap"><div className="ctaband">
          <span className="eyebrow" style={{ color: "var(--gold-300)" }}>Apply for support</span>
          <h2 className="h-lg" style={{ marginBottom: 12 }}>Think your child qualifies?</h2>
          <p>Speak to the accounts office or start an admission request to be assessed for merit and need-based support.</p>
          <div className="cta-row"><Link className="btn-primary" href="/admissions">Begin application</Link><Link className="btn-ghost" href="/contact">Contact accounts</Link></div>
        </div></div>
      </section>
    </>
  );
}

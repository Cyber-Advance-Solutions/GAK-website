import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Admission Criteria" };

const CRITERIA: [string, string, string][] = [
  ["Board classes (IX–XII)", "Min. 70% in previous result + entry test & interview", "APSACS / APSIS"],
  ["Non-board (I–VIII)", "Age-appropriate placement + assessment", "APSACS / APSIS"],
  ["Pre-School", "Interaction only — no written test", "Foundation"],
];

export default function CriteriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Session 2026"
        title="Admission Criteria"
        intro="Review the eligibility criteria for admission."
        image={BANNER.admissions}
        crumb={[{ label: "Admissions", href: "/admissions" }, { label: "Criteria" }]}
      />

      <section className="sec" id="criteria">
        <div className="wrap">
          <SectionHead eyebrow="Eligibility" title="Criteria for admission" />
          <div className="tbl-wrap">
            <table className="tbl">
              <thead>
                <tr>
                  <th>Class group</th>
                  <th>Requirement</th>
                  <th>Stream</th>
                </tr>
              </thead>
              <tbody>
                {CRITERIA.map(([c, r, s]) => (
                  <tr key={c}>
                    <td>{c}</td>
                    <td>{r}</td>
                    <td>{s}</td>
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

import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";
import { api } from "@/lib/api";

export const metadata = { title: "Admission Criteria" };
export const dynamic = "force-dynamic";

const CRITERIA: [string, string, string][] = [
  ["Board classes (IX–XII)", "Min. 70% in previous result + entry test & interview", "APSACS / APSIS"],
  ["Non-board (I–VIII)", "Age-appropriate placement + assessment", "APSACS / APSIS"],
  ["Pre-School", "Interaction only — no written test", "Foundation"],
];

export default async function CriteriaPage() {
  // Session label comes from the admin (Admissions settings); the content below has no backend field yet
  const adm = await api<{ session?: string } | null>("/admissions/settings", null);
  return (
    <>
      <PageHero
        eyebrow={adm?.session ? `Session ${adm.session}` : ""}
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

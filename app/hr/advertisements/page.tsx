import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";
import { getVacancies, parseAdvertisement } from "@/lib/mappers/careers";
import { getContactSettings } from "@/lib/mappers/contact";

export const metadata = { title: "Job Advertisements" };
export const dynamic = "force-dynamic";

export default async function AdvertisementsPage() {
  // Advertisements are published vacancies (admin: HR & Careers) whose description holds
  // "Subjects: ..." and "- requirement" lines; plain openings without a description show only on /hr.
  const [vacancies, contact] = await Promise.all([getVacancies(), getContactSettings()]);
  const ads = vacancies.filter((v) => (v.description || "").trim()).map((v) => ({ v, ...parseAdvertisement(v) }));
  const intro = ads.find((a) => a.intro)?.intro;
  const email = contact.emails[0]?.value;
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Job Advertisements"
        intro="Latest recruitment advertisements for teaching staff at Garrison Academy Kharian Cantt."
        image={BANNER.hr}
        crumb={[{ label: "HR Management", href: "/hr" }, { label: "Advertisements" }]}
      />
      <section className="sec" id="advertisements">
        <div className="wrap">
          <SectionHead eyebrow="We are Hiring" title="Teaching Staff Advertisements" />
          <div className="prose" style={{ marginBottom: 24, textAlign: "center" }}>
            <p>{intro ? <><strong>{intro}</strong><br/></> : null}Applications are invited from qualified, competent and experienced educators and professionals for the following positions:</p>
          </div>
          {ads.length === 0 ? (
            <p style={{ color: "var(--ink-soft)", textAlign: "center", marginBottom: 32 }}>There are no advertisements at the moment.</p>
          ) : (
          <div className="tbl-wrap" style={{ marginBottom: 32 }}>
            <table className="tbl">
              <thead>
                <tr>
                  <th style={{ minWidth: 160 }}>Level / School</th>
                  <th style={{ minWidth: 180 }}>Subjects</th>
                  <th>Requirements</th>
                </tr>
              </thead>
              <tbody>
                {ads.map(({ v, subjects, requirements }) => (
                  <tr key={v.id}>
                    <td><strong>{v.department || v.title}</strong></td>
                    {subjects.length > 1 ? (
                      <td className="prose">
                        <ul style={{ margin: 0 }}>
                          {subjects.map((x) => <li key={x}>{x}</li>)}
                        </ul>
                      </td>
                    ) : (
                      <td>{subjects[0] || v.title}</td>
                    )}
                    <td className="prose">
                      {requirements.length > 0 ? (
                        <ul style={{ margin: 0 }}>
                          {requirements.map((r) => <li key={r}>{r}</li>)}
                        </ul>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          )}

          <div className="grid g2">
            <div className="card prose">
              <h3 style={{ marginTop: 0 }}>General Requirements</h3>
              <ul>
                <li>Excellent communication and presentation skills</li>
                <li>Strong classroom-management and student-engagement abilities</li>
                <li>Competence in ICT and digital learning tools</li>
                <li>Commitment to student achievement and continuous professional development</li>
                <li>Relevant experience in APSACS, FBISE or Cambridge systems will be an advantage</li>
                <li>Shortlisted candidates may be required to appear for a written/subject competency test and interview</li>
              </ul>
            </div>
            <div className="card prose">
              <h3 style={{ marginTop: 0 }}>How to Apply</h3>
              <ul>
                <li>Interested candidates should submit their updated CV along with copies of relevant academic and experience certificates via email <strong>{email}</strong></li>
                <li>Only <strong>Short-Listed</strong> candidates will be contacted</li>
              </ul>
              <div style={{ marginTop: 24, padding: 16, background: "var(--green-tint)", borderRadius: 8 }}>
                <strong style={{ color: "var(--green-900)" }}>Contact No:</strong>
                <p style={{ margin: 0, marginTop: 4 }}>
                  {contact.phones.map((p, i) => (
                    <span key={p.value}>{i > 0 ? <>&nbsp;|&nbsp;</> : null}{p.label ? `${p.label}: ` : ""}{p.value}</span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
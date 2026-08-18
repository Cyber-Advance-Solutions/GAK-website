import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Job Advertisements" };

export default function AdvertisementsPage() {
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
            <p><strong>For Normal &amp; Cambridge Stream</strong><br/>Applications are invited from qualified, competent and experienced educators and professionals for the following positions:</p>
          </div>
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
                <tr>
                  <td><strong>Pre-School</strong></td>
                  <td>Kindergarten Class</td>
                  <td className="prose">
                    <ul style={{ margin: 0 }}>
                      <li>Qualification: BS English / MA English, Montessori or ECCE qualification preferred</li>
                      <li>Experience: Minimum 2-3 years, preferably at KG/Preschool level</li>
                      <li>Excellent English communication and strong early-years classroom-management skills</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td><strong>Junior Section</strong></td>
                  <td>Urdu</td>
                  <td className="prose">
                    <ul style={{ margin: 0 }}>
                      <li>Qualification: BS/MA Urdu</li>
                      <li>Experience: Minimum 2-3 years of relevant teaching experience</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td><strong>Middle School</strong></td>
                  <td className="prose">
                    <ul style={{ margin: 0 }}>
                      <li>History</li>
                      <li>Geography</li>
                      <li>English</li>
                      <li>Science</li>
                      <li>Mathematics</li>
                    </ul>
                  </td>
                  <td className="prose">
                    <ul style={{ margin: 0 }}>
                      <li>Qualification: BS/MA/MSc in the relevant subject;</li>
                      <li>Experience: Minimum 3 years of relevant teaching experience</li>
                      <li>Strong subject knowledge, classroom-management and assessment skills</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td><strong>Senior School &amp; College Section</strong></td>
                  <td className="prose">
                    <ul style={{ margin: 0 }}>
                      <li>English</li>
                      <li>Mathematics</li>
                      <li>Chemistry</li>
                      <li>Urdu</li>
                      <li>Computer Science</li>
                      <li>Physics</li>
                      <li>Biology</li>
                    </ul>
                  </td>
                  <td className="prose">
                    <ul style={{ margin: 0 }}>
                      <li>Qualification: BS/MA/MSc/MPhil in the relevant subject</li>
                      <li>Experience: Minimum 5 years of teaching experience at SSC/HSSC level</li>
                      <li>FBISE teaching and examination experience will be preferred</li>
                      <li>Strong command of SLO-based teaching, assessment and examination preparation</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td><strong>APSIS - IGCSE / O Level</strong></td>
                  <td className="prose">
                    <ul style={{ margin: 0 }}>
                      <li>Mathematics</li>
                      <li>English</li>
                      <li>Computer Science</li>
                    </ul>
                  </td>
                  <td className="prose">
                    <ul style={{ margin: 0 }}>
                      <li>Experience: Minimum 5 years of relevant teaching experience, preferably at IGCSE/O Level</li>
                      <li>Cambridge teaching and examination experience will be strongly preferred</li>
                      <li>Sound understanding of Cambridge syllabus requirements, assessment objectives and examination techniques</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td><strong>School Psychologist</strong></td>
                  <td>Psychologist</td>
                  <td className="prose">
                    <ul style={{ margin: 0 }}>
                      <li>Qualification: BS/MSc/MPhil in Psychology, preferably with specialization in Educational, School or Clinical Psychology</li>
                      <li>Experience: Minimum 3 years of relevant experience, preferably in a school/educational setting</li>
                      <li>Experience in student counselling, psychological assessment, behavioural support, career guidance and parent/teacher consultation will be preferred</li>
                      <li>Excellent interpersonal, communication and professional confidentiality skills</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

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
                <li>Interested candidates should submit their updated CV along with copies of relevant academic and experience certificates via email <strong>gakhrn@gmail.com</strong></li>
                <li>Only <strong>Short-Listed</strong> candidates will be contacted</li>
              </ul>
              <div style={{ marginTop: 24, padding: 16, background: "var(--green-tint)", borderRadius: 8 }}>
                <strong style={{ color: "var(--green-900)" }}>Contact No:</strong>
                <p style={{ margin: 0, marginTop: 4 }}>Landline: 053-9240263 &nbsp;|&nbsp; WhatsApp: 0330-4250111</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
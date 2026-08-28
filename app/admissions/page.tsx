import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { Editorial, FactCard } from "@/components/Editorial";
import { ToastButton } from "@/components/Toast";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Apply Online" };

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Session 2026"
        title="Apply Online"
        intro="Submit an admission request — our office will contact you with next steps."
        image={BANNER.admissions}
        crumb={[{ label: "Admissions", href: "/admissions" }, { label: "Apply Online" }]}
      />

      <section className="sec" id="apply">
        <Editorial
          rail={
            <FactCard
              title="What you'll need"
              rows={[
                ["Birth certificate", "Original + copy"],
                ["Previous result", "Last annual / term"],
                ["B-form / CNIC", "Child & guardian"],
                ["Photographs", "Two passport size"],
              ]}
            />
          }
        >
          <div className="form">

            <div className="field">
              <label>Admission Stream <span className="req">*</span></label>
              <select>
                <option value="">Select stream</option>
                <option>APSAC Stream</option>
                <option>APSIS Stream</option>
              </select>
            </div>

            {/* 1. Student's Particulars */}
            <div className="field" style={{ marginBottom: 6 }}>
              <label style={{ fontSize: "1rem", fontWeight: 700, color: "var(--green-900)" }}>1. Student&rsquo;s Particulars</label>
            </div>

            <div className="field">
              <label>a. Name of the Candidate <span className="req">*</span></label>
              <input placeholder="Full name of the candidate" />
            </div>

            <div className="field">
              <label>b. Father&rsquo;s Name <span className="req">*</span></label>
              <input placeholder="Father's full name" />
            </div>

            <div className="field">
              <label>c. Profession</label>
              <input placeholder="Father's profession" />
            </div>

            <div className="frow">
              <div className="field">
                <label>d. Date of Birth <span className="req">*</span></label>
                <input type="date" />
              </div>
              <div className="field">
                <label>Form B (B-Form No.)</label>
                <input placeholder="B-Form number" />
              </div>
            </div>

            <div className="field">
              <label>e. Gender <span className="req">*</span></label>
              <select>
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="field">
              <label>f. Nationality &amp; Religion</label>
              <input placeholder="e.g. Pakistani / Islam" />
            </div>

            <div className="field">
              <label>g. Name &amp; Class of brothers or sisters already studying in GAK</label>
              <input placeholder="Name — Class (leave blank if none)" />
            </div>

            <div className="field">
              <label>h. Disability, if any</label>
              <input placeholder="Describe any disability (leave blank if none)" />
            </div>

            {/* 2. Father's / Guardian's Particulars */}
            <div className="field" style={{ marginBottom: 6, marginTop: 10 }}>
              <label style={{ fontSize: "1rem", fontWeight: 700, color: "var(--green-900)" }}>2. Father&rsquo;s / Guardian&rsquo;s Particulars</label>
            </div>

            <div className="field">
              <label>a. Name (Father / Guardian) <span className="req">*</span></label>
              <input placeholder="Father's / Guardian's full name" />
            </div>

            <div className="frow">
              <div className="field">
                <label>b. Telephone Contact — Residence</label>
                <input placeholder="Residence number" />
              </div>
              <div className="field">
                <label>Office</label>
                <input placeholder="Office number" />
              </div>
            </div>

            {/* 3. Mother's Particulars */}
            <div className="field" style={{ marginBottom: 6, marginTop: 10 }}>
              <label style={{ fontSize: "1rem", fontWeight: 700, color: "var(--green-900)" }}>3. Mother&rsquo;s Particulars</label>
            </div>

            <div className="frow">
              <div className="field">
                <label>a. Name</label>
                <input placeholder="Mother's full name" />
              </div>
              <div className="field">
                <label>Occupation</label>
                <input placeholder="Mother's occupation" />
              </div>
            </div>

            <div className="field">
              <label>b. Education</label>
              <input placeholder="Mother's highest qualification" />
            </div>

            {/* 4. Present Address */}
            <div className="field" style={{ marginBottom: 6, marginTop: 10 }}>
              <label style={{ fontSize: "1rem", fontWeight: 700, color: "var(--green-900)" }}>4. Present Address <span className="req">*</span></label>
            </div>
            <div className="field">
              <textarea placeholder="House no., Street, Area, City" style={{ minHeight: 80 }} />
            </div>

            {/* 5. Permanent Address */}
            <div className="field" style={{ marginBottom: 6, marginTop: 10 }}>
              <label style={{ fontSize: "1rem", fontWeight: 700, color: "var(--green-900)" }}>5. Permanent Address</label>
            </div>
            <div className="field">
              <textarea placeholder="If different from present address" style={{ minHeight: 80 }} />
            </div>

            <ToastButton msg="Admission request submitted — we'll be in touch soon!" className="btn-submit">Submit application</ToastButton>
            <p className="formnote">Prefer paper? <Link href="/downloads" style={{ color: "var(--green-700)", fontWeight: 700, textDecoration: "underline" }}>Download the registration form</Link>.</p>
          </div>
        </Editorial>
      </section>
    </>
  );
}

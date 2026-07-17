import Link from "next/link";
import { PenLine, ClipboardList, Users, CheckCircle2, FileText, Download } from "lucide-react";
import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import SectionHead from "@/components/SectionHead";
import { Editorial, FactCard } from "@/components/Editorial";
import { ToastButton } from "@/components/Toast";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Admissions" };

const STEPS: [React.ReactNode, string, string, string][] = [
  [<PenLine key="1" size={24} strokeWidth={1.8} />, "Step 01", "Submit application", "Apply online or download and submit the registration form."],
  [<ClipboardList key="2" size={24} strokeWidth={1.8} />, "Step 02", "Admission test", "Appear for the entry assessment on the scheduled date."],
  [<Users key="3" size={24} strokeWidth={1.8} />, "Step 03", "Interview", "Shortlisted students and parents attend a brief interaction."],
  [<CheckCircle2 key="4" size={24} strokeWidth={1.8} />, "Step 04", "Enrolment", "Confirm the seat with fee submission and documentation."],
];
const CRITERIA: [string, string, string][] = [
  ["Board classes (IX–XII)", "Min. 70% in previous result + entry test & interview", "APSACS / APSIS"],
  ["Non-board (I–VIII)", "Age-appropriate placement + assessment", "APSACS / APSIS"],
  ["Pre-School", "Interaction only — no written test", "Foundation"],
];
const DATES: [string, string, string, string][] = [
  ["15", "FEB", "Prep – V entry test", "8:30 AM · Main hall"],
  ["17", "FEB", "VI – VIII entry test", "8:30 AM · Senior block"],
  ["20", "FEB", "IX & XI entry test", "9:00 AM · Examination hall"],
];
const NAV = [
  { id: "process", label: "Process" },
  { id: "criteria", label: "Criteria" },
  { id: "dates", label: "Dates" },
  { id: "apply", label: "Apply" },
  { id: "downloads", label: "Downloads" },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Session 2026"
        title="Admissions"
        intro="Apply online, learn the process, review the criteria and check the admission test schedule."
        image={BANNER.admissions}
        crumb={[{ label: "Admissions" }]}
      />
      <SubNav items={NAV} />

      <section className="sec" id="process" style={{ scrollMarginTop: 150 }}>
        <div className="wrap">
          <SectionHead eyebrow="Four steps" title="The admission process" />
          <div className="pathway">
            {STEPS.map(([ic, n, t, d]) => (
              <div className="pw" key={t}><i className="pw-ic">{ic}</i><div className="pw-n">{n}</div><h4>{t}</h4><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="criteria" style={{ scrollMarginTop: 150, background: "var(--paper-2)" }}>
        <div className="wrap">
          <SectionHead eyebrow="Eligibility" title="Criteria for admission" />
          <div className="tbl-wrap"><table className="tbl">
            <thead><tr><th>Class group</th><th>Requirement</th><th>Stream</th></tr></thead>
            <tbody>{CRITERIA.map(([c, r, s]) => (<tr key={c}><td>{c}</td><td>{r}</td><td>{s}</td></tr>))}</tbody>
          </table></div>
        </div>
      </section>

      <section className="sec" id="dates" style={{ scrollMarginTop: 150 }}>
        <div className="wrap">
          <SectionHead eyebrow="Mark your calendar" title="Admission test schedule" />
          <ul className="eventlist" style={{ maxWidth: 620 }}>
            {DATES.map(([d, m, t, s]) => (
              <li key={t}><div className="dchip"><b>{d}</b><span>{m}</span></div><div className="ev"><div className="et">{t}</div><div className="es">{s}</div></div></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec" id="apply" style={{ scrollMarginTop: 150, background: "var(--paper-2)" }}>
        <SectionHead eyebrow="Start now" title="Apply online" intro="Submit an admission request — our office will contact you with next steps." />
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
            <div className="frow">
              <div className="field"><label>Student name <span className="req">*</span></label><input placeholder="Full name" /></div>
              <div className="field"><label>Class applying for <span className="req">*</span></label><select><option>Pre-School</option><option>Prep – V</option><option>VI – VIII</option><option>IX (FBISE)</option><option>IX (APSIS / Cambridge)</option><option>XI</option></select></div>
            </div>
            <div className="frow">
              <div className="field"><label>Date of birth</label><input type="date" /></div>
              <div className="field"><label>Stream</label><select><option>APSACS (FBISE)</option><option>APSIS (Cambridge)</option></select></div>
            </div>
            <div className="field"><label>Guardian name <span className="req">*</span></label><input placeholder="Parent / guardian" /></div>
            <div className="frow">
              <div className="field"><label>Contact number <span className="req">*</span></label><input placeholder="03XX-XXXXXXX" /></div>
              <div className="field"><label>Email</label><input placeholder="you@email.com" /></div>
            </div>
            <ToastButton msg="Admission request submitted — we'll be in touch soon!" className="btn-submit">Submit application</ToastButton>
            <p className="formnote">Prefer paper? <Link href="/downloads" style={{ color: "var(--green-700)", fontWeight: 700, textDecoration: "underline" }}>Download the registration form</Link>.</p>
          </div>
        </Editorial>
      </section>

      <section className="sec" id="downloads" style={{ scrollMarginTop: 150 }}>
        <div className="wrap">
          <SectionHead eyebrow="Paperwork" title="Forms & downloads" />
          {["Admission registration form", "School prospectus 2026", "Fee structure by class"].map((f) => (
            <div className="filerow" key={f}>
              <div className="f-ic"><FileText size={20} strokeWidth={1.8} /></div>
              <div><div className="f-nm">{f}</div><div className="f-meta">PDF · admissions office</div></div>
              <Link className="f-dl" href="/downloads"><Download size={14} strokeWidth={1.8} /> Open</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

import { Briefcase, ClipboardList, GraduationCap, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { ToastButton } from "@/components/Toast";
import { BANNER } from "@/lib/images";

export const metadata = { title: "HR & Careers" };

const OPENINGS: [string, string, string, string][] = [
  ["Subject Teacher — Mathematics", "Senior School", "Full-time", "g"],
  ["Montessori Directress", "Pre-School", "Full-time", "g"],
  ["Lab Assistant — Chemistry", "Senior School", "Contract", "b"],
  ["Admin Officer", "Administration", "Full-time", "g"],
];

const HOW: [React.ReactNode, string, string][] = [
  [<ClipboardList key="1" size={20} strokeWidth={1.8} />, "Find a role", "Review current openings and the requirements for each post."],
  [<GraduationCap key="2" size={20} strokeWidth={1.8} />, "Submit the form", "Apply through the official Google Form linked against the vacancy."],
  [<CheckCircle2 key="3" size={20} strokeWidth={1.8} />, "Demo & interview", "Shortlisted candidates are invited for a demo lesson and interview."],
];

export default function HrPage() {
  return (
    <>
      <PageHero
        eyebrow="Join our team"
        title="HR & careers"
        intro="Current openings, how to apply, and recruitment advertisements at GAK Campus."
        image={BANNER.hr}
        crumb={[{ label: "HR Management" }]}
      />

      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="We're hiring" title="Current openings" />
          <div className="grid g2">
            {OPENINGS.map(([pos, sec, type, c]) => (
              <div className="card" key={pos} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div className="lc-ic" style={{ width: 46, height: 46, flex: "none" }}><Briefcase size={22} strokeWidth={1.8} /></div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: "1.06rem", marginBottom: 6 }}>{pos}</h3>
                  <p style={{ marginBottom: 12 }}>{sec} · <span className={`pill ${c}`}>{type}</span></p>
                  <ToastButton as="a" msg="Opening the Google application form…" className="dl-btn">Apply now</ToastButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <SectionHead eyebrow="The process" title="How to apply" />
          <div className="linkcards">
            {HOW.map(([ic, t, d]) => (
              <div className="linkcard" key={t}><div className="lc-ic">{ic}</div><div><h4>{t}</h4><p>{d}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <SectionHead eyebrow="Quick apply" title="Send your application" />
          <div className="form">
            <div className="frow">
              <div className="field"><label>Full name <span className="req">*</span></label><input placeholder="Your name" /></div>
              <div className="field"><label>Applying for <span className="req">*</span></label><select>{OPENINGS.map(([p]) => <option key={p}>{p}</option>)}</select></div>
            </div>
            <div className="frow">
              <div className="field"><label>Contact number <span className="req">*</span></label><input placeholder="03XX-XXXXXXX" /></div>
              <div className="field"><label>Email</label><input placeholder="you@email.com" /></div>
            </div>
            <div className="field"><label>Highest qualification</label><input placeholder="e.g. M.Sc Mathematics" /></div>
            <div className="field"><label>Cover note</label><textarea placeholder="Tell us briefly about your experience…" /></div>
            <ToastButton msg="Application received — our HR team will be in touch." className="btn-submit">Submit application</ToastButton>
          </div>
        </div>
      </section>
    </>
  );
}

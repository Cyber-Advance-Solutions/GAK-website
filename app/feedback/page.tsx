import { ShieldCheck, EyeOff, MessageSquare } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { Editorial } from "@/components/Editorial";
import { ToastButton } from "@/components/Toast";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Feedback & Complaints" };

const ASSURANCE: [React.ReactNode, string, string][] = [
  [<EyeOff key="a" size={20} strokeWidth={1.8} />, "Stay anonymous", "Sharing your name and contact is entirely optional."],
  [<ShieldCheck key="b" size={20} strokeWidth={1.8} />, "Reviewed confidentially", "Every submission is read by the administration in confidence."],
  [<MessageSquare key="c" size={20} strokeWidth={1.8} />, "We follow up", "Genuine complaints get a response where contact details are given."],
];

export default function FeedbackPage() {
  return (
    <>
      <PageHero
        eyebrow="We're listening"
        title="Feedback & complaints"
        intro="Share suggestions or raise a concern — about teachers, administrative staff or anything else."
        image={BANNER.feedback}
        crumb={[{ label: "Feedback / Complaints" }]}
      />
      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Your voice matters" title="Tell us what's on your mind" />
        </div>
        <Editorial
          rail={
            <div className="factcard">
              <h4>How we handle feedback</h4>
              {ASSURANCE.map(([ic, t, d]) => (
                <div className="inforow" key={t}>
                  <div className="ir-ic">{ic}</div>
                  <div><div className="ir-v">{t}</div><div className="f-meta" style={{ marginTop: 2 }}>{d}</div></div>
                </div>
              ))}
            </div>
          }
        >
          {/* the Feedback form to submit to: principal.gak@gmail.com */}
          <div className="form">
            <div className="frow">
              <div className="field"><label>Your name</label><input placeholder="Optional — you may stay anonymous" /></div>
              <div className="field"><label>Contact (optional)</label><input placeholder="Phone or email" /></div>
            </div>
            <div className="frow">
              <div className="field"><label>Type <span className="req">*</span></label><select><option>Complaint</option><option>Feedback</option><option>Suggestion</option></select></div>
              <div className="field"><label>Regarding <span className="req">*</span></label><select><option>Teachers</option><option>Administrative Staff</option><option>General</option></select></div>
            </div>
            <div className="field"><label>Your message <span className="req">*</span></label><textarea placeholder="Describe your feedback or concern in detail…" /></div>
            <ToastButton msg="Thank you — your submission has been received." className="btn-submit">Submit</ToastButton>
          </div>
        </Editorial>
      </section>
    </>
  );
}

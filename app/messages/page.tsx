import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Messages" };

const LEADERS = [
  { ph: "MG", nm: "Maj Gen (R) Tariq Mahmood", role: "Chairman, APSACS", msg: "The Army Public Schools & Colleges System stands for merit, discipline and equal opportunity. At GAK, we carry that mission forward — preparing students to serve the nation with knowledge and integrity." },
  { ph: "SR", nm: "Brig (R) Saima Riaz", role: "Vice Chairman", msg: "Our strength lies in balance — rigorous academics paired with sports, arts and character. Every child at GAK is seen, supported and challenged to reach their fullest potential." },
  { ph: "AK", nm: "Brig (R) Asad Khan", role: "Principal, GAK Campus", msg: "To our students and parents: this campus is your second home. We promise an environment where curiosity is celebrated, effort is rewarded and discipline is a gift, not a burden." },
];

export default function MessagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Messages"
        intro="Guidance and vision from the leadership of the Army Public Schools & Colleges System and GAK Campus."
        image={BANNER.messages}
        crumb={[{ label: "Messages" }]}
      />
      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="From the desk of" title="Words from our leadership" />
          {LEADERS.map((l, i) => (
            <div className={`msgblock ${i % 2 === 1 ? "alt" : ""}`} key={l.nm}>
              <div className="mb-portrait">{l.ph}</div>
              <div className="mb-body">
                <blockquote>&ldquo;{l.msg}&rdquo;</blockquote>
                <div className="mb-name">{l.nm}</div>
                <div className="mb-role">{l.role}</div>
              </div>
            </div>
          ))}
          <Link className="link-arrow" href="/about">More about the school <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}

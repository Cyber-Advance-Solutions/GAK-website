import { PenLine, ClipboardList, Users, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Admission Process" };

const STEPS: [React.ReactNode, string, string, string][] = [
  [<PenLine key="1" size={24} strokeWidth={1.8} />, "Step 01", "Submit application", "Apply online or download and submit the registration form."],
  [<ClipboardList key="2" size={24} strokeWidth={1.8} />, "Step 02", "Admission test", "Appear for the entry assessment on the scheduled date."],
  [<Users key="3" size={24} strokeWidth={1.8} />, "Step 03", "Interview", "Shortlisted students and parents attend a brief interaction."],
  [<CheckCircle2 key="4" size={24} strokeWidth={1.8} />, "Step 04", "Enrolment", "Confirm the seat with fee submission and documentation."],
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Session 2026"
        title="Admission Process"
        intro="Learn the step-by-step process of getting admission in GAK."
        image={BANNER.admissions}
        crumb={[{ label: "Admissions", href: "/admissions" }, { label: "Process" }]}
      />

      <section className="sec" id="process">
        <div className="wrap">
          <SectionHead eyebrow="Four steps" title="The admission process" />
          <div className="pathway">
            {STEPS.map(([ic, n, t, d]) => (
              <div className="pw" key={t}><i className="pw-ic">{ic}</i><div className="pw-n">{n}</div><h4>{t}</h4><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

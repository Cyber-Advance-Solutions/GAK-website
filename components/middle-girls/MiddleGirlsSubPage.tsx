import Link from "next/link";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import StaffCard from "@/components/StaffCard";
import { SECTIONS } from "@/lib/data";
import {
  HEAD,
  DEPUTY_HEADS,
  CCA_COORDINATOR,
  COORDINATORS,
  DEPARTMENTS,
  CLASSES,
  POSITION_HOLDERS,
  ACTIVITIES,
  UPCOMING_EVENTS,
  FACILITIES,
  MIDDLE_GIRLS_SUBPAGES,
  type MiddleGirlsSub,
} from "@/lib/middle-girls-data";

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "What is the overall assessment and exam weightage for Middle School?",
    a: (
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Classes IV–V:</strong> 40% Continuous Embedded Assessments + 60% Centralized Term-End Exams (35 marks each for core subjects).</li>
        <li><strong>Classes VI–VII:</strong> 40% Continuous Formative Assessments + 60% Summative Centralized Exams.</li>
        <li><strong>Class VIII:</strong> 20% Formative Assessments + 80% Summative Centralized Board-pattern Exams.</li>
      </ul>
    )
  },
  {
    q: "What are the Promotion and Detention rules for Classes IV–VIII?",
    a: (
      <div className="space-y-2">
        <p>Core subjects (English, Urdu, Mathematics, Science) require a minimum D Grade (50%), while non-core subjects require an E Grade (45%). Overall consolidated score for Class VIII must be at least 50%.</p>
        <p>A student will be detained if they fail:</p>
        <ul className="list-disc pl-5">
          <li>3 Core Subjects</li>
          <li>2 Core + 1 Non-Core Subject</li>
          <li>1 Core + All Non-Core Subjects</li>
        </ul>
        <p className="italic text-sm text-gray-500 mt-2">&gt; Note: Double detention (failing 2 consecutive years in the same grade) results in compulsory withdrawal.</p>
      </div>
    )
  },
  {
    q: "Will Middle School students receive a Block Syllabus before Centralized Exams?",
    a: "Yes. The APSACS Secretariat issues a Block Syllabus 3 to 4 weeks prior to term-end exams. Syllabus covered and evaluated in the 1st Term is not re-tested in the 2nd Term exams."
  },
  {
    q: "How is Tarjama-tul-Quran assessed in Classes VI–VIII?",
    a: (
      <div className="space-y-2">
        <p>Islamiyat and Tarjama-tul-Quran are assessed in a single combined paper:</p>
        <ul className="list-disc pl-5">
          <li>Sections A & B: Islamiyat content</li>
          <li>Section C: Tarjama-tul-Quran content</li>
        </ul>
      </div>
    )
  },
  {
    q: "What happens if a student misses continuous assessments or centralized exams?",
    a: (
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Continuous Assessments:</strong> Unannounced embedded assessments are conducted during regular class routines without separate periods or datasheets. For Class IV–V genuine medical cases, make-up assessments occur during designated revision weeks.</li>
        <li><strong>1st Term Central Exams:</strong> If missed due to genuine, proven medical grounds, the student's 2nd Term exam scores for those subjects are applied to update the 1st Term record before final results are generated.</li>
      </ul>
    )
  },
  {
    q: "Are overall class positions (1st, 2nd, 3rd) announced for Middle School?",
    a: "No. Standard position ranks are not announced. Instead, Subject-Based Distinctions are awarded to top scorers per subject, along with certificates for Best Academic Performance, Conduct, CCAs, and Sports."
  },
  {
    q: "Are No Test Mondays and Fridays strictly applicable to Middle School continuous assessments?",
    a: "Yes. Continuous embedded assessments are strictly barred on Mondays and Fridays to protect students' weekends and lower academic fatigue. Additionally, no more than two written assessments can be conducted in a single week, with a maximum of one per day."
  },
  {
    q: "How is Classwork (C.W.) factored into the Middle School continuous assessment score?",
    a: "Separate marking/weightage for Classwork (C.W.) has been completely discontinued. Continuous assessment scores are based exclusively on embedded skill checks, targeted SLO worksheets, and oral/written evaluations rather than regular notebook maintenance."
  },
  {
    q: "What is the rule regarding Online Assignments for Classes IV–VIII?",
    a: "Online assignments through the APMS portal (apms.quiz.pk) serve strictly as diagnostic, revision, and reinforcement tools. While students are encouraged to attempt them, online assignment marks are not added to the final report card or term results."
  },
  {
    q: "How are Student Portfolios utilized in Middle School?",
    a: "Each student maintains a portfolio folder containing solved worksheets, continuous assessment sheets, and diagnostic feedback forms. Portfolios are shared with parents during Progress Review Sessions (PTMs) to provide transparent visibility into learning gaps and individual progress."
  },
  {
    q: "What is the policy for students taking a break for Hifz-e-Quran during Middle School?",
    a: "Students who score ≥ 75% in Class IV can take a formal leave of absence for up to 2 years to complete Hifz-e-Quran. Upon presenting an authentic Sanad/Certificate, they are re-admitted directly into Class VII (or Class VIII) without paying fresh admission fees or taking entrance exams."
  },
  {
    q: "What happens if a student is caught using unfair means/cheating during Middle School term exams?",
    a: "The answer script for that subject is cancelled immediately and awarded zero marks. The school administration conducts a formal review, summons the parents, and records the incident in the student's behavioral file."
  },
  {
    q: "Can parents request to take term-end exam answer scripts home for review?",
    a: "No. Answer scripts are archived in student dossier files and can only be inspected during PTMs under teacher supervision. Taking scripts home, photographing them, or altering marks is strictly prohibited."
  }
];

function SectionBody({ slug }: { slug: string }) {
  switch (slug) {
    case "deputy-section-head-cca":
      return (
        <div className="staffgrid">
          {DEPUTY_HEADS.map((s) => <StaffCard key={s.name} s={s} />)}
          {CCA_COORDINATOR.map((s) => <StaffCard key={s.name} s={s} />)}
        </div>
      );

    case "subject-coordinators":
      return (
        <div className="staffgrid">
          {COORDINATORS.map((s) => <StaffCard key={s.name} s={s} />)}
        </div>
      );

    case "faculty-by-department":
      return (
        <>
          {DEPARTMENTS.map((d) => (
            <div className="deptblock" key={d.name} style={{ marginBottom: 34 }}>
              <h3>{d.name}</h3>
              <div className="staffgrid">
                {d.teachers.map((s) => <StaffCard key={s.name + s.photo} s={s} />)}
              </div>
            </div>
          ))}
        </>
      );

    case "classes":
      return (
        <div className="classgrid">
          {CLASSES.map((c) => (
            <div className="figure" key={c.label}>
              <div className="fimg" style={{ backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src={c.photo} alt={c.label} fill sizes="(max-width: 820px) 100vw, 33vw" />
              </div>
              <figcaption><GraduationCap size={15} strokeWidth={1.8} /> {c.label}</figcaption>
            </div>
          ))}
        </div>
      );

    case "exam-schedule":
      return (
        <div className="tbl-wrap">
          <table className="tbl" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th colSpan={3} style={{ textAlign: 'center', fontSize: '1.1rem' }}>Middle School Assessment Framework Class IV-VIII</th>
              </tr>
              <tr>
                <th>Example</th>
                <th>Continuous Assessment</th>
                <th>Summative Assessment (Centralized Assessments / Exams)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Frequency</td>
                <td>
                  <ul style={{ paddingLeft: '1rem', margin: 0 }}>
                    <li>Continuous</li>
                    <li>End of unit Tests</li>
                  </ul>
                </td>
                <td>
                  <ul style={{ paddingLeft: '1rem', margin: 0 }}>
                    <li>Once at the end of each Term</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Nature</td>
                <td>
                  <ul style={{ paddingLeft: '1rem', margin: 0 }}>
                    <li>40% weightage in Term Exam (cl IV-VII)</li>
                    <li>20% weightage in Term Exam (cl VIII)</li>
                  </ul>
                </td>
                <td>
                  <ul style={{ paddingLeft: '1rem', margin: 0 }}>
                    <li>60% weightage in Term Exam (cl IV-VII)</li>
                    <li>80% weightage in Term Exam (cl VIII)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Tools</td>
                <td>
                  <ul style={{ paddingLeft: '1rem', margin: 0 }}>
                    <li>Written Assessment</li>
                    <li>Oral Assessment</li>
                    <li>Skill-based Assessment (Appendix 4 of Annexure B)</li>
                  </ul>
                </td>
                <td>
                  <strong>Cl IV-V:</strong> Centralized Assessments of all subjects<br />
                  <strong>Cl VI-VIII:</strong> Centralized exams for all subjects
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );

    case "activities":
      return (
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Sr.</th><th>Date</th><th>Event</th></tr></thead>
            <tbody>
              {ACTIVITIES.map(([date, ev], i) => (
                <tr key={i}><td>{i + 1}</td><td>{date}</td><td>{ev}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "achievements":
      return (
        <>
          {POSITION_HOLDERS.map((ph) => (
            <div className="deptblock" key={ph.class} style={{ marginBottom: 34 }}>
              <h4 className="text-center font-display text-lg mb-6">{ph.class}</h4>
              <div className="staffgrid justify-center flex flex-wrap">
                {ph.students.map((s) => <StaffCard key={s.name + s.photo} s={s} />)}
              </div>
            </div>
          ))}
        </>
      );

    case "upcoming-events":
      return (
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Sr.</th><th>Date</th><th>Event</th></tr></thead>
            <tbody>
              {UPCOMING_EVENTS.map(([date, ev], i) => (
                <tr key={i}><td>{i + 1}</td><td>{date}</td><td>{ev}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "facilities":
      return (
        <>
          <div className="prose mb-8">
            <p className="text-gray-700 font-body text-lg">
              Our Middle Girls Wing provides a dynamic, safe, and student-centered learning environment designed to support academic excellence and holistic development.
            </p>
          </div>
          <h3 className="text-xl font-bold text-green-800 mb-6">Key Facilities</h3>
          <ul className="grid md:grid-cols-2 gap-6 list-none pl-0">
            {FACILITIES.map((facility, idx) => (
              <li key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="bg-green-50 p-2 rounded-lg shrink-0 mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                </div>
                <p className="text-gray-700 text-[15px] leading-relaxed m-0">{facility}</p>
              </li>
            ))}
          </ul>
        </>
      );

    case "faqs":
      return (
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <details key={idx} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden open:ring-1 open:ring-green-100">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-gray-800 hover:text-green-800">
                <span className="pr-6 font-display text-lg">{faq.q}</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="text-gray-600 px-6 pb-6 font-body text-[15px] leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      );

    default:
      return null;
  }
}

export default function MiddleGirlsSubPage({ sub }: { sub: MiddleGirlsSub }) {
  const data = SECTIONS["middle-girls"];

  return (
    <>
      <PageHero
        eyebrow={sub.eyebrow}
        title={sub.label}
        image={CLASSES[0].photo}
        crumb={[
          { label: "Quick Links", href: "/quick-links" },
          { label: data.name, href: "/sections/middle-girls" },
          { label: sub.label },
        ]}
      />

      <section className="sec">
        <Editorial
          rail={
            <>
              <FactCard
                title="Section facts"
                rows={[
                  ["Section head", HEAD.name],
                  ["Classes", "IV – VIII"],
                  ["Timings", "7:45 AM – 1:45 PM"],
                ]}
              />
              <div className="factcard">
                <h4>Middle Girls pages</h4>
                <ul>
                  {MIDDLE_GIRLS_SUBPAGES.map((p) => (
                    <li key={p.slug} style={{ display: "block" }}>
                      <Link
                        href={`/sections/middle-girls/${p.slug}`}
                        style={{ color: p.slug === sub.slug ? "var(--ink)" : "var(--green-700)", fontWeight: 600 }}
                      >
                        {p.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          }
        >
          <section>
            <SectionHead eyebrow={sub.eyebrow} title={sub.label} />
            <SectionBody slug={sub.slug} />
          </section>
        </Editorial>
      </section>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, GraduationCap } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import { SECTIONS, type SectionKey } from "@/lib/data";

const IMG = (name: string) => `/sections/middle-girls/${name}`;

type Staff = { name: string; role?: string; qualification: string; joined: string; photo: string };

const HEAD: Staff = {
  name: "Mrs. Qudsia Bukhari",
  role: "Section Head",
  qualification: "M.A English Literature, B.Ed.",
  joined: "02 Nov 1999",
  photo: IMG("qudsia-bukhari.jpg"),
};

const DEPUTY_HEADS: Staff[] = [
  { name: "Aamira Nasim", role: "Deputy Section Head", qualification: "M.B.A (Finance), M.A in Linguistics, B.Ed.", joined: "01 Aug 2016", photo: IMG("aamira-nasim.jpg") },
];

const CCA_COORDINATOR: Staff[] = [
  { name: "Fariha Kanwal", role: "CCA Coordinator", qualification: "Doctor of Pharm.D.", joined: "16 Aug 2013", photo: IMG("fariha-kanwal.jpg") },
];

const COORDINATORS: Staff[] = [
  { name: "Anum Adnan", role: "Subject Coordinator (English)", qualification: "M.A English", joined: "19 Jan 2018", photo: IMG("anum-adnan.jpg") },
  { name: "Reema Rani", role: "Subject Coordinator (Urdu)", qualification: "M.A Urdu, B.Ed., M.Ed", joined: "01 Sep 2016", photo: IMG("reema-rani.jpg") },
  { name: "Maryam Sehar", role: "Subject Coordinator (Mathematics)", qualification: "BS Mathematics", joined: "08 Nov 2018", photo: IMG("maryam-sehar.jpg") },
  { name: "Ammara Ali", role: "Subject Coordinator (Science)", qualification: "M.Sc Botany", joined: "15 March 2018", photo: IMG("ammara-ali.jpg") },
  { name: "Sadia Parveen", role: "Subject Coordinator (S.st/Hist/Geo)", qualification: "M.Sc (Botany)", joined: "28 Aug 2018", photo: IMG("sadia-parveen.jpg") },
  { name: "Najma Sohail", role: "Subject Coordinator (Islamiyat)", qualification: "M.A History", joined: "01 Oct 1998", photo: IMG("najma-sohail.jpg") },
  { name: "Sumaira Shabbir", role: "AIS & Subject Coordinator (Computer)", qualification: "MIT", joined: "27 Sep 2024", photo: IMG("sumaira-shabbir.jpg") },
];

const DEPARTMENTS: { name: string; teachers: Staff[] }[] = [
  {
    name: "English Department",
    teachers: [
      { name: "Maria Irshad", qualification: "M.A English, M.A International Relations", joined: "01 Aug 2023", photo: IMG("maria-irshad.jpg") },
      { name: "Tamkeen Hashmi", qualification: "M.A English, M.A Mass Communication, B.Ed.", joined: "28 Aug 2019", photo: IMG("tamkeen-hashmi.jpg") },
      { name: "Ujala Javed", qualification: "M.A English", joined: "10 Oct 2021", photo: IMG("ujala-javed.jpg") },
      { name: "Aroosa Adil", qualification: "M.Phil English Literature", joined: "26 Aug 2025", photo: IMG("aroosa-adil.jpg") },
      { name: "Hina Naseem", qualification: "M.Phil English Literature, B.Ed", joined: "20 Aug 2025", photo: IMG("hina-naseem.jpg") },
    ],
  },
  {
    name: "Urdu Department",
    teachers: [
      { name: "Nazia Nazir", qualification: "M.A Urdu, B.Ed", joined: "10 Nov 2010", photo: IMG("nazia-nazir.jpg") },
      { name: "Komal Iqbal", qualification: "M.A Education", joined: "08 May 2025", photo: IMG("komal-iqbal.jpg") },
      { name: "Nusrat Nasreen", qualification: "M.Ed., M.A Urdu & B.Ed.", joined: "25 Feb 2021", photo: IMG("nusrat-nasreen.jpg") },
      { name: "Sana Mubeen", qualification: "M.A Urdu, M.Sc Economics, B.Ed", joined: "01 Aug 2024", photo: IMG("sana-mubeen.jpg") },
      { name: "Tahira Yasmeen", qualification: "M.A Urdu, B.Ed", joined: "20 Sep 2025", photo: IMG("tahira-yasmeen.jpg") },
    ],
  },
  {
    name: "Math Department",
    teachers: [
      { name: "Riffat Parveen", qualification: "M.Sc(Statistics)", joined: "02 Jul 2026", photo: IMG("riffat-parveen.jpg") },
      { name: "Zara Shahzad", qualification: "BS (Honors) in Mathematics", joined: "02 Oct 2023", photo: IMG("zara-shahzad.jpg") },
      { name: "Ms Mishal Abdullah", qualification: "BS (Honors) Mathematics", joined: "29 Jan 2024", photo: IMG("mishal-abdullah.jpg") },
      { name: "Samina Touqeer", qualification: "B.A(Eco), B.Ed", joined: "13 Oct 2008", photo: IMG("samina-touqeer.jpg") },
      { name: "Humaira Waseem", qualification: "M.Phil Mathematics, B.Ed", joined: "03 Sep 2024", photo: IMG("humaira-waseem.jpg") },
      { name: "Hina Aziz", qualification: "BS (Honors) Mathematics", joined: "02 Jul 2026", photo: IMG("hina-aziz.jpg") },
    ],
  },
  {
    name: "Science Department",
    teachers: [
      { name: "Iram Arshad", qualification: "M.Sc Physics", joined: "29 Jan 2018", photo: IMG("iram-arshad.jpg") },
      { name: "Hajra Waheed", qualification: "BS (Honors) Biochemistry and Biotechnology", joined: "26 Oct 2020", photo: IMG("hajra-waheed.jpg") },
      { name: "Syeda Zainab", qualification: "M.Sc Physics + B.Ed", joined: "18 Aug 2023", photo: IMG("syeda-zainab.jpg") },
      { name: "Sania Bibi", qualification: "M.Sc Chemistry + B.Ed", joined: "26 Aug 2024", photo: IMG("sania-bibi.jpg") },
    ],
  },
  {
    name: "History/Geography Department",
    teachers: [
      { name: "Nuzhat Haroon", qualification: "Masters in International Relations (IR)", joined: "13 Oct 2022", photo: IMG("nuzhat-haroon.jpg") },
    ],
  },
  {
    name: "Islamiyat Department",
    teachers: [
      { name: "Zareen Beenish", qualification: "Fazal Arabic", joined: "25 Sep 2023", photo: IMG("zareen-beenish.jpg") },
      { name: "Qaisra Adeeba", qualification: "M.A Physical Education, B.Ed", joined: "2002", photo: IMG("qaisra-adeeba.jpg") },
      { name: "Bushra Asim", qualification: "M.A(Urdu) / M. ED", joined: "11 Sep 2021", photo: IMG("bushra-asim.jpg") },
      { name: "Bushra Bibi", qualification: "M.A(Isl), B.ED, M.ED", joined: "26 Aug 2025", photo: IMG("bushra-bibi.jpg") },
    ],
  },
  {
    name: "Computer Department",
    teachers: [
      { name: "Maleeha Mushtaq", qualification: "BS IT", joined: "20 Aug 2025", photo: IMG("maleeha-mushtaq.jpg") },
      { name: "Mehwish Shabbir", qualification: "MIT", joined: "05 Sep 2024", photo: IMG("mehwish-shabbir.jpg") },
    ],
  },
  {
    name: "PT Department",
    teachers: [
      { name: "Zara Samar", qualification: "Masters in Education, M.Sc Health & Physical Education and Sports Sciences", joined: "20 Aug 2025", photo: IMG("zara-samar.jpg") },
    ],
  },
  {
    name: "Art Department",
    teachers: [
      { name: "Fareeha Areej", qualification: "ADP Computer Science", joined: "10 Oct 2023", photo: IMG("fareeha-areej.jpg") },
    ],
  },
];

const CLASSES = [
  { label: "Class IV", photo: IMG("classIV.jpg") },
  { label: "Class V", photo: IMG("classV.jpg") },
  { label: "Class VI", photo: IMG("classVI.jpg") },
  { label: "Class VII", photo: IMG("classVII.jpg") },
  { label: "Class VIII", photo: IMG("classVIII.jpg") },
];

const POSITION_HOLDERS = [
  { class: "Class IV", students: [
    { name: "Nimra Tariq", role: "IV A", qualification: "97.01%", joined: "", photo: IMG("nimra-tariq.png") },
    { name: "Haniya Noor", role: "IV", qualification: "95.62%", joined: "", photo: IMG("haniya-noor.png") },
    { name: "Fatima Aman Khan", role: "IV", qualification: "95.62%", joined: "", photo: IMG("fatima-aman-khan.png") },
    { name: "Adan Nasar", role: "IV", qualification: "93.66%", joined: "", photo: IMG("adan-nasar.png") },
  ]},
  { class: "Class V", students: [
    { name: "Syeda Tabeer Zahra", role: "V", qualification: "97.37%", joined: "", photo: IMG("syeda-tabeer-zahra.jpg") },
    { name: "Hibba Sehar", role: "V", qualification: "96.96%", joined: "", photo: IMG("hibba-sehar.png") },
    { name: "Marwa Akber", role: "V", qualification: "96.8%", joined: "", photo: IMG("marwa-akber.jpg") },
  ]},
  { class: "Class VI", students: [
    { name: "Anaya Sajjad Gondal", role: "VI", qualification: "97.16%", joined: "", photo: IMG("anaya-sajid-gondal.png") },
    { name: "Syeda Kisaa Fatima", role: "VI", qualification: "96.74%", joined: "", photo: IMG("syeda-kisaa-fatima.jpg") },
    { name: "Areeba Sajjad", role: "VI", qualification: "96.01%", joined: "", photo: IMG("areeba-sajid.jpg") },
  ]},
  { class: "Class VII", students: [
    { name: "Aatika Saeed", role: "VII", qualification: "97.65%", joined: "", photo: IMG("aatika-saeed.png") },
    { name: "Maria Raja", role: "VII", qualification: "96.66%", joined: "", photo: IMG("maria-raja.jpg") },
    { name: "Aiza Sajid", role: "VII", qualification: "96.05%", joined: "", photo: IMG("aiza-sajid.jpg") },
  ]},
  { class: "Class VIII", students: [
    { name: "Syeda Ayesha Waqar", role: "VIII", qualification: "99.12%", joined: "", photo: IMG("syeda-ayesha-waqar.png") },
    { name: "Zainab Sarfraz", role: "VIII", qualification: "97.86%", joined: "", photo: IMG("zainab-sarfraz.jpg") },
    { name: "Zeemal Khan", role: "VIII", qualification: "96.71%", joined: "", photo: IMG("zeemal-khan.jpg") },
  ]}
];

const ACTIVITIES = [
  ["4th April, 26", "Orientation Day for Parents"],
  ["22nd April, 26", "Investiture Ceremony"],
  ["24-25th April, 26", "Literature Festival"],
  ["27th-30th April, 26", "Inter-House Sports Competition"],
  ["1st May, 26", "Labour Day Holiday"],
  ["6th May, 26", "Inter-House Quiz Competition"],
  ["10th May, 26", "Youm-E-Marka-E-Haq"],
  ["11th-15th May, 26", "Health & Hygiene Week"],
  ["24th May, 26", "International Day of The Markhor"],
  ["27th-29th May, 26", "Eid-ul-Adha"],
  ["28th May, 26", "Youm-E-Taqbeer"],
  ["1st June-9th Aug, 26", "Summer Vacations"],
  ["24-25th June, 26", "Ashura"],
  ["14th Aug, 26", "Independence Day"],
  ["24th-28th Aug, 26", "SDGs Awareness Week"],
  ["25th Aug, 26", "Rabbi-ul-Awal"],
  ["2nd Sep' 26", "Inter-House Naat & Qirat Competition"],
  ["6th Sep, 26", "Defence Day"],
  ["8th Sep, 26", "International Literacy Day"],
  ["21st Sep, 26", "International Peace Day"],
  ["28th Sep-3rd Oct, 26", "Intra-Regional Sports Competition"],
  ["3rd Oct, 26", "APSACS Foundation Day"],
  ["5th Oct, 26", "World Teachers Day"],
  ["10th Oct, 26", "World Mental Health Day"],
  ["15th Oct, 26", "Global Hand washing Day"],
  ["16th Oct, 26", "World Food Day"],
  ["9th Nov, 26", "Iqbal Day"],
  ["16th Nov, 26", "International Day of Tolerance"],
  ["20th Nov, 26", "World Children Day"],
  ["25th Nov, 26", "Inter-House Debate Competition"],
  ["3rd Dec, 26", "International Day of Disability"],
  ["7th-11th Dec, 26", "Civic Awareness & Community Service week"],
  ["16th Dec, 26", "Youm-E-Qaumi Azm-E-Taleem"],
  ["25th Dec, 26", "Quaid's Day & Christmas"],
  ["27th Jan, 27", "Inter House Art & Craft Competition"],
  ["5th Feb, 27", "Kashmir Day"],
  ["8th-12th Feb, 27", "Science & Technology Week"],
  ["3rd March, 27", "World Wildlife Day"],
  ["5th March, 27", "Gratitude Day"],
  ["8th March, 27", "International Women Day"],
  ["10th-12th March, 27", "Eid-ul-Fitr"],
  ["22nd March, 27", "World Water Day"],
  ["23rd March, 27", "Pakistan Day"],
  ["29th March-2nd April, 27", "Result Preparation Day"],
  ["29th March-2nd April, 27", "Book Bank Week"],
  ["3rd April, 27", "Final Result & Prize Distribution"],
  ["8th-10th April, 27", "Teachers' Preparation Day"],
  ["12th April, 27", "New Academic Session"],
  ["22nd April, 26", "Investiture Ceremony"],
  ["24-25th April, 26", "Literature Festival"],
  ["27th-30th April, 26", "Inter-House Sports Competition"],
];

const UPCOMING_EVENTS = [
  ["1st – 4th April, 26", "Teachers' Preparation Day Book Bank Week"],
  ["4th April, 26", "Orientation Day For Parents"],
  ["6th April, 26", "Academic Session Begins (1st Term)"],
  ["1st June-9th Aug, 26", "Summer Vacations"],
  ["10th Aug, 26", "School Reopen"],
  ["29th-Aug, 26", "Progress Review Session"],
  ["5th-9th Oct, 26", "Teaching Week for (IV-V)"],
  ["5th-9th Oct, 26", "Revision for (VI-VIII)"],
  ["12th-16th Oct, 26", "Revision & Makeup Assessment Week"],
  ["12th-23rd Oct, 26", "1st Term Examination"],
  ["19th-23rd Oct, 26", "Centralised Assessment"],
  ["26th- 30th Oct, 26", "Result Preparation"],
  ["31st Oct, 26", "Progress Review Session"],
  ["2nd Nov, 26", "2nd Term Begin"],
  ["25th-10th Jan, 27", "Winter Vacation"],
  ["11th Jan, 27", "School Reopen"],
  ["16th Jan, 27", "Progress Review Session"],
  ["1st-5th March, 27", "Teaching Week (IV-V) Revision (VI-VIII)"],
  ["15th-19th March, 27", "Revision & Makeup Assessment Week"],
  ["15th-26th March, 27", "2nd Term Examination (VI-VIII)"],
  ["22nd-26th March, 27", "Centralized Assessment (IV-V)"],
  ["29th March-2nd April, 27", "Result Preparation Day"],
  ["29th March-2nd April, 27", "Book Bank Week"],
  ["3rd April, 27", "Final Result & Prize Distribution"],
  ["8th-10th April, 27", "Teachers' Preparation Day"],
  ["10th April, 27", "Open House"],
  ["12th April, 27", "New Academic Session"],
];

const FACILITIES = [
  "20 Spacious Classrooms equipped with comfortable furniture, proper ventilation, and modern teaching aids to create an engaging learning atmosphere.",
  "1 x Well-Equipped Computer Lab that promote ICT integration in education, enabling students to develop essential digital literacy and technology skills.",
  "Large Playground offering ample space for sports, physical activities, and recreational programs that encourage teamwork and healthy lifestyles.",
  "Cold Water Facility with water coolers installed across the campus to ensure students have access to clean and chilled drinking water throughout the day.",
  "Highly Competent Faculty Members who are experienced, qualified, and committed to nurturing students through innovative teaching methods and individualized guidance.",
  "Interactive Learning Environment that encourages critical thinking, creativity, collaboration, and active student participation.",
  "Well-Organized Assessment System to monitor academic progress and provide timely feedback for continuous improvement.",
  "Safe and Secure Campus with a disciplined environment that ensures the well-being and safety of every student.",
  "Co-Curricular Activities including debates, quizzes, science exhibitions, literary competitions, and cultural events to foster confidence and leadership skills.",
  "Character Building and Moral Education integrated into daily school life to develop responsible, respectful, and ethical individuals.",
  "Career and Academic Guidance to help students identify their strengths and prepare for future educational opportunities.",
  "Clean and Hygienic Environment with well-maintained classrooms, washrooms, and campus facilities."
];

const FAQS = [
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

function StaffCard({ s }: { s: Staff }) {
  return (
    <div className="staffcard">
      <div className="sf-ph">
        <Image src={s.photo} alt={s.name} fill sizes="84px" />
      </div>
      <div className="sf-nm">{s.name}</div>
      {s.role && <div className="sf-role">{s.role}</div>}
      <div className="sf-q">{s.qualification}</div>
      {s.joined && <div className="sf-j">Joined {s.joined}</div>}
    </div>
  );
}

export default function MiddleGirlsSection() {
  const others = (Object.keys(SECTIONS) as SectionKey[]).filter((k) => k !== "middle-girls");
  const data = SECTIONS["middle-girls"];

  return (
    <>
      <PageHero
        eyebrow={data.sub}
        title={data.name}
        intro={data.headMsg}
        image={CLASSES[0].photo}
        crumb={[{ label: "Quick Links", href: "/quick-links" }, { label: data.name }]}
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
                <h4>Other sections</h4>
                <ul>
                  {others.map((k) => (
                    <li key={k} title={`${SECTIONS[k].name} - ${SECTIONS[k].sub}`} style={{ display: "block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      <Link href={`/sections/${k}`} style={{ color: "var(--green-700)", fontWeight: 600 }}>{SECTIONS[k].name}</Link>
                      <span style={{ fontWeight: 500, color: "var(--ink-soft)", marginLeft: "6px" }}>- {SECTIONS[k].sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          }
        >
          {/* Section head message */}
          <section>
            <SectionHead eyebrow="Leadership" title="Section Head" />
            <div className="quoteband" style={{ borderRadius: "var(--r)" }}>
              <div className="qb" style={{ padding: 32, alignItems: 'flex-start' }}>
                <div className="qb-portrait" style={{ width: 110, height: 110, position: "relative", overflow: "hidden", backgroundColor: '#f0f0f0' }}>
                  <Image src={HEAD.photo} alt={HEAD.name} fill sizes="110px" style={{ borderRadius: "50%", objectFit: "cover" }} />
                </div>
                <div className="qb-body">
                  <span className="eyebrow">Message from the Section Head</span>
                  <blockquote style={{ fontSize: "0.85rem" }}>
                    <p>
                      As Section Head, it gives me immense pride to introduce this digital gateway—a platform designed to seamlessly connect our vibrant campus community with the world.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                      At Garrison Academy, education extends beyond the traditional classroom. We are committed to fostering a dynamic environment where academic rigor, strong moral character, and critical thinking converge. Our goal is to nurture well-rounded, resilient individuals equipped to navigate and lead in an ever-evolving global landscape.
                    </p>
                    <p style={{ marginTop: '1rem', fontStyle: 'italic', fontWeight: 'bold' }}>
                      "We do not just teach for examinations; we educate for life, shaping minds that inquire, hearts that care, and leaders who serve."
                    </p>
                  </blockquote>
                  <div className="qb-foot">
                    <div className="qb-who"><div className="nm">{HEAD.name}</div><div className="rl">{HEAD.role}</div></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Deputy section heads & CCA */}
          <section>
            <SectionHead eyebrow="Leadership" title="Deputy Section Head & CCA Coordinator" />
            <div className="staffgrid">
              {DEPUTY_HEADS.map((s) => <StaffCard key={s.name} s={s} />)}
              {CCA_COORDINATOR.map((s) => <StaffCard key={s.name} s={s} />)}
            </div>
          </section>

          {/* Coordinators */}
          <section>
            <SectionHead eyebrow="Leadership" title="Subject Coordinators" />
            <div className="staffgrid">
              {COORDINATORS.map((s) => <StaffCard key={s.name} s={s} />)}
            </div>
          </section>

          {/* Faculty by department */}
          <section>
            <SectionHead eyebrow="Our Teachers" title="Faculty by Department" />
            {DEPARTMENTS.map((d) => (
              <div className="deptblock" key={d.name} style={{ marginBottom: 34 }}>
                <h3>{d.name}</h3>
                <div className="staffgrid">
                  {d.teachers.map((s) => <StaffCard key={s.name + s.photo} s={s} />)}
                </div>
              </div>
            ))}
          </section>

          {/* Classes */}
          <section>
            <SectionHead eyebrow="Campus life" title="Classes" />
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
          </section>

          {/* Exam schedule */}
          <section>
            <SectionHead eyebrow="Assessment" title="Exam Schedule" />
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
          </section>

          {/* Activities */}
          <section>
            <SectionHead eyebrow="Calendar" title="Activities" />
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
          </section>

          {/* Achievements */}
          <section>
            <SectionHead eyebrow="Awards" title="Achievements" />
            
            {/* <h3 className="text-xl font-bold text-green-800 mb-6 text-center">List of Position Holders (Session 2025-26)</h3> */}
            
            {POSITION_HOLDERS.map((ph) => (
              <div className="deptblock" key={ph.class} style={{ marginBottom: 34 }}>
                <h4 className="text-center font-display text-lg mb-6">{ph.class}</h4>
                <div className="staffgrid justify-center flex flex-wrap">
                  {ph.students.map((s) => <StaffCard key={s.name + s.photo} s={s} />)}
                </div>
              </div>
            ))}
          </section>

          {/* Upcoming Events */}
          <section>
            <SectionHead eyebrow="Look Ahead" title="Upcoming Events" />
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
          </section>

          {/* Facilities */}
          <section>
            <SectionHead eyebrow="Campus" title="Facilities" />
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
          </section>

          {/* FAQs */}
          <section>
            <SectionHead eyebrow="Information" title="Frequently Asked Questions" />
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
          </section>
        </Editorial>
      </section>
    </>
  );
}

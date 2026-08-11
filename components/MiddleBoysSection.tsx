import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, Building2, GraduationCap } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import { SECTIONS, type SectionKey } from "@/lib/data";

const IMG = (name: string) => `/sections/middle-boys/${name}`;

type Staff = { name: string; role?: string; qualification: string; joined: string; photo: string };

const HEAD: Staff = {
  name: "Ms. Mariam Umar",
  role: "Section Head",
  qualification: "MA English, B.Ed",
  joined: "",
  photo: IMG("image1.jpeg"),
};

const DEPUTY_HEADS: Staff[] = [
  { name: "Ms. Naghmana Jabeen", role: "Deputy Section Head", qualification: "MA Pak Studies", joined: "28 Aug 2012", photo: IMG("image2.png") },
  { name: "Ms. Tabinda Iqbal", role: "Deputy Section Head", qualification: "MSc Chemistry", joined: "23 Aug 2021", photo: IMG("image2.jpeg") },
];

const DEPARTMENTS: { name: string; teachers: Staff[] }[] = [
  {
    name: "English Department",
    teachers: [
      { name: "Ms. Sughra Shamim", qualification: "MA English, M.Ed", joined: "31 Mar 2016", photo: IMG("image3.jpeg") },
      { name: "Ms. Mavrah Khan", qualification: "BS (Hons) Chemistry, B.Ed", joined: "21 Aug 2023", photo: IMG("image4.jpeg") },
      { name: "Ms. Nashia Sajid", qualification: "BS (Hons) Zoology", joined: "26 Aug 2025", photo: IMG("image3.png") },
      { name: "Ms. Fatima Abid", qualification: "MA English", joined: "10 Sep 2024", photo: IMG("image5.jpeg") },
      { name: "Ms. Asma Ibrar", qualification: "M.Phil (EPM), MA English, M.Ed", joined: "10 Sep 2025", photo: IMG("image6.jpeg") },
      { name: "Ms. Sehrish Zafar", qualification: "MA English", joined: "26 Aug 2025", photo: IMG("image7.jpeg") },
    ],
  },
  {
    name: "Urdu Department",
    teachers: [
      { name: "Ms. Uzma Shezadi", role: "Subject Coordinator", qualification: "MA Urdu", joined: "9 Sep 2024", photo: IMG("image8.jpeg") },
      { name: "Ms. Kalsoom Zahra", qualification: "MA Urdu, B.Ed", joined: "25 Aug 2010", photo: IMG("image9.jpeg") },
      { name: "Ms. Asifa Naseem", qualification: "MA Islamiyat, Edu", joined: "16 Aug 2006", photo: IMG("image10.jpeg") },
      { name: "Ms. Iftikhar Ali", qualification: "MA Urdu, MA History", joined: "16 Aug 2006", photo: IMG("image11.jpeg") },
      { name: "Ms. Asiha Ashraf", qualification: "MA Urdu", joined: "26 Sep 2016", photo: IMG("image12.jpeg") },
      { name: "Ms. Farhat Yasmin", qualification: "MA History, Phy Edu", joined: "24 Mar 1992", photo: IMG("image13.jpeg") },
    ],
  },
  {
    name: "Math Department",
    teachers: [
      { name: "Ms. Nayyer Semab", role: "Subject Coordinator", qualification: "MA Pak Studies, BSc Double Math", joined: "22 Sep 2025", photo: IMG("image14.jpeg") },
      { name: "Mr. Manzoor Hussain", qualification: "MA Economics", joined: "15 Aug 2001", photo: IMG("image15.jpeg") },
      { name: "Mr. Mehtab Ahmed", qualification: "MSc (Math), B.Ed, PTC", joined: "06 Aug 2016", photo: IMG("image16.jpeg") },
      { name: "Ms. Iqra Fiaz", qualification: "BS (Hons) Computer Science", joined: "11 Nov 2025", photo: IMG("image17.jpeg") },
      { name: "Mr. Luqman Arif", qualification: "MS (Physics), B.Ed", joined: "2 May 2019", photo: IMG("image18.jpeg") },
    ],
  },
  {
    name: "Science Department",
    teachers: [
      { name: "Ms. Raheela Khalid", role: "Subject Coordinator", qualification: "BSc, B.Ed", joined: "2 Feb 2002", photo: IMG("image19.jpeg") },
      { name: "Ms. Aniqa Asif", qualification: "MSc Chemistry", joined: "20 May 2003", photo: IMG("image20.jpeg") },
      { name: "Ms. Maeeda Khan", qualification: "BS Chemistry, B.Ed", joined: "16 Sep 2021", photo: IMG("image21.jpeg") },
      { name: "Ms. Lubna Mansoor", qualification: "BA", joined: "01 Apr 2017", photo: IMG("image22.jpeg") },
    ],
  },
  {
    name: "S.St / History / Geography Department",
    teachers: [
      { name: "Ms. Zubia Mehmood", qualification: "MA (History), B.Ed", joined: "15 Oct 2015", photo: IMG("image23.jpeg") },
    ],
  },
  {
    name: "Islamiyat Department",
    teachers: [
      { name: "Ms. Salma Sabir", qualification: "MA Islamiyat, M.Ed", joined: "05 Jan 2010", photo: IMG("image24.jpeg") },
      { name: "Mr. Ihsan-ur-Rehman", qualification: "MA Islamiyat", joined: "01 Aug 2022", photo: IMG("image25.jpeg") },
      { name: "Mr. Sohail Iqbal", qualification: "MA Islamiyat, B.Ed", joined: "11 Feb 2008", photo: IMG("image26.jpeg") },
      { name: "Ms. Saima Hameed", qualification: "MA Islamiyat, B.Ed", joined: "01 Aug 2022", photo: IMG("image27.jpeg") },
    ],
  },
  {
    name: "Computer Department",
    teachers: [
      { name: "Ms. Sobia Mazhar", role: "Subject Coordinator", qualification: "MA Political Science", joined: "01 Apr 2017", photo: IMG("image28.jpeg") },
      { name: "Ms. Safeera Asghar", qualification: "MSc, M.Ed", joined: "1 Aug 2022", photo: IMG("image29.jpeg") },
      { name: "Ms. Sana Nazar", qualification: "BS (Hons) Computer Science", joined: "12 Nov 2025", photo: IMG("image4.png") },
    ],
  },
  {
    name: "PTI",
    teachers: [
      { name: "Mr. M. Hafeez", qualification: "MA Islamiyat", joined: "3 Aug 2009", photo: IMG("image30.jpeg") },
      { name: "Ms. Ahmed Madeeha Nazir", role: "SEHC", qualification: "BS (Hons) Psychology", joined: "01 Jul 2026", photo: IMG("image31.jpeg") },
    ],
  },
];

const CLASSES = [
  { label: "Class IV", photo: IMG("image32.jpeg") },
  { label: "Class V", photo: IMG("image33.jpeg") },
  { label: "Class VI", photo: IMG("image34.jpeg") },
  { label: "Class VII", photo: IMG("image35.jpeg") },
  { label: "Class VIII", photo: IMG("image36.jpeg") },
];

const ACTIVITIES: [string, string][] = [
  ["4th April, 26", "Orientation Day for Parents"],
  ["22nd April, 26", "Investiture Ceremony"],
  ["24-25th April, 26", "Literature Festival"],
  ["27th-30th April, 26", "Inter-House Sports Competition"],
  ["1st May, 26", "Labour Day Holiday"],
  ["6th May, 26", "Inter-House Quiz Competition"],
  ["10th May, 26", "Youm-e-Marka-e-Haq"],
  ["11th-15th May, 26", "Health & Hygiene Week"],
  ["24th May, 26", "International Day of the Markhor"],
  ["27th-29th May, 26", "Eid-ul-Adha"],
  ["28th May, 26", "Youm-e-Takbeer"],
  ["1st June-9th Aug, 26", "Summer Vacations"],
  ["24-25th June, 26", "Ashura"],
  ["14th Aug, 26", "Independence Day"],
  ["24th-28th Aug, 26", "SDGs Awareness Week"],
  ["25th Aug, 26", "Rabi-ul-Awal"],
  ["2nd Sep, 26", "Inter-House Naat & Qirat Competition"],
  ["6th Sep, 26", "Defence Day"],
  ["8th Sep, 26", "International Literacy Day"],
  ["21st Sep, 26", "International Peace Day"],
  ["28th Sep-3rd Oct, 26", "Intra-Regional Sports Competition"],
  ["3rd Oct, 26", "APSACS Foundation Day"],
  ["5th Oct, 26", "World Teachers Day"],
  ["10th Oct, 26", "World Mental Health Day"],
  ["15th Oct, 26", "Global Handwashing Day"],
  ["16th Oct, 26", "World Food Day"],
  ["9th Nov, 26", "Iqbal Day"],
  ["16th Nov, 26", "International Day of Tolerance"],
  ["20th Nov, 26", "World Children's Day"],
  ["25th Nov, 26", "Inter-House Debate Competition"],
  ["3rd Dec, 26", "International Day of Disability"],
  ["7th-11th Dec, 26", "Civic Awareness & Community Service Week"],
  ["16th Dec, 26", "Youm-e-Qaumi Azm-e-Taleem"],
  ["25th Dec, 26", "Quaid's Day & Christmas"],
  ["27th Jan, 27", "Inter-House Art & Craft Competition"],
  ["5th Feb, 27", "Kashmir Day"],
  ["8th-12th Feb, 27", "Science & Technology Week"],
  ["3rd March, 27", "World Wildlife Day"],
  ["5th March, 27", "Gratitude Day"],
  ["8th March, 27", "International Women's Day"],
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

const ACHIEVEMENTS = [
  "Best Middle School of the Year 2017–19",
  "Best Middle School of the Year 2022–2024",
  "Best Middle School of the Year 2024–2026",
];

const UPCOMING: [string, string][] = [
  ["1st – 4th April, 26", "Teachers' Preparation Day / Book Bank Week"],
  ["4th April, 26", "Orientation Day for Parents"],
  ["6th April, 26", "Academic Session Begins (1st Term)"],
  ["1st June-9th Aug, 26", "Summer Vacations"],
  ["10th Aug, 26", "School Reopens"],
  ["29th Aug, 26", "Progress Review Session"],
  ["5th-9th Oct, 26", "Teaching Week for (IV-V)"],
  ["5th-9th Oct, 26", "Revision for (VI-VIII)"],
  ["12th-16th Oct, 26", "Revision & Makeup Assessment Week"],
  ["12th-23rd Oct, 26", "1st Term Examination"],
  ["19th-23rd Oct, 26", "Centralised Assessment"],
  ["26th-30th Oct, 26", "Result Preparation"],
  ["31st Oct, 26", "Progress Review Session"],
  ["2nd Nov, 26", "2nd Term Begins"],
  ["25th-10th Jan, 27", "Winter Vacation"],
  ["11th Jan, 27", "School Reopens"],
  ["16th Jan, 27", "Progress Review Session"],
  ["1st-5th March, 27", "Teaching Week (IV-V) / Revision (VI-VIII)"],
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

const FACILITIES_CAMPUS = [
  "Instructional Spaces: 24 spacious, well-ventilated classrooms equipped with modern instructional technology and ergonomic seating.",
  "ICT Laboratories: 2 fully equipped computer labs dedicated to advancing digital literacy and technical proficiency.",
  "Athletic Facilities: Expansive outdoor grounds designed for sports, physical education, and athletic development.",
  "Art Room: Fully equipped art room.",
  "Campus Safety & Environment: Secure, disciplined learning environment featuring sanitized facilities and clean drinking water stations.",
];

const FACILITIES_ACADEMIC = [
  "Faculty Excellence: Certified, experienced educators delivering personalized and contemporary instruction.",
  "Academic Rigor: Inquiry-based curriculum emphasizing critical thinking, supported by continuous progress monitoring.",
  "Co-Curricular Programming: Robust extracurricular offerings — including debates, academic competitions, and cultural events — focused on leadership development.",
  "Holistic Education: Comprehensive student guidance integrating character education, core values, and academic planning.",
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

export default function MiddleBoysSection() {
  const others = (Object.keys(SECTIONS) as SectionKey[]).filter((k) => k !== "middle-boys");

  return (
    <>
      <PageHero
        eyebrow="Classes VI – VIII (Boys)"
        title="Middle Boys Section"
        intro="Welcome to the Middle Boys Section, a place where curiosity turns into confidence and effort turns into achievement."
        image={CLASSES[0].photo}
        crumb={[{ label: "Quick Links", href: "/quick-links" }, { label: "Middle Boys Section" }]}
      />

      <section className="sec">
        <Editorial
          rail={
            <>
              <FactCard
                title="Section facts"
                rows={[
                  ["Section head", HEAD.name],
                  ["Classes", "VI – VIII"],
                  ["Stream", "APSACS · FBISE"],
                  ["Timings", "7:45 AM – 1:45 PM"],
                ]}
              />
              <div className="factcard">
                <h4>Other sections</h4>
                <ul>
                  {others.map((k) => (
                    <li key={k}>
                      <Link href={`/sections/${k}`} style={{ color: "var(--green-700)", fontWeight: 600 }}>{SECTIONS[k].name}</Link>
                      <b style={{ fontWeight: 500, color: "var(--ink-soft)" }}>{SECTIONS[k].sub}</b>
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
              <div className="qb" style={{ padding: 32 }}>
                <div className="qb-portrait" style={{ width: 110, height: 110, position: "relative", overflow: "hidden" }}>
                  <Image src={HEAD.photo} alt={HEAD.name} fill sizes="110px" style={{ borderRadius: "50%" }} />
                </div>
                <div className="qb-body">
                  <span className="eyebrow">Message from the Section Head</span>
                  <blockquote style={{ fontSize: "1.15rem" }}>
                    Welcome to the Middle Boys Section, a place where curiosity turns into confidence and effort turns into achievement.
                    These are the years that shape not just knowledge, but character — where our students learn to think critically,
                    work collaboratively, and believe in their own potential. Our dedicated teachers walk alongside every child,
                    encouraging them to ask bold questions, embrace challenges, and grow into responsible, compassionate individuals.
                    I am proud to lead a team that nurtures both minds and hearts, and I invite every student in this section to
                    dream big, work hard, and know that we are with them every step of the way.
                  </blockquote>
                  <div className="qb-foot">
                    <div className="qb-who"><div className="nm">{HEAD.name}</div><div className="rl">{HEAD.role} — {HEAD.qualification}</div></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Deputy section heads */}
          <section>
            <SectionHead eyebrow="Leadership" title="Deputy Section Heads" />
            <div className="staffgrid">
              {DEPUTY_HEADS.map((s) => <StaffCard key={s.name} s={s} />)}
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
                  <div className="fimg"><Image src={c.photo} alt={c.label} fill sizes="(max-width: 820px) 100vw, 33vw" /></div>
                  <figcaption><GraduationCap size={15} strokeWidth={1.8} /> {c.label}</figcaption>
                </div>
              ))}
            </div>
          </section>

          {/* Exam schedule */}
          <section>
            <SectionHead eyebrow="Assessment" title="Exam Schedule" />
            <div className="figure" style={{ background: "#fff" }}>
              <Image src={IMG("image37.jpeg")} alt="Middle School Assessment Framework, Class IV-VIII" width={949} height={411} style={{ width: "100%", height: "auto" }} />
            </div>
          </section>

          {/* Activities */}
          <section>
            <SectionHead eyebrow="Academic year 2026–27" title="Activities" />
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
            <SectionHead eyebrow="Recognition" title="Achievements" />
            <ul className="achlist">
              {ACHIEVEMENTS.map((a) => (
                <li key={a}><Trophy size={18} strokeWidth={1.8} /> {a}</li>
              ))}
            </ul>
          </section>

          {/* Upcoming events */}
          <section>
            <SectionHead eyebrow="Look ahead" title="Upcoming Events" />
            <div className="tbl-wrap">
              <table className="tbl">
                <thead><tr><th>Sr.</th><th>Date</th><th>Event</th></tr></thead>
                <tbody>
                  {UPCOMING.map(([date, ev], i) => (
                    <tr key={i}><td>{i + 1}</td><td>{date}</td><td>{ev}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Facilities */}
          <section>
            <SectionHead eyebrow="Campus" title="Facilities" />
            <div className="grid g2">
              <div>
                <h3 style={{ marginBottom: 12, fontSize: "1.05rem", display: "flex", alignItems: "center", gap: 8 }}>
                  <Building2 size={18} strokeWidth={1.8} /> Campus & Infrastructure
                </h3>
                <div className="prose"><ul>{FACILITIES_CAMPUS.map((f) => <li key={f.slice(0, 24)}>{f}</li>)}</ul></div>
              </div>
              <div>
                <h3 style={{ marginBottom: 12, fontSize: "1.05rem", display: "flex", alignItems: "center", gap: 8 }}>
                  <GraduationCap size={18} strokeWidth={1.8} /> Academic & Development Framework
                </h3>
                <div className="prose"><ul>{FACILITIES_ACADEMIC.map((f) => <li key={f.slice(0, 24)}>{f}</li>)}</ul></div>
              </div>
            </div>
            <Link className="link-arrow" href="/admissions">Apply for admission <ArrowRight size={16} /></Link>
          </section>
        </Editorial>
      </section>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, BookOpen } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import { SECTIONS, type SectionKey } from "@/lib/data";

const IMG = (name: string) => `/sections/senior-girls/${name}`;

type Staff = { name: string; role?: string; qualification: string; joined: string; photo: string };

const SECTION_HEAD: Staff = {
  name: "Mrs. Sobia Altaf",
  role: "Section Head Senior Girls",
  qualification: "M.Phil English Linguistics, B.Ed",
  joined: "01 April 2024",
  photo: IMG("sobia-altaf.jpg"),
};

const DEPUTY_HEAD: Staff = {
  name: "Ms. Sana Amir",
  role: "Deputy Section Head",
  qualification: "MSC Zoology",
  joined: "15 April 2016",
  photo: IMG("sana-amir.jpg"),
};

const CCA_COORDINATOR: Staff = {
  name: "Ms. Ramsha Siddquie",
  role: "CCA Coordinator",
  qualification: "BS Fine Arts",
  joined: "01 July 2025",
  photo: IMG("ramsha-siddquie.jpg"),
};

const SUBJECT_COORDINATORS: Staff[] = [
  {
    name: "Ms. Rehana Khalid",
    role: "Subject Coordinator (English)",
    qualification: "M.A English, B.Ed, Diploma in TEFL",
    joined: "17 April 1993",
    photo: IMG("rehana-khalid.jpg"),
  },
  {
    name: "Ms. Naveeda Sherazi",
    role: "Subject Coordinator (Urdu)",
    qualification: "M.A Urdu, B.Ed",
    joined: "15 Aug 2001",
    photo: IMG("naveeda-sherazi.jpg"),
  },
  {
    name: "Ms. Rubina Babar",
    role: "Subject Coordinator (Mathematics)",
    qualification: "M.A Economics, B.Ed",
    joined: "15 May 1994",
    photo: IMG("rubina-babar.jpg"),
  },
  {
    name: "Ms. Ayesha Azhar",
    role: "Subject Coordinator (Physics)",
    qualification: "BS Physics",
    joined: "21 Sep 2024",
    photo: IMG("ayesha-azhar.jpg"),
  },
  {
    name: "Ms. Darakhshan Zaineb",
    role: "Subject Coordinator (Chemistry)",
    qualification: "MPhil (Chemistry)",
    joined: "01 Nov 2024",
    photo: IMG("darakhshan.jpg"),
  },
  {
    name: "Ms. Uroosa Fazal",
    role: "Subject Coordinator (Biology)",
    qualification: "MPhil Biochemistry & Molecular Biology, B.Ed, M.Ed",
    joined: "22 Aug 2022",
    photo: IMG("uroosa-fazal.jpg"),
  },
  {
    name: "Ms. Tehmina Arshaad Ullah",
    role: "Subject Coordinator (Islamiat)",
    qualification: "M.A, M.Ed",
    joined: "19 Aug 2013",
    photo: IMG("tehmina-arshaad-ullah.jpg"),
  },
  {
    name: "Ms. Shubnum Araa",
    role: "Subject Coordinator (Pak Study)",
    qualification: "MSC (Mathematics), M.A (Political Science)",
    joined: "01 Nov 2024",
    photo: IMG("shubnum-araa.jpg"),
  },
  {
    name: "Ms. Madeeha Naiyar",
    role: "Teacher",
    qualification: "MSC Cs Equivalent to MPhil",
    joined: "01 July 2026",
    photo: IMG("madeeha-naiyar.jpg"),
  },
  {
    name: "Ms. Saba Zafar",
    role: "AIS & Subject Coordinator (Computer)",
    qualification: "MS Rs and Gis, MSC Computer Science",
    joined: "14 Feb 2019",
    photo: IMG("saba-zafar.jpg"),
  },
];

const DEPARTMENTS: { name: string; teachers: Staff[] }[] = [
  {
    name: "English Department",
    teachers: [
      { name: "Ms. Tehzeeb Zahra", role: "Teacher", qualification: "M.A English, M.A Political Science, B.Ed", joined: "20 Jan 2025", photo: IMG("tehzeeb-zahra.jpg") },
      { name: "Mr. Sameer Fareed", role: "Teacher", qualification: "BS English Literature, Diploma TEFL", joined: "01 July 2026", photo: IMG("sameer-fareed.jpg") },
    ],
  },
  {
    name: "Urdu Department",
    teachers: [
      { name: "Ms. Salima Tasneem", role: "Teacher", qualification: "M.A Arabic, B.Ed", joined: "18 Jan 2007", photo: IMG("salima-tasneem.jpg") },
      { name: "Ms. Sadia Ehsaan", role: "Teacher", qualification: "M.A Urdu Islamiat, B.Ed", joined: "8 Feb 2018", photo: IMG("sadia-ehsaan.jpg") },
    ],
  },
  {
    name: "Math Department",
    teachers: [
      { name: "Ms. Zonaira Asif", role: "Teacher", qualification: "BS (Mathematics), B.Ed", joined: "01 July 2026", photo: IMG("zonaira-asif.jpg") },
      { name: "Ms. Rabia Akbar", role: "Teacher", qualification: "MSC (Mathematics)", joined: "01 July 2026", photo: IMG("rabia-akbar.jpg") },
    ],
  },
  {
    name: "Physics Department",
    teachers: [
      { name: "Mr. Muhammad Sami", role: "Teacher", qualification: "BS Physics", joined: "03 July 2024", photo: IMG("muhammad-sami.jpg") },
      { name: "Ms. Marryam Iqbal", role: "Teacher", qualification: "MSC (Physics)", joined: "01 July 2026", photo: IMG("marryam-iqbal.jpg") },
      { name: "Ms. Sofia Karamat", role: "Teacher", qualification: "M.Sc. Physics", joined: "26 Aug 2025", photo: IMG("sofia-karamat.jpg") },
      { name: "Ms. Maheen Tahir", role: "Teacher", qualification: "M.Sc. Physics", joined: "01 Dec 2025", photo: IMG("maheen-tahir.jpg") },
    ],
  },
  {
    name: "Chemistry Department",
    teachers: [
      { name: "Ms. Noor-Ul-Ain", role: "Teacher", qualification: "BSC Chemistry, Zoology, MA English", joined: "25 Sep 2023", photo: IMG("noor-ul-ain.jpg") },
      { name: "Ms. Asia Bibi", role: "Teacher", qualification: "BS Chemistry", joined: "01 July 2026", photo: IMG("aisa-bibi.jpg") },
    ],
  },
  {
    name: "Biology Department",
    teachers: [
      { name: "Ms. Hina Sami", role: "Teacher", qualification: "BS Biotechnology", joined: "05 May 2025", photo: IMG("hina-sami.jpg") },
      { name: "Ms. Arshia Rana", role: "Teacher", qualification: "MPhil Botany", joined: "31 Aug 2022", photo: IMG("arshia-rana.jpg") },
      { name: "Ms. Muqaddas Shahzadi Shabbir", role: "Teacher", qualification: "MPhil Microbiology", joined: "26 Aug 2025", photo: IMG("muqaddas-shahzadi-shabbir.jpg") },
    ],
  },
  {
    name: "Islamiyat Department",
    teachers: [
      { name: "Ms. Bushra Rasool", role: "Teacher", qualification: "M.A Islamiat", joined: "15 Mar 2018", photo: IMG("bushra-rasool.jpg") },
      { name: "Ms. Haleema Sadia", role: "Teacher", qualification: "M.A Islamiat", joined: "22 Nov 2022", photo: IMG("haleema-sadia.jpg") },
    ],
  },
  {
    name: "Economics Department",
    teachers: [
      { name: "Ms. Iqra Mubeen", role: "Teacher", qualification: "MPhil", joined: "01 Jul 2026", photo: IMG("iqra-mubeen.jpg") },
    ],
  },
  {
    name: "Statistical Department",
    teachers: [
      { name: "Mr. Majid Hanif", role: "Teacher", qualification: "MSC Statistics", joined: "01 Jul 2026", photo: IMG("majid-hanif.jpg") },
    ],
  },
  {
    name: "Psychology Department",
    teachers: [
      { name: "Ms. Azka Noor", role: "Teacher", qualification: "MS Clinical Psychology", joined: "01 Jul 2026", photo: IMG("azka-noor.jpg") },
    ],
  },
  {
    name: "PT Department",
    teachers: [
      { name: "Mr. Shabbir Shah", role: "Teacher", qualification: "MSC Physical Health Education", joined: "01 Jul 2026", photo: IMG("shabbir-shah.jpg") },
    ],
  },
];

const FACILITIES_CAMPUS = [
  "14 Spacious Classrooms equipped with comfortable furniture, proper ventilation, and modern teaching aids to create an engaging learning atmosphere.",
  "1 x Well-Equipped Computer Lab that promotes ICT integration in education, enabling students to develop essential digital literacy and technology skills.",
  "State-of-the-Art Science Laboratories designed for advanced experimentation and inquiry-based learning.",
  "Large Playground offering ample space for sports, physical activities, and recreational programs that encourage teamwork and healthy lifestyles.",
  "Cold Water Facility with water coolers installed across the campus to ensure students have access to clean and chilled drinking water throughout the day.",
  "Clean and Hygienic Environment with well-maintained classrooms, washrooms, and campus facilities.",
  "Safe and Secure Campus with a disciplined environment that ensures the well-being and safety of every student.",
];

const FACILITIES_ACADEMIC = [
  "Highly Competent Faculty Members who are experienced, qualified, and committed to nurturing students through innovative teaching methods and individualized guidance.",
  "Interactive Learning Environment that encourages critical thinking, creativity, collaboration, and active student participation.",
  "Well-Organized Assessment System to monitor academic progress and provide timely feedback for continuous improvement.",
  "Co-Curricular Activities including debates, quizzes, science exhibitions, literary competitions, and cultural events to foster confidence and leadership skills.",
  "Character Building and Moral Education integrated into daily school life to develop responsible, respectful, and ethical individuals.",
  "Career and Academic Guidance to help students identify their strengths and prepare for future educational opportunities.",
];

function StaffCard({ s }: { s: Staff }) {
  return (
    <div className="staffcard" >
      <div className="sf-ph">
        <Image
          src={s.photo}
          alt={s.name}
          fill
          sizes="84px"
          style={
            s.name === "Ms. Darakhshan Zaineb"
              ? { objectPosition: "top" }
              : undefined
          } />
      </div>
      <div className="sf-nm">{s.name}</div>
      {s.role && <div className="sf-role">{s.role}</div>}
      <div className="sf-q">{s.qualification}</div>
      {s.joined && <div className="sf-j">Joined {s.joined}</div>}
    </div>
  );
}

export default function SeniorGirlsSection() {
  const others = (Object.keys(SECTIONS) as SectionKey[]).filter((k) => k !== "senior-girls");
  const data = SECTIONS["senior-girls"];

  return (
    <>
      <PageHero
        eyebrow={data.sub}
        title={data.name}
        intro={data.headMsg}
        image={IMG("sobia-altaf.jpg")}
        crumb={[{ label: "Quick Links", href: "/quick-links" }, { label: data.name }]}
      />

      <section className="sec">
        <Editorial
          rail={
            <>
              <FactCard
                title="Section facts"
                rows={[
                  ["Section Head", SECTION_HEAD.name],
                  ["Deputy Head", DEPUTY_HEAD.name],
                  ["Classes", "IX – XII (Girls)"],
                  ["Curriculum", "FBISE Board"],
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
          {/* Section Head Message */}
          <section>
             <SectionHead eyebrow="Leadership" title="Section Head" />
            <div className="quoteband" style={{ borderRadius: "var(--r)" }}>
              <div className="qb" style={{ padding: 32, alignItems: 'flex-start' }}>
                <div className="qb-portrait" style={{ width: 110, height: 110, position: "relative", overflow: "hidden", backgroundColor: '#f0f0f0', borderRadius: "50%", flexShrink: 0 }}>
                  <Image src={SECTION_HEAD.photo} alt={SECTION_HEAD.name} fill sizes="110px" style={{ objectFit: 'cover' }} />
                </div>
                <div className="qb-body">
                  <span className="eyebrow">Message from the Section Head</span>
                  <blockquote style={{ fontSize: "1.1rem", borderLeft: 'none', paddingLeft: 0, marginTop: '1rem', fontStyle: 'normal' }}>
                    <p>It is my privilege to welcome you to the Senior Wing.</p>
                    <p style={{ marginTop: '1rem' }}>
                      Our mission is to maintain the highest benchmarks of academic quality, character development, and student performance. By aligning our curriculum with modern educational frameworks and providing robust support across academics and co-curricular pursuits, we prepare our students to excel in national and competitive landscapes.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                      With experienced faculty, modern laboratories, and a structured, student-centered approach, we cultivate an atmosphere of accountability, critical thinking, and excellence. We remain dedicated to guiding our young scholars as they transition into confident, self-driven leaders of tomorrow.
                    </p>
                  </blockquote>
                  <div className="qb-foot" style={{ marginTop: '1.5rem' }}>
                    <div className="qb-who">
                      <div className="nm">{SECTION_HEAD.name}</div>
                      <div className="rl">{SECTION_HEAD.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Deputy Section Head */}
          <section>
            <SectionHead eyebrow="Leadership" title="Deputy Section Head" />
            <div className="staffgrid">
              <StaffCard s={DEPUTY_HEAD} />
            </div>
          </section>

          {/* CCA Coordinator */}
          <section>
            <SectionHead eyebrow="Leadership" title="CCA Coordinator" />
            <div className="staffgrid">
              <StaffCard s={CCA_COORDINATOR} />
            </div>
          </section>

          {/* Subject Coordinators */}
          <section>
            <SectionHead eyebrow="Academic Leadership" title="Subject Coordinators" />
            <div className="staffgrid">
              {SUBJECT_COORDINATORS.map((s) => (
                <StaffCard key={s.name} s={s} />
              ))}
            </div>
          </section>

          {/* Faculty by Department */}
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

          {/* Academic Schedule Class IX-X */}
          <section>
            <SectionHead eyebrow="Academics" title="APSACS Academic Schedule Class IX–X" />
            <div className="tbl-wrap">
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Class IX</th>
                    <th>Class X</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>2<sup>nd</sup>, 3<sup>rd</sup> April, 2026</td><td>Teacher&rsquo;s Preparation Days</td><td style={{ textAlign: "center" }}>---</td></tr>
                  <tr><td>28<sup>th</sup>, 29<sup>th</sup> April, 2026</td><td style={{ textAlign: "center" }}>---</td><td>Teacher&rsquo;s Preparation Days</td></tr>
                  <tr><td>4<sup>th</sup> May, 2026</td><td>Orientation Day for Parents</td><td style={{ textAlign: "center" }}>---</td></tr>
                  <tr><td>6<sup>th</sup> May, 2026</td><td>New Academic Session Begins</td><td style={{ textAlign: "center" }}>---</td></tr>
                  <tr><td>11<sup>th</sup> – 20<sup>th</sup> May, 2026</td><td>Class Assessment I</td><td style={{ textAlign: "center" }}>---</td></tr>
                  <tr><td>25<sup>th</sup> – 29<sup>th</sup> May, 2027</td><td colSpan={2} style={{ textAlign: "center" }}>Eid ul Azha Holidays</td></tr>
                  <tr><td>6<sup>th</sup> June, 2026</td><td>PTM &amp; Result</td><td style={{ textAlign: "center" }}>---</td></tr>
                  <tr><td>15<sup>th</sup> June – 12<sup>th</sup> July 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Summer Vacations</td></tr>
                  <tr><td>13<sup>th</sup> July 2026</td><td colSpan={2} style={{ textAlign: "center" }}>School Reopens after Summer Vacations</td></tr>
                  <tr><td>27<sup>th</sup> July – 5<sup>th</sup> August 2026</td><td>Class Assessment II</td><td>Class Assessment I</td></tr>
                  <tr><td>22<sup>nd</sup> August 2026</td><td>PTM &amp; Result</td><td>PTM &amp; Result</td></tr>
                  <tr><td>7<sup>th</sup> – 16<sup>th</sup> September, 2026</td><td>Class Assessment III</td><td>Class Assessment II</td></tr>
                  <tr><td>26<sup>th</sup> September, 2026</td><td>PTM &amp; Result</td><td>PTM &amp; Result</td></tr>
                  <tr><td>1<sup>st</sup> October – 20<sup>th</sup> October, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Revision &amp; Test Series</td></tr>
                  <tr><td>23<sup>rd</sup> October – 7<sup>th</sup> November, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>First Term Examination</td></tr>
                  <tr><td>10<sup>th</sup> November, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Second Term Begins</td></tr>
                  <tr><td>14<sup>th</sup> November, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>PTM &amp; Result</td></tr>
                  <tr><td>28<sup>th</sup> December, 2026 – 10<sup>th</sup> January 2027</td><td colSpan={2} style={{ textAlign: "center" }}>Winter Break</td></tr>
                  <tr><td>11<sup>th</sup> January, 2027</td><td colSpan={2} style={{ textAlign: "center" }}>School Reopens after Winter Break</td></tr>
                  <tr><td>18<sup>th</sup> January – 4<sup>th</sup> February, 2027</td><td colSpan={2} style={{ textAlign: "center" }}>Revision &amp; Test Series</td></tr>
                  <tr><td>8<sup>th</sup> – 20<sup>th</sup> February, 2027</td><td colSpan={2} style={{ textAlign: "center" }}>Pre Board Examination</td></tr>
                  <tr><td>22<sup>nd</sup> – 26<sup>th</sup> February 2027</td><td colSpan={2} style={{ textAlign: "center" }}>Result Preparation Days</td></tr>
                  <tr><td>22<sup>nd</sup> – 12<sup>th</sup> March, 2027</td><td colSpan={2} style={{ textAlign: "center" }}>Prep Leave for FBISE Examinations</td></tr>
                  <tr><td>27<sup>th</sup> February, 2027</td><td colSpan={2} style={{ textAlign: "center" }}>PTM &amp; Result</td></tr>
                  <tr><td>10<sup>th</sup> – 12<sup>th</sup> March, 2027</td><td colSpan={2} style={{ textAlign: "center" }}>Eid ul Fitr Holidays</td></tr>
                  <tr><td>17<sup>th</sup> March, 2027</td><td colSpan={2} style={{ textAlign: "center" }}>FBISE Examination (Tentative)</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Academic Calendar Class XI-XII */}
          <section>
            <SectionHead eyebrow="Academics" title="APSACS Academic Calendar Class XI–XII" />
            <div className="tbl-wrap">
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Class XI – XII</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>16<sup>th</sup>, 17<sup>th</sup> July, 2026</td><td style={{ textAlign: "center" }}>Teacher&rsquo;s Preparation Day</td></tr>
                  <tr><td>18<sup>th</sup> July, 2026</td><td style={{ textAlign: "center" }}>Orientation Day for Parents (only XI)</td></tr>
                  <tr><td>20<sup>th</sup> July, 2026</td><td style={{ textAlign: "center" }}>New Academic Session Begins</td></tr>
                  <tr><td>31<sup>st</sup> August – 8<sup>th</sup> September, 2026</td><td style={{ textAlign: "center" }}>Class Assessment I</td></tr>
                  <tr><td>12<sup>th</sup> September, 2026</td><td style={{ textAlign: "center" }}>PTM &amp; Result</td></tr>
                  <tr><td>19<sup>th</sup> – 27<sup>th</sup> October, 2026</td><td style={{ textAlign: "center" }}>Class Assessment II</td></tr>
                  <tr><td>31<sup>st</sup> October, 2026</td><td style={{ textAlign: "center" }}>PTM &amp; Result</td></tr>
                  <tr><td>30<sup>th</sup> November – 4<sup>th</sup> December 2026</td><td style={{ textAlign: "center" }}>Revision &amp; Test Series</td></tr>
                  <tr><td>7<sup>th</sup> – 18<sup>th</sup> December, 2026</td><td style={{ textAlign: "center" }}>1<sup>st</sup> Term Examination</td></tr>
                  <tr><td>21<sup>st</sup> December, 2026</td><td style={{ textAlign: "center" }}>2<sup>nd</sup> Term Begins</td></tr>
                  <tr><td>24<sup>th</sup> December, 2026</td><td style={{ textAlign: "center" }}>PTM &amp; Result</td></tr>
                  <tr><td>28<sup>th</sup> December, 2026 – 10<sup>th</sup> January, 2027</td><td style={{ textAlign: "center" }}>Winter Break</td></tr>
                  <tr><td>11<sup>th</sup> January, 2027</td><td style={{ textAlign: "center" }}>School Reopens</td></tr>
                  <tr><td>22<sup>nd</sup> February – 9<sup>th</sup> March, 2027</td><td style={{ textAlign: "center" }}>Revision &amp; Test Series</td></tr>
                  <tr><td>10<sup>th</sup> – 12<sup>th</sup> March, 2027</td><td style={{ textAlign: "center" }}>Eid ul Fitr Holidays</td></tr>
                  <tr><td>15<sup>th</sup> – 26<sup>th</sup> March, 2027</td><td style={{ textAlign: "center" }}>Preboard Examination</td></tr>
                  <tr><td>29<sup>th</sup> March – 2<sup>nd</sup> April, 2027</td><td style={{ textAlign: "center" }}>Result Preparation Days</td></tr>
                  <tr><td>29<sup>th</sup> March – 18<sup>th</sup> April, 2027</td><td style={{ textAlign: "center" }}>Prep Leave for FBISE Examinations</td></tr>
                  <tr><td>3<sup>rd</sup> April, 2027</td><td style={{ textAlign: "center" }}>PTM &amp; Result</td></tr>
                  <tr><td>19<sup>th</sup> April, 2027</td><td style={{ textAlign: "center" }}>FBISE Examination (Tentative)</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CCA Activities */}
          <section>
            <SectionHead eyebrow="Co-Curricular" title="CCA Activities" />
            <div className="tbl-wrap">
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Class IX</th>
                    <th>Class X</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>22<sup>nd</sup> April, 2026</td><td>Investiture Ceremony</td><td style={{ textAlign: "center" }}>---</td></tr>
                  <tr><td>1<sup>st</sup> May, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Labor Day</td></tr>
                  <tr><td>6<sup>th</sup> May, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Contagious Disease Awareness Day</td></tr>
                  <tr><td>10<sup>th</sup> May, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Youm-e-Marka-e-Haq</td></tr>
                  <tr><td>15<sup>th</sup> – 16<sup>th</sup> May, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Literature Festival</td></tr>
                  <tr><td>20<sup>th</sup> May, 2026</td><td style={{ textAlign: "center" }}>---</td><td>Investiture Ceremony</td></tr>
                  <tr><td>18<sup>th</sup> – 22<sup>nd</sup> May, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>SDGs Awareness Week</td></tr>
                  <tr><td>20<sup>th</sup> May, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Youm-e-Takbeer</td></tr>
                  <tr><td>24–25<sup>th</sup> June, 2026 Ashura</td><td colSpan={2} style={{ textAlign: "center" }}>24–25<sup>th</sup> June, 2026 Ashura</td></tr>
                  <tr><td>5<sup>th</sup> August 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Investiture Ceremony</td></tr>
                  <tr><td>12<sup>th</sup> August, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>International Youth Day</td></tr>
                  <tr><td>14<sup>th</sup> August, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Independence Day</td></tr>
                  <tr><td>21<sup>st</sup> – 22<sup>nd</sup> August 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Literature Festival</td></tr>
                  <tr><td>25<sup>th</sup> August, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>12 Rabi ul Awal</td></tr>
                  <tr><td>6<sup>th</sup> September, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Defense Day / Youm e Shuhada</td></tr>
                  <tr><td>8<sup>th</sup> September, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>International Literacy Day</td></tr>
                  <tr><td>21<sup>st</sup> September, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>International Peace Day</td></tr>
                  <tr><td>28<sup>th</sup> September – 3<sup>rd</sup> October, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Intra-Regional Sports Competition (G-III)</td></tr>
                  <tr><td>30<sup>th</sup> September, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Mega Naat &amp; Qirat Competition</td></tr>
                  <tr><td>3<sup>rd</sup> October, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>APSACS Foundation Day</td></tr>
                  <tr><td>5<sup>th</sup> October, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>World Teachers Day</td></tr>
                  <tr><td>7<sup>th</sup> October, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Parliamentary Style Debate</td></tr>
                  <tr><td>10<sup>th</sup> October, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>World Mental Health Day</td></tr>
                  <tr><td>15<sup>th</sup> October, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Anti-Drug Awareness Day</td></tr>
                  <tr><td>9<sup>th</sup> November, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Iqbal Day</td></tr>
                  <tr><td>16<sup>th</sup> November, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>International Day of Tolerance</td></tr>
                  <tr><td>16<sup>th</sup> – 21<sup>st</sup> November, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Inter Zonal Sports Competition</td></tr>
                  <tr><td>23<sup>rd</sup> – 27<sup>th</sup> November, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Civic Awareness and Community Service Week</td></tr>
                  <tr><td>1<sup>st</sup> – 4<sup>th</sup> December, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Science &amp; Technology Week</td></tr>
                  <tr><td>3<sup>rd</sup> December, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>International Day of Persons with Disabilities</td></tr>
                  <tr><td>11<sup>th</sup> – 13<sup>th</sup> December, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>AMUN</td></tr>
                  <tr><td>16<sup>th</sup> December, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Youm-e-Qoumi Azm-e-Taleem</td></tr>
                  <tr><td>25<sup>th</sup> December, 2026</td><td colSpan={2} style={{ textAlign: "center" }}>Quaid&rsquo;s Day</td></tr>
                  <tr><td>11<sup>th</sup> – 16<sup>th</sup> January, 2027</td><td colSpan={2} style={{ textAlign: "center" }}>APSACS Sports Championship (G III)</td></tr>
                  <tr><td>5<sup>th</sup> February, 2027</td><td colSpan={2} style={{ textAlign: "center" }}>Kashmir Day</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CCA Plan */}
          <section>
            <SectionHead eyebrow="Co-Curricular" title="CCA Plan" />
            <div className="tbl-wrap">
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>CCA Plan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>29<sup>th</sup> July, 2026</td><td style={{ textAlign: "center" }}>Contagious Disease Awareness Day</td></tr>
                  <tr><td>5<sup>th</sup> August, 2026</td><td style={{ textAlign: "center" }}>Investiture Ceremony</td></tr>
                  <tr><td>12<sup>th</sup> August, 2026</td><td style={{ textAlign: "center" }}>International Youth Day</td></tr>
                  <tr><td>14<sup>th</sup> August 2026</td><td style={{ textAlign: "center" }}>Independence Day</td></tr>
                  <tr><td>21<sup>st</sup> – 22<sup>nd</sup> August, 2026</td><td style={{ textAlign: "center" }}>Literature Festival</td></tr>
                  <tr><td>24<sup>th</sup> – 28<sup>th</sup> August, 2026</td><td style={{ textAlign: "center" }}>SDGs Awareness Week</td></tr>
                  <tr><td>25<sup>th</sup> August, 2026</td><td style={{ textAlign: "center" }}>12 Rabi ul Awal</td></tr>
                  <tr><td>6<sup>th</sup> September, 2026</td><td style={{ textAlign: "center" }}>Defense Day / Youm e Shuhada</td></tr>
                  <tr><td>8<sup>th</sup> September, 2026</td><td style={{ textAlign: "center" }}>International Literacy Day</td></tr>
                  <tr><td>21<sup>st</sup> September, 2026</td><td style={{ textAlign: "center" }}>International Peace Day</td></tr>
                  <tr><td>28<sup>th</sup> September – 3<sup>rd</sup> October, 2026</td><td style={{ textAlign: "center" }}>Intra-Regional Sports Competition (G-III)</td></tr>
                  <tr><td>30<sup>th</sup> September, 2026</td><td style={{ textAlign: "center" }}>Mega Naat &amp; Qirat Competition</td></tr>
                  <tr><td>3<sup>rd</sup> October, 2026</td><td style={{ textAlign: "center" }}>APSACS Foundation Day</td></tr>
                  <tr><td>5<sup>th</sup> October 2026</td><td style={{ textAlign: "center" }}>World Teachers Day</td></tr>
                  <tr><td>7<sup>th</sup> October, 2026</td><td style={{ textAlign: "center" }}>Parliamentary Style Debate</td></tr>
                  <tr><td>10<sup>th</sup> October 2026</td><td style={{ textAlign: "center" }}>World Mental Health</td></tr>
                  <tr><td>15<sup>th</sup> October, 2026</td><td style={{ textAlign: "center" }}>Anti-Drug Awareness Day</td></tr>
                  <tr><td>9<sup>th</sup> November, 2026</td><td style={{ textAlign: "center" }}>Iqbal Day</td></tr>
                  <tr><td>16<sup>th</sup> November, 2026</td><td style={{ textAlign: "center" }}>International Day of Tolerance</td></tr>
                  <tr><td>16<sup>th</sup> – 21<sup>st</sup> November, 2026</td><td style={{ textAlign: "center" }}>Inter Zonal Sports Competition</td></tr>
                  <tr><td>23<sup>rd</sup> – 27<sup>th</sup> November, 2026</td><td style={{ textAlign: "center" }}>Civic Awareness and Community Service Week</td></tr>
                  <tr><td>3<sup>rd</sup> December, 2026</td><td style={{ textAlign: "center" }}>International Day of Persons with Disabilities</td></tr>
                  <tr><td>16<sup>th</sup> December, 2026</td><td style={{ textAlign: "center" }}>Youm-e-Qoumi Azm-e-Taleem</td></tr>
                  <tr><td>11<sup>th</sup> – 16<sup>th</sup> January, 2027</td><td style={{ textAlign: "center" }}>APSACS Sports Championship (G-III)</td></tr>
                  <tr><td>29<sup>th</sup> – 31<sup>st</sup> January, 2027</td><td style={{ textAlign: "center" }}>AMUN</td></tr>
                  <tr><td>5<sup>th</sup> February, 2027</td><td style={{ textAlign: "center" }}>Kashmir Day</td></tr>
                  <tr><td>8<sup>th</sup> – 12<sup>th</sup> February, 2027</td><td style={{ textAlign: "center" }}>Science &amp; Tech Week</td></tr>
                  <tr><td>23<sup>rd</sup> March, 2027</td><td style={{ textAlign: "center" }}>Pakistan Day</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Facilities */}
          <section>
            <SectionHead eyebrow="Campus" title="Senior Girls Wing Facilities" />
            <p style={{ marginBottom: "1.5rem", color: "var(--ink-soft)" }}>
              Our Senior Girls Wing provides a dynamic, safe, and student-centered learning environment designed to support academic excellence and holistic development.
            </p>
            <div className="grid g2">
              <div>
                <h3 style={{ marginBottom: 12, fontSize: "1.05rem", display: "flex", alignItems: "center", gap: 8 }}>
                  <Building2 size={18} strokeWidth={1.8} /> Campus &amp; Infrastructure
                </h3>
                <div className="prose"><ul>{FACILITIES_CAMPUS.map((f) => <li key={f}>{f}</li>)}</ul></div>
              </div>
              <div>
                <h3 style={{ marginBottom: 12, fontSize: "1.05rem", display: "flex", alignItems: "center", gap: 8 }}>
                  <BookOpen size={18} strokeWidth={1.8} /> Academic &amp; Student Development
                </h3>
                <div className="prose"><ul>{FACILITIES_ACADEMIC.map((f) => <li key={f}>{f}</li>)}</ul></div>
              </div>
            </div>
            <Link className="link-arrow" href="/admissions" style={{ marginTop: "2rem", display: "flex" }}>Apply for admission <ArrowRight size={16} /></Link>
          </section>
        </Editorial>
      </section>
    </>
  );
}

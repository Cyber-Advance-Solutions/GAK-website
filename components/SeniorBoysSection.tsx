import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, BookOpen } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import { SECTIONS, type SectionKey } from "@/lib/data";

const IMG = (name: string) => `/sections/senior-boys/${name}`;

type Staff = { name: string; role?: string; qualification: string; joined: string; photo: string };

const SECTION_HEAD: Staff = {
  name: "Mr. Atiq ur Rehman",
  role: "Acting Section Head Senior Boys",
  qualification: "MA (Islamiat & Political Science), B.Ed",
  joined: "05 Jan 1998",
  photo: IMG("atiq-ur-rehman.jpg"),
};

const DEPUTY_HEAD: Staff = {
  name: "Mrs. Nabeela Asif",
  role: "Deputy Section Head",
  qualification: "MA Urdu Literature, M.A. Ed",
  joined: "18 Aug 1997",
  photo: IMG("nabeela-asif.jpg"),
};

const DEPARTMENTS: { name: string; teachers: Staff[] }[] = [
  {
    name: "English Department",
    teachers: [
      { name: "Mr. Shakeel Ahmed", role: "Teacher", qualification: "MA English, B.Com", joined: "01 Sep 2006", photo: IMG("shakeel-ahmed.jpg") },
      { name: "Mr. Ahmed Masood Sadiq", role: "Subject Coordinator (English)", qualification: "MA English", joined: "24 Aug 2012", photo: IMG("ahmed-masood.jpg") },
      { name: "Mr. Zeeshan Imtiaz", role: "Teacher", qualification: "MA English", joined: "21 Nov 2022", photo: IMG("zeeshan-imtiaz.png") },
    ],
  },
  {
    name: "Islamiyat Department",
    teachers: [
      { name: "Mr. Usama Sajjad", role: "Teacher", qualification: "MA Islamic Studies, BS Mass Communication", joined: "12 Feb 2025", photo: IMG("usama-sajjad.png") },
      { name: "Mr. Muhammad Haseeb Ullah", role: "Teacher", qualification: "BS Islamiat", joined: "26 Aug 2025", photo: IMG("muhammad-haseeb-ullah.png") },
    ],
  },
  {
    name: "Urdu Department",
    teachers: [
      { name: "Mrs. Adeela Ather", role: "Teacher", qualification: "MA Urdu", joined: "14 Sep 2014", photo: IMG("adeela-ather.jpg") },
      { name: "Mrs. Massarat Naseem", role: "Subject Coordinator (Urdu)", qualification: "MA Urdu, B.Ed", joined: "12 Feb 2025", photo: IMG("massarat-naseem.jpg") },
      { name: "Mr. Wasif Raheem", role: "Teacher", qualification: "MA Urdu, MA History, M.Phil Urdu (Cont)", joined: "12 Feb 2025", photo: IMG("wasif-raheem.jpg") },
    ],
  },
  {
    name: "Mathematics Department",
    teachers: [
      { name: "Mr. Abdul Jabbar", role: "Teacher", qualification: "MSC Mathematics", joined: "27 Aug 2024", photo: IMG("abdul-jabbar.jpg") },
      { name: "Mr. Mudassar Nisar", role: "Teacher", qualification: "MCS", joined: "16 Aug 2002", photo: IMG("mudassar-nisar.png") },
      { name: "Mr. Sohail Ahmed Tahir", role: "Subject Coordinator (Mathematics)", qualification: "MSc Mathematics, M.Ed", joined: "19 Jul 2016", photo: IMG("sohail-ahmed-tahir.jpg") },
      { name: "Mr. Waseem Munawar", role: "Teacher", qualification: "M.Phil Mathematics", joined: "04 Oct 2024", photo: IMG("waseem-munawar.jpg") },
      { name: "Mr. Shehroz Saeed", role: "Teacher", qualification: "BS Mathematics", joined: "01 Jul 2026", photo: IMG("shehroz-saeed.jpg") },
    ],
  },
  {
    name: "Physics Department",
    teachers: [
      { name: "Mr. Bilal Younis", role: "Subject Coordinator (Physics)", qualification: "MSc Physics", joined: "26 Aug 2021", photo: IMG("bilal-younis.jpg") },
      { name: "Mr. Sohaib Hameed Butt", role: "Teacher", qualification: "M.Phil Physics", joined: "26 Aug 2021", photo: IMG("sohaib-hameed-butt.png") },
      { name: "Mr. Umer Ashfaq", role: "Teacher", qualification: "MSc Physics", joined: "28 Aug 2017", photo: IMG("umer-ashfaq.png") },
      { name: "Mr. Saqib Ali", role: "Teacher", qualification: "MSc Physics", joined: "06 Jan 2020", photo: IMG("saqib-ali.jpg") },
    ],
  },
  {
    name: "Chemistry Department",
    teachers: [
      { name: "Mr. Nasar Hussain", role: "Subject Coordinator (Chemistry)", qualification: "MSc Physics", joined: "26 Aug 2021", photo: IMG("nasar-hussain.jpg") },
      { name: "Ms. Zubia Ifrahim", role: "Teacher", qualification: "MPhil Chemistry", joined: "03 Aug 2026", photo: IMG("zubia-ifrahim.jpg") },
      { name: "Ms. Lubaba Ayaz Balor", role: "Teacher", qualification: "MSc Physics", joined: "28 Aug 2017", photo: IMG("lubaba-ayaz-balor.jpg") },
    ],
  },
  {
    name: "Computer Department",
    teachers: [
      { name: "Mr. Tauqeer Shafi", role: "Subject Coordinator (Computer)", qualification: "BCS Computer", joined: "07 Feb 2000", photo: IMG("tauqeer-shafi.jpg") },
      { name: "Mr. Shaban Bin Akhtar", role: "Teacher", qualification: "M.Phil CS", joined: "27 Nov 2023", photo: IMG("shaban-bin-akhtar.jpg") },
      { name: "Mr. Talha Asif", role: "Teacher", qualification: "BSCS", joined: "01 Aug 2026", photo: IMG("talha-asif.jpg") },
    ],
  },
  {
    name: "Biology Department",
    teachers: [
      { name: "Mr. Usman Ahsan", role: "Teacher (Biology)", qualification: "MSc Botany, MA Political Science", joined: "15 Aug 2024", photo: IMG("usman-ahsan.jpg") },
      { name: "Ms. Mehwish Jadoon", role: "Subject Coordinator (Biology)", qualification: "PhD Clinical Medical Biochemistry, M.Phil Bio Chem, CHPE (NUMS)", joined: "01 Oct 2025", photo: IMG("mehwish-jadoon.jpg") },
    ],
  },
  {
    name: "Pakistan Studies Department",
    teachers: [
      { name: "Mr. Hafiz Atta Ul Munim Bukhari", role: "Subject Coordinator (Pak Studies)", qualification: "MA History", joined: "02 May 2025", photo: IMG("hafiz-atta-ul-munim-bukhari.jpg") },
    ],
  },
];

const FACILITIES_CAMPUS = [
  "Fourteen Modern Classrooms: Expansive learning spaces fitted with ergonomic furnishings, optimal ventilation, and contemporary instructional technologies to foster an immersive educational experience.",
  "Dedicated Information & Communication Technology (ICT) Lab: A fully equipped computer laboratory designed to advance digital proficiency, technical fluency, and modern research capabilities.",
  "Advanced Science Laboratories: Cutting-edge facilities tailored for sophisticated practical experimentation, scientific inquiry, and experiential learning.",
  "Extensive Athletic Grounds: A spacious sports complex dedicated to physical education, athletic training, and recreational initiatives that promote leadership, physical fitness, and camaraderie.",
  "Chilled Hydration Stations: Purified cold-water dispensers strategically positioned throughout the facility to ensure continuous access to clean drinking water.",
  "Secure & Disciplined Environment: A well-monitored campus infrastructure enforcing strict safety protocols to guarantee a secure learning environment.",
  "Sanitary & Well-Maintained Infrastructure: A pristine campus environment prioritizing high hygiene standards across all physical facilities, common areas, and specialized spaces.",
];

const FACILITIES_ACADEMIC = [
  "Distinguished Faculty: A highly qualified and seasoned instructional staff dedicated to driving academic rigor through modern pedagogical approaches and personalized mentorship.",
  "Interactive Academic Culture: A collaborative learning atmosphere structured to enhance analytical reasoning, creative problem-solving, and active intellectual engagement.",
  "Rigorous Evaluation Framework: A systematic assessment model designed to track academic trajectory, measure competencies, and deliver actionable performance insight.",
  "Enriched Co-Curricular Program: Comprehensive opportunities in public speaking, academic competitions, STEM exhibitions, and cultural leadership activities designed to build confidence and resilience.",
  "Ethical & Character Development: Values-based education integrated into the core curriculum to instill integrity, civic responsibility, and moral leadership.",
  "Academic & Career Counseling: Specialized guidance services assisting students in evaluating career trajectories, academic pathways, and higher education prospects.",
];

function StaffCard({ s }: { s: Staff }) {
  return (
    <div className="staffcard">
      <div className="sf-ph">
        <Image src={s.photo} alt={s.name} fill sizes="84px" />
      </div>
      <div className="sf-nm">{s.name}</div>
      {s.role && <div className="sf-role">{s.role}</div>}
      {s.qualification && <div className="sf-q">{s.qualification}</div>}
      {s.joined && <div className="sf-j">Joined {s.joined}</div>}
    </div>
  );
}

export default function SeniorBoysSection() {
  const others = (Object.keys(SECTIONS) as SectionKey[]).filter((k) => k !== "senior-boys");
  const data = SECTIONS["senior-boys"];

  return (
    <>
      <PageHero
        eyebrow={data.sub}
        title={data.name}
        intro={data.headMsg}
        image={IMG("atiq-ur-rehman.jpg")}
        crumb={[{ label: "Quick Links", href: "/quick-links" }, { label: data.name }]}
      />

      <section className="sec">
        <Editorial
          rail={
            <>
              <FactCard
                title="Section facts"
                rows={[
                  ["Acting Section Head", SECTION_HEAD.name],
                  ["Deputy Head", DEPUTY_HEAD.name],
                  ["Classes", "IX – XII (Boys)"],
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
            <div className="quoteband" style={{ borderRadius: "var(--r)" }}>
              <div className="qb" style={{ padding: 32, alignItems: "flex-start" }}>
                <div className="qb-portrait" style={{ width: 110, height: 110, position: "relative", overflow: "hidden", backgroundColor: "#f0f0f0", borderRadius: "50%", flexShrink: 0 }}>
                  <Image src={SECTION_HEAD.photo} alt={SECTION_HEAD.name} fill sizes="110px" style={{ objectFit: "cover" }} />
                </div>
                <div className="qb-body">
                  <span className="eyebrow">Message from the Acting Section Head</span>
                  <blockquote style={{ fontSize: "1.1rem", borderLeft: "none", paddingLeft: 0, marginTop: "1rem", fontStyle: "normal" }}>
                    <p>Welcome to the Senior Boys Section.</p>
                    <p style={{ marginTop: "1rem" }}>
                      Where ambition meets excellence, and today&rsquo;s learners become tomorrow&rsquo;s leaders.
                    </p>
                    <p style={{ marginTop: "1rem" }}>
                      These defining years are where passion turns into purpose and dreams take shape. In the Senior Boys Section, we don&rsquo;t just prepare our students for exams — we prepare them for life. We challenge our young men to think critically, lead with integrity, and embrace every opportunity with confidence.
                    </p>
                    <p style={{ marginTop: "1rem" }}>
                      Aim high, work hard, and step boldly into your future. We are here to guide and support you every step of the way!
                    </p>
                  </blockquote>
                  <div className="qb-foot" style={{ marginTop: "1.5rem" }}>
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
                  <tr><th>Date</th><th>Class IX</th><th>Class X</th></tr>
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
                  <tr><th>Date</th><th>Class XI – XII</th></tr>
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
                  <tr><td>7<sup>th</sup> – 8<sup>th</sup> December, 2026</td><td style={{ textAlign: "center" }}>1<sup>st</sup> Term Examination</td></tr>
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
                  <tr><th>Date</th><th>Class IX</th><th>Class X</th></tr>
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
                  <tr><th>Date</th><th>CCA Plan</th></tr>
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
            <SectionHead eyebrow="Campus" title="Senior Boys Wing Facilities" />
            <p style={{ marginBottom: "1.5rem", color: "var(--ink-soft)" }}>
              Our Senior Boys Wing offers an invigorating, secure, and student-focused academic environment engineered to cultivate scholastic distinction and comprehensive personal growth.
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

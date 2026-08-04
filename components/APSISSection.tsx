import Link from "next/link";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import { SECTIONS, type SectionKey } from "@/lib/data";

const IMG = (name: string) => `/sections/apsis/${name}`;

type Staff = { name: string; role?: string; qualification: string; joined: string; photo: string };

const VICE_PRINCIPAL: Staff = {
  name: "Ms. Birjees Tahira",
  role: "Vice Principal APSIS GAK",
  qualification: "M.Sc. Physics, M.Ed, M.Phil Ed, M. A. Educational Leadership and Management",
  joined: "",
  photo: IMG("birjees-tahira.png"),
};

const SECTION_HEAD: Staff = {
  name: "Ms. Sana Nayeem",
  role: "Section Head APSIS GAK",
  qualification: "M.A. Linguistics",
  joined: "",
  photo: IMG("sana-nayeem.png"),
};

const COORDINATORS: Staff[] = [
  { name: "Ms. Erum Hassan", role: "Middle Level Coordinator", qualification: "M.A ELT, M.A. Isl", joined: "", photo: IMG("erum-hassan.jpg") },
  { name: "Ms. Bushra Shahid", role: "Junior Level Coordinator", qualification: "M.Sc. Math", joined: "", photo: IMG("bushra-shahid.jpg") },
];

const DEPARTMENTS: { name: string; teachers: Staff[] }[] = [
  {
    name: "English Department",
    teachers: [
      { name: "Ms. Naveed Sultana", role: "Subject Coordinator", qualification: "MA English Language and Literature, B.Ed.", joined: "", photo: IMG("naveed-sultana.jpg") },
      { name: "Ms. Erum Hassan", qualification: "M.A ELT, M.A. Isl", joined: "", photo: IMG("erum-hassan.jpg") },
      { name: "Ms. Ujala Hajvaria", qualification: "B.Com", joined: "", photo: IMG("ujala-hajvaria.png") },
      { name: "Ms. Irum Khan", qualification: "M.A. Project Management", joined: "", photo: IMG("irum-khan.png") },
      { name: "Ms. Razia Saleem", qualification: "M.A. English Language and Literature, B.Ed.", joined: "", photo: IMG("razia-saleem.jpg") },
      { name: "Ms. Komal Afaque", qualification: "BBA (Hons.)", joined: "", photo: IMG("komal-afaque.png") },
    ]
  },
  {
    name: "Maths Department",
    teachers: [
      { name: "Mr. Hafeez Ali", qualification: "M.Phil. Mathematics", joined: "", photo: IMG("hafeez-ali.png") },
      { name: "Ms. Bushra Shahid", qualification: "M.Sc. Math", joined: "", photo: IMG("bushra-shahid.jpg") },
      { name: "Ms. Naila Ilyas", qualification: "M.Sc. Eco, M.A. Education", joined: "", photo: IMG("naila-ilyas.png") },
      { name: "Ms. Kokab Javed", qualification: "MS Maths/MA Education", joined: "", photo: IMG("kokab-javed.png") },
      { name: "Ms. Javeria Adan", qualification: "B.S Math", joined: "", photo: IMG("javeria-adan.png") },
    ]
  },
  {
    name: "Urdu Department",
    teachers: [
      { name: "Ms. Saira Batool", role: "Subject Coordinator", qualification: "M.A. Urdu, B.Ed.", joined: "", photo: IMG("saira-batool.jpg") },
      { name: "Ms. Humaira Gillani", qualification: "M.A Urdu", joined: "", photo: IMG("humaira-gillani.png") },
      { name: "Ms. Humaira Yasmeen", qualification: "M.A Urdu", joined: "", photo: IMG("humaira-yasmeen.png") },
      { name: "Ms. Anum Jamshaid", qualification: "M.A Urdu", joined: "", photo: IMG("anum-jamshaid.png") },
      { name: "Ms. Rakshanda Kausar", qualification: "M.A Urdu", joined: "", photo: IMG("rakshanda-kausar.png") },
    ]
  },
  {
    name: "Computer Department",
    teachers: [
      { name: "Ms. Afreenish Arooj", qualification: "BS (Hons) in Comp Sci, B.Ed.", joined: "", photo: IMG("afreenish-arooj.png") },
      { name: "Ms. Saleha Zahid", qualification: "B.Sc.", joined: "", photo: IMG("saleha-zahid.png") },
    ]
  },
  {
    name: "Islamiyat Department",
    teachers: [
      { name: "Mr. Rehan Butt", role: "Subject Coordinator", qualification: "M.A. Arabic", joined: "", photo: IMG("rehan-butt.jpg") },
      { name: "Ms. Sana Rubab", qualification: "M.A. Isl", joined: "", photo: IMG("sana-rubab.png") },
      { name: "Ms. Robina Ashfaq", qualification: "ADP(B.A.), Hifz-ul-Quran, Alima (Arabic)", joined: "", photo: IMG("robina-ashfaq.jpg") },
    ]
  },
  {
    name: "Science Department",
    teachers: [
      { name: "Mr. Bilal Khan", role: "Subject Coordinator", qualification: "M.Phil. Botany, B.Ed.", joined: "", photo: IMG("bilal-khan.png") },
      { name: "Mr. Wajahat Hussain", qualification: "M.Sc. Physics", joined: "", photo: IMG("wajahat-hussain.png") },
      { name: "Ms. Tayyaba Sohaib", qualification: "M.Sc. Biochemistry", joined: "", photo: IMG("tayyaba-sohaib.png") },
      { name: "Ms. Kiran Shahzadi", qualification: "M.Phil. Environmental Sciences", joined: "", photo: IMG("kiran-shahzadi.png") },
      { name: "Ms. Iqra Iqbal", qualification: "M.Phil. Pharmaceutics", joined: "", photo: IMG("iqra-iqbal.jpg") },
    ]
  },
  {
    name: "Pakistan Studies Department",
    teachers: [
      { name: "Ms. Farah Naz", role: "Subject Coordinator", qualification: "M.A Political Science, M.A Economics", joined: "", photo: IMG("farah-naz.jpg") },
      { name: "Ms. Shahzada Nida Maryam", qualification: "M.A Pak Studies", joined: "", photo: IMG("shahzada-nida-maryam.png") },
      { name: "Ms. Tayyaba Ashraf", qualification: "B.S. Environmental Science", joined: "", photo: IMG("tayyaba-ashraf.png") },
    ]
  },
  {
    name: "Business Studies & Accountings Department",
    teachers: [
      { name: "Ms. Maham Haris", role: "Subject Coordinator", qualification: "M.Phil. Economics", joined: "", photo: IMG("maham-haris.jpg") },
      { name: "Mr. Khalid Nawaz", qualification: "MBA Finance", joined: "", photo: IMG("khalid-nawaz.png") },
      { name: "Ms. Ayesha Ayoub", qualification: "M.com , B.ed , M.ed", joined: "", photo: IMG("ayesha-ayoub.png") },
    ]
  },
  {
    name: "Arts and PTI Department",
    teachers: [
      { name: "Ms. Shiza Niamat", role: "Art Teacher", qualification: "B.Sc. (Zoology, Botany, Phycology)", joined: "", photo: IMG("shiza-niamat.png") },
      { name: "Mr. Mudassar Malik", role: "PTI", qualification: "Under Matric", joined: "", photo: IMG("mudassar-malik.png") },
      { name: "Mr. Amir Khurshid", role: "Music Teacher", qualification: "FA", joined: "", photo: IMG("amir-khurshid.png") },
    ]
  }
];

const CLASSES = [
  { label: "Grade 1", photo: IMG("grade-1.jpg") },
  { label: "Grade 2", photo: IMG("grade-2.jpg") },
  { label: "Grade 3", photo: IMG("grade-3.jpg") },
  { label: "Grade 4", photo: IMG("grade-4.jpg") },
  { label: "Grade 5", photo: IMG("grade-5.jpg") },
  { label: "Grade 6", photo: IMG("grade-6.jpg") },
  { label: "Grade 7", photo: IMG("grade-7.jpg") },
  { label: "Grade 8", photo: IMG("grade-8.jpg") },
  { label: "O Level", photo: IMG("grade-o-level.jpg") },
  { label: "APSIS Faculty", photo: IMG("apsis-faculty.jpg") },
];

const ACTIVITIES = [
  { label: "Art and Craft Activities", photo: IMG("art-craft-1.png") },
  { label: "Art and Craft Activities", photo: IMG("art-craft-2.png") },
  { label: "Morning Assemblies", photo: IMG("morning-assembli-1.png") },
  { label: "Morning Assemblies", photo: IMG("morning-assembli-2.png") },
  { label: "Children's Day", photo: IMG("children-day.png") },
  { label: "Arts Class Activity", photo: IMG("art-class.png") },
  { label: "Iqbal Day", photo: IMG("iqbal-day-1.png") },
  { label: "Iqbal Day", photo: IMG("iqbal-day-2.png") },
  { label: "Teachers Day", photo: IMG("teacher-day-1.png") },
  { label: "Teachers Day", photo: IMG("teacher-day-2.png") },
  { label: "Learning through Realia", photo: IMG("learning-throug-realia-1.png") },
  { label: "Learning through Realia", photo: IMG("learning-throug-realia-2.png") },
  { label: "Learning through Realia", photo: IMG("learning-throug-realia-3.png") },
  { label: "Learning through Realia", photo: IMG("learning-throug-realia-4.png") },
  { label: "Inter House Drama Competition", photo: IMG("inter-house-drama-1.png") },
  { label: "Inter House Drama Competition", photo: IMG("inter-house-drama-2.png") },
  { label: "Inter House Drama Competition", photo: IMG("inter-house-drama-3.png") },
  { label: "Inter House Drama Competition", photo: IMG("inter-house-drama-4.png") },
  { label: "Mothers Day", photo: IMG("mother-day.png") },
  { label: "Tree Plantation and Environmental Sustainability", photo: IMG("tree-plant.png") },
  { label: "Effective Use of Smart Boards", photo: IMG("smart-boards-1.png") },
  { label: "Effective Use of Smart Boards", photo: IMG("smart-boards-2.png") },
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

export default function APSISSection() {
  const others = (Object.keys(SECTIONS) as SectionKey[]).filter((k) => k !== "apsis");
  const data = SECTIONS["apsis"];

  return (
    <>
      <PageHero
        eyebrow={data.sub}
        title={data.name}
        intro={data.headMsg}
        image={IMG("apsis-faculty.jpg")}
        crumb={[{ label: "Quick Links", href: "/quick-links" }, { label: data.name }]}
      />

      <section className="sec">
        <Editorial
          rail={
            <>
              <FactCard
                title="Section facts"
                rows={[
                  ["Vice Principal", VICE_PRINCIPAL.name],
                  ["Section Head", SECTION_HEAD.name],
                  ["Curriculum", "Cambridge Stream"],
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
          {/* Vice Principal Message */}
          <section>
            <div className="quoteband" style={{ borderRadius: "var(--r)", marginBottom: "3rem" }}>
              <div className="qb" style={{ padding: 32 }}>
                <div className="qb-portrait" style={{ width: 110, height: 110, position: "relative", overflow: "hidden", backgroundColor: '#f0f0f0', borderRadius: "50%", flexShrink: 0 }}>
                  <Image src={VICE_PRINCIPAL.photo} alt={VICE_PRINCIPAL.name} fill sizes="110px" style={{ objectFit: 'cover' }} />
                </div>
                
                <div className="qb-body">
                  <span className="eyebrow">Message from the Vice Principal</span>
                  <blockquote style={{ fontSize: "1.1rem", borderLeft: 'none', paddingLeft: 0, marginTop: '1rem', fontStyle: 'normal' }}>
                    <p>The Cambridge Stream at Army Public School for International Studies (APSIS) was established in 2020 with a vision to provide internationally benchmarked education that inspires academic excellence, critical thinking, and lifelong learning. Today, the programme proudly offers the Cambridge curriculum from Stage 1 to O Level III, providing students with a strong foundation for higher education and future success.</p>
                    <p style={{ marginTop: '1rem' }}>Now housed in a state-of-the-art campus featuring modern classrooms, well-equipped laboratories, and innovative learning spaces, the Cambridge Stream offers an environment where students are encouraged to explore, create, and excel.</p>
                    <p style={{ marginTop: '1rem' }}>Our dedicated faculty is committed to delivering a learner-centered education that develops confidence, curiosity, leadership, and global perspectives. Through rigorous academics, co-curricular opportunities, and a supportive school culture, we empower every learner to realize their full potential. Rather than remaining fixed in traditional approaches, we embrace innovation and welcome meaningful improvements, continually refining our educational practices to provide the highest quality learning experience for every student.</p>
                    <p style={{ marginTop: '1.5rem', fontWeight: 600, textAlign: 'center', color: 'var(--green-700)' }}>At APSIS, we are committed to shaping confident, responsible, and compassionate global citizens<br />Prepared to thrive in an ever-changing world!</p>
                  </blockquote>
                  <div className="qb-foot" style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                    <div className="qb-who">
                      <div className="nm">{VICE_PRINCIPAL.name}</div>
                      <div className="rl">{VICE_PRINCIPAL.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Head */}
          <section>
            <SectionHead eyebrow="Leadership" title="Section Head" />
            <div className="staffgrid">
              <StaffCard s={SECTION_HEAD} />
            </div>
          </section>

          {/* Coordinators */}
          <section>
            <SectionHead eyebrow="Leadership" title="Coordinators" />
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

          {/* Assessment */}
          <section>
            <SectionHead eyebrow="Academics" title="Assessment" />
            <div style={{ position: 'relative', width: '100%', height: 'auto', minHeight: '800px', borderRadius: 'var(--r)', overflow: 'hidden', marginBottom: '2rem' }}>
              <Image src={IMG("assessment-full.png")} alt="Assessment" fill style={{ objectFit: 'contain' }} />
            </div>
          </section>

          {/* Activities */}
          <section>
            <SectionHead eyebrow="Curriculum" title="Activities" />
            <div className="classgrid">
              {ACTIVITIES.map((a) => (
                <div className="figure" key={a.label + a.photo}>
                  <div className="fimg" style={{ backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <Image src={a.photo} alt={a.label} fill sizes="(max-width: 820px) 100vw, 33vw" />
                  </div>
                  <figcaption style={{ fontSize: '0.9rem', lineHeight: '1.2' }}>{a.label}</figcaption>
                </div>
              ))}
            </div>
          </section>
        </Editorial>
      </section>
    </>
  );
}

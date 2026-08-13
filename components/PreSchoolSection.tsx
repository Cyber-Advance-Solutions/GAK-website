import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, GraduationCap } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import { SECTIONS, type SectionKey } from "@/lib/data";

const IMG = (name: string) => `/sections/pre-school/${name}`;

type Staff = { name: string; role?: string; qualification: string; joined: string; photo: string };

const HEAD: Staff = {
  name: "Farhat Jabeen",
  role: "Section Head Pre School",
  qualification: "M.A Eng",
  joined: "28th April,2005",
  photo: IMG("section-head.jpg"),
};

const DEPUTY_HEADS: Staff[] = [
  { name: "Sayeda Mushtaq", role: "Deputy Section Head", qualification: "M.A History", joined: "3rd March,2025", photo: IMG("deputy-section-head.png") },
];

const COORDINATORS: Staff[] = [
  { name: "Ms. Qudsia Iqbal", role: "Class Coordinator EYS-I", qualification: "MA Edu. MA Islamya. B.Ed", joined: "", photo: IMG("qudsia-iqbal.jpg") },
  { name: "Ms. Sania Noor", role: "Class Coordinator EYS-II", qualification: "BS Botany", joined: "", photo: IMG("sania-noor.jpg") },
  { name: "Ms. Naureen Zubair", role: "Class Coordinator Pre-I", qualification: "BA, B.Ed", joined: "", photo: IMG("naureen-zubair.jpg") },
];

const DEPARTMENTS: { name: string; teachers: Staff[] }[] = [
  {
    name: "EYS-I",
    teachers: [
      { name: "Ms. Sana Azhar", qualification: "Msc. (Sports Science)", joined: "", photo: IMG("sana-azhar.jpg") },
      { name: "Ms. Palwasha Andleeb", qualification: "M.A (English)", joined: "", photo: IMG("palwasha-andleeb.jpg") },
      { name: "Ms. Syeda Tahira", qualification: "B.A, B.Ed", joined: "", photo: IMG("syeda-tahira.jpg") },
      { name: "Ms. Muqaddas Raza", qualification: "ADC, B.Ed", joined: "", photo: IMG("muqaddas-raza.jpg") },
      { name: "Ms. Shiza Ismail", qualification: "BS Mathematics", joined: "", photo: IMG("shiza-ismail.jpg") },
      { name: "Ms. Shazia Nazli", qualification: "B.A", joined: "", photo: IMG("shazia-nazli.jpg") },
      { name: "Ms. Sundas Farooq", qualification: "B.A", joined: "", photo: IMG("sundas-farooq.jpg") },
      { name: "Ms. Eman Fatima", qualification: "BS English", joined: "", photo: IMG("eman-fatima.jpg") },
      { name: "Ms. Mahrukh Tafazal", qualification: "MA English", joined: "", photo: IMG("mahrukh-tafazal.jpg") },
      { name: "Ms. Eman Abbas", qualification: "ADC", joined: "", photo: IMG("eman-abbas.jpg") },
      { name: "Ms. Laiba Arshad", qualification: "BS'CS", joined: "", photo: IMG("laiba-arshad.jpg") },
      { name: "Ms. Sadaf Zia", qualification: "BSc", joined: "", photo: IMG("sadaf-zia.jpg") },
      { name: "Ms. Amna Sehar", qualification: "BS'CS", joined: "", photo: IMG("amna-sehar.jpg") },
      { name: "Ms. Anila Rehman", qualification: "MA Islamiyat", joined: "", photo: IMG("anila-rehman.jpg") },
    ],
  },
  {
    name: "English/Mathematics Department",
    teachers: [
      { name: "Ms. Mamoona Saleem", qualification: "BA, B.Ed", joined: "", photo: IMG("mamoona-saleem.jpg") },
      { name: "Ms. Kalsoom Ehsan", qualification: "MS Finance", joined: "", photo: IMG("kalsoom-ehsan.jpg") },
      { name: "Ms. Neelum Gul", qualification: "BA", joined: "", photo: IMG("neelum-gul.jpg") },
      { name: "Ms. Sidra Bashir", qualification: "BBA Honrs.", joined: "", photo: IMG("sidra-bashir.jpg") },
      { name: "Ms. Rabia Abid", qualification: "MA English", joined: "", photo: IMG("rabia-abid.jpg") },
      { name: "Ms. Sunaina Riaz", qualification: "BA", joined: "", photo: IMG("sunaina-riaz.jpg") },
      { name: "Ms. Laiba Shahid", qualification: "BS'CS", joined: "", photo: IMG("laiba-shahid.jpg") },
      { name: "Ms. Ammara Khalid", qualification: "MA English, B.Ed", joined: "", photo: IMG("ammara-khalid.jpg") },
      { name: "Ms. Esha Ghafoor", qualification: "BS English", joined: "", photo: IMG("esha-ghafoor.jpg") },
      { name: "Ms. Bushra Fatima", qualification: "BS Psychology, B.Ed", joined: "", photo: IMG("bushra-fatima.jpg") },
      { name: "Ms. Saima Zeeshan", qualification: "MA History, B.Ed", joined: "", photo: IMG("saima-zeeshan.jpg") },
      { name: "Ms. Samina Khalid", qualification: "BA, B.Ed", joined: "", photo: IMG("samina-khalid.jpg") },
      { name: "Ms. Fozia Aslam", qualification: "MA, B.Ed", joined: "", photo: IMG("fozia-aslam.jpg") },
      { name: "Ms. Shaista Norren", qualification: "MA Political Sci.", joined: "", photo: IMG("shaista-norren.jpg") },
      { name: "Ms. Sehrish Saadat", qualification: "BA, B.Ed", joined: "", photo: IMG("sehrish-saadat.jpg") },
      { name: "Ms. Nimrah Haroon", qualification: "BS Honrs.", joined: "", photo: IMG("nimra-haroon.jpg") },
      { name: "Ms. Marwa Abid", qualification: "BS Honrs.", joined: "", photo: IMG("marwa-abid.jpg") },
      { name: "Ms. Urooj Farukh", qualification: "MA History, B.Ed", joined: "", photo: IMG("urooj-farukh.jpg") },
      { name: "Ms. Asma Zohaib", qualification: "BA", joined: "", photo: IMG("asma-zohaib.jpg") },
      { name: "Ms. Huria Umar", qualification: "BBA", joined: "", photo: IMG("huria-umar.jpg") },
    ],
  },
  {
    name: "Urdu Department",
    teachers: [
      { name: "Ms. Musarrat Jabeen", qualification: "MA Political Sci. B.Ed", joined: "", photo: IMG("musarrat-jabeen.jpg") },
      { name: "Ms. Saba Zahoor", qualification: "BA", joined: "", photo: IMG("saba-zahoor.jpg") },
      { name: "Ms. Jalila Tu Zahra", qualification: "MSc Sports Sci.", joined: "", photo: IMG("jalila-tu-zahra.jpg") },
      { name: "Ms. Alisha Butt", qualification: "MA Pak Studies", joined: "", photo: IMG("alisha-butt.jpg") },
      { name: "Ms. Saira Farooq", qualification: "MA History", joined: "", photo: IMG("saira-farooq.jpg") },
      { name: "Ms. Farhana Shahid", qualification: "MA History", joined: "", photo: IMG("farhana-shahid.jpg") },
      { name: "Ms. Shakira Zulfiqar", qualification: "MA Physical Edu.", joined: "", photo: IMG("shakira-zulfiqar.jpg") },
      { name: "Ms. Zubdha Ashraf", qualification: "MA History, MA Urdu, B.Ed", joined: "", photo: IMG("zubdha-ashraf.jpg") },
      { name: "Ms. Saba Qaddus", qualification: "BS Zoology", joined: "", photo: IMG("saba-qaddus.jpg") },
      { name: "Ms. Aleeha Farooq", qualification: "BS Political Sci.", joined: "", photo: IMG("aleeha-farooq.jpg") },
      { name: "Ms. Sadaf Mubarak", qualification: "MA, B.Ed", joined: "", photo: IMG("sadaf-mubarak.jpg") },
    ],
  },
  {
    name: "Islamiyat Department",
    teachers: [
      { name: "Ms. Samera Kausar", qualification: "BS Islamic Studies", joined: "", photo: IMG("samera-kausar.jpg") },
    ],
  },
  {
    name: "Art Department",
    teachers: [
      { name: "Ms. Uzma Kalsoom", qualification: "MA History, MA Islamiyat", joined: "", photo: IMG("uzma-kalsoom.jpg") },
    ],
  },
  {
    name: "P.T Department",
    teachers: [
      { name: "Ms. Shazia Amir", qualification: "BA", joined: "", photo: IMG("shazia-amir.jpg") },
    ],
  },
  {
    name: "Music Department",
    teachers: [
      { name: "Mr. Sadrik Ilyas", qualification: "D.Com", joined: "", photo: IMG("sadrik-ilyas.jpg") },
    ],
  },
];

const CLASSES = [
  { label: "EYS-I", photo: IMG("esy-1.jpg") },
  { label: "EYS-II", photo: IMG("esy-2.jpg") },
  { label: "Pre-I", photo: IMG("esy-3.jpg") },
];

const ACTIVITIES: { label: string; photo: string }[] = [
  { label: "Ball Game", photo: IMG("ball-game.png") },
  { label: "Cultural Day", photo: IMG("cultural-day.png") },
  { label: "Hand Printing", photo: IMG("hand-printing.png") },
  { label: "Family Tree", photo: IMG("family-tree.png") },
  { label: "Free Hand Painting", photo: IMG("free-hand-painting.png") },
  { label: "Green Awareness", photo: IMG("green-awareness.png") },
  { label: "Drama Competition", photo: IMG("drama-competition.png") },
  { label: "Drama Competition", photo: IMG("drama-competition2.jpg") },
  { label: "Kashmir Day", photo: IMG("kashmir-day.jpg") },
  { label: "Health & Hygiene", photo: IMG("health-hygiene.jpg") },
  { label: "Labour Day", photo: IMG("labour-day.jpg") },
  { label: "Marka-e-Haq", photo: IMG("mark-e-haq.jpg") },
  { label: "Math Shapes", photo: IMG("math-shapes.jpg") },
  { label: "Red Colour Day", photo: IMG("red-color-day.jpg") },
  { label: "Naat Competition", photo: IMG("naat-competition.jpg") },
  { label: "Rhyme Competition", photo: IMG("rhyme-competition.jpg") },
  { label: "Salad Making", photo: IMG("salad-making.jpg") },
  { label: "Season", photo: IMG("season.jpg") },
  { label: "Solid Waste", photo: IMG("solid-waste.jpg") },
  { label: "Sow a Seed", photo: IMG("sow-seed.jpg") },
  { label: "Sports Day", photo: IMG("sports-day.jpg") },
  { label: "Symbol of Pakistan", photo: IMG("symbol-of-pak.jpg") },
  { label: "World Mental Health Day", photo: IMG("world-mental.jpg") },
  { label: "World Wild Life", photo: IMG("world-wild-life.jpg") },
  { label: "Youm-e-Qaumi Azm-e-Taleem", photo: IMG("youme-koume-azam.jpg") },
];

const HIGH_ACHIEVERS: Staff[] = [
  // Gold Medalists
  { name: "Ruhab Fatima", role: "HRCA English Quiz", qualification: "Gold Medalist", joined: "", photo: IMG("ruhab-fatima.png") },
  { name: "Amal Syed", role: "HRCA English Quiz", qualification: "Gold Medalist", joined: "", photo: IMG("amal-syed.png") },
  { name: "Umaima Jabran", role: "HRCA English Quiz", qualification: "Gold Medalist", joined: "", photo: IMG("umaima-jabran.png") },
  { name: "Asma Ul Husna", role: "HRCA English Quiz", qualification: "Cash Prize Rs. 5000/-", joined: "", photo: IMG("asma-ul-husna.png") },
  { name: "Zainab Qasim", role: "HRCA Science Quiz", qualification: "Cash Prize Rs. 15000/-", joined: "", photo: IMG("zainab-qasim.png") },
  { name: "Alizay Mudassir", role: "HRCA English Quiz", qualification: "Gold Medalist", joined: "", photo: IMG("alizay-mudassir.png") },
  { name: "Maham Shakir", role: "HRCA English Quiz", qualification: "Gold Medalist", joined: "", photo: IMG("maham-shakir.png") },
  { name: "Harram Ahmed", role: "HRCA English Quiz", qualification: "Gold Medalist", joined: "", photo: IMG("harram-ahmed.png") },
  { name: "Zarish Yasir", role: "HRCA English Quiz", qualification: "Gold Medalist", joined: "", photo: IMG("zarish-yasir.png") },
  { name: "Abdul Haq", role: "HRCA English Quiz", qualification: "Gold Medalist", joined: "", photo: IMG("abdul-haq.png") },
  { name: "Hoorain Ijaz", role: "HRCA English Quiz", qualification: "Gold Medalist", joined: "", photo: IMG("hoorain-ijaz.png") },
  // Silver Medalists
  { name: "Rija Hassan", role: "HRCA English Quiz", qualification: "Silver Medalist", joined: "", photo: IMG("rija-hassan.png") },
  { name: "M. Khuraym", role: "HRCA English Quiz", qualification: "Silver Medalist", joined: "", photo: IMG("m-khuraym.png") },
  { name: "Wali Ur Rehman", role: "HRCA English Quiz", qualification: "Silver Medalist", joined: "", photo: IMG("wali-ur-rehman.png") },
  { name: "Syeda Muwadat Zahra", role: "HRCA English Quiz", qualification: "Silver Medalist", joined: "", photo: IMG("syeda-muwadat-zahra.png") },
  { name: "Hidaya Usman", role: "HRCA English Quiz", qualification: "Silver Medalist", joined: "", photo: IMG("hidaya-usman.png") },
  { name: "Nofaal Airum", role: "HRCA English Quiz", qualification: "Silver Medalist", joined: "", photo: IMG("nofaal-airum.png") },
  { name: "Ibrahim Majeed", role: "HRCA English Quiz", qualification: "Silver Medalist", joined: "", photo: IMG("ibrahim-majeed.png") },
  { name: "Muhammad Saad", role: "HRCA English Quiz", qualification: "Silver Medalist", joined: "", photo: IMG("muhammad-saad.png") },
  // Bronze Medalists
  { name: "Salar Ahmed", role: "HRCA English Quiz", qualification: "Bronze Medalist", joined: "", photo: IMG("salar-ahmed.png") },
  { name: "Mahrosh Tassawar", role: "HRCA English Quiz", qualification: "Bronze Medalist", joined: "", photo: IMG("mahrosh-tassawar.png") },
  { name: "Ayesha Kareem", role: "HRCA English Quiz", qualification: "Bronze Medalist", joined: "", photo: IMG("ayesha-kareem.png") },
  { name: "Aniya Abbas", role: "HRCA English Quiz", qualification: "Bronze Medalist", joined: "", photo: IMG("aniya-abbas.png") },
  { name: "Kiswa Nasir", role: "HRCA English Quiz", qualification: "Bronze Medalist", joined: "", photo: IMG("kiswa-nasir.png") },
  { name: "Haider Ali", role: "HRCA English Quiz", qualification: "Bronze Medalist", joined: "", photo: IMG("haider-ali.png") },
  { name: "Fatima Sajid", role: "HRCA English Quiz", qualification: "Bronze Medalist", joined: "", photo: IMG("fatima-sajid.png") },
  { name: "Muhammad Arfeen", role: "HRCA English Quiz", qualification: "Bronze Medalist", joined: "", photo: IMG("muhammad-arfeen.png") },
  { name: "Daneen Fatima", role: "HRCA English Quiz", qualification: "Bronze Medalist", joined: "", photo: IMG("daneen-fatima.png") },
  { name: "M. Asad Yousaf", role: "HRCA English Quiz", qualification: "Bronze Medalist", joined: "", photo: IMG("m-asad-yousaf.png") },
  { name: "Muhammad Musa", role: "HRCA English Quiz", qualification: "Bronze Medalist", joined: "", photo: IMG("muhammad-musa.png") },
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

const FACILITIES: { name: string; description: string; photos: string[] }[] = [
  {
    name: "Visitors Room",
    description: "A welcoming and comfortable reception area designed to receive parents and guests in a warm, professional setting.",
    photos: [IMG("visitor-room1.jpg"), IMG("visitor-room2.jpg")],
  },
  {
    name: "Art Room",
    description: "A vibrant, fully equipped art room that sparks creativity through painting, crafts, and hands-on artistic expression for our young learners.",
    photos: [IMG("art-room1.jpg"), IMG("art-room2.jpg")],
  },
  {
    name: "Library",
    description: "A dedicated reading space stocked with age-appropriate books and learning materials to nurture a love of reading from an early age.",
    photos: [],
  },
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

export default function PreSchoolSection() {
  const others = (Object.keys(SECTIONS) as SectionKey[]).filter((k) => k !== "pre");
  const data = SECTIONS["pre"];

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
                  ["Classes", "EYS-I – Pre-I"],
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
                      The Pre-School Section at Army Public School & College Garrison Academy Kharian Cantt holds a rich history of nurturing young minds that dates back to its inception as Toddler Nursery in 1972. Over the decades, our institution evolved into Kehkashaan Academy in 1986, joined the Army Public Schools network in 1990, and established its identity at the Garrison Academy Kharian Cantt in 2000. Built on this 50-year legacy of educational care, our early childhood programme lays a strong foundation for lifelong learning, character, and confidence.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                      Housed in a safe, vibrant, and child-centered environment, our Pre-School features engaging classrooms and stimulating learning spaces where young learners feel valued, inspired, and encouraged to explore their full potential. We believe that every child is unique and deserves the opportunity to learn, grow, and thrive at their own pace.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                      Our dedicated team of educators is committed to delivering a nurturing education that fosters curiosity, creativity, effective communication, and strong moral values. Through play-based learning, interactive activities, and a supportive school culture, we empower our youngest learners to build independence and empathy.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                      At APS&C Garrison Academy Kharian Cantt, we believe a strong partnership between home and school is essential for a child's success. Together with our parents, we are committed to building confident, compassionate, and responsible learners who are joyful, curious, and well-prepared for the future.
                    </p>
                  </blockquote>
                  <div className="qb-foot">
                    <div className="qb-who"><div className="nm">{HEAD.name}</div><div className="rl">{HEAD.role}</div></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Deputy section heads */}
          <section>
            <SectionHead eyebrow="Leadership" title="Deputy Section Head" />
            <div className="staffgrid">
              {DEPUTY_HEADS.map((s) => <StaffCard key={s.name} s={s} />)}
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

          {/* Exam schedule */}
          <section>
            <SectionHead eyebrow="Assessment" title="Exam Schedule" />
            <div className="prose" style={{ background: "#fff", padding: "2rem", borderRadius: "var(--r)", border: "1px solid var(--border)" }}>
              <h3 style={{ margin: 0, textAlign: "center", color: "var(--ink)" }}>No Assessment in Pre School</h3>
              <p style={{ textAlign: "center", marginTop: "1rem", color: "var(--ink-soft)" }}>
                We believe in continuous evaluation through observation and play-based learning activities.
              </p>
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

          {/* High Achievers */}
          <section>
            <SectionHead eyebrow="Recognition" title="High Achievers Pre School" />
            <div className="staffgrid">
              {HIGH_ACHIEVERS.map((s) => <StaffCard key={s.name + s.photo} s={s} />)}
            </div>
          </section>

          {/* Upcoming events — hidden until real data is available
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
          */}

          {/* Facilities */}
          <section>
            <SectionHead eyebrow="Campus" title="Facilities" />
            {FACILITIES.map((f) => (
              <div key={f.name} style={{ marginBottom: "2.5rem" }}>
                <h3 style={{ marginBottom: "0.5rem" }}>{f.name}</h3>
                <p style={{ color: "var(--ink-soft)", marginBottom: "1rem" }}>{f.description}</p>
                {f.photos.length > 0 && (
                  <div className="classgrid">
                    {f.photos.map((photo, i) => (
                      <div className="figure" key={photo}>
                        <div className="fimg" style={{ backgroundColor: "#f0f0f0" }}>
                          <Image src={photo} alt={`${f.name} ${i + 1}`} fill sizes="(max-width: 820px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link className="link-arrow" href="/admissions" style={{ marginTop: "2rem", display: "flex" }}>Apply for admission <ArrowRight size={16} /></Link>
          </section>
        </Editorial>
      </section>
    </>
  );
}


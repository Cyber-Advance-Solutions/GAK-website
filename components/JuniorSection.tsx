import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import { SECTIONS, type SectionKey } from "@/lib/data";

const IMG = (name: string) => `/sections/junior-section/${name}`;

type Staff = { name: string; role?: string; qualification: string; joined: string; photo: string };

const HEAD: Staff = {
  name: "Ms. Iram Saeed Butt",
  role: "Section Head (Junior Section)",
  qualification: "",
  joined: "",
  photo: IMG("iram-saeed-butt.jpg"),
};

const DEPUTY_HEADS: Staff[] = [
  {
    name: "Ms. Farah Naz",
    role: "Deputy Section Head",
    qualification: "M.A (English, Pol. Science)",
    joined: "",
    photo: IMG("farah-naz.jpg"),
  },
  {
    name: "Ms. Faiza Iqbal",
    role: "Deputy Section Head",
    qualification: "MA Economics",
    joined: "",
    photo: IMG("faiza-iqbal.jpg"),
  },
];

const DEPARTMENTS: { name: string; teachers: Staff[] }[] = [
  {
    name: "English Department",
    teachers: [
      { name: "Ms. Farah Naz", role: "Subject Coordinator", qualification: "M.A (English, Pol. Science)", joined: "", photo: IMG("farah-naz.jpg") },
      { name: "Ms. Yasmin Nazar", qualification: "MA English", joined: "", photo: IMG("yasmis-nazar.jpg") },
      { name: "Ms. Lubna Kamran", qualification: "BBA Hons", joined: "", photo: IMG("lubna-kamran.jpg") },
      { name: "Ms. Sobia Qasim", qualification: "MA Mass Communication", joined: "", photo: IMG("sobia-qasim.jpg") },
      { name: "Ms. Ifza Nazir", qualification: "MCS", joined: "", photo: IMG("ifza-nazir.jpg") },
      { name: "Ms. Nabila Rabbani", qualification: "MA Islamiyat, B.Ed", joined: "", photo: IMG("nabila-rabbani.jpg") },
      { name: "Ms. Aqsa Abbas", qualification: "BS Chemistry", joined: "", photo: IMG("aqsa-abbas.jpg") },
      { name: "Ms. Fatima Ali", qualification: "BS Psychology", joined: "", photo: IMG("fatima-ali.jpg") },
      { name: "Ms. Aiman Munir", qualification: "BS English", joined: "", photo: IMG("aiman-munir.jpg") },
      { name: "Ms. Amna", qualification: "BS Hons English", joined: "", photo: IMG("amna.jpg") },
      { name: "Ms. Aleena Imran", qualification: "BS English", joined: "", photo: IMG("aleena-imran.jpg") },
      { name: "Ms. Rafia Hakeem", qualification: "BS Psychology", joined: "", photo: IMG("rafia-hakeem.jpg") },
      { name: "Ms. Amtul Nisa", qualification: "BS English", joined: "", photo: IMG("amtul-nisa.jpg") },
      { name: "Ms. Iqra Bibi", qualification: "BS English", joined: "", photo: IMG("iqra-bibi.jpg") },
      { name: "Ms. Zarmina Baqi", qualification: "MS HRM", joined: "", photo: IMG("zarmina-baqi.jpg") },
      { name: "Ms. Sehrash Hameed", qualification: "BS Botany", joined: "", photo: IMG("sehrash-hameed.jpg") },
    ],
  },
  {
    name: "Maths Department",
    teachers: [
      { name: "Ms. Uzma Arshad", role: "Subject Coordinator", qualification: "B.A, B.Ed", joined: "", photo: IMG("uzma-arshad.jpg") },
      { name: "Ms. Faiza Iqbal", qualification: "MSc Economics", joined: "", photo: IMG("faiza-iqbal.jpg") },
      { name: "Ms. Adeela Masood", qualification: "MSc Economics", joined: "", photo: IMG("adeela-masood.jpg") },
      { name: "Ms. Sana Salim", qualification: "BS Hons Mathematics", joined: "", photo: IMG("sana-salim.jpg") },
      { name: "Ms. Rabia Munir", qualification: "BS Hons Bio Technology", joined: "", photo: IMG("rabia-munir.jpg") },
      { name: "Ms. Zartasha Usman", qualification: "MSc Mathematics", joined: "", photo: IMG("zartasha-usman.jpg") },
      { name: "Ms. Saima Munir", qualification: "MSc Psychology", joined: "", photo: IMG("saima-munir.jpg") },
      { name: "Ms. Fozia Shabbir", qualification: "BS Hons Accounting & Finance", joined: "", photo: IMG("fozia-shabbir.jpg") },
      { name: "Ms. Hira Kanwar", qualification: "BSCS", joined: "", photo: IMG("hira-kanwar.jpg") },
      { name: "Ms. Amrana Bibi", qualification: "BS IT", joined: "", photo: IMG("amrana-bibi.jpg") },
      { name: "Ms. Rooba Sajjad", qualification: "MS Nanotechnology", joined: "", photo: IMG("rooba-sajjad.jpg") },
      { name: "Ms. Maryam Aman", qualification: "BS Bio Technology", joined: "", photo: IMG("maryam-aman.jpg") },
      { name: "Ms. Nasra Chaudhry", qualification: "MA Economics", joined: "", photo: IMG("nasra-chaudhry.jpg") },
    ],
  },
  {
    name: "Urdu / Islamiyat Department",
    teachers: [
      { name: "Ms. Ayesha Ilyas", role: "Subject Coordinator", qualification: "MA Urdu", joined: "", photo: IMG("ayesha-ilyas.jpg") },
      { name: "Ms. Saira Kazmi", qualification: "MA Urdu, B.Ed", joined: "", photo: IMG("saira-kazmi.jpg") },
      { name: "Ms. Samra Liaqat", qualification: "B.A, B.Ed", joined: "", photo: IMG("samra-liaqat.jpg") },
      { name: "Ms. Faryal Azad", qualification: "MA Urdu", joined: "", photo: IMG("faryal-azad.jpg") },
      { name: "Ms. Ramsha Liaqat", qualification: "B.Ed Hons", joined: "", photo: IMG("ramsha-liaqat.jpg") },
      { name: "Ms. Syeda Sabiqa Talib", qualification: "MA Urdu", joined: "", photo: IMG("syeda-sabiqa-talib.jpg") },
      { name: "Ms. Fozia Naeem", qualification: "B.A, B.Ed", joined: "", photo: IMG("fozia-naeem.jpg") },
      { name: "Ms. Zoya Qamar", qualification: "MA Urdu", joined: "", photo: IMG("zoya-qamar.jpg") },
      { name: "Ms. Tahira Inayat", qualification: "MA Urdu, Physical Education, M.Ed", joined: "", photo: IMG("tahira-inayat.jpg") },
      { name: "Ms. Kashifa Abbas", qualification: "MA Education, B.Ed", joined: "", photo: IMG("kashifa-abbas.jpg") },
      { name: "Ms. Saba Awais", qualification: "B.Com, B.Ed", joined: "", photo: IMG("saba-awais.jpg") },
    ],
  },
  {
    name: "Computer Department",
    teachers: [
      { name: "Ms. Sidra Qaisar", role: "Subject Coordinator", qualification: "MCS", joined: "", photo: IMG("sidra-qaisar.jpg") },
      { name: "Ms. Sana Latif", qualification: "MIT", joined: "", photo: IMG("sana-latif.jpg") },
      { name: "Ms. Saira Bibi", qualification: "MCS, B.Ed", joined: "", photo: IMG("saira-bibi.jpg") },
      { name: "Ms. Sibgha", qualification: "BS IT", joined: "", photo: IMG("sibgha.jpg") },
    ],
  },
  {
    name: "Tajweed Department",
    teachers: [
      { name: "Ms. Sania Ali", qualification: "B.A, Tajweed Course", joined: "", photo: IMG("sania-ali.jpg") },
      { name: "Ms. Faiza Butt", qualification: "MA Islamiyat, B.Ed, Hafiza Quran", joined: "", photo: IMG("faiza-butt.jpg") },
      { name: "Ms. Jaweria", qualification: "B.Ed Hons, Tajweed Course", joined: "", photo: IMG("jaweria.jpg") },
    ],
  },
];

const CLASSES = [
  { label: "Class 1", photos: [IMG("class1-1.jpg"), IMG("class1-2.jpg"), IMG("class1-3.jpg"), IMG("class.jpg")] },
  { label: "Class 2", photos: [IMG("class2-1.jpg"), IMG("class2-2.jpg")] },
  { label: "Class 3", photos: [IMG("class3-1.jpg"), IMG("class3-2.jpg"), IMG("class3-3.jpg"), IMG("class2-3.jpg")] },
];

const ACTIVITIES: { label: string; photo: string }[] = [
  { label: "Morning Assembly", photo: IMG("morning-assembly.jpg") },
  { label: "Morning Assembly", photo: IMG("morning-assembly2.jpg") },
  { label: "Morning Assembly", photo: IMG("morning-assembly3.jpg") },
  { label: "Morning Assembly", photo: IMG("morning-assembly4.jpg") },
  { label: "Morning Assembly", photo: IMG("morning-assembly5.jpg") },
  { label: "Art Activity", photo: IMG("art-activity.jpg") },
  { label: "Art and Craft", photo: IMG("art-and-craft.jpg") },
  { label: "Class Art Activity", photo: IMG("class-art-activity.jpg") },
  { label: "Class Activity", photo: IMG("class-activity.jpg") },
  { label: "Children's Day", photo: IMG("children-day.jpg") },
  { label: "Children's Day", photo: IMG("children-day2.jpg") },
  { label: "Defence Day", photo: IMG("defence-day.jpg") },
  { label: "Election of House Captain", photo: IMG("election-of-house-captain.jpg") },
  { label: "Excursion Trip", photo: IMG("excursion-trip.jpg") },
  { label: "Inter-House Art & Craft", photo: IMG("inter-house-art-craft.jpg") },
  { label: "Iqbal Day", photo: IMG("iqbal-day.jpg") },
  { label: "Islam Expo", photo: IMG("islam-expo.jpg") },
  { label: "Islam Expo", photo: IMG("islam-expo2.jpg") },
  { label: "Naat & Qiraat", photo: IMG("naat-qiraat.jpg") },
  { label: "Peace Day", photo: IMG("peace-day.jpg") },
  { label: "Principal Day", photo: IMG("principal-day.jpg") },
  { label: "Role Play", photo: IMG("role-play.jpg") },
  { label: "Sports Day", photo: IMG("sports-day.jpg") },
  { label: "Sports Day", photo: IMG("sports-day2.jpg") },
  { label: "Teacher's Day", photo: IMG("teacher-day.jpg") },
  { label: "Tree Plantation", photo: IMG("tree-plantation.jpg") },
  { label: "Youm-e-Takbeer", photo: IMG("youm-e-takbeer.jpg") },
  { label: "Youm-e-Qaumi Azm-e-Taleem", photo: IMG("youme-qomi-azme-taleem.jpg") },
];

const ACHV = (name: string) => `/sections/junior-section/achievers/${name}`;

const HIGH_ACHIEVERS: Staff[] = [
  // HRCA Science Quiz
  { name: "M. Ismail Dar", role: "HRCA Science Quiz", qualification: "Cash Prize Rs. 20,000/-", joined: "", photo: ACHV("m-ismail-dar.png") },
  { name: "Muhammad Rayan", role: "HRCA Science Quiz", qualification: "Cash Prize Rs. 30,000/-", joined: "", photo: ACHV("muhammad-rayan.png") },
  { name: "Amina Qaisar", role: "HRCA Science Quiz", qualification: "Cash Prize Rs. 20,000/-", joined: "", photo: ACHV("amina-qaisar.png") },
  { name: "Usman Ahmed", role: "HRCA Science Quiz", qualification: "Cash Prize Rs. 5,000/-", joined: "", photo: ACHV("usman-ahmed.png") },
  { name: "Husnain Tahir", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("husnain-tahir.png") },
  { name: "Mir Abdul Hadi", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("mir-abdul-hadi.png") },
  { name: "Aqib Suleman", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("aqib-suleman.png") },
  { name: "M. Musa Saqib", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("m-musa-saqib.png") },
  { name: "Hafsa Saif", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("hafsa-saif.png") },
  { name: "M. Aryaan Ahsan", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("m-aryaan-ahsan.png") },
  { name: "M. Musshaf Yasir", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("m-musshaf-yasir.png") },
  { name: "Ayesha Qadeer", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("ayesha-qadeer.png") },
  { name: "Zehra Fatima", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("zahra-fatima.png") },
  { name: "Ch. Muhammad Bilal", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("ch.-muhammad-bilal.png") },
  { name: "M. Mohid Bin Amir", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("m-mohid-bin-amir.png") },
  { name: "Ain Ali", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("ain-ali.png") },
  { name: "Ali Rizwan", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("ali-rizwan.png") },
  { name: "Faryal", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("faryal.png") },
  { name: "Zirwa Fatima", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("zirwa-fatima.png") },
  { name: "Khadija Zainab", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("khadija-zainab.png") },
  { name: "Muhammad Subhan", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("muhammad-subhan.png") },
  { name: "Muhammad Wali", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("muhammad-wali.png") },
  { name: "Marium Faizan", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("marium-faizan.png") },
  { name: "Hammad Barkat", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("hammad-barkat.png") },
  { name: "Khuban Tahir", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("khuban-tahir.png") },
  { name: "M. Mikael Tahir", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("m-mikael-tahir.png") },
  { name: "Eshaal Nazir", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("eshaal-nazir.png") },
  { name: "Khadija Noor", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("khadija-noor.png") },
  { name: "Inshaal Saif", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("inshaal-saif.png") },
  { name: "M. Ahmed", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("m-ahmed.png") },
  { name: "M. Rohan Khan", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("m-rohan-khan.png") },
  { name: "Manasseh Haroon", role: "HRCA Sci & Eng Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("manasseh-haroon.png") },
  { name: "Husnain Tahir", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("husnain-tahir(1).png") },
  { name: "Amina Jan", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("amina-jan.png") },
  { name: "Marium Faizan", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("marium-faizanpng.png") },
  { name: "Muhammad Mustafa", role: "HRCA Science Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("muhammad-mustafa.png") },
  // HRCA English Quiz
  { name: "Zainab Zeeshan", role: "HRCA English Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("zainab-zeeshan.png") },
  { name: "Haniya Ashfaq", role: "HRCA English Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("haniya-ashfaq.png") },
  { name: "Arwa Amin", role: "HRCA English Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("arwa-amin.png") },
  { name: "Aminah Zeeshan", role: "HRCA English Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("aminah-zeeshanpng.png") },
  { name: "Khadija Imran", role: "HRCA English Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("khadija-imran.png") },
  { name: "Haniya Faizan", role: "HRCA English Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("haniya-faizan.png") },
  { name: "Fiza Iman", role: "HRCA English Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("fiza-iman.png") },
  { name: "Aleen Hoorain", role: "HRCA English Quiz", qualification: "Gold Medal", joined: "", photo: ACHV("aleen-hoorain.png") },
  { name: "M. Ayaan", role: "HRCA English Quiz", qualification: "Silver Medal", joined: "", photo: ACHV("m-ayaan.png") },
  { name: "Abdur Rehman", role: "HRCA English Quiz", qualification: "Silver Medal", joined: "", photo: ACHV("abdur-rehman.png") },
  { name: "Ayat Tasawur", role: "HRCA English Quiz", qualification: "Silver Medal", joined: "", photo: ACHV("ayat-tasawur.png") },
  { name: "Ibrahim Zahid", role: "HRCA English Quiz", qualification: "Silver Medal", joined: "", photo: ACHV("ibrahim-zahid.png") },
  { name: "Wali Muhammad", role: "HRCA English Quiz", qualification: "Silver Medal", joined: "", photo: ACHV("wali-muhammad.png") },
  { name: "Abeeha Sadam", role: "HRCA English Quiz", qualification: "Silver Medal", joined: "", photo: ACHV("abeeha-sadam.png") },
  { name: "Syed Raiq Abbas", role: "HRCA English Quiz", qualification: "Silver Medal", joined: "", photo: ACHV("syed-raiq-abbas.png") },
  { name: "Jannat Zaman", role: "HRCA English Quiz", qualification: "Silver Medal", joined: "", photo: ACHV("jannat-zaman.png") },
  { name: "Nabeeha Tayyab", role: "HRCA English Quiz", qualification: "Silver Medal", joined: "", photo: ACHV("nabeeha-tayyab.png") },
  { name: "Zainab Ehsan", role: "HRCA English Quiz", qualification: "Silver Medal", joined: "", photo: ACHV("zainab-ehsan.png") },
  { name: "Unaiza Haroon", role: "HRCA English Quiz", qualification: "Silver Medal", joined: "", photo: ACHV("unaiza-haroon.png") },
  { name: "Dua Mudassar", role: "HRCA English Quiz", qualification: "Silver Medal", joined: "", photo: ACHV("dua-mudassar.png") },
  { name: "Ishaq Ahmed", role: "HRCA English Quiz", qualification: "Silver Medal", joined: "", photo: ACHV("ishaq-ahmed.png") },
  { name: "M. Musshaf Yasir", role: "HRCA English Quiz", qualification: "Silver Medal", joined: "", photo: ACHV("m-musshaf-yasir.png") },
  // ICATS Mathematics Contest
  { name: "Muhammad Ruhan", role: "ICATS Mathematics Contest", qualification: "", joined: "", photo: ACHV("muhammad-ruhan.png") },
  { name: "Marium Faizan", role: "ICATS Mathematics Contest", qualification: "", joined: "", photo: ACHV("marium-faizan.png") },
  { name: "Eshaal Fatima", role: "ICATS Mathematics Contest", qualification: "", joined: "", photo: ACHV("eshaal-fatima.png") },
  { name: "Musa Faisal", role: "ICATS Mathematics Contest", qualification: "", joined: "", photo: ACHV("musa-faisal.png") },
  { name: "Samavia Noor", role: "ICATS Mathematics Contest", qualification: "", joined: "", photo: ACHV("samavia-noor.png") },
  { name: "Zainab Ehsan", role: "ICATS Mathematics Contest", qualification: "", joined: "", photo: ACHV("zainab-ehsan(1).png") },
  { name: "Arham Sabir", role: "ICATS Mathematics Contest", qualification: "", joined: "", photo: ACHV("arham-sabir.png") },
  { name: "Fatima Abdullah", role: "ICATS Mathematics Contest", qualification: "", joined: "", photo: ACHV("fatima-abdullah.png") },
  { name: "Zoha Ali", role: "ICATS Mathematics Contest", qualification: "", joined: "", photo: ACHV("zoha-ali.png") },
  { name: "Wali ur Rehman", role: "ICATS Mathematics Contest", qualification: "", joined: "", photo: ACHV("wali-ur-rehman.png") },
  // Rainbow Art & Creative Writing
  { name: "Sharmeen Sohail", role: "Rainbow Art & Creative Writing", qualification: "", joined: "", photo: ACHV("sharmeen-sohail.png") },
  { name: "Umama Noor", role: "Rainbow Art & Creative Writing", qualification: "", joined: "", photo: ACHV("umama-noor.png") },
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

export default function JuniorSection() {
  const others = (Object.keys(SECTIONS) as SectionKey[]).filter((k) => k !== "junior");
  const data = SECTIONS["junior"];

  return (
    <>
      <PageHero
        eyebrow={data.sub}
        title={data.name}
        intro={data.headMsg}
        image={IMG("iram-saeed-butt.jpg")}
        crumb={[{ label: "Quick Links", href: "/quick-links" }, { label: data.name }]}
      />

      <section className="sec">
        <Editorial
          rail={
            <>
              <FactCard
                title="Section facts"
                rows={[
                  ["Section Head", HEAD.name],
                  ["Classes", "I – III"],
                  ["Curriculum", "APSACS"],
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
                  <Image src={HEAD.photo} alt={HEAD.name} fill sizes="110px" style={{ objectFit: "cover" }} />
                </div>
                <div className="qb-body">
                  <span className="eyebrow">Message from the Section Head</span>
                  <blockquote style={{ fontSize: "1.1rem", borderLeft: "none", paddingLeft: 0, marginTop: "1rem", fontStyle: "normal" }}>
                    <p>Welcome to the Junior Section, where every child&rsquo;s learning journey begins with curiosity, confidence, and care. We believe that the early years are the foundation for lifelong learning, and our goal is to provide a safe, nurturing, and stimulating environment in which every child can thrive.</p>
                    <p style={{ marginTop: "1rem" }}>Our dedicated teachers inspire young minds through engaging, child-centered learning experiences that promote academic excellence, creativity, critical thinking, and strong moral values. We encourage our students to become confident communicators, responsible individuals, and compassionate members of society.</p>
                    <p style={{ marginTop: "1rem" }}>We value the strong partnership between school and home, recognizing that parents play an essential role in every child&rsquo;s success. Together, we strive to create meaningful learning experiences that help our children grow intellectually, socially, emotionally, and spiritually.</p>
                    <p style={{ marginTop: "1rem" }}>As you explore our Junior Section, you will discover a vibrant community where every child is encouraged to dream, explore, and achieve their fullest potential. We remain committed to nurturing confident, lifelong learners who are prepared to meet future challenges with resilience, integrity, and enthusiasm.</p>
                  </blockquote>
                  <div className="qb-foot" style={{ marginTop: "1.5rem" }}>
                    <div className="qb-who">
                      <div className="nm">{HEAD.name}</div>
                      <div className="rl">{HEAD.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Deputy Section Heads */}
          <section>
            <SectionHead eyebrow="Leadership" title="Deputy Section Heads" />
            <div className="staffgrid">
              {DEPUTY_HEADS.map((s) => <StaffCard key={s.name} s={s} />)}
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

          {/* Classes */}
          <section>
            <SectionHead eyebrow="Campus Life" title="Classes" />
            {CLASSES.map((c) => (
              <div key={c.label} style={{ marginBottom: "2rem" }}>
                <h3 style={{ marginBottom: "1rem" }}>{c.label}</h3>
                <div className="classgrid">
                  {c.photos.map((photo, i) => (
                    <div className="figure" key={photo}>
                      <div className="fimg" style={{ backgroundColor: "#f0f0f0" }}>
                        <Image src={photo} alt={`${c.label} ${i + 1}`} fill sizes="(max-width: 820px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                      </div>
                      <figcaption><GraduationCap size={15} strokeWidth={1.8} /> {c.label}</figcaption>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Assessments */}
          <section>
            <SectionHead eyebrow="Academics" title="Assessments" />
            <p style={{ marginBottom: "1rem", color: "var(--ink-soft)" }}>
              Continuous Assessments (Term Wise) — No term exams in the Junior Section for Class (I–III)
            </p>
            <div className="tbl-wrap">
              <table className="tbl">
                <thead>
                  <tr><th>Subject</th><th>Assessment Type</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>English</td>
                    <td>
                      2 × Written Assessments<br />
                      1 × Reading Assessments<br />
                      1 × Speaking Assessments<br />
                      1 × Listening Assessments
                    </td>
                  </tr>
                  <tr>
                    <td>Urdu</td>
                    <td>
                      2 × Written Assessments<br />
                      1 × Reading Assessments<br />
                      1 × Speaking Assessments<br />
                      1 × Listening Assessments
                    </td>
                  </tr>
                  <tr>
                    <td>Maths</td>
                    <td>
                      3 × Written Assessments<br />
                      2 × Mental Maths
                    </td>
                  </tr>
                  <tr><td>General Knowledge</td><td>2 × Oral Assessments</td></tr>
                  <tr><td>Islamiyat</td><td>2 × Oral Assessments</td></tr>
                  <tr><td>Computer</td><td>3 × Practical Assessments</td></tr>
                  <tr><td>Tajweed</td><td>2 × Hifz / Nazra Assessments</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Activities */}
          <section>
            <SectionHead eyebrow="Curriculum" title="Activities" />
            <div className="classgrid">
              {ACTIVITIES.map((a) => (
                <div className="figure" key={a.label + a.photo}>
                  <div className="fimg" style={{ backgroundColor: "#f0f0f0" }}>
                    <Image src={a.photo} alt={a.label} fill sizes="(max-width: 820px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                  </div>
                  <figcaption style={{ fontSize: "0.9rem", lineHeight: "1.2" }}>{a.label}</figcaption>
                </div>
              ))}
            </div>
          </section>

          {/* High Achievers */}
          <section>
            <SectionHead eyebrow="Recognition" title="High Achievers Junior Section" />
            <div className="staffgrid">
              {HIGH_ACHIEVERS.map((s, i) => <StaffCard key={s.name + s.photo + i} s={s} />)}
            </div>
          </section>

          {/* Admissions link */}
          <section>
            <Link className="link-arrow" href="/admissions" style={{ display: "flex" }}>Apply for admission <ArrowRight size={16} /></Link>
          </section>
        </Editorial>
      </section>
    </>
  );
}

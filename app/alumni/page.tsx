import Link from "next/link";
import { Trophy } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Alumni" };

const DISTINGUISHED_ALUMNI = [
  { sr: 1, name: "WARDA HUSSAIN", father: "Dr. EJAZ HUSSAIN", session: "1999", role: "ASSISTANT PROF. NSMC GUJRAT" },
  { sr: 2, name: "TAYYAB TARIQ", father: "TARIQ IMAM", session: "2000", role: "MAJ" },
  { sr: 3, name: "SOHAIB UL HASSAN", father: "Dr. EJAZ HUSSAIN", session: "2000", role: "Doctor" },
  { sr: 4, name: "FIDA HUSSAIN", father: "MUSHTAQ HUSSAIN", session: "2000", role: "Lt Col" },
  { sr: 5, name: "FATIMA TUZ ZAHRA", father: "MAJ® TARIQ JAVED AKHTER", session: "2000", role: "Dr." },
  { sr: 6, name: "BILAL ZAHEER", father: "BRIG ZAHEER (RETD)", session: "2000", role: "LT COL" },
  { sr: 7, name: "FAHAD USMAN", father: "Dr. M. USMAN", session: "2000", role: "Dr." },
  { sr: 8, name: "MUGHEERA HUSSAIN", father: "Dr. EJAZ HUSSAIN", session: "2002", role: "Dr." },
  { sr: 9, name: "SUNDAS WAJID", father: "Dr. MIAN WAJID", session: "2002", role: "Dr." },
  { sr: 10, name: "MARYAM MOBEEN", father: "Dr. MOBEEN AHMED MALIK", session: "2003", role: "Dr." },
  { sr: 11, name: "MARIA WAJID", father: "Dr. MIAN WAJID", session: "2003", role: "Dr." },
  { sr: 12, name: "SHOAIB RAUF", father: "ABDUL RAUF", session: "2003", role: "ASSISSTANT PROF ELECTRIC ENG. UOG" },
  { sr: 13, name: "BILAL RIASAT", father: "RIASAT KHAN", session: "2003", role: "EXECUTIVE MANAGER. UAE" },
  { sr: 14, name: "SHUJAH UR REHMAN", father: "MUSHTAQ HUSSAIN", session: "2003", role: "MAJ" },
  { sr: 15, name: "TAHA TARIQ", father: "TARIQ IMAM", session: "2003", role: "MAJ" },
  { sr: 16, name: "SHUMAILA ASGHAR", father: "M. ASGHAR", session: "2004", role: "MAJ Dr." },
  { sr: 17, name: "KHOLA MOBEEN", father: "Dr. MOBEEN AHMED MALIK", session: "2005", role: "Dr." },
  { sr: 18, name: "MALIK QASIM AYUB", father: "LT. COL® AYUB AWAN", session: "2005", role: "CAPT" },
  { sr: 19, name: "DR. BILAL BIN TARIQ", father: "MUHAMMAD TARIQ", session: "2005", role: "Dr." },
  { sr: 20, name: "SEHRISH GUL", father: "Dr. M. ASIF", session: "2005", role: "Dr." },
  { sr: 21, name: "FAHAD MOBEEN", father: "Dr. MOBEEN AHMED MALIK", session: "2005", role: "Dr." },
  { sr: 22, name: "SANA AMJAD", father: "Dr. AMJAD IQBAL", session: "2006", role: "Dr." },
  { sr: 23, name: "FAWAD SHABBIR AWAN", father: "SHABBIR AWAN", session: "2006", role: "MAJ" },
  { sr: 24, name: "ABDULLAH ZAMAN", father: "M. ZAMAN", session: "2006", role: "I.T. ENG" },
  { sr: 25, name: "KHUBAIB AZHAR", father: "MAJ® RAJA AZHAR", session: "2006", role: "MANAGER AT HBL" },
  { sr: 26, name: "KALEEM ABID", father: "RAO ISHAQ", session: "2006", role: "CHARTERED ACCOUNTANT" },
  { sr: 27, name: "M. IBRAHIM GONDAL", father: "Brig® ZAFAR GONDAL", session: "2007", role: "MAJ Dr." },
  { sr: 28, name: "UMER EJAZ", father: "M EJAZ", session: "2007", role: "Dr." },
  { sr: 29, name: "MAJID HUSSAIN", father: "Dr. EJAZ HUSSAIN", session: "2008", role: "REGISTRAR SURGERY PIMS" },
  { sr: 30, name: "FATIMA RIAZ", father: "Brig® RIAZ", session: "2008", role: "Dr." },
  { sr: 31, name: "RAFIA HUSSAIN", father: "Dr. EJAZ HUSSAIN", session: "2008", role: "ASST. PROF LAHORE MEDICAL COLLEGE LAHORE" },
  { sr: 32, name: "IQRA EJAZ", father: "EJAZ AHMED", session: "2008", role: "Dr." },
  { sr: 33, name: "MARIA ASIF", father: "Dr. M. ASIF", session: "2008", role: "Dr." },
  { sr: 34, name: "M.UMER JAVAED", father: "M. ANWAR JAVAED", session: "2008", role: "CIVIL GIS & INFORMATION SECURITY EXPERT, GUJRAT" },
  { sr: 35, name: "NIMRA AZIZ", father: "ABDUL AZIZ", session: "2008", role: "Dr." },
  { sr: 36, name: "HUSNAIN AFZAL", father: "M. AFZAL", session: "2008", role: "Dr." },
  { sr: 37, name: "AMMARA IFTIKHAR", father: "SYED IFTIKHAR HUSSAIN", session: "2009", role: "ASST. MANG MEEZAN BANK KHARIAN" },
  { sr: 38, name: "AMNA RIAZ", father: "Brig® RIAZ", session: "2009", role: "Dr." },
  { sr: 39, name: "MUQADDAS ZAHRA", father: "SUB® BABAR HUSSAIN", session: "2009", role: "SECTION HEAD DPS CHAKWAL" },
  { sr: 40, name: "ADEEL ASIF", father: "M. ASIF", session: "2009", role: "MAJ" },
  { sr: 41, name: "KINZA MALIK", father: "MALIK SHAHZAD", session: "2009", role: "Dr." },
  { sr: 42, name: "ALI MALIK", father: "MALIK SHAHZAD", session: "2009", role: "Dr." },
  { sr: 43, name: "AZKA ZAINAB", father: "COL® TARIQ", session: "2010", role: "Dr." },
  { sr: 44, name: "DAWAR ALI AKBAR", father: "CH. M. ALI AKBAR", session: "2010", role: "CHARTERED ACCOUNTANT" },
  { sr: 45, name: "KHAIRIA KHATAF MIR", father: "MIR MINO KHATAF", session: "2010", role: "Dr." },
  { sr: 46, name: "YASMIN ASHRAF", father: "SUB® MUHAMMAD ASHRAF", session: "2011", role: "Dr." },
  { sr: 47, name: "HAMZA RIAZ", father: "RIAZ AKHTER", session: "2011", role: "Dr." },
  { sr: 48, name: "FAZEELA EJAZ GONDAL", father: "SUB® M. EJAZ", session: "2011", role: "Dr." },
  { sr: 49, name: "MAQSOOD ATTA", father: "SM® MUHAMMAD ATTA", session: "2011", role: "Dr." },
  { sr: 50, name: "RABIA GHAFOOR", father: "M. GHAFOOR", session: "2011", role: "Dr." },
  { sr: 51, name: "MEHROSH ZAHEER", father: "MUHAMMAD ZAHEER", session: "2012", role: "Dr." },
  { sr: 52, name: "M. KAMRAN KHAN", father: "SM® M. IQBAL KHAN", session: "2012", role: "LECTURER GAK COLLEGE" },
  { sr: 53, name: "ASAD ULLAH MEHDI", father: "MEHDI KHAN", session: "2012", role: "CIVIL LESCO, Lahore" },
  { sr: 54, name: "SYED ABDUL RAFAY", father: "SYED ALI MUHAMMAD", session: "2012", role: "PRODUCT LEADER R & D COMPANY DAWLANCE" },
  { sr: 55, name: "HAMZA MUSHTAQ", father: "M. MUSHTAQ", session: "2012", role: "MAJ" },
  { sr: 56, name: "MIR USAMA KHATAF", father: "MIR MINO KHATAF", session: "2012", role: "MANAGEMENT ENGR. ITALY" },
  { sr: 57, name: "AROOSA ZAFAR", father: "Dr. ZAFAR IQBAL", session: "2012", role: "Dr. in PHARMACY" },
  { sr: 58, name: "ANEESA ZAFAR", father: "Dr. ZAFAR IQBAL", session: "2012", role: "Dr." },
  { sr: 59, name: "MAIMOONA ATTA", father: "Dr. M. ATTA", session: "2013", role: "Dr." },
  { sr: 60, name: "AKASHA PERVAIZ", father: "PERVAIZ AKHTER", session: "2013", role: "Dr." },
  { sr: 61, name: "UMAIR NAWAZ", father: "COL® M. NAWAZ", session: "2013", role: "CAPT" },
  { sr: 62, name: "ARSALAN GHAZANFAR", father: "GHAZANFAR ALI", session: "2013", role: "Dr." },
  { sr: 63, name: "IMRAN HAIDER", father: "SUB® BABAR HUSSAIN", session: "2013", role: "CAPT" },
  { sr: 64, name: "ZARYAB AHMED", father: "ZAHEER AHMED", session: "2014", role: "Civil Thar Coal Project, Chinese Co, Karachi" },
  { sr: 65, name: "MARYAM NASEEM", father: "Dr. M. NASEEM", session: "2014", role: "SOFTWARE ENG." },
  { sr: 66, name: "ADIL SHEHZAD", father: "MUZAFFAR AHMED", session: "2014", role: "LECTURER GAK COLLEGE" },
  { sr: 67, name: "UMMARA MEHDI", father: "MEHDI KHAN", session: "2014", role: "Dr." },
  { sr: 68, name: "HAMMAD LATIF", father: "M. LATIF", session: "2015", role: "SOFTWARE ENG. AT SYSTEM LIMITED" },
  { sr: 69, name: "MUHAMMAD SAAD AKHTER", father: "NASEEM AKHTER", session: "2015", role: "DATA ENG. AT TERADATA" },
  { sr: 70, name: "AMINA IQBAL", father: "Dr. IQBAL ALVI", session: "2015", role: "Dr." },
  { sr: 71, name: "SHAHID KHAN", father: "LATIF KHAN", session: "2015", role: "CAPT" },
  { sr: 72, name: "ASAD MOBEEN", father: "Dr. MOBEEN AHMED MALIK", session: "2015", role: "Dr." },
  { sr: 73, name: "IRFAN SALIK", father: "Dr. SALIK ZAHEER AHMED", session: "2015", role: "Dr." },
  { sr: 74, name: "ADEEL ABBAS", father: "COL QALIB E ABBAS", session: "2015", role: "CAPT" },
  { sr: 75, name: "SAQLAIN GHAZANFAR", father: "GHAZANFAR ALI", session: "2015", role: "Dr." },
  { sr: 76, name: "AMRAIZ ALI NASIR", father: "NASIR JAMIL", session: "2016", role: "LT" },
  { sr: 77, name: "TAHA AKRAM", father: "COL® M. AKRAM", session: "2017", role: "LT" },
  { sr: 78, name: "TALHA NADEEM", father: "BRIG® NADEEM", session: "2017", role: "LT" },
  { sr: 79, name: "NOUMAN TARIQ", father: "HAV® M. TARIQ", session: "2017", role: "LT" },
  { sr: 80, name: "MUHAMMAD UMAR JAVED", father: "ANWAR JAVED", session: "2009", role: "GIS EXPERT" },
];

const EX: [string, string, string][] = [
  ["AM", "Dr. Aisha Malik", "Cardiologist, AFIC Rawalpindi"],
  ["UK", "Capt. Usman Khalid", "Pakistan Army"],
  ["SR", "Sana Raza", "Software Engineer, Systems Ltd"],
  ["BH", "Bilal Hussain", "Chartered Accountant, ACCA"],
  ["MN", "Maryam Nawaz", "PhD Scholar, NUST"],
  ["FK", "Farhan Khan", "Civil Servant, CSS 2019"],
];

const TOP: [string, string, string, string][] = [
  ["Ayesha Hameed", "XII (Pre-Med)", "1st", "2025"],
  ["Muhammad Umar", "XI (Pre-Eng)", "2nd", "2025"],
  ["Fatima Zahra", "X (Science)", "1st", "2024"],
  ["Zain Abbas", "XII (ICS)", "3rd", "2024"],
  ["Hira Saleem", "IX (Science)", "2nd", "2023"],
];
const pill = (p: string) => (p === "1st" ? "o" : p === "2nd" ? "g" : "b");

export default function AlumniPage() {
  return (
    <>
      <PageHero
        eyebrow="Once a GAKian"
        title="Alumni"
        intro="Celebrating Ex-GAK students making their mark, and the top achievers of recent years."
        image={BANNER.alumni}
        crumb={[{ label: "Alumni (AMULNI)" }]}
      />

      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="APSACS Alumni" title="Shuhada & Distinguished Professionals" mw='100%'/>
          <div className="tbl-wrap" style={{ maxHeight: "600px", overflowY: "auto" }}>
            <table className="tbl">
              <thead style={{ position: "sticky", top: 0, background: "var(--bg)", zIndex: 1 }}>
                <tr>
                  <th>Sr. #</th>
                  <th>Name</th>
                  <th>Father's Name</th>
                  <th>Session</th>
                  <th>Distinguished Alumni (Armed Forces / Civil)</th>
                </tr>
              </thead>
              <tbody>
                {DISTINGUISHED_ALUMNI.map((alumni) => (
                  <tr key={alumni.sr}>
                    <td>{alumni.sr}</td>
                    <td>{alumni.name}</td>
                    <td>{alumni.father}</td>
                    <td>{alumni.session}</td>
                    <td>{alumni.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Notable Ex-GAK" title="Where our graduates are today" />
          <div className="grid g3">
            {EX.map(([ph, nm, ps]) => (
              <div className="card person" key={nm} style={{ textAlign: "left" }}>
                <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <div className="ph" style={{ width: 56, height: 56, margin: 0, fontSize: "1.1rem" }}>{ph}</div>
                  <div><div className="nm" style={{ fontSize: "1.02rem" }}>{nm}</div><div className="role" style={{ margin: 0 }}>{ps}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <SectionHead eyebrow="Hall of fame" title="Top position holders" intro="Overall top three per class across the last two to three sessions." />
          <div className="tbl-wrap"><table className="tbl">
            <thead><tr><th>Student</th><th>Class</th><th>Position</th><th>Session</th></tr></thead>
            <tbody>
              {TOP.map(([s, c, p, y]) => (
                <tr key={s}><td>{s}</td><td>{c}</td><td><span className={`pill ${pill(p)}`}>{p}</span></td><td>{y}</td></tr>
              ))}
            </tbody>
          </table></div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap"><div className="ctaband">
          <span className="eyebrow" style={{ color: "var(--gold-300)" }}>AMULNI network</span>
          <h2 className="h-lg" style={{ marginBottom: 12 }}>Join the GAK alumni network</h2>
          <p>Reconnect with old classmates, mentor current students and stay part of the GAK family.</p>
          <div className="cta-row">
            <Link className="btn-primary" href="/feedback">Register as alumnus <Trophy size={16} /></Link>
            <Link className="btn-ghost" href="/contact">Contact the office</Link>
          </div>
        </div></div>
      </section>
    </>
  );
}

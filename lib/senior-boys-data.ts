// Shared content for the Senior Boys Section (main page + its sub-pages).

import type { Staff } from "@/lib/staff";

export const IMG = (name: string) => `/sections/senior-boys/${name}`;

export type { Staff };

export const SECTION_HEAD: Staff = {
  name: "Mr. Atiq ur Rehman",
  role: "Acting Section Head Senior Boys",
  qualification: "MA (Islamiat & Political Science), B.Ed",
  joined: "05 Jan 1998",
  photo: IMG("atiq-ur-rehman.jpg"),
};

export const DEPUTY_HEAD: Staff = {
  name: "Mrs. Nabeela Asif",
  role: "Deputy Section Head",
  qualification: "MA Urdu Literature, M.A. Ed",
  joined: "18 Aug 1997",
  photo: IMG("nabeela-asif.jpg"),
};

export const DEPARTMENTS: { name: string; teachers: Staff[] }[] = [
  {
    name: "English Department",
    teachers: [
      { name: "Mr. Shakeel Ahmed", role: "Teacher", qualification: "MA English, B.Com", joined: "01 Sep 2006", photo: IMG("shakeel-ahmed.jpg") },
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
      { name: "Mr. Abdul Jabbar", role: "Teacher", qualification: "MSC Mathematics", joined: "27 Aug 2024", photo: IMG("abdul-jabbar.jpg"), photoPosition: "top" },
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
];

export const FACILITIES_CAMPUS: string[] = [
  "Fourteen Modern Classrooms: Expansive learning spaces fitted with ergonomic furnishings, optimal ventilation, and contemporary instructional technologies to foster an immersive educational experience.",
  "Dedicated Information & Communication Technology (ICT) Lab: A fully equipped computer laboratory designed to advance digital proficiency, technical fluency, and modern research capabilities.",
  "Advanced Science Laboratories: Cutting-edge facilities tailored for sophisticated practical experimentation, scientific inquiry, and experiential learning.",
  "Extensive Athletic Grounds: A spacious sports complex dedicated to physical education, athletic training, and recreational initiatives that promote leadership, physical fitness, and camaraderie.",
  "Chilled Hydration Stations: Purified cold-water dispensers strategically positioned throughout the facility to ensure continuous access to clean drinking water.",
  "Secure & Disciplined Environment: A well-monitored campus infrastructure enforcing strict safety protocols to guarantee a secure learning environment.",
  "Sanitary & Well-Maintained Infrastructure: A pristine campus environment prioritizing high hygiene standards across all physical facilities, common areas, and specialized spaces.",
];

export const FACILITIES_ACADEMIC: string[] = [
  "Distinguished Faculty: A highly qualified and seasoned instructional staff dedicated to driving academic rigor through modern pedagogical approaches and personalized mentorship.",
  "Interactive Academic Culture: A collaborative learning atmosphere structured to enhance analytical reasoning, creative problem-solving, and active intellectual engagement.",
  "Rigorous Evaluation Framework: A systematic assessment model designed to track academic trajectory, measure competencies, and deliver actionable performance insight.",
  "Enriched Co-Curricular Program: Comprehensive opportunities in public speaking, academic competitions, STEM exhibitions, and cultural leadership activities designed to build confidence and resilience.",
  "Ethical & Character Development: Values-based education integrated into the core curriculum to instill integrity, civic responsibility, and moral leadership.",
  "Academic & Career Counseling: Specialized guidance services assisting students in evaluating career trajectories, academic pathways, and higher education prospects.",
];

export type SeniorBoysSub = {
  slug: string;
  label: string;
  eyebrow: string;
};

export const SENIOR_BOYS_SUBPAGES: SeniorBoysSub[] = [
  { slug: "deputy-section-head", label: "Deputy Section Head", eyebrow: "Leadership" },
  { slug: "faculty-by-department", label: "Faculty by Department", eyebrow: "Our Teachers" },
  { slug: "top-students", label: "Top Students", eyebrow: "Recognition" },
  { slug: "apsacs-academic-schedule-ix-x", label: "APSACS Academic Schedule Class IX–X", eyebrow: "Academics" },
  { slug: "apsacs-academic-calendar-xi-xii", label: "APSACS Academic Calendar Class XI–XII", eyebrow: "Academics" },
  { slug: "cca-activities", label: "CCA Activities", eyebrow: "Co-Curricular" },
  { slug: "cca-plan", label: "CCA Plan", eyebrow: "Co-Curricular" },
  { slug: "facilities", label: "Senior Boys Wing Facilities", eyebrow: "Campus" },
];

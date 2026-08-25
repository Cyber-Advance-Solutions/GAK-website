// Shared content for the Senior Girls Section (main page + its sub-pages).

import type { Staff } from "@/lib/staff";

export const IMG = (name: string) => `/sections/senior-girls/${name}`;

export type { Staff };

export const SECTION_HEAD: Staff = {
  name: "Mrs. Sobia Altaf",
  role: "Section Head Senior Girls",
  qualification: "M.Phil English Linguistics, B.Ed",
  joined: "01 April 2024",
  photo: IMG("sobia-altaf.jpg"),
};

export const DEPUTY_HEAD: Staff = {
  name: "Ms. Sana Amir",
  role: "Deputy Section Head",
  qualification: "MSC Zoology",
  joined: "15 April 2016",
  photo: IMG("sana-amir.jpg"),
};

export const SUBJECT_COORDINATORS: Staff[] = [
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
    photoPosition: "top",
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

export const DEPARTMENTS: { name: string; teachers: Staff[] }[] = [
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
  {
    name: "Fine Arts Department",
    teachers: [
      { name: "Ms. Ramsha Siddquie", role: "Teacher", qualification: "BS Fine Arts", joined: "01 Jul 2025", photo: IMG("ramsha-siddquie.jpg") },
    ],
  },
];

export const FACILITIES_CAMPUS: string[] = [
  "14 Spacious Classrooms equipped with comfortable furniture, proper ventilation, and modern teaching aids to create an engaging learning atmosphere.",
  "1 x Well-Equipped Computer Lab that promotes ICT integration in education, enabling students to develop essential digital literacy and technology skills.",
  "State-of-the-Art Science Laboratories designed for advanced experimentation and inquiry-based learning.",
  "Large Playground offering ample space for sports, physical activities, and recreational programs that encourage teamwork and healthy lifestyles.",
  "Cold Water Facility with water coolers installed across the campus to ensure students have access to clean and chilled drinking water throughout the day.",
  "Clean and Hygienic Environment with well-maintained classrooms, washrooms, and campus facilities.",
  "Safe and Secure Campus with a disciplined environment that ensures the well-being and safety of every student.",
];

export const FACILITIES_ACADEMIC: string[] = [
  "Highly Competent Faculty Members who are experienced, qualified, and committed to nurturing students through innovative teaching methods and individualized guidance.",
  "Interactive Learning Environment that encourages critical thinking, creativity, collaboration, and active student participation.",
  "Well-Organized Assessment System to monitor academic progress and provide timely feedback for continuous improvement.",
  "Co-Curricular Activities including debates, quizzes, science exhibitions, literary competitions, and cultural events to foster confidence and leadership skills.",
  "Character Building and Moral Education integrated into daily school life to develop responsible, respectful, and ethical individuals.",
  "Career and Academic Guidance to help students identify their strengths and prepare for future educational opportunities.",
];

export type SeniorGirlsSub = {
  slug: string;
  label: string;
  eyebrow: string;
};

export const SENIOR_GIRLS_SUBPAGES: SeniorGirlsSub[] = [
  { slug: "deputy-section-heads", label: "Deputy Section Heads", eyebrow: "Leadership" },
  { slug: "subject-coordinators", label: "Subject Coordinators", eyebrow: "Academic Leadership" },
  { slug: "faculty-by-department", label: "Faculty by Department", eyebrow: "Our Teachers" },
  { slug: "apsacs-academic-schedule-ix-x", label: "APSACS Academic Schedule Class IX–X", eyebrow: "Academics" },
  { slug: "apsacs-academic-calendar-xi-xii", label: "APSACS Academic Calendar Class XI–XII", eyebrow: "Academics" },
  { slug: "cca-activities", label: "CCA Activities", eyebrow: "Co-Curricular" },
  { slug: "cca-plan", label: "CCA Plan", eyebrow: "Co-Curricular" },
  { slug: "facilities", label: "Senior Girls Wing Facilities", eyebrow: "Campus" },
];

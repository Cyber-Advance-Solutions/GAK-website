// Shared content for the Middle Girls Section (main page + its sub-pages).

import type { Staff } from "@/lib/staff";

export const IMG = (name: string) => `/sections/middle-girls/${name}`;

export type { Staff };

export const HEAD: Staff = {
  name: "Mrs. Qudsia Bukhari",
  role: "Section Head",
  qualification: "M.A English Literature, B.Ed.",
  joined: "02 Nov 1999",
  photo: IMG("qudsia-bukhari.jpg"),
};

export const DEPUTY_HEADS: Staff[] = [
  { name: "Aamira Nasim", role: "Deputy Section Head", qualification: "M.B.A (Finance), M.A in Linguistics, B.Ed.", joined: "01 Aug 2016", photo: IMG("aamira-nasim.jpg") },
];

export const CCA_COORDINATOR: Staff[] = [
  { name: "Fariha Kanwal", role: "CCA Coordinator", qualification: "Doctor of Pharm.D.", joined: "16 Aug 2013", photo: IMG("fariha-kanwal.jpg") },
];

export const COORDINATORS: Staff[] = [
  { name: "Anum Adnan", role: "Subject Coordinator (English)", qualification: "M.A English", joined: "19 Jan 2018", photo: IMG("anum-adnan.jpg") },
  { name: "Reema Rani", role: "Subject Coordinator (Urdu)", qualification: "M.A Urdu, B.Ed., M.Ed", joined: "01 Sep 2016", photo: IMG("reema-rani.jpg") },
  { name: "Maryam Sehar", role: "Subject Coordinator (Mathematics)", qualification: "BS Mathematics", joined: "08 Nov 2018", photo: IMG("maryam-sehar.jpg") },
  { name: "Ammara Ali", role: "Subject Coordinator (Science)", qualification: "M.Sc Botany", joined: "15 March 2018", photo: IMG("ammara-ali.jpg") },
  { name: "Sadia Parveen", role: "Subject Coordinator (S.st/Hist/Geo)", qualification: "M.Sc (Botany)", joined: "28 Aug 2018", photo: IMG("sadia-parveen.jpg") },
  { name: "Najma Sohail", role: "Subject Coordinator (Islamiyat)", qualification: "M.A History", joined: "01 Oct 1998", photo: IMG("najma-sohail.jpg") },
  { name: "Sumaira Shabbir", role: "AIS & Subject Coordinator (Computer)", qualification: "MIT", joined: "27 Sep 2024", photo: IMG("sumaira-shabbir.jpg") },
];

export const DEPARTMENTS: { name: string; teachers: Staff[] }[] = [
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

export const CLASSES = [
  { label: "Class IV", photo: IMG("classIV.jpg") },
  { label: "Class V", photo: IMG("classV.jpg") },
  { label: "Class VI", photo: IMG("classVI.jpg") },
  { label: "Class VII", photo: IMG("classVII.jpg") },
  { label: "Class VIII", photo: IMG("classVIII.jpg") },
];

export const POSITION_HOLDERS: { class: string; students: Staff[] }[] = [
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

export const ACTIVITIES: [string, string][] = [
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

export const UPCOMING_EVENTS: [string, string][] = [
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

export const FACILITIES: string[] = [
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

export type MiddleGirlsSub = {
  slug: string;
  label: string;
  eyebrow: string;
};

export const MIDDLE_GIRLS_SUBPAGES: MiddleGirlsSub[] = [
  { slug: "deputy-section-head-cca", label: "Deputy Section Head & CCA Coordinator", eyebrow: "Leadership" },
  { slug: "subject-coordinators", label: "Subject Coordinators", eyebrow: "Leadership" },
  { slug: "faculty-by-department", label: "Faculty by Department", eyebrow: "Our Teachers" },
  { slug: "classes", label: "Classes", eyebrow: "Campus life" },
  { slug: "exam-schedule", label: "Exam Schedule", eyebrow: "Assessment" },
  { slug: "activities", label: "Activities", eyebrow: "Calendar" },
  { slug: "achievements", label: "Achievements", eyebrow: "Awards" },
  { slug: "upcoming-events", label: "Upcoming Events", eyebrow: "Look Ahead" },
  { slug: "facilities", label: "Facilities", eyebrow: "Campus" },
  { slug: "faqs", label: "Frequently Asked Questions", eyebrow: "Information" },
];

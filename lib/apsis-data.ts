// Shared content for the APSIS Section (main page + its sub-pages).

import type { Staff } from "@/lib/staff";

export const IMG = (name: string) => `/sections/apsis/${name}`;

export type { Staff };

export const VICE_PRINCIPAL: Staff = {
  name: "Ms. Birjees Tahira",
  role: "Vice Principal APSIS GAK",
  qualification: "M.Sc. Physics, M.Ed, M.Phil Ed, M. A. Educational Leadership and Management",
  joined: "",
  photo: IMG("birjees-tahira.png"),
};

export const SECTION_HEAD: Staff = {
  name: "Ms. Sana Nayeem",
  role: "Section Head APSIS GAK",
  qualification: "M.A. Linguistics",
  joined: "",
  photo: IMG("sana-nayeem.png"),
};

export const COORDINATORS: Staff[] = [
  { name: "Ms. Erum Hassan", role: "Middle Level Coordinator", qualification: "M.A ELT, M.A. Isl", joined: "", photo: IMG("erum-hassan.jpg") },
  { name: "Ms. Bushra Shahid", role: "Junior Level Coordinator", qualification: "M.Sc. Math", joined: "", photo: IMG("bushra-shahid.jpg") },
];

export const DEPARTMENTS: { name: string; teachers: Staff[] }[] = [
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

export const CLASSES = [
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

export const ACTIVITIES: { label: string; photo: string }[] = [
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

export const ACHIEVEMENTS_HRCA_ENG_SCI: Staff[] = [
  { name: "Maaz Amir", qualification: "Gold Medalist", joined: "", photo: IMG("maaz-amir.png") },
  { name: "Chaudhry M. Khan", qualification: "Bronze Medalist", joined: "", photo: IMG("chaudhry-m-khan.png") },
  { name: "Muhammad Waleed", qualification: "Silver Medalist", joined: "", photo: IMG("muhammad-waleed.png") },
  { name: "Muhammad Sadaan", qualification: "Gold Medalist", joined: "", photo: IMG("muhammad-sadaan.png") },
];

export const ACHIEVEMENTS_ICATS_MATH: Staff[] = [
  { name: "Khrain Fatima", qualification: "Gold Medalist", joined: "", photo: IMG("khrain-fatima.png") },
  { name: "Aroush Fatima", qualification: "Bronze Medalist", joined: "", photo: IMG("aroush-fatima.png") },
  { name: "Ahmed Almas", qualification: "Gold Medalist", joined: "", photo: IMG("ahmed-almas.png") },
  { name: "Ayesha Zeeshan", qualification: "Gold Medalist", joined: "", photo: IMG("ayesha-zeeshan.png") },
];

export const ACHIEVEMENTS_HRCA_MATH_GK: Staff[] = [
  { name: "M. Ruhan", qualification: "Gold Medalist", joined: "", photo: IMG("m-ruhan.png") },
  { name: "M. Saad Ismail", qualification: "Gold Medalist", joined: "", photo: IMG("m-saad-ismail.png") },
  { name: "Abrish Ihsan", qualification: "Gold Medalist", joined: "", photo: IMG("abrish-ihsan.png") },
  { name: "M. Ibrahim", qualification: "Silver Medalist", joined: "", photo: IMG("m-ibrahim.png") },
  { name: "Aroush Fatima", qualification: "Gold Medalist", joined: "", photo: IMG("aroush-fatima.png") },
  { name: "Ch. Ayan Mubasher", qualification: "Silver Medalist", joined: "", photo: IMG("ayan-mubasher.png") },
  { name: "M. Azan Gazi", qualification: "Gold Medalist", joined: "", photo: IMG("m-azan-gazi.png") },
  { name: "Hareem Fatima", qualification: "Gold Medalist", joined: "", photo: IMG("hareem-fatima.png") },
  { name: "Rubas Afzal", qualification: "Silver Medalist", joined: "", photo: IMG("rubas-afzal.png") },
  { name: "Maria Ahsan", qualification: "Silver Medalist", joined: "", photo: IMG("maria-ahsan.png") },
  { name: "Abdul Rafay", qualification: "Gold Medalist", joined: "", photo: IMG("abdul-rafay.png") },
  { name: "Ammar Yasar", qualification: "Gold Medalist", joined: "", photo: IMG("ammar-yasar.png") },
  { name: "M. Bin Waseem", qualification: "Bronze Medalist", joined: "", photo: IMG("m-bin-waseem.png") },
  { name: "Summaiya Noor", qualification: "Silver Medalist", joined: "", photo: IMG("summaiya-noor.png") },
  { name: "Hafsa Yasir", qualification: "Gold Medalist", joined: "", photo: IMG("hafsa-yasir.png") },
  { name: "Ayan akmal", qualification: "Silver Medalist", joined: "", photo: IMG("ayan-akmal.png") },
  { name: "Raja Dewan Maqsood", qualification: "Silver Medalist", joined: "", photo: IMG("raja-dewan-maqsood.png") },
  { name: "Abdul Raay Arshad", qualification: "Silver Medalist", joined: "", photo: IMG("abdul-raay-arshad.png") },
  { name: "Zimal Basit", qualification: "Gold Medalist", joined: "", photo: IMG("zimal-basit.png") },
  { name: "Mashaim Aktar", qualification: "Gold Medalist", joined: "", photo: IMG("mashaim.png") },
  { name: "Umaima Saif", qualification: "Gold Medalist", joined: "", photo: IMG("umaima-saif.png") },
  { name: "M. Zayyan", qualification: "Gold Medalist", joined: "", photo: IMG("m-zayyan.png") },
  { name: "M. Ibrahim", qualification: "Gold Medalist", joined: "", photo: IMG("m-ibrahim2.png") },
  { name: "Anaya Fatima", qualification: "Gold Medallist", role: "Rainbow Creative Writing", joined: "", photo: IMG("anaya-fatima.png") },
];

export const UPCOMING: [string, string][] = [
  ["14th Aug, 26", "Independence Day"],
  ["15th Aug, 26", "Orientation Day For Parents"],
  ["24th -28th Aug, 26", "SDGs Awareness Week"],
  ["25th Aug, 26", "12th Rabi-ul-Awal"],
  ["26th - 28th Aug,26", "Election Campaign Days"],
  ["31st Aug, 26", "Investiture Ceremony & Announcement of Houses"],
  ["2nd Sep,26", "Inter-House Naat and Qirat Competition"],
  ["6th Sep, 26", "Defence Day / Youm-e-Shuhada"],
  ["8th Sep, 26", "International Literacy Day"],
  ["21st Sep,26", "International Peace day"],
  ["28th Sep- 3rd Oct, 26", "Intra-Regional Sports Competition"],
  ["3rd Oct 26", "APSACS Foundation Day"],
  ["5th Oct,26", "World Teachers' Day"],
  ["6th - 9th Oct, 26", "Health and Hygiene Week"],
  ["10th Oct,26", "World Mental Health Day"],
  ["15th Oct,26", "Global Hand Washing Day"],
  ["16th Oct,26", "World Food Day"],
  ["29th Oct, 26", "Mega Drama Competition"],
  ["9th Nov,26", "Iqbal Day"],
  ["11th Nov, 26", "Inter- House Debate Competition"],
  ["16th Nov,26", "International Day of Tolerance"],
  ["20th Nov,26", "World Children's Day"],
  ["23rd - 27th Nov, 26", "Civic Awareness and Community Service Week"],
  ["3rd Dec,26", "International Day of Persons with Disabilities"],
  ["7th -11th Dec 26", "Civic Awarness & Communities Service Week"],
  ["16th Dec,26", "Youm-e-Qaumi Azm-e-Taleem"],
  ["25th Dec,26", "Quaid's Day"],
  ["27th Jan,27", "Inter house Art & Craft Competition"],
  ["5th Feb,27", "Kashmir Day"],
  ["8th -12 Feb, 27", "Science and Technology Week"],
  ["3rd Mar,27", "World Wildlife Day"],
  ["8th Mar,27", "International Women's Day"],
  ["8th - 12th Mar,27", "Eid-ul-Fitr"],
  ["22nd March, 27", "World Water Day"],
  ["23rd March, 27", "Pakistan Day"],
  ["13th - 16th April,27", "Inter- House Sports Competition"],
  ["22nd- 23rd April,27", "Literature Festival"],
  ["29th April, 27", "Inter- House Quiz Competition"],
  ["1st May,27", "Labour Day"],
  ["10th May, 27", "Youm -e- Maraka-e- Haq"],
  ["15th - 18th May, 27", "Eid- ul - Adha"],
  ["24th May, 27", "International Day of the Markhor"],
  ["28th May, 27", "Youm-e-Takbeer"]
];

export const FACILITIES_CAMPUS: string[] = [
  "Spacious, Well-Equipped Classrooms designed with ample natural lighting, ergonomic seating, whiteboards, and subject-specific teaching resources to create an effective learning environment.",
  "Library & Resource Centre offering an extensive collection of Cambridge textbooks, reference materials, past examination papers, e-books, and quiet study spaces for independent learning and research.",
  "Cambridge Student Common Room providing a comfortable and welcoming space for relaxing , break and self-study",
  "Extensive Sports Facilities with spacious playing fields and grounds that encourage physical fitness, teamwork, and participation in a wide range of sports and recreational activities."
];

export const FACILITIES_TECH: string[] = [
  "Multimedia Classrooms equipped with interactive projectors, smart boards, high-speed internet, and integrated audio systems to support engaging digital lessons, educational videos, simulations, and access to Cambridge online resources.",
  "Dedicated Computer & ICT Laboratories featuring modern computer systems and licensed software to support Computer Science, ICT, coding, research, and technology-based learning."
];

export type APSISSub = {
  slug: string;
  label: string;
  eyebrow: string;
};

export const APSIS_SUBPAGES: APSISSub[] = [
  { slug: "section-head", label: "Section Head", eyebrow: "Leadership" },
  { slug: "coordinators", label: "Coordinators", eyebrow: "Leadership" },
  { slug: "faculty-by-department", label: "Faculty by Department", eyebrow: "Our Teachers" },
  { slug: "classes", label: "Classes", eyebrow: "Campus life" },
  { slug: "assessment", label: "Assessment", eyebrow: "Academics" },
  { slug: "activities", label: "Activities", eyebrow: "Curriculum" },
  { slug: "high-achievers", label: "High Achievers' APSIS Kharian", eyebrow: "Recognition" },
  { slug: "upcoming-events", label: "Up-Coming Events", eyebrow: "Look ahead" },
  { slug: "uniform", label: "Uniform", eyebrow: "Campus" },
  { slug: "cambridge-results", label: "Cambridge Results", eyebrow: "Academics" },
  { slug: "facilities", label: "Facilities", eyebrow: "Campus" },
];

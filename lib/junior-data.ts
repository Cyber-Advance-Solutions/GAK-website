// Shared content for the Junior Section (main page + its sub-pages).

import type { Staff } from "@/lib/staff";

export const IMG = (name: string) => `/sections/junior-section/${name}`;
export const ACHV = (name: string) => `/sections/junior-section/achievers/${name}`;

export type { Staff };

export const HEAD: Staff = {
  name: "Ms. Iram Saeed Butt",
  role: "Section Head (Junior Section)",
  qualification: "",
  joined: "",
  photo: IMG("iram-saeed-butt.jpg"),
};

export const DEPUTY_HEADS: Staff[] = [
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

export const DEPARTMENTS: { name: string; teachers: Staff[] }[] = [
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
      { name: "Ms. Zoya Qamar", qualification: "MA Urdu", joined: "", photo: IMG("zoya-qamar.jpg") },
      { name: "Ms. Tahira Inayat", qualification: "MA Urdu, Physical Education, M.Ed", joined: "", photo: IMG("tahira-inayat.jpg") },
      { name: "Ms. Kashifa Abbas", qualification: "MA Education, B.Ed", joined: "", photo: IMG("kashifa-abbas.jpg") },
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

export const CLASSES: { label: string; photos: string[] }[] = [
  { label: "Class 1", photos: [IMG("class1-1.jpg"), IMG("class1-2.jpg"), IMG("class1-3.jpg"), IMG("class.jpg")] },
  { label: "Class 2", photos: [IMG("class2-1.jpg"), IMG("class2-2.jpg")] },
  { label: "Class 3", photos: [IMG("class3-1.jpg"), IMG("class3-2.jpg"), IMG("class3-3.jpg")] },
];

export const ACTIVITIES: { label: string; photo: string }[] = [
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

export const HIGH_ACHIEVERS: Staff[] = [
  // HRCA Science Quiz
  { name: "M. Ismail Dar", role: "HRCA Science Quiz", qualification: "Cash Prize Rs. 50,000/-", joined: "", photo: ACHV("m-ismail-dar.png") },
  { name: "Muhammad Rayan", role: "HRCA English Quiz", qualification: "Cash Prize Rs. 50,000/-", joined: "", photo: ACHV("muhammad-rayan.png") },
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

export type JuniorSub = {
  slug: string;
  label: string;
  eyebrow: string;
};

export const JUNIOR_SUBPAGES: JuniorSub[] = [
  { slug: "deputy-section-heads", label: "Deputy Section Heads", eyebrow: "Leadership" },
  { slug: "faculty-by-department", label: "Faculty by Department", eyebrow: "Our Teachers" },
  { slug: "classes", label: "Classes", eyebrow: "Campus Life" },
  { slug: "assessments", label: "Assessments", eyebrow: "Academics" },
  { slug: "activities", label: "Activities", eyebrow: "Curriculum" },
  { slug: "high-achievers", label: "High Achievers Junior Section", eyebrow: "Recognition" },
];

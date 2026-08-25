// Shared content for the Pre-School section (main page + its sub-pages).

import type { Staff } from "@/lib/staff";

export const IMG = (name: string) => `/sections/pre-school/${name}`;

export type { Staff };

export const HEAD: Staff = {
  name: "Farhat Jabeen",
  role: "Section Head Pre School",
  qualification: "M.A Eng",
  joined: "28th April,2005",
  photo: IMG("section-head.jpg"),
};

export const DEPUTY_HEADS: Staff[] = [
  { name: "Sayeda Mushtaq", role: "Deputy Section Head", qualification: "M.A History", joined: "3rd March,2025", photo: IMG("deputy-section-head.png") },
];

export const COORDINATORS: Staff[] = [
  { name: "Ms. Qudsia Iqbal", role: "Class Coordinator EYS-I", qualification: "MA Edu. MA Islamya. B.Ed", joined: "", photo: IMG("qudsia-iqbal.jpg") },
  { name: "Ms. Sania Noor", role: "Class Coordinator EYS-II", qualification: "BS Botany", joined: "", photo: IMG("sania-noor.jpg") },
  { name: "Ms. Naureen Zubair", role: "Class Coordinator Pre-I", qualification: "BA, B.Ed", joined: "", photo: IMG("naureen-zubair.jpg") },
];

export const DEPARTMENTS: { name: string; teachers: Staff[] }[] = [
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

export const CLASSES = [
  { label: "EYS-I", photo: IMG("esy-1.jpg") },
  { label: "EYS-II", photo: IMG("esy-2.jpg") },
  { label: "Pre-I", photo: IMG("esy-3.jpg") },
];

export const ACTIVITIES: { label: string; photo: string }[] = [
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

export const HIGH_ACHIEVERS: Staff[] = [
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

export const FACILITIES: { name: string; description: string; photos: string[] }[] = [
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

export type PreSub = {
  slug: string;
  label: string;
  eyebrow: string;
};

export const PRE_SUBPAGES: PreSub[] = [
  { slug: "deputy-section-head", label: "Deputy Section Head", eyebrow: "Leadership" },
  { slug: "coordinators", label: "Coordinators", eyebrow: "Leadership" },
  { slug: "faculty-by-department", label: "Faculty by Department", eyebrow: "Our Teachers" },
  { slug: "classes", label: "Classes", eyebrow: "Campus life" },
  { slug: "exam-schedule", label: "Exam Schedule", eyebrow: "Assessment" },
  { slug: "activities", label: "Activities", eyebrow: "Curriculum" },
  { slug: "high-achievers", label: "High Achievers Pre School", eyebrow: "Recognition" },
  { slug: "facilities", label: "Facilities", eyebrow: "Campus" },
];

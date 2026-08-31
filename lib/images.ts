// Placeholder banners — replace these files in /public with real GAK photos (same names).
export const BANNER: Record<string, string> = {
  about: "/hero3.png", "about-founder": "/hero1.png", "about-principals": "/hero2.png",
  "about-code-of-conduct": "/hero3.png", "about-facilities": "/hero1.png",
  messages: "/hero1.png", organogram: "/hero2.png",
  admissions: "/hero1.png", scholarships: "/hero2.png", uniform: "/hero3.png",
  alumni: "/hero1.png", activities: "/hero3.png", hr: "/hero2.png",
  links: "/hero1.png", "quick-links": "/hero2.png", faqs: "/hero3.png",
  chatbot: "/hero1.png", contact: "/hero2.png", downloads: "/hero3.png",
  feedback: "/hero1.png",
  gallery: "/hero3.png",
  pre: "/hero1.png", junior: "/hero2.png",
  "middle-girls": "/hero2.png", "middle-boys": "/hero2.png",
  "senior-girls": "/hero3.png", "senior-boys": "/hero3.png",
  apsis: "/apsis.jpg",apsac: "/adm-block.jpg",
  "student-council": "/hero3.png",
};

const TRAINING_BASE = "/gallery/Trainings Session";

export const TRAINING_SESSIONS = [
  { name: "13th April — Classroom Management",                  folder: "13th April Clasroom Management",                    count: 8  },
  { name: "15th April — Smart Board Training Session 1",        folder: "15th April Smart Board Training Session -1",        count: 10 },
  { name: "22nd April — APSACS Orientation",                    folder: "22nd April APSACS Orientation",                     count: 11 },
  { name: "22nd May — General Staff Meeting Middle Girls",       folder: "22nd May General Staff Meeting Middle Girls",       count: 13 },
  { name: "23rd May — 360° Lesson Evaluation Workshop",         folder: "23rd May 360 degree Lesson Evaluation Workshop",    count: 8  },
  { name: "23rd May — AE Policy",                               folder: "23rd May AE Policy",                               count: 9  },
  { name: "23rd May — CLIC Double CLIC",                        folder: "23rd May CLIC Double CLIC",                        count: 13 },
  { name: "23rd May — CLP Training",                            folder: "23rd May CLP Training",                            count: 2  },
  { name: "23rd May — GSM",                                     folder: "23rd May GSM",                                     count: 10 },
  { name: "23rd May — Innovative Teaching & Learning Strategies", folder: "23rd May Innovative Teaching Learning Strategies", count: 10 },
  { name: "23rd May — SBTs Middle Girls",                       folder: "23rd May SBTs Middle Girls",                       count: 5  },
  { name: "27th April — Subject Based Training",                folder: "27th April Subject Based Training",                count: 14 },
  { name: "28th April — Subject Based Trainings",               folder: "28th April Subject Bases Trainings",               count: 10 },
  { name: "7th May — Workshop on Diary Writing",                folder: "7th May workshop on dairy writing",                count: 13 },
  { name: "8th May — Online Zoom Class Senior Girls",           folder: "8th May Online Zoom Class Senior Girls",           count: 10 },
  { name: "9th May — Online Session Pre-Middle",                folder: "9th May online session Pre-Middle",                count: 13 },
].map((s) => ({
  name: s.name,
  cover: `${TRAINING_BASE}/${s.folder}/01.jpg`,
  images: Array.from({ length: s.count }, (_, i) =>
    `${TRAINING_BASE}/${s.folder}/${String(i + 1).padStart(2, "0")}.jpg`
  ),
}));

export const GALLERY_EVENTS = [
  {
    name: "14th August Mega Celebration",
    cover: "/gallery/14th August Mega Celebration/01.jpg",
    images: Array.from({ length: 10 }, (_, i) => `/gallery/14th August Mega Celebration/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    name: "Azadi Walk",
    cover: "/gallery/Azadi Walk/01.jpg",
    images: Array.from({ length: 10 }, (_, i) => `/gallery/Azadi Walk/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    name: "Flag Hosting",
    cover: "/gallery/Flag Hosting/01.jpg",
    images: Array.from({ length: 13 }, (_, i) => `/gallery/Flag Hosting/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    name: "Trainings Session",
    cover: `${TRAINING_BASE}/13th April Clasroom Management/01.jpg`,
    subEvents: TRAINING_SESSIONS,
  },
];

// Placeholder banners — replace these files in /public with real GAK photos (same names).
export const BANNER: Record<string, string> = {
  about: "/page-banner.png", "about-founder": "/hero1.png", "about-principals": "/hero2.png",
  "about-code-of-conduct": "/page-banner.png", "about-facilities": "/facilities.jpg", facilities: "/facilities.jpg",
  messages: "/hero1.png", organogram: "/hero2.png",
  admissions: "/hero1.png", scholarships: "/hero2.png", uniform: "/page-banner.png",
  alumni: "/hero1.png", activities: "/page-banner.png", hr: "/hero2.png",
  links: "/hero1.png", "quick-links": "/hero2.png", faqs: "/page-banner.png",
  chatbot: "/hero1.png", contact: "/hero2.png", downloads: "/page-banner.png",
  feedback: "/hero1.png",
  gallery: "/page-banner.png",
  latest: "/hero2.png",
  archive: "/hero1.png",
  pre: "/hero1.png", junior: "/hero2.png",
  "middle-girls": "/hero2.png", "middle-boys": "/hero2.png",
  "senior-girls": "/page-banner.png", "senior-boys": "/page-banner.png",
  apsis: "/apsis.jpg",apsac: "/adm-block.jpg",
  "student-council": "/page-banner.png",
};

export const ARCHIVE_EVENTS = [
  {
    name: "1st September — Literacy Day",
    cover: "/gallery/1st September Literacy Day/01.jpg",
    images: Array.from({ length: 1 }, (_, i) => `/gallery/1st September Literacy Day/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    name: "2nd September — Essay Writing Competition (APSIS)",
    cover: "/gallery/2nd September Essay Writing Competition APSIS/01.jpg",
    images: Array.from({ length: 7 }, (_, i) => `/gallery/2nd September Essay Writing Competition APSIS/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    name: "2nd September — Poster Making & Badge Making (APSIS)",
    cover: "/gallery/2nd September Poster Making +Badge Making APSIS/01.jpg",
    images: Array.from({ length: 22 }, (_, i) => `/gallery/2nd September Poster Making +Badge Making APSIS/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    name: "2nd September — Parade Practice (APSIS)",
    cover: "/gallery/2nd September Prade Practice APSIS/01.jpg",
    images: Array.from({ length: 5 }, (_, i) => `/gallery/2nd September Prade Practice APSIS/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    name: "3rd September — Defence Day Celebration (Pre-School)",
    cover: "/gallery/3rd Sept Defense Day Celebration Pre School/01.jpg",
    images: Array.from({ length: 15 }, (_, i) => `/gallery/3rd Sept Defense Day Celebration Pre School/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    name: "3rd September — Defence Day (Junior Section)",
    cover: "/gallery/3rd Sept Defense Day Junior/01.jpg",
    images: Array.from({ length: 10 }, (_, i) => `/gallery/3rd Sept Defense Day Junior/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    name: "4th September — Pets Care (Pre-School)",
    cover: "/gallery/4th  Sept Pets Care Pre School/01.jpg",
    images: Array.from({ length: 18 }, (_, i) => `/gallery/4th  Sept Pets Care Pre School/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    name: "9th September — Practicals in Biology & Chemistry Labs",
    cover: "/gallery/9th Sep Practicals in Biology + Chemistry Labs/01.jpg",
    images: Array.from({ length: 13 }, (_, i) => `/gallery/9th Sep Practicals in Biology + Chemistry Labs/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    name: "9th September — Save Water Save Life",
    cover: "/gallery/9th Sep Save Water Save Life/01.jpg",
    images: Array.from({ length: 37 }, (_, i) => `/gallery/9th Sep Save Water Save Life/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    name: "11th September — Animal Habitat",
    cover: "/gallery/11th Sep Animal Habitat/01.jpg",
    images: Array.from({ length: 21 }, (_, i) => `/gallery/11th Sep Animal Habitat/${String(i + 1).padStart(2, "0")}.jpg`),
  },
];

export const LATEST_EVENTS = [
  {
    name: "14th September — ICATs Mathematics Preparation",
    cover: "/gallery/14th Sep ICATs Mathematics Preparation/01.jpg",
    images: Array.from({ length: 39 }, (_, i) => `/gallery/14th Sep ICATs Mathematics Preparation/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    name: "14th September — Impact of Social Media",
    cover: "/gallery/14th Sep Impact of Social Media/01.jpg",
    images: Array.from({ length: 7 }, (_, i) => `/gallery/14th Sep Impact of Social Media/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    name: "14th September — Student Council Interview (APSIS)",
    cover: "/gallery/14th Sep Student Council Interview APSIS/01.jpg",
    images: Array.from({ length: 1 }, (_, i) => `/gallery/14th Sep Student Council Interview APSIS/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    name: "16th September — Birds Hydration Station",
    cover: "/gallery/16th Sep Birds Hydration Station/01.jpg",
    images: Array.from({ length: 13 }, (_, i) => `/gallery/16th Sep Birds Hydration Station/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    name: "18th September — Yellow Colour Day",
    cover: "/gallery/18th Sep Yellow Colour Day/01.jpg",
    images: Array.from({ length: 12 }, (_, i) => `/gallery/18th Sep Yellow Colour Day/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    name: "19th September — Season Activity",
    cover: "/gallery/19th Sep Season Activity/01.jpg",
    images: Array.from({ length: 15 }, (_, i) => `/gallery/19th Sep Season Activity/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    name: "21st September — Gratitude (Pre-School)",
    cover: "/gallery/21st Sep Gratitude Pre/01.jpg",
    images: Array.from({ length: 11 }, (_, i) => `/gallery/21st Sep Gratitude Pre/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    name: "21st September — International Peace Day",
    cover: "/gallery/21st Sep International Peace Day/01.jpg",
    images: Array.from({ length: 36 }, (_, i) => `/gallery/21st Sep International Peace Day/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    name: "21st September — Reduce Reuse Recycle",
    cover: "/gallery/21st Sep Reduce Reuse Recycle/01.jpg",
    images: Array.from({ length: 1 }, (_, i) => `/gallery/21st Sep Reduce Reuse Recycle/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    name: "22nd September — Gratitude (Junior Section)",
    cover: "/gallery/22nd Sep Gratitude Junior/01.jpg",
    images: Array.from({ length: 9 }, (_, i) => `/gallery/22nd Sep Gratitude Junior/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    name: "22nd September — Healthy & Junk Food",
    cover: "/gallery/22nd Sep Healthy & Junk Food/01.jpg",
    images: Array.from({ length: 15 }, (_, i) => `/gallery/22nd Sep Healthy & Junk Food/${String(i + 1).padStart(2, "0")}.jpg`),
  },
];

export const GALLERY_EVENTS = [...ARCHIVE_EVENTS, ...LATEST_EVENTS];

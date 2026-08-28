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
};

export const GALLERY_IMAGES = Array.from({ length: 91 }, (_, i) =>
  `/gallery/${String(i + 1).padStart(2, "0")}.jpeg`
);

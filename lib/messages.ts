// Leadership messages — one entry per dedicated message page.

export type MessageLeader = {
  slug: "chairman" | "vice-chairman" | "principal";
  href: string;
  eyebrow: string;
  title: string;
  heading: string;
  intro: string;
  message: string[];
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  initials: string;
};

export const MESSAGES: MessageLeader[] = [
  {
    slug: "chairman",
    href: "/messages/chairman",
    eyebrow: "From the Chairman's desk",
    title: "Chairman's Message",
    heading: "Excellence is never inherited —\nit is sustained.",
    intro: "A message from the Chairman on character, governance, and the lasting purpose of Garrison Academy.",
    name: "Major General Bilal Mahmud, General Officer Commanding 37 Div, Chairman BOGs GAK",
    role: "Chairman, APSACS",
    image: "/chairman.jpeg",
    imageAlt: "Chairman, APSACS",
    initials: "TM",
    message: [
      "The true measure of an educational institution is not found in the age of its buildings, the number of its graduates, or the honours it has received. It is reflected in the character of the individuals it shapes, the values it upholds, and the lasting contribution its graduates make to society as responsible, capable, and conscientious citizens.",
      "Garrison Academy Kharian has earned the trust and respect of generations through its unwavering commitment to educational excellence and character development. While we take pride in this legacy, we recognise that excellence is never inherited—it is sustained through purposeful leadership, sound governance, and a steadfast commitment to continuous improvement.",
      "As custodians of this institution, our responsibility is not only to preserve what has been achieved but also to prepare our students for the future. We remain committed to creating an educational environment that inspires curiosity, nurtures potential, and enables every learner to thrive. This commitment is reflected in our continued investment in modern learning facilities, technology-enabled classrooms, laboratories, libraries, sports, and opportunities that promote innovation, creativity, and holistic development.",
      "Equally important is our determination to strengthen a culture where merit, transparency, accountability, and professionalism guide every decision. We believe that exceptional schools are built by exceptional people. By attracting talented educators, investing in their professional growth, and fostering integrity, collaboration, and high expectations, we strive to make excellence a consistent standard rather than an occasional achievement.",
      "The world our students will inherit demands far more than academic success. It requires individuals who think critically, lead with integrity, adapt confidently to change, and contribute responsibly to society. Developing such individuals remains the central purpose of our institution.",
      "As you explore the pages of this magazine, you will encounter inspiring stories of achievement, creativity, perseverance, and service. They reflect the dedication of our students, the professionalism of our educators, the trust of our parents, and the collective efforts of our entire school community.",
      "I extend my sincere appreciation to our students, teachers, parents, alumni, and support staff for their continued commitment to our shared vision. Together, we will honour our proud heritage while embracing innovation, raising standards, and strengthening Garrison Academy as a beacon of excellence for generations to come.",
    ],
  },
  {
    slug: "vice-chairman",
    href: "/messages/vice-chairman",
    eyebrow: "From the Vice Chairman's desk",
    title: "Vice Chairman's Message",
    heading: "Education's highest calling\nis the quality of thought.",
    intro: "A message from the Vice Chairman on intellect, character, and the distinctly human purpose of schooling.",
    name: "Patron in Chief, Lieutenant General Nauman Zakria",
    role: "Vice Chairman",
    image: "/vicechairman.jpeg",
    imageAlt: "Vice Chairman",
    initials: "SR",
    message: [
      "Every civilization is ultimately defined not by the wealth it accumulates, the technology it invents, or the power it commands, but by the quality of thought it cultivates in its people. Education therefore serves a purpose far greater than preparing students for examinations or careers. Its highest calling is to shape minds that think with clarity, act with integrity, and contribute meaningfully to society.",
      "In an age where information is abundant and opinions are instantaneous, schools must do more than transmit knowledge. They must cultivate intellectual discernment—the ability to question assumptions, evaluate evidence, think independently, and pursue truth with humility and courage. History reminds us that every lasting advance in science, philosophy, and society began with individuals who were willing to challenge accepted ideas through thoughtful inquiry.",
      "Yet intellect alone is never enough. Knowledge without conscience can become manipulation, and intelligence without integrity can become exploitation. The true measure of an educated individual lies not simply in what they know, but in the wisdom and character that guide how they use that knowledge.",
      "The rapid emergence of artificial intelligence and technological change further reinforces this reality. While machines can process information with extraordinary speed, they cannot replace ethical judgment, empathy, moral imagination, or reflective thought. The enduring purpose of education is therefore not to prepare students to compete with machines, but to cultivate the qualities that make them distinctly human.",
      "At Garrison Academy, this philosophy shapes everything we do. We strive to develop young people whose curiosity extends beyond the curriculum, whose confidence is balanced by humility, whose decisions are guided by evidence and values, and whose leadership is defined by service. At the same time, we continue to foster ownership, teamwork, and institutional pride among our staff, strengthen meaningful partnerships with parents, and create an environment where every student is encouraged to think freely, grow confidently, and realise their full potential.",
      "The achievements celebrated in this magazine are more than a record of success; they reflect a community committed to learning, character, and continuous growth. A school's true legacy is measured not by the distinctions it earns, but by the quality of minds it awakens, the values it nurtures, and the positive impact its graduates have on society.",
      "May Almighty Allah continue to bless Garrison Academy with wisdom in its vision, excellence in its endeavour, and integrity in its purpose. May He bless our students, parents, teachers, and staff, and guide us all in our shared mission of developing capable individuals who will serve humanity with knowledge, compassion, and honour.",
    ],
  },
  {
    slug: "principal",
    href: "/messages/principal",
    eyebrow: "From the Principal's desk",
    title: "Principal's Message",
    heading: "We shape the future —\none learner at a time.",
    intro: "A message from the Principal on character, critical thought, and the true work of a school.",
    name: "Brig (R) Asad Khan",
    role: "Principal, GAK Campus",
    image: "/hero3.jpg",
    imageAlt: "Principal, GAK Campus",
    initials: "AK",
    message: [
      "Welcome to Garrison Academy Kharian",
      "It is my privilege to welcome you to Garrison Academy Kharian, an institution where academic excellence, character, and leadership grow together with purpose and pride.",
      "We believe that true education goes beyond textbooks and examinations. It is about shaping thoughtful, confident, and responsible individuals who are prepared to meet the challenges of a rapidly changing world with integrity, resilience, and vision. At Garrison Academy Kharian, every child is given the opportunity to learn, lead, and excel in an environment that is disciplined, caring, and intellectually stimulating.",
      "Our dedicated faculty remains committed to high standards of teaching and learning, while our broad range of academic, co-curricular, and character-building opportunities ensures the holistic development of every student. We take pride in nurturing a culture of achievement, innovation, respect, and continuous improvement.",
      "As Principal, I am deeply committed to ensuring that Garrison Academy Kharian continues to stand as a beacon of quality education, where young minds are inspired, values are strengthened, and futures are shaped with confidence.",
      "I invite you to explore our website and discover the spirit, excellence, and aspirations that define our school community."
    ],
  },
];

export function getMessage(slug: MessageLeader["slug"]) {
  const entry = MESSAGES.find((m) => m.slug === slug);
  if (!entry) throw new Error(`Unknown message slug: ${slug}`);
  return entry;
}

// Central content/data for GAK Campus website (V2).
// In production these would be served from a CMS / admin panel.

export type Leaf = { label: string; href: string };
export type MegaEntry = Leaf | { label: string; fly: Leaf[] };
export type NavItem =
  | Leaf
  | { label: string; mega: MegaEntry[]; alignRight?: boolean };

export const NAV: NavItem[] = [
  {
    label: "About",
    mega: [
      {
        label: "About Us",
        fly: [
          { label: "History", href: "/about" },
          { label: "The Founder", href: "/about" },
          { label: "Principals", href: "/about" },
          { label: "Code of Conduct", href: "/about" },
          { label: "Facilities", href: "/about" },
        ],
      },
      {
        label: "Messages",
        fly: [
          { label: "Chairman's Message", href: "/messages/chairman" },
          { label: "Vice Chairman's Message", href: "/messages/vice-chairman" },
          { label: "Principal's Message", href: "/messages/principal" },
        ],
      },
      {
        label: "Organogram",
        fly: [
          { label: "Academic Structure", href: "/organogram" },
          { label: "Administrative", href: "/organogram" },
        ],
      },
      { label: "Alumni — AMULNI", href: "/alumni" },
    ],
  },
  {
    label: "Academics",
    mega: [
      {
        label: "Sections",
        fly: [
          { label: "Pre-School", href: "/sections/pre" },
          { label: "Junior Section", href: "/sections/junior" },
          { label: "Middle Girls Section", href: "/sections/middle-girls" },
          { label: "Middle Boys Section", href: "/sections/middle-boys" },
          { label: "Senior Girls Section", href: "/sections/senior-girls" },
          { label: "Senior Boys Section", href: "/sections/senior-boys" },
          { label: "Army Public School For International Study", href: "/sections/apsis" },
        ],
      },
      { label: "Scholarships & Incentives", href: "/scholarships" },
      {
        label: "School Uniform",
        fly: [
          { label: "APSACS Stream", href: "/uniform" },
          { label: "APSIS Stream", href: "/uniform" },
        ],
      },
      {
        label: "Activities",
        fly: [
          { label: "Academics", href: "/activities" },
          { label: "Sports", href: "/activities" },
          { label: "Co-curricular", href: "/activities" },
        ],
      },
    ],
  },
  {
    label: "Admissions",
    mega: [
      {
        label: "Admission Request",
        fly: [
          { label: "Apply Online", href: "/admissions" },
          { label: "Download Form", href: "/downloads" },
        ],
      },
      { label: "Admission Process", href: "/admissions" },
      {
        label: "Criteria",
        fly: [
          { label: "Board Classes", href: "/admissions" },
          { label: "Non-Board Classes", href: "/admissions" },
        ],
      },
      { label: "Test Schedule", href: "/admissions" },
      {
        label: "Downloads",
        fly: [
          { label: "Notifications", href: "/downloads" },
          { label: "Circulars", href: "/downloads" },
          { label: "Past Papers", href: "/downloads" },
          { label: "Admission Form", href: "/downloads" },
        ],
      },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    label: "More",
    alignRight: true,
    mega: [
      {
        label: "HR & Careers",
        fly: [
          { label: "Staff Hiring", href: "/hr" },
          { label: "Advertisements", href: "/hr" },
        ],
      },
      {
        label: "External Links",
        fly: [
          { label: "LMS — Teachers", href: "/links" },
          { label: "LMS — Students", href: "/links" },
          { label: "FBISE", href: "/links" },
          { label: "Social Media", href: "/links" },
        ],
      },
      { label: "Chatbot", href: "/chatbot" },
      { label: "Feedback / Complaints", href: "/feedback" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export type SectionKey =
  | "pre"
  | "junior"
  | "middle-girls"
  | "middle-boys"
  | "senior-girls"
  | "senior-boys"
  | "apsis";
export type SectionData = {
  name: string;
  sub: string;
  head: string;
  headMsg: string;
  cambridge?: boolean;
  board?: boolean;
  extra?: string;
};

export const SECTIONS: Record<SectionKey, SectionData> = {
  pre: {
    name: "Pre-School",
    sub: "Foundation Years",
    head: "Mrs. Rabia Tariq",
    headMsg:
      "Our Pre-School nurtures curiosity through play-based, child-centred learning in a warm and secure environment.",
  },
  junior: {
    name: "Junior Section",
    sub: "Classes I – III",
    head: "Mrs. Sadia Khan",
    headMsg:
      "The Junior Section builds early academic discipline and strong literacy and numeracy foundations, preparing students for the transition into Middle School.",
  },
  "middle-girls": {
    name: "Middle Girls Section",
    sub: "Classes IV – VIII (Girls)",
    head: "Mrs. Ayesha Imran",
    headMsg:
      "The middle years build strong academic foundations and study habits that carry our girls confidently into the board classes.",
  },
  "middle-boys": {
    name: "Middle Boys Section",
    sub: "Classes IV – VIII (Boys)",
    head: "Mr. Imran Shah",
    headMsg:
      "The middle years build strong academic foundations and study habits that carry our boys confidently into the board classes.",
  },
  "senior-girls": {
    name: "Senior Girls Section",
    sub: "FBISE — Classes IX – XII (Girls)",
    head: "Mrs. Farah Naz",
    headMsg:
      "Our senior girls' school delivers rigorous, board-focused teaching with consistent top results in FBISE examinations.",
    board: true,
  },
  "senior-boys": {
    name: "Senior Boys Section",
    sub: "FBISE — Classes IX – XII (Boys)",
    head: "Mr. Tariq Mehmood",
    headMsg:
      "Our senior boys' school delivers rigorous, board-focused teaching with consistent top results in FBISE examinations.",
    board: true,
  },
  apsis: {
    name: "Army Public School For International Study",
    sub: "Cambridge International Stream",
    head: "Mr. Daniyal Rauf",
    headMsg:
      "Army Public School For International Study offers a globally benchmarked Cambridge education, opening doors to universities at home and abroad.",
    cambridge: true,
  },
};

export const HOME_GRID: { href: string; label: string; icon: string; desc: string }[] = [
  { href: "/messages", label: "Messages", icon: "💬", desc: "Chairman, VC & Principal" },
  { href: "/about", label: "About Us", icon: "🏛️", desc: "History, founder & facilities" },
  { href: "/organogram", label: "Organogram", icon: "🗂️", desc: "Academic & admin structure" },
  { href: "/quick-links", label: "Quick Links", icon: "🔗", desc: "Section-wise information" },
  { href: "/scholarships", label: "Scholarships", icon: "🎓", desc: "Incentives & policy" },
  { href: "/uniform", label: "School Uniform", icon: "👔", desc: "Summer & winter" },
  { href: "/alumni", label: "Alumni", icon: "🌟", desc: "Ex-GAK & top holders" },
  { href: "/activities", label: "Activities", icon: "⚽", desc: "Sports & co-curricular" },
  { href: "/admissions", label: "Admissions", icon: "✎", desc: "Apply for Session 2026" },
  { href: "/hr", label: "HR & Careers", icon: "💼", desc: "Staff hiring" },
  { href: "/links", label: "External Links", icon: "↗", desc: "LMS, FBISE, social" },
  { href: "/faqs", label: "FAQs", icon: "❓", desc: "Common questions" },
  { href: "/chatbot", label: "Chatbot", icon: "◎", desc: "Instant answers" },
  { href: "/contact", label: "Contact Us", icon: "📍", desc: "Numbers, email, map" },
  { href: "/downloads", label: "Downloads", icon: "↓", desc: "Forms & circulars" },
  { href: "/feedback", label: "Feedback", icon: "✍️", desc: "Complaints & suggestions" },
];

export const FAQ_DATA: Record<string, { label: string; items: { q: string; a: string }[] }> = {
  gen: {
    label: "General",
    items: [
      { q: "What are the school timings?", a: "School operates Monday–Friday, 7:45 AM to 1:45 PM, with adjusted winter timings announced via circular." },
      { q: "Which streams does GAK offer?", a: "Two parallel streams — APSACS (FBISE national curriculum) and APSIS (Cambridge international)." },
      { q: "Is transport available?", a: "Yes, school transport covers major routes within and around Kharian Cantt. Details are shared at enrolment." },
    ],
  },
  fee: {
    label: "Fee",
    items: [
      { q: "How is the fee structured?", a: "Fees are charged quarterly. The full structure by class is provided in the prospectus and at the accounts office." },
      { q: "Are there sibling concessions?", a: "Concessions apply as per APSACS policy. Please confirm eligibility with the accounts department." },
    ],
  },
  adm: {
    label: "Admissions",
    items: [
      { q: "When do admissions open?", a: "Main admissions open in January–February for the new session. Mid-session seats are subject to availability." },
      { q: "Is there an entry test?", a: "Yes, for Class I and above. Pre-School admissions are based on an interaction only." },
    ],
  },
  exam: {
    label: "Examinations",
    items: [
      { q: "How many terms are there?", a: "The academic year is divided into terms with periodic assessments and two major examinations." },
      { q: "Where can I see datesheets?", a: "Examination schedules are published on each section page and in the Downloads area." },
    ],
  },
  hire: {
    label: "Hiring",
    items: [
      { q: "How do I apply for a teaching post?", a: "Apply through the Google Form linked in the HR & Careers section against the relevant vacancy." },
    ],
  },
  promo: {
    label: "Promotions",
    items: [
      { q: "What is the promotion criteria?", a: "Promotion is based on cumulative assessment, attendance and conduct, as detailed on each section's page." },
    ],
  },
};

export const CHAT_QA: Record<string, { label: string; qa: [string, string][] }> = {
  general: {
    label: "General",
    qa: [
      ["What are the school timings?", "School runs Mon–Fri, 7:45 AM–1:45 PM. Winter timings are announced via circular."],
      ["Which streams do you offer?", "Two streams — APSACS (FBISE) and APSIS (Cambridge international)."],
      ["Is transport available?", "Yes, transport covers major routes in and around Kharian Cantt."],
    ],
  },
  admission: {
    label: "Admissions",
    qa: [
      ["When do admissions open?", "Main admissions open Jan–Feb for the new session. Apply online from the Admissions page."],
      ["Is there an entry test?", "Yes, for Class I and above. Pre-School is interaction-based only."],
      ["What documents are needed?", "Birth certificate, previous result, B-form/CNIC copies and passport photos."],
    ],
  },
  fee: {
    label: "Fee",
    qa: [
      ["How is fee charged?", "Fees are billed quarterly. Full structure is in the prospectus and at accounts."],
      ["Are concessions available?", "Sibling and merit concessions apply per APSACS policy."],
    ],
  },
  exam: {
    label: "Exams",
    qa: [
      ["Where are datesheets shared?", "On each section page and in the Downloads area."],
      ["How are students assessed?", "Through term assessments plus two major examinations per year."],
    ],
  },
};

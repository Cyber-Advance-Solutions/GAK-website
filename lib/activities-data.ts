// Shared content for the Activities page and its sub-pages.

export const SPORTS = ["Cricket", "Football", "Hockey", "Athletics", "Basketball", "Badminton", "Table Tennis", "Taekwondo"];
export const SPORT_IMG = ["/hero3.jpg", "/hero1.jpg", "/hero2.jpg"];

export const ACADEMIC: [string, string][] = [
  ["Science Olympiad", "Inter-house competition fostering scientific inquiry and innovation."],
  ["Spelling Bee & Quiz", "Language and general-knowledge contests across all sections."],
  ["Debates & Declamation", "Urdu and English public-speaking forums building confidence."],
];

export const CLUBS: [string, string][] = [
  ["Dramatics Society", "Stagecraft, scriptwriting and annual productions."],
  ["Astronomy Club", "Sky-watching evenings and space-science projects."],
  ["Eco / Green Club", "Campus sustainability drives and tree plantation."],
  ["Robotics & STEM", "Hands-on engineering, coding and competition builds."],
];

export const COMPS: [string, string, string, string][] = [
  ["GAK Robotics Team", "National STEM Challenge", "Gold", "National"],
  ["Ayesha Hameed", "Int'l Math Olympiad", "Merit", "International"],
  ["Debating Society", "Inter-APS Debates", "Winner", "National"],
  ["Athletics Team", "Garrison Sports Gala", "Runner-up", "Regional"],
];

export type ActivitiesSub = {
  slug: string;
  label: string;
  eyebrow: string;
  desc: string;
};

export const ACTIVITIES_SUBPAGES: ActivitiesSub[] = [
  { slug: "sports", label: "Sports", eyebrow: "Get involved", desc: "Cricket, football, hockey, athletics and more across the school." },
  { slug: "co-curricular", label: "Co-curricular", eyebrow: "Get involved", desc: "Clubs, societies and our national & international competition wins." },
  { slug: "academics", label: "Academics", eyebrow: "Get involved", desc: "Olympiads, quizzes, debates and other academic contests." },
];

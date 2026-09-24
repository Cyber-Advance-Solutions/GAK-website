const WORDS = [
  // ── Header ──
  "APSACS CALENDAR — OCT & NOV 2026",

  // ── PRE-I ──
  "PRE-I",
  "2 Oct – Nature Explorers",
  "3 Oct – APSACS Foundation Day",
  "5 Oct – World Teachers' Day",
  "9 Oct – Stay Safe with People I Know",
  "10 Oct – World Mental Health Day",
  "15 Oct – Global Handwashing Day",
  "16 Oct – World Food Day",
  "19–23 Oct – Reinforcement",
  "26–30 Oct – Activity Week",
  "31 Oct – Progress Review Session",
  "2 Nov – 2nd Term Begins",
  "6 Nov – My Happy Place to Work",
  "9 Nov – Iqbal Day",
  "13 Nov – Community Helpers / Blue Colour Day",
  "16 Nov – International Day of Tolerance",
  "20 Nov – World Children's Day",
  "23–29 Nov – Singing Rhymes",

  // ── MIDDLE Class I–VIII ──
  "MIDDLE (Class I–VIII)",
  "28 Sep–3 Oct – Sports Competition (Class IV–VIII)",
  "3 Oct – APSACS Foundation Day",
  "5 Oct – World Teachers' Day",
  "5–9 Oct – Teaching / Revision Week (IV–VIII)",
  "10 Oct – World Mental Health Day",
  "12–16 Oct – Revision & Assessment (IV–V)",
  "12–23 Oct – 1st Term Exam (VI–VIII)",
  "15 Oct – Global Handwashing Day",
  "16 Oct – World Food Day",
  "19–23 Oct – Revision / Centralised Assessment (I–V)",
  "26–30 Oct – Result Preparation Week",
  "31 Oct – Progress Review Session",
  "2 Nov – 2nd Term Begins",
  "9 Nov – Iqbal Day",
  "16 Nov – International Day of Tolerance",
  "20 Nov – World Children's Day",
  "25 Nov – Inter-House Speech Competition (I–III) / Debate Competition (IV–VIII)",

  // ── SENIOR Class XI–XII ──
  "SENIOR (Class XI–XII)",
  "28 Sep–3 Oct – Intra-Regional Sports Competition",
  "3 Oct – APSACS Foundation Day",
  "7 Oct – Parliamentary Style Debates",
  "10 Oct – World Mental Health Day",
  "15 Oct – Anti-Drugs Awareness Day",
  "19–27 Oct – Class Assessment-2",
  "31 Oct – PTM & Result",
  "9 Nov – Iqbal Day",
  "16 Nov – International Day of Tolerance",
  "16–21 Nov – Intra-Zonal Sports Competition",
  "23–27 Nov – Civic Awareness & Community Service Week",
  "30 Nov–4 Dec – Revision",
];

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="mq-track">
        {[...WORDS, ...WORDS].map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>
    </div>
  );
}

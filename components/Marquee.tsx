const WORDS = ["Discipline", "Knowledge", "Character", "FBISE", "Cambridge", "Leadership"];
export default function Marquee() {
  return (
    <div className="marquee"><div className="mq-track">
      {[...WORDS, ...WORDS].map((w, i) => (<span key={i}>{w}</span>))}
    </div></div>
  );
}

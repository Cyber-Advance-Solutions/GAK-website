export default function SectionHead({ eyebrow, title, intro, mw }:
  { eyebrow: string; title: string; intro?: string; mw?: string | number }) {
  return (
    <div className="sec-head" style={{ maxWidth: mw }}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="h-lg">{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

export default function SectionHead({ eyebrow, title, intro }:
  { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="sec-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="h-lg">{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

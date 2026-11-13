import Link from "next/link";

/** Grey skeleton banner, drawn under the real image: shows when no image is set or its file is missing */
const BANNER_FALLBACK = "/placeholders/banner.webp";

type Crumb = { label: string; href?: string };
export default function PageHero({ eyebrow, title, intro, image, crumb = [] }:
  { eyebrow: string; title: string; intro?: string; image: string; crumb?: Crumb[] }) {
  return (
    <section
      className="pagehero"
      style={{
        backgroundImage:
          image && image !== BANNER_FALLBACK ? `url("${image}"), url("${BANNER_FALLBACK}")` : `url("${BANNER_FALLBACK}")`,
      }}
    >
      <div className="pagehero-ov" />
      <div className="wrap pagehero-in">
        <nav className="crumb">
          <Link href="/">Home</Link>
          {crumb.map((c) => (<span key={c.label}>/ {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}</span>))}
        </nav>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="h-xl">{title}</h1>
        {intro && <p className="ph-intro">{intro}</p>}
      </div>
    </section>
  );
}

import Link from "next/link";
import { Baby, Layers, GraduationCap, Globe } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Quick Links" };

const CARDS: [React.ReactNode, string, string, string][] = [
  [<Baby key="a" size={22} strokeWidth={1.8} />, "Pre-School", "Foundation years — Nursery, Prep & junior sections.", "/sections/pre"],
  [<Layers key="b" size={22} strokeWidth={1.8} />, "Middle School", "Classes VI to VIII — the bridge to board years.", "/sections/middle"],
  [<GraduationCap key="c" size={22} strokeWidth={1.8} />, "Senior School", "FBISE board classes IX–XII.", "/sections/senior"],
  [<Globe key="d" size={22} strokeWidth={1.8} />, "APSIS", "Cambridge international stream.", "/sections/apsis"],
];

export default function QuickLinksPage() {
  return (
    <>
      <PageHero
        eyebrow="Academic sections"
        title="Quick links"
        intro="Choose a section to view its head, faculty, classes, results, scholarships and upcoming events."
        image={BANNER["quick-links"]}
        crumb={[{ label: "Quick Links" }]}
      />
      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Browse" title="Explore each academic section" />
          <div className="linkcards">
            {CARDS.map(([ic, t, d, href]) => (
              <Link className="linkcard" href={href} key={href}>
                <div className="lc-ic">{ic}</div>
                <div><h4>{t}</h4><p>{d}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

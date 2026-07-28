import Link from "next/link";
import { Baby, BookOpen, Layers, GraduationCap, Globe } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Quick Links" };

const CARDS: [React.ReactNode, string, string, string][] = [
  [<Baby key="a" size={22} strokeWidth={1.8} />, "Pre-School", "Foundation years — Nursery & Prep.", "/sections/pre"],
  [<BookOpen key="b" size={22} strokeWidth={1.8} />, "Junior Section", "Classes I to V — building early academic discipline.", "/sections/junior"],
  [<Layers key="c" size={22} strokeWidth={1.8} />, "Middle Girls Section", "Classes VI to VIII — girls' section.", "/sections/middle-girls"],
  [<Layers key="d" size={22} strokeWidth={1.8} />, "Middle Boys Section", "Classes VI to VIII — boys' section.", "/sections/middle-boys"],
  [<GraduationCap key="e" size={22} strokeWidth={1.8} />, "Senior Girls Section", "FBISE board classes IX–XII — girls' section.", "/sections/senior-girls"],
  [<GraduationCap key="f" size={22} strokeWidth={1.8} />, "Senior Boys Section", "FBISE board classes IX–XII — boys' section.", "/sections/senior-boys"],
  [<Globe key="g" size={22} strokeWidth={1.8} />, "APSIS", "Cambridge international stream.", "/sections/apsis"],
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

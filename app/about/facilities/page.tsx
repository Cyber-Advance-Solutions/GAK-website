import { Monitor, FlaskConical, BookOpen, Palette, Trophy, Puzzle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Facilities" };

const FACILITIES: [React.ReactNode, string, string][] = [
  [<Monitor key="a" size={22} strokeWidth={1.8} />, "ICT labs", "Modern computer labs with high-speed internet for digital learning and coding."],
  [<FlaskConical key="b" size={22} strokeWidth={1.8} />, "Science laboratories", "Fully equipped Physics, Chemistry and Biology labs for hands-on experiments."],
  [<BookOpen key="c" size={22} strokeWidth={1.8} />, "Library", "A well-stocked library with reference, fiction and digital resources."],
  [<Palette key="d" size={22} strokeWidth={1.8} />, "Art & music room", "Dedicated studios nurturing creativity in visual and performing arts."],
  [<Trophy key="e" size={22} strokeWidth={1.8} />, "Sports grounds", "Cricket, football and hockey grounds with an athletics track."],
  [<Puzzle key="f" size={22} strokeWidth={1.8} />, "Activity rooms", "Flexible spaces for clubs, societies and early-years play-based learning."],
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Campus"
        title="Purpose-built Facilities"
        intro="Spaces that support academics, creativity and well-being at Garrison Academy Kharian Cantt."
        image={BANNER["about-facilities"]}
        crumb={[{ label: "About Us", href: "/about" }, { label: "Facilities" }]}
      />

      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="On campus" title="Built for learning, on and off the timetable" intro="Every space on campus is purpose-built to support academics, creativity and well-being across both academic streams." />
          <div className="linkcards">
            {FACILITIES.map(([ic, t, d]) => (
              <div className="linkcard" key={t}>
                <div className="lc-ic">{ic}</div>
                <div><h4>{t}</h4><p>{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

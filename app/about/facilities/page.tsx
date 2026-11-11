import { Monitor, FlaskConical, BookOpen, Palette, Trophy, Puzzle, Theater } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";
import { getFacilities, type Facility } from "@/lib/mappers/about";

export const metadata = { title: "Facilities" };
export const dynamic = "force-dynamic";

/** The admin has no icon field, so the icon is picked from the facility name / category. */
function FacilityIcon({ f }: { f: Facility }) {
  const p = { size: 22, strokeWidth: 1.8 };
  const s = `${f.name} ${f.category}`.toLowerCase();
  if (/ict|computer|it lab|digital/.test(s)) return <Monitor {...p} />;
  if (/science|lab|chem|phys|bio/.test(s)) return <FlaskConical {...p} />;
  if (/library|book|academic/.test(s)) return <BookOpen {...p} />;
  if (/art|music|paint/.test(s)) return <Palette {...p} />;
  if (/auditorium|theat|hall/.test(s)) return <Theater {...p} />;
  if (/sport|ground|gym|pool|court/.test(s)) return <Trophy {...p} />;
  return <Puzzle {...p} />;
}

export default async function FacilitiesPage() {
  const facilities = await getFacilities();
  return (
    <>
      <PageHero
        eyebrow="Campus"
        title="Purpose-built Facilities"
        intro="Spaces that support academics, creativity and well-being at Garrison Academy Kharian Cantt."
        image={BANNER["about-facilities"]}
        crumb={[{ label: "About Us", href: "/about" }, { label: "Facilities" }]}
      />

      {facilities.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <SectionHead eyebrow="On campus" title="Built for learning, on and off the timetable" intro="Every space on campus is purpose-built to support academics, creativity and well-being across both academic streams." />
            <div className="linkcards">
              {facilities.map((f) => (
                <div className="linkcard" key={f.id}>
                  <div className="lc-ic"><FacilityIcon f={f} /></div>
                  <div><h4>{f.name}</h4><p>{f.description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";
import { ACTIVITIES_SUBPAGES } from "@/lib/activities-data";

export const metadata = { title: "Activities" };

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Beyond the classroom"
        title="Activities"
        intro="A full calendar of academic, sporting and co-curricular life at Garrison Academy Kharian Cantt."
        image={BANNER.activities}
        crumb={[{ label: "Activities" }]}
      />

      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Get involved" title="Life beyond lessons" />
          <div className="linkcards">
            {ACTIVITIES_SUBPAGES.map((p) => (
              <Link className="linkcard" href={`/activities/${p.slug}`} key={p.slug}>
                <div><h4>{p.label}</h4><p>{p.desc}</p></div>
                <ArrowRight size={16} style={{ marginLeft: "auto", flexShrink: 0 }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead eyebrow="Campus life" title="Moments from the year" />
          <div className="gallery">
            <div className="ga big" style={{ backgroundImage: "url(/hero3.jpg)" }}><span className="cap">Sports gala</span></div>
            <div className="ga" style={{ backgroundImage: "url(/hero1.jpg)" }}><span className="cap">Science fair</span></div>
            <div className="ga" style={{ backgroundImage: "url(/hero2.jpg)" }}><span className="cap">Prize day</span></div>
          </div>
        </div>
      </section>
    </>
  );
}

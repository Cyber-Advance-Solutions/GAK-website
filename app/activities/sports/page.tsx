import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import ActivityCard from "@/components/ActivityCard";
import { BANNER } from "@/lib/images";
import { SPORTS, SPORT_IMG } from "@/lib/activities-data";

export const metadata = { title: "Sports — Activities" };

export default function SportsActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Sports"
        intro="Cricket, football, hockey, athletics and more across the school."
        image={BANNER.activities}
        crumb={[{ label: "Activities", href: "/activities" }, { label: "Sports" }]}
      />

      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Get involved" title="Sports" />
          <div className="grid g4">
            {SPORTS.map((s, i) => (
              <ActivityCard key={s} img={SPORT_IMG[i % SPORT_IMG.length]} title={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

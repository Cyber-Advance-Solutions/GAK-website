import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import ActivityCard from "@/components/ActivityCard";
import { BANNER } from "@/lib/images";
import { getActivityCategory } from "@/lib/mappers/activities";
import { SPORTS, SPORT_IMG } from "@/lib/activities-data";

export const metadata = { title: "Sports — Activities" };
export const dynamic = "force-dynamic";

export default async function SportsActivitiesPage() {
  // Hero title + intro are edited in the admin (Activities page > categories)
  const cat = await getActivityCategory("sports");
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title={cat?.title || "Sports"}
        intro={cat?.description}
        image={cat?.imageUrl || BANNER.activities}
        crumb={[{ label: "Activities", href: "/activities" }, { label: cat?.title || "Sports" }]}
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

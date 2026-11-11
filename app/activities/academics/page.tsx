import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import ActivityCard from "@/components/ActivityCard";
import { BANNER } from "@/lib/images";
import { getActivityCategory } from "@/lib/mappers/activities";
import { ACADEMIC, SPORT_IMG } from "@/lib/activities-data";

export const metadata = { title: "Academics — Activities" };
export const dynamic = "force-dynamic";

export default async function AcademicActivitiesPage() {
  // Hero title + intro are edited in the admin (Activities page > categories)
  const cat = await getActivityCategory("academics");
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title={cat?.title || "Academics"}
        intro={cat?.description}
        image={cat?.imageUrl || BANNER.activities}
        crumb={[{ label: "Activities", href: "/activities" }, { label: cat?.title || "Academics" }]}
      />

      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Get involved" title="Academic" />
          <div className="grid g3">
            {ACADEMIC.map(([t, d], i) => (
              <ActivityCard key={t} img={SPORT_IMG[i % SPORT_IMG.length]} tag="Academic" title={t} desc={d} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

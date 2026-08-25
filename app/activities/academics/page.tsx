import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import ActivityCard from "@/components/ActivityCard";
import { BANNER } from "@/lib/images";
import { ACADEMIC, SPORT_IMG } from "@/lib/activities-data";

export const metadata = { title: "Academics — Activities" };

export default function AcademicActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Academics"
        intro="Olympiads, quizzes, debates and other academic contests."
        image={BANNER.activities}
        crumb={[{ label: "Activities", href: "/activities" }, { label: "Academics" }]}
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

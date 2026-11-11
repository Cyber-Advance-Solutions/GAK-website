import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import ActivityCard from "@/components/ActivityCard";
import { BANNER } from "@/lib/images";
import { getActivityCategory } from "@/lib/mappers/activities";
import { CLUBS, COMPS, SPORT_IMG } from "@/lib/activities-data";

export const metadata = { title: "Co-curricular — Activities" };
export const dynamic = "force-dynamic";

export default async function CoCurricularActivitiesPage() {
  // Hero title + intro are edited in the admin (Activities page > categories)
  const cat = await getActivityCategory("co-curricular");
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title={cat?.title || "Co-curricular"}
        intro={cat?.description}
        image={cat?.imageUrl || BANNER.activities}
        crumb={[{ label: "Activities", href: "/activities" }, { label: cat?.title || "Co-curricular" }]}
      />

      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Get involved" title="Co-curricular" />
          <div className="grid g4" style={{ marginBottom: 34 }}>
            {CLUBS.map(([t, d], i) => (
              <ActivityCard key={t} img={SPORT_IMG[i % SPORT_IMG.length]} title={t} desc={d} />
            ))}
          </div>
          <h3 className="h-md" style={{ marginBottom: 16 }}>National &amp; international competitions</h3>
          <div className="tbl-wrap"><table className="tbl">
            <thead><tr><th>Student / team</th><th>Event</th><th>Award</th><th>Level</th></tr></thead>
            <tbody>{COMPS.map(([s, e, p, l]) => (<tr key={s + e}><td>{s}</td><td>{e}</td><td><span className="pill o">{p}</span></td><td>{l}</td></tr>))}</tbody>
          </table></div>
        </div>
      </section>
    </>
  );
}

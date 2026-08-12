import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Tabs from "@/components/Tabs";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Activities" };

const SPORTS = ["Cricket", "Football", "Hockey", "Athletics", "Basketball", "Badminton", "Table Tennis", "Taekwondo"];
const SPORT_IMG = ["/hero3.jpg", "/hero1.jpg", "/hero2.jpg"];
const ACADEMIC: [string, string][] = [
  ["Science Olympiad", "Inter-house competition fostering scientific inquiry and innovation."],
  ["Spelling Bee & Quiz", "Language and general-knowledge contests across all sections."],
  ["Debates & Declamation", "Urdu and English public-speaking forums building confidence."],
];
const CLUBS: [string, string][] = [
  ["Dramatics Society", "Stagecraft, scriptwriting and annual productions."],
  ["Astronomy Club", "Sky-watching evenings and space-science projects."],
  ["Eco / Green Club", "Campus sustainability drives and tree plantation."],
  ["Robotics & STEM", "Hands-on engineering, coding and competition builds."],
];
const COMPS: [string, string, string, string][] = [
  ["GAK Robotics Team", "National STEM Challenge", "Gold", "National"],
  ["Ayesha Hameed", "Int'l Math Olympiad", "Merit", "International"],
  ["Debating Society", "Inter-APS Debates", "Winner", "National"],
  ["Athletics Team", "Garrison Sports Gala", "Runner-up", "Regional"],
];

function ActivityCard({ img, tag, title, desc }: { img: string; tag?: string; title: string; desc?: string }) {
  return (
    <div className="streamcard">
      <div className="sc-img" style={{ backgroundImage: `url(${img})` }}>{tag ? <span className="sc-tag">{tag}</span> : null}</div>
      <div className="sc-bd"><h3 style={{ fontSize: "1.08rem" }}>{title}</h3>{desc ? <p>{desc}</p> : null}</div>
    </div>
  );
}

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
          <Tabs
            items={[
              {
                label: "Sports",
                panel: (
                  <div className="grid g4">
                    {SPORTS.map((s, i) => (
                      <ActivityCard key={s} img={SPORT_IMG[i % SPORT_IMG.length]} title={s} />
                    ))}
                  </div>
                ),
              },
              {
                label: "Co-curricular",
                panel: (
                  <>
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
                  </>
                ),
              },
              {
                label: "Academic",
                panel: (
                  <div className="grid g3">
                    {ACADEMIC.map(([t, d], i) => (
                      <ActivityCard key={t} img={SPORT_IMG[i % SPORT_IMG.length]} tag="Academic" title={t} desc={d} />
                    ))}
                  </div>
                ),
              },
            ]}
          />
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

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";
import { getActivitiesSettings } from "@/lib/mappers/activities";

export const metadata = { title: "Activities" };
export const dynamic = "force-dynamic";

export default async function ActivitiesPage() {
  const s = await getActivitiesSettings();
  return (
    <>
      <PageHero
        eyebrow={s.eyebrow || ""}
        title={s.heading || "Activities"}
        intro={s.introText}
        image={BANNER.activities}
        crumb={[{ label: "Activities" }]}
      />

      {s.categories.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <SectionHead eyebrow="Get involved" title={s.categoriesHeading || ""} />
            <div className="linkcards">
              {s.categories.map((p) => (
                <Link className="linkcard" href={p.link || `/activities/${p.key}`} key={p.key}>
                  <div><h4>{p.title}</h4>{p.description ? <p>{p.description}</p> : null}</div>
                  <ArrowRight size={16} style={{ marginLeft: "auto", flexShrink: 0 }} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {s.moments.length > 0 && (
        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <SectionHead eyebrow={s.momentsEyebrow || ""} title={s.momentsHeading || ""} intro={s.momentsSubtext || undefined} />
            <div className="gallery">
              {s.moments.map((m, i) => {
                const tile = (
                  <div
                    className={i === 0 ? "ga big" : "ga"}
                    style={m.imageUrl ? { backgroundImage: `url("${m.imageUrl}")` } : undefined}
                    title={m.caption || undefined}
                  >
                    <span className="cap">{m.title}</span>
                  </div>
                );
                return m.link ? (
                  <Link key={`${m.title}-${i}`} href={m.link} style={{ display: "contents" }}>
                    {tile}
                  </Link>
                ) : (
                  <div key={`${m.title}-${i}`} style={{ display: "contents" }}>{tile}</div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

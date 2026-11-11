import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import { OtherSectionsCard } from "@/components/SectionParts";
import { asList } from "@/lib/api";
import { facts, type SectionView } from "@/lib/mappers/sections";

/**
 * Generic page for a section added in the admin panel that has no dedicated component
 * (the seven existing sections use their own *Section components).
 */
export default function SectionDetail({ d }: { d: SectionView }) {
  const highlights = asList<any>(d.overview.highlights)
    .map((h) => (typeof h === "string" ? h : h?.title || h?.text || ""))
    .filter(Boolean);
  const paras = asList<string>(d.overview.paragraphs).filter((p) => typeof p === "string" && p);
  const gallery = d.activities.filter((a) => a.photo).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={d.sub}
        title={d.name}
        intro={d.intro}
        image={d.banner}
        crumb={[{ label: "Quick Links", href: "/quick-links" }, { label: d.name }]}
      />

      <section className="sec">
        <Editorial
          rail={
            <>
              <FactCard
                title="Section facts"
                rows={facts([
                  ["Section head", d.head?.name ?? ""],
                  ["Classes", d.classesRange],
                  ["Stream", d.stream || d.curriculum],
                  ["Timings", d.timings],
                ])}
              />
              <OtherSectionsCard others={d.others} />
            </>
          }
        >
          <section>
            <SectionHead eyebrow="Overview" title={`About ${d.name}`} />
            <div className="prose">
              {d.intro && <p>{d.intro}</p>}
              {paras.map((p, i) => <p key={i}>{p}</p>)}
              {highlights.length > 0 && (
                <>
                  <h3>Curriculum highlights</h3>
                  <ul>
                    {highlights.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                </>
              )}
            </div>
          </section>

          {d.head && d.head.message.length > 0 && (
            <section>
              <div className="quoteband" style={{ borderRadius: "var(--r)" }}>
                <div className="qb" style={{ padding: 32 }}>
                  <div className="qb-portrait" style={{ width: 96, height: 96 }}>
                    <span style={{ fontSize: "1.8rem" }}>{initials(d.head.name)}</span>
                  </div>
                  <div className="qb-body">
                    <span className="eyebrow">{d.headEyebrow || "Message from the section head"}</span>
                    <blockquote style={{ fontSize: "0.85rem" }}>{d.head.message.join(" ")}</blockquote>
                    <div className="qb-foot">
                      <div className="qb-who"><div className="nm">{d.head.name}</div><div className="rl">{d.head.role || `Head — ${d.name}`}</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          <section>
            <SectionHead eyebrow="Campus life" title={`Inside ${d.name}`} />
            {d.banner && (
              <div className="gallery">
                <div className="ga big" style={{ backgroundImage: `url(${d.banner})` }}><span className="cap">{d.name}</span></div>
                {gallery.map((g, i) => (
                  <div className="ga" key={g.id + i} style={{ backgroundImage: `url(${g.photo})` }}><span className="cap">{g.label}</span></div>
                ))}
              </div>
            )}
            <Link className="link-arrow" href="/admissions">Apply for admission <ArrowRight size={16} /></Link>
          </section>
        </Editorial>
      </section>
    </>
  );
}

function initials(name: string) {
  const parts = name.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/, "").split(" ");
  return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
}

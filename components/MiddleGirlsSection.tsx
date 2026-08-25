import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import { SECTIONS, type SectionKey } from "@/lib/data";
import { HEAD, CLASSES, MIDDLE_GIRLS_SUBPAGES } from "@/lib/middle-girls-data";

export default function MiddleGirlsSection() {
  const others = (Object.keys(SECTIONS) as SectionKey[]).filter((k) => k !== "middle-girls");
  const data = SECTIONS["middle-girls"];

  return (
    <>
      <PageHero
        eyebrow={data.sub}
        title={data.name}
        intro={data.headMsg}
        image={CLASSES[0].photo}
        crumb={[{ label: "Quick Links", href: "/quick-links" }, { label: data.name }]}
      />

      <section className="sec">
        <Editorial
          rail={
            <>
              <FactCard
                title="Section facts"
                rows={[
                  ["Section head", HEAD.name],
                  ["Classes", "IV – VIII"],
                  ["Timings", "7:45 AM – 1:45 PM"],
                ]}
              />
              <div className="factcard">
                <h4>Other sections</h4>
                <ul>
                  {others.map((k) => (
                    <li key={k} title={`${SECTIONS[k].name} - ${SECTIONS[k].sub}`} style={{ display: "block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      <Link href={`/sections/${k}`} style={{ color: "var(--green-700)", fontWeight: 600 }}>{SECTIONS[k].name}</Link>
                      <span style={{ fontWeight: 500, color: "var(--ink-soft)", marginLeft: "6px" }}>- {SECTIONS[k].sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          }
        >
          {/* Section head message */}
          <section>
            <SectionHead eyebrow="Leadership" title="Section Head" />
            <div className="quoteband" style={{ borderRadius: "var(--r)" }}>
              <div className="qb" style={{ padding: 32, alignItems: 'flex-start' }}>
                <div className="qb-portrait" style={{ width: 110, height: 110, position: "relative", overflow: "hidden", backgroundColor: '#f0f0f0' }}>
                  <Image src={HEAD.photo} alt={HEAD.name} fill sizes="110px" style={{ borderRadius: "50%", objectFit: "cover" }} />
                </div>
                <div className="qb-body">
                  <span className="eyebrow">Message from the Section Head</span>
                  <blockquote style={{ fontSize: "0.85rem" }}>
                    <p>
                      As Section Head, it gives me immense pride to introduce this digital gateway—a platform designed to seamlessly connect our vibrant campus community with the world.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                      At Garrison Academy, education extends beyond the traditional classroom. We are committed to fostering a dynamic environment where academic rigor, strong moral character, and critical thinking converge. Our goal is to nurture well-rounded, resilient individuals equipped to navigate and lead in an ever-evolving global landscape.
                    </p>
                    <p style={{ marginTop: '1rem', fontStyle: 'italic', fontWeight: 'bold' }}>
                      "We do not just teach for examinations; we educate for life, shaping minds that inquire, hearts that care, and leaders who serve."
                    </p>
                  </blockquote>
                  <div className="qb-foot">
                    <div className="qb-who"><div className="nm">{HEAD.name}</div><div className="rl">{HEAD.role}</div></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Explore the rest of the Middle Girls Section */}
          <section>
            <SectionHead eyebrow="Explore" title="More about Middle Girls Section" />
            <div className="linkcards">
              {MIDDLE_GIRLS_SUBPAGES.map((p) => (
                <Link className="linkcard" href={`/sections/middle-girls/${p.slug}`} key={p.slug}>
                  <div><h4>{p.label}</h4><p>{p.eyebrow}</p></div>
                  <ArrowRight size={16} style={{ marginLeft: "auto", flexShrink: 0 }} />
                </Link>
              ))}
            </div>
          </section>
        </Editorial>
      </section>
    </>
  );
}

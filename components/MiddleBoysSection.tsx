import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import { SECTIONS, type SectionKey } from "@/lib/data";
import { HEAD, CLASSES, MIDDLE_BOYS_SUBPAGES } from "@/lib/middle-boys-data";

export default function MiddleBoysSection() {
  const others = (Object.keys(SECTIONS) as SectionKey[]).filter((k) => k !== "middle-boys");

  return (
    <>
      <PageHero
        eyebrow="Classes VI – VIII (Boys)"
        title="Middle Boys Section"
        intro="Welcome to the Middle Boys Section, a place where curiosity turns into confidence and effort turns into achievement."
        image={CLASSES[0].photo}
        crumb={[{ label: "Quick Links", href: "/quick-links" }, { label: "Middle Boys Section" }]}
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
                  ["Stream", "APSACS · FBISE"],
                  ["Timings", "7:30 AM – 1:30 PM"],
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
              <div className="qb" style={{ padding: 32 }}>
                <div className="qb-portrait" style={{ width: 110, height: 110, position: "relative", overflow: "hidden" }}>
                  <Image src={HEAD.photo} alt={HEAD.name} fill sizes="110px" style={{ borderRadius: "50%" }} />
                </div>
                <div className="qb-body">
                  <span className="eyebrow">Message from the Section Head</span>
                  <blockquote style={{ fontSize: "0.85rem" }}>
                    Welcome to the Middle Boys Section, a place where curiosity turns into confidence and effort turns into achievement.
                    These are the years that shape not just knowledge, but character — where our students learn to think critically,
                    work collaboratively, and believe in their own potential. Our dedicated teachers walk alongside every child,
                    encouraging them to ask bold questions, embrace challenges, and grow into responsible, compassionate individuals.
                    I am proud to lead a team that nurtures both minds and hearts, and I invite every student in this section to
                    dream big, work hard, and know that we are with them every step of the way.
                  </blockquote>
                  <div className="qb-foot">
                    <div className="qb-who"><div className="nm">{HEAD.name}</div><div className="rl">{HEAD.role} — {HEAD.qualification}</div></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Explore the rest of the Middle Boys Section */}
          {/* <section>
            <SectionHead eyebrow="Explore" title="More about Middle Boys Section" />
            <div className="linkcards">
              {MIDDLE_BOYS_SUBPAGES.map((p) => (
                <Link className="linkcard" href={`/sections/middle-boys/${p.slug}`} key={p.slug}>
                  <div><h4>{p.label}</h4><p>{p.eyebrow}</p></div>
                  <ArrowRight size={16} style={{ marginLeft: "auto", flexShrink: 0 }} />
                </Link>
              ))}
            </div>
          </section> */}
        </Editorial>
      </section>
    </>
  );
}

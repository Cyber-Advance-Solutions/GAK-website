import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import { SECTIONS, type SectionKey } from "@/lib/data";
import { SECTION_HEAD, DEPUTY_HEAD, IMG, SENIOR_BOYS_SUBPAGES } from "@/lib/senior-boys-data";

export default function SeniorBoysSection() {
  const others = (Object.keys(SECTIONS) as SectionKey[]).filter((k) => k !== "senior-boys");
  const data = SECTIONS["senior-boys"];

  return (
    <>
      <PageHero
        eyebrow={data.sub}
        title={data.name}
        intro={data.headMsg}
        image={IMG("atiq-ur-rehman.jpg")}
        crumb={[{ label: "Quick Links", href: "/quick-links" }, { label: data.name }]}
      />

      <section className="sec">
        <Editorial
          rail={
            <>
              <FactCard
                title="Section facts"
                rows={[
                  ["Acting Section Head", SECTION_HEAD.name],
                  ["Deputy Head", DEPUTY_HEAD.name],
                  ["Classes", "IX – XII (Boys)"],
                  ["Curriculum", "FBISE Board"],
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
          {/* Section Head Message */}
          <section>
             <SectionHead eyebrow="Leadership" title="Acting Section Head" />
            <div className="quoteband" style={{ borderRadius: "var(--r)" }}>
              <div className="qb" style={{ padding: 32, alignItems: "flex-start" }}>
                <div className="qb-portrait" style={{ width: 110, height: 110, position: "relative", overflow: "hidden", backgroundColor: "#f0f0f0", borderRadius: "50%", flexShrink: 0 }}>
                  <Image src={SECTION_HEAD.photo} alt={SECTION_HEAD.name} fill sizes="110px" style={{ objectFit: "cover" }} />
                </div>
                <div className="qb-body">
                  <span className="eyebrow">Message from the Acting Section Head</span>
                  <blockquote style={{ fontSize: "0.85rem", borderLeft: "none", paddingLeft: 0, marginTop: "1rem", fontStyle: "normal" }}>
                    <p>Welcome to the Senior Boys Section.</p>
                    <p style={{ marginTop: "1rem" }}>
                      Where ambition meets excellence, and today&rsquo;s learners become tomorrow&rsquo;s leaders.
                    </p>
                    <p style={{ marginTop: "1rem" }}>
                      These defining years are where passion turns into purpose and dreams take shape. In the Senior Boys Section, we don&rsquo;t just prepare our students for exams — we prepare them for life. We challenge our young men to think critically, lead with integrity, and embrace every opportunity with confidence.
                    </p>
                    <p style={{ marginTop: "1rem" }}>
                      Aim high, work hard, and step boldly into your future. We are here to guide and support you every step of the way!
                    </p>
                  </blockquote>
                  <div className="qb-foot" style={{ marginTop: "1.5rem" }}>
                    <div className="qb-who">
                      <div className="nm">{SECTION_HEAD.name}</div>
                      <div className="rl">{SECTION_HEAD.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Explore the rest of the Senior Boys Section */}
          {/* <section>
            <SectionHead eyebrow="Explore" title="More about Senior Boys Section" />
            <div className="linkcards">
              {SENIOR_BOYS_SUBPAGES.map((p) => (
                <Link className="linkcard" href={`/sections/senior-boys/${p.slug}`} key={p.slug}>
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

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import { SECTIONS, type SectionKey } from "@/lib/data";
import { HEAD, CLASSES, PRE_SUBPAGES } from "@/lib/pre-school-data";

export default function PreSchoolSection() {
  const others = (Object.keys(SECTIONS) as SectionKey[]).filter((k) => k !== "pre");
  const data = SECTIONS["pre"];

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
                  ["Classes", "EYS-I – Pre-I"],
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
                      The Pre-School Section at Army Public School & College Garrison Academy Kharian Cantt holds a rich history of nurturing young minds that dates back to its inception as Toddler Nursery in 1972. Over the decades, our institution evolved into Kehkashaan Academy in 1986, joined the Army Public Schools network in 1990, and established its identity at the Garrison Academy Kharian Cantt in 2000. Built on this 50-year legacy of educational care, our early childhood programme lays a strong foundation for lifelong learning, character, and confidence.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                      Housed in a safe, vibrant, and child-centered environment, our Pre-School features engaging classrooms and stimulating learning spaces where young learners feel valued, inspired, and encouraged to explore their full potential. We believe that every child is unique and deserves the opportunity to learn, grow, and thrive at their own pace.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                      Our dedicated team of educators is committed to delivering a nurturing education that fosters curiosity, creativity, effective communication, and strong moral values. Through play-based learning, interactive activities, and a supportive school culture, we empower our youngest learners to build independence and empathy.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                      At APS&C Garrison Academy Kharian Cantt, we believe a strong partnership between home and school is essential for a child's success. Together with our parents, we are committed to building confident, compassionate, and responsible learners who are joyful, curious, and well-prepared for the future.
                    </p>
                  </blockquote>
                  <div className="qb-foot">
                    <div className="qb-who"><div className="nm">{HEAD.name}</div><div className="rl">{HEAD.role}</div></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Explore the rest of the Pre-School section */}
          <section>
            <SectionHead eyebrow="Explore" title="More about Pre-School" />
            <div className="linkcards">
              {PRE_SUBPAGES.map((p) => (
                <Link className="linkcard" href={`/sections/pre/${p.slug}`} key={p.slug}>
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

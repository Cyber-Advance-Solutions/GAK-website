import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import { SECTIONS, type SectionKey } from "@/lib/data";
import { VICE_PRINCIPAL, SECTION_HEAD as APSIS_SECTION_HEAD, IMG, APSIS_SUBPAGES } from "@/lib/apsis-data";

export default function APSISSection() {
  const others = (Object.keys(SECTIONS) as SectionKey[]).filter((k) => k !== "apsis");
  const data = SECTIONS["apsis"];

  return (
    <>
      <PageHero
        eyebrow={data.sub}
        title={data.name}
        intro={data.headMsg}
        image={IMG("apsis-faculty.jpg")}
        crumb={[{ label: "Quick Links", href: "/quick-links" }, { label: data.name }]}
      />

      <section className="sec">
        <Editorial
          rail={
            <>
              <FactCard
                title="Section facts"
                rows={[
                  ["Vice Principal", VICE_PRINCIPAL.name],
                  ["Section Head", APSIS_SECTION_HEAD.name],
                  ["Curriculum", "Cambridge Stream"],
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
          {/* Vice Principal Message */}
          <section>
            <SectionHead eyebrow="Leadership" title="Vice Principal" />
            <div className="quoteband" style={{ borderRadius: "var(--r)", marginBottom: "3rem" }}>
              <div className="qb" style={{ padding: 32, alignItems: 'flex-start' }}>
                <div className="qb-portrait" style={{ width: 110, height: 110, position: "relative", overflow: "hidden", backgroundColor: '#f0f0f0', borderRadius: "50%", flexShrink: 0 }}>
                  <Image src={VICE_PRINCIPAL.photo} alt={VICE_PRINCIPAL.name} fill sizes="110px" style={{ objectFit: 'cover' }} />
                </div>

                <div className="qb-body">
                  <span className="eyebrow">Message from the Vice Principal</span>
                  <blockquote style={{ fontSize: "0.85rem", borderLeft: 'none', paddingLeft: 0, marginTop: '1rem', fontStyle: 'normal' }}>
                    <p>The Cambridge Stream at Army Public School for International Studies (APSIS) was established in 2020 with a vision to provide internationally benchmarked education that inspires academic excellence, critical thinking, and lifelong learning. Today, the programme proudly offers the Cambridge curriculum from Stage 1 to O Level III, providing students with a strong foundation for higher education and future success.</p>
                    <p style={{ marginTop: '1rem' }}>Now housed in a state-of-the-art campus featuring modern classrooms, well-equipped laboratories, and innovative learning spaces, the Cambridge Stream offers an environment where students are encouraged to explore, create, and excel.</p>
                    <p style={{ marginTop: '1rem' }}>Our dedicated faculty is committed to delivering a learner-centered education that develops confidence, curiosity, leadership, and global perspectives. Through rigorous academics, co-curricular opportunities, and a supportive school culture, we empower every learner to realize their full potential. Rather than remaining fixed in traditional approaches, we embrace innovation and welcome meaningful improvements, continually refining our educational practices to provide the highest quality learning experience for every student.</p>
                    <p style={{ marginTop: '1.5rem', fontWeight: 600, textAlign: 'center', color: 'var(--green-700)' }}>At APSIS, we are committed to shaping confident, responsible, and compassionate global citizens<br />Prepared to thrive in an ever-changing world!</p>
                  </blockquote>
                  <div className="qb-foot" style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                    <div className="qb-who">
                      <div className="nm">{VICE_PRINCIPAL.name}</div>
                      <div className="rl">{VICE_PRINCIPAL.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Explore the rest of the APSIS Section */}
          <section>
            <SectionHead eyebrow="Explore" title="More about APSIS" />
            <div className="linkcards">
              {APSIS_SUBPAGES.map((p) => (
                <Link className="linkcard" href={`/sections/apsis/${p.slug}`} key={p.slug}>
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

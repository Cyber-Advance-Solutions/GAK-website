import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";
import { SECTIONS, type SectionData, type SectionKey } from "@/lib/data";

const CURRICULUM: Record<SectionKey, string[]> = {
  pre: [
    "Play-based early literacy and numeracy",
    "Phonics, storytelling and motor-skills development",
    "Islamiat, social skills and structured free play",
  ],
  junior: [
    "National curriculum foundations across core subjects",
    "Structured literacy, numeracy and Islamiat",
    "House activities and early co-curricular exposure",
  ],
  "middle-girls": [
    "National curriculum across core subjects",
    "Computer studies and general science",
    "Study-skills, assessments and house activities",
  ],
  "middle-boys": [
    "National curriculum across core subjects",
    "Computer studies and general science",
    "Study-skills, assessments and house activities",
  ],
  "senior-girls": [
    "FBISE board curriculum (IX–XII)",
    "Science, Pre-Medical, Pre-Engineering and ICS groups",
    "Regular tests, practicals and board preparation",
  ],
  "senior-boys": [
    "FBISE board curriculum (IX–XII)",
    "Science, Pre-Medical, Pre-Engineering and ICS groups",
    "Regular tests, practicals and board preparation",
  ],
  apsis: [
    "Cambridge Lower Secondary, IGCSE and A-Level pathways",
    "Internationally benchmarked assessment",
    "University guidance for study at home and abroad",
  ],
};

export default function SectionDetail({ data, slug }: { data: SectionData; slug: SectionKey }) {
  const streamBadge = data.cambridge ? "APSIS · Cambridge" : "APSACS · FBISE";
  const others = (Object.keys(SECTIONS) as SectionKey[]).filter((k) => k !== slug);

  return (
    <>
      <PageHero
        eyebrow={data.sub}
        title={data.name}
        intro={data.headMsg}
        image={BANNER[slug]}
        crumb={[{ label: "Quick Links", href: "/quick-links" }, { label: data.name }]}
      />

      <section className="sec">
        <Editorial
          rail={
            <>
              <FactCard
                title="Section facts"
                rows={[
                  ["Section head", data.head],
                  ["Classes", data.sub],
                  ["Stream", streamBadge],
                  ["Timings", "7:45 AM – 1:45 PM"],
                ]}
              />
              <div className="factcard">
                <h4>Other sections</h4>
                <ul>
                  {others.map((k) => (
                    <li key={k}>
                      <Link href={`/sections/${k}`} style={{ color: "var(--green-700)", fontWeight: 600 }}>{SECTIONS[k].name}</Link>
                      <b style={{ fontWeight: 500, color: "var(--ink-soft)" }}>{SECTIONS[k].sub}</b>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          }
        >
          <section>
            <SectionHead eyebrow="Overview" title={`About ${data.name}`} />
            <div className="prose">
              <p>{data.headMsg}</p>
              {data.extra ? <p>{data.extra}</p> : null}
              <h3>Curriculum highlights</h3>
              <ul>
                {CURRICULUM[slug].map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
          </section>

          <section>
            <div className="quoteband" style={{ borderRadius: "var(--r)" }}>
              <div className="qb" style={{ padding: 32 }}>
                <div className="qb-portrait" style={{ width: 96, height: 96 }}>
                  <span style={{ fontSize: "1.8rem" }}>{initials(data.head)}</span>
                </div>
                <div className="qb-body">
                  <span className="eyebrow">Message from the section head</span>
                  <blockquote style={{ fontSize: "1.3rem" }}>{data.headMsg}</blockquote>
                  <div className="qb-foot">
                    <div className="qb-who"><div className="nm">{data.head}</div><div className="rl">Head — {data.name}</div></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <SectionHead eyebrow="Campus life" title={`Inside ${data.name}`} />
            <div className="gallery">
              <div className="ga big" style={{ backgroundImage: `url(${BANNER[slug]})` }}><span className="cap">{data.name}</span></div>
              <div className="ga" style={{ backgroundImage: "url(/hero1.jpg)" }}><span className="cap">Classrooms</span></div>
              <div className="ga" style={{ backgroundImage: "url(/hero2.jpg)" }}><span className="cap">Library</span></div>
            </div>
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

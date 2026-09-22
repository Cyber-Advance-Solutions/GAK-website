import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import { SECTIONS, type SectionKey } from "@/lib/data";
import {
  SECTION_HEAD,
  DEPUTY_HEAD,
  IMG,
  FACILITIES_CAMPUS,
  FACILITIES_ACADEMIC,
} from "@/lib/senior-girls-data";

// Helper for facilities bullet list
function FacilityList({ items }: { items: string[] }) {
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        paddingLeft: 0,
        listStyle: "none",
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            display: "flex",
            gap: "0.75rem",
            alignItems: "flex-start",
            padding: "0.85rem 1rem",
            background: "var(--paper)",
            border: "1px solid var(--line)",
            borderRadius: "var(--r)",
            fontSize: "0.93rem",
            color: "var(--ink)",
          }}
        >
          <span
            style={{
              flexShrink: 0,
              width: 8,
              height: 8,
              marginTop: 6,
              borderRadius: "50%",
              background: "var(--gold-500)",
            }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function SeniorGirlsSection() {
  const others = (Object.keys(SECTIONS) as SectionKey[]).filter(
    (k) => k !== "senior-girls"
  );
  const data = SECTIONS["senior-girls"];

  return (
    <>
      <PageHero
        eyebrow={data.sub}
        title={data.name}
        intro={data.headMsg}
        image={IMG("sobia-altaf.jpg")}
        crumb={[
          { label: "Quick Links", href: "/quick-links" },
          { label: data.name },
        ]}
      />

      <section className="sec">
        <Editorial
          rail={
            <>
              <FactCard
                title="Section facts"
                rows={[
                  ["Section Head", SECTION_HEAD.name],
                  ["Deputy Head", DEPUTY_HEAD.name],
                  ["Classes", "IX – XII (Girls)"],
                  ["Curriculum", "FBISE Board"],
                ]}
              />
              <div className="factcard">
                <h4>Other sections</h4>
                <ul>
                  {others.map((k) => (
                    <li
                      key={k}
                      title={`${SECTIONS[k].name} - ${SECTIONS[k].sub}`}
                      style={{
                        display: "block",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <Link
                        href={`/sections/${k}`}
                        style={{ color: "var(--green-700)", fontWeight: 600 }}
                      >
                        {SECTIONS[k].name}
                      </Link>
                      <span
                        style={{
                          fontWeight: 500,
                          color: "var(--ink-soft)",
                          marginLeft: "6px",
                        }}
                      >
                        - {SECTIONS[k].sub}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          }
        >
          {/* ── Section Head Message ── */}
          <section>
            <SectionHead eyebrow="Leadership" title="Section Head" />
            <div className="quoteband" style={{ borderRadius: "var(--r)" }}>
              <div
                className="qb"
                style={{ padding: 32, alignItems: "flex-start" }}
              >
                <div
                  className="qb-portrait"
                  style={{
                    width: 110,
                    height: 110,
                    position: "relative",
                    overflow: "hidden",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={SECTION_HEAD.photo}
                    alt={SECTION_HEAD.name}
                    fill
                    sizes="110px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="qb-body">
                  <span className="eyebrow">Message from the Section Head</span>
                  <blockquote
                    style={{
                      fontSize: "0.85rem",
                      borderLeft: "none",
                      paddingLeft: 0,
                      marginTop: "1rem",
                      fontStyle: "normal",
                    }}
                  >
                    <p>It is my privilege to welcome you to the Senior Wing.</p>
                    <p style={{ marginTop: "1rem" }}>
                      Our mission is to maintain the highest benchmarks of
                      academic quality, character development, and student
                      performance. By aligning our curriculum with modern
                      educational frameworks and providing robust support across
                      academics and co-curricular pursuits, we prepare our
                      students to excel in national and competitive landscapes.
                    </p>
                    <p style={{ marginTop: "1rem" }}>
                      With experienced faculty, modern laboratories, and a
                      structured, student-centered approach, we cultivate an
                      atmosphere of accountability, critical thinking, and
                      excellence. We remain dedicated to guiding our young
                      scholars as they transition into confident, self-driven
                      leaders of tomorrow.
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

          {/* ── Facilities ── */}
          {(FACILITIES_CAMPUS.length > 0 || FACILITIES_ACADEMIC.length > 0) && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Campus" title="Facilities" />
              {FACILITIES_CAMPUS.length > 0 && (
                <>
                  <h3 style={{ margin: "1.5rem 0 1rem" }}>Campus Facilities</h3>
                  <FacilityList items={FACILITIES_CAMPUS} />
                </>
              )}
              {FACILITIES_ACADEMIC.length > 0 && (
                <>
                  <h3 style={{ margin: "2rem 0 1rem" }}>Academic Facilities</h3>
                  <FacilityList items={FACILITIES_ACADEMIC} />
                </>
              )}
            </section>
          )}
        </Editorial>
      </section>
    </>
  );
}

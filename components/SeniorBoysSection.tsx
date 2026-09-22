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
} from "@/lib/senior-boys-data";

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

export default function SeniorBoysSection() {
  const others = (Object.keys(SECTIONS) as SectionKey[]).filter(
    (k) => k !== "senior-boys"
  );
  const data = SECTIONS["senior-boys"];

  return (
    <>
      <PageHero
        eyebrow={data.sub}
        title={data.name}
        intro={data.headMsg}
        image={IMG("atiq-ur-rehman.jpg")}
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
            <SectionHead eyebrow="Leadership" title="Acting Section Head" />
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
                  <span className="eyebrow">
                    Message from the Acting Section Head
                  </span>
                  <blockquote
                    style={{
                      fontSize: "0.85rem",
                      borderLeft: "none",
                      paddingLeft: 0,
                      marginTop: "1rem",
                      fontStyle: "normal",
                    }}
                  >
                    <p>Welcome to the Senior Boys Section.</p>
                    <p style={{ marginTop: "1rem" }}>
                      Where ambition meets excellence, and today&rsquo;s
                      learners become tomorrow&rsquo;s leaders.
                    </p>
                    <p style={{ marginTop: "1rem" }}>
                      These defining years are where passion turns into purpose
                      and dreams take shape. In the Senior Boys Section, we
                      don&rsquo;t just prepare our students for exams — we
                      prepare them for life. We challenge our young men to think
                      critically, lead with integrity, and embrace every
                      opportunity with confidence.
                    </p>
                    <p style={{ marginTop: "1rem" }}>
                      Aim high, work hard, and step boldly into your future. We
                      are here to guide and support you every step of the way!
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

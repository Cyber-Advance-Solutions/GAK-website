import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import { SECTIONS, type SectionKey } from "@/lib/data";
import {
  HEAD,
  CLASSES,
  ACTIVITIES,
  ACHIEVEMENTS,
  FACILITIES_CAMPUS,
  FACILITIES_ACADEMIC,
} from "@/lib/middle-boys-data";

export default function MiddleBoysSection() {
  const others = (Object.keys(SECTIONS) as SectionKey[]).filter(
    (k) => k !== "middle-boys"
  );

  return (
    <>
      <PageHero
        eyebrow="Classes IV – VIII (Boys)"
        title="Middle Boys Section"
        intro="Welcome to the Middle Boys Section, a place where curiosity turns into confidence and effort turns into achievement."
        image={CLASSES[0].photo}
        crumb={[
          { label: "Quick Links", href: "/quick-links" },
          { label: "Middle Boys Section" },
        ]}
      />

      <section className="sec">
        <Editorial
          rail={
            <>
              <FactCard
                title="Section facts"
                rows={[
                  ["Section Head", HEAD.name],
                  ["Classes", "IV – VIII"],
                  ["Stream", "APSACS · FBISE"],
                  ["Timings", "7:30 AM – 1:30 PM"],
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
              <div className="qb" style={{ padding: 32, alignItems: "flex-start" }}>
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
                    src={HEAD.photo}
                    alt={HEAD.name}
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
                    Welcome to the Middle Boys Section, a place where curiosity
                    turns into confidence and effort turns into achievement.
                    These are the years that shape not just knowledge, but
                    character — where our students learn to think critically,
                    work collaboratively, and believe in their own potential.
                    Our dedicated teachers walk alongside every child,
                    encouraging them to ask bold questions, embrace challenges,
                    and grow into responsible, compassionate individuals. I am
                    proud to lead a team that nurtures both minds and hearts,
                    and I invite every student in this section to dream big,
                    work hard, and know that we are with them every step of the
                    way.
                  </blockquote>
                  <div className="qb-foot" style={{ marginTop: "1.5rem" }}>
                    <div className="qb-who">
                      <div className="nm">{HEAD.name}</div>
                      <div className="rl">
                        {HEAD.role} — {HEAD.qualification}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Activities (calendar) ── */}
          {ACTIVITIES.length > 0 && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Academic Year 2026–27" title="Activities" />
              <div className="tbl-wrap">
                <table className="tbl">
                  <thead>
                    <tr>
                      <th style={{ width: "30%" }}>Date</th>
                      <th>Event</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ACTIVITIES.map(([date, event], i) => (
                      <tr key={i}>
                        <td
                          style={{
                            color: "var(--gold-600)",
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {date}
                        </td>
                        <td>{event}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* ── Achievements ── */}
          {ACHIEVEMENTS.length > 0 && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Recognition" title="Achievements" />
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  paddingLeft: 0,
                  listStyle: "none",
                }}
              >
                {ACHIEVEMENTS.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "center",
                      padding: "0.85rem 1.25rem",
                      background: "var(--green-tint)",
                      border: "1px solid var(--line)",
                      borderRadius: "var(--r)",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--green-900)",
                    }}
                  >
                    <span style={{ fontSize: "1.3rem" }}>🏆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ── Facilities ── */}
          {(FACILITIES_CAMPUS.length > 0 || FACILITIES_ACADEMIC.length > 0) && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Campus" title="Facilities" />
              {FACILITIES_CAMPUS.length > 0 && (
                <>
                  <h3 style={{ marginBottom: "1rem", marginTop: "1.5rem" }}>
                    Campus Facilities
                  </h3>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                      paddingLeft: 0,
                      listStyle: "none",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {FACILITIES_CAMPUS.map((item, i) => (
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
                </>
              )}
              {FACILITIES_ACADEMIC.length > 0 && (
                <>
                  <h3 style={{ marginBottom: "1rem" }}>Academic Facilities</h3>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                      paddingLeft: 0,
                      listStyle: "none",
                    }}
                  >
                    {FACILITIES_ACADEMIC.map((item, i) => (
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
                </>
              )}
            </section>
          )}
        </Editorial>
      </section>
    </>
  );
}

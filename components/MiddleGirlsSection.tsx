import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import StaffCard from "@/components/StaffCard";
import { SECTIONS, type SectionKey } from "@/lib/data";
import {
  HEAD,
  CLASSES,
  ACTIVITIES,
  POSITION_HOLDERS,
  FACILITIES,
} from "@/lib/middle-girls-data";

export default function MiddleGirlsSection() {
  const others = (Object.keys(SECTIONS) as SectionKey[]).filter(
    (k) => k !== "middle-girls"
  );
  const data = SECTIONS["middle-girls"];

  return (
    <>
      <PageHero
        eyebrow={data.sub}
        title={data.name}
        intro={data.headMsg}
        image={CLASSES[0].photo}
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
                  ["Section Head", HEAD.name],
                  ["Classes", "IV – VIII"],
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
                  }}
                >
                  <Image
                    src={HEAD.photo}
                    alt={HEAD.name}
                    fill
                    sizes="110px"
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
                </div>
                <div className="qb-body">
                  <span className="eyebrow">Message from the Section Head</span>
                  <blockquote style={{ fontSize: "0.85rem" }}>
                    <p>
                      As Section Head, it gives me immense pride to introduce
                      this digital gateway — a platform designed to seamlessly
                      connect our vibrant campus community with the world.
                    </p>
                    <p style={{ marginTop: "1rem" }}>
                      At Garrison Academy, education extends beyond the
                      traditional classroom. We are committed to fostering a
                      dynamic environment where academic rigour, strong moral
                      character, and critical thinking converge. Our goal is to
                      nurture well-rounded, resilient individuals equipped to
                      navigate and lead in an ever-evolving global landscape.
                    </p>
                    <p
                      style={{
                        marginTop: "1rem",
                        fontStyle: "italic",
                        fontWeight: "bold",
                      }}
                    >
                      &ldquo;We do not just teach for examinations; we educate
                      for life, shaping minds that inquire, hearts that care,
                      and leaders who serve.&rdquo;
                    </p>
                  </blockquote>
                  <div className="qb-foot">
                    <div className="qb-who">
                      <div className="nm">{HEAD.name}</div>
                      <div className="rl">{HEAD.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Activities (calendar) ── */}
          {ACTIVITIES.length > 0 && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Calendar" title="Activities" />
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
                        <td style={{ color: "var(--gold-600)", fontWeight: 600, whiteSpace: "nowrap" }}>
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

          {/* ── High Achievers / Position Holders ── */}
          {POSITION_HOLDERS.length > 0 && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Awards" title="Position Holders" />
              {POSITION_HOLDERS.map((cls) => (
                <div key={cls.class} style={{ marginBottom: "2rem" }}>
                  <h3 style={{ marginBottom: "1rem" }}>{cls.class}</h3>
                  <div className="staffgrid">
                    {cls.students.map((s) => (
                      <StaffCard key={s.name + s.photo} s={s} />
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* ── Facilities ── */}
          {FACILITIES.length > 0 && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Campus" title="Facilities" />
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  paddingLeft: 0,
                  listStyle: "none",
                }}
              >
                {FACILITIES.map((item, i) => (
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
            </section>
          )}
        </Editorial>
      </section>
    </>
  );
}

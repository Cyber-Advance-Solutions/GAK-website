import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import StaffCard from "@/components/StaffCard";
import { SECTIONS, type SectionKey } from "@/lib/data";
import {
  VICE_PRINCIPAL,
  SECTION_HEAD as APSIS_SECTION_HEAD,
  IMG,
  ACTIVITIES,
  ACHIEVEMENTS_HRCA_ENG_SCI,
  ACHIEVEMENTS_ICATS_MATH,
  ACHIEVEMENTS_HRCA_MATH_GK,
  FACILITIES_CAMPUS,
  FACILITIES_TECH,
} from "@/lib/apsis-data";

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

export default function APSISSection() {
  const others = (Object.keys(SECTIONS) as SectionKey[]).filter(
    (k) => k !== "apsis"
  );
  const data = SECTIONS["apsis"];

  const allAchievers = [
    ...ACHIEVEMENTS_HRCA_ENG_SCI,
    ...ACHIEVEMENTS_ICATS_MATH,
    ...ACHIEVEMENTS_HRCA_MATH_GK,
  ];

  return (
    <>
      <PageHero
        eyebrow={data.sub}
        title={data.name}
        intro={data.headMsg}
        image={IMG("apsis-faculty.jpg")}
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
                  ["Vice Principal", VICE_PRINCIPAL.name],
                  ["Section Head", APSIS_SECTION_HEAD.name],
                  ["Curriculum", "Cambridge Stream"],
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
          {/* ── Vice Principal Message ── */}
          <section>
            <SectionHead eyebrow="Leadership" title="Vice Principal" />
            <div
              className="quoteband"
              style={{ borderRadius: "var(--r)", marginBottom: "3rem" }}
            >
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
                    src={VICE_PRINCIPAL.photo}
                    alt={VICE_PRINCIPAL.name}
                    fill
                    sizes="110px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="qb-body">
                  <span className="eyebrow">
                    Message from the Vice Principal
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
                    <p>
                      The Cambridge Stream at Army Public School for
                      International Studies (APSIS) was established in 2020 with
                      a vision to provide internationally benchmarked education
                      that inspires academic excellence, critical thinking, and
                      lifelong learning. Today, the programme proudly offers the
                      Cambridge curriculum from Stage&nbsp;1 to O Level III,
                      providing students with a strong foundation for higher
                      education and future success.
                    </p>
                    <p style={{ marginTop: "1rem" }}>
                      Now housed in a state-of-the-art campus featuring modern
                      classrooms, well-equipped laboratories, and innovative
                      learning spaces, the Cambridge Stream offers an environment
                      where students are encouraged to explore, create, and
                      excel.
                    </p>
                    <p style={{ marginTop: "1rem" }}>
                      Our dedicated faculty is committed to delivering a
                      learner-centered education that develops confidence,
                      curiosity, leadership, and global perspectives. Through
                      rigorous academics, co-curricular opportunities, and a
                      supportive school culture, we empower every learner to
                      realize their full potential.
                    </p>
                    <p
                      style={{
                        marginTop: "1.5rem",
                        fontWeight: 600,
                        textAlign: "center",
                        color: "var(--green-700)",
                      }}
                    >
                      At APSIS, we are committed to shaping confident,
                      responsible, and compassionate global citizens —
                      prepared to thrive in an ever-changing world!
                    </p>
                  </blockquote>
                  <div
                    className="qb-foot"
                    style={{ marginTop: "2rem" }}
                  >
                    <div className="qb-who">
                      <div className="nm">{VICE_PRINCIPAL.name}</div>
                      <div className="rl">{VICE_PRINCIPAL.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Activities (photo grid) ── */}
          {ACTIVITIES.length > 0 && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Curriculum" title="Activities" />
              <div className="classgrid">
                {ACTIVITIES.map((a) => (
                  <div className="figure" key={a.label + a.photo}>
                    <div
                      className="fimg"
                      style={{ backgroundColor: "#f0f0f0" }}
                    >
                      <Image
                        src={a.photo}
                        alt={a.label}
                        fill
                        sizes="(max-width: 820px) 100vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <figcaption
                      style={{ fontSize: "0.9rem", lineHeight: "1.2" }}
                    >
                      {a.label}
                    </figcaption>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── High Achievers ── */}
          {allAchievers.length > 0 && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Recognition" title="High Achievers" />
              {ACHIEVEMENTS_HRCA_ENG_SCI.length > 0 && (
                <>
                  <h3 style={{ margin: "1.5rem 0 1rem" }}>
                    HRCA English &amp; Science Quiz
                  </h3>
                  <div className="staffgrid">
                    {ACHIEVEMENTS_HRCA_ENG_SCI.map((s) => (
                      <StaffCard key={s.name + s.photo} s={s} />
                    ))}
                  </div>
                </>
              )}
              {ACHIEVEMENTS_ICATS_MATH.length > 0 && (
                <>
                  <h3 style={{ margin: "2rem 0 1rem" }}>
                    ICATS Mathematics Contest
                  </h3>
                  <div className="staffgrid">
                    {ACHIEVEMENTS_ICATS_MATH.map((s) => (
                      <StaffCard key={s.name + s.photo} s={s} />
                    ))}
                  </div>
                </>
              )}
              {ACHIEVEMENTS_HRCA_MATH_GK.length > 0 && (
                <>
                  <h3 style={{ margin: "2rem 0 1rem" }}>
                    HRCA Maths &amp; GK
                  </h3>
                  <div className="staffgrid">
                    {ACHIEVEMENTS_HRCA_MATH_GK.map((s) => (
                      <StaffCard key={s.name + s.photo} s={s} />
                    ))}
                  </div>
                </>
              )}
            </section>
          )}

          {/* ── Facilities ── */}
          {(FACILITIES_CAMPUS.length > 0 || FACILITIES_TECH.length > 0) && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Campus" title="Facilities" />
              {FACILITIES_CAMPUS.length > 0 && (
                <>
                  <h3 style={{ margin: "1.5rem 0 1rem" }}>Campus Facilities</h3>
                  <FacilityList items={FACILITIES_CAMPUS} />
                </>
              )}
              {FACILITIES_TECH.length > 0 && (
                <>
                  <h3 style={{ margin: "2rem 0 1rem" }}>
                    Technology &amp; ICT
                  </h3>
                  <FacilityList items={FACILITIES_TECH} />
                </>
              )}
            </section>
          )}
        </Editorial>
      </section>
    </>
  );
}

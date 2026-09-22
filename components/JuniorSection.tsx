import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import StaffCard from "@/components/StaffCard";
import { SECTIONS, type SectionKey } from "@/lib/data";
import { HEAD, IMG, ACTIVITIES, HIGH_ACHIEVERS } from "@/lib/junior-data";

export default function JuniorSection() {
  const others = (Object.keys(SECTIONS) as SectionKey[]).filter(
    (k) => k !== "junior"
  );
  const data = SECTIONS["junior"];

  return (
    <>
      <PageHero
        eyebrow={data.sub}
        title={data.name}
        intro={data.headMsg}
        image={IMG("class.jpg")}
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
                  ["Classes", "I – III"],
                  ["Curriculum", "APSACS"],
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
                    <p>
                      Welcome to the Junior Section, where every child&rsquo;s
                      learning journey begins with curiosity, confidence, and
                      care. We believe that the early years are the foundation
                      for lifelong learning, and our goal is to provide a safe,
                      nurturing, and stimulating environment in which every child
                      can thrive.
                    </p>
                    <p style={{ marginTop: "1rem" }}>
                      Our dedicated teachers inspire young minds through
                      engaging, child-centered learning experiences that promote
                      academic excellence, creativity, critical thinking, and
                      strong moral values. We encourage our students to become
                      confident communicators, responsible individuals, and
                      compassionate members of society.
                    </p>
                    <p style={{ marginTop: "1rem" }}>
                      We value the strong partnership between school and home,
                      recognizing that parents play an essential role in every
                      child&rsquo;s success. Together, we strive to create
                      meaningful learning experiences that help our children grow
                      intellectually, socially, emotionally, and spiritually.
                    </p>
                    <p style={{ marginTop: "1rem" }}>
                      As you explore our Junior Section, you will discover a
                      vibrant community where every child is encouraged to dream,
                      explore, and achieve their fullest potential. We remain
                      committed to nurturing confident, lifelong learners who are
                      prepared to meet future challenges with resilience,
                      integrity, and enthusiasm.
                    </p>
                  </blockquote>
                  <div className="qb-foot" style={{ marginTop: "1.5rem" }}>
                    <div className="qb-who">
                      <div className="nm">{HEAD.name}</div>
                      <div className="rl">{HEAD.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Activities ── */}
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
          {HIGH_ACHIEVERS.length > 0 && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Recognition" title="High Achievers" />
              <div className="staffgrid">
                {HIGH_ACHIEVERS.map((s, i) => (
                  <StaffCard key={s.name + s.photo + i} s={s} />
                ))}
              </div>
              <Link
                className="link-arrow"
                href="/admissions"
                style={{ marginTop: "2rem", display: "flex" }}
              >
                Apply for admission
              </Link>
            </section>
          )}
        </Editorial>
      </section>
    </>
  );
}

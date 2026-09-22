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
  HIGH_ACHIEVERS,
  FACILITIES,
} from "@/lib/pre-school-data";

export default function PreSchoolSection() {
  const others = (Object.keys(SECTIONS) as SectionKey[]).filter(
    (k) => k !== "pre"
  );
  const data = SECTIONS["pre"];

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
                  ["Classes", "EYS-I – Pre-I"],
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
                      The Pre-School Section at Army Public School &amp; College
                      Garrison Academy Kharian Cantt holds a rich history of
                      nurturing young minds that dates back to its inception as
                      Toddler Nursery in 1972. Over the decades, our institution
                      evolved into Kehkashaan Academy in 1986, joined the Army
                      Public Schools network in 1990, and established its
                      identity at the Garrison Academy Kharian Cantt in 2000.
                      Built on this 50-year legacy of educational care, our
                      early childhood programme lays a strong foundation for
                      lifelong learning, character, and confidence.
                    </p>
                    <p style={{ marginTop: "1rem" }}>
                      Housed in a safe, vibrant, and child-centered environment,
                      our Pre-School features engaging classrooms and stimulating
                      learning spaces where young learners feel valued, inspired,
                      and encouraged to explore their full potential. We believe
                      that every child is unique and deserves the opportunity to
                      learn, grow, and thrive at their own pace.
                    </p>
                    <p style={{ marginTop: "1rem" }}>
                      Our dedicated team of educators is committed to delivering
                      a nurturing education that fosters curiosity, creativity,
                      effective communication, and strong moral values. Through
                      play-based learning, interactive activities, and a
                      supportive school culture, we empower our youngest learners
                      to build independence and empathy.
                    </p>
                    <p style={{ marginTop: "1rem" }}>
                      At APS&amp;C Garrison Academy Kharian Cantt, we believe a
                      strong partnership between home and school is essential for
                      a child&rsquo;s success. Together with our parents, we are
                      committed to building confident, compassionate, and
                      responsible learners who are joyful, curious, and
                      well-prepared for the future.
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

          {/* ── Activities ── */}
          {ACTIVITIES.length > 0 && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Curriculum" title="Activities" />
              <div className="classgrid">
                {ACTIVITIES.map((a) => (
                  <div className="figure" key={a.label + a.photo}>
                    <div
                      className="fimg"
                      style={{
                        backgroundColor: "#f0f0f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src={a.photo}
                        alt={a.label}
                        fill
                        sizes="(max-width: 820px) 100vw, 33vw"
                      />
                    </div>
                    <figcaption style={{ fontSize: "0.9rem", lineHeight: "1.2" }}>
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
                {HIGH_ACHIEVERS.map((s) => (
                  <StaffCard key={s.name + s.photo} s={s} />
                ))}
              </div>
            </section>
          )}

          {/* ── Facilities ── */}
          {FACILITIES.length > 0 && (
            <section style={{ marginTop: "2.5rem" }}>
              <SectionHead eyebrow="Campus" title="Facilities" />
              {FACILITIES.map((f) => (
                <div key={f.name} style={{ marginBottom: "2.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem" }}>{f.name}</h3>
                  <p style={{ color: "var(--ink-soft)", marginBottom: "1rem" }}>
                    {f.description}
                  </p>
                  {f.photos.length > 0 && (
                    <div className="classgrid">
                      {f.photos.map((photo, i) => (
                        <div className="figure" key={photo}>
                          <div
                            className="fimg"
                            style={{ backgroundColor: "#f0f0f0" }}
                          >
                            <Image
                              src={photo}
                              alt={`${f.name} ${i + 1}`}
                              fill
                              sizes="(max-width: 820px) 100vw, 33vw"
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
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

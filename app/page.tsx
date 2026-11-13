import Link from "next/link";
import Hero from "@/components/Hero";
import OverviewSection from "@/components/OverviewSection";
import HighAchieversSection from "@/components/HighAchieversSection";
import { ArrowRight, Bell, CalendarDays, Download } from "lucide-react";
import CampusSwiper from "@/components/CampusSwiper";
import SectionHead from "@/components/SectionHead";
import { loadHomeData } from "@/lib/mappers/home";

// Admin edits must show on the next page load
export const dynamic = "force-dynamic";

/** "Vision (The Destination)" -> ["Vision", "(The Destination)"] */
const splitHeading = (h: string) => {
  const m = h.match(/^(.*?)\s*(\(.*\))\s*$/);
  return m ? [m[1], m[2]] : [h, ""];
};

const VM_CARDS = {
  vision: { bg: "rgba(103, 91, 166, 0.1)", border: "#4a3e8e", color: "#4a3e8e" },
  mission: { bg: "rgba(224, 186, 68, 0.1)", border: "#d4a017", color: "#b8860b" },
};

function VmCard({ heading, text, tone }: { heading: string; text: string; tone: keyof typeof VM_CARDS }) {
  const [main, sub] = splitHeading(heading);
  const t = VM_CARDS[tone];
  return (
    <div
      style={{
        background: t.bg,
        borderLeft: `6px solid ${t.border}`,
        padding: 24,
        borderRadius: "0 12px 12px 0",
      }}
    >
      <h4
        style={{
          color: t.color,
          textTransform: "uppercase",
          fontWeight: 700,
          marginBottom: 8,
        }}
      >
        {main}{" "}
        {sub && (
          <span style={{ fontWeight: 400, fontStyle: "italic" }}>
            {sub}
          </span>
        )}
      </h4>
      <p
        style={{
          fontSize: 18,
          margin: 0,
          fontWeight: 500,
          lineHeight: 1.5,
        }}
      >
        {text}
      </p>
    </div>
  );
}

const cssSafe = (s: string) => s.toLowerCase().replace(/[^a-z0-9-]+/g, "-");

export default async function HomePage() {
  const d = await loadHomeData();

  return (
    <div className="home-v2">
      <Hero slides={d.heroSlides} />
      <HighAchieversSection items={d.achievers} />
      <OverviewSection video={d.video} />

      {/* welcome + streams (GET /overview, GET /streams) */}
      {(d.welcome || d.streams.length > 0) && (
        <section className="sec">
          <div className="wrap welcome">
            {d.welcome && (
              <div className="welcome-copy">
                {d.welcome.eyebrow && <span className="eyebrow">{d.welcome.eyebrow}</span>}
                <h2 className="h-lg">{d.welcome.heading}</h2>
                <p>{d.welcome.description}</p>
                <Link className="link-arrow" href="/about">
                  More about the school <ArrowRight size={16} />
                </Link>
              </div>
            )}
            {d.streams.length > 0 && (
              <div className="streams">
                {d.streams.map((s, i) => (
                  <Link className="streamcard" href={s.href} key={s.id}>
                    <div
                      className="sc-img"
                      style={s.image ? { backgroundImage: `url("${s.image}")` } : undefined}
                    >
                      {s.tag && <span className={`sc-tag${i % 2 === 1 ? " alt" : ""}`}>{s.tag}</span>}
                    </div>
                    <div className="sc-bd">
                      <h3>{s.name}</h3>
                      <p>{s.description}</p>
                      <span className="more">
                        Explore stream <ArrowRight size={15} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* principal quote band (GET /messages/role/principal) */}
      {d.principal && (
        <section className="quoteband">
          <div className="wrap qb">
            <div className="qb-portrait">
              {d.principal.photo && (
                <img
                  alt={d.principal.name || "principal"}
                  src={d.principal.photo}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              )}
            </div>
            <div className="qb-body">
              {d.principal.eyebrow && <span className="eyebrow">{d.principal.eyebrow}</span>}
              <blockquote>{d.principal.quote}</blockquote>
              <div className="qb-foot">
                <div className="qb-who">
                  <div className="nm">{d.principal.name}</div>
                  <div className="rl">{d.principal.role}</div>
                </div>
                <Link className="btn-ghost dark" href="/messages/principal">
                  Read full message
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Vision and mission (GET /vision-mission) */}
      {d.visionMission && (
        <section
          className="sec pb-0"
          id="vision-mission"
          style={{ scrollMarginTop: 150, paddingBottom: "0px" }}
        >
          <div className="wrap">
            <SectionHead
              eyebrow="Our Direction"
              title="Vision, Mission"
              intro={d.visionMission.intro || undefined}
            />

            <div className="grid g2" style={{ marginBottom: 40 }}>
              <VmCard heading={d.visionMission.visionHeading} text={d.visionMission.visionText} tone="vision" />
              <VmCard heading={d.visionMission.missionHeading} text={d.visionMission.missionText} tone="mission" />
            </div>
          </div>
        </section>
      )}

      {/* campus gallery (GET /campus-life — one swiper per enabled section) */}
      {d.campus.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Campus Life</span>
              {d.campusHeading && <h2 className="h-lg">{d.campusHeading}</h2>}
            </div>
            <div className="gallery">
              {d.campus.map((c, i) => (
                <CampusSwiper
                  key={c.id}
                  images={c.images}
                  captions={c.captions}
                  caption={c.caption}
                  big={i === 0}
                  variant={`${cssSafe(c.key)}-swiper`}
                  delay={3500 + (i % 3) * 500}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* notices (GET /news) + events (GET /events) */}
      <section className="sec">
        <div className="wrap noticegrid">
          <div className="npanel">
            <div className="np-h">
              <i className="np-ic">
                <Bell size={22} />
              </i>
              <div>
                <span className="eyebrow">Latest</span>
                <h3 className="h-md">Notices &amp; Circulars</h3>
              </div>
            </div>
            <ul className="notelist">
              {d.notices.length === 0 && (
                <li>
                  <span className="d">—</span>
                  <span>No notices at the moment.</span>
                </li>
              )}
              {d.notices.map((n) => (
                <li key={n.id}>
                  <span className="d">{n.date}</span>
                  {n.external ? (
                    <a href={n.href} target="_blank" rel="noopener noreferrer">
                      {n.title}
                    </a>
                  ) : (
                    <Link href={n.href}>{n.title}</Link>
                  )}
                </li>
              ))}
            </ul>
            <Link className="link-arrow" href="/downloads">
              All downloads <ArrowRight size={16} />
            </Link>
          </div>
          <div className="npanel">
            <div className="np-h">
              <i className="np-ic">
                <CalendarDays size={22} />
              </i>
              <div>
                <span className="eyebrow">Upcoming</span>
                <h3 className="h-md">Events &amp; Activities</h3>
              </div>
            </div>
            <ul className="eventlist">
              {d.events.length === 0 && (
                <li>
                  <div className="ev">
                    <div className="et">No upcoming events at the moment.</div>
                  </div>
                </li>
              )}
              {d.events.map((e) => (
                <li key={e.id}>
                  <div className="dchip">
                    <b>{e.day}</b>
                    <span>{e.month}</span>
                  </div>
                  <div className="ev">
                    <div className="et">{e.title}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* admissions CTA (GET /homepage-admissions) */}
      {d.admissions && (
        <section className="sec">
          <div className="wrap">
            <div className="ctaband">
              {d.admissions.eyebrow && (
                <span className="eyebrow" style={{ color: "var(--gold-300)" }}>
                  {d.admissions.eyebrow}
                </span>
              )}
              <h2 className="h-lg" style={{ marginBottom: 12 }}>
                {d.admissions.heading}
              </h2>
              <p>{d.admissions.description}</p>
              <div className="cta-row">
                {d.admissions.primaryText && (
                  <Link className="btn-primary" href={d.admissions.primaryHref}>
                    {d.admissions.primaryText}
                  </Link>
                )}
                {d.admissions.secondaryText && (
                  <Link className="btn-ghost" href={d.admissions.secondaryHref}>
                    <Download size={16} /> {d.admissions.secondaryText}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

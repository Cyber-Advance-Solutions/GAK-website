import Link from "next/link";
import Hero from "@/components/Hero";
import OverviewSection from "@/components/OverviewSection";
import HighAchieversSection from "@/components/HighAchieversSection";
import FacilitiesSwiper from "@/components/FacilitiesSwiper";
import { ArrowRight, Bell, CalendarDays, Download } from "lucide-react";
import ClassroomsSwiper from "@/components/ClassroomsSwiper";
import CampusSwiper from "@/components/CampusSwiper";
import SectionHead from "@/components/SectionHead";

export default function HomePage() {
  return (
    <div className="home-v2">
      <Hero />
      <HighAchieversSection />
      <OverviewSection />

      {/* welcome + two streams */}
      <section className="sec">
        <div className="wrap welcome">
          <div className="welcome-copy">
            <span className="eyebrow">
              Welcome to Garrison Academy Kharian Cantt
            </span>
            <h2 className="h-lg">
              One disciplined campus,
              <br />
              two academic streams.
            </h2>
            <p>
              Since 1970's, Garrison Academy Kharian Cantt is serving in the field of education
              of the Army Public
              Schools &amp; Colleges System — academic rigour, character and
              genuine care. Choose the pathway that fits your child.
            </p>
            <Link className="link-arrow" href="/about">
              More about the school <ArrowRight size={16} />
            </Link>
          </div>
          <div className="streams">
            <Link className="streamcard" href="/streams/apsac">
              <div
                className="sc-img"
                style={{ backgroundImage: "url(/adm-block.jpg)" }}
              >
                <span className="sc-tag">National</span>
              </div>
              <div className="sc-bd">
                <h3>APSAC</h3>
                <p>
                  The national curriculum from Pre-School to Intermediate, with
                  consistently strong board results.
                </p>
                <span className="more">
                  Explore stream <ArrowRight size={15} />
                </span>
              </div>
            </Link>
            <Link className="streamcard" href="/streams/apsis">
              <div
                className="sc-img"
                style={{ backgroundImage: "url(/apsis.jpg)" }}
              >
                <span className="sc-tag alt">International</span>
              </div>
              <div className="sc-bd">
                <h3>APSIS</h3>
                <p>
                  A globally benchmarked Cambridge pathway, opening doors to
                  universities at home and abroad.
                </p>
                <span className="more">
                  Explore stream <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* principal quote band */}
      <section className="quoteband">
        <div className="wrap qb">
          <div className="qb-portrait">
            <img
              alt="principal"
              src="/principal.png"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            {/* <span>BK</span> */}
          </div>
          <div className="qb-body">
            <span className="eyebrow">From the Principal&rsquo;s Desk</span>
            <blockquote>
              We create challenging, real-world learning experiences that
              develop critical thinkers, ethical decision-makers, and adaptable
              individuals—empowering every student, staff member, and leader to
              grow, contribute, and succeed together.
            </blockquote>
            <div className="qb-foot">
              <div className="qb-who">
                <div className="nm">Mrs Shahida Rehman</div>
                <div className="rl">
                  Principal, Garrison Academy Kharian Cantt
                </div>
              </div>
              <Link className="btn-ghost dark" href="/messages/principal">
                Read full message
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and mission */}
      <section
        className="sec pb-0"
        id="vision-mission"
        style={{ scrollMarginTop: 150, paddingBottom: '0px' }}
      >
        <div className="wrap">
          <SectionHead
            eyebrow="Our Direction"
            title="Vision, Mission & Values"
            intro="The strategic framework that guides every decision, lesson, and interaction across our institution."
          />

          <div className="grid g2" style={{ marginBottom: 40 }}>
            <div
              style={{
                background: "rgba(103, 91, 166, 0.1)",
                borderLeft: "6px solid #4a3e8e",
                padding: 24,
                borderRadius: "0 12px 12px 0",
              }}
            >
              <h4
                style={{
                  color: "#4a3e8e",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                Vision{" "}
                <span style={{ fontWeight: 400, fontStyle: "italic" }}>
                  (The Destination)
                </span>
              </h4>
              <p
                style={{
                  fontSize: 18,
                  margin: 0,
                  fontWeight: 500,
                  lineHeight: 1.5,
                }}
              >
                To develop capable individuals who think independently, act
                responsibly, and thrive bravely in a rapidly evolving world.
              </p>
            </div>
            <div
              style={{
                background: "rgba(224, 186, 68, 0.1)",
                borderLeft: "6px solid #d4a017",
                padding: 24,
                borderRadius: "0 12px 12px 0",
              }}
            >
              <h4
                style={{
                  color: "#b8860b",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                Mission{" "}
                <span style={{ fontWeight: 400, fontStyle: "italic" }}>
                  (The Vehicle)
                </span>
              </h4>
              <p
                style={{
                  fontSize: 18,
                  margin: 0,
                  fontWeight: 500,
                  lineHeight: 1.5,
                }}
              >
                We create challenging, real-world learning experiences that
                develop critical thinkers, ethical decision-makers, and
                adaptable individuals — empowering every student, staff member,
                and leader to grow, contribute, and succeed — together.
              </p>
            </div>
          </div>

          {/* <div
            style={{
              background: "rgba(34, 139, 34, 0.1)",
              borderLeft: "6px solid #228b22",
              padding: 32,
              borderRadius: "0 12px 12px 0",
              marginBottom: 40,
            }}
          >
            <h4
              style={{
                color: "#006400",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: 24,
                fontSize: 22,
              }}
            >
              Values{" "}
              <span style={{ fontWeight: 400, fontStyle: "italic" }}>
                (The Fuel)
              </span>
            </h4>
            <div className="grid g2">
              <div>
                <h5 style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>
                  Think Critically
                </h5>
                <p style={{ fontStyle: "italic", marginBottom: 16 }}>
                  Ask Why. Find Out How. Think Before You Act.
                </p>

                <h5 style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>
                  Act Righteously
                </h5>
                <p style={{ fontStyle: "italic", marginBottom: 16 }}>
                  Always Do the Right Thing, Even When No One is Watching
                </p>
              </div>
              <div>
                <h5 style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>
                  Adapt Bravely
                </h5>
                <p style={{ fontStyle: "italic", marginBottom: 16 }}>
                  Try, Fail, Learn, Repeat - Every Single Day
                </p>

                <h5 style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>
                  Work Together
                </h5>
                <p style={{ fontStyle: "italic", marginBottom: 16 }}>
                  Respect Differences. Support Others. Grow Together
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* academic pathway */}
      {/* <AcademicPathwaySection /> */}

      {/* campus gallery */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Campus Life</span>
            <h2 className="h-lg">Where learning feels like belonging.</h2>
          </div>
          <div className="gallery">
            <CampusSwiper />
            <ClassroomsSwiper />
            <FacilitiesSwiper />
          </div>
        </div>
      </section>

      {/* notices + events */}
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
              <li>
                <span className="d">12 Jun</span>
                <Link href="/downloads">
                  Summer vacation timings — Session 2026
                </Link>
              </li>
              <li>
                <span className="d">06 Jun</span>
                <Link href="/downloads">
                  Parent–teacher meeting schedule (all sections)
                </Link>
              </li>
              <li>
                <span className="d">28 May</span>
                <Link href="/downloads">
                  Mid-term datesheet — Senior School
                </Link>
              </li>
              <li>
                <span className="d">19 May</span>
                <Link href="/downloads">
                  Fee challan reminder — 2nd quarter
                </Link>
              </li>
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
              <li>
                <div className="dchip">
                  <b>05</b>
                  <span>OCT</span>
                </div>
                <div className="ev">
                  <div className="et">World Teachers&apos; Day</div>
                </div>
              </li>
              <li>
                <div className="dchip">
                  <b>06</b>
                  <span>OCT</span>
                </div>
                <div className="ev">
                  <div className="et">APSACS Foundation Day</div>
                </div>
              </li>
              <li>
                <div className="dchip">
                  <b>07</b>
                  <span>OCT</span>
                </div>
                <div className="ev">
                  <div className="et">World Mental Health Day</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* admissions CTA */}
      <section className="sec">
        <div className="wrap">
          <div className="ctaband">
            <span className="eyebrow" style={{ color: "var(--gold-300)" }}>
              Session 2026
            </span>
            <h2 className="h-lg" style={{ marginBottom: 12 }}>
              Admissions are now open.
            </h2>
            <p>
              Secure your child&rsquo;s seat at one of Kharian&rsquo;s most
              trusted institutions. Apply online in minutes or download the
              form.
            </p>
            <div className="cta-row">
              <Link className="btn-primary" href="/admissions">
                Begin Application
              </Link>
              <Link className="btn-ghost" href="/downloads">
                <Download size={16} /> Download form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, Building2, GraduationCap } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import StaffCard from "@/components/StaffCard";
import {
  HEAD,
  IMG,
  DEPUTY_HEADS,
  DEPARTMENTS,
  CLASSES,
  ACTIVITIES,
  ACHIEVEMENTS,
  UPCOMING,
  FACILITIES_CAMPUS,
  FACILITIES_ACADEMIC,
  MIDDLE_BOYS_SUBPAGES,
  type MiddleBoysSub,
} from "@/lib/middle-boys-data";

function SectionBody({ slug }: { slug: string }) {
  switch (slug) {
    case "deputy-section-heads":
      return (
        <div className="staffgrid">
          {DEPUTY_HEADS.map((s) => <StaffCard key={s.name} s={s} />)}
        </div>
      );

    case "faculty-by-department":
      return (
        <>
          {DEPARTMENTS.map((d) => {
            const coordinators = d.teachers.filter((s) => s.role?.toLowerCase().includes("coordinator"));
            const teachers = d.teachers.filter((s) => !s.role?.toLowerCase().includes("coordinator"));
            return (
              <div className="deptblock" key={d.name} style={{ marginBottom: 34 }}>
                <h3>{d.name}</h3>
                {coordinators.length > 0 && (
                  <>
                    <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold-600)", marginBottom: 10, marginTop: 4 }}>Coordinator</div>
                    <div className="staffgrid" style={{ marginBottom: teachers.length > 0 ? 18 : 0 }}>
                      {coordinators.map((s) => <StaffCard key={s.name + s.photo} s={s} />)}
                    </div>
                  </>
                )}
                {teachers.length > 0 && (
                  <>
                    {coordinators.length > 0 && <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold-600)", marginBottom: 10 }}>Teachers</div>}
                    <div className="staffgrid">
                      {teachers.map((s) => <StaffCard key={s.name + s.photo} s={s} />)}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </>
      );

    case "classes":
      return (
        <div className="classgrid">
          {CLASSES.map((c) => (
            <div className="figure" key={c.label}>
              <div className="fimg"><Image src={c.photo} alt={c.label} fill sizes="(max-width: 820px) 100vw, 33vw" /></div>
              <figcaption><GraduationCap size={15} strokeWidth={1.8} /> {c.label}</figcaption>
            </div>
          ))}
        </div>
      );

    case "exam-schedule":
      return (
        <div className="figure" style={{ background: "#fff" }}>
          <Image src={IMG("image37.jpeg")} alt="Middle School Assessment Framework, Class IV-VIII" width={949} height={411} style={{ width: "100%", height: "auto" }} />
        </div>
      );

    case "activities":
      return (
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Sr.</th><th>Date</th><th>Event</th></tr></thead>
            <tbody>
              {ACTIVITIES.map(([date, ev], i) => (
                <tr key={i}><td>{i + 1}</td><td>{date}</td><td>{ev}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "achievements":
      return (
        <ul className="achlist">
          {ACHIEVEMENTS.map((a) => (
            <li key={a}><Trophy size={18} strokeWidth={1.8} /> {a}</li>
          ))}
        </ul>
      );

    case "upcoming-events":
      return (
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Sr.</th><th>Date</th><th>Event</th></tr></thead>
            <tbody>
              {UPCOMING.map(([date, ev], i) => (
                <tr key={i}><td>{i + 1}</td><td>{date}</td><td>{ev}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "facilities":
      return (
        <>
          <div className="grid g2">
            <div>
              <h3 style={{ marginBottom: 12, fontSize: "1.05rem", display: "flex", alignItems: "center", gap: 8 }}>
                <Building2 size={18} strokeWidth={1.8} /> Campus & Infrastructure
              </h3>
              <div className="prose"><ul>{FACILITIES_CAMPUS.map((f) => <li key={f.slice(0, 24)}>{f}</li>)}</ul></div>
            </div>
            <div>
              <h3 style={{ marginBottom: 12, fontSize: "1.05rem", display: "flex", alignItems: "center", gap: 8 }}>
                <GraduationCap size={18} strokeWidth={1.8} /> Academic & Development Framework
              </h3>
              <div className="prose"><ul>{FACILITIES_ACADEMIC.map((f) => <li key={f.slice(0, 24)}>{f}</li>)}</ul></div>
            </div>
          </div>
          <Link className="link-arrow" href="/admissions">Apply for admission <ArrowRight size={16} /></Link>
        </>
      );

    default:
      return null;
  }
}

export default function MiddleBoysSubPage({ sub }: { sub: MiddleBoysSub }) {
  return (
    <>
      <PageHero
        eyebrow={sub.eyebrow}
        title={sub.label}
        image={CLASSES[0].photo}
        crumb={[
          { label: "Quick Links", href: "/quick-links" },
          { label: "Middle Boys Section", href: "/sections/middle-boys" },
          { label: sub.label },
        ]}
      />

      <section className="sec">
        <Editorial
          rail={
            <>
              <FactCard
                title="Section facts"
                rows={[
                  ["Section head", HEAD.name],
                  ["Classes", "IV – VIII"],
                  ["Stream", "APSACS · FBISE"],
                  ["Timings", "7:45 AM – 1:45 PM"],
                ]}
              />
              <div className="factcard">
                <h4>Middle Boys pages</h4>
                <ul>
                  {MIDDLE_BOYS_SUBPAGES.map((p) => (
                    <li key={p.slug} style={{ display: "block" }}>
                      <Link
                        href={`/sections/middle-boys/${p.slug}`}
                        style={{ color: p.slug === sub.slug ? "var(--ink)" : "var(--green-700)", fontWeight: 600 }}
                      >
                        {p.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          }
        >
          <section>
            <SectionHead eyebrow={sub.eyebrow} title={sub.label} />
            <SectionBody slug={sub.slug} />
          </section>
        </Editorial>
      </section>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import StaffCard from "@/components/StaffCard";
import { SECTIONS } from "@/lib/data";
import {
  HEAD,
  IMG,
  DEPUTY_HEADS,
  DEPARTMENTS,
  CLASSES,
  ACTIVITIES,
  HIGH_ACHIEVERS,
  JUNIOR_SUBPAGES,
  type JuniorSub,
} from "@/lib/junior-data";

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
        <>
          {CLASSES.map((c) => (
            <div key={c.label} style={{ marginBottom: "2rem" }}>
              <h3 style={{ marginBottom: "1rem" }}>{c.label}</h3>
              <div className="classgrid">
                {c.photos.map((photo, i) => (
                  <div className="figure" key={photo}>
                    <div className="fimg" style={{ backgroundColor: "#f0f0f0" }}>
                      <Image src={photo} alt={`${c.label} ${i + 1}`} fill sizes="(max-width: 820px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                    </div>
                    <figcaption><GraduationCap size={15} strokeWidth={1.8} /> {c.label}</figcaption>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      );

    case "assessments":
      return (
        <>
          <p style={{ marginBottom: "1rem", color: "var(--ink-soft)" }}>
            Continuous Assessments (Term Wise) — No term exams in the Junior Section for Class (I–III)
          </p>
          <div className="tbl-wrap">
            <table className="tbl">
              <thead>
                <tr><th>Subject</th><th>Assessment Type</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>English</td>
                  <td>
                    2 × Written Assessments<br />
                    1 × Reading Assessments<br />
                    1 × Speaking Assessments<br />
                    1 × Listening Assessments
                  </td>
                </tr>
                <tr>
                  <td>Urdu</td>
                  <td>
                    2 × Written Assessments<br />
                    1 × Reading Assessments<br />
                    1 × Speaking Assessments<br />
                    1 × Listening Assessments
                  </td>
                </tr>
                <tr>
                  <td>Maths</td>
                  <td>
                    3 × Written Assessments<br />
                    2 × Mental Maths
                  </td>
                </tr>
                <tr><td>General Knowledge</td><td>2 × Oral Assessments</td></tr>
                <tr><td>Islamiyat</td><td>2 × Oral Assessments</td></tr>
                <tr><td>Computer</td><td>3 × Practical Assessments</td></tr>
                <tr><td>Tajweed</td><td>2 × Hifz / Nazra Assessments</td></tr>
              </tbody>
            </table>
          </div>
        </>
      );

    case "activities":
      return (
        <div className="classgrid">
          {ACTIVITIES.map((a) => (
            <div className="figure" key={a.label + a.photo}>
              <div className="fimg" style={{ backgroundColor: "#f0f0f0" }}>
                <Image src={a.photo} alt={a.label} fill sizes="(max-width: 820px) 100vw, 33vw" style={{ objectFit: "cover" }} />
              </div>
              <figcaption style={{ fontSize: "0.9rem", lineHeight: "1.2" }}>{a.label}</figcaption>
            </div>
          ))}
        </div>
      );

    case "high-achievers":
      return (
        <div className="staffgrid">
          {HIGH_ACHIEVERS.map((s, i) => <StaffCard key={s.name + s.photo + i} s={s} />)}
        </div>
      );

    default:
      return null;
  }
}

export default function JuniorSubPage({ sub }: { sub: JuniorSub }) {
  const data = SECTIONS["junior"];

  return (
    <>
      <PageHero
        eyebrow={sub.eyebrow}
        title={sub.label}
        image={IMG("class.jpg")}
        crumb={[
          { label: "Quick Links", href: "/quick-links" },
          { label: data.name, href: "/sections/junior" },
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
                  ["Section Head", HEAD.name],
                  ["Classes", "I – III"],
                  ["Curriculum", "APSACS"],
                ]}
              />
              <div className="factcard">
                <h4>Junior Section pages</h4>
                <ul>
                  {JUNIOR_SUBPAGES.map((p) => (
                    <li key={p.slug} style={{ display: "block" }}>
                      <Link
                        href={`/sections/junior/${p.slug}`}
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

          {sub.slug === "high-achievers" && (
            <section>
              <Link className="link-arrow" href="/admissions" style={{ display: "flex" }}>Apply for admission <ArrowRight size={16} /></Link>
            </section>
          )}
        </Editorial>
      </section>
    </>
  );
}

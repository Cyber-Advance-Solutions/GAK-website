import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, Building2, Monitor } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import SectionHead from "@/components/SectionHead";
import StaffCard from "@/components/StaffCard";
import { SECTIONS } from "@/lib/data";
import {
  VICE_PRINCIPAL,
  SECTION_HEAD,
  IMG,
  COORDINATORS,
  DEPARTMENTS,
  CLASSES,
  ACTIVITIES,
  ACHIEVEMENTS_HRCA_ENG_SCI,
  ACHIEVEMENTS_ICATS_MATH,
  ACHIEVEMENTS_HRCA_MATH_GK,
  UPCOMING,
  FACILITIES_CAMPUS,
  FACILITIES_TECH,
  APSIS_SUBPAGES,
  type APSISSub,
} from "@/lib/apsis-data";

function SectionBody({ slug }: { slug: string }) {
  switch (slug) {
    case "section-head":
      return (
        <div className="staffgrid">
          <StaffCard s={SECTION_HEAD} />
        </div>
      );

    case "coordinators":
      return (
        <div className="staffgrid">
          {COORDINATORS.map((s) => <StaffCard key={s.name} s={s} />)}
        </div>
      );

    case "faculty-by-department":
      return (
        <>
          {DEPARTMENTS.map((d) => (
            <div className="deptblock" key={d.name} style={{ marginBottom: 34 }}>
              <h3>{d.name}</h3>
              <div className="staffgrid">
                {d.teachers.map((s) => <StaffCard key={s.name + s.photo} s={s} />)}
              </div>
            </div>
          ))}
        </>
      );

    case "classes":
      return (
        <div className="classgrid">
          {CLASSES.map((c) => (
            <div className="figure" key={c.label}>
              <div className="fimg" style={{ backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src={c.photo} alt={c.label} fill sizes="(max-width: 820px) 100vw, 33vw" />
              </div>
              <figcaption><GraduationCap size={15} strokeWidth={1.8} /> {c.label}</figcaption>
            </div>
          ))}
        </div>
      );

    case "assessment":
      return (
        <div style={{ position: 'relative', width: '100%', height: 'auto', minHeight: '800px', borderRadius: 'var(--r)', overflow: 'hidden', marginBottom: '2rem' }}>
          <Image src={IMG("assessment-full.png")} alt="Assessment" fill style={{ objectFit: 'contain' }} />
        </div>
      );

    case "activities":
      return (
        <div className="classgrid">
          {ACTIVITIES.map((a) => (
            <div className="figure" key={a.label + a.photo}>
              <div className="fimg" style={{ backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src={a.photo} alt={a.label} fill sizes="(max-width: 820px) 100vw, 33vw" />
              </div>
              <figcaption style={{ fontSize: '0.9rem', lineHeight: '1.2' }}>{a.label}</figcaption>
            </div>
          ))}
        </div>
      );

    case "high-achievers":
      return (
        <>
          <div style={{ marginBottom: "3rem" }}>
            <h4 style={{ textAlign: "center", marginBottom: "1rem" }}>Co-Curricular Activities<br />HRCA English & Science Quiz Competition (2025-26)</h4>
            <div className="staffgrid">
              {ACHIEVEMENTS_HRCA_ENG_SCI.map((s) => <StaffCard key={s.name + s.photo} s={s} />)}
            </div>
          </div>

          <div style={{ marginBottom: "3rem" }}>
            <h4 style={{ textAlign: "center", marginBottom: "1rem" }}>ICATS Mathematics Contest 2025</h4>
            <div className="staffgrid">
              {ACHIEVEMENTS_ICATS_MATH.map((s) => <StaffCard key={s.name + s.photo} s={s} />)}
            </div>
          </div>

          <div style={{ marginBottom: "3rem" }}>
            <h4 style={{ textAlign: "center", marginBottom: "1rem" }}>HRCA Math & GK Quiz Competition 2025</h4>
            <div className="staffgrid">
              {ACHIEVEMENTS_HRCA_MATH_GK.map((s, i) => <StaffCard key={s.name + s.photo + i} s={s} />)}
            </div>
          </div>
        </>
      );

    case "upcoming-events":
      return (
        <div className="tbl-wrap">
          <table className="tbl">
            <thead><tr><th>Sr#</th><th>DATE</th><th>EVENTS</th></tr></thead>
            <tbody>
              {UPCOMING.map(([date, ev], i) => (
                <tr key={i}><td>{i + 1}</td><td>{date}</td><td>{ev}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "uniform":
      return (
        <div className="grid g2">
          <div>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', backgroundColor: '#f9f9f9', borderRadius: 'var(--r)', overflow: 'hidden', marginBottom: '1rem' }}>
              <Image src={IMG("girls-uniform.jpg")} alt="APS Cambridge Girls Uniform" fill style={{ objectFit: 'contain' }} />
            </div>
            <h4 style={{ textAlign: "center", color: 'var(--ink)' }}>APS Cambridge Girls Uniform</h4>
          </div>
          <div>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', backgroundColor: '#f9f9f9', borderRadius: 'var(--r)', overflow: 'hidden', marginBottom: '1rem' }}>
              <Image src={IMG("boys-uniform.png")} alt="APS Cambridge Boys Uniform" fill style={{ objectFit: 'contain' }} />
            </div>
            <h4 style={{ textAlign: "center", color: 'var(--ink)' }}>APS Cambridge Boys Uniform</h4>
          </div>
        </div>
      );

    case "cambridge-results":
      return (
        <>
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ textAlign: "center", marginBottom: "1.5rem", fontSize: "1.8rem", color: "var(--ink)", fontWeight: 700 }}>Session 2024 &ndash; 2025</h3>

            <div className="tbl-wrap" style={{ marginBottom: "2rem" }}>
              <table className="tbl" style={{ textAlign: "center" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }}>A*</th>
                    <th style={{ textAlign: "center" }}>A</th>
                    <th style={{ textAlign: "center" }}>B</th>
                    <th style={{ textAlign: "center" }}>C</th>
                    <th style={{ textAlign: "center" }}>D</th>
                    <th style={{ textAlign: "center" }}>E</th>
                    <th style={{ textAlign: "center" }}>U</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontSize: "1.2rem", fontWeight: 600 }}>06</td>
                    <td style={{ fontSize: "1.2rem", fontWeight: 600 }}>09</td>
                    <td style={{ fontSize: "1.2rem", fontWeight: 600 }}>14</td>
                    <td style={{ fontSize: "1.2rem", fontWeight: 600 }}>07</td>
                    <td style={{ fontSize: "1.2rem", fontWeight: 600 }}>00</td>
                    <td style={{ fontSize: "1.2rem", fontWeight: 600 }}>00</td>
                    <td style={{ fontSize: "1.2rem", fontWeight: 600 }}>00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="prose" style={{ maxWidth: "650px", margin: "0 auto 3rem auto" }}>
              <ul style={{ listStyleType: "square" }}>
                <li style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Students Appeared in <strong>CIEs May/ June, 2024 &ndash; 2025 Class OI:</strong></span>
                  <span style={{ fontWeight: 600 }}>03</span>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Students Appeared in <strong>CIEs May/ June, 2024 &ndash; 2025 Class OII:</strong></span>
                  <span style={{ fontWeight: 600 }}>04</span>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Students Appeared in <strong>CIEs May/ June, 2024 &ndash; 2025 Class OIII:</strong></span>
                  <span style={{ fontWeight: 600 }}>04</span>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem", borderTop: "1px solid var(--border)" }}>
                  <span>Total Number of Students Appeared:</span>
                  <span style={{ fontWeight: 600 }}>11</span>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ position: 'relative', width: '100%', height: 'auto', minHeight: '400px', borderRadius: 'var(--r)', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image src={IMG("result-diagram.png")} alt="Cambridge Results Diagram" fill style={{ objectFit: 'contain' }} />
          </div>
        </>
      );

    case "facilities":
      return (
        <>
          <div className="grid g2">
            <div>
              <h3 style={{ marginBottom: 12, fontSize: "1.05rem", display: "flex", alignItems: "center", gap: 8 }}>
                <Building2 size={18} strokeWidth={1.8} /> Campus & Infrastructure
              </h3>
              <div className="prose"><ul>{FACILITIES_CAMPUS.map((f) => <li key={f}>{f}</li>)}</ul></div>
            </div>
            <div>
              <h3 style={{ marginBottom: 12, fontSize: "1.05rem", display: "flex", alignItems: "center", gap: 8 }}>
                <Monitor size={18} strokeWidth={1.8} /> Technology & Learning
              </h3>
              <div className="prose"><ul>{FACILITIES_TECH.map((f) => <li key={f}>{f}</li>)}</ul></div>
            </div>
          </div>
          <Link className="link-arrow" href="/admissions" style={{ marginTop: "2rem", display: "flex" }}>Apply for admission <ArrowRight size={16} /></Link>
        </>
      );

    default:
      return null;
  }
}

export default function APSISSubPage({ sub }: { sub: APSISSub }) {
  const data = SECTIONS["apsis"];

  return (
    <>
      <PageHero
        eyebrow={sub.eyebrow}
        title={sub.label}
        image={IMG("apsis-faculty.jpg")}
        crumb={[
          { label: "Quick Links", href: "/quick-links" },
          { label: data.name, href: "/sections/apsis" },
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
                  ["Vice Principal", VICE_PRINCIPAL.name],
                  ["Section Head", SECTION_HEAD.name],
                  ["Curriculum", "Cambridge Stream"],
                ]}
              />
              <div className="factcard">
                <h4>APSIS pages</h4>
                <ul>
                  {APSIS_SUBPAGES.map((p) => (
                    <li key={p.slug} style={{ display: "block" }}>
                      <Link
                        href={`/sections/apsis/${p.slug}`}
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

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
  DEPUTY_HEADS,
  COORDINATORS,
  DEPARTMENTS,
  CLASSES,
  ACTIVITIES,
  HIGH_ACHIEVERS,
  FACILITIES,
  PRE_SUBPAGES,
  type PreSub,
} from "@/lib/pre-school-data";

function SectionBody({ slug }: { slug: string }) {
  switch (slug) {
    case "deputy-section-head":
      return (
        <div className="staffgrid">
          {DEPUTY_HEADS.map((s) => <StaffCard key={s.name} s={s} />)}
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

    case "exam-schedule":
      return (
        <div className="prose" style={{ background: "#fff", padding: "2rem", borderRadius: "var(--r)", border: "1px solid var(--border)" }}>
          <h3 style={{ margin: 0, textAlign: "center", color: "var(--ink)" }}>No Assessment in Pre School</h3>
          <p style={{ textAlign: "center", marginTop: "1rem", color: "var(--ink-soft)" }}>
            We believe in continuous evaluation through observation and play-based learning activities.
          </p>
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
        <div className="staffgrid">
          {HIGH_ACHIEVERS.map((s) => <StaffCard key={s.name + s.photo} s={s} />)}
        </div>
      );

    case "facilities":
      return (
        <>
          {FACILITIES.map((f) => (
            <div key={f.name} style={{ marginBottom: "2.5rem" }}>
              <h3 style={{ marginBottom: "0.5rem" }}>{f.name}</h3>
              <p style={{ color: "var(--ink-soft)", marginBottom: "1rem" }}>{f.description}</p>
              {f.photos.length > 0 && (
                <div className="classgrid">
                  {f.photos.map((photo, i) => (
                    <div className="figure" key={photo}>
                      <div className="fimg" style={{ backgroundColor: "#f0f0f0" }}>
                        <Image src={photo} alt={`${f.name} ${i + 1}`} fill sizes="(max-width: 820px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link className="link-arrow" href="/admissions" style={{ marginTop: "2rem", display: "flex" }}>Apply for admission <ArrowRight size={16} /></Link>
        </>
      );

    default:
      return null;
  }
}

export default function PreSchoolSubPage({ sub }: { sub: PreSub }) {
  const data = SECTIONS["pre"];

  return (
    <>
      <PageHero
        eyebrow={sub.eyebrow}
        title={sub.label}
        image={CLASSES[0].photo}
        crumb={[
          { label: "Quick Links", href: "/quick-links" },
          { label: data.name, href: "/sections/pre" },
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
                  ["Classes", "EYS-I – Pre-I"],
                  ["Timings", "7:45 AM – 1:45 PM"],
                ]}
              />
              <div className="factcard">
                <h4>Pre-School pages</h4>
                <ul>
                  {PRE_SUBPAGES.map((p) => (
                    <li key={p.slug} style={{ display: "block" }}>
                      <Link
                        href={`/sections/pre/${p.slug}`}
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

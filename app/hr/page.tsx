import { Briefcase, ClipboardList, GraduationCap, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { ToastButton } from "@/components/Toast";
import HrApplicationForm from "@/components/HrApplicationForm";
import { BANNER } from "@/lib/images";
import { getCareersPage, getFormConfig, getVacancies } from "@/lib/mappers/careers";

export const metadata = { title: "HR & Careers" };
export const dynamic = "force-dynamic";

const STEP_ICONS = [ClipboardList, GraduationCap, CheckCircle2];

export default async function HrPage() {
  const [page, vacancies, form] = await Promise.all([getCareersPage(), getVacancies(), getFormConfig("career")]);
  const steps = page?.steps ?? [];

  return (
    <>
      <PageHero
        eyebrow="Join our team"
        title={page?.heading || "HR & careers"}
        intro={page?.introText}
        image={BANNER.hr}
        crumb={[{ label: "HR Management" }]}
      />

      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="We're hiring" title={page?.openingsHeading || "Current openings"} />
          {vacancies.length > 0 ? (
            <div className="grid g2">
              {vacancies.map((v) => {
                const href = v.applyUrl || "#application-form";
                const internal = href.startsWith("#");
                const type = v.employmentType || "";
                return (
                  <div className="card" key={v.id} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div className="lc-ic" style={{ width: 46, height: 46, flex: "none" }}><Briefcase size={22} strokeWidth={1.8} /></div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: "1.06rem", marginBottom: 6 }}>{v.title}</h3>
                      <p style={{ marginBottom: 12 }}>
                        {v.department}
                        {v.department && type ? " · " : null}
                        {type ? <span className={`pill ${type === "Full-time" ? "g" : "b"}`}>{type}</span> : null}
                      </p>
                      {internal ? (
                        <ToastButton href={href} as="a" msg="Scroll down to the application form…" className="dl-btn">Apply now</ToastButton>
                      ) : (
                        <a href={href} className="dl-btn" target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">Apply now</a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p style={{ color: "var(--ink-soft)" }}>There are no openings at the moment. Please check back later.</p>
          )}
        </div>
      </section>

      {steps.length > 0 && (
        <section className="sec" style={{ background: "var(--paper-2)" }}>
          <div className="wrap">
            <SectionHead eyebrow="The process" title={page?.howToApplyHeading || "How to apply"} intro={page?.howToApplyNotes || undefined} />
            <div className="linkcards">
              {steps.map((s, i) => {
                const Ic = STEP_ICONS[i % STEP_ICONS.length];
                return (
                  <div className="linkcard" key={`${s.title}-${i}`}><div className="lc-ic"><Ic size={20} strokeWidth={1.8} /></div><div><h4>{s.title}</h4>{s.description ? <p>{s.description}</p> : null}</div></div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="sec" id="application-form" style={{ background: "var(--paper-2)", scrollMarginTop: 110 }}>
        <div className="wrap">
          <SectionHead eyebrow="Quick apply" title={form?.heading || "Send your application"} intro={form?.instructions || undefined} />
          <HrApplicationForm config={form} />
        </div>
      </section>
    </>
  );
}

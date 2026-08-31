import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Academic Organogram — GAK" };

type NodeVariant = "primary" | "secondary" | "tertiary" | "leaf" | "accent";

function OrgNode({ label, variant = "tertiary", sub }: { label: string; variant?: NodeVariant; sub?: string }) {
  return (
    <div className={`org-node org-node--${variant}`}>
      <span className="org-node-label">{label}</span>
      {sub && <span className="org-node-sub">{sub}</span>}
    </div>
  );
}

const leftHeads  = ["Pre-School", "Junior Sec", "Middle Girls"];
const rightHeads = ["Middle Boys", "Senior Girls", "Senior Boys"];

export default function AcademicOrganogramPage() {
  return (
    <>
      <PageHero
        eyebrow="Structure"
        title="Academic Organogram"
        intro="Academic leadership structure of Garrison Academy Kharian Cantt."
        image={BANNER.organogram}
        crumb={[{ label: "Organogram", href: "/organogram" }, { label: "Academic" }]}
      />
      <section className="org-section">
        <div className="wrap">
          <SectionHead eyebrow="Governance" title="Academic Leadership Structure" />

          <div className="org-chart" aria-label="Academic Organogram">

            {/* Row 0 — Principal */}
            <div className="org-row">
              <div className="org-col">
                <OrgNode label="PRINCIPAL" variant="primary" />
              </div>
            </div>
            <div className="org-vline" />

            {/* Horizontal bar connecting Principal to 3 columns */}
            <div className="org-h-connector">
              <div className="org-h-connector-line" />
            </div>

            {/* ── three-way split: Misc Appts | VP APSACS | VP APSIS ── */}
            <div className="org-branch3">

              {/* Left: Misc Appts + its 5 children */}
              <div className="org-branch3-col">
                <div className="org-vline" />
                <OrgNode label="Misc Appts" variant="accent" />
                <div className="org-vline" />
                <div className="org-children-bar" style={{ width: "100%" }} />
                <div className="org-row org-row--5col">
                  {["REHC", "HOD IT", "COE", "CCA Coord", "CCA Coord"].map((n, i) => (
                    <div className="org-col" key={i}>
                      <div className="org-vline org-vline--short" />
                      <OrgNode label={n} variant="leaf" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Centre: VP APSACS + 6 section heads in bracket layout */}
              <div className="org-branch3-col org-branch3-col--center">
                <div className="org-vline" />
                <OrgNode label="Vice Principal" sub="APSACS" variant="secondary" />
                <div className="org-vline" />
                <div className="org-bracket">
                  <div className="org-bracket-side org-bracket-side--left">
                    {leftHeads.map((sub) => (
                      <div className="org-bracket-item" key={sub}>
                        <OrgNode label="Sec Head" sub={sub} variant="tertiary" />
                        <div className="org-bracket-arm" />
                      </div>
                    ))}
                  </div>
                  <div className="org-bracket-spine" />
                  <div className="org-bracket-side org-bracket-side--right">
                    {rightHeads.map((sub) => (
                      <div className="org-bracket-item" key={sub}>
                        <div className="org-bracket-arm" />
                        <OrgNode label="Sec Head" sub={sub} variant="tertiary" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: VP APSIS + Sec Head APSIS */}
              <div className="org-branch3-col">
                <div className="org-vline" />
                <OrgNode label="Vice Principal" sub="APSIS" variant="secondary" />
                <div className="org-vline" />
                <OrgNode label="Sec Head" sub="APSIS" variant="tertiary" />
              </div>

            </div>
          </div>

          {/* Legend */}
          <div className="org-legend">
            {[
              { cls: "org-node--primary",   label: "Principal" },
              { cls: "org-node--secondary", label: "Vice Principals" },
              { cls: "org-node--accent",    label: "Key Appointments" },
              { cls: "org-node--tertiary",  label: "Section Heads" },
              { cls: "org-node--leaf",      label: "Departments / Coordinators" },
            ].map((l) => (
              <div className="org-legend-item" key={l.label}>
                <span className={`org-legend-dot ${l.cls}`} />
                <span className="org-legend-text">{l.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

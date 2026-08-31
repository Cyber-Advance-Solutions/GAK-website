import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Administrative Organogram — GAK" };

type NodeVariant = "primary" | "secondary" | "tertiary" | "leaf" | "accent";

function OrgNode({ label, variant = "tertiary", sub }: { label: string; variant?: NodeVariant; sub?: string }) {
  return (
    <div className={`org-node org-node--${variant}`}>
      <span className="org-node-label">{label}</span>
      {sub && <span className="org-node-sub">{sub}</span>}
    </div>
  );
}

export default function AdminOrganogramPage() {
  return (
    <>
      <PageHero
        eyebrow="Structure"
        title="Administrative Organogram"
        intro="Administrative governance structure of Garrison Academy Kharian Cantt."
        image={BANNER.organogram}
        crumb={[{ label: "Organogram", href: "/organogram" }, { label: "Administrative" }]}
      />
      <section className="org-section">
        <div className="wrap">
          <SectionHead eyebrow="Governance" title="Administrative Structure" />

          <div className="org-chart" aria-label="Administrative Organogram">

            {/* Row 0 — Principal */}
            <div className="org-row">
              <div className="org-col">
                <OrgNode label="PRINCIPAL" variant="primary" />
              </div>
            </div>
            <div className="org-vline" />

            {/* Row 1 — Vice Principal */}
            <div className="org-row">
              <div className="org-col">
                <OrgNode label="Vice Principal" variant="secondary" />
              </div>
            </div>

            {/* ── two-way split: Admin Offices | Admin Assistant ── */}
            <div className="org-branch2-admin">

              {/* Left: Admin Offices → 3 branches */}
              <div className="org-branch2-col">
                <div className="org-vline" />
                <OrgNode label="Admin Offices" variant="accent" />
                <div className="org-vline" />
                <div className="org-row org-row--3col">
                  {["Estb Br", "Acct Br", "Adm & Fee Br"].map((n) => (
                    <div className="org-col" key={n}>
                      <div className="org-vline org-vline--short" />
                      <OrgNode label={n} variant="leaf" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Admin Assistant → Adm JCO → Security + NCO */}
              <div className="org-branch2-col">
                <div className="org-vline" />
                <OrgNode label="Admin Assistant" variant="accent" />
                <div className="org-vline" />
                <OrgNode label="Adm JCO" variant="tertiary" />

                <div className="org-branch2-jco">
                  <div className="org-branch2-jco-col">
                    <div className="org-vline" />
                    <OrgNode label="Security Supervisor" variant="tertiary" />
                    <div className="org-vline org-vline--short" />
                    <OrgNode label="Security Staff" variant="leaf" />
                  </div>
                  <div className="org-branch2-jco-col">
                    <div className="org-vline" />
                    <OrgNode label="Adm NCO" variant="tertiary" />
                    <div className="org-vline org-vline--short" />
                    <OrgNode label="Adm Staff" variant="leaf" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Legend */}
          <div className="org-legend">
            {[
              { cls: "org-node--primary",   label: "Principal" },
              { cls: "org-node--secondary", label: "Vice Principal" },
              { cls: "org-node--accent",    label: "Key Appointments" },
              { cls: "org-node--tertiary",  label: "JCOs / Supervisors" },
              { cls: "org-node--leaf",      label: "Branches / Staff" },
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

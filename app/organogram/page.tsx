"use client";


import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Tabs from "@/components/Tabs";
import { BANNER } from "@/lib/images";

/* ── Types ─────────────────────────────────────────────────── */
type NodeVariant = "primary" | "secondary" | "tertiary" | "leaf" | "accent";

/* ── Single node box ────────────────────────────────────────── */
function OrgNode({
  label,
  variant = "tertiary",
  sub,
}: {
  label: string;
  variant?: NodeVariant;
  sub?: string;
}) {
  const cls =
    "org-node org-node--" + variant;

  return (
    <div className={cls}>
      <span className="org-node-label">{label}</span>
      {sub && <span className="org-node-sub">{sub}</span>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ACADEMIC ORGANOGRAM
   ═══════════════════════════════════════════════════════════════ */
function AcademicOrg() {
  const leftHeads  = ["Pre-School", "Junior Sec", "Middle Girls"];
  const rightHeads = ["Middle Boys", "Senior Girls", "Senior Boys"];

  return (
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
          {/* horizontal bar for 5 children */}
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
          {/* Bracket: vertical spine + 3 left, 3 right */}
          <div className="org-bracket">
            {/* Left column: arm is on RIGHT so it touches the centre spine */}
            <div className="org-bracket-side org-bracket-side--left">
              {leftHeads.map((sub) => (
                <div className="org-bracket-item" key={sub}>
                  <OrgNode label="Sec Head" sub={sub} variant="tertiary" />
                  <div className="org-bracket-arm" />
                </div>
              ))}
            </div>
            {/* Centre vertical spine */}
            <div className="org-bracket-spine" />
            {/* Right column: arm is on LEFT so it touches the centre spine */}
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
  );
}

/* ═══════════════════════════════════════════════════════════════
   ADMINISTRATIVE ORGANOGRAM
   ═══════════════════════════════════════════════════════════════ */
function AdminOrg() {
  return (
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
            {["Estb Br","Acct Br","Adm & Fee Br"].map((n) => (
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
  );
}

/* ── PAGE ────────────────────────────────────────────────────── */
export default function OrganogramPage() {
  return (
    <>
      <PageHero
        eyebrow="Structure"
        title="School Organogram"
        intro="How Garrison Academy Kharian Cantt is organised — academic leadership and administrative governance."
        image={BANNER.organogram}
        crumb={[{ label: "Organogram" }]}
      />
      <section className="org-section">
        <div className="wrap">
          <SectionHead eyebrow="Governance" title="One campus, two clear lines of leadership" />
          <Tabs
            items={[
              {
                label: "Academic",
                panel: <AcademicOrg />,
              },
              {
                label: "Administrative",
                panel: <AdminOrg />,
              },
            ]}
          />

          {/* Legend */}
          <div className="org-legend">
            {[
              { cls: "org-node--primary",   label: "Principal" },
              { cls: "org-node--secondary", label: "Vice Principals" },
              { cls: "org-node--accent",    label: "Key Appointments" },
              { cls: "org-node--tertiary",  label: "Section Heads / JCOs" },
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

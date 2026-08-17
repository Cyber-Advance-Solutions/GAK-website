import React from "react";
import { GraduationCap, Building2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Tabs from "@/components/Tabs";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Organogram" };

/* ── shared primitives ─────────────────────────────────── */
function Node({ t, s, top, sub, style }: { t: string; s?: string; top?: boolean; sub?: boolean; style?: React.CSSProperties }) {
  return (
    <div className={`node${top ? " top" : ""}${sub ? " sub" : ""}`} style={style}>
      <div className="t">{t}</div>
      {s && <div className="s">{s}</div>}
    </div>
  );
}

function Conn() {
  return <div className="connector" />;
}

/* ── ACADEMIC ORGANOGRAM ───────────────────────────────── */
function AcademicOrg() {
  const V = "var(--line-strong)";
  const vl = (h = 24) => <div style={{ width: 2, height: h, flexShrink: 0, background: V }} />;
  const hbar = (l = "5%", r = "5%") => (
    <div style={{ position: "absolute", top: 0, left: l, right: r, height: 2, background: V }} />
  );

  const miscAppts = [
    { t: "REHC" }, { t: "HOD IT" }, { t: "COE" },
    { t: "CCA COORD" }, { t: "CCA COORD" },
  ];
  const secHeads = [
    { t: "SEC HEAD", s: "Pre-School" },
    { t: "SEC HEAD", s: "Junior Sec" },
    { t: "SEC HEAD", s: "Middle Girls" },
    { t: "SEC HEAD", s: "Middle Boys" },
    { t: "SEC HEAD", s: "Senior Girls" },
    { t: "SEC HEAD", s: "Senior Boys" },
  ];

  return (
    <div className="org" style={{ minWidth: 1100 }}>

      {/* ── PRINCIPAL ── */}
      <Node t="PRINCIPAL" top />
      {vl()}

      {/* ── Level 1: horizontal bar + 3 columns (flex 1:2:1) ── */}
      <div style={{ position: "relative", display: "flex", width: "100%" }}>
        {/* bar: left col centre = 12.5%, right col centre = 87.5% */}
        <div style={{ position: "absolute", top: 0, left: "12.5%", right: "12.5%", height: 2, background: V }} />

        {/* Column 1 — Misc Appts */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "0 10px" }}>
          {vl()}
          <Node t="Misc Appts" />
          {vl()}
          <div style={{ position: "relative", display: "flex", gap: 10, justifyContent: "center" }}>
            {hbar("6%", "6%")}
            {miscAppts.map((item, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {vl()}
                <Node t={item.t} sub />
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 — VP APSACS → 6 SEC HEADs (double width) */}
        <div style={{ flex: 2, display: "flex", flexDirection: "column", alignItems: "center", padding: "0 10px" }}>
          {vl()}
          <Node t="VICE PRINCIPAL" s="APSACS" />
          {vl()}
          {/* nowrap keeps all 6 in one row */}
          <div style={{ position: "relative", display: "flex", gap: 10, justifyContent: "center", flexWrap: "nowrap" }}>
            {hbar("3%", "3%")}
            {secHeads.map((sh, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {vl()}
                <Node t={sh.t} s={sh.s} sub />
              </div>
            ))}
          </div>
        </div>

        {/* Column 3 — VP APSIS */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "0 10px" }}>
          {vl()}
          <Node t="VICE PRINCIPAL" s="APSIS" />
          {vl()}
          <Node t="SEC HEAD APSIS" sub />
        </div>
      </div>

    </div>
  );
}


/* ── ADMINISTRATIVE ORGANOGRAM ─────────────────────────── */
function AdminOrg() {
  return (
    <div className="org" style={{ gap: 0 }}>
      <Node t="PRINCIPAL" top />
      <Conn />
      <Node t="VICE PRINCIPAL" />
      <Conn />

      {/* horizontal bridge */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", width: "100%" }}>
        <div style={{ flex: 1, height: 2, background: "var(--line-strong)" }} />
        <div style={{ width: 2, height: 24, background: "var(--line-strong)" }} />
        <div style={{ flex: 1, height: 2, background: "var(--line-strong)" }} />
      </div>

      {/* Two columns */}
      <div style={{ display: "flex", gap: 48, justifyContent: "center", alignItems: "flex-start", flexWrap: "wrap", width: "100%" }}>

        {/* Left: Admin Offices */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ width: 2, height: 24, background: "var(--line-strong)" }} />
          <Node t="Admin Offices" />
          <Conn />
          <div style={{ position: "relative", display: "flex", gap: 12, justifyContent: "center" }}>
            <div style={{ position: "absolute", top: 0, left: "5%", right: "5%", height: 2, background: "var(--line-strong)" }} />
            {["Estb Br", "Acct Br", "Adm & Fee Br"].map((label, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: 2, height: 24, background: "var(--line-strong)" }} />
                <Node t={label} sub />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Admin Assistant chain */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ width: 2, height: 24, background: "var(--line-strong)" }} />
          <Node t="Admin Assistant" />
          <Conn />
          <Node t="Adm JCO" />
          <Conn />

          {/* Security Sup + Adm NCO */}
          <div style={{ position: "relative", display: "flex", gap: 32, justifyContent: "center" }}>
            <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 2, background: "var(--line-strong)" }} />

            {/* Security branch */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 2, height: 24, background: "var(--line-strong)" }} />
              <Node t="Security Supervisor" sub />
              <div style={{ width: 2, height: 24, background: "var(--line-strong)" }} />
              <Node t="Security Staff" sub />
            </div>

            {/* Adm NCO branch */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 2, height: 24, background: "var(--line-strong)" }} />
              <Node t="Adm NCO" sub />
              <div style={{ width: 2, height: 24, background: "var(--line-strong)" }} />
              <Node t="Adm Staff" sub />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ── PAGE ──────────────────────────────────────────────── */
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
      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Governance" title="One campus, two clear lines of leadership" />
          <Tabs
            items={[
              { label: "Academic", panel: <AcademicOrg /> },
              { label: "Administrative", panel: <AdminOrg /> },
            ]}
          />
          <div className="grid g2" style={{ maxWidth: 560, marginTop: 34 }}>
            <div className="linkcard">
              <div className="lc-ic"><GraduationCap size={22} strokeWidth={1.8} /></div>
              <div>
                <h4>Academic line</h4>
                <p>Section heads reporting through Vice Principals (APSACS &amp; APSIS).</p>
              </div>
            </div>
            <div className="linkcard">
              <div className="lc-ic"><Building2 size={22} strokeWidth={1.8} /></div>
              <div>
                <h4>Administrative line</h4>
                <p>Support departments under Admin Offices and Admin Assistant.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


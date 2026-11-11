import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";
import { getConduct, ruleFor } from "@/lib/mappers/about";

export const metadata = { title: "Code of Conduct" };
export const dynamic = "force-dynamic";

const cell = { padding: 12, border: "1px solid #ddd" } as const;
const head = { ...cell, background: "#1a472a", color: "white" } as const;
const VALUE_COLS = ["For Students", "For Staff", "For Leadership"];
const PILLAR_COLS = ["Vision Target", "Mission Vehicle", "Core Value"];

export default async function CodeOfConductPage() {
  const conduct = await getConduct();
  return (
    <>
      <PageHero
        eyebrow="Our standards"
        title={conduct?.title || "Code of Conduct"}
        intro="The values-driven code of conduct that guides students, staff and leadership across Garrison Academy Kharian Cantt."
        image={BANNER["about-code-of-conduct"]}
        crumb={[{ label: "About Us", href: "/about" }, { label: "Code of Conduct" }]}
        
      />

      {conduct && conduct.values.length > 0 && (
      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Our shared standard" title="The Universal Standard: Our Shared Values Code" intro={conduct.preamble || undefined} mw='100%'/>

          <div style={{ overflowX: "auto", marginTop: 24 }}>
            <table style={{ width: "100%", minWidth: 800, borderCollapse: "collapse", background: "white", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#1a472a", color: "white" }}>
                  <th style={{ padding: 12, textAlign: "left", border: "1px solid #ddd" }}>Core Value</th>
                  {VALUE_COLS.map((c) => (
                    <th key={c} style={{ padding: 12, textAlign: "left", border: "1px solid #ddd" }}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {conduct.values.map((v, i) => (
                  <tr key={v.id} style={i % 2 === 1 ? { background: "#e8f5e9" } : undefined}>
                    <td style={head}><strong>★ {v.title}</strong>{v.description && (<><br /><span style={{ fontStyle: "italic", fontSize: 12 }}>{v.description}</span></>)}</td>
                    {VALUE_COLS.map((c, ci) => (
                      <td key={c} style={cell}>{ruleFor(v, c, ci)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      )}

      {conduct && conduct.pillars.length > 0 && (
      <section className="sec pt-0" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="prose" style={{ maxWidth: "none" }}>
            <h3 style={{ marginBottom: 16 }}>Alignment Analysis</h3>
            <p>The following table shows precisely how our Vision, Mission and Values interlock across four strategic pillars:</p>

            <div style={{ overflowX: "auto", marginTop: 24 }}>
              <table style={{ width: "100%", minWidth: 600, borderCollapse: "collapse", background: "white", fontSize: 14 }}>
                <thead>
                  <tr style={{ background: "#1a472a", color: "white" }}>
                    <th style={{ padding: 12, textAlign: "left", border: "1px solid #ddd" }}>Strategic Pillar</th>
                    <th style={{ padding: 12, textAlign: "left", border: "1px solid #ddd" }}>Vision Target (Outcome)</th>
                    <th style={{ padding: 12, textAlign: "left", border: "1px solid #ddd" }}>Mission Vehicle (Input)</th>
                    <th style={{ padding: 12, textAlign: "left", border: "1px solid #ddd" }}>Core Value (Action)</th>
                  </tr>
                </thead>
                <tbody>
                  {conduct.pillars.map((p, i) => (
                    <tr key={p.id} style={{ background: i % 2 === 0 ? "#e8f5e9" : "#fffde7" }}>
                      <td style={{ ...head, fontWeight: 700 }}>{p.title}</td>
                      {PILLAR_COLS.map((c, ci) => (
                        <td key={c} style={ci < 2 ? { ...cell, fontStyle: "italic" } : cell}>{ruleFor(p, c, ci)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      )}

      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="grid g2">
            <div style={{ background: "rgba(224, 186, 68, 0.1)", borderLeft: "4px solid #d4a017", padding: 24, borderRadius: 8 }}>
              <h4 style={{ color: "#b8860b", fontWeight: 700, marginBottom: 12 }}>What This Is Not</h4>
              <p style={{ fontStyle: "italic", margin: 0 }}>This framework is not a motto to display. It is not satisfied by a poster on the wall or a slide in an assembly. It is satisfied only by consistent, observable behaviour — in every classroom, every staffroom, and every office, every single day.</p>
            </div>
            <div style={{ background: "rgba(34, 139, 34, 0.1)", borderLeft: "4px solid #228b22", padding: 24, borderRadius: 8 }}>
              <h4 style={{ color: "#006400", fontWeight: 700, marginBottom: 12 }}>The Ultimate Test of Interrelation</h4>
              <p style={{ fontStyle: "italic", marginBottom: 8, fontWeight: 700 }}>If a teacher asks: &quot;Why am I grading a student on asking big questions today?&quot;</p>
              <p style={{ marginBottom: 8 }}><strong>The answer:</strong> Because our Value is to Think Critically, which executes our Mission to challenge students with real problems, so we can achieve our Vision of developing independent thinkers.</p>
              <p style={{ margin: 0, fontWeight: 700, color: "#1a472a" }}>The loop is completely closed. Every daily action on campus is directly tied to our ultimate institutional purpose.</p>
            </div>
          </div>

          <div className="note-box mt2" style={{ marginTop: 32 }}>
            The full code of conduct handbook is available in the{" "}
            <Link href="/downloads" style={{ color: "var(--green-700)", fontWeight: 700, textDecoration: "underline" }}>Downloads</Link> section
            {conduct?.documentUrl ? (
              <>
                {" "}(
                <a href={conduct.documentUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--green-700)", fontWeight: 700, textDecoration: "underline" }}>download the PDF</a>)
              </>
            ) : null}
            .
          </div>
        </div>
      </section>
    </>
  );
}

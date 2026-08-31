import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Code of Conduct" };

export default function CodeOfConductPage() {
  return (
    <>
      <PageHero
        eyebrow="Our standards"
        title="Code of Conduct"
        intro="The values-driven code of conduct that guides students, staff and leadership across Garrison Academy Kharian Cantt."
        image={BANNER["about-code-of-conduct"]}
        crumb={[{ label: "About Us", href: "/about" }, { label: "Code of Conduct" }]}
        
      />

      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Our shared standard" title="The Universal Standard: Our Shared Values Code" intro="Our Core Values are a universal code. From students in classrooms and teachers in staffrooms, to leaders in offices and support staff across our campus — we hold ourselves to the exact same standards. We will not demand from students and colleagues what we do not actively model as professionals. Each value below is translated into specific, observable behaviours for every role in this institution." mw='100%'/>

          <div style={{ overflowX: "auto", marginTop: 24 }}>
            <table style={{ width: "100%", minWidth: 800, borderCollapse: "collapse", background: "white", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#1a472a", color: "white" }}>
                  <th style={{ padding: 12, textAlign: "left", border: "1px solid #ddd" }}>Core Value</th>
                  <th style={{ padding: 12, textAlign: "left", border: "1px solid #ddd" }}>For Students</th>
                  <th style={{ padding: 12, textAlign: "left", border: "1px solid #ddd" }}>For Staff</th>
                  <th style={{ padding: 12, textAlign: "left", border: "1px solid #ddd" }}>For Leadership</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: 12, border: "1px solid #ddd", background: "#1a472a", color: "white" }}><strong>★ Think Critically</strong><br /><span style={{ fontStyle: "italic", fontSize: 12 }}>Ask Why. Find out How. Think before you Act.</span></td>
                  <td style={{ padding: 12, border: "1px solid #ddd" }}>I ask questions to understand better. I look for facts and answers before deciding what to believe. I use what I learn to make wise choices, solve problems, and improve myself every day.</td>
                  <td style={{ padding: 12, border: "1px solid #ddd" }}>I question my own practice before questioning others. I seek evidence through data, observation, and feedback before forming opinions about what works. I actively pursue better ways to teach, not just familiar ones. When findings challenge my current practice, I see an opportunity to learn and improve.</td>
                  <td style={{ padding: 12, border: "1px solid #ddd" }}>I base every decision on evidence, not assumption, habit, or convenience. I actively seek information that challenges what I already believe, not just information that confirms it. When findings are uncomfortable, I embrace them as opportunities for growth. I act on what the evidence demands.</td>
                </tr>
                <tr style={{ background: "#e8f5e9" }}>
                  <td style={{ padding: 12, border: "1px solid #ddd", background: "#1a472a", color: "white" }}><strong>★ Act Righteously</strong><br /><span style={{ fontStyle: "italic", fontSize: 12 }}>Do The Right Thing Always — Even When No One is Watching.</span></td>
                  <td style={{ padding: 12, border: "1px solid #ddd" }}>I choose honesty even when it is difficult. I take responsibility for my mistakes without excuse. I treat every person in our community with dignity, fairness, and respect.</td>
                  <td style={{ padding: 12, border: "1px solid #ddd" }}>I act with integrity in every interaction. I provide honest feedback, even when it is difficult. I admit mistakes openly, learn from them, and take responsibility for making things right.</td>
                  <td style={{ padding: 12, border: "1px solid #ddd" }}>I lead with transparency, fairness, and accountability. I distribute opportunities, resources, and recognition based on merit. I support my team publicly, address concerns respectfully, and model the standards I expect from others.</td>
                </tr>
                <tr>
                  <td style={{ padding: 12, border: "1px solid #ddd", background: "#1a472a", color: "white" }}><strong>★ Adapt Bravely</strong><br /><span style={{ fontStyle: "italic", fontSize: 12 }}>Try, Fail, Learn, Repeat — Every Single Day.</span></td>
                  <td style={{ padding: 12, border: "1px solid #ddd" }}>I embrace challenges as opportunities to learn. I try new approaches even when success is not guaranteed. I learn from mistakes and never allow &quot;I can&apos;t&quot; to be my final answer.</td>
                  <td style={{ padding: 12, border: "1px solid #ddd" }}>I continuously develop new skills and embrace innovation. I adjust my practice when evidence shows a better way forward. I remain flexible, resilient, and focused when circumstances change.</td>
                  <td style={{ padding: 12, border: "1px solid #ddd" }}>I lead change proactively rather than reactively. I make thoughtful decisions under pressure and remain composed during uncertainty. I build systems that are sustainable, adaptable, and capable of supporting future growth.</td>
                </tr>
                <tr style={{ background: "#e8f5e9" }}>
                  <td style={{ padding: 12, border: "1px solid #ddd", background: "#1a472a", color: "white" }}><strong>★ Work Together</strong><br /><span style={{ fontStyle: "italic", fontSize: 12 }}>Respect Differences. Support Others. Grow Together.</span></td>
                  <td style={{ padding: 12, border: "1px solid #ddd" }}>I respect every difference—background, ability, experience, and opinion. I help others learn, grow, and succeed. I understand that our success is stronger when we support one another.</td>
                  <td style={{ padding: 12, border: "1px solid #ddd" }}>I break down barriers and work collaboratively with colleagues. I share knowledge, resources, and credit generously. I treat every challenge faced by a colleague as an opportunity for collective problem-solving and growth.</td>
                  <td style={{ padding: 12, border: "1px solid #ddd" }}>I value diverse perspectives, consider them thoughtfully, and make decisions guided by evidence, shared values, and the strategic goals of the institution. I build trust, strengthen collaboration, and resolve challenges before they become barriers. I create an environment where people feel valued, supported, and inspired to give their best.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

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
                  <tr style={{ background: "#e8f5e9" }}>
                    <td style={{ padding: 12, border: "1px solid #ddd", fontWeight: 700, background: "#1a472a", color: "white" }}>Pillar 1 Intellect</td>
                    <td style={{ padding: 12, border: "1px solid #ddd", fontStyle: "italic" }}>...think independently</td>
                    <td style={{ padding: 12, border: "1px solid #ddd", fontStyle: "italic" }}>...challenge students to solve problems</td>
                    <td style={{ padding: 12, border: "1px solid #ddd" }}>Think Critically — Ask Why. Find out How. Think before you Act.</td>
                  </tr>
                  <tr style={{ background: "#fffde7" }}>
                    <td style={{ padding: 12, border: "1px solid #ddd", fontWeight: 700, background: "#1a472a", color: "white" }}>Pillar 2 Character</td>
                    <td style={{ padding: 12, border: "1px solid #ddd", fontStyle: "italic" }}>...act responsibly</td>
                    <td style={{ padding: 12, border: "1px solid #ddd", fontStyle: "italic" }}>...make ethical choices</td>
                    <td style={{ padding: 12, border: "1px solid #ddd" }}>Act Righteously — Do the right thing always, even when no one is watching.</td>
                  </tr>
                  <tr style={{ background: "#e8f5e9" }}>
                    <td style={{ padding: 12, border: "1px solid #ddd", fontWeight: 700, background: "#1a472a", color: "white" }}>Pillar 3 Agility</td>
                    <td style={{ padding: 12, border: "1px solid #ddd", fontStyle: "italic" }}>...thrive bravely</td>
                    <td style={{ padding: 12, border: "1px solid #ddd", fontStyle: "italic" }}>...adaptable individuals</td>
                    <td style={{ padding: 12, border: "1px solid #ddd" }}>Adapt Bravely — Try, fail, learn, repeat — every single day.</td>
                  </tr>
                  <tr style={{ background: "#fffde7" }}>
                    <td style={{ padding: 12, border: "1px solid #ddd", fontWeight: 700, background: "#1a472a", color: "white" }}>Pillar 4 Synergy</td>
                    <td style={{ padding: 12, border: "1px solid #ddd", fontStyle: "italic" }}>...capable Individuals</td>
                    <td style={{ padding: 12, border: "1px solid #ddd", fontStyle: "italic" }}>...grow, contribute, and succeed — together</td>
                    <td style={{ padding: 12, border: "1px solid #ddd" }}>Work Together — Respect differences. Support Others. Grow Together</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

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
            <Link href="/downloads" style={{ color: "var(--green-700)", fontWeight: 700, textDecoration: "underline" }}>Downloads</Link> section.
          </div>
        </div>
      </section>
    </>
  );
}

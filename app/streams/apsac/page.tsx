import Link from "next/link";
import { BookOpen, Backpack, Layers, GraduationCap, Globe } from "lucide-react";
import PageHero from "@/components/PageHero";
import { BANNER } from "@/lib/images";

export const metadata = { title: "APSAC Stream" };

export default function ApsacStreamPage() {
  return (
    <>
      <PageHero
        eyebrow="National Curriculum"
        title="APSAC Stream"
        intro="The national curriculum from Pre-School to Intermediate, with consistently strong board results."
        image={BANNER.apsac}
        crumb={[{ label: "Streams" }, { label: "APSAC" }]}
      />

      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="splitimg">
            <div className="prose">
              <span className="eyebrow">About the APSAC experience</span>
              <h2 className="h-lg mb-8">Learning with purpose, growing with confidence.</h2>
              <p>APSAC brings together strong academic foundations, thoughtful guidance, and opportunities for every student to discover their strengths.</p>
              <p>This space will include more information about the stream, its learning environment, and the experiences that shape our students.</p>
            </div>
            <div className="fig" style={{ backgroundImage: `url(${BANNER.apsac})` }} />
          </div>
        </div>
      </section>

      <section className="sec" style={{ minHeight: "60vh" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Academic Pathway</span>
            <h2 className="h-lg mb-8">A clear journey — from first steps to final exams.</h2>
          </div>
          <div className="pathway">
            <Link href="/sections/pre" className="pw" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
              <i className="pw-ic"><BookOpen size={24} /></i>
              <div className="pw-n">Step 01</div>
              <h4>Pre-School</h4>
              <p>Play-based foundation years</p>
              <div style={{ marginTop: "12px", fontSize: "0.8rem", color: "var(--ink-soft)", fontWeight: 500, lineHeight: 1.4 }}>
                <div>Summer: 0730-1330 hrs</div>
                <div>Winter: 0800-1400 hrs</div>
              </div>
            </Link>
            <Link href="/sections/junior" className="pw" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
              <i className="pw-ic"><Backpack size={24} /></i>
              <div className="pw-n">Step 02</div>
              <h4>Junior School</h4>
              <p>Classes I – III</p>
              <div style={{ marginTop: "12px", fontSize: "0.8rem", color: "var(--ink-soft)", fontWeight: 500, lineHeight: 1.4 }}>
                <div>Summer: 0730-1330 hrs</div>
                <div>Winter: 0800-1400 hrs</div>
              </div>
            </Link>
            <Link href="/sections/middle-boys" className="pw" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
              <i className="pw-ic"><Layers size={24} /></i>
              <div className="pw-n">Step 03</div>
              <h4>Middle School</h4>
              <p>Classes IV – VIII</p>
              <div style={{ marginTop: "12px", fontSize: "0.8rem", color: "var(--ink-soft)", fontWeight: 500, lineHeight: 1.4 }}>
                <div>Summer: 0730-1330 hrs</div>
                <div>Winter: 0800-1400 hrs</div>
              </div>
            </Link>
            <Link href="/sections/senior-boys" className="pw" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
              <i className="pw-ic"><GraduationCap size={24} /></i>
              <div className="pw-n">Step 04</div>
              <h4>Senior School</h4>
              <p>FBISE · IX – XII</p>
              <div style={{ marginTop: "12px", fontSize: "0.8rem", color: "var(--ink-soft)", fontWeight: 500, lineHeight: 1.4 }}>
                <div>Summer: 0730-1330 hrs</div>
                <div>Winter: 0800-1400 hrs</div>
              </div>
            </Link>

          </div>
        </div>
      </section>

    </>
  );
}

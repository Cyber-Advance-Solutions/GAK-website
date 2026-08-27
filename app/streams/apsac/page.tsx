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

      <section className="sec" style={{ minHeight: "60vh" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Academic Pathway</span>
            <h2 className="h-lg">A clear journey — from first steps to final exams.</h2>
          </div>
          <div className="pathway">
            <Link href="/sections/pre" className="pw" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
              <i className="pw-ic"><BookOpen size={24} /></i>
              <div className="pw-n">Step 01</div>
              <h4>Pre-School</h4>
              <p>Play-based foundation years</p>
            </Link>
            <Link href="/sections/junior" className="pw" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
              <i className="pw-ic"><Backpack size={24} /></i>
              <div className="pw-n">Step 02</div>
              <h4>Junior School</h4>
              <p>Classes I – III</p>
            </Link>
            <Link href="/sections/middle-boys" className="pw" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
              <i className="pw-ic"><Layers size={24} /></i>
              <div className="pw-n">Step 03</div>
              <h4>Middle School</h4>
              <p>Classes IV – VIII</p>
            </Link>
            <Link href="/sections/senior-boys" className="pw" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
              <i className="pw-ic"><GraduationCap size={24} /></i>
              <div className="pw-n">Step 04</div>
              <h4>Senior School</h4>
              <p>FBISE · IX – XII</p>
            </Link>
            <Link href="/sections/apsis" className="pw" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
              <i className="pw-ic"><Globe size={24} /></i>
              <div className="pw-n">Step 05</div>
              <h4>APSIS</h4>
              <p>Cambridge international</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

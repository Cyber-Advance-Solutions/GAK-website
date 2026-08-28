import Link from "next/link";
import { BookOpen, Backpack, Layers, GraduationCap, Globe } from "lucide-react";
import PageHero from "@/components/PageHero";
import { BANNER } from "@/lib/images";

export const metadata = { title: "APSIS Stream" };

export default function ApsisStreamPage() {
  return (
    <>
      <PageHero
        eyebrow="International Curriculum"
        title="APSIS Stream"
        intro="A globally benchmarked Cambridge pathway, opening doors to universities at home and abroad."
        image={BANNER.apsis}
        crumb={[{ label: "Streams" }, { label: "APSIS" }]}
      />

      <section className="sec" style={{ minHeight: "60vh" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Academic Pathway</span>
            <h2 className="h-lg">A clear journey — from first steps to final exams.</h2>
          </div>
          <div className="pathway">
            <Link href="/sections/junior" className="pw" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
              <i className="pw-ic"><Backpack size={24} /></i>
              <div className="pw-n">Step 01</div>
              <h4>Junior School</h4>
              <p>Classes I – III</p>
              <div style={{ marginTop: "12px", fontSize: "0.8rem", color: "var(--ink-soft)", fontWeight: 500, lineHeight: 1.4 }}>
                <div>Summer: 0730-1330 hrs</div>
                <div>Winter: 0800-1400 hrs</div>
              </div>
            </Link>
            <Link href="/sections/middle-boys" className="pw" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
              <i className="pw-ic"><Layers size={24} /></i>
              <div className="pw-n">Step 02</div>
              <h4>Middle School</h4>
              <p>Classes IV – VIII</p>
              <div style={{ marginTop: "12px", fontSize: "0.8rem", color: "var(--ink-soft)", fontWeight: 500, lineHeight: 1.4 }}>
                <div>Summer: 0730-1330 hrs</div>
                <div>Winter: 0800-1400 hrs</div>
              </div>
            </Link>
            <Link href="/sections/apsis" className="pw" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
              <i className="pw-ic"><Globe size={24} /></i>
              <div className="pw-n">Step 03</div>
              <h4>O Levels</h4>
              <p>Cambridge international</p>
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

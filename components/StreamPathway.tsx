import Link from "next/link";
import { BookOpen, Backpack, Layers, GraduationCap, Globe, type LucideIcon } from "lucide-react";
import type { StreamStep } from "@/lib/mappers/streams";

function iconFor(title: string): LucideIcon {
  const t = title.toLowerCase();
  if (/pre/.test(t)) return BookOpen;
  if (/junior/.test(t)) return Backpack;
  if (/middle/.test(t)) return Layers;
  if (/o ?level|a ?level|cambridge|igcse/.test(t)) return Globe;
  return GraduationCap;
}

/** "Academic Pathway" step cards of the /streams pages */
export default function StreamPathway({ steps }: { steps: StreamStep[] }) {
  return (
    <div className="pathway">
      {steps.map((s) => {
        const Icon = iconFor(s.title);
        const body = (
          <>
            <i className="pw-ic"><Icon size={24} /></i>
            <div className="pw-n">Step {String(s.n).padStart(2, "0")}</div>
            <h4>{s.title}</h4>
            {s.gradeRange && <p>{s.gradeRange}</p>}
            {s.lines.length > 0 && (
              <div style={{ marginTop: "12px", fontSize: "0.8rem", color: "var(--ink-soft)", fontWeight: 500, lineHeight: 1.4 }}>
                {s.lines.map((l, i) => <div key={i}>{l}</div>)}
              </div>
            )}
          </>
        );
        return s.href ? (
          <Link key={s.id} href={s.href} className="pw" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
            {body}
          </Link>
        ) : (
          <div key={s.id} className="pw">{body}</div>
        );
      })}
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Backpack, Layers, GraduationCap, Globe, Clock } from "lucide-react";

interface PathwayStep {
  step: string;
  title: string;
  desc: string;
  href: string;
  icon: typeof BookOpen;
  summer: string;
  winter: string;
}

const APSAC_STEPS: PathwayStep[] = [
  {
    step: "Step 01",
    title: "Pre-School",
    desc: "Play-based foundation years",
    href: "/sections/pre",
    icon: BookOpen,
    summer: "0730-1330 hrs",
    winter: "0800-1400 hrs",
  },
  {
    step: "Step 02",
    title: "Junior School",
    desc: "Classes I – III",
    href: "/sections/junior",
    icon: Backpack,
    summer: "0730-1330 hrs",
    winter: "0800-1400 hrs",
  },
  {
    step: "Step 03",
    title: "Middle School",
    desc: "Classes IV – VIII",
    href: "/sections/middle-boys",
    icon: Layers,
    summer: "0730-1330 hrs",
    winter: "0800-1400 hrs",
  },
  {
    step: "Step 04",
    title: "Senior School",
    desc: "FBISE · IX – XII",
    href: "/sections/senior-boys",
    icon: GraduationCap,
    summer: "0730-1330 hrs",
    winter: "0800-1400 hrs",
  },
];

const APSIS_STEPS: PathwayStep[] = [
  {
    step: "Step 01",
    title: "Junior School",
    desc: "Classes I – III",
    href: "/sections/junior",
    icon: Backpack,
    summer: "0730-1330 hrs",
    winter: "0800-1400 hrs",
  },
  {
    step: "Step 02",
    title: "Middle School",
    desc: "Classes IV – VIII",
    href: "/sections/middle-boys",
    icon: Layers,
    summer: "0730-1330 hrs",
    winter: "0800-1400 hrs",
  },
  {
    step: "Step 03",
    title: "O Levels",
    desc: "Cambridge international",
    href: "/sections/apsis",
    icon: Globe,
    summer: "0730-1330 hrs",
    winter: "0800-1400 hrs",
  },
];

export default function AcademicPathwaySection() {
  const [activeStream, setActiveStream] = useState<"apsac" | "apsis">("apsac");

  const currentSteps = activeStream === "apsac" ? APSAC_STEPS : APSIS_STEPS;
  const streamInfo =
    activeStream === "apsac"
      ? {
          badge: "National Curriculum",
          title: "APSAC Pathway",
          desc: "The national curriculum from Pre-School to Intermediate under the FBISE board.",
          link: "/streams/apsac",
          linkText: "Explore full APSAC stream",
        }
      : {
          badge: "International Curriculum",
          title: "APSIS Pathway",
          desc: "A globally benchmarked Cambridge pathway opening doors to universities worldwide.",
          link: "/streams/apsis",
          linkText: "Explore full APSIS stream",
        };

  return (
    <section className="sec" id="academic-pathways">
      <div className="wrap">
        {/* Section Header */}
        <div className="sec-head" style={{ marginBottom: "28px" }}>
          <span className="eyebrow">Academic Pathway</span>
          <h2 className="h-lg">A clear journey — from first steps to final exams.</h2>
        </div>

        {/* Stream Toggle Switcher & Info */}
        <div className="pathway-toggle-wrap">
          <div className="pathway-tabs" role="tablist" aria-label="Academic Stream Selector">
            <button
              type="button"
              role="tab"
              aria-selected={activeStream === "apsac"}
              className={`pathway-tab ${activeStream === "apsac" ? "active" : ""}`}
              onClick={() => setActiveStream("apsac")}
            >
              <span>APSAC</span>
              <span className="tab-tag">National · 4 Steps</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeStream === "apsis"}
              className={`pathway-tab ${activeStream === "apsis" ? "active" : ""}`}
              onClick={() => setActiveStream("apsis")}
            >
              <span>APSIS</span>
              <span className="tab-tag">Cambridge · 3 Steps</span>
            </button>
          </div>

          <div className="pathway-info">
            <span style={{ fontSize: "0.9rem", color: "var(--ink-soft)" }}>
              {streamInfo.desc}
            </span>
            <Link className="link-arrow" href={streamInfo.link} style={{ whiteSpace: "nowrap", marginTop: '0px' }}>
              {streamInfo.linkText} <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Pathway Steps Grid */}
        <div
          className={`pathway ${activeStream === "apsac" ? "pathway-4" : "pathway-3"}`}
          key={activeStream}
        >
          {currentSteps.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.title + item.step}
                href={item.href}
                className="pw"
                style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
              >
                <i className="pw-ic">
                  <IconComponent size={24} />
                </i>
                <div className="pw-n">{item.step}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <div
                  style={{
                    marginTop: "12px",
                    fontSize: "0.8rem",
                    color: "var(--ink-soft)",
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                >
                  <div>Summer: {item.summer}</div>
                  <div>Winter: {item.winter}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

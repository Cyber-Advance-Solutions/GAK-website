"use client";
import { useState } from "react";
import Accordion from "@/components/Accordion";
import type { FaqGroup } from "@/lib/mappers/faqs";

export default function FaqView({ groups }: { groups: FaqGroup[] }) {
  const [active, setActive] = useState(groups[0]?.key);
  const current = groups.find((g) => g.key === active) ?? groups[0];
  if (!current) {
    return (
      <div className="wrap">
        <p style={{ color: "var(--ink-soft)" }}>No questions have been published yet.</p>
      </div>
    );
  }
  return (
    <div className="wrap editorial">
      <aside className="rail">
        <div className="factcard">
          <h4>Categories</h4>
          <div className="faqcats">
            {groups.map((g) => (
              <button key={g.key} className={`faqcat ${current.key === g.key ? "active" : ""}`} onClick={() => setActive(g.key)}>
                {g.label}
              </button>
            ))}
          </div>
        </div>
      </aside>
      <div className="maincol">
        <Accordion items={current.items} />
      </div>
    </div>
  );
}

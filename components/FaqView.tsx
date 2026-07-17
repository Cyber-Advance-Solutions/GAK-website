"use client";
import { useState } from "react";
import Accordion from "@/components/Accordion";
import { FAQ_DATA } from "@/lib/data";

export default function FaqView() {
  const keys = Object.keys(FAQ_DATA);
  const [active, setActive] = useState(keys[0]);
  return (
    <div className="wrap editorial">
      <aside className="rail">
        <div className="factcard">
          <h4>Categories</h4>
          <div className="faqcats">
            {keys.map((k) => (
              <button key={k} className={`faqcat ${active === k ? "active" : ""}`} onClick={() => setActive(k)}>
                {FAQ_DATA[k].label}
              </button>
            ))}
          </div>
        </div>
      </aside>
      <div className="maincol">
        <Accordion items={FAQ_DATA[active].items} />
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Team member message clamped to two lines, with "Read more" to show it all.
 * The button only appears when the text is actually longer than two lines.
 */
export default function TeamIntro({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [open, setOpen] = useState(false);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      if (!open) setOverflows(el.scrollHeight - el.clientHeight > 1);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [text, open]);

  if (!text) return null;

  return (
    <>
      <p ref={ref} className={`team-intro${open ? "" : " clamped"}`}>
        {text}
      </p>
      {(overflows || open) && (
        <button type="button" className="team-readmore" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
          {open ? "Read less" : "Read more"}
        </button>
      )}
    </>
  );
}

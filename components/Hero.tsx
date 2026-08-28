"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const SLIDES = [
  "/hero1.png",
  "/hero2.png",
  "/hero3.png",
  "/hero4.png",
  "/hero5.png",
  "/hero7.png",
  "/hero8.png",
  "/hero9.png",
  "/hero10.png",
  "/hero11.png",
  "/hero12.png",
  "/hero13.png",
];

// Cinematic ken-burns motions assigned per slide
const MOTIONS = [
  "kb-zoom-out",
  "kb-pan-right",
  "kb-zoom-out",
  "kb-pan-left",
  "kb-zoom-out",
  "kb-pan-right",
  "kb-zoom-out",
  "kb-zoom-out",
  "kb-pan-left",
  "kb-zoom-out",
  "kb-pan-right",
  "kb-zoom-out",
] as const;

const SLIDE_DURATION = 6000; // ms visible
const FADE_DURATION  = 200;  // ms crossfade

export default function Hero() {
  const [cur, setCur]   = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const timerRef        = useRef<ReturnType<typeof setTimeout> | null>(null);

  const advance = useCallback((from: number) => {
    const next = (from + 1) % SLIDES.length;
    setPrev(from);
    setCur(next);
  }, []);

  useEffect(() => {
    timerRef.current = setTimeout(() => advance(cur), SLIDE_DURATION);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [cur, advance]);

  // Clean up prev after fade completes
  useEffect(() => {
    if (prev === null) return;
    const t = setTimeout(() => setPrev(null), FADE_DURATION + 80);
    return () => clearTimeout(t);
  }, [prev]);

  const jumpTo = (idx: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setPrev(cur);
    setCur(idx);
  };

  return (
    <section className="montage-hero">
      {/* ── image layers ── */}
      {SLIDES.map((src, k) => {
        const isActive = k === cur;
        const isPrev   = k === prev;
        if (!isActive && !isPrev) return null;
        return (
          <div
            key={src}
            className={`montage-layer ${isActive ? "montage-in" : "montage-out"}`}
            style={{ "--fade-dur": `${FADE_DURATION}ms` } as React.CSSProperties}
          >
            <div
              className={`montage-img ${MOTIONS[k % MOTIONS.length]}`}
              style={{ backgroundImage: `url(${src})` }}
            />
          </div>
        );
      })}

      {/* ── dark cinematic gradient ── */}
      <div className="montage-gradient" />

      {/* ── scan-line texture ── */}
      <div className="montage-scanlines" />

      {/* ── progress bar ── */}
      <div className="montage-progress">
        <div
          className="montage-progress-fill"
          key={cur}
          style={{ "--dur": `${SLIDE_DURATION}ms` } as React.CSSProperties}
        />
      </div>

      {/* ── dot navigation ── */}
      <div className="montage-dots">
        {SLIDES.map((_, k) => (
          <button
            key={k}
            className={`montage-dot ${k === cur ? "active" : ""}`}
            aria-label={`Slide ${k + 1}`}
            onClick={() => jumpTo(k)}
          />
        ))}
      </div>
    </section>
  );
}

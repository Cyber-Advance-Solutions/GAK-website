"use client";

import { useEffect, useRef, useState } from "react";

const SLIDES = [
  "/hero1.jpg",
  "/hero2.png",
  "/hero3.png",
  "/hero4.jpg",
  "/hero5.png",
  // "/hero6.jpg",
  "/hero7.jpg",
  "/hero8.jpg",
  "/hero9.png",
  "/hero10.png",
  "/hero11.jpg",
  "/hero12.jpg",
  "/hero13.jpg",
  "/hero14.png",
];

// Each slide gets a distinct cinematic motion — cycles through so every
// image feels different even as the deck loops.
const ANIMS = [
  "hero-zoom-in",
  "hero-pan-right",
  "hero-zoom-out",
  "hero-pan-left",
  "hero-zoom-in-tl",
  "hero-pan-right",
  "hero-zoom-in",
  "hero-zoom-out",
  "hero-pan-left",
  "hero-zoom-in-tl",
  "hero-pan-right",
  "hero-zoom-in",
  "hero-pan-left",
  "hero-zoom-out",
] as const;

const SLIDE_DURATION = 2000; // ms each slide stays
const TRANSITION_MS = 1400;  // cross-fade duration

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState<number | null>(null);
  const timerRef              = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (next: number) => {
    setPrev(current);
    setCurrent(next);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goTo((current + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  // Clear the "prev" layer after the cross-fade completes
  useEffect(() => {
    if (prev === null) return;
    const t = setTimeout(() => setPrev(null), TRANSITION_MS + 100);
    return () => clearTimeout(t);
  }, [prev]);

  return (
    <section className="hero hero-cinema">
      {/* slide layers */}
      {SLIDES.map((src, k) => {
        const isActive = k === current;
        const isPrev   = k === prev;
        if (!isActive && !isPrev) return null;
        return (
          <div
            key={src}
            className={`hslide ${isActive ? "hslide-in" : "hslide-out"}`}
            style={{ "--anim": ANIMS[k % ANIMS.length] } as React.CSSProperties}
          >
            <div
              className="hslide-img"
              style={{ backgroundImage: `url(${src})` }}
            />
          </div>
        );
      })}

      {/* subtle vignette overlay — no text */}
      <div className="h-vignette" />

      {/* progress bar */}
      <div className="h-progress">
        <div
          className="h-progress-bar"
          key={current}
          style={{ "--dur": `${SLIDE_DURATION}ms` } as React.CSSProperties}
        />
      </div>

      {/* dot nav */}
      <div className="hero-dots">
        {SLIDES.map((_, k) => (
          <button
            key={k}
            className={`dot ${k === current ? "active" : ""}`}
            aria-label={`Slide ${k + 1}`}
            onClick={() => {
              if (timerRef.current) clearTimeout(timerRef.current);
              goTo(k);
            }}
          />
        ))}
      </div>
    </section>
  );
}

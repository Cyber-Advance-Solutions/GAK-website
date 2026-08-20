"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/* Swap these with real Garrison Academy Kharian Cantt photos any time — same order, same names. */
const SLIDES = ["/hero1.jpg", "/hero2.png", "/hero3.png", "hero4.jpg", "/hero5.png", "/hero6.jpg", "/hero7.jpg", "/hero8.jpg", "/hero9.png", "/hero10.jpg", "/hero11.jpg", "/hero12.jpg", "/hero13.jpg", "/hero14.png"];

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero">
      <div className="slides">
        {SLIDES.map((src, k) => (
          <div
            key={src}
            className={`slide ${k === i ? "active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="tex" />
        <div className="ov" />
      </div>

      <div className="wrap">
        <div className="hcopy">
          <span className="eyebrow">Army Public School &amp; College</span>
          <h1 className="h-xl">
            A calm place to learn,
            <br />
            grow and <span className="c">lead.</span>
          </h1>
          <p className="hsub">
            Educating Kharian Cantt since 1972 — disciplined, well-rounded learning
            from Pre-School through the FBISE and Cambridge streams.
          </p>
          <div className="hero-cta">
            <Link className="btn-primary" href="/admissions">
              Apply for Admission
            </Link>
            <Link className="btn-ghost" href="/about">
              Explore the campus →
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-dots">
        {SLIDES.map((_, k) => (
          <button
            key={k}
            className={`dot ${k === i ? "active" : ""}`}
            aria-label={`Show slide ${k + 1}`}
            onClick={() => setI(k)}
          />
        ))}
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Eye, Award } from "lucide-react";

export interface AchieverPoster {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  image: string;
}

const ACHIEVERS: AchieverPoster[] = [
  {
    id: "hssc-2",
    title: "High Achievers HSSC-II",
    badge: "FBISE 2026",
    subtitle: "APS & C GAK Campus Kharian Cantt",
    image: "/achievers/01.jpeg",
  },
  {
    id: "ssc-2",
    title: "High Achievers SSC-II",
    badge: "Session 2025–26",
    subtitle: "APS & C GAK Campus Kharian Cantt",
    image: "/achievers/02.jpeg",
  },
  {
    id: "positions",
    title: "Top Position Holders (SSC-I & II)",
    badge: "Board Positions",
    subtitle: "1st, 2nd & 3rd Position Holders",
    image: "/achievers/03.jpeg",
  },
  {
    id: "ssc-1",
    title: "High Achievers SSC-I",
    badge: "Session 2025–26",
    subtitle: "APS & C GAK Campus Kharian Cantt",
    image: "/achievers/04.jpeg",
  },
  {
    id: "hssc-1",
    title: "High Achievers HSSC-I",
    badge: "FBISE 2026",
    subtitle: "APS & C GAK Campus Kharian Cantt",
    image: "/achievers/05.jpeg",
  },
  {
    id: "apsis-cie",
    title: "APSIS Cambridge Stars",
    badge: "CIE 2026",
    subtitle: "APSIS Kharian Cantt — Shining Stars",
    image: "/achievers/06.jpeg",
  },
];

export default function HighAchieversSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const close = useCallback(() => setActiveIdx(null), []);

  const prev = useCallback(() => {
    setActiveIdx((curr) => (curr === null ? null : (curr - 1 + ACHIEVERS.length) % ACHIEVERS.length));
  }, []);

  const next = useCallback(() => {
    setActiveIdx((curr) => (curr === null ? null : (curr + 1) % ACHIEVERS.length));
  }, []);

  useEffect(() => {
    if (activeIdx === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIdx, close, prev, next]);

  return (
    <section className="sec achievers-sec" id="high-achievers">
      <div className="wrap">
        {/* Section Heading */}
        <div className="sec-head">
          <span className="eyebrow">Academic Excellence</span>
          <h2 className="h-lg">High Achievers</h2>
          <p>
            Celebrating the outstanding academic accomplishments, top board examination
            positions, and distinction of our students across FBISE and Cambridge streams.
          </p>
        </div>

        {/* Achievers Grid */}
        <div className="achievers-grid">
          {ACHIEVERS.map((item, index) => (
            <div
              key={item.id}
              className="achiever-card"
              onClick={() => setActiveIdx(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveIdx(index);
                }
              }}
              aria-label={`View ${item.title}`}
            >
              {/* Image with hover overlay */}
              <div className="achiever-img-wrap">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 680px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="achiever-img"
                  priority={index < 3}
                />

                {/* Themed hover overlay layer */}
                <div className="achiever-overlay" aria-hidden="true">
                  <span className="achiever-view-btn">
                    <Eye size={17} strokeWidth={2.2} />
                    View More
                  </span>
                </div>
              </div>

              {/* Card Meta details */}
              <div className="achiever-meta">
                <div className="achiever-meta-top">
                  <span className="achiever-badge">
                    <Award size={13} strokeWidth={2.4} />
                    {item.badge}
                  </span>
                </div>
                <h3 className="achiever-title">{item.title}</h3>
                <p className="achiever-sub">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeIdx !== null && (
        <div
          className="achiever-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`High Achievers poster ${activeIdx + 1} of ${ACHIEVERS.length}`}
        >
          {/* Backdrop button to close */}
          <button
            type="button"
            className="achiever-lightbox-backdrop"
            onClick={close}
            aria-label="Close high achievers modal"
          />

          <div className="achiever-lightbox-content">
            {/* Top Bar: Counter & Close */}
            <div className="achiever-lightbox-header">
              <div className="achiever-lightbox-info">
                <span className="achiever-lightbox-count">
                  <b>{activeIdx + 1}</b> / {ACHIEVERS.length}
                </span>
                <span className="achiever-lightbox-title">
                  {ACHIEVERS[activeIdx].title}
                </span>
              </div>

              <button
                type="button"
                className="achiever-lightbox-close"
                onClick={close}
                aria-label="Close"
              >
                <X size={22} strokeWidth={2.2} />
              </button>
            </div>

            {/* Stage: Prev Button + Main Image + Next Button */}
            <div className="achiever-lightbox-stage">
              <button
                type="button"
                className="achiever-lightbox-nav prev"
                onClick={prev}
                aria-label="Previous image"
              >
                <ChevronLeft size={30} strokeWidth={2.2} />
              </button>

              <div className="achiever-lightbox-figure">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ACHIEVERS[activeIdx].image}
                  alt={ACHIEVERS[activeIdx].title}
                  className="achiever-lightbox-img"
                />
              </div>

              <button
                type="button"
                className="achiever-lightbox-nav next"
                onClick={next}
                aria-label="Next image"
              >
                <ChevronRight size={30} strokeWidth={2.2} />
              </button>
            </div>

            {/* Bottom Thumbnails Strip */}
            <div className="achiever-lightbox-thumbs">
              {ACHIEVERS.map((thumb, idx) => (
                <button
                  key={thumb.id}
                  type="button"
                  className={`achiever-thumb ${idx === activeIdx ? "active" : ""}`}
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Jump to ${thumb.title}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={thumb.image} alt={thumb.title} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

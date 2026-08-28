"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Play, X } from "lucide-react";

export default function OverviewSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  /* close modal on Escape key */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setModalOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* scroll‑driven fade‑in */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("ov-visible"); },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* lock body scroll when modal is open */
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  return (
    <>
      <section className="overview-sec" ref={sectionRef} id="overview">
        <div className="wrap ov-grid">

          {/* ── left: video thumbnail ─────────────────────── */}
          <div className="ov-media">
            <div className="ov-thumb" onClick={() => setModalOpen(true)} role="button" tabIndex={0}
              aria-label="Play school overview video"
              onKeyDown={(e) => e.key === "Enter" && setModalOpen(true)}>
              <img src="/hero3.png" alt="Garrison Academy Kharian Cantt campus" className="ov-thumb-img" />
              {/* subtle dark overlay */}
              <div className="ov-thumb-overlay" />
              {/* play button */}
              <div className="ov-play-btn" aria-hidden="true">
                <Play size={30} fill="#fff" strokeWidth={0} />
              </div>
              {/* decorative pulse rings */}
              <div className="ov-ring ov-ring-1" />
              <div className="ov-ring ov-ring-2" />
            </div>
            {/* floating badge */}
            <div className="ov-badge">
              <span className="ov-badge-year">Est.</span>
              <span className="ov-badge-num">1970's</span>
              <span className="ov-badge-label">Years of Excellence</span>
            </div>
          </div>

          {/* ── right: text content ───────────────────────── */}
          <div className="ov-body">
            <span className="eyebrow">Army Public School &amp; College</span>
            <h2 className="h-lg ov-headline">
              A calm place to learn,<br />
              grow and <span className="ov-accent">lead.</span>
            </h2>
            <p className="ov-desc">
              Educating Kharian Cantt since 1970's — disciplined, well-rounded
              learning from Pre-School through the FBISE and Cambridge streams.
              We nurture every child with genuine care, strong values, and a
              commitment to academic excellence.
            </p>
            {/* <div className="ov-stats">
              <div className="ov-stat">
                <div className="ov-stat-n">3,200<span>+</span></div>
                <div className="ov-stat-l">Students enrolled</div>
              </div>
              <div className="ov-stat-divider" />
              <div className="ov-stat">
                <div className="ov-stat-n">2</div>
                <div className="ov-stat-l">Academic streams</div>
              </div>
              <div className="ov-stat-divider" />
              <div className="ov-stat">
                <div className="ov-stat-n">98<span>%</span></div>
                <div className="ov-stat-l">FBISE pass rate</div>
              </div>
            </div> */}
            <div className="ov-actions">
              <Link className="btn-primary" href="/admissions">Apply for Admission</Link>
              <Link className="ov-link-arrow" href="/about">
                Explore the campus <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── video modal ───────────────────────────────────── */}
      {modalOpen && (
        <div className="vid-modal-scrim" onClick={() => setModalOpen(false)} role="dialog" aria-modal="true" aria-label="School overview video">
          <div className="vid-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="vid-modal-close" onClick={() => setModalOpen(false)} aria-label="Close video">
              <X size={22} />
            </button>
            <div className="vid-modal-player">
              {/* TODO: replace src with YouTube embed URL when available */}
              <div className="vid-placeholder">
                <Play size={48} fill="rgba(255,255,255,0.85)" strokeWidth={0} />
                <p>Video coming soon</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

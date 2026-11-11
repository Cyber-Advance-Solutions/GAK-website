"use client";

import Link from "next/link";
import { Fragment, useState, useEffect, useRef } from "react";
import { Play, X } from "lucide-react";

/** Site-settings key "homepageVideo" (edited in the admin panel under Homepage > Video Overview) */
export interface HomepageVideo {
  isVisible?: boolean;
  videoUrl?: string;
  videoTitle?: string;
  thumbnailUrl?: string;
  badgeTop?: string;
  badgeMain?: string;
  badgeLabel?: string;
  eyebrow?: string;
  headline?: string;
  headlineAccent?: string;
  description?: string;
  primaryButton?: { label?: string; href?: string };
  secondaryLink?: { label?: string; href?: string };
}

/** Homepage video overview block. `video.thumbnailUrl` must already be passed through assetUrl(). */
export default function OverviewSection({ video }: { video?: HomepageVideo | null }) {
  const v: HomepageVideo = video || {};
  const lines = (v.headline || "").split("\n");
  const embed = v.videoUrl ? `${v.videoUrl}${v.videoUrl.includes("?") ? "&" : "?"}autoplay=1` : "";
  const hidden = !video || video.isVisible === false;

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
  }, [hidden]);

  /* lock body scroll when modal is open */
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  if (hidden) return null;

  return (
    <>
      <section className="overview-sec" ref={sectionRef} id="overview">
        <div className="wrap ov-grid">

          {/* ── left: video thumbnail ─────────────────────── */}
          <div className="ov-media">
            <div className="ov-thumb" onClick={() => setModalOpen(true)} role="button" tabIndex={0}
              aria-label={`Play ${v.videoTitle || "school overview video"}`}
              onKeyDown={(e) => e.key === "Enter" && setModalOpen(true)}>
              {v.thumbnailUrl ? (
                <img src={v.thumbnailUrl} alt={v.videoTitle || "School overview video"} className="ov-thumb-img" />
              ) : (
                <div className="ov-thumb-img" style={{ background: "#0d3b38", aspectRatio: "16/10" }} />
              )}
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
            {(v.badgeTop || v.badgeMain || v.badgeLabel) && (
              <div className="ov-badge">
                <span className="ov-badge-year">{v.badgeTop}</span>
                <span className="ov-badge-num">{v.badgeMain}</span>
                <span className="ov-badge-label">{v.badgeLabel}</span>
              </div>
            )}
          </div>

          {/* ── right: text content ───────────────────────── */}
          <div className="ov-body">
            {v.eyebrow && <span className="eyebrow">{v.eyebrow}</span>}
            <h2 className="h-lg ov-headline">
              {lines.map((l, i) => (
                <Fragment key={i}>{l}{i < lines.length - 1 && <br />}</Fragment>
              ))}
              {v.headlineAccent && <> <span className="ov-accent">{v.headlineAccent}</span></>}
            </h2>
            {v.description && <p className="ov-desc">{v.description}</p>}
            <div className="ov-actions">
              {v.primaryButton?.label && (
                <Link className="btn-primary" href={v.primaryButton.href || "#"}>{v.primaryButton.label}</Link>
              )}
              {v.secondaryLink?.label && (
                <Link className="ov-link-arrow" href={v.secondaryLink.href || "#"}>
                  {v.secondaryLink.label} <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── video modal ───────────────────────────────────── */}
      {modalOpen && embed && (
        <div className="vid-modal-scrim" onClick={() => setModalOpen(false)} role="dialog" aria-modal="true" aria-label={v.videoTitle || "School overview video"}>
          <div className="vid-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="vid-modal-close" onClick={() => setModalOpen(false)} aria-label="Close video">
              <X size={22} />
            </button>
            <div className="vid-modal-player">
              <iframe
                src={embed}
                title={v.videoTitle || "School overview video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

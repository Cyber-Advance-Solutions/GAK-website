"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Eye, Award, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

const MIN_ZOOM = 1;
const MAX_ZOOM = 5;
const ZOOM_STEP = 0.5;
const clampZoom = (z: number) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Math.round(z * 100) / 100));

export interface AchieverPoster {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  image: string;
}

/** `items`: published high-achiever posters in admin order (GET /high-achievers). */
export default function HighAchieversSection({ items = [] }: { items?: AchieverPoster[] }) {
  const ACHIEVERS = items;
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Zoom & pan of the poster in the lightbox (so small text like student names can be read)
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement | null>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const gesture = useRef<{ dist: number; zoom: number } | null>(null);
  const lastTap = useRef(0);

  // Keep the zoomed image covering the stage: pan is limited to the overflow on each side
  const clampPan = useCallback((x: number, y: number, z: number) => {
    const el = imgRef.current;
    if (!el || z <= 1) return { x: 0, y: 0 };
    const maxX = (el.offsetWidth * (z - 1)) / 2;
    const maxY = (el.offsetHeight * (z - 1)) / 2;
    return { x: Math.min(maxX, Math.max(-maxX, x)), y: Math.min(maxY, Math.max(-maxY, y)) };
  }, []);

  const applyZoom = useCallback(
    (z: number) => {
      const nz = clampZoom(z);
      setZoom(nz);
      setPan((p) => clampPan(p.x, p.y, nz));
    },
    [clampPan]
  );
  const zoomIn = useCallback(() => applyZoom(zoom + ZOOM_STEP), [applyZoom, zoom]);
  const zoomOut = useCallback(() => applyZoom(zoom - ZOOM_STEP), [applyZoom, zoom]);
  const resetZoom = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  // New poster (or lightbox closed) starts unzoomed
  useEffect(() => {
    resetZoom();
  }, [activeIdx, resetZoom]);

  // The page behind is already scroll-locked while the lightbox is open
  const onWheel = (e: React.WheelEvent) => {
    applyZoom(zoom * (e.deltaY < 0 ? 1.15 : 1 / 1.15));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      gesture.current = { dist: Math.hypot(a.x - b.x, a.y - b.y), zoom };
    } else if (e.pointerType !== "mouse") {
      // Double-tap on touch screens toggles zoom
      const now = Date.now();
      if (now - lastTap.current < 300) zoom > 1 ? resetZoom() : applyZoom(2.5);
      lastTap.current = now;
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const prevPt = pointers.current.get(e.pointerId);
    if (!prevPt) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size === 2 && gesture.current) {
      const [a, b] = [...pointers.current.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (gesture.current.dist > 0) applyZoom((gesture.current.zoom * dist) / gesture.current.dist);
      return;
    }
    if (zoom > 1) setPan((p) => clampPan(p.x + e.clientX - prevPt.x, p.y + e.clientY - prevPt.y, zoom));
  };

  const onPointerUp = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size < 2) gesture.current = null;
  };

  const close = useCallback(() => setActiveIdx(null), []);

  const prev = useCallback(() => {
    setActiveIdx((curr) => (curr === null ? null : (curr - 1 + ACHIEVERS.length) % ACHIEVERS.length));
  }, [ACHIEVERS.length]);

  const next = useCallback(() => {
    setActiveIdx((curr) => (curr === null ? null : (curr + 1) % ACHIEVERS.length));
  }, [ACHIEVERS.length]);

  useEffect(() => {
    if (activeIdx === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "+" || e.key === "=") zoomIn();
      if (e.key === "-" || e.key === "_") zoomOut();
      if (e.key === "0") resetZoom();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIdx, close, prev, next, zoomIn, zoomOut, resetZoom]);

  if (ACHIEVERS.length === 0) return null;

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

              <div className="achiever-lightbox-tools">
                <div className="achiever-zoom" role="group" aria-label="Zoom">
                  <button type="button" onClick={zoomOut} disabled={zoom <= MIN_ZOOM} aria-label="Zoom out" title="Zoom out (-)">
                    <ZoomOut size={18} strokeWidth={2.2} />
                  </button>
                  <span className="achiever-zoom-level" aria-live="polite">{Math.round(zoom * 100)}%</span>
                  <button type="button" onClick={zoomIn} disabled={zoom >= MAX_ZOOM} aria-label="Zoom in" title="Zoom in (+)">
                    <ZoomIn size={18} strokeWidth={2.2} />
                  </button>
                  <button type="button" onClick={resetZoom} disabled={zoom === 1} aria-label="Reset zoom" title="Reset zoom (0)">
                    <RotateCcw size={16} strokeWidth={2.2} />
                  </button>
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

              <div
                className={`achiever-lightbox-figure${zoom > 1 ? " zoomed" : ""}`}
                onWheel={onWheel}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                onDoubleClick={() => (zoom > 1 ? resetZoom() : applyZoom(2.5))}
                title={zoom > 1 ? "Drag to move, double-click to reset" : "Double-click or scroll to zoom"}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  ref={imgRef}
                  src={ACHIEVERS[activeIdx].image}
                  alt={ACHIEVERS[activeIdx].title}
                  className="achiever-lightbox-img"
                  draggable={false}
                  style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})` }}
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

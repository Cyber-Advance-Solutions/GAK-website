"use client";

import { useState, useCallback, useEffect } from "react";
import { GraduationCap, Building2, ZoomIn, ZoomOut, X, Maximize2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Tabs from "@/components/Tabs";
import { BANNER } from "@/lib/images";


/* ── Lightbox ────────────────────────────────────────────── */
function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  const [scale, setScale] = useState(1);

  const zoomIn  = () => setScale(s => Math.min(s + 0.25, 4));
  const zoomOut = () => setScale(s => Math.max(s - 0.25, 0.5));
  const reset   = () => setScale(1);

  // Close on Escape, zoom with keyboard
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") zoomIn();
      if (e.key === "-") zoomOut();
      if (e.key === "0") reset();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="org-lightbox-scrim" onClick={onClose} role="dialog" aria-modal="true" aria-label={alt}>
      {/* toolbar */}
      <div className="org-lb-toolbar" onClick={e => e.stopPropagation()}>
        <button className="org-lb-btn" onClick={zoomOut} title="Zoom out (-)"><ZoomOut size={18} /></button>
        <span className="org-lb-scale">{Math.round(scale * 100)}%</span>
        <button className="org-lb-btn" onClick={zoomIn} title="Zoom in (+)"><ZoomIn size={18} /></button>
        <button className="org-lb-btn" onClick={reset} title="Reset (0)"><Maximize2 size={18} /></button>
        <button className="org-lb-btn org-lb-close" onClick={onClose} title="Close (Esc)"><X size={20} /></button>
      </div>

      {/* image wrapper — stops click from bubbling to scrim */}
      <div className="org-lb-canvas" onClick={e => e.stopPropagation()}>
        <img
          src={src}
          alt={alt}
          className="org-lb-img"
          style={{ transform: `scale(${scale})`, transformOrigin: "center center" }}
          draggable={false}
        />
      </div>
    </div>
  );
}

/* ── Organogram image tile ───────────────────────────────── */
function OrgImage({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <div className="org-img-tile" onClick={() => setOpen(true)} role="button" tabIndex={0}
        onKeyDown={e => e.key === "Enter" && setOpen(true)}>
        <img src={src} alt={alt} className="org-img-preview" />
        <div className="org-img-overlay">
          <ZoomIn size={28} />
          <span>Click to view full size</span>
        </div>
      </div>
      {open && <Lightbox src={src} alt={alt} onClose={close} />}
    </>
  );
}

/* ── PAGE ────────────────────────────────────────────────── */
export default function OrganogramPage() {
  return (
    <>
      <PageHero
        eyebrow="Structure"
        title="School Organogram"
        intro="How Garrison Academy Kharian Cantt is organised — academic leadership and administrative governance."
        image={BANNER.organogram}
        crumb={[{ label: "Organogram" }]}
      />
      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Governance" title="One campus, two clear lines of leadership" />
          <Tabs
            items={[
              {
                label: "Academic",
                panel: <OrgImage src="/organogram-academics.png" alt="Academic Organogram" />,
              },
              {
                label: "Administrative",
                panel: <OrgImage src="/organogram-administrative.png" alt="Administrative Organogram" />,
              },
            ]}
          />
          <div className="grid g2" style={{ maxWidth: 560, marginTop: 34 }}>
            <div className="linkcard">
              <div className="lc-ic"><GraduationCap size={22} strokeWidth={1.8} /></div>
              <div>
                <h4>Academic line</h4>
                <p>Section heads reporting through Vice Principals (APSACS &amp; APSIS).</p>
              </div>
            </div>
            <div className="linkcard">
              <div className="lc-ic"><Building2 size={22} strokeWidth={1.8} /></div>
              <div>
                <h4>Administrative line</h4>
                <p>Support departments under Admin Offices and Admin Assistant.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

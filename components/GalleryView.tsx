"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function GalleryView({ images }: { images: string[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, prev, next]);

  return (
    <>
      <div className="photogrid">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            className="phototile"
            onClick={() => setActive(i)}
            aria-label={`View photo ${i + 1} of ${images.length}`}
          >
            <Image
              src={src}
              alt={`GAK Campus gallery photo ${i + 1}`}
              fill
              sizes="(max-width: 520px) 50vw, (max-width: 820px) 33vw, 25vw"
              className="phototile-img"
            />
            <span className="phototile-ov" aria-hidden="true" />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${active + 1} of ${images.length}`}
        >
          <button type="button" className="lightbox-backdrop" onClick={close} aria-label="Close gallery" />
          <div className="lightbox-stage">
            <button type="button" className="lightbox-close" onClick={close} aria-label="Close">
              <X size={22} strokeWidth={2} />
            </button>
            <button type="button" className="lightbox-nav lightbox-prev" onClick={prev} aria-label="Previous photo">
              <ChevronLeft size={28} strokeWidth={2} />
            </button>
            <div className="lightbox-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={images[active]} alt={`GAK Campus gallery photo ${active + 1}`} className="lightbox-img" />
            </div>
            <button type="button" className="lightbox-nav lightbox-next" onClick={next} aria-label="Next photo">
              <ChevronRight size={28} strokeWidth={2} />
            </button>
            <p className="lightbox-count">
              {active + 1} <span>/</span> {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

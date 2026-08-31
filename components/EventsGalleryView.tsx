"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import GalleryView from "./GalleryView";

export type GalleryEvent = {
  name: string;
  cover: string;
  images?: string[];
  subEvents?: GalleryEvent[];
};

function EventGrid({
  events,
  onSelect,
}: {
  events: GalleryEvent[];
  onSelect: (ev: GalleryEvent) => void;
}) {
  return (
    <div className="grid g3">
      {events.map((ev) => (
        <div
          key={ev.name}
          className="card link"
          onClick={() => onSelect(ev)}
          style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "12px", cursor: "pointer" }}
        >
          <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: "10px", overflow: "hidden" }}>
            <Image
              src={ev.cover}
              alt={ev.name}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 620px) 100vw, 33vw"
            />
            {/* Sub-events badge */}
            {ev.subEvents && (
              <div style={{
                position: "absolute", bottom: "8px", right: "8px",
                background: "var(--gold-500)", color: "#fff",
                fontSize: "0.72rem", fontWeight: 700, padding: "3px 10px",
                borderRadius: "999px", letterSpacing: "0.04em",
              }}>
                {ev.subEvents.length} Sessions
              </div>
            )}
          </div>
          <div>
            <h3 style={{ fontSize: "1.05rem", color: "var(--green-900)", marginBottom: "2px" }}>{ev.name}</h3>
            <p style={{ fontSize: "0.82rem", color: "var(--ink-soft)", fontWeight: 600 }}>
              {ev.subEvents
                ? `${ev.subEvents.length} training sessions`
                : `${ev.images?.length ?? 0} Photos`}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function EventsGalleryView({ events }: { events: GalleryEvent[] }) {
  // Stack-based navigation: each entry is an { label, events } or a leaf event with images
  const [stack, setStack] = useState<{ label: string; events: GalleryEvent[] }[]>([]);
  const [activeImages, setActiveImages] = useState<{ title: string; images: string[] } | null>(null);

  const currentLevel = stack.length > 0 ? stack[stack.length - 1] : null;

  const handleSelect = (ev: GalleryEvent) => {
    if (ev.subEvents) {
      // drill into sub-events
      setStack((s) => [...s, { label: ev.name, events: ev.subEvents! }]);
    } else if (ev.images) {
      // open lightbox view
      setActiveImages({ title: ev.name, images: ev.images });
    }
  };

  const handleBack = () => {
    if (activeImages) {
      setActiveImages(null);
    } else {
      setStack((s) => s.slice(0, -1));
    }
  };

  const showBack = stack.length > 0 || activeImages !== null;
  const backLabel =
    activeImages
      ? currentLevel?.label ?? "Events"
      : stack.length > 1
      ? stack[stack.length - 2].label
      : "Events";

  const title = activeImages
    ? activeImages.title
    : currentLevel?.label ?? "Events at GAK";

  return (
    <div style={{ animation: "fade 0.4s ease" }}>
      {/* Back button + breadcrumb title */}
      {showBack && (
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <button onClick={handleBack} className="dl-btn">
            <ChevronLeft size={16} strokeWidth={2.5} /> Back to {backLabel}
          </button>
        </div>
      )}
      <h3 className="h-md" style={{ marginBottom: "28px" }}>{title}</h3>

      {activeImages ? (
        <GalleryView images={activeImages.images} />
      ) : (
        <EventGrid
          events={currentLevel ? currentLevel.events : events}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
}

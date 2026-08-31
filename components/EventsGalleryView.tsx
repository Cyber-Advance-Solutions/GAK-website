"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import GalleryView from "./GalleryView";

export type GalleryEvent = {
  name: string;
  cover: string;
  images: string[];
};

export default function EventsGalleryView({ events }: { events: GalleryEvent[] }) {
  const [selectedEvent, setSelectedEvent] = useState<GalleryEvent | null>(null);

  if (selectedEvent) {
    return (
      <div className="event-view" style={{ animation: "fade 0.4s ease" }}>
        <button
          onClick={() => setSelectedEvent(null)}
          className="dl-btn"
          style={{
            marginBottom: "24px",
          }}
        >
          <ChevronLeft size={16} strokeWidth={2.5} /> Back to Events
        </button>
        <h3 className="h-md" style={{ marginBottom: "28px" }}>
          {selectedEvent.name}
        </h3>
        <GalleryView images={selectedEvent.images} />
      </div>
    );
  }

  return (
    <div className="grid g3">
      {events.map((ev) => (
        <div
          key={ev.name}
          className="card link"
          onClick={() => setSelectedEvent(ev)}
          style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4/3",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <Image
              src={ev.cover}
              alt={ev.name}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 620px) 100vw, 33vw"
            />
          </div>
          <div>
            <h3 style={{ fontSize: "1.1rem", color: "var(--green-900)", marginBottom: "2px" }}>
              {ev.name}
            </h3>
            <p style={{ fontSize: "0.85rem", color: "var(--ink-soft)", fontWeight: 600 }}>
              {ev.images.length} Photos
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

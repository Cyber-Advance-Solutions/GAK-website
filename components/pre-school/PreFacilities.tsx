import Image from "next/image";
import type { SectionFacility } from "@/lib/mappers/sections";

/** Pre-School facilities: name, description and a photo grid per facility */
export default function PreFacilities({ items }: { items: SectionFacility[] }) {
  return (
    <>
      {items.map((f) => (
        <div key={f.id || f.title} style={{ marginBottom: "2.5rem" }}>
          <h3 style={{ marginBottom: "0.5rem" }}>{f.title}</h3>
          {f.description && <p style={{ color: "var(--ink-soft)", marginBottom: "1rem" }}>{f.description}</p>}
          {f.photos.length > 0 && (
            <div className="classgrid">
              {f.photos.map((photo, i) => (
                <div className="figure" key={photo + i}>
                  <div className="fimg" style={{ backgroundColor: "#f0f0f0" }}>
                    <Image src={photo} alt={`${f.title} ${i + 1}`} fill sizes="(max-width: 820px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

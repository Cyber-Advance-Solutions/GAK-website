import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import EventsGalleryView from "@/components/EventsGalleryView";
import { getEventAlbums } from "@/lib/mappers/events";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Gallery" };
export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const events = await getEventAlbums("all");
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Gallery"
        intro="Four decades of educating Kharian Cantt — heritage, leadership, conduct and facilities."
        image={BANNER.gallery}
        crumb={[{ label: "Gallery" }]}
      />

      <section className="sec">
        <div className="wrap">
          <SectionHead
            eyebrow="Campus life"
            title="Events at GAK"
            intro="Browse photos from various events and campus life."
          />
          {events.length > 0 ? (
            <EventsGalleryView events={events} />
          ) : (
            <p style={{ color: "var(--ink-soft)" }}>No albums to show yet.</p>
          )}
        </div>
      </section>
    </>
  );
}

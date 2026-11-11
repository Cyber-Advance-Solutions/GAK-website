import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import EventsGalleryView from "@/components/EventsGalleryView";
import { getEventAlbums } from "@/lib/mappers/events";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Archive — Garrison Academy Kharian Cantt" };
export const dynamic = "force-dynamic";

export default async function ArchivePage() {
  const events = await getEventAlbums("archive");
  return (
    <>
      <PageHero
        eyebrow="Past events"
        title="Archive"
        intro="A record of past events, celebrations, and milestones at Garrison Academy Kharian Cantt."
        image={BANNER.archive}
        crumb={[{ label: "Archive" }]}
      />

      <section className="sec">
        <div className="wrap">
          <SectionHead
            eyebrow="Historical record"
            title="Past Events"
            intro="Browse through archived photos from previous events and activities."
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

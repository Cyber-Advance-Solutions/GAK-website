import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import EventsGalleryView from "@/components/EventsGalleryView";
import { BANNER, GALLERY_EVENTS } from "@/lib/images";

export const metadata = { title: "Archive — Garrison Academy Kharian Cantt" };

export default function ArchivePage() {
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
          <EventsGalleryView events={GALLERY_EVENTS} />
        </div>
      </section>
    </>
  );
}

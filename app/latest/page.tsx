import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import EventsGalleryView from "@/components/EventsGalleryView";
import { BANNER, GALLERY_EVENTS } from "@/lib/images";

export const metadata = { title: "Latest — Garrison Academy Kharian Cantt" };

export default function LatestPage() {
  return (
    <>
      <PageHero
        eyebrow="What's happening"
        title="Latest"
        intro="Photos from this month's events and campus happenings at Garrison Academy Kharian Cantt."
        image={BANNER.latest}
        crumb={[{ label: "Latest" }]}
      />

      <section className="sec">
        <div className="wrap">
          <SectionHead
            eyebrow="Current month"
            title="Recent Events"
            intro="Highlights and snapshots from our most recent activities."
          />
          <EventsGalleryView events={GALLERY_EVENTS} />
        </div>
      </section>
    </>
  );
}

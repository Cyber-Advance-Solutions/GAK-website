import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import EventsGalleryView from "@/components/EventsGalleryView";
import { getEventAlbums } from "@/lib/mappers/events";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Latest — Garrison Academy Kharian Cantt" };
export const dynamic = "force-dynamic";

export default async function LatestPage() {
  const events = await getEventAlbums("latest");
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

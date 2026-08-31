import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import EventsGalleryView, { type GalleryEvent } from "@/components/EventsGalleryView";
import { BANNER, GALLERY_EVENTS } from "@/lib/images";

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
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
          <EventsGalleryView events={GALLERY_EVENTS} />
        </div>
      </section>
    </>
  );
}

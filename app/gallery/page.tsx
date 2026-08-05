import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import GalleryView from "@/components/GalleryView";
import { BANNER, GALLERY_IMAGES } from "@/lib/images";

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
            title="Moments at GAK"
            intro="Browse photos from assemblies, sports, prize days, classroom life and campus events."
          />
          <GalleryView images={GALLERY_IMAGES} />
        </div>
      </section>
    </>
  );
}

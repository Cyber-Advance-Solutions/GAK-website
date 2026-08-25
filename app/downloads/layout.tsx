import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Downloads | Garrison Academy Kharian Cantt" };

export default function DownloadsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHero
        eyebrow="Resource library"
        title="Downloads"
        intro="Notifications, circulars, past papers and the admission registration form."
        image={BANNER.downloads}
        crumb={[{ label: "Downloads" }]}
      />
      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Files" title="All school documents" />
          {children}
        </div>
      </section>
    </>
  );
}

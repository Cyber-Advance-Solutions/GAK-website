import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";
import type { Organogram } from "@/lib/mappers/about";

/** One organogram page: hero + the uploaded chart image (admin Organogram module). */
export default function OrganogramView({ org, crumb, heading }: { org: Organogram; crumb: string; heading: string }) {
  return (
    <>
      <PageHero
        eyebrow="Structure"
        title={org.title}
        intro={org.subtitle || undefined}
        image={BANNER.organogram}
        crumb={[{ label: "Organogram", href: "/organogram" }, { label: crumb }]}
      />
      <section className="org-section">
        <div className="wrap">
          <SectionHead eyebrow="Governance" title={heading} />

          {org.image && <img src={org.image} alt={org.imageAlt} />}
        </div>
      </section>
    </>
  );
}

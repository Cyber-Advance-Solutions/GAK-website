import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { BANNER } from "@/lib/images";
import { getOrganograms } from "@/lib/mappers/about";

export const metadata = { title: "Organogram — GAK" };
export const dynamic = "force-dynamic";

export default async function OrganogramPage() {
  const pages = await getOrganograms();
  return (
    <div className="bg-paper min-h-screen pb-16">
      <PageHero
        eyebrow="Structure"
        title="School Organogram"
        intro="How Garrison Academy Kharian Cantt is organised — academic leadership and administrative governance."
        image={BANNER.organogram}
        crumb={[{ label: "Organogram" }]}
      />

      {pages.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <div className="linkcards">
              {pages.map((p) => (
                <Link className="linkcard" href={p.href} key={p.id}>
                  <div>
                    <h4>{p.title}</h4>
                    {p.subtitle && <p>{p.subtitle}</p>}
                  </div>
                  <ArrowRight size={16} style={{ marginLeft: "auto", flexShrink: 0 }} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

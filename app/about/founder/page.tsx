import PageHero from "@/components/PageHero";
import Image from "next/image";
import { Flame } from "lucide-react";
import { BANNER } from "@/lib/images";
import { getFounder } from "@/lib/mappers/about";

export const metadata = { title: "The Founder" };
export const dynamic = "force-dynamic";

export default async function FounderPage() {
  const founder = await getFounder();
  return (
    <>
      <PageHero
        eyebrow="Our origins"
        title="The Founder"
        intro={founder?.intro || undefined}
        image={BANNER["about-founder"]}
        crumb={[
          { label: "About Us", href: "/about" },
          { label: "The Founder" },
        ]}
      />
      {founder && (
        <section className="sec">
          <div className="wrap">
            <div style={{ maxWidth: 480, margin: "0 auto" }}>
              <div className="msgport-media">
                <div className="msgport-frame">
                  {founder.image && (
                    <Image
                      src={founder.image}
                      alt={founder.imageAlt}
                      fill
                      sizes="(max-width: 840px) 100vw, 40vw"
                      priority
                      className="msgport-img"
                    />
                  )}
                </div>
                <div className="msgport-plate" style={{ padding: "14px 10px" }}>
                  <Flame className="msgport-mark" size={26} strokeWidth={1.75} />
                  <div>
                    <span className="msgport-name">{founder.name}</span>
                    <span className="msgport-role">{founder.role}</span>
                  </div>
                </div>
              </div>
            </div>
            {founder.description.length > 0 && (
              <div className="prose" style={{ maxWidth: 760, margin: "32px auto 0" }}>
                {founder.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}

import PageHero from "@/components/PageHero";
import Image from "next/image";
import { Flame } from "lucide-react";
import { BANNER } from "@/lib/images";

const founder = {
  title: "The Founder",
  intro: "Honouring the founding leadership that established Garrison Academy Kharian Cantt in 1970.",
  name: "Ms Tallat Azeem Ch",
  role: "Founder Principal · 1970's – 1973",
  image: "/history/tallat-azeem.png",
  imageAlt: "Ms Tallat Azeem Ch, Founder Principal",
};

export const metadata = { title: founder.title };

export default function FounderPage() {
  return (
    <>
      <PageHero
        eyebrow="Our origins"
        title={founder.title}
        intro={founder.intro}
        image={BANNER["about-founder"]}
        crumb={[
          { label: "About Us", href: "/about" },
          { label: "The Founder" },
        ]}
      />
      <section className="sec">
        <div className="wrap">
          <div style={{ maxWidth: 480, margin: "0 auto" }}>
            <div className="msgport-media">
              <div className="msgport-frame">
                <Image
                  src={founder.image}
                  alt={founder.imageAlt}
                  fill
                  sizes="(max-width: 840px) 100vw, 40vw"
                  priority
                  className="msgport-img"
                />
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
        </div>
      </section>
    </>
  );
}

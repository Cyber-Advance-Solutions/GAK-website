import PageHero from "@/components/PageHero";
import Image from "next/image";
import { Flame } from "lucide-react";
import { BANNER } from "@/lib/images";
import { getMessage } from "@/lib/messages";

const leader = getMessage("patron-in-chief");

export const metadata = { title: leader.title };

export default function PatronInChiefMessagePage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title={leader.title}
        intro={leader.intro}
        image={BANNER.messages}
        crumb={[
          { label: "Messages", href: "/messages" },
          { label: "Patron in Chief" },
        ]}
      />
      <section className="sec">
        <div className="wrap">
          <div style={{ maxWidth: 480, margin: "0 auto" }}>
            <div className="msgport-media">
              <div className="msgport-frame">
                <Image
                  src={leader.image}
                  alt={leader.imageAlt}
                  fill
                  sizes="(max-width: 840px) 100vw, 40vw"
                  priority
                  className="msgport-img"
                />
              </div>
              <div className="msgport-plate">
                <Flame className="msgport-mark" size={26} strokeWidth={1.75} />
                <div>
                  <span className="msgport-name">{leader.name}</span>
                  <span className="msgport-role">{leader.role}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

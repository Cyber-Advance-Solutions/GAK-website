import Image from "next/image";
import { Flame } from "lucide-react";
import PageHero from "@/components/PageHero";
import MessagePortrait from "@/components/MessagePortrait";
import { BANNER } from "@/lib/images";
import type { Leader } from "@/lib/mappers/messages";

/** One leadership message page (/messages/<role>): full message, or just the portrait plate when no text is set. */
export default function LeaderMessageView({ leader, crumb }: { leader: Leader; crumb: string }) {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title={leader.title}
        intro={leader.intro || undefined}
        image={BANNER.messages}
        crumb={[{ label: "Messages", href: "/messages" }, { label: crumb }]}
      />
      <section className="sec">
        <div className="wrap">
          {leader.hasMessage ? (
            <MessagePortrait leader={leader} />
          ) : (
            <div style={{ maxWidth: 480, margin: "0 auto" }}>
              <div className="msgport-media">
                <div className="msgport-frame">
                  {leader.image && (
                    <Image
                      src={leader.image}
                      alt={leader.imageAlt}
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
                    <span className="msgport-name">{leader.name}</span>
                    <span className="msgport-role">{leader.role}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

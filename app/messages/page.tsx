import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";
import { MESSAGES } from "@/lib/messages";

export const metadata = { title: "Messages" };

export default function MessagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Messages"
        intro="Guidance and vision from the leadership of the Army Public Schools & Colleges System and Garrison Academy Kharian Cantt."
        image={BANNER.messages}
        crumb={[{ label: "Messages" }]}
      />
      <section className="sec">
        <div className="wrap">
          <SectionHead
            eyebrow="From the desk of"
            title="Words from our leadership"
            intro="Read each message in full — Chairman, Vice Chairman, and Principal."
          />
          <div className="msglinks">
            {MESSAGES.map((m) => (
              <Link className="msglink" href={m.href} key={m.slug}>
                <div className="msglink-media">
                  <Image
                    src={m.image}
                    alt={m.imageAlt}
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                    className="msglink-img"
                  />
                </div>
                <div className="msglink-body">
                  <span className="eyebrow">{m.eyebrow}</span>
                  <h3 className="h-md">{m.title}</h3>
                  <p>{m.name} · {m.role}</p>
                  <span className="more">
                    Read message <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

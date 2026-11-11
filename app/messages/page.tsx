import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";
import { getLeaders } from "@/lib/mappers/messages";

export const metadata = { title: "Messages" };
export const dynamic = "force-dynamic";

export default async function MessagesPage() {
  const leaders = await getLeaders();
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
          {leaders.length > 0 ? (
            <div className="msglinks">
              {leaders.map((m) => (
                <Link className="msglink" href={m.href} key={m.id}>
                  <div className="msglink-media">
                    {m.image && (
                      <Image
                        src={m.image}
                        alt={m.imageAlt}
                        fill
                        sizes="(max-width: 760px) 100vw, 33vw"
                        className="msglink-img"
                      />
                    )}
                  </div>
                  <div className="msglink-body">
                    {m.eyebrow && <span className="eyebrow">{m.eyebrow}</span>}
                    <h3 className="h-md">{m.title}</h3>
                    <p>{[m.name, m.role].filter(Boolean).join(" · ")}</p>
                    <span className="more">
                      Read message <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p>No messages have been published yet.</p>
          )}
        </div>
      </section>
    </>
  );
}

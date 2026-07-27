import PageHero from "@/components/PageHero";
import MessagePortrait from "@/components/MessagePortrait";
import { BANNER } from "@/lib/images";
import { getMessage } from "@/lib/messages";

const leader = getMessage("vice-chairman");

export const metadata = { title: leader.title };

export default function ViceChairmanMessagePage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title={leader.title}
        intro={leader.intro}
        image={BANNER.messages}
        crumb={[
          { label: "Messages", href: "/messages" },
          { label: "Vice Chairman" },
        ]}
      />
      <section className="sec">
        <div className="wrap">
          <MessagePortrait leader={leader} />
        </div>
      </section>
    </>
  );
}

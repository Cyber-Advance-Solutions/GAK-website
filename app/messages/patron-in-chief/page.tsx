import PageHero from "@/components/PageHero";
import MessagePortrait from "@/components/MessagePortrait";
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
          <MessagePortrait leader={leader} />
        </div>
      </section>
    </>
  );
}

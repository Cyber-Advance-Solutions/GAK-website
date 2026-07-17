import PageHero from "@/components/PageHero";
import Chatbot from "@/components/Chatbot";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Chatbot" };

export default function ChatbotPage() {
  return (
    <>
      <PageHero
        eyebrow="Ask GAK"
        title="GAK Assistant"
        intro="Instant answers to common queries — choose a level, then tap a question."
        image={BANNER.chatbot}
        crumb={[{ label: "Chatbot" }]}
      />
      <section className="sec"><div className="wrap"><Chatbot /></div></section>
    </>
  );
}

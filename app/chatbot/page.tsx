import PageHero from "@/components/PageHero";
import Chatbot from "@/components/Chatbot";
import { BANNER } from "@/lib/images";
import { getFaqs } from "@/lib/mappers/faqs";

export const metadata = { title: "Chatbot" };
export const dynamic = "force-dynamic";

export default async function ChatbotPage() {
  // The assistant's topics and questions are the FAQs managed in the admin panel
  const { groups } = await getFaqs();
  return (
    <>
      <PageHero
        eyebrow="Ask GAK"
        title="GAK Assistant"
        intro="Instant answers to common queries — choose a level, then tap a question."
        image={BANNER.chatbot}
        crumb={[{ label: "Chatbot" }]}
      />
      <section className="sec"><div className="wrap"><Chatbot topics={groups} /></div></section>
    </>
  );
}

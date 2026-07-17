import PageHero from "@/components/PageHero";
import FaqView from "@/components/FaqView";
import { BANNER } from "@/lib/images";

export const metadata = { title: "FAQs" };

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="Help centre"
        title="Frequently asked questions"
        intro="Answers grouped by category — admissions, fees, examinations, hiring and more."
        image={BANNER.faqs}
        crumb={[{ label: "FAQs" }]}
      />
      <section className="sec">
        <FaqView />
      </section>
    </>
  );
}

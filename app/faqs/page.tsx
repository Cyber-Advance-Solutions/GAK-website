import PageHero from "@/components/PageHero";
import FaqView from "@/components/FaqView";
import { BANNER } from "@/lib/images";
import { getFaqs } from "@/lib/mappers/faqs";

export const metadata = { title: "FAQs" };
export const dynamic = "force-dynamic";

export default async function FaqsPage() {
  const { settings, groups } = await getFaqs();
  return (
    <>
      <PageHero
        eyebrow={settings?.eyebrow || ""}
        title={settings?.heading || "Frequently asked questions"}
        intro={settings?.introText}
        image={BANNER.faqs}
        crumb={[{ label: "FAQs" }]}
      />
      <section className="sec">
        <FaqView groups={groups} />
      </section>
    </>
  );
}

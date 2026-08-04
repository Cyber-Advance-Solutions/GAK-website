import { notFound } from "next/navigation";
import SectionDetail from "@/components/SectionDetail";
import MiddleBoysSection from "@/components/MiddleBoysSection";
import PreSchoolSection from "@/components/PreSchoolSection";
import APSISSection from "@/components/APSISSection";
import { SECTIONS, type SectionKey } from "@/lib/data";

export function generateStaticParams() {
  return (Object.keys(SECTIONS) as SectionKey[]).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SECTIONS[slug as SectionKey];
  return { title: s ? s.name : "Section" };
}

export default async function SectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = SECTIONS[slug as SectionKey];
  if (!data) notFound();
  if (slug === "middle-boys") return <MiddleBoysSection />;
  if (slug === "pre") return <PreSchoolSection />;
  if (slug === "apsis") return <APSISSection />;
  return <SectionDetail data={data} slug={slug as SectionKey} />;
}

import { notFound } from "next/navigation";
import SectionDetail from "@/components/SectionDetail";
import MiddleBoysSection from "@/components/MiddleBoysSection";
import MiddleGirlsSection from "@/components/MiddleGirlsSection";
import PreSchoolSection from "@/components/PreSchoolSection";
import APSISSection from "@/components/APSISSection";
import SeniorGirlsSection from "@/components/SeniorGirlsSection";
import SeniorBoysSection from "@/components/SeniorBoysSection";
import JuniorSection from "@/components/JuniorSection";
import { getSection, type SectionView } from "@/lib/mappers/sections";

export const dynamic = "force-dynamic";

const PAGES: Record<string, (p: { d: SectionView }) => React.ReactNode> = {
  "middle-boys": MiddleBoysSection,
  "middle-girls": MiddleGirlsSection,
  pre: PreSchoolSection,
  junior: JuniorSection,
  apsis: APSISSection,
  "senior-girls": SeniorGirlsSection,
  "senior-boys": SeniorBoysSection,
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = await getSection(slug);
  return { title: d ? d.name : "Section" };
}

export default async function SectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = await getSection(slug);
  if (!d) notFound();
  const Page = PAGES[slug];
  return Page ? <Page d={d} /> : <SectionDetail d={d} />;
}

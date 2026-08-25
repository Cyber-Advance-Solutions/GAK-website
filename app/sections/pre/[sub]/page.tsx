import { notFound } from "next/navigation";
import PreSchoolSubPage from "@/components/pre-school/PreSchoolSubPage";
import { PRE_SUBPAGES } from "@/lib/pre-school-data";

export function generateStaticParams() {
  return PRE_SUBPAGES.map((p) => ({ sub: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const data = PRE_SUBPAGES.find((p) => p.slug === sub);
  return { title: data ? `${data.label} — Pre-School` : "Pre-School" };
}

export default async function PreSchoolSubRoute({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const data = PRE_SUBPAGES.find((p) => p.slug === sub);
  if (!data) notFound();
  return <PreSchoolSubPage sub={data} />;
}

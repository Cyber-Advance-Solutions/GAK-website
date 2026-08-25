import { notFound } from "next/navigation";
import SeniorGirlsSubPage from "@/components/senior-girls/SeniorGirlsSubPage";
import { SENIOR_GIRLS_SUBPAGES } from "@/lib/senior-girls-data";

export function generateStaticParams() {
  return SENIOR_GIRLS_SUBPAGES.map((p) => ({ sub: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const data = SENIOR_GIRLS_SUBPAGES.find((p) => p.slug === sub);
  return { title: data ? `${data.label} — Senior Girls Section` : "Senior Girls Section" };
}

export default async function SeniorGirlsSubRoute({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const data = SENIOR_GIRLS_SUBPAGES.find((p) => p.slug === sub);
  if (!data) notFound();
  return <SeniorGirlsSubPage sub={data} />;
}

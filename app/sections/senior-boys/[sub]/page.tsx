import { notFound } from "next/navigation";
import SeniorBoysSubPage from "@/components/senior-boys/SeniorBoysSubPage";
import { SENIOR_BOYS_SUBPAGES } from "@/lib/senior-boys-data";

export function generateStaticParams() {
  return SENIOR_BOYS_SUBPAGES.map((p) => ({ sub: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const data = SENIOR_BOYS_SUBPAGES.find((p) => p.slug === sub);
  return { title: data ? `${data.label} — Senior Boys Section` : "Senior Boys Section" };
}

export default async function SeniorBoysSubRoute({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const data = SENIOR_BOYS_SUBPAGES.find((p) => p.slug === sub);
  if (!data) notFound();
  return <SeniorBoysSubPage sub={data} />;
}

import { notFound } from "next/navigation";
import MiddleBoysSubPage from "@/components/middle-boys/MiddleBoysSubPage";
import { MIDDLE_BOYS_SUBPAGES } from "@/lib/middle-boys-data";

export function generateStaticParams() {
  return MIDDLE_BOYS_SUBPAGES.map((p) => ({ sub: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const data = MIDDLE_BOYS_SUBPAGES.find((p) => p.slug === sub);
  return { title: data ? `${data.label} — Middle Boys Section` : "Middle Boys Section" };
}

export default async function MiddleBoysSubRoute({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const data = MIDDLE_BOYS_SUBPAGES.find((p) => p.slug === sub);
  if (!data) notFound();
  return <MiddleBoysSubPage sub={data} />;
}

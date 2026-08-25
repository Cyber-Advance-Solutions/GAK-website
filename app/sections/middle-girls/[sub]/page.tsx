import { notFound } from "next/navigation";
import MiddleGirlsSubPage from "@/components/middle-girls/MiddleGirlsSubPage";
import { MIDDLE_GIRLS_SUBPAGES } from "@/lib/middle-girls-data";

export function generateStaticParams() {
  return MIDDLE_GIRLS_SUBPAGES.map((p) => ({ sub: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const data = MIDDLE_GIRLS_SUBPAGES.find((p) => p.slug === sub);
  return { title: data ? `${data.label} — Middle Girls Section` : "Middle Girls Section" };
}

export default async function MiddleGirlsSubRoute({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const data = MIDDLE_GIRLS_SUBPAGES.find((p) => p.slug === sub);
  if (!data) notFound();
  return <MiddleGirlsSubPage sub={data} />;
}

import { notFound } from "next/navigation";
import JuniorSubPage from "@/components/junior/JuniorSubPage";
import { JUNIOR_SUBPAGES } from "@/lib/junior-data";

export function generateStaticParams() {
  return JUNIOR_SUBPAGES.map((p) => ({ sub: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const data = JUNIOR_SUBPAGES.find((p) => p.slug === sub);
  return { title: data ? `${data.label} — Junior Section` : "Junior Section" };
}

export default async function JuniorSubRoute({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const data = JUNIOR_SUBPAGES.find((p) => p.slug === sub);
  if (!data) notFound();
  return <JuniorSubPage sub={data} />;
}

import { notFound } from "next/navigation";
import APSISSubPage from "@/components/apsis/APSISSubPage";
import { APSIS_SUBPAGES } from "@/lib/apsis-data";

export function generateStaticParams() {
  return APSIS_SUBPAGES.map((p) => ({ sub: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const data = APSIS_SUBPAGES.find((p) => p.slug === sub);
  return { title: data ? `${data.label} — APSIS` : "APSIS" };
}

export default async function APSISSubRoute({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const data = APSIS_SUBPAGES.find((p) => p.slug === sub);
  if (!data) notFound();
  return <APSISSubPage sub={data} />;
}

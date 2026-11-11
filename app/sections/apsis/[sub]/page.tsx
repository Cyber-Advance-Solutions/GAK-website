import { notFound } from "next/navigation";
import APSISSubPage, { APSIS_SUPPORTED } from "@/components/apsis/APSISSubPage";
import { findSubPage, getSection, loadStaffExtras } from "@/lib/mappers/sections";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const d = await getSection("apsis");
  const p = findSubPage(d, sub, APSIS_SUPPORTED);
  return { title: d && p ? `${p.label} — ${d.name}` : "APSIS" };
}

export default async function APSISSubRoute({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const d = await getSection("apsis");
  const p = findSubPage(d, sub, APSIS_SUPPORTED);
  if (!d || !p) notFound();
  return <APSISSubPage d={d} sub={p} extra={await loadStaffExtras(d, p.slug)} />;
}

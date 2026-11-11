import { notFound } from "next/navigation";
import JuniorSubPage, { JUNIOR_SUPPORTED } from "@/components/junior/JuniorSubPage";
import { findSubPage, getSection, loadStaffExtras } from "@/lib/mappers/sections";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const d = await getSection("junior");
  const p = findSubPage(d, sub, JUNIOR_SUPPORTED);
  return { title: d && p ? `${p.label} — ${d.name}` : "Junior Section" };
}

export default async function SectionSubRoute({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const d = await getSection("junior");
  const p = findSubPage(d, sub, JUNIOR_SUPPORTED);
  if (!d || !p) notFound();
  return <JuniorSubPage d={d} sub={p} extra={await loadStaffExtras(d, p.slug)} />;
}

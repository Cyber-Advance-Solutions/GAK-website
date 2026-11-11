import { notFound } from "next/navigation";
import MiddleBoysSubPage, { MIDDLE_BOYS_SUPPORTED } from "@/components/middle-boys/MiddleBoysSubPage";
import { findSubPage, getSection, loadStaffExtras } from "@/lib/mappers/sections";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const d = await getSection("middle-boys");
  const p = findSubPage(d, sub, MIDDLE_BOYS_SUPPORTED);
  return { title: d && p ? `${p.label} — ${d.name}` : "Middle Boys Section" };
}

export default async function SectionSubRoute({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const d = await getSection("middle-boys");
  const p = findSubPage(d, sub, MIDDLE_BOYS_SUPPORTED);
  if (!d || !p) notFound();
  return <MiddleBoysSubPage d={d} sub={p} extra={await loadStaffExtras(d, p.slug)} />;
}

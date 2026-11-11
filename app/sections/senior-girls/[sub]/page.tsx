import { notFound } from "next/navigation";
import SeniorGirlsSubPage, { SENIOR_GIRLS_SUPPORTED } from "@/components/senior-girls/SeniorGirlsSubPage";
import { findSubPage, getSection, loadStaffExtras } from "@/lib/mappers/sections";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const d = await getSection("senior-girls");
  const p = findSubPage(d, sub, SENIOR_GIRLS_SUPPORTED);
  return { title: d && p ? `${p.label} — ${d.name}` : "Senior Girls Section" };
}

export default async function SectionSubRoute({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const d = await getSection("senior-girls");
  const p = findSubPage(d, sub, SENIOR_GIRLS_SUPPORTED);
  if (!d || !p) notFound();
  return <SeniorGirlsSubPage d={d} sub={p} extra={await loadStaffExtras(d, p.slug)} />;
}

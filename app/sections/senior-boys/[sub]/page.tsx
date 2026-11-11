import { notFound } from "next/navigation";
import SeniorBoysSubPage, { SENIOR_BOYS_SUPPORTED } from "@/components/senior-boys/SeniorBoysSubPage";
import { findSubPage, getSection, loadStaffExtras } from "@/lib/mappers/sections";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const d = await getSection("senior-boys");
  const p = findSubPage(d, sub, SENIOR_BOYS_SUPPORTED);
  return { title: d && p ? `${p.label} — ${d.name}` : "Senior Boys Section" };
}

export default async function SectionSubRoute({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const d = await getSection("senior-boys");
  const p = findSubPage(d, sub, SENIOR_BOYS_SUPPORTED);
  if (!d || !p) notFound();
  return <SeniorBoysSubPage d={d} sub={p} extra={await loadStaffExtras(d, p.slug)} />;
}

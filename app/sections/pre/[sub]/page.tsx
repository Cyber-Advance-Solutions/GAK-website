import { notFound } from "next/navigation";
import PreSchoolSubPage, { PRE_SUPPORTED } from "@/components/pre-school/PreSchoolSubPage";
import { findSubPage, getSection, loadStaffExtras } from "@/lib/mappers/sections";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const d = await getSection("pre");
  const p = findSubPage(d, sub, PRE_SUPPORTED);
  return { title: d && p ? `${p.label} — ${d.name}` : "Pre-School" };
}

export default async function SectionSubRoute({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  const d = await getSection("pre");
  const p = findSubPage(d, sub, PRE_SUPPORTED);
  if (!d || !p) notFound();
  return <PreSchoolSubPage d={d} sub={p} extra={await loadStaffExtras(d, p.slug)} />;
}

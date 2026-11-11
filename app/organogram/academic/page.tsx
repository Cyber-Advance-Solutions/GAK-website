import { notFound } from "next/navigation";
import OrganogramView from "@/components/OrganogramView";
import { getOrganogram } from "@/lib/mappers/about";

export const metadata = { title: "Academic Organogram — GAK" };
export const dynamic = "force-dynamic";

export default async function AcademicOrganogramPage() {
  const org = await getOrganogram("academic");
  if (!org) notFound();
  return <OrganogramView org={org} crumb="Academic" heading="Academic Leadership Structure" />;
}

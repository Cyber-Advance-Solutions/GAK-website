import { notFound } from "next/navigation";
import OrganogramView from "@/components/OrganogramView";
import { getOrganogram } from "@/lib/mappers/about";

export const metadata = { title: "Administrative Organogram — GAK" };
export const dynamic = "force-dynamic";

export default async function AdminOrganogramPage() {
  const org = await getOrganogram("admin");
  if (!org) notFound();
  return <OrganogramView org={org} crumb="Administrative" heading="Administrative Structure" />;
}

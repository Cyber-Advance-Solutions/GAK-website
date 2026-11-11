import { notFound } from "next/navigation";
import OrganogramView from "@/components/OrganogramView";
import { getOrganogram } from "@/lib/mappers/about";

// Organograms the admin publishes under other keys (e.g. "overall", "apsis"); academic/admin have their own pages.
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ key: string }> }) {
  const { key } = await params;
  const org = await getOrganogram(decodeURIComponent(key));
  return { title: org ? `${org.title} — GAK` : "Organogram — GAK" };
}

export default async function OrganogramByKeyPage({ params }: { params: Promise<{ key: string }> }) {
  const { key } = await params;
  const org = await getOrganogram(decodeURIComponent(key));
  if (!org) notFound();
  return <OrganogramView org={org} crumb={org.title} heading={org.title} />;
}

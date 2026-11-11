import { notFound } from "next/navigation";
import LeaderMessageView from "@/components/LeaderMessageView";
import { getLeader } from "@/lib/mappers/messages";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const leader = await getLeader("principal");
  return { title: leader?.title || "Principal" };
}

export default async function PrincipalMessagePage() {
  const leader = await getLeader("principal");
  if (!leader) notFound();
  return <LeaderMessageView leader={leader} crumb="Principal" />;
}

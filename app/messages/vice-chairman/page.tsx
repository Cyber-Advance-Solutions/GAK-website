import { notFound } from "next/navigation";
import LeaderMessageView from "@/components/LeaderMessageView";
import { getLeader } from "@/lib/mappers/messages";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const leader = await getLeader("vice-chairman");
  return { title: leader?.title || "Vice Chairman" };
}

export default async function ViceChairmanMessagePage() {
  const leader = await getLeader("vice-chairman");
  if (!leader) notFound();
  return <LeaderMessageView leader={leader} crumb="Vice Chairman" />;
}

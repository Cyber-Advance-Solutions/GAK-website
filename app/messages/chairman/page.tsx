import { notFound } from "next/navigation";
import LeaderMessageView from "@/components/LeaderMessageView";
import { getLeader } from "@/lib/mappers/messages";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const leader = await getLeader("chairman");
  return { title: leader?.title || "Chairman" };
}

export default async function ChairmanMessagePage() {
  const leader = await getLeader("chairman");
  if (!leader) notFound();
  return <LeaderMessageView leader={leader} crumb="Chairman" />;
}

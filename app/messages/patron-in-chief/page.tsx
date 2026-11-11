import { notFound } from "next/navigation";
import LeaderMessageView from "@/components/LeaderMessageView";
import { getLeader } from "@/lib/mappers/messages";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const leader = await getLeader("patron-in-chief");
  return { title: leader?.title || "Patron in Chief" };
}

export default async function PatronInChiefMessagePage() {
  const leader = await getLeader("patron-in-chief");
  if (!leader) notFound();
  return <LeaderMessageView leader={leader} crumb="Patron in Chief" />;
}

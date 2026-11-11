import { notFound } from "next/navigation";
import LeaderMessageView from "@/components/LeaderMessageView";
import { getLeaderById } from "@/lib/mappers/messages";

// Messages the admin adds with a custom role ("other") have no dedicated page; they live at /messages/<id>.
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const leader = await getLeaderById(id);
  return { title: leader?.title || "Message" };
}

export default async function OtherMessagePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const leader = await getLeaderById(id);
  if (!leader || leader.slug) notFound();
  return <LeaderMessageView leader={leader} crumb={leader.title} />;
}

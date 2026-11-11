// Leadership messages from GAK-Backend /messages (admin "Messages" module, same table as /leadership-messages).
import { api, asList, assetUrl, byOrder, isLive } from "@/lib/api";
import type { MessageLeader } from "@/lib/messages";
import { initialsOf, splitParagraphs } from "@/lib/mappers/about";

type Slug = MessageLeader["slug"];

/** website page slug <-> admin roleKey */
export const ROLE_KEYS: Record<Slug, string> = {
  "patron-in-chief": "patron",
  chairman: "chairman",
  "vice-chairman": "vice_chairman",
  principal: "principal",
};
const SLUG_BY_ROLE: Record<string, Slug> = Object.fromEntries(Object.entries(ROLE_KEYS).map(([s, r]) => [r, s as Slug]));

export type Leader = MessageLeader & { id: number | string; hasMessage: boolean };

export function toLeader(m: any): Leader {
  const slug = SLUG_BY_ROLE[m.roleKey] ?? ("" as Slug);
  const message = splitParagraphs(m.messageContent);
  return {
    id: m.id,
    slug,
    href: slug ? `/messages/${slug}` : `/messages/${m.id}`,
    eyebrow: m.roleBadge || "",
    title: m.roleTitle || m.designation || "",
    heading: m.quote || "",
    intro: "",
    message,
    hasMessage: message.length > 0,
    name: m.personName || "",
    role: m.designation || "",
    image: assetUrl(m.profileImage),
    imageAlt: [m.designation || m.roleTitle, m.personName].filter(Boolean).join(" — "),
    initials: initialsOf(m.personName),
  };
}

export async function getLeaders(): Promise<Leader[]> {
  const rows = asList<any>(await api("/messages", []));
  return rows.filter(isLive).sort(byOrder).map(toLeader);
}

export async function getLeader(slug: Slug): Promise<Leader | null> {
  const m = await api<any>(`/messages/role/${ROLE_KEYS[slug]}`, null);
  return m && isLive(m) ? toLeader(m) : null;
}

export async function getLeaderById(id: string): Promise<Leader | null> {
  if (!/^\d+$/.test(id)) return null;
  const m = await api<any>(`/messages/${id}`, null);
  return m && isLive(m) ? toLeader(m) : null;
}

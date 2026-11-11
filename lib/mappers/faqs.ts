import { api, asList, byOrder, isLive } from "@/lib/api";

/** GET /faqs row (admin: FAQs module) */
export type ApiFaq = { id: number; question: string; answer: string; categoryKey: string; isPublished?: boolean; order?: number };
/** site-settings "faqsPage" key */
export type FaqsPageSettings = { eyebrow?: string; heading?: string; introText?: string; categories?: { key: string; label: string }[] };

export type FaqGroup = { key: string; label: string; items: { q: string; a: string }[] };

/** Groups published FAQs by the admin's category list (in its order); empty categories are dropped */
export function buildFaqGroups(faqs: unknown, settings: FaqsPageSettings | null): FaqGroup[] {
  const live = asList<ApiFaq>(faqs).filter(isLive).sort(byOrder);
  const cats = asList<{ key: string; label: string }>(settings?.categories);
  // FAQs whose category was removed from the list still show, under their raw key
  for (const f of live) if (f.categoryKey && !cats.some((c) => c.key === f.categoryKey)) cats.push({ key: f.categoryKey, label: f.categoryKey });
  return cats
    .map((c) => ({
      key: c.key,
      label: c.label,
      items: live.filter((f) => f.categoryKey === c.key).map((f) => ({ q: f.question, a: f.answer })),
    }))
    .filter((g) => g.items.length > 0);
}

/** Server-side: FAQ page settings + grouped FAQs */
export async function getFaqs(): Promise<{ settings: FaqsPageSettings | null; groups: FaqGroup[] }> {
  const [faqs, settings] = await Promise.all([
    api<unknown>("/faqs?published=true", []),
    api<FaqsPageSettings | null>("/site-settings/faqsPage", null),
  ]);
  return { settings, groups: buildFaqGroups(faqs, settings) };
}

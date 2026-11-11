import { api, asList, assetUrl } from "@/lib/api";

/** site-settings "activities" key (admin: Activities page) */
export type ActivityCategory = { key: string; title: string; description?: string; imageUrl?: string; link?: string; isVisible?: boolean };
export type ActivityMoment = { title: string; caption?: string; imageUrl?: string; link?: string; isVisible?: boolean };
export type ActivitiesSettings = {
  eyebrow?: string;
  heading?: string;
  introText?: string;
  categoriesHeading?: string;
  categories: ActivityCategory[];
  momentsEyebrow?: string;
  momentsHeading?: string;
  momentsSubtext?: string;
  moments: ActivityMoment[];
};

export async function getActivitiesSettings(): Promise<ActivitiesSettings> {
  const raw = await api<Partial<ActivitiesSettings> | null>("/site-settings/activities", null);
  return {
    ...(raw || {}),
    categories: asList<ActivityCategory>(raw?.categories)
      .filter((c) => c && c.isVisible !== false)
      .map((c) => ({ ...c, imageUrl: assetUrl(c.imageUrl), link: c.link || `/activities/${c.key}` })),
    moments: asList<ActivityMoment>(raw?.moments)
      .filter((m) => m && m.isVisible !== false)
      .map((m) => ({ ...m, imageUrl: assetUrl(m.imageUrl) })),
  };
}

/** Category for an /activities/<key> sub-page (hero title + intro come from the admin) */
export async function getActivityCategory(key: string): Promise<ActivityCategory | undefined> {
  const s = await getActivitiesSettings();
  return s.categories.find((c) => c.key === key);
}

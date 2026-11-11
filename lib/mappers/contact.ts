import { api, asList } from "@/lib/api";

/** site-settings "contact" key (admin: Contact page) */
export type ContactSettings = {
  eyebrow?: string;
  heading?: string;
  introText?: string;
  directHeading?: string;
  instructions?: string;
  phones: { label?: string; value: string }[];
  emails: { label?: string; value: string }[];
  addressLines: string[];
  officeHours: { label?: string; value?: string }[];
  mapEmbedUrl?: string;
  mapLinkUrl?: string;
  whatsappUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
};

export async function getContactSettings(): Promise<ContactSettings> {
  const raw = await api<Partial<ContactSettings> | null>("/site-settings/contact", null);
  return {
    ...(raw || {}),
    phones: asList(raw?.phones),
    emails: asList(raw?.emails),
    addressLines: asList<string>(raw?.addressLines).filter(Boolean),
    officeHours: asList(raw?.officeHours),
  };
}

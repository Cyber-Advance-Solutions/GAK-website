import { api, asList, byOrder, isLive } from "@/lib/api";

/** GET /careers/vacancies row (admin: HR & Careers > Vacancies) */
export type ApiVacancy = {
  id: number;
  title: string;
  department?: string | null;
  employmentType?: string | null;
  description?: string | null;
  applyUrl?: string | null;
  closingDate?: string | null;
  isPublished?: boolean;
  order?: number;
};

/** site-settings "careersPage" key */
export type CareersPageSettings = {
  heading?: string;
  introText?: string;
  openingsHeading?: string;
  howToApplyHeading?: string;
  steps?: { title: string; description?: string }[];
  howToApplyNotes?: string;
};

export type FormField = {
  key: string;
  type: string;
  label: string;
  placeholder?: string;
  helpText?: string;
  required?: boolean;
  options?: string[];
  uploadCategory?: string;
};

/** GET /forms/:formKey/config (admin edits labels, options, required flags, texts) */
export type FormConfig = {
  formKey: string;
  heading?: string;
  instructions?: string;
  submitButtonText?: string;
  confirmationMessage?: string;
  isAccepting?: boolean;
  fields: FormField[];
};

/** Public vacancies (the backend already hides unpublished and expired ones), in admin order */
export async function getVacancies(): Promise<ApiVacancy[]> {
  return asList<ApiVacancy>(await api<unknown>("/careers/vacancies?published=true", [])).filter(isLive).sort(byOrder);
}

export async function getCareersPage(): Promise<CareersPageSettings | null> {
  return api<CareersPageSettings | null>("/site-settings/careersPage", null);
}

export async function getFormConfig(formKey: "career" | "contact" | "feedback"): Promise<FormConfig | null> {
  const cfg = await api<FormConfig | null>(`/forms/${formKey}/config`, null);
  return cfg ? { ...cfg, fields: asList<FormField>(cfg.fields) } : null;
}

/**
 * Advertisement vacancies store their table cells in the description:
 *   "For Normal & Cambridge Stream\nSubjects: A, B\n\nRequirements:\n- one\n- two"
 */
export function parseAdvertisement(v: ApiVacancy): { intro: string; subjects: string[]; requirements: string[] } {
  const lines = String(v.description || "").split(/\r?\n/).map((l) => l.trim());
  const subjLine = lines.find((l) => /^subjects?:/i.test(l));
  const subjects = subjLine ? subjLine.replace(/^subjects?:\s*/i, "").split(/\s*,\s*/).filter(Boolean) : [];
  const requirements = lines.filter((l) => /^[-•*]\s+/.test(l)).map((l) => l.replace(/^[-•*]\s+/, ""));
  const intro = lines.find((l) => l && !/^subjects?:/i.test(l) && !/^requirements?:/i.test(l) && !/^[-•*]\s+/.test(l)) || "";
  return { intro, subjects, requirements };
}

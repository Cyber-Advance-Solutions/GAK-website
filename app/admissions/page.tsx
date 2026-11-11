import PageHero from "@/components/PageHero";
import { Editorial, FactCard } from "@/components/Editorial";
import AdmissionForm, { type AdmissionSettings } from "@/components/AdmissionForm";
import { BANNER } from "@/lib/images";
import { api, asList } from "@/lib/api";

export const metadata = { title: "Apply Online" };
export const dynamic = "force-dynamic";

export default async function AdmissionsPage() {
  // Admin: Admissions (page texts, checklist, online form fields, submissions)
  const settings = await api<AdmissionSettings | null>("/admissions/settings", null);
  const checklist = asList<{ title: string; description?: string }>(settings?.checklist);

  return (
    <>
      <PageHero
        eyebrow={settings?.session ? `Session ${settings.session}` : ""}
        title={settings?.pageHeading || "Apply Online"}
        intro={settings?.introText || undefined}
        image={BANNER.admissions}
        crumb={[{ label: "Admissions", href: "/admissions" }, { label: settings?.pageHeading || "Apply Online" }]}
      />

      <section className="sec" id="apply">
        <Editorial
          rail={
            checklist.length > 0 ? (
              <FactCard title="What you'll need" rows={checklist.map((c) => [c.title, c.description || ""] as [string, string])} />
            ) : null
          }
        >
          <AdmissionForm settings={settings} />
        </Editorial>
      </section>
    </>
  );
}

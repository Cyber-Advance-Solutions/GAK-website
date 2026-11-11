import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";
import { api } from "@/lib/api";

export const metadata = { title: "Test Schedule" };
export const dynamic = "force-dynamic";

const DATES: [string, string, string, string][] = [
  ["15", "FEB", "Prep – V entry test", "8:30 AM · Main hall"],
  ["17", "FEB", "VI – VIII entry test", "8:30 AM · Senior block"],
  ["20", "FEB", "IX & XI entry test", "9:00 AM · Examination hall"],
];

export default async function SchedulePage() {
  // Session label comes from the admin (Admissions settings); the content below has no backend field yet
  const adm = await api<{ session?: string } | null>("/admissions/settings", null);
  return (
    <>
      <PageHero
        eyebrow={adm?.session ? `Session ${adm.session}` : ""}
        title="Test Schedule"
        intro="Check the admission test schedule."
        image={BANNER.admissions}
        crumb={[{ label: "Admissions", href: "/admissions" }, { label: "Test Schedule" }]}
      />

      <section className="sec" id="dates">
        <div className="wrap">
          <SectionHead eyebrow="Mark your calendar" title="Admission test schedule" />
          <ul className="eventlist" style={{ maxWidth: 620 }}>
            {DATES.map(([d, m, t, s]) => (
              <li key={t}>
                <div className="dchip">
                  <b>{d}</b>
                  <span>{m}</span>
                </div>
                <div className="ev">
                  <div className="et">{t}</div>
                  <div className="es">{s}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

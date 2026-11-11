import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import StreamPathway from "@/components/StreamPathway";
import { getStream } from "@/lib/mappers/streams";

export const dynamic = "force-dynamic";
export const metadata = { title: "APSIS Stream" };

export default async function ApsisStreamPage() {
  const s = await getStream("apsis");
  if (!s) notFound();
  return (
    <>
      <PageHero
        eyebrow={s.badge}
        title={`${s.name} Stream`}
        intro={s.description}
        image={s.image}
        crumb={[{ label: "Streams" }, { label: s.name }]}
      />

      {s.steps.length > 0 && (
        <section className="sec" style={{ minHeight: "60vh" }}>
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Academic Pathway</span>
              <h2 className="h-lg">A clear journey — from first steps to final exams.</h2>
            </div>
            <StreamPathway steps={s.steps} />
          </div>
        </section>
      )}
    </>
  );
}

import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import StreamPathway from "@/components/StreamPathway";
import { getStream } from "@/lib/mappers/streams";

export const dynamic = "force-dynamic";
export const metadata = { title: "APSAC Stream" };

export default async function ApsacStreamPage() {
  const s = await getStream("apsac");
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

      {/* No backend field for this block yet (see report: Backend gaps) */}
      <section className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap">
          <div className="splitimg">
            <div className="prose">
              <span className="eyebrow">About the APSAC experience</span>
              <h2 className="h-lg mb-8">Learning with purpose, growing with confidence.</h2>
              <p>APSAC brings together strong academic foundations, thoughtful guidance, and opportunities for every student to discover their strengths.</p>
              <p>This space will include more information about the stream, its learning environment, and the experiences that shape our students.</p>
            </div>
            <div className="fig" style={{ backgroundImage: `url(${s.image})` }} />
          </div>
        </div>
      </section>

      {s.steps.length > 0 && (
        <section className="sec" style={{ minHeight: "60vh" }}>
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Academic Pathway</span>
              <h2 className="h-lg mb-8">A clear journey — from first steps to final exams.</h2>
            </div>
            <StreamPathway steps={s.steps} />
          </div>
        </section>
      )}
    </>
  );
}

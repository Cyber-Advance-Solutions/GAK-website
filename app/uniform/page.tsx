import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { BANNER } from "@/lib/images";

export const metadata = { title: "School Uniform" };

const STREAMS = [
  { label: "APSACS Stream", desc: "Uniform guidelines for the APSACS stream, Pre-1 through Class XII.", href: "/uniform/apsacs" },
  { label: "APSIS Stream", desc: "Uniform guidelines for the Cambridge (APSIS) stream, Play Group through A Levels.", href: "/uniform/apsis" },
];

export default function UniformPage() {
  return (
    <div className="bg-paper min-h-screen pb-16">
      <PageHero
        eyebrow="Dress code"
        title="School uniform"
        intro="Official Uniform guidelines for all levels."
        image={BANNER.uniform}
        crumb={[{ label: "School Uniform" }]}
      />

      <section className="max-w-5xl mx-auto px-4 lg:px-8 mt-16">
        <div className="linkcards">
          {STREAMS.map((s) => (
            <Link className="linkcard" href={s.href} key={s.href}>
              <div><h4>{s.label}</h4><p>{s.desc}</p></div>
              <ArrowRight size={16} style={{ marginLeft: "auto", flexShrink: 0 }} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

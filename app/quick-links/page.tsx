import Link from "next/link";
import { Baby, BookOpen, Layers, GraduationCap, Globe } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";
import { api, asList, byOrder, isLive } from "@/lib/api";

export const metadata = { title: "Quick Links" };
export const dynamic = "force-dynamic";

/** Backend section key -> website route slug (/sections/<slug>) */
const SLUG: Record<string, string> = { "pre-school": "pre", "junior-section": "junior" };

function iconFor(key: string) {
  if (key.startsWith("pre")) return <Baby size={22} strokeWidth={1.8} />;
  if (key.startsWith("junior")) return <BookOpen size={22} strokeWidth={1.8} />;
  if (key.startsWith("middle")) return <Layers size={22} strokeWidth={1.8} />;
  if (key.startsWith("senior")) return <GraduationCap size={22} strokeWidth={1.8} />;
  return <Globe size={22} strokeWidth={1.8} />;
}

export default async function QuickLinksPage() {
  // Academic sections as edited in the admin panel (GET /sections)
  const sections = asList<any>(await api<any>("/sections", []))
    .filter((s) => isLive(s) && s.key && s.status !== "Inactive")
    .sort(byOrder);

  return (
    <>
      <PageHero
        eyebrow="Academic sections"
        title="Quick links"
        intro="Choose a section to view its head, faculty, classes, results, scholarships and upcoming events."
        image={BANNER["quick-links"]}
        crumb={[{ label: "Quick Links" }]}
      />
      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Browse" title="Explore each academic section" />
          <div className="linkcards">
            {sections.length === 0 && <p>No sections are published yet.</p>}
            {sections.map((s) => {
              const key = String(s.key);
              const href = `/sections/${SLUG[key] || key}`;
              return (
                <Link className="linkcard" href={href} key={href}>
                  <div className="lc-ic">{iconFor(key)}</div>
                  <div>
                    <h4>{s.name}</h4>
                    <p>{s.tagline || s.gradeRange || ""}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

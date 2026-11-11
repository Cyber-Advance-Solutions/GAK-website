import { GraduationCap, BookOpen, ScrollText, Share2, ExternalLink } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { ToastButton } from "@/components/Toast";
import { BANNER } from "@/lib/images";
import { loadSiteSettings, type ContactSettings, type HeaderSettings } from "@/lib/mappers/home";

export const metadata = { title: "Important & External Links" };
export const dynamic = "force-dynamic";

type LinkCard = { icon: React.ReactNode; title: string; desc: string; msg: string; href?: string };

export default async function LinksPage() {
  // AIS portal labels/URLs: site-settings "header".portals; social: site-settings "contact"
  const { header, contact } = await loadSiteSettings<{ header: HeaderSettings; contact: ContactSettings }>([
    "header",
    "contact",
  ]);
  const portals = header?.portals || {};
  const portalName = portals.label || "AIS Portals";

  const LINKS: LinkCard[] = [
    portals.teachersUrl && {
      icon: <BookOpen key="a" size={22} strokeWidth={1.8} />,
      title: `${portalName}-${portals.teachersLabel || "Teachers"}`,
      desc: "Staff portal for lesson planning, attendance and result entry.",
      msg: `Opening ${portalName} (${portals.teachersLabel || "Teachers"}) …`,
      href: portals.teachersUrl,
    },
    portals.studentsUrl && {
      icon: <GraduationCap key="b" size={22} strokeWidth={1.8} />,
      title: `${portalName}-${portals.studentsLabel || "Students"}`,
      desc: "Student portal for assignments, resources and progress.",
      msg: `Opening ${portalName} (${portals.studentsLabel || "Students"}) …`,
      href: portals.studentsUrl,
    },
    // No backend field for FBISE / other external links yet (admin "External Links" page is local-only)
    {
      icon: <ScrollText key="c" size={22} strokeWidth={1.8} />,
      title: "FBISE",
      desc: "Federal Board results, datesheets and notifications.",
      msg: "Opening fbise.edu.pk …",
      href: "http://www.fbise.edu.pk/",
    },
    contact?.facebookUrl && {
      icon: <Share2 key="d" size={22} strokeWidth={1.8} />,
      title: "GAK social media",
      desc: "Official updates, photos and announcements.",
      msg: "Opening social media…",
      href: contact.facebookUrl,
    },
  ].filter(Boolean) as LinkCard[];

  return (
    <>
      <PageHero
        eyebrow="Quick access"
        title="Important & external links"
        intro="Learning portals, examination boards and official social channels."
        image={BANNER.links}
        crumb={[{ label: "Important / External Links" }]}
      />
      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Portals" title="Everything you need, one click away" />
          <div className="linkcards">
            {LINKS.map(({ icon, title, desc, msg, href }) => (
              <ToastButton
                as="a"
                key={title}
                msg={msg}
                className="linkcard"
                href={href}
                target={href ? "_blank" : undefined}
                rel={href ? "noopener noreferrer" : undefined}
              >
                <div className="lc-ic">{icon}</div>
                <div>
                  <h4 style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>{title} <ExternalLink size={14} strokeWidth={1.8} /></h4>
                  <p>{desc}</p>
                </div>
              </ToastButton>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { GraduationCap, BookOpen, ScrollText, Share2, ExternalLink } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { ToastButton } from "@/components/Toast";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Important & External Links" };

const LINKS: [React.ReactNode, string, string, string, string?][] = [
  [<BookOpen key="a" size={22} strokeWidth={1.8} />, "AIS Portals-Teachers", "Staff portal for lesson planning, attendance and result entry.", "Opening AIS Portal (Teachers) …", "https://apms.pk/login"],
  [<GraduationCap key="b" size={22} strokeWidth={1.8} />, "AIS Portals-Students", "Student portal for assignments, resources and progress.", "Opening AIS Portal (Students) …", "https://student.apms.pk/"],
  [<ScrollText key="c" size={22} strokeWidth={1.8} />, "FBISE", "Federal Board results, datesheets and notifications.", "Opening fbise.edu.pk …", "http://www.fbise.edu.pk/"],
  [<Share2 key="d" size={22} strokeWidth={1.8} />, "GAK social media", "Official updates, photos and announcements.", "Opening social media…", "https://www.facebook.com/share/19GmMrHryd/?mibextid=wwXIfr"],
];

export default function LinksPage() {
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
            {LINKS.map(([ic, t, d, msg, href]) => (
              <ToastButton
                as="a"
                key={t}
                msg={msg}
                className="linkcard"
                href={href}
                target={href ? "_blank" : undefined}
                rel={href ? "noopener noreferrer" : undefined}
              >
                <div className="lc-ic">{ic}</div>
                <div>
                  <h4 style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>{t} <ExternalLink size={14} strokeWidth={1.8} /></h4>
                  <p>{d}</p>
                </div>
              </ToastButton>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

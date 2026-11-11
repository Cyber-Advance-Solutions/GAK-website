import Link from "next/link";
import Image from "next/image";
import { ToastButton } from "@/components/Toast";
import { Facebook, Instagram, Youtube } from "@/components/Icon";
import type { ContactSettings, FooterLink, FooterSettings } from "@/lib/mappers/home";

/** "Garrison Academy, Kharian Cantt" -> ["Garrison Academy", "Kharian Cantt"] */
function splitName(name: string): [string, string] {
  const i = name.indexOf(",");
  if (i > 0) return [name.slice(0, i).trim(), name.slice(i + 1).trim()];
  const words = name.trim().split(/\s+/).filter(Boolean);
  const cut = Math.ceil(words.length / 2);
  return [words.slice(0, cut).join(" "), words.slice(cut).join(" ")];
}

/**
 * Site footer. `settings` = site-settings key "footer"; `contact` = key "contact" (social URLs).
 * Both are loaded in app/layout.tsx (logoUrl already passed through assetUrl).
 */
export default function Footer({
  settings,
  contact,
}: {
  settings?: FooterSettings | null;
  contact?: ContactSettings | null;
}) {
  const f = settings || {};
  const c = contact || {};
  const [nameTop, nameSub] = splitName(f.schoolName || "");
  const year = f.copyrightYear || String(new Date().getFullYear());

  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div className="ft">
            <div className="fbrand">
              {f.logoUrl && (
                <Image src={f.logoUrl} alt={`${f.schoolName || "School"} logo`} width={52} height={52} />
              )}
              <div>
                <div className="nm">{nameTop}</div>
                {nameSub && <div className="sub">{nameSub}</div>}
              </div>
            </div>
            {f.description && <p>{f.description}</p>}
            <div className="fsoc">
              {c.facebookUrl && (
                <ToastButton href={c.facebookUrl} target="_blank" rel="noopener noreferrer" as="a" msg="Opening Facebook…" className=""><Facebook size={18} /></ToastButton>
              )}
              {c.instagramUrl && (
                <ToastButton href={c.instagramUrl} target="_blank" rel="noopener noreferrer" as="a" msg="Opening Instagram…" className=""><Instagram size={18} /></ToastButton>
              )}
              {/* No YouTube URL field in the backend yet — kept as the original placeholder button */}
              <ToastButton as="a" msg="Opening YouTube…" className=""><Youtube size={18} /></ToastButton>
            </div>
          </div>
          <FooterCol title={f.exploreHeading} links={f.exploreLinks} />
          <FooterCol title={f.parentsHeading} links={f.parentsLinks} />
          <FooterCol title={f.connectHeading} links={f.connectLinks} />
        </div>
        <div className="fbot">
          {f.copyrightText && <span>{f.copyrightText} {year}</span>}
          {f.quotation && <span className="urdu">{f.quotation}</span>}
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links = [] }: { title?: string; links?: FooterLink[] }) {
  if (!title && links.length === 0) return null;
  return (
    <div>
      {title && <h5>{title}</h5>}
      <ul>
        {links.map(({ label, href }) => {
          const external = /^(https?:|mailto:|tel:)/i.test(href);
          return (
            <li key={label + href}>
              {external ? (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              ) : (
                <Link href={href}>{label}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

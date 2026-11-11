"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
import { Phone, Mail, ChevronDown, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { type NavItem, type MegaEntry, type FlyEntry, type Leaf } from "@/lib/data";
import type { HeaderSettings, NavSetting } from "@/lib/mappers/home";

/** Header CTA buttons are the navigation entries with these keys (admin: Layout settings > Header) */
const CTA_KEYS = ["apply-job", "apply-admission"];

/** site-settings header.navigation -> the NavItem shape this component renders */
function toNav(items: NavSetting[] = []): NavItem[] {
  const menu = items.filter((i) => i.isVisible !== false && !CTA_KEYS.includes(i.key));
  return menu.map((item, idx): NavItem => {
    if (item.children) {
      const children = item.children.filter((c) => c.isVisible !== false && c.href);
      return {
        label: item.label,
        fly: children.map((c) => ({ label: c.label, href: c.href as string })),
        alignRight: idx >= Math.ceil(menu.length / 2),
      };
    }
    return { label: item.label, href: item.href || "/" };
  });
}

/** "Garrison Academy Kharian Cantt" -> ["Garrison Academy", "Kharian Cantt"] */
function splitName(name: string): [string, string] {
  const words = name.trim().split(/\s+/).filter(Boolean);
  const cut = Math.ceil(words.length / 2);
  return [words.slice(0, cut).join(" "), words.slice(cut).join(" ")];
}

type DropdownItem = MegaEntry | FlyEntry | Leaf;

const hasDropdown = (
  i: NavItem,
): i is Extract<NavItem, { mega?: MegaEntry[]; fly?: (Leaf | FlyEntry)[] }> =>
  Boolean(("mega" in i && i.mega) || ("fly" in i && i.fly));

const getDropdownItems = (
  i: Extract<NavItem, { mega?: MegaEntry[]; fly?: (Leaf | FlyEntry)[] }>,
): DropdownItem[] => i.mega || i.fly || [];

const hasFly = (
  m: DropdownItem,
): m is Extract<MegaEntry | FlyEntry, { fly: unknown }> =>
  "fly" in m && Array.isArray((m as any).fly);

const hasSubFly = (
  f: FlyEntry | Leaf,
): f is Extract<FlyEntry, { fly: unknown }> =>
  "fly" in f && Array.isArray((f as any).fly);

const isExternalHref = (href?: string) =>
  href ? /^https?:\/\//.test(href) : false;

/** `settings`: site-settings key "header" (logo, contacts, portals, navigation), loaded in app/layout.tsx */
export default function Header({ settings }: { settings?: HeaderSettings | null }) {
  const s = settings || {};
  const NAV = toNav(s.navigation);
  const ctas = (s.navigation || []).filter((i) => i.isVisible !== false && CTA_KEYS.includes(i.key) && i.href);
  const logo = s.logoUrl || "";
  const siteName = s.siteName || "";
  const [nameTop, nameSub] = splitName(siteName);
  const contactHref = s.contactHref || "/contact";
  const portals = s.portals || {};
  const portalLinks = [
    { label: portals.teachersLabel, href: portals.teachersUrl },
    { label: portals.studentsLabel, href: portals.studentsUrl },
  ].filter((p): p is { label: string; href: string } => Boolean(p.label && p.href));
  const contacts = [
    ...(s.phones || []).map((text, i) => ({ key: `p${i}`, text, icon: i === 0 ? "phone" : "whatsapp" })),
    ...(s.emails || []).map((text, i) => ({ key: `e${i}`, text, icon: "mail" })),
  ];

  const pathname = usePathname();
  const [openMega, setOpenMega] = useState<number | null>(null);
  const [openFly, setOpenFly] = useState<string | null>(null);
  const [openSubFly, setOpenSubFly] = useState<string | null>(null);
  const [drawer, setDrawer] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setOpenMega(null);
    setOpenFly(null);
    setOpenSubFly(null);
    setDrawer(false);
  }, [pathname]);

  // Desktop hover menus: close after a short delay instead of instantly, so the dropdown doesn't
  // vanish while the cursor travels from the menu button to an item (re-entering cancels the close).
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  const hoverOpen = (i: number) => {
    if (window.innerWidth <= 1080) return;
    cancelClose();
    if (openMega !== i) {
      setOpenFly(null);
      setOpenSubFly(null);
    }
    setOpenMega(i);
  };
  const hoverClose = () => {
    if (window.innerWidth <= 1080) return;
    cancelClose();
    closeTimer.current = setTimeout(() => {
      setOpenMega(null);
      setOpenFly(null);
      setOpenSubFly(null);
    }, 300);
  };
  useEffect(() => cancelClose, []);

  return (
    <>
      {/* utility strip */}
      <div className="util">
        <div className="wrap">
          <div className="util-left">
            {contacts.map((c, i) => (
              <Fragment key={c.key}>
                {i > 0 && <span className="dot u-hide" />}
                <Link className="u-hide" href={contactHref}>
                  {c.icon === "phone" && <Phone size={14} strokeWidth={1.75} aria-hidden />}
                  {c.icon === "whatsapp" && <FaWhatsapp size={14} strokeWidth={1.75} aria-hidden />}
                  {c.icon === "mail" && <Mail size={14} strokeWidth={1.75} aria-hidden />}{" "}
                  {c.text}
                </Link>
              </Fragment>
            ))}
          </div>
          <div className="util-right">
            {portalLinks.map((p, i) => (
              <Fragment key={p.href}>
                {i > 0 && <span className="dot" />}
                <a href={p.href} target="_blank" rel="noopener noreferrer">
                  {portals.label ? `${portals.label} — ${p.label}` : p.label}
                </a>
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* main header */}
      <header className="main">
        <div className="wrap nav">
          <Link className="brand" href="/">
            {logo && (
              <Image
                src={logo}
                alt={`${siteName || "School"} logo`}
                width={56}
                height={56}
              />
            )}
            <div className="brand-txt">
              <div className="nm">{nameTop}</div>
              {nameSub && <div className="sub">{nameSub}</div>}
            </div>
          </Link>

          <nav className="links">
            {NAV.map((item, i) =>
              hasDropdown(item) ? (
                <div
                  key={item.label}
                  className={`navitem ${openMega === i ? "open" : ""}`}
                  onMouseEnter={() => hoverOpen(i)}
                  onMouseLeave={hoverClose}
                >
                  <button
                    onClick={() => setOpenMega(openMega === i ? null : i)}
                  >
                    {item.label} <i className="caret" />
                  </button>
                  <div className={`mega ${item.alignRight ? "r" : ""}`}>
                    {getDropdownItems(item).map((m, j) =>
                      hasFly(m) ? (
                        <div
                          key={m.label}
                          className={`flyparent ${openFly === `${i}-${j}` ? "open" : ""}`}
                        >
                          <button
                            className="flytrigger"
                            onClick={(e) => {
                              e.stopPropagation();
                              setOpenSubFly(null);
                              setOpenFly(
                                openFly === `${i}-${j}` ? null : `${i}-${j}`,
                              );
                            }}
                          >
                            {m.label} <i className="chev" />
                          </button>
                          <div className="flyout">
                            {m.fly.map((f, k) =>
                              hasSubFly(f) ? (
                                <div
                                  key={f.label}
                                  className={`flyparent ${openSubFly === `${i}-${j}-${k}` ? "open" : ""}`}
                                >
                                  <button
                                    className="flytrigger"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setOpenSubFly(
                                        openSubFly === `${i}-${j}-${k}`
                                          ? null
                                          : `${i}-${j}-${k}`,
                                      );
                                    }}
                                  >
                                    {f.label} <i className="chev" />
                                  </button>
                                  <div className="flyout">
                                    {f.fly.map((sf) => (
                                      <Link
                                        key={sf.label}
                                        href={sf.href}
                                        target={
                                          isExternalHref(sf.href)
                                            ? "_blank"
                                            : undefined
                                        }
                                        rel={
                                          isExternalHref(sf.href)
                                            ? "noopener noreferrer"
                                            : undefined
                                        }
                                      >
                                        {sf.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  key={f.label}
                                  href={f.href}
                                  target={
                                    isExternalHref(f.href)
                                      ? "_blank"
                                      : undefined
                                  }
                                  rel={
                                    isExternalHref(f.href)
                                      ? "noopener noreferrer"
                                      : undefined
                                  }
                                >
                                  {f.label}
                                </Link>
                              ),
                            )}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={m.label}
                          href={m.href}
                          target={
                            isExternalHref(m.href) ? "_blank" : undefined
                          }
                          rel={
                            isExternalHref(m.href)
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {m.label}
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              ) : (
                <div className="navitem" key={item.label}>
                  <Link
                    href={"href" in item ? item.href : "/"}
                    style={
                      "href" in item &&
                        pathname.startsWith(item.href) &&
                        item.href !== "/"
                        ? {
                          background: "var(--green-tint)",
                          color: "var(--green-700)",
                        }
                        : undefined
                    }
                  >
                    {item.label}
                  </Link>
                </div>
              ),
            )}
          </nav>

          {ctas.length > 0 && (
            <div className="header-ctas deskonly">
              {ctas.map((c) => (
                <Link
                  key={c.key}
                  className={`cta-apply${c.key === "apply-job" ? " cta-job" : ""}`}
                  href={c.href as string}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          )}

          <button
            className="burger"
            aria-label="Open menu"
            onClick={() => setDrawer((d) => !d)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* mobile drawer */}
      <div className={`drawer ${drawer ? "open" : ""}`}>
        <div className="scrim" onClick={() => setDrawer(false)} />
        <div className="panel">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 18,
            }}
          >
            <Link className="brand" href="/" onClick={() => setDrawer(false)}>
              {logo && (
                <Image
                  src={logo}
                  alt={`${siteName || "School"} logo`}
                  width={42}
                  height={42}
                  style={{ width: 42, height: 42 }}
                />
              )}
              <div className="brand-txt">
                <div className="nm" style={{ fontSize: ".9rem" }}>
                  {siteName}
                </div>
              </div>
            </Link>
            <button
              onClick={() => setDrawer(false)}
              aria-label="Close menu"
              style={{
                color: "var(--green-800)",
                display: "grid",
                placeItems: "center",
              }}
            >
              <X size={24} strokeWidth={1.75} />
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginBottom: 16,
            }}
          >
            {ctas.map((c) => (
              <Link
                key={c.key}
                className={`cta-apply${c.key === "apply-job" ? " cta-job" : ""}`}
                style={{ display: "block", textAlign: "center" }}
                href={c.href as string}
                onClick={() => setDrawer(false)}
              >
                {c.label}
              </Link>
            ))}
          </div>
          {NAV.map((item, i) =>
            hasDropdown(item) ? (
              <div
                className={`dgroup ${openGroups[i] ? "open" : ""}`}
                key={item.label}
              >
                <button
                  onClick={() => setOpenGroups((g) => ({ ...g, [i]: !g[i] }))}
                >
                  {item.label}
                  <ChevronDown
                    size={18}
                    strokeWidth={1.75}
                    aria-hidden
                    style={{
                      transition: "transform .2s",
                      transform: openGroups[i] ? "rotate(180deg)" : "none",
                    }}
                  />
                </button>
                <div className="dsub">
                  {getDropdownItems(item).map((m) =>
                    hasFly(m) ? (
                      m.fly.map((f) =>
                        hasSubFly(f) ? (
                          <div key={f.label} style={{ marginLeft: 10 }}>
                            <div
                              style={{
                                padding: "9px 6px",
                                fontWeight: 600,
                                fontSize: ".86rem",
                                color: "var(--green-900)",
                              }}
                            >
                              {f.label}
                            </div>
                            {f.fly.map((sf) => (
                              <Link
                                key={sf.label}
                                href={sf.href}
                                onClick={() => setDrawer(false)}
                                style={{ paddingLeft: 18 }}
                                target={
                                  isExternalHref(sf.href) ? "_blank" : undefined
                                }
                                rel={
                                  isExternalHref(sf.href)
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                              >
                                {sf.label}
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <Link
                            key={f.label}
                            href={f.href}
                            onClick={() => setDrawer(false)}
                            target={
                              isExternalHref(f.href) ? "_blank" : undefined
                            }
                            rel={
                              isExternalHref(f.href)
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {f.label}
                          </Link>
                        ),
                      )
                    ) : (
                      <Link
                        key={m.label}
                        href={m.href}
                        onClick={() => setDrawer(false)}
                        target={
                          isExternalHref(m.href) ? "_blank" : undefined
                        }
                        rel={
                          isExternalHref(m.href)
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {m.label}
                      </Link>
                    ),
                  )}
                </div>
              </div>
            ) : (
              <div className="dgroup" key={item.label}>
                <Link
                  href={"href" in item ? item.href : "/"}
                  onClick={() => setDrawer(false)}
                  style={{
                    display: "block",
                    padding: "13px 4px",
                    fontWeight: 600,
                    color: "var(--green-900)",
                  }}
                >
                  {item.label}
                </Link>
              </div>
            ),
          )}
        </div>
      </div>
    </>
  );
}

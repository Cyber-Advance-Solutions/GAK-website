"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Phone, Mail, ChevronDown, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { NAV, type NavItem, type MegaEntry, type FlyEntry } from "@/lib/data";


const hasMega = (i: NavItem): i is Extract<NavItem, { mega: MegaEntry[] }> =>
  "mega" in i;
const hasFly = (m: MegaEntry): m is Extract<MegaEntry, { fly: unknown }> =>
  "fly" in m;
const hasSubFly = (f: FlyEntry): f is Extract<FlyEntry, { fly: unknown }> =>
  "fly" in f;
const isExternalHref = (href: string) => /^https?:\/\//.test(href);

export default function Header() {
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

  return (
    <>
      {/* utility strip */}
      <div className="util">
        <div className="wrap">
          <div className="util-left">
            <Link className="u-hide" href="/contact">
              <Phone size={14} strokeWidth={1.75} aria-hidden /> 053-9240263
            </Link>
            <span className="dot u-hide" />
            <Link className="u-hide" href="/contact">
              <FaWhatsapp size={14} strokeWidth={1.75} aria-hidden /> 0330-4250111
            </Link>
            <span className="dot u-hide" />
            <Link className="u-hide" href="/contact">
              <Mail size={14} strokeWidth={1.75} aria-hidden />{" "}
              gakhrn@gmail.com
            </Link>
          </div>
          <div className="util-right">
            <a href="https://apms.pk" target="_blank">
              AIS Portals — Teachers
            </a>
            <span className="dot" />
            <a href="https://student.apms.pk" target="_blank">
              AIS Portals — Students
            </a>
            {/* <span className="dot" /> */}
            {/* <Link href="/links">FBISE</Link> */}
          </div>
        </div>
      </div>

      {/* main header */}
      <header className="main">
        <div className="wrap nav">
          <Link className="brand" href="/">
            <Image
              src="/logo.png"
              alt="APS&C GAK Campus Kharian Cantt logo"
              width={56}
              height={56}
            />
            <div className="brand-txt">
              <div className="nm">Garrison Academy</div>
              <div className="sub">Kharian Cantt</div>
            </div>
          </Link>

          <nav className="links">
            {NAV.map((item, i) =>
              hasMega(item) ? (
                <div
                  key={item.label}
                  className={`navitem ${openMega === i ? "open" : ""}`}
                  onMouseEnter={() =>
                    window.innerWidth > 1080 && setOpenMega(i)
                  }
                  onMouseLeave={() =>
                    window.innerWidth > 1080 &&
                    (setOpenMega(null), setOpenFly(null), setOpenSubFly(null))
                  }
                >
                  <button
                    onClick={() => setOpenMega(openMega === i ? null : i)}
                  >
                    {item.label} <i className="caret" />
                  </button>
                  <div className={`mega ${item.alignRight ? "r" : ""}`}>
                    {item.mega.map((m, j) =>
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
                                        openSubFly === `${i}-${j}-${k}` ? null : `${i}-${j}-${k}`,
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
                                        target={isExternalHref(sf.href) ? "_blank" : undefined}
                                        rel={isExternalHref(sf.href) ? "noopener noreferrer" : undefined}
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
                                  target={isExternalHref(f.href) ? "_blank" : undefined}
                                  rel={isExternalHref(f.href) ? "noopener noreferrer" : undefined}
                                >
                                  {f.label}
                                </Link>
                              ),
                            )}
                          </div>
                        </div>
                      ) : (
                        <Link key={m.label} href={m.href}>
                          {m.label}
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              ) : (
                <div className="navitem" key={item.label}>
                  <Link
                    href={item.href}
                    style={
                      pathname.startsWith(item.href) && item.href !== "/"
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

          <Link className="cta-apply deskonly" href="/admissions">
            Apply for Admission
          </Link>
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
              <Image
                src="/logo.svg"
                alt="APS&C GAK Campus Kharian Cantt logo"
                width={42}
                height={42}
                style={{ width: 42, height: 42 }}
              />
              <div className="brand-txt">
                <div className="nm" style={{ fontSize: ".9rem" }}>
                  Garrison Academy Kharian Cantt
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
          <Link
            className="cta-apply"
            style={{ display: "block", textAlign: "center", marginBottom: 16 }}
            href="/admissions"
            onClick={() => setDrawer(false)}
          >
            Apply for Admission
          </Link>
          {NAV.map((item, i) =>
            hasMega(item) ? (
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
                  {item.mega.map((m) =>
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
                                target={isExternalHref(sf.href) ? "_blank" : undefined}
                                rel={isExternalHref(sf.href) ? "noopener noreferrer" : undefined}
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
                            target={isExternalHref(f.href) ? "_blank" : undefined}
                            rel={isExternalHref(f.href) ? "noopener noreferrer" : undefined}
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
                  href={item.href}
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

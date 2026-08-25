"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRE_SUBPAGES } from "@/lib/pre-school-data";

export default function PreSchoolSubNav() {
  const pathname = usePathname();
  return (
    <div className="subnav">
      <div className="wrap subnav-in">
        <Link href="/sections/pre" className={pathname === "/sections/pre" ? "active" : ""}>Section Head</Link>
        {PRE_SUBPAGES.map((p) => {
          const href = `/sections/pre/${p.slug}`;
          return (
            <Link key={p.slug} href={href} className={pathname === href ? "active" : ""}>{p.label}</Link>
          );
        })}
      </div>
    </div>
  );
}

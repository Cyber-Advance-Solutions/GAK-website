import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Organogram — GAK" };

const PAGES = [
  {
    label: "Academic Structure",
    desc: "Academic leadership: Principal, Vice Principals (APSACS & APSIS), and Section Heads.",
    href: "/organogram/academic",
  },
  {
    label: "Administrative Structure",
    desc: "Administrative governance: Vice Principal, Admin Offices, JCOs and support staff.",
    href: "/organogram/admin",
  },
];

export default function OrganogramPage() {
  return (
    <div className="bg-paper min-h-screen pb-16">
      <PageHero
        eyebrow="Structure"
        title="School Organogram"
        intro="How Garrison Academy Kharian Cantt is organised — academic leadership and administrative governance."
        image={BANNER.organogram}
        crumb={[{ label: "Organogram" }]}
      />

      <section className="sec">
        <div className="wrap">
          <div className="linkcards">
            {PAGES.map((p) => (
              <Link className="linkcard" href={p.href} key={p.href}>
                <div>
                  <h4>{p.label}</h4>
                  <p>{p.desc}</p>
                </div>
                <ArrowRight size={16} style={{ marginLeft: "auto", flexShrink: 0 }} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

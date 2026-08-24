import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Principals" };

const PRINCIPALS: [string, string, string, string][] = [
  ["TC", "Ms Tallat Azeem Ch", "1970's – 1973", "/history/tallat-azeem2.png"],
  ["NR", "Mrs. Najm Rao", "1982 – 1985", "/history/najam-rao.png"],
  ["HH", "Mrs. Humaira Munir Hafeez", "Jan – Jun 1986", "/history/humaira-muneer-hafeez.png"],
  ["SM", "Mrs. Sehba Musharraf", "Aug – Sept 1986", "/history/sehba-musharraf.png"],
  ["TS", "Mrs. Tasneem Shaheen", "Oct 1986 – Apr 1989", "/history/tasneem-shaheen.png"],
  ["WH", "Sqn Ldr (R) Walayat Hussain", "Apr 1989 – Dec 1992", "/history/walayat-hussain.png"],
  ["MY", "Lt Col (R) M. Younis", "Jan 1993 – Jul 1996", "/history/m-younis.png"],
  ["AK", "Mr. A. D. Khan", "Aug 1996 – Sep 1997", "/history/mr-a-d-khan.png"],
  ["AZ", "Col (R) Abu Zar Khan", "Oct 1997 – Apr 2000", "/history/abu-zar-khan.png"],
  ["TN", "Mrs. Tasneem Naqvi", "2000–03, 2010–15", "/history/tasneem-naqvi.png"],
  ["NP", "Mrs. Naheed Pirzada", "Aug 2003 – Dec 2005", "/history/naheed-prizad.png"],
  ["SG", "Syed Ghalib Raza Gillani", "Dec 2005 – Apr 2007", "/history/syed-ghalib-raza-gillani.png"],
  ["SR", "Mrs. Salma Raza Gillani", "Apr 2007 – Sep 2009", "/history/salma-raza.png"],
  ["MS", "Lt Col (R) M. Sarwar", "Sep 2009 – Jul 2010", "/history/m-sarwar.png"],
  ["AZ", "Prof Arjasab Khan Zafar", "Oct 2015 – Oct 2023", "/history/prof-arjasab-khan-zafar2.png"],
  ["WR", "Prof Dr. Syed Waqar Ali Rizvi", "Sep 2023 – Mar 2026", "/history/prof-dr-syed-waqar-ali-rizvi.png"],
];

export default function PrincipalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Principals Through the Years"
        intro="Every Principal who has led Garrison Academy Kharian Cantt since 1970, with their years of service."
        image={BANNER["about-principals"]}
        crumb={[{ label: "About Us", href: "/about" }, { label: "Principals" }]}
      />

      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Our leadership" title="A legacy of leadership" intro="Sixteen Principals have carried the institution forward since its founding, each building on the discipline and standards set before them." />
          <div className="grid g4">
            {PRINCIPALS.map(([ph, nm, role, img]) => (
              <div className="card person" key={nm + role}>
                <div className="ph" style={{ position: "relative", overflow: "hidden" }}>
                  {img ? (
                    <Image src={img} alt={nm} fill className="object-cover object-top" />
                  ) : (
                    ph
                  )}
                </div>
                <div className="nm">{nm}</div>
                <div className="role">{role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

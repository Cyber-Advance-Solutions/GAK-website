import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Principals" };

const principalsList = [
  {
    name: "Ms Tallat Azeem Ch",
    role: "Founder Principal",
    period: "(1970's-1973)",
    image: "/history/tallat-azeem2.png" // using tallat-azeem2.png or tallat-azeem.png, assuming tallat-azeem.png might be the timeline one and tallat-azeem2.png is the portrait. Let's use tallat-azeem.png just in case, wait, let me just use tallat-azeem2.png.
  },
  {
    name: "Mrs. Najm Rao",
    period: "(1982-1985)",
    image: "/history/najam-rao.png"
  },
  {
    name: "Mrs. Humaira Munir Hafeez",
    period: "(Jan 1986 - Jun 1986)",
    image: "/history/humaira-muneer-hafeez.png"
  },
  {
    name: "Mrs. Sehba Musharraf",
    period: "(Aug 1986 - Sept 1986)",
    image: "/history/sehba-musharraf.png"
  },
  {
    name: "Mrs. Tasneem Shaheen",
    period: "(Oct 1986 - Apr 1989)",
    image: "/history/tasneem-shaheen.png"
  },
  {
    name: "Sqn Ldr ® Walayat Hussain",
    period: "(Apr 1989 - Dec 1992)",
    image: "/history/walayat-hussain.png"
  },
  {
    name: "Lt Col ® M. Younis",
    period: "(Jan 1993 - Jul 1996)",
    image: "/history/m-younis.png"
  },
  {
    name: "Mr. A. D. Khan",
    period: "(Aug 1996 - Sep 1997)",
    image: "/history/mr-a-d-khan.png"
  },
  {
    name: "Col ® Abu Zar Khan",
    period: "(Oct 1997 - Apr 2000)",
    image: "/history/abu-zar-khan.png"
  },
  {
    name: "Mrs. Tasneem Naqvi",
    period: "(May 2000 - Jun 2003, Aug 2010 - Sep 2015)",
    image: "/history/tasneem-naqvi.png"
  },
  {
    name: "Mrs. Naheed Pirzada",
    period: "(Aug 2003 - Dec 2005)",
    image: "/history/naheed-prizad.png"
  },
  {
    name: "Syed Ghalib Raza Gillani",
    period: "(Dec 2005 - Apr 2007)",
    image: "/history/syed-ghalib-raza-gillani.png"
  },
  {
    name: "Mrs. Salma Raza Gillani",
    period: "(Apr 2007 - Sep 2009)",
    image: "/history/salma-raza.png"
  },
  {
    name: "Lt Col ® M. Sarwar",
    period: "(Sep 2009 - Jul 2010)",
    image: "/history/m-sarwar.png"
  },
  {
    name: "Prof Arjasab Khan Zafar",
    period: "(Oct 2015 - Oct 2023)",
    image: "/history/prof-arjasab-khan-zafar2.png"
  },
  {
    name: "Prof Dr. Syed Waqar Ali Rizvi",
    period: "(Sep 2023 - March 2026)",
    image: "/history/prof-dr-syed-waqar-ali-rizvi.png"
  }
];

export default function PrincipalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Principals Through the Years"
        intro="Every Principal who has led Garrison Academy Kharian Cantt since 1970's, with their years of service."
        image={BANNER["about-principals"]}
        crumb={[{ label: "About Us", href: "/about" }, { label: "Principals" }]}
      />

      {/* Principals / Leaders Section */}
      <section className="max-w-[1400px] mx-auto px-4 lg:px-8 mt-32 mb-16">
        <div className="bg-green-900 rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl border-4 border-gold-300">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full opacity-10 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-flame rounded-full opacity-10 blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10 mb-12">
            <h2 className="text-3xl md:text-5xl font-display text-gold-300 mb-4 uppercase tracking-widest drop-shadow-lg">
              A Shining League of Distinguished Leaders
            </h2>
            <h3 className="text-2xl md:text-3xl font-display text-white uppercase tracking-wider mb-4">
              Garrison Academy Kharian Cantonment
            </h3>
            <p className="text-lg md:text-xl text-gold-400 font-bold uppercase tracking-[0.2em]">
              List of Principals <span className="bg-gold-300 text-green-900 px-3 py-1 rounded-full text-sm ml-2">(1970's - 2026)</span>
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {principalsList.map((principal, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gold-300 flex flex-col transform transition hover:-translate-y-2 hover:shadow-2xl duration-300">
                <div className="relative w-full aspect-[3/4] bg-gray-100">
                  <Image
                    src={principal.image}
                    alt={principal.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-3 text-center flex-grow flex flex-col justify-center items-center bg-white border-t-2 border-green-900/10">
                  <h4 className="text-green-900 font-bold text-sm md:text-xs xl:text-sm leading-tight mb-1 font-body">
                    {principal.name}
                  </h4>
                  {principal.role && (
                    <p className="text-flame text-[10px] md:text-[9px] xl:text-[10px] font-bold uppercase mb-1">
                      {principal.role}
                    </p>
                  )}
                  <p className="text-gray-600 text-[11px] md:text-[10px] xl:text-[11px] font-medium">
                    {principal.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

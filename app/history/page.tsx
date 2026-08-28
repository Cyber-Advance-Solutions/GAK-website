import React from 'react';
import Image from 'next/image';
import PageHero from "@/components/PageHero";

const timelineEvents = [
  {
    year: "1970's",
    title: "Toddlers' Nursery",
    principal: "Ms Tallat Azeem Ch",
    principalImage: "/history/tallat-azeem.png",
    eventImage: "/history/toddlers-nursery.png",
  },
  {
    year: "1975",
    title: "Kehkashan Academy",
    principal: "Ms Tallat Azeem Ch",
    principalImage: "/history/tallat-azeem.png",
    eventImage: "/history/kehkashan-academy-1975.png",
  },
  {
    year: "1980",
    title: "Raised to Middle Level",
    principal: "Ms Tallat Azeem Ch",
    principalImage: "/history/tallat-azeem.png",
    eventImage: "/history/middle-level-1980.png",
  },
  {
    year: "1988",
    title: "Renamed as APS",
    principal: "Mrs Tasneem Shaheed",
    principalImage: "/history/mrs-tasneem-shaheed.png",
    eventImage: "/history/as-APS-1988.png",
  },
  {
    year: "1996",
    title: "Higher Secondary Lvl",
    principal: "Lt Col ® M. Younis",
    principalImage: "/history/m-younis.png",
    eventImage: "/history/higher-secondary-1996.png",
  },
  {
    year: "2000",
    title: "Quaid & Adm Block",
    principal: "Mrs Tasneem Naqvi",
    principalImage: "/history/tasneem-naqvi.png",
    eventImage: "/history/quaid-adm-block-2000.png",
  },
  {
    year: "2001",
    title: "Renamed as GAK",
    principal: "Mrs Tasneem Naqvi",
    principalImage: "/history/tasneem-naqvi.png",
    eventImage: "/history/renamed-as-GAK-2001.png",
  },
  {
    year: "2006",
    title: "Ibn e Sina Auditorium",
    principal: "Syed Ghalib Raza Gillani",
    principalImage: "/history/syed-ghalib-raza-gillani.png",
    eventImage: "/history/ibn-e-sina-auditorium-2006.png",
  },
  {
    year: "2010",
    title: "New Block Pre-School",
    principal: "Mrs Tasneem Naqvi",
    principalImage: "/history/tasneem-naqvi.png",
    eventImage: "/history/new-block-pre-school-2010.png",
  },
  {
    year: "2017",
    title: "Senior Sec Sci Labs",
    principal: "Prof Arjasab Khan Zafar",
    principalImage: "/history/prof-arjasab-khan-zafar2.png",
    eventImage: "/history/senior-sec-sci-labs-2017.png",
  },
  {
    year: "2020",
    title: "Cambridge Sec",
    principal: "Prof Arjasab Khan Zafar",
    principalImage: "/history/prof-arjasab-khan-zafar2.png",
    eventImage: "/history/cambridge-sec-2020.png",
  },
  {
    year: "2021",
    title: "KG & Prep Class Block",
    principal: "Prof Arjasab Khan Zafar",
    principalImage: "/history/prof-arjasab-khan-zafar2.png",
    eventImage: "/history/kg-prep-class-block-2021.png",
  },
  {
    year: "2024",
    title: "Renamed as APS&C GAK Campus",
    principal: "Prof Dr Syed Waqar Ali Rizvi",
    principalImage: "/history/prof-dr-syed-waqar-ali-rizvi.png",
    eventImage: "/history/renamed-as-APS&C-GAK-campus-2024.png",
  },
  {
    year: "2024",
    title: "Launch of APSIS Classes I-V",
    principal: "Prof Dr Syed Waqar Ali Rizvi",
    principalImage: "/history/prof-dr-syed-waqar-ali-rizvi.png",
    eventImage: "/history/launch-of-APSIS-classes-I-V.png",
  },
  {
    year: "2025",
    title: "APSIS New Building",
    principal: "Prof Dr Syed Waqar Ali Rizvi",
    principalImage: "/history/prof-dr-syed-waqar-ali-rizvi.png",
    eventImage: "/history/APSIS-new-building-2025.png",
  }
];

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

export default function HistoryPage() {
  return (
    <div className="bg-paper min-h-screen pb-16">
      {/* Hero Section */}
      <PageHero
        eyebrow="GAK Legacy"
        title="History of GAK"
        intro="Tracing the journey of Garrison Academy Kharian Cantonment from its humble beginnings to a legacy of excellence."
        image="/history/quaid-adm-block-2000.png"
        crumb={[{ label: "History" }]}
      />

      {/* Timeline Section */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8 mb-24 mt-16">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gold-300 hidden md:block rounded-full"></div>

          <div className="space-y-24">
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-flame border-4 border-paper z-10 items-center justify-center shadow-lg"></div>

                {/* Content Side (Image) */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4">
                  <div className={`relative w-full aspect-video rounded-xl overflow-hidden shadow-xl border-4 border-gold-300 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    <Image
                      src={event.eventImage}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content Side (Text & Principal) */}
                <div className="w-full md:w-1/2 px-4 md:px-12 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className={`w-full ${index % 2 === 0 ? 'md:text-right md:items-end' : 'md:text-left md:items-start'} flex flex-col`}>
                    <span className="text-flame font-bold text-2xl md:text-3xl tracking-wider mb-2 font-insc">
                      {event.year}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-display text-green-800 mb-6">
                      {event.title}
                    </h3>
                    
                    <div className={`flex items-center gap-4 bg-green-50/50 p-4 rounded-xl border border-green-100 ${index % 2 === 0 ? 'flex-row-reverse text-right' : 'flex-row text-left'} w-fit`}>
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold-400 shadow-md shrink-0 relative bg-white">
                        <Image
                          src={event.principalImage}
                          alt={event.principal}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-green-600 font-bold uppercase tracking-wider mb-1">Principal</p>
                        <p className="text-lg font-display text-green-900">{event.principal}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
}
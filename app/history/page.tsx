import React from 'react';
import Image from 'next/image';
import PageHero from "@/components/PageHero";
import PrincipalsRoll from "@/components/PrincipalsRoll";
import { getHistory, getPrincipals } from "@/lib/mappers/about";

export const dynamic = "force-dynamic";

export default async function HistoryPage() {
  const [{ overview, milestones: timelineEvents }, principals] = await Promise.all([getHistory(), getPrincipals()]);
  return (
    <div className="bg-paper min-h-screen pb-16">
      {/* Hero Section */}
      <PageHero
        eyebrow={overview?.tagline || "GAK Legacy"}
        title={overview?.heading || "History of GAK"}
        intro={overview?.subHeading || undefined}
        image={overview?.image || "/history/quaid-adm-block-2000.png"}
        crumb={[{ label: "History" }]}
      />

      {/* Timeline Section */}
      {timelineEvents.length > 0 && (
      <section className="max-w-6xl mx-auto px-4 lg:px-8 mb-24 mt-16">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gold-300 hidden md:block rounded-full"></div>

          <div className="space-y-24">
            {timelineEvents.map((event, index) => (
              <div 
                key={event.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-flame border-4 border-paper z-10 items-center justify-center shadow-lg"></div>

                {/* Content Side (Image) */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4">
                  <div className={`relative w-full aspect-video rounded-xl overflow-hidden shadow-xl border-4 border-gold-300 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    {event.eventImage && (
                      <Image
                        src={event.eventImage}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    )}
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
                    
                    {event.principal && (
                    <div className={`flex items-center gap-4 bg-green-50/50 p-4 rounded-xl border border-green-100 ${index % 2 === 0 ? 'flex-row-reverse text-right' : 'flex-row text-left'} w-fit`}>
                      {event.principalImage && (
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold-400 shadow-md shrink-0 relative bg-white">
                        <Image
                          src={event.principalImage}
                          alt={event.principal}
                          fill
                          className="object-cover"
                        />
                      </div>
                      )}
                      <div>
                        <p className="text-sm text-green-600 font-bold uppercase tracking-wider mb-1">Principal</p>
                        <p className="text-lg font-display text-green-900">{event.principal}</p>
                      </div>
                    </div>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Principals / Leaders Section */}
      <PrincipalsRoll principals={principals} />
    </div>
  );
}

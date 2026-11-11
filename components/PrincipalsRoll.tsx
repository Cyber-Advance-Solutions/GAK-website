import Image from "next/image";
import type { PrincipalCard } from "@/lib/mappers/about";

/** "A Shining League of Distinguished Leaders" — roll of principals (admin About → Principals). Used on /about/principals and /history. */
export default function PrincipalsRoll({ principals }: { principals: PrincipalCard[] }) {
  if (principals.length === 0) return null;
  return (
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
            List of Principals <span className="bg-gold-300 text-green-900 px-3 py-1 rounded-full text-sm ml-2">(1970&apos;s - 2026)</span>
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {principals.map((principal) => (
            <div key={principal.id} className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gold-300 flex flex-col transform transition hover:-translate-y-2 hover:shadow-2xl duration-300">
              <div className="relative w-full aspect-[3/4] bg-gray-100">
                {principal.image && (
                  <Image
                    src={principal.image}
                    alt={principal.name}
                    fill
                    className="object-cover object-top"
                  />
                )}
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
  );
}

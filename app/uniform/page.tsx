import { Info } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { BANNER } from "@/lib/images";
import Link from "next/link";

export const metadata = { title: "School Uniform" };

const UNIFORM_DATA = [
  {
    level: "Early Years Stages 1 & 2",
    details: "No Uniform (smart, clean, comfortable clothes / shoes. Activities & weather appropriate e.g. track suit)."
  },
  {
    level: "Pre-1 - Class III",
    summer: {
      girls: [
        "Half sleeves A – line white shirt (dark green 1/2\" band on pocket and half sleeves, APSACS embroidered on the pocket), dark green sash (optional)",
        "White tights / shalwar",
        "White socks and black shoes",
        "Black or white hair accessories"
      ],
      boys: [
        "Half sleeves white shirt (APSACS embroidered on pocket) with grey shorts / trousers",
        "Black socks and black shoes",
        "Black belt with APSACS insignia",
        "Dark green baseball cap with APSACS insignia (optional)"
      ]
    },
    winter: {
      girls: [
        "Full sleeves A – line white shirt (dark green 1/2\" band on pocket and cuff of sleeves, APSACS embroidered on the pocket), dark green sash (optional)",
        "White legging / tights / shalwar",
        "Dark green V-neck full sleeves / sleeveless sweater with yellow stripes",
        "Dark green blazer (with insignia)",
        "White socks and black shoes",
        "Black or white hair accessories"
      ],
      boys: [
        "Full sleeves white shirt (APSACS embroidered on pocket) with grey trousers",
        "APSACS striped necktie",
        "Dark green V-neck full sleeves / sleeveless sweater with yellow stripes",
        "Dark green blazer with APSACS insignia",
        "Black socks and black shoes",
        "Black belt with APSACS insignia",
        "Dark green baseball / woolen cap with APSACS insignia & gloves (optional)"
      ]
    }
  },
  {
    level: "Class IV - V",
    summer: {
      girls: [
        "Half sleeves A – line white shirt (dark green 1/2\" band on pocket and half sleeves, piping on slits, APSACS embroidered on the pocket)",
        "White shalwar",
        "Dark green sash",
        "White scarf (optional)",
        "White socks and black shoes",
        "Black or white hair accessories"
      ],
      boys: [
        "Half sleeves shirt (APSACS embroidered on pocket) with grey shorts / trousers",
        "Black socks and black shoes",
        "Black belt with APSACS insignia",
        "Dark green baseball cap with APSACS insignia (optional)"
      ]
    },
    winter: {
      girls: [
        "Full sleeves A – line white shirt (dark green 1/2\" band on pocket and cuffs of the sleeves, piping on slits, APSACS embroidered on the pocket)",
        "White shalwar",
        "Dark green sash",
        "White scarf (optional)",
        "Dark green V-neck full sleeves / sleeveless sweater with yellow stripes",
        "Dark green blazer with APSACS insignia",
        "White socks and black shoes",
        "Black or white hair accessories"
      ],
      boys: [
        "Full sleeves white shirt (APSACS embroidered on pocket) with grey trousers",
        "APSACS striped necktie",
        "Dark green V-neck full sleeves / sleeveless sweater with yellow stripes",
        "Dark green blazer (with insignia)",
        "Black socks and black shoes",
        "Black belt with APSACS insignia",
        "Dark green baseball / woolen cap with APSACS insignia & gloves (optional)"
      ]
    }
  },
  {
    level: "Class VI - X",
    summer: {
      girls: [
        "Full sleeves A – line white shirt (dark green 1/2\" band on pocket and cuff of sleeves, piping on slits, APSACS embroidered on the pocket)",
        "White shalwar",
        "White dupatta with green edging",
        "White scarf (optional)",
        "White socks and black shoes",
        "Black or white hair accessories"
      ],
      boys: [
        "Half / full sleeves white shirt (APSACS embroidered on pocket) with grey trousers",
        "Black socks and black shoes",
        "Black belt with APSACS insignia",
        "Dark green baseball cap with APSACS insignia (optional)"
      ]
    },
    winter: {
      girls: [
        "Full sleeves A - line white shirt (dark green 1\" band on pocket and cuff of sleeves, piping on slits, APSACS embroidered on the pocket)",
        "White shalwar",
        "White dupatta with green edging",
        "White scarf (optional)",
        "Dark green V-neck full sleeves / sleeveless sweater with yellow stripes",
        "Dark green blazer with APSACS insignia",
        "White socks and black shoes",
        "Black and white hair accessories"
      ],
      boys: [
        "Full sleeves white shirt (APSACS embroidered on pocket) with grey trousers",
        "APSACS striped necktie",
        "Dark green V-neck full sleeves / sleeveless sweater with yellow stripes",
        "Dark green blazer with APSACS insignia",
        "Black socks and black shoes",
        "Black belt with APSACS insignia",
        "Dark green baseball cap / woolen cap with APSACS insignia & gloves (optional)"
      ]
    }
  },
  {
    level: "Class XI - XII",
    summer: {
      girls: [
        "Full sleeves white shirt (edging in green and white stripes on slits, 1/2\" band on pocket and cuff of sleeves, APSACS embroidered on the pocket)",
        "White shalwar",
        "White dupatta with striped green and white edging",
        "White scarf (optional)",
        "White socks and black shoes",
        "Black or white hair accessories",
        "Dark green beret with APSACS insignia (optional)"
      ],
      boys: [
        "Half / full sleeves green and white striped shirt (APSACS embroidered on pocket) with grey trousers",
        "Black socks and black shoes",
        "Black belt with APSACS insignia",
        "Dark green beret with APSACS insignia (optional)"
      ]
    },
    winter: {
      girls: [
        "Full sleeves white shirt (edging done in green and white stripes on slits, 1/2\" band on pocket and cuff of sleeves, APSACS embroidered on the pocket)",
        "White shalwar",
        "White dupatta with striped green and white edging",
        "White scarf (optional)",
        "Dark green V-neck full sleeves / sleeveless sweater with yellow stripes",
        "Dark green blazer with APSACS insignia",
        "White socks and black shoes",
        "Black & white hair accessories",
        "Dark green beret with APSACS insignia (optional)"
      ],
      boys: [
        "Full sleeves green and white striped shirt (APSACS embroidered on pocket) with grey trousers",
        "Dark green necktie with APSACS insignia",
        "Dark green V-neck full sleeves / sleeveless sweater with yellow stripes",
        "Dark green blazer with APSACS insignia",
        "Black socks and black shoes",
        "Black belt with APSACS insignia",
        "Dark green beret with APSACS insignia (optional), woolen cap with APSACS insignia & gloves (optional)"
      ]
    }
  }
];

const APSIS_UNIFORM_DATA = [
  {
    level: "Play Group & Nursery",
    details: "No Uniform"
  },
  {
    level: "Kindergarten to Class V",
    summer: {
      girls: [
        "Olive green sleeveless Tunic with APSIS logo + full sleeves beige blouse with round baby collar",
        "Beige socks",
        "Black buckle shoes",
        "Black joggers or trainers for sports"
      ],
      boys: [
        "Olive green full sleeved shirt with APSIS logo",
        "Beige trouser",
        "APSIS tie",
        "Black belt",
        "Beige socks",
        "Black Oxford shoes with laces",
        "Black joggers or trainers for sports"
      ]
    },
    winter: {
      girls: [
        "Olive green sleeveless Tunic with APSIS logo + full sleeves beige blouse with round baby collar",
        "Beige leggings",
        "Olive green cardigan",
        "Olive green blazer with APSIS logo",
        "Beige socks",
        "Black buckle shoes",
        "Black joggers or trainers for sports"
      ],
      boys: [
        "Olive green full sleeved shirt with APSIS logo",
        "Beige trouser",
        "Olive green V neck sleeveless sweater",
        "APSIS tie",
        "Olive green blazer with APSIS monogram",
        "Black belt",
        "Beige socks",
        "Black Oxford shoes with laces",
        "Black joggers or trainers for sports"
      ]
    }
  },
  {
    level: "Classes VI - VIII, O & A Levels",
    summer: {
      girls: [
        "Olive green full sleeved kameez with APSIS monogram",
        "Beige shalwar",
        "Olive green/beige dupatta with maroon stripes & writing",
        "Beige socks",
        "Black buckle shoes",
        "Black joggers or trainers for sports"
      ],
      boys: [
        "Olive green full sleeved shirt with APSIS monogram",
        "Beige trouser",
        "Olive green/beige tie with maroon stripes & writing",
        "Black belt",
        "Beige socks",
        "Black Oxford shoes with laces",
        "Black joggers or trainers for sports"
      ]
    },
    winter: {
      girls: [
        "Olive green full sleeved kameez with APSIS monogram",
        "Beige shalwar",
        "Olive green V neck sleeveless sweater",
        "Olive green blazer with APSIS monogram",
        "Olive green/beige dupatta with maroon stripes & writing",
        "Beige socks",
        "Black buckle shoes",
        "Black joggers or trainers for sports"
      ],
      boys: [
        "Olive green full sleeved shirt with APSIS monogram",
        "Beige trouser",
        "Olive green V neck sleeveless sweater",
        "Olive green/beige tie with maroon stripes & writing",
        "Olive green blazer with APSIS monogram",
        "Black belt",
        "Beige socks",
        "Black Oxford shoes with laces",
        "Black joggers or trainers for sports"
      ]
    }
  }
];

function UniformList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2 mt-3 text-[15px] text-gray-700 font-body">
      {items.map((item, idx) => (
        <li key={idx} className="leading-relaxed">{item}</li>
      ))}
    </ul>
  );
}

export default async function UniformPage({ searchParams }: { searchParams: Promise<{ tab?: string }> }) {
  const { tab } = await searchParams;
  const activeTab = tab || "APSACS";

  return (
    <div className="bg-paper min-h-screen pb-16">
      <PageHero
        eyebrow="Dress code"
        title="School uniform"
        intro="Official Uniform guidelines for all levels."
        image={BANNER.uniform}
        crumb={[{ label: "School Uniform" }]}
      />

      <section className="max-w-5xl mx-auto px-4 lg:px-8 mt-16">
        <div className="flex border-b border-gray-200 mb-12">
          <Link
            href="?tab=APSACS"
            scroll={false}
            className={`py-4 px-8 text-lg font-bold border-b-4 transition-colors ${activeTab === "APSACS" ? "border-green-700 text-green-800" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          >
            APSACS
          </Link>
          <Link
            href="?tab=APSIS"
            scroll={false}
            className={`py-4 px-8 text-lg font-bold border-b-4 transition-colors ${activeTab === "APSIS" ? "border-green-700 text-green-800" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          >
            APSIS
          </Link>
        </div>

        {activeTab === "APSACS" && (
          <div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-xl mb-12 flex items-start gap-4">
              <Info className="text-green-700 shrink-0 mt-1" size={24} />
              <div className="text-green-900 font-body">
                <p className="font-bold mb-2">APSACS School Uniform</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>APSACS Uniform (all levels) must be displayed in the School Reception Area.</li>
                  <li>Details of APSACS approved Uniform are uploaded on APSACS website.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-16">
              {UNIFORM_DATA.map((section, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-green-900 px-6 py-4">
                    <h2 className="text-2xl font-display text-white">{section.level}</h2>
                  </div>
                  
                  <div className="p-6 md:p-8">
                    {section.details ? (
                      <p className="text-gray-700 font-body text-lg">{section.details}</p>
                    ) : (
                      <div className="space-y-10">
                        <div>
                          <h3 className="text-xl font-bold text-flame mb-6 border-b pb-2">Summer Uniform</h3>
                          <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-6 rounded-xl">
                              <h4 className="font-bold text-lg text-green-800 mb-2">Girls</h4>
                              <UniformList items={section.summer!.girls} />
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl">
                              <h4 className="font-bold text-lg text-green-800 mb-2">Boys</h4>
                              <UniformList items={section.summer!.boys} />
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold text-green-800 mb-6 border-b pb-2">Winter Uniform</h3>
                          <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-6 rounded-xl border border-green-100">
                              <h4 className="font-bold text-lg text-green-800 mb-2">Girls</h4>
                              <UniformList items={section.winter!.girls} />
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-green-100">
                              <h4 className="font-bold text-lg text-green-800 mb-2">Boys</h4>
                              <UniformList items={section.winter!.boys} />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "APSIS" && (
          <div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-xl mb-12 flex items-start gap-4">
              <Info className="text-green-700 shrink-0 mt-1" size={24} />
              <div className="text-green-900 font-body">
                <p className="font-bold mb-2">APSIS School Uniform</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>APSIS Uniform (all levels) must be displayed in the School Reception Area.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-16">
              {APSIS_UNIFORM_DATA.map((section, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-green-900 px-6 py-4">
                    <h2 className="text-2xl font-display text-white">{section.level}</h2>
                  </div>
                  
                  <div className="p-6 md:p-8">
                    {section.details ? (
                      <p className="text-gray-700 font-body text-lg">{section.details}</p>
                    ) : (
                      <div className="space-y-10">
                        <div>
                          <h3 className="text-xl font-bold text-flame mb-6 border-b pb-2">Summer Uniform</h3>
                          <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-6 rounded-xl">
                              <h4 className="font-bold text-lg text-green-800 mb-2">Girls</h4>
                              <UniformList items={section.summer!.girls} />
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl">
                              <h4 className="font-bold text-lg text-green-800 mb-2">Boys</h4>
                              <UniformList items={section.summer!.boys} />
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold text-green-800 mb-6 border-b pb-2">Winter Uniform</h3>
                          <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-6 rounded-xl border border-green-100">
                              <h4 className="font-bold text-lg text-green-800 mb-2">Girls</h4>
                              <UniformList items={section.winter!.girls} />
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-green-100">
                              <h4 className="font-bold text-lg text-green-800 mb-2">Boys</h4>
                              <UniformList items={section.winter!.boys} />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

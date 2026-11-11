import PageHero from "@/components/PageHero";
import PrincipalsRoll from "@/components/PrincipalsRoll";
import { BANNER } from "@/lib/images";
import { getPrincipals } from "@/lib/mappers/about";

export const metadata = { title: "Principals" };
export const dynamic = "force-dynamic";

export default async function PrincipalsPage() {
  const principals = await getPrincipals();
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
      <PrincipalsRoll principals={principals} />
    </>
  );
}

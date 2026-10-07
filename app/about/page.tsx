import PageHero from "@/components/PageHero";
import { BANNER } from "@/lib/images";
import MeetOurTeam from "@/components/MeetOurTeam";

export const metadata = { title: "Our Leadership" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="About Garrison Academy Kharian Cantt"
        intro="Five decades of educating Kharian Cantt — heritage, leadership, conduct and facilities."
        image={BANNER.about}
        crumb={[{ label: "Our Leadership" }]}
      />

      <MeetOurTeam />
      
    </>
  );
}

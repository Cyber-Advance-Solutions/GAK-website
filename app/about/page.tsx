import PageHero from "@/components/PageHero";
import { BANNER } from "@/lib/images";
import MeetOurTeam from "@/components/MeetOurTeam";
import { assetUrl } from "@/lib/api";
import { getAboutOverview, getTeamMembers } from "@/lib/mappers/about";

export const metadata = { title: "Our Leadership" };
export const dynamic = "force-dynamic";

export default async function AboutPage() {
  const [overview, team] = await Promise.all([getAboutOverview(), getTeamMembers()]);
  const o = overview && overview.isEnabled !== false ? overview : null;
  return (
    <>
      <PageHero
        eyebrow={o?.badge || "Our story"}
        title={o?.pageHeading || "About Garrison Academy Kharian Cantt"}
        intro={o?.subHeading || undefined}
        image={assetUrl(o?.coverImage) || BANNER.about}
        crumb={[{ label: "Our Leadership" }]}
      />

      <MeetOurTeam members={team} />
    </>
  );
}

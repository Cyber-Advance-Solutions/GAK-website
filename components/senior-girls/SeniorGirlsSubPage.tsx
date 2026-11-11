import { SeniorSubLayout, type SeniorExtra } from "@/components/senior-boys/SeniorBoysSubPage";
import type { SectionSubPage, SectionView } from "@/lib/mappers/sections";

export const SENIOR_GIRLS_SUPPORTED = ["deputy-section-heads", "subject-coordinators", "faculty-by-department", "cca-activities", "facilities"];

export default function SeniorGirlsSubPage({ d, sub, extra = {} }: { d: SectionView; sub: SectionSubPage; extra?: SeniorExtra }) {
  return (
    <SeniorSubLayout
      d={d}
      sub={sub}
      extra={extra}
      supported={SENIOR_GIRLS_SUPPORTED}
      railTitle="Senior Girls pages"
      heroImage={d.head?.photo || d.banner}
    />
  );
}

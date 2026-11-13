import { SeniorSubLayout, type SeniorExtra } from "@/components/senior-boys/SeniorBoysSubPage";
import { PHOTO_FALLBACK, type SectionSubPage, type SectionView } from "@/lib/mappers/sections";

export const SENIOR_GIRLS_SUPPORTED = ["deputy-section-heads", "subject-coordinators", "faculty-by-department", "cca-activities", "facilities"];

export default function SeniorGirlsSubPage({ d, sub, extra = {} }: { d: SectionView; sub: SectionSubPage; extra?: SeniorExtra }) {
  return (
    <SeniorSubLayout
      d={d}
      sub={sub}
      extra={extra}
      supported={SENIOR_GIRLS_SUPPORTED}
      railTitle="Senior Girls pages"
      // head photo as the banner when one is uploaded; otherwise the section banner (never the grey placeholder)
      heroImage={d.head && d.head.photo !== PHOTO_FALLBACK ? d.head.photo : d.banner}
    />
  );
}

import { FileText, Download } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Tabs from "@/components/Tabs";
import { ToastButton } from "@/components/Toast";
import { BANNER } from "@/lib/images";

export const metadata = { title: "Downloads" };

const NOTIF: [string, string][] = [
  ["Session 2026 Admissions Notification", "05 Jan 2026"],
  ["Winter Vacation Notice", "18 Dec 2025"],
  ["Parent-Teacher Meeting Schedule", "02 Dec 2025"],
];
const CIRC: [string, string][] = [
  ["Circular 18/26", "Winter Uniform Implementation"],
  ["Circular 17/26", "Sports Gala Participation"],
  ["Circular 16/26", "Fee Submission Deadline"],
];
const PAPERS: [string, string][] = [
  ["Mathematics — Class IX", "Past paper · 2025"],
  ["Physics — Class X", "Past paper · 2025"],
  ["English — Class XI", "Past paper · 2024"],
];
const FORMS: [string, string][] = [
  ["Admission Registration Form", "PDF · admissions office"],
  ["School Prospectus 2026", "PDF · downloadable"],
  ["Fee Structure by Class", "PDF · accounts office"],
];

function FileRow({ name, meta }: { name: string; meta: string }) {
  return (
    <div className="filerow">
      <div className="f-ic"><FileText size={20} strokeWidth={1.8} /></div>
      <div><div className="f-nm">{name}</div><div className="f-meta">{meta}</div></div>
      <ToastButton as="a" msg="Downloading PDF…" className="f-dl"><Download size={14} strokeWidth={1.8} /> PDF</ToastButton>
    </div>
  );
}

const rows = (list: [string, string][]) => <>{list.map(([n, m]) => <FileRow key={n} name={n} meta={m} />)}</>;

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Resource library"
        title="Downloads"
        intro="Notifications, circulars, past papers and the admission registration form."
        image={BANNER.downloads}
        crumb={[{ label: "Downloads" }]}
      />
      <section className="sec">
        <div className="wrap">
          <SectionHead eyebrow="Files" title="All school documents" />
          <Tabs
            items={[
              { label: "All", panel: <div>{rows([...NOTIF, ...CIRC, ...PAPERS, ...FORMS])}</div> },
              { label: "Notifications", panel: <div>{rows(NOTIF)}</div> },
              { label: "Circulars", panel: <div>{rows(CIRC)}</div> },
              { label: "Past Papers", panel: <div>{rows(PAPERS)}</div> },
              { label: "Forms", panel: <div>{rows(FORMS)}</div> },
            ]}
          />
        </div>
      </section>
    </>
  );
}

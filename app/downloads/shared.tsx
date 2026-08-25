import { FileText, Download } from "lucide-react";
import { ToastButton } from "@/components/Toast";

export const NOTIF: [string, string][] = [
  ["Session 2026 Admissions Notification", "05 Jan 2026"],
  ["Winter Vacation Notice", "18 Dec 2025"],
  ["Parent-Teacher Meeting Schedule", "02 Dec 2025"],
];
export const CIRC: [string, string][] = [
  ["Circular 18/26", "Winter Uniform Implementation"],
  ["Circular 17/26", "Sports Gala Participation"],
  ["Circular 16/26", "Fee Submission Deadline"],
];
export const PAPERS: [string, string][] = [
  ["Mathematics — Class IX", "Past paper · 2025"],
  ["Physics — Class X", "Past paper · 2025"],
  ["English — Class XI", "Past paper · 2024"],
];
export const FORMS: [string, string][] = [
  ["Admission Registration Form", "PDF · admissions office"],
  ["School Prospectus 2026", "PDF · downloadable"],
  ["Fee Structure by Class", "PDF · accounts office"],
];

export function FileRow({ name, meta }: { name: string; meta: string }) {
  return (
    <div className="filerow">
      <div className="f-ic"><FileText size={20} strokeWidth={1.8} /></div>
      <div><div className="f-nm">{name}</div><div className="f-meta">{meta}</div></div>
      <ToastButton as="a" msg="Downloading PDF…" className="f-dl"><Download size={14} strokeWidth={1.8} /> PDF</ToastButton>
    </div>
  );
}

export const rows = (list: [string, string][]) => <>{list.map(([n, m]) => <FileRow key={n} name={n} meta={m} />)}</>;

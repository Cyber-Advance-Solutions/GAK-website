import { FileText, Download } from "lucide-react";
import { ToastButton } from "@/components/Toast";

export const NOTIF: [string, string][] = [
  ["Session 2026 Admissions Notification", "05 Jan 2026"],
  ["Winter Vacation Notice", "18 Dec 2025"],
  ["Parent-Teacher Meeting Schedule", "02 Dec 2025"],
];
export const CIRC: [string, string, string?][] = [
  [
    "STUDENT CODE OF CONDUCT, DISCIPLINE AND RULES & REGULATIONS.pdf",
    "Official Document · PDF (368 KB)",
    "/docs/STUDENT%20CODE%20OF%20CONDUCT%2C%20DISCIPLINE%20AND%20RULES%20%26%20REGULATIONS.pdf",
  ],
  ["Circular 18/26", "Winter Uniform Implementation"],
  ["Circular 17/26", "Sports Gala Participation"],
  ["Circular 16/26", "Fee Submission Deadline"],
];
export const PAPERS: [string, string][] = [
  ["Mathematics — Class IX", "Past paper · 2025"],
  ["Physics — Class X", "Past paper · 2025"],
  ["English — Class XI", "Past paper · 2024"],
];
export const FORMS: [string, string, string?][] = [
  [
    "Admission Form",
    "PDF · admissions office",
    "/docs/student_admission_form.pdf",
  ],
  ["Admission Registration Form", "PDF · admissions office"],
  ["School Prospectus 2026", "PDF · downloadable"],
  ["Fee Structure by Class", "PDF · accounts office"],
];

/** Suggested save name from a same-origin public file path. */
function downloadFilename(href: string) {
  const segment = href.split("/").pop()?.split(/[?#]/)[0] ?? "";
  try {
    return decodeURIComponent(segment) || undefined;
  } catch {
    return segment || undefined;
  }
}

export function FileRow({
  name,
  meta,
  href,
}: {
  name: string;
  meta: string;
  href?: string;
}) {
  const file = href ? downloadFilename(href) : undefined;

  return (
    <div className="filerow">
      <div className="f-ic">
        <FileText size={20} strokeWidth={1.8} />
      </div>
      <div>
        <div className="f-nm">{name}</div>
        <div className="f-meta">{meta}</div>
      </div>
      <ToastButton
        as="a"
        href={href}
        download={file}
        msg={file ? "Downloading PDF…" : "This file will be available soon."}
        className="f-dl"
      >
        <Download size={14} strokeWidth={1.8} /> PDF
      </ToastButton>
    </div>
  );
}

export const rows = (list: [string, string, string?][]) => (
  <>
    {list.map(([n, m, h]) => (
      <FileRow key={n} name={n} meta={m} href={h} />
    ))}
  </>
);

import { FileText, Download } from "lucide-react";
import { ToastButton } from "@/components/Toast";
import { api, asList, assetUrl, byOrder, isLive } from "@/lib/api";

/** Row shape of GET /downloads (admin: Downloads module; categories "Circulars" | "Forms") */
type ApiDownload = {
  id: number;
  title: string;
  description?: string | null;
  category: string;
  fileUrl?: string | null;
  fileName?: string | null;
  fileSize?: number | null;
  isPublished?: boolean;
  order?: number;
};

function sizeLabel(bytes?: number | null) {
  if (!bytes) return "";
  return bytes >= 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.round(bytes / 1024)} KB`;
}

/** Published documents of one category, in the admin order, as [name, meta, href] rows */
export async function getDownloadRows(category: "Circulars" | "Forms"): Promise<[string, string, string?][]> {
  const list = asList<ApiDownload>(await api<unknown>(`/downloads?category=${encodeURIComponent(category)}&published=true`, []));
  return list
    .filter((d) => d.category === category && isLive(d))
    .sort(byOrder)
    .map((d) => {
      const ext = (d.fileName || d.fileUrl || "").split(".").pop()?.toUpperCase() || "PDF";
      return [d.title, d.description || [ext, sizeLabel(d.fileSize)].filter(Boolean).join(" · "), assetUrl(d.fileUrl) || undefined];
    });
}

/** Empty state for a downloads tab */
export function NoFiles() {
  return <p style={{ color: "var(--ink-soft)", padding: "12px 0" }}>No documents have been published here yet.</p>;
}

// NOTIF and PAPERS have no backend category yet (downloads accept only Circulars / Forms),
// so the Notifications and Past Papers tabs still show this fixed list.

export const NOTIF: [string, string][] = [
  ["Session 2026 Admissions Notification", "05 Jan 2026"],
  ["Winter Vacation Notice", "18 Dec 2025"],
  ["Parent-Teacher Meeting Schedule", "02 Dec 2025"],
];
export const PAPERS: [string, string][] = [
  ["Mathematics — Class IX", "Past paper · 2025"],
  ["Physics — Class X", "Past paper · 2025"],
  ["English — Class XI", "Past paper · 2024"],
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

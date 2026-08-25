import { PAPERS, rows } from "../shared";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Past Papers | Downloads" };

export default function PastPapersPage() {
  return <div className="tabpane active">{rows(PAPERS)}</div>;
}

import { FORMS, rows } from "../shared";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Forms | Downloads" };

export default function FormsPage() {
  return <div className="tabpane active">{rows(FORMS)}</div>;
}

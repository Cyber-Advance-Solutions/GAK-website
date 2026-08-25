import { CIRC, rows } from "../shared";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Circulars | Downloads" };

export default function CircularsPage() {
  return <div className="tabpane active">{rows(CIRC)}</div>;
}

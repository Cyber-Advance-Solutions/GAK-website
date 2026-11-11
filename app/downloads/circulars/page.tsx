import { getDownloadRows, NoFiles, rows } from "../shared";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Circulars | Downloads" };
export const dynamic = "force-dynamic";

export default async function CircularsPage() {
  const list = await getDownloadRows("Circulars");
  return <div className="tabpane active">{list.length > 0 ? rows(list) : <NoFiles />}</div>;
}

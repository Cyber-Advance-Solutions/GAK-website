import { getDownloadRows, NoFiles, rows } from "../shared";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Forms | Downloads" };
export const dynamic = "force-dynamic";

export default async function FormsPage() {
  const list = await getDownloadRows("Forms");
  return <div className="tabpane active">{list.length > 0 ? rows(list) : <NoFiles />}</div>;
}

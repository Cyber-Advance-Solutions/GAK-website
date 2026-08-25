import { NOTIF, rows } from "../shared";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Notifications | Downloads" };

export default function NotificationsPage() {
  return <div className="tabpane active">{rows(NOTIF)}</div>;
}

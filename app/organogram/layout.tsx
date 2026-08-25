import type { Metadata } from "next";

export const metadata: Metadata = { title: "Organogram | Garrison Academy Kharian Cantt" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

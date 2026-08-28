import type { Metadata } from "next";
import { Manrope, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastProvider } from "@/components/Toast";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});
const naskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["500", "700"],
  variable: "--font-naskh",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Army Public School & College — GAK Campus, Kharian Cantt",
    template: "%s · APS&C GAK Campus",
  },
  description:
    "Army Public School & College, GAK Campus, Kharian Cantt — academic excellence, discipline and character since 1970's. Admissions, sections, scholarships, downloads and more.",
  metadataBase: new URL("https://gakcampus.edu.pk"),
  openGraph: {
    title: "Army Public School & College — GAK Campus, Kharian Cantt",
    description: "Knowledge, discipline and character since 1970's.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${naskh.variable}`}>
      <body>
        <ToastProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}

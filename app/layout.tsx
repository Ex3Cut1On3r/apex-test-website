import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ContactModal } from "@/components/ContactModal";
import { CaseStudyModal } from "@/components/CaseStudyModal";

export const metadata: Metadata = {
  title: "APEX | Intelligent Systems. Real Momentum.",
  description:
    "APEX builds software, AI, data, and workflow systems that help businesses modernize operations and scale with confidence.",
  openGraph: {
    title: "APEX | Intelligent Systems. Real Momentum.",
    description:
      "Software, AI, data, and workflow systems built around real operations.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <CaseStudyModal />
        <ContactModal />
      </body>
    </html>
  );
}

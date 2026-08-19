import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "APEX | Intelligent systems. Real impact.",
  description: "APEX designs AI, software, data, and workflow systems that modernize operations and create measurable business impact.",
  openGraph: {
    title: "APEX | Intelligent systems. Real impact.",
    description: "AI and digital systems designed around real operations.",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}

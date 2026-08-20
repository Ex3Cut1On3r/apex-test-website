import type { Metadata, Viewport } from "next";
import "@/shared/globals.css";
import rawContent from "@/shared/en.json";
import type { SiteContent } from "@/shared/types";
import AP_PublicOverlays from "@/app/components/AP_PublicOverlays";

const content = rawContent as SiteContent;

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  icons: { icon: "/api/assets/logo/icon.svg" },
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={content.locale} dir={content.direction}>
      <body>
        {children}
        <AP_PublicOverlays caseStudy={content.caseStudy} />
      </body>
    </html>
  );
}

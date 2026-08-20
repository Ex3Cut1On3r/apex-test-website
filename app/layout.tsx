import type { Metadata, Viewport } from "next";
import "@/shared/styles/globals.css";
import { getContent } from "@/shared/content/content";
import ApPublicOverlays from "@/shared/components/ap_public_overlays";

export function generateMetadata(): Metadata {
  const content = getContent("en");
  return {
    title: content.meta.title,
    description: content.meta.description,
    icons: { icon: "/shared/assets/logo/apex-mark.svg" },
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      type: "website",
    },
  };
}

export function generateViewport(): Viewport {
  return { themeColor: "#ffffff", colorScheme: "light" };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const content = getContent("en");
  return (
    <html lang={content.locale} dir={content.direction}>
      <body>
        {children}
        <ApPublicOverlays caseStudy={content.caseStudy} />
      </body>
    </html>
  );
}

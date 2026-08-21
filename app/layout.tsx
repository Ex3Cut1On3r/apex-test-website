import type { Metadata, Viewport } from "next";
import "@/shared/globals.css";
import rawContent from "@/shared/en.json";
import type { SiteContent } from "@/shared/types";
import AP_PublicOverlays from "@/app/components/AP_PublicOverlays";

const content = rawContent as unknown as SiteContent;
const siteUrl = "https://apexlb.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: content.meta.title,
    template: "%s | APEX",
  },
  description: content.meta.description,
  applicationName: "APEX",
  alternates: { canonical: "/" },
  icons: { icon: "/api/assets/logo/icon.svg" },
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    url: siteUrl,
    siteName: "APEX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: content.meta.title,
    description: content.meta.description,
  },
  robots: { index: true, follow: true },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "APEX",
      url: siteUrl,
      logo: `${siteUrl}/api/assets/logo/apex-logo.svg`,
      description: content.meta.description,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "APEX",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#digital-systems`,
      name: "AI, software, data, and workflow systems",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "Global",
      description: content.meta.description,
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={content.locale} dir={content.direction}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
        <AP_PublicOverlays caseStudy={content.caseStudy} social={content.social} />
      </body>
    </html>
  );
}

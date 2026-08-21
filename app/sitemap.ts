import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://apexlb.tech";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/products`, changeFrequency: "weekly", priority: .8 },
    { url: `${base}/blogs`, changeFrequency: "weekly", priority: .8 },
    { url: `${base}/careers`, changeFrequency: "weekly", priority: .7 },
  ];
}

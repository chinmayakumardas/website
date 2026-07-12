import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://chinmayakumardas.com/sitemap.xml",

    host: "https://chinmayakumardas.com",
  };
}
import type { MetadataRoute } from "next";
import { buildAbsoluteUrl } from "@/app/lib/siteUrl";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/", "/_next/static/", "/_next/image"],
        disallow: [
          "/search",
          "/api/",
          "/admin/",
          "/dashboard/",
          "/login/",
          "/signup/",
        ],
      },
      {
        userAgent: "MJ12bot",
        disallow: "/",
      },
      {
        userAgent: "DotBot",
        disallow: "/",
      },
      {
        userAgent: "BLEXBot",
        disallow: "/",
      },
    ],
    sitemap: buildAbsoluteUrl("/sitemap.xml"),
  };
}

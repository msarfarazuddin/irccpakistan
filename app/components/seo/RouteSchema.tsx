"use client";

import { usePathname } from "next/navigation";
import JsonLd from "@/app/components/seo/JsonLd";
import { buildRouteStructuredData } from "@/app/lib/siteSchema";

export default function RouteSchema() {
  const pathname = usePathname();
  const data = buildRouteStructuredData(pathname);

  if (!data) {
    return null;
  }

  return <JsonLd id="ircc-route-schema" data={data} />;
}

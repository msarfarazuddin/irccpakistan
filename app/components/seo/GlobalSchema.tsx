import JsonLd from "@/app/components/seo/JsonLd";
import { buildGlobalStructuredData } from "@/app/lib/siteSchema";

export default function GlobalSchema() {
  return <JsonLd id="ircc-global-schema" data={buildGlobalStructuredData()} />;
}

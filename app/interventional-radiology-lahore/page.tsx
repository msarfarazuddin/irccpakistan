import type { Metadata } from "next";
import CityPillarPage from "@/app/components/city-pages/CityPillarPage";
import { lahorePillarPage } from "@/app/lib/cityPillarContent";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  canonicalPath: lahorePillarPage.canonicalPath,
  title: lahorePillarPage.metadataTitle,
  description: lahorePillarPage.metadataDescription,
});

export default function InterventionalRadiologyLahorePage() {
  return <CityPillarPage data={lahorePillarPage} />;
}

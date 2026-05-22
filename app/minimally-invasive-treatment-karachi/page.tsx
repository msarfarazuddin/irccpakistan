import type { Metadata } from "next";
import CityPillarPage from "@/app/components/city-pages/CityPillarPage";
import { karachiPillarPage } from "@/app/lib/cityPillarContent";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  canonicalPath: karachiPillarPage.canonicalPath,
  title: karachiPillarPage.metadataTitle,
  description: karachiPillarPage.metadataDescription,
});

export default function MinimallyInvasiveTreatmentKarachiPage() {
  return <CityPillarPage data={karachiPillarPage} />;
}

import type { Metadata } from "next";
import CityPillarPage from "@/app/components/city-pages/CityPillarPage";
import { islamabadPillarPage } from "@/app/lib/cityPillarContent";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  canonicalPath: islamabadPillarPage.canonicalPath,
  title: islamabadPillarPage.metadataTitle,
  description: islamabadPillarPage.metadataDescription,
});

export default function NonSurgicalTreatmentIslamabadPage() {
  return <CityPillarPage data={islamabadPillarPage} />;
}

import type { Metadata } from "next";
import SaudiPatientsLandingPage from "@/app/medical-treatment-in-pakistan-for-saudi-patients/SaudiPatientsLandingPage";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  canonicalPath: "/medical-treatment-in-pakistan-for-saudi-patients",
  title: "Medical Treatment in Pakistan for Saudi Patients | IRCC Pakistan",
  description:
    "Explore medical treatment in Pakistan for Saudi patients at IRCC Pakistan. Access minimally invasive, image-guided treatments, specialist consultation and international patient support in Pakistan.",
});

export default function MedicalTreatmentInPakistanForSaudiPatientsPage() {
  return <SaudiPatientsLandingPage />;
}

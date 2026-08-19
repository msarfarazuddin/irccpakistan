import type { Metadata } from "next";
import UaePatientsLandingPage from "@/app/medical-treatment-in-pakistan-from-uae/UaePatientsLandingPage";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  canonicalPath: "/medical-treatment-in-pakistan-from-uae",
  title: "Medical Treatment in Pakistan for UAE Patients | IRCC Pakistan",
  description:
    "Explore medical treatment in Pakistan for UAE patients at IRCC Pakistan. Access minimally invasive, image-guided treatments, specialist consultation and international patient support in Pakistan.",
});

export default function MedicalTreatmentInPakistanFromUaePage() {
  return <UaePatientsLandingPage />;
}

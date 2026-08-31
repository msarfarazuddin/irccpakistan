import type { Metadata } from "next";
import QatarPatientsLandingPage from "@/app/medical-treatment-in-pakistan-for-qatar-patients/QatarPatientsLandingPage";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  canonicalPath: "/medical-treatment-in-pakistan-for-qatar-patients",
  title: "Medical Treatment in Pakistan for Qatar Patients | IRCC Pakistan",
  description:
    "Qatar residents can access specialist, image-guided and minimally invasive treatment at IRCC Pakistan with case review before travel and appointments in Karachi, Lahore or Islamabad.",
});

export default function MedicalTreatmentInPakistanForQatarPatientsPage() {
  return <QatarPatientsLandingPage />;
}

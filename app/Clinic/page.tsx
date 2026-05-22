import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
import ClinicPageClient from "./ClinicPageClient";

export const metadata: Metadata = createPageMetadata({
    canonicalPath: "/Clinic",
    title: "Dr. Shahbaz Ahmed Qazi's Interventional Radiology Clinic in Pakistan",
    description:
        "Visit IRCC Pakistan at our clinics in Lahore DHA, Karachi Clifton, and Islamabad. Expert interventional radiology care near you. Book a consultation today.",
});

export default function ClinicPage() {
    return <ClinicPageClient />;
}

import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = createPageMetadata({
  canonicalPath: "/Contact",
  title: "Contact IRCC Pakistan | Book an Appointment Today",
  description:
    "Contact IRCC Pakistan to book your appointment with Dr. Shahbaz Ahmed Qazi. Call, WhatsApp or visit our clinic in DHA Lahore. We're here to help.",
});

export default function ContactPage() {
  return <ContactPageClient />;
}

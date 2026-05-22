import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
import HomePageContent from "./home/HomePageContent";

export const metadata: Metadata = createPageMetadata({
  canonicalPath: "/",
  title: "IRCC Pakistan | Interventional Radiology & Vascular Treatment Center",
  description:
    "IRCC Pakistan Minimally invasive treatments for fibroids, varicocele & vascular diseases. Led by Dr. Shahbaz Qazi. Book a consultation today.",
});

export default function RootPage() {
  return <HomePageContent />;
}

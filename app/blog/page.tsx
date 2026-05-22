import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = createPageMetadata({
  canonicalPath: "/blog",
  title: "Interventional Radiology Blog in Pakistan | IRCC – Latest Medical Insights & Treatments",
  description:
    "Read expert health articles on interventional radiology, minimally invasive treatments, and patient care tips from IRCC Pakistan's specialists.",
});

export default function BlogPage() {
  return <BlogPageClient />;
}

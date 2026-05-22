import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
import AboutBanner from "@/app/components/sections/aboutbanner";
import Founder from "@/app/components/sections/FounderMessageSection";
import Mission from "@/app/components/sections/MissionVisionSection";
import Search from "@/app/components/sections/SearchSection";
import Faq from "@/app/components/sections/FaqSection";
import Review from "@/app/components/sections/TestimonialsSection";
import BlogSection from "@/app/components/sections/BlogSection";

export const metadata: Metadata = createPageMetadata({
  canonicalPath: "/About",
  title: "About IRCC Pakistan | Dr. Shahbaz Ahmed Qazi",
  description:
    "Learn about IRCC Pakistan and Dr. Shahbaz Ahmed Qazi - Pakistan's No.1 interventional radiologist with 25+ years of minimally invasive expertise.",
});

export default function AboutPage() {
  return (
    <>
      <AboutBanner />
      <Founder />
      <Mission />
      <Search />
      <Faq />
      <Review />
      <BlogSection/>
    </>
  );
}

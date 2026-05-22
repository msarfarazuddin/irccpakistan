import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
import HeroSection from "@/app/Uterine-Fibroid-Embolization/UterineHero";
import UFEinfo from "@/app/Uterine-Fibroid-Embolization/UfeInfoSection";
import Fibro from "@/app/Uterine-Fibroid-Embolization/FibroidsTypesSection";
import FibroSymtoms from "@/app/Uterine-Fibroid-Embolization/FibroidSymptomsSection";
import Consultant from "@/app/Uterine-Fibroid-Embolization/ConsultationSection";
import Testimonial from "@/app/components/sections/TestimonialsSection";
import Candidate from "@/app/Uterine-Fibroid-Embolization/Candidate";
import Benifits from "@/app/Uterine-Fibroid-Embolization/Benefits of UFE";
import Search from "@/app/components/sections/SearchSection";
import Blog from "@/app/components/sections/BlogSection";
import Faq from "@/app/Uterine-Fibroid-Embolization/FaqSection";

export const metadata: Metadata = createPageMetadata({
  canonicalPath: "/Uterine-Fibroid-Embolization",
  title: "Uterine Fibroid Embolization (UFE) | IRCC Pakistan",
  description:
    "Avoid fibroid surgery with UFE at IRCC Pakistan. Dr. Shahbaz offers minimally invasive uterine fibroid embolization with fast recovery in Pakistan.",
});

export default function Ufe() {
  return (
    <>
      <HeroSection />
      <UFEinfo/>
      <Fibro/>
      <FibroSymtoms/>
      <Candidate/>
      <Benifits/>
       <Search/>
       <Consultant/>
      <section className="pt-20  bg-white">
      <Testimonial/>
      </section>
      <Faq/>
      <Blog/>
    </>
  );
}

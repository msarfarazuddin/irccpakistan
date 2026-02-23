import AboutSection from "@/app/components/sections/AboutSection";
import HeroSection from "@/app/components/sections/HeroSection";
import ExpertiseSection from "@/app/components/sections/ExpertiseSection";
import ServicesSection from "@/app/components/sections/ServicesSection";
import RelatedServicesSection from "@/app/components/sections/RelatedServicesSection";
import Form from "@/app/components/sections/Form";
import WhyChooseSection from "@/app/components/sections/WhyChooseSection";
import SearchSection from "@/app/components/sections/SearchSection";
import FaqSection from "@/app/components/sections/FaqSection";
import TestimonialsSection from "@/app/components/sections/TestimonialsSection";
import BlogSection from "@/app/components/sections/BlogSection";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ServicesSection />
      <RelatedServicesSection />
      <WhyChooseSection />
      <section className="pt-20  bg-white">
      <Form />
      </section>
      <SearchSection />
      <FaqSection />
      <TestimonialsSection />
      <BlogSection/>
    </>
  );
}

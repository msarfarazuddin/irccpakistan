import dynamic from "next/dynamic";
import HeroSection from "@/app/components/sections/HeroSection";

const AboutSection = dynamic(() => import("@/app/components/sections/AboutSection"));
const ExpertiseSection = dynamic(() => import("@/app/components/sections/ExpertiseSection"));
const ServicesSection = dynamic(() => import("@/app/components/sections/ServicesSection"));
const RelatedServicesSection = dynamic(() => import("@/app/components/sections/RelatedServicesSection"));
const Form = dynamic(() => import("@/app/components/sections/Form"));
const WhyChooseSection = dynamic(() => import("@/app/components/sections/WhyChooseSection"));
const SearchSection = dynamic(() => import("@/app/components/sections/SearchSection"));
const FaqSection = dynamic(() => import("@/app/components/sections/FaqSection"));
const TestimonialsSection = dynamic(() => import("@/app/components/sections/TestimonialsSection"));
const BlogSection = dynamic(() => import("@/app/components/sections/BlogSection"));

function DeferredSection({
  children,
  intrinsicSize = "900px",
}: {
  children: React.ReactNode;
  intrinsicSize?: string;
}) {
  return (
    <div
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: intrinsicSize,
      }}
    >
      {children}
    </div>
  );
}

export default function HomePageContent() {
  return (
    <>
      <HeroSection />
      <DeferredSection intrinsicSize="760px">
        <AboutSection />
      </DeferredSection>
      <DeferredSection intrinsicSize="760px">
        <ExpertiseSection />
      </DeferredSection>
      <DeferredSection intrinsicSize="780px">
        <ServicesSection />
      </DeferredSection>
      <DeferredSection intrinsicSize="620px">
        <RelatedServicesSection />
      </DeferredSection>
      <DeferredSection intrinsicSize="820px">
        <WhyChooseSection />
      </DeferredSection>
      <DeferredSection intrinsicSize="860px">
        <section className="bg-white pt-20">
          <Form />
        </section>
      </DeferredSection>
      <DeferredSection intrinsicSize="640px">
        <SearchSection />
      </DeferredSection>
      <DeferredSection intrinsicSize="840px">
        <FaqSection />
      </DeferredSection>
      <DeferredSection intrinsicSize="760px">
        <TestimonialsSection />
      </DeferredSection>
      <DeferredSection intrinsicSize="720px">
        <BlogSection />
      </DeferredSection>
    </>
  );
}

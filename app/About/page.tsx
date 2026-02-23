import AboutBanner from "@/app/components/sections/aboutbanner";
import Founder from "@/app/components/sections/FounderMessageSection";
import Mission from "@/app/components/sections/MissionVisionSection";
import Search from "@/app/components/sections/SearchSection";
import Faq from "@/app/components/sections/FaqSection";
import Review from "@/app/components/sections/TestimonialsSection";
import BlogSection from "@/app/components/sections/BlogSection";


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

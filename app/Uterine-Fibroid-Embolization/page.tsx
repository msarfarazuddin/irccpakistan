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

export default function Ufe() {
  return (
    <>
      <HeroSection />
      <UFEinfo/>
      <Fibro/>
      <FibroSymtoms/>
      <Candidate/>
      <Benifits/>
       <Consultant/>
      <section className="pt-20  bg-white">
      <Testimonial/>
      </section>
      <Search/>
      <Blog/>
    </>
  );
}


import Banner from "@/app/Varicose-Vein-Ablation/Veinbanner";
import About from "@/app/Varicose-Vein-Ablation/about";
import Venisriskfactor from "@/app/Varicose-Vein-Ablation/VeinRiskFactors";
import From from "@/app/Varicose-Vein-Ablation/form";
import Sign from "@/app/Varicose-Vein-Ablation/Signs";
import Treatment from "@/app/Varicose-Vein-Ablation/veinstreatment";
import Endoven from "@/app/Varicose-Vein-Ablation/endovenousablation";
import Benifit from "@/app/Varicose-Vein-Ablation/benefitsofendovenous";
import Seclero from "@/app/Varicose-Vein-Ablation/sclerotherapy";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";

export default function VAb() {
  return (
    <>
     <Banner/>
     <About/>
     <Venisriskfactor/>
     <Sign/>
     <Treatment/>
     <Endoven/>
     <Benifit/>
     <Seclero/>
     <From/>
     <section className="pt-20  bg-white">
     <Review/>
     </section>
     <Blog/>
    </>
  );
}
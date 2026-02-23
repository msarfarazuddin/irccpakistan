
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
     <From/>
     <Sign/>
     <Treatment/>
     <Endoven/>
     <Benifit/>
     <Seclero/>
     <Review/>
     <Blog/>
    </>
  );
}
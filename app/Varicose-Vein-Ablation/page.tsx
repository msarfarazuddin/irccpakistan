
import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
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
import Faq from "@/app/Varicose-Vein-Ablation/FaqSection"

export const metadata: Metadata = createPageMetadata({
  canonicalPath: "/Varicose-Vein-Ablation",
  title: "Varicose Vein Ablation | Laser & RFA Treatment Pakistan",
  description:
    "Get rid of varicose veins without surgery at IRCC Pakistan. Laser and radiofrequency ablation for quick, effective relief and fast recovery.",
});

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
     <Faq/>
     <Blog/>
    </>
  );
}

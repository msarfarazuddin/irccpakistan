import Banner from "@/app/Interventional-Oncology/banner";
import About from "@/app/Interventional-Oncology/about";
import Textcenter from "@/app/Interventional-Oncology/textcenter";
import Benifits from "@/app/Interventional-Oncology/thebenefits";
import Form from "@/app/Interventional-Oncology/form";
import Work from "@/app/Interventional-Oncology/procedurework";
import Chemo from "@/app/Interventional-Oncology/Chemoembolization";
import CheBenifits from "@/app/Interventional-Oncology/Chemoembolizationbenefits";
import Radio from "@/app/Interventional-Oncology/radiologist";
import Bland from "@/app/Interventional-Oncology/BlandEmbolization";
import BlandBenifits from "@/app/Interventional-Oncology/Blandbenefits";
import Blandwork from "@/app/Interventional-Oncology/Blandwork";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";

export default function Ufe() {
    return (
        <>
           <Banner/>
           <About/>
           <Textcenter/>
           <Benifits/>
           <section className="pt-20  bg-white">
           <Form/>
           </section>
           <Work/>
           <Chemo/>
           <CheBenifits/>
           <Radio/>
           <Bland/>
           <BlandBenifits/>
           <Blandwork/>
           <Review/>
           <Blog/>
        </>
    );
}

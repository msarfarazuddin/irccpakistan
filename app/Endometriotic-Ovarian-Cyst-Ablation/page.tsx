import Banner from "@/app/Endometriotic-Ovarian-Cyst-Ablation/banner";
import About from "@/app/Endometriotic-Ovarian-Cyst-Ablation/about";
import Symtom from "@/app/Endometriotic-Ovarian-Cyst-Ablation/symtom";
import Candidate from "@/app/Endometriotic-Ovarian-Cyst-Ablation/Candidate";
import Cyst from "@/app/Endometriotic-Ovarian-Cyst-Ablation/cyst";
import Form from "@/app/Endometriotic-Ovarian-Cyst-Ablation/form";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";

export default function Ftr() {
    return (
        <>
           <Banner/>
           <About/>
           <Symtom/>
           <Candidate/>
           <Cyst/>
           <Form/>
              <section className="pt-20  bg-white">
           <Review/>
           </section>
           <Blog/>
        </>
    );
}
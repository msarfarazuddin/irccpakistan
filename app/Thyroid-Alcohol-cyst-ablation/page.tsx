import Banner from "@/app/Thyroid-Alcohol-cyst-ablation/banner";
import About from "@/app/Thyroid-Alcohol-cyst-ablation/about";
import Symptoms from "@/app/Thyroid-Alcohol-cyst-ablation/Symptoms";
import Candidate from "@/app/Thyroid-Alcohol-cyst-ablation/Candidate";
import Alcohol from "@/app/Thyroid-Alcohol-cyst-ablation/Alcohol";
import Form from "@/app/Thyroid-Alcohol-cyst-ablation/form";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";

export default function Ftr() {
    return (
        <>
          <Banner />
           <About/>
           <Symptoms/>
           <Candidate/>
           <Alcohol/>
           <Form/>
           <section className="pt-20  bg-white">
           <Review/>
           </section>
           <Blog/>
        </>
    );
}
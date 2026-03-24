import Banner from "@/app/Thyroid-Artery-Embolization/banner";
import About from "@/app/Thyroid-Artery-Embolization/about";
import Symptoms from "@/app/Thyroid-Artery-Embolization/Symptoms";
import Candidate from "@/app/Thyroid-Artery-Embolization/Candidate";
import Artery from "@/app/Thyroid-Artery-Embolization/Artery";
import Form from "@/app/Thyroid-Artery-Embolization/form";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";

export default function Ftr() {
    return (
        <>
            <Banner />
           <About/>
           <Symptoms/>
           <Candidate/>
           <Artery/>
           <Form/>
           <section className="pt-20  bg-white">
           <Review/>
           </section>
           <Blog/>
        </>
    );
}
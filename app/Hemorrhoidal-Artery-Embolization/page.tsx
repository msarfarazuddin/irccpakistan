import Banner from "@/app/Hemorrhoidal-Artery-Embolization/banner";
import About from "@/app/Hemorrhoidal-Artery-Embolization/about";
import Symptoms from "@/app/Hemorrhoidal-Artery-Embolization/Symptoms";
import Candidate from "@/app/Hemorrhoidal-Artery-Embolization/Candidate";
import Hemorrhoidal from "@/app/Hemorrhoidal-Artery-Embolization/Hemorrhoidal";
import Form from "@/app/Hemorrhoidal-Artery-Embolization/form";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";

export default function Ftr() {
    return (
        <>
            <Banner />
            <About />
            <Symptoms />
            <Candidate />
            <Hemorrhoidal/>
            <Form/>
            <section className="pt-20  bg-white">
            <Review/>
            </section>
            <Blog/>
        </>
    );
}
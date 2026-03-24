import Banner from "@/app/Tenosynovitis/banner";
import About from "@/app/Tenosynovitis/about";
import Symptoms from "@/app/Tenosynovitis/Symptoms";
import Candidate from "@/app/Tenosynovitis/Candidate";
import Tenosynovitis from "@/app/Tenosynovitis/Tenosynovitis";
import Form from "@/app/Tenosynovitis/form";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";

export default function Ftr() {
    return (
        <>
            <Banner />
            <About />
            <Symptoms />
            <Candidate />
            <Tenosynovitis/>
            <Form/>
            <section className="pt-20  bg-white">
            <Review/>
            </section>
            <Blog/>
        </>
    );
}
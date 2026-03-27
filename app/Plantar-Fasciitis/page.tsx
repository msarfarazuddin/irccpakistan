import Banner from "@/app/Plantar-Fasciitis/banner";
import About from "@/app/Plantar-Fasciitis/about";
import Symptoms from "@/app/Plantar-Fasciitis/Symptoms";
import Candidate from "@/app/Plantar-Fasciitis/Candidate";
import Interventional from "@/app/Plantar-Fasciitis/Interventional";
import Form from "@/app/Plantar-Fasciitis/form";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";

export default function Ftr() {
    return (
        <>
            <Banner />
            <About />
            <Symptoms />
            <Candidate />
            <Interventional/>
            <Form/>
            <section className="pt-20  bg-white">
            <Review/>
            </section>
            <Blog/>
        </>
    );
}
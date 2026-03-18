import Banner from "@/app/Genicular-Arterial-Embolization-for-Knee-Pain/banner";
import About from "@/app/Genicular-Arterial-Embolization-for-Knee-Pain/about";
import Candidates from "@/app/Genicular-Arterial-Embolization-for-Knee-Pain/Candidate";
import Genicular from "@/app/Genicular-Arterial-Embolization-for-Knee-Pain/Genicular";
import Form from "@/app/Genicular-Arterial-Embolization-for-Knee-Pain/Form";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";

export default function Ftr() {
    return (
        <>
            <Banner />
            <About />
            <Candidates />
            <Genicular />
            <Form/>
            <section className="pt-20  bg-white">
            <Review/>
            </section>
            <Blog/>
        </>
    );
}
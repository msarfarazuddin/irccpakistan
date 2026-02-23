import Banner from "@/app/Radiofrequency-Ablation-of-Osteoid-Osteoma/banner";
import Text from "@/app/Radiofrequency-Ablation-of-Osteoid-Osteoma/text";
import Osteo from "@/app/Radiofrequency-Ablation-of-Osteoid-Osteoma/osteoidosteoma";
import Osd from "@/app/Radiofrequency-Ablation-of-Osteoid-Osteoma/osteomadiagnosed";
import Textcenter from "@/app/Radiofrequency-Ablation-of-Osteoid-Osteoma/textcenter";
import About from "@/app/Radiofrequency-Ablation-of-Osteoid-Osteoma/about";
import Form from "@/app/Radiofrequency-Ablation-of-Osteoid-Osteoma/form";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";

export default function ost() {
    return (
        <>
            <Banner />
            <Text />
            <Osteo />
            <Osd />
            <Textcenter />
            <About />
            <Form />
            <section className="pt-20  bg-white">
                <Review />
            </section>
            <Blog />
        </>
    );
}

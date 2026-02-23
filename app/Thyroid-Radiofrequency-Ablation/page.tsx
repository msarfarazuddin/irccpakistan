import Banner from "@/app/Thyroid-Radiofrequency-Ablation/Banner";
import About from "@/app/Thyroid-Radiofrequency-Ablation/About";
import Thyrodno from "@/app/Thyroid-Radiofrequency-Ablation/thyroidnodules";
import Textcenter from "@/app/Thyroid-Radiofrequency-Ablation/textcenter";
import After from "@/app/Thyroid-Radiofrequency-Ablation/afterablation";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";
import Form from "@/app/Thyroid-Radiofrequency-Ablation/form";


export default function ost() {
    return (
        <>
           <Banner/>
           <About/>
           <Thyrodno/>
           <Textcenter/>
           <Form/>
           <After/>
           <Review/>
           <Blog/>
        </>
    );
}

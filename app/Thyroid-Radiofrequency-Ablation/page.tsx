import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
import Banner from "@/app/Thyroid-Radiofrequency-Ablation/Banner";
import About from "@/app/Thyroid-Radiofrequency-Ablation/About";
import Thyrodno from "@/app/Thyroid-Radiofrequency-Ablation/thyroidnodules";
import Textcenter from "@/app/Thyroid-Radiofrequency-Ablation/textcenter";
import After from "@/app/Thyroid-Radiofrequency-Ablation/afterablation";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";
import Form from "@/app/Thyroid-Radiofrequency-Ablation/form";
import Faq from "@/app/Thyroid-Radiofrequency-Ablation/Faq";


export const metadata: Metadata = createPageMetadata({
    canonicalPath: "/Thyroid-Radiofrequency-Ablation",
    title: "Thyroid Radiofrequency Ablation | Non-Surgical Thyroid Care",
    description:
        "Treat thyroid nodules and cysts without surgery using RFA at IRCC Pakistan. Proven results with 100% patient satisfaction and minimal downtime.",
});

export default function ost() {
    return (
        <>
           <Banner/>
           <About/>
           <Thyrodno/>
           <Textcenter/>
           <After/>
           <Form/>
           <section className="pt-20  bg-white">
           <Review/>
           </section>
           <Faq/>
           <Blog/>
        </>
    );
}

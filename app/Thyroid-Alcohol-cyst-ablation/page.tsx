import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
import Banner from "@/app/Thyroid-Alcohol-cyst-ablation/banner";
import About from "@/app/Thyroid-Alcohol-cyst-ablation/about";
import Symptoms from "@/app/Thyroid-Alcohol-cyst-ablation/Symptoms";
import Candidate from "@/app/Thyroid-Alcohol-cyst-ablation/Candidate";
import Alcohol from "@/app/Thyroid-Alcohol-cyst-ablation/Alcohol";
import Form from "@/app/Thyroid-Alcohol-cyst-ablation/form";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";
import Faq from "@/app/Thyroid-Alcohol-cyst-ablation/Faq";

export const metadata: Metadata = createPageMetadata({
    canonicalPath: "/Thyroid-Alcohol-cyst-ablation",
    title: "Thyroid Alcohol Cyst Ablation | IRCC Pakistan",
    description:
        "Treat fluid-filled thyroid cysts without surgery at IRCC Pakistan. Ultrasound-guided ethanol ablation - drain, treat, and prevent refilling. No stitches, quick recovery.",
});

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
           <Faq/>
           <Blog/>
        </>
    );
}

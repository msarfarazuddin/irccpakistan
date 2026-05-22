import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
import Banner from "@/app/Thyroid-Artery-Embolization/banner";
import About from "@/app/Thyroid-Artery-Embolization/about";
import Symptoms from "@/app/Thyroid-Artery-Embolization/Symptoms";
import Candidate from "@/app/Thyroid-Artery-Embolization/Candidate";
import Artery from "@/app/Thyroid-Artery-Embolization/Artery";
import Form from "@/app/Thyroid-Artery-Embolization/form";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";
import Faq from "@/app/Thyroid-Artery-Embolization/Faq";

export const metadata: Metadata = createPageMetadata({
    canonicalPath: "/Thyroid-Artery-Embolization",
    title: "Thyroid Artery Embolization | Enlarged Thyroid - IRCC Pakistan",
    description:
        "Shrink enlarged thyroid gland or large nodules without surgery at IRCC Pakistan. TAE is image-guided, relieves pressure symptoms, and avoids general anaesthesia.",
});

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
           <Faq/>
           <Blog/>
        </>
    );
}

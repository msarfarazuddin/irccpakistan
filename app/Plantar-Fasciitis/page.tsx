import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
import Banner from "@/app/Plantar-Fasciitis/banner";
import About from "@/app/Plantar-Fasciitis/about";
import Symptoms from "@/app/Plantar-Fasciitis/Symptoms";
import Candidate from "@/app/Plantar-Fasciitis/Candidate";
import Interventional from "@/app/Plantar-Fasciitis/Interventional";
import Form from "@/app/Plantar-Fasciitis/form";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";
import Faq from "@/app/Plantar-Fasciitis/Faq";

export const metadata: Metadata = createPageMetadata({
    canonicalPath: "/Plantar-Fasciitis",
    title: "Plantar Fasciitis Treatment | Interventional Radiology - IRCC",
    description:
        "IRCC Pakistan offers minimally invasive, image-guided embolization for chronic heel pain from plantar fasciitis - no surgery, no stitches, back to normal life quickly.",
});

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
            <Faq/>
            <Blog/>
        </>
    );
}

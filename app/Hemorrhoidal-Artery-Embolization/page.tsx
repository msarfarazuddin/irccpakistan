import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
import Banner from "@/app/Hemorrhoidal-Artery-Embolization/banner";
import About from "@/app/Hemorrhoidal-Artery-Embolization/about";
import Symptoms from "@/app/Hemorrhoidal-Artery-Embolization/Symptoms";
import Candidate from "@/app/Hemorrhoidal-Artery-Embolization/Candidate";
import Hemorrhoidal from "@/app/Hemorrhoidal-Artery-Embolization/Hemorrhoidal";
import Form from "@/app/Hemorrhoidal-Artery-Embolization/form";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";
import Faq from "@/app/Hemorrhoidal-Artery-Embolization/Faq";

export const metadata: Metadata = createPageMetadata({
    canonicalPath: "/Hemorrhoidal-Artery-Embolization",
    title: "Hemorrhoidal Artery Embolization | IRCC Pakistan",
    description:
        "Treat bleeding haemorrhoids without painful surgery at IRCC Pakistan. HAE is a minimally invasive, image-guided procedure no surgical cuts, fast recovery.",
});

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
            <Faq/>
            <Blog/>
        </>
    );
}

import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
import Banner from "@/app/Tenosynovitis/banner";
import About from "@/app/Tenosynovitis/about";
import Symptoms from "@/app/Tenosynovitis/Symptoms";
import Candidate from "@/app/Tenosynovitis/Candidate";
import Tenosynovitis from "@/app/Tenosynovitis/Tenosynovitis";
import Form from "@/app/Tenosynovitis/form";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";
import Faq from "@/app/Tenosynovitis/Faq";

export const metadata: Metadata = createPageMetadata({
    canonicalPath: "/Tenosynovitis",
    title: "Tenosynovitis Treatment | Non-Surgical IR Care - IRCC Pakistan",
    description:
        "Treat painful tenosynovitis without surgery at IRCC Pakistan. Image-guided anti-inflammatory injections reduce swelling and restore movement precise and effective.",
});

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
            <Faq/>
            <Blog/>
        </>
    );
}

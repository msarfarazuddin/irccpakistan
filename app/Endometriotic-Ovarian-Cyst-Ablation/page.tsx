import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
import Banner from "@/app/Endometriotic-Ovarian-Cyst-Ablation/banner";
import About from "@/app/Endometriotic-Ovarian-Cyst-Ablation/about";
import Symtom from "@/app/Endometriotic-Ovarian-Cyst-Ablation/symtom";
import Candidate from "@/app/Endometriotic-Ovarian-Cyst-Ablation/Candidate";
import Cyst from "@/app/Endometriotic-Ovarian-Cyst-Ablation/cyst";
import Form from "@/app/Endometriotic-Ovarian-Cyst-Ablation/form";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";
import Faq from "@/app/Endometriotic-Ovarian-Cyst-Ablation/Faq";

export const metadata: Metadata = createPageMetadata({
    canonicalPath: "/Endometriotic-Ovarian-Cyst-Ablation",
    title: "Endometriotic Ovarian Cyst Ablation | IRCC Pakistan",
    description:
        "Image-guided treatment for chocolate cysts (endometriomas) at IRCC Pakistan. Relieve pelvic pain and preserve fertility no major surgery, faster recovery.",
});

export default function Ftr() {
    return (
        <>
            <Banner />
            <About />
            <Symtom />
            <Candidate />
            <Cyst />
            <Form />
            <section className="pt-20  bg-white">
                <Review />
            </section>
            <Faq />
            <Blog />
        </>
    );
}

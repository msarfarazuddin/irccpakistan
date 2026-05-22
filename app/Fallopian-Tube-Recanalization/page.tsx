import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
import Fallop from "@/app/Fallopian-Tube-Recanalization/Fallopianbanner";
import Tube from "@/app/Fallopian-Tube-Recanalization/fallopiantubes";
import FTR from "@/app/Fallopian-Tube-Recanalization/fallopiantuberecanalization";
import Benifits from "@/app/Fallopian-Tube-Recanalization/Benefits";
import Text from "@/app/Fallopian-Tube-Recanalization/textcenter";
import Form from "@/app/Fallopian-Tube-Recanalization/form";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";
import Faq from "@/app/Fallopian-Tube-Recanalization/FaqSection";

export const metadata: Metadata = createPageMetadata({
    canonicalPath: "/Fallopian-Tube-Recanalization",
    title: "Fallopian Tube Recanalization | Infertility Treatment Pakistan",
    description:
        "Treat tubal blockage infertility without surgery at IRCC Pakistan. Fallopian tube recanalization is safe, effective and minimally invasive.",
});

export default function Ftr() {
    return (
        <>
            <Fallop/>
            <Tube/>
            <FTR/>
            <Benifits/>
            <Text/>
            <Form/>
            <section className="pt-20  bg-white">
            <Review/>
            </section>
            <Faq/>
            <Blog/>
        </>
    );
}

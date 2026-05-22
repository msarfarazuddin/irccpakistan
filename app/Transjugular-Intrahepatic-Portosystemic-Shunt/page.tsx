import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
import Banner from "@/app/Transjugular-Intrahepatic-Portosystemic-Shunt/banner";
import About from "@/app/Transjugular-Intrahepatic-Portosystemic-Shunt/about";
import Tips from "@/app/Transjugular-Intrahepatic-Portosystemic-Shunt/TIPSprocedure";
import Portal from "@/app/Transjugular-Intrahepatic-Portosystemic-Shunt/portalhypertension";
import Problem from "@/app/Transjugular-Intrahepatic-Portosystemic-Shunt/problems";
import Textcenter from "@/app/Transjugular-Intrahepatic-Portosystemic-Shunt/textcenter";
import Review from "@/app/components/sections/TestimonialsSection";
import Form from "@/app/Transjugular-Intrahepatic-Portosystemic-Shunt/Form";
import Blog from "@/app/components/sections/BlogSection";
import Faq from "@/app/Transjugular-Intrahepatic-Portosystemic-Shunt/Faq";

export const metadata: Metadata = createPageMetadata({
    canonicalPath: "/Transjugular-Intrahepatic-Portosystemic-Shunt",
    title: "TIPS Procedure | Portal Hypertension Treatment - IRCC Pakistan",
    description:
        "IRCC Pakistan offers TIPS for portal hypertension 80-90% success in stopping variceal bleeding and 65% reduction in ascites. Image-guided, minimally invasive care.",
});

export default function Ufe() {
    return (
        <>
            <Banner />
            <About />
            <Tips/>
            <Portal/>
            <Problem/>
            <Textcenter/>
             <Form/>
             <section className="pt-20  bg-white">
            <Review/>
            </section>
            <Faq/>
            <Blog/>
        </>
    );
}

import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
import Banner from "@/app/Pelvic-Congestion-Syndrome-Treatment/banner";
import About from "@/app/Pelvic-Congestion-Syndrome-Treatment/about";
import Pelvic from "@/app/Pelvic-Congestion-Syndrome-Treatment/pelviccongestion";
import Candidate from "@/app/Pelvic-Congestion-Syndrome-Treatment/Candidate";
import Form from "@/app/Pelvic-Congestion-Syndrome-Treatment/form";
import Daignos from "@/app/Pelvic-Congestion-Syndrome-Treatment/syndromediagnosed";
import Terated from "@/app/Pelvic-Congestion-Syndrome-Treatment/syndrometreated";
import Vein from "@/app/Pelvic-Congestion-Syndrome-Treatment/veinembolization";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";
import Faq from "@/app/Pelvic-Congestion-Syndrome-Treatment/Faq";

export const metadata: Metadata = createPageMetadata({
    canonicalPath: "/Pelvic-Congestion-Syndrome-Treatment",
    title: "Pelvic Congestion Syndrome Treatment | IRCC Pakistan",
    description:
        "Relieve chronic pelvic pain caused by pelvic congestion syndrome with minimally invasive embolization at IRCC Pakistan. Book a consultation.",
});

export default function Ufe() {
    return (
        <>
            <Banner />
            <About/>
            <Pelvic/>
            
           
            <Daignos/>
            <Terated/>
            <Vein/>
            <Candidate/>
             <Form/>
            
            <section className="pt-20  bg-white">
            <Review/>
            </section>
            <Faq/>
            <Blog/>
        </>
    );
}

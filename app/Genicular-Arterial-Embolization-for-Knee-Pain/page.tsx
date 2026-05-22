import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
import Banner from "@/app/Genicular-Arterial-Embolization-for-Knee-Pain/banner";
import About from "@/app/Genicular-Arterial-Embolization-for-Knee-Pain/about";
import ChronicKneePain from "@/app/Genicular-Arterial-Embolization-for-Knee-Pain/ChronicKneePain";
import Candidates from "@/app/Genicular-Arterial-Embolization-for-Knee-Pain/Candidate";
import Genicular from "@/app/Genicular-Arterial-Embolization-for-Knee-Pain/Genicular";
import Form from "@/app/Genicular-Arterial-Embolization-for-Knee-Pain/Form";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";
import Faq from "@/app/Genicular-Arterial-Embolization-for-Knee-Pain/Faq";

export const metadata: Metadata = createPageMetadata({
    canonicalPath: "/Genicular-Arterial-Embolization-for-Knee-Pain",
    title: "Genicular Artery Embolization for Knee Pain | IRCC Pakistan",
    description:
        "Relieve chronic knee pain from osteoarthritis without surgery at IRCC Pakistan. GAE reduces inflammation via image-guided embolization same-day, local anaesthesia.",
});

export default function Ftr() {
    return (
        <>
            <Banner />
            <About />
            <Candidates />
            <Genicular />
            <ChronicKneePain />
            <Form/>
            <section className="pt-20  bg-white">
            <Review/>
            </section>
            <Faq/>
            <Blog/>
        </>
    );
}

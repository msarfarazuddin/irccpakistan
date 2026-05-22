import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
import Banner from "@/app/Radiofrequency-Ablation-of-Osteoid-Osteoma/banner";
import Text from "@/app/Radiofrequency-Ablation-of-Osteoid-Osteoma/text";
import Osteo from "@/app/Radiofrequency-Ablation-of-Osteoid-Osteoma/osteoidosteoma";
import Osd from "@/app/Radiofrequency-Ablation-of-Osteoid-Osteoma/osteomadiagnosed";
import Textcenter from "@/app/Radiofrequency-Ablation-of-Osteoid-Osteoma/textcenter";
import About from "@/app/Radiofrequency-Ablation-of-Osteoid-Osteoma/about";
import Candiate from "@/app/Radiofrequency-Ablation-of-Osteoid-Osteoma/CandidateforRadiofrequency";
import Help from "@/app/Radiofrequency-Ablation-of-Osteoid-Osteoma/IRCCPakistanhrlp";
import Form from "@/app/Radiofrequency-Ablation-of-Osteoid-Osteoma/form";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";
import Faq from "@/app/Radiofrequency-Ablation-of-Osteoid-Osteoma/Faq";

export const metadata: Metadata = createPageMetadata({
    canonicalPath: "/Radiofrequency-Ablation-of-Osteoid-Osteoma",
    title: "RFA of Osteoid Osteoma | Bone Pain Treatment - IRCC Pakistan",
    description:
        "IRCC Pakistan performs Pakistan's highest number of osteoid osteoma RFA procedures. CT-guided, same-day discharge return to school or work within a few days.",
});

export default function ost() {
    return (
        <>
            <Banner />
            <Text />
            <Osteo />
            <Osd />
            <Textcenter />
            <About />
            <Candiate/>
            <Help/>
            <Form />
            <section className="pt-20  bg-white">
                <Review />
            </section>
            <Faq />
            <Blog />
        </>
    );
}

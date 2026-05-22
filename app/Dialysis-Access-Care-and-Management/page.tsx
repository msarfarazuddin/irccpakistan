import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
import Banner from "@/app/Dialysis-Access-Care-and-Management/banner";
import Text from "@/app/Dialysis-Access-Care-and-Management/textcenter";
import About from "@/app/Dialysis-Access-Care-and-Management/about";
import Form from "@/app/Dialysis-Access-Care-and-Management/form";
import Periton from "@/app/Dialysis-Access-Care-and-Management/PeritonealDialysis";
import Fistula from "@/app/Dialysis-Access-Care-and-Management/Fistula";
import Cathet from "@/app/Dialysis-Access-Care-and-Management/Catheterdirected";
import Recana from "@/app/Dialysis-Access-Care-and-Management/RecanalizationCentral";
import Faq from "@/app/Dialysis-Access-Care-and-Management/Faq";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";

export const metadata: Metadata = createPageMetadata({
    canonicalPath: "/Dialysis-Access-Care-and-Management",
    title: "Dialysis Access Care & Management | IRCC Pakistan",
    description:
        "IRCC Pakistan provides expert dialysis access management including fistula angioplasty and thrombectomy to preserve kidney patients' vascular access.",
});

export default function Ftr() {
    return (
        <>
          <Banner/>
          <Text/>
          <About/>
          <Periton/>
          <Fistula/>
          <Cathet/>
          <Recana/>
          <Faq/>
          <Form/>
          <section className="pt-20  bg-white">
          <Review/>
          </section>
          <Blog/>
        </>
    );
}

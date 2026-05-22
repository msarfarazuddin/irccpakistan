import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
import Banner from "@/app/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia/banner";
import About from "@/app/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia/about";
import Prostatis from "@/app/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia/prostaticartery";
import Candiator from "@/app/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia/Candidateforpae";
import Textcenter from "@/app/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia/textcenter";
import Benifits from "@/app/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia/Benefitsofpae";
import Form from "@/app/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia/form";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";
import Faq from "@/app/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia/Faq";


export const metadata: Metadata = createPageMetadata({
  canonicalPath: "/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia",
  title: "Prostate Artery Embolization for BPH | IRCC Pakistan",
  description:
    "Treat enlarged prostate (BPH) without surgery at IRCC Pakistan. Prostate artery embolization offers fast relief with minimal downtime.",
});

export default function Ufe() {
  return (
    <>
      <Banner />
      <About/>
      <Prostatis/>
      <Candiator/>
      <Textcenter/>
      <Benifits/>
      <Form/>
      <section className="pt-20  bg-white">
      <Review/>
      </section>
      <Faq/>
      <Blog/>
    </>
  );
}

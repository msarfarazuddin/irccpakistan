import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
import Disease from "@/app/Peripheral-Vascular-Disease/banner";
import Causes from "@/app/Peripheral-Vascular-Disease/causesperipheral";
import Form from "@/app/Peripheral-Vascular-Disease/Form";
import Peripher from "@/app/Peripheral-Vascular-Disease/peripheralvascular";
import Treatment from "@/app/Peripheral-Vascular-Disease/treatmentperipheral";
import Benifits from "@/app/Peripheral-Vascular-Disease/BenefitsAngioplasty";
import Review from "@/app/components/sections/TestimonialsSection";
import Textcenter from "@/app/Peripheral-Vascular-Disease/textcenter";
import Faq from "@/app/Peripheral-Vascular-Disease/Faq";
import Blog from "@/app/components/sections/BlogSection";

export const metadata: Metadata = createPageMetadata({
  canonicalPath: "/Peripheral-Vascular-Disease",
  title: "Peripheral Vascular Disease Treatment | IRCC Pakistan",
  description:
    "IRCC Pakistan treats peripheral artery disease (PAD) with image-guided procedures to restore blood flow to legs and feet. Non-surgical options.",
});

export default function Ufe() {
  return (
    <>
      <Disease/>
      <Causes/>
      <Peripher/>
      <Treatment/>
      <Benifits/>
      <Textcenter/>
      <Form/>
      <Faq/>
      <Review/>
      <Blog/>
    </>
  );
}

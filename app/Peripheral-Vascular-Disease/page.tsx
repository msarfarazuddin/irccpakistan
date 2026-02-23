import Disease from "@/app/Peripheral-Vascular-Disease/banner";
import Causes from "@/app/Peripheral-Vascular-Disease/causesperipheral";
import Form from "@/app/Peripheral-Vascular-Disease/Form";
import Peripher from "@/app/Peripheral-Vascular-Disease/peripheralvascular";
import Treatment from "@/app/Peripheral-Vascular-Disease/treatmentperipheral";
import Benifits from "@/app/Peripheral-Vascular-Disease/BenefitsAngioplasty";
import Review from "@/app/components/sections/TestimonialsSection";
import Textcenter from "@/app/Peripheral-Vascular-Disease/textcenter";
import Blog from "@/app/components/sections/BlogSection";


export default function Ufe() {
  return (
    <>
      <Disease/>
      <Causes/>
      <Form/>
      <Peripher/>
      <Treatment/>
      <Benifits/>
      <Textcenter/>
      <Review/>
      <Blog/>
    </>
  );
}

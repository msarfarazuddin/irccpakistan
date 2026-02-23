import Banner from "@/app/Dialysis-Access-Care-and-Management/banner";
import Text from "@/app/Dialysis-Access-Care-and-Management/textcenter";
import About from "@/app/Dialysis-Access-Care-and-Management/about";
import Form from "@/app/Dialysis-Access-Care-and-Management/form";
import Periton from "@/app/Dialysis-Access-Care-and-Management/PeritonealDialysis";
import Fistula from "@/app/Dialysis-Access-Care-and-Management/Fistula";
import Cathet from "@/app/Dialysis-Access-Care-and-Management/Catheterdirected";
import Recana from "@/app/Dialysis-Access-Care-and-Management/RecanalizationCentral";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";

export default function Ftr() {
    return (
        <>
          <Banner/>
          <Text/>
          <About/>
          <Form/>
          <Periton/>
          <Fistula/>
          <Cathet/>
          <Recana/>
          <Review/>
          <Blog/>
        </>
    );
}
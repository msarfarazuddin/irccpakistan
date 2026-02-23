import Fallop from "@/app/Fallopian-Tube-Recanalization/Fallopianbanner";
import Tube from "@/app/Fallopian-Tube-Recanalization/fallopiantubes";
import FTR from "@/app/Fallopian-Tube-Recanalization/fallopiantuberecanalization";
import Benifits from "@/app/Fallopian-Tube-Recanalization/Benefits";
import Text from "@/app/Fallopian-Tube-Recanalization/textcenter";
import Form from "@/app/Fallopian-Tube-Recanalization/form";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";

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
            <Blog/>
        </>
    );
}
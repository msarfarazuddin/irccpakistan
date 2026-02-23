import Banner from "@/app/Vascular-Malformation-Treatment/Banner";
import About from "@/app/Vascular-Malformation-Treatment/about";
import Mal from "@/app/Vascular-Malformation-Treatment/malformationsoccur";
import Type from "@/app/Vascular-Malformation-Treatment/typesofhaemangiomas";
import Form from "@/app/Vascular-Malformation-Treatment/form";
import Text from "@/app/Vascular-Malformation-Treatment/textcenter";
import Producr from "@/app/Vascular-Malformation-Treatment/theprocedure";
import Tretment from "@/app/Vascular-Malformation-Treatment/effectivetreatment";
import Age from "@/app/Vascular-Malformation-Treatment/bestage";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";

export default function ost() {
    return (
        <>
            <Banner />
            <About />
            <Mal/>
            <Type/>
            <Form/>
            <Text/>
            <Producr/>
            <Tretment/>
            <Age/>
            <Review/>
            <Blog/>
        </>
    );
}

import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
import Banner from "@/app/Vascular-Malformation-Treatment/Banner";
import About from "@/app/Vascular-Malformation-Treatment/about";
import Mal from "@/app/Vascular-Malformation-Treatment/malformationsoccur";
import Type from "@/app/Vascular-Malformation-Treatment/typesofhaemangiomas";
import Form from "@/app/Vascular-Malformation-Treatment/form";
import Text from "@/app/Vascular-Malformation-Treatment/textcenter";
import Producr from "@/app/Vascular-Malformation-Treatment/theprocedure";
import Tretment from "@/app/Vascular-Malformation-Treatment/effectivetreatment";
import Age from "@/app/Vascular-Malformation-Treatment/bestage";
import Faq from "@/app/Vascular-Malformation-Treatment/Faq";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";

export const metadata: Metadata = createPageMetadata({
    canonicalPath: "/Vascular-Malformation-Treatment",
    title: "Vascular Malformation Treatment | IRCC Pakistan",
    description:
        "IRCC Pakistan offers image-guided, minimally invasive treatment for vascular malformations of veins, arteries and lymph vessels. Consult today.",
});

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
            <Faq/>
            <Review/>
            <Blog/>
        </>
    );
}

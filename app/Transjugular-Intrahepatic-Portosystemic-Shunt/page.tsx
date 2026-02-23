import Banner from "@/app/Transjugular-Intrahepatic-Portosystemic-Shunt/banner";
import About from "@/app/Transjugular-Intrahepatic-Portosystemic-Shunt/about";
import Tips from "@/app/Transjugular-Intrahepatic-Portosystemic-Shunt/TIPSprocedure";
import Portal from "@/app/Transjugular-Intrahepatic-Portosystemic-Shunt/portalhypertension";
import Problem from "@/app/Transjugular-Intrahepatic-Portosystemic-Shunt/problems";
import Textcenter from "@/app/Transjugular-Intrahepatic-Portosystemic-Shunt/textcenter";
import Review from "@/app/components/sections/TestimonialsSection";
import Form from "@/app/Transjugular-Intrahepatic-Portosystemic-Shunt/Form";
import Blog from "@/app/components/sections/BlogSection";

export default function Ufe() {
    return (
        <>
            <Banner />
            <About />
            <Tips/>
            <Portal/>
            <Problem/>
            <Textcenter/>
             <Form/>
             <section className="pt-20  bg-white">
            <Review/>
            </section>
            <Blog/>
        </>
    );
}

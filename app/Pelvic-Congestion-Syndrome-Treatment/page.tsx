import Banner from "@/app/Pelvic-Congestion-Syndrome-Treatment/banner";
import About from "@/app/Pelvic-Congestion-Syndrome-Treatment/about";
import Pelvic from "@/app/Pelvic-Congestion-Syndrome-Treatment/pelviccongestion";
import Form from "@/app/Pelvic-Congestion-Syndrome-Treatment/form";
import Daignos from "@/app/Pelvic-Congestion-Syndrome-Treatment/syndromediagnosed";
import Terated from "@/app/Pelvic-Congestion-Syndrome-Treatment/syndrometreated";
import Vein from "@/app/Pelvic-Congestion-Syndrome-Treatment/veinembolization";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";

export default function Ufe() {
    return (
        <>
            <Banner />
            <About/>
            <Pelvic/>
            <Form/>
            <Daignos/>
            <Terated/>
            <Vein/>
            <section className="pt-20  bg-white">
            <Review/>
            </section>
            <Blog/>
        </>
    );
}

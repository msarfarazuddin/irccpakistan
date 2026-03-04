import Banner from "@/app/get-consultation/banner";
import Meet from "@/app/get-consultation/Meet";
import Services from "@/app/get-consultation/ServicesWhatsappCards";
import Minimal from "@/app/get-consultation/MinimalInvasive";
import Review from "@/app/get-consultation/review";
import Cta from "@/app/get-consultation/cta";
import Faq from "@/app/female-clinic/FAQ";
import Footer from "@/app/female-clinic/footer";

export default function gc() {
    return (
        <>
            <Banner />
            <Meet />
            <Services/>
            <Minimal/>
            <Review/>
            <Cta/>
            <Faq/>
            <Footer/>
        </>
    );
}

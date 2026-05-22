import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
import Banner from "@/app/female-clinic/banner";
import Doctor from "@/app/female-clinic/IRCCDoctorSection";
import Girl from "@/app/female-clinic/GirlsHeroSection";
import Advance from "@/app/female-clinic/AdvancedMinimallyInvasive";
import Review from "@/app/female-clinic/review";
import Cta from "@/app/female-clinic/cta";
import Faq from "@/app/female-clinic/FAQ";
import Footer from "@/app/female-clinic/footer";

export const metadata: Metadata = createPageMetadata({
    canonicalPath: "/female-clinic",
    title: "Female Clinic | Women's Health Services - IRCC Pakistan",
    description:
        "IRCC Pakistan's female clinic offers specialized minimally invasive treatments for women including UFE, fallopian tube recanalization and more.",
});

export default function Fm() {
    return (
        <div className="bg-[#efefef]">
            <div className="relative">
                <Banner />
                <div className="relative z-40 -mt-14 sm:-mt-20 lg:-mt-44">
                    <Doctor />
                </div>
                
            </div>
            <Girl />
            <Advance/>
            <Review/>
            <Cta/>
            <Faq/>
            <Footer/>
        </div>
        
    );
}

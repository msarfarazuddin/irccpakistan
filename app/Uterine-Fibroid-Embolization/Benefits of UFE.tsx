import Link from "next/link";

const symptoms = [
    {
        title: "Uterine fibroid embolization is a minimally invasive, incision-free outpatient procedure.",
        img: "/one1.png",
    },
    {
        title: "Requires only local (rather  than general) anesthesia",
        img: "/two2.png",
    },
    {
        title: "Does not cause scarring like surgical techniques do",
        img: "/three.png",
    },
    {
        title: "While there will be some moderate pain after a UFE procedure, it is typically less intensive than post-surgical pain",
        img: "/four.png",
    },
    {
        title: "A good option if you would like to preserve your uterus vs a hysterectomy",
        img: "/five.png",
    },
    {
        title: "85-90% of women experience significant relief of their symptoms",
        img: "/four.png",
    },
    {
        title: "Faster recovery time compared to surgery",
        img: "/five.png",
    },
    {
        title: "Reduced risk of infection as compared to surgery",
        img: "/four.png",
    }
];

export default function FibroidSymptomsSection() {
    return (
        <section className="bg-white from-gray-100 to-gray-200 py-16 px-4">
            <div className="max-w-[1400px] mx-auto text-center">

                {/* Top Badge */}

                <div className="inline-flex w-fit items-center gap-2 rounded-full shadow-lg border border-[#dce6ff] bg-white px-4 py-2 text-sm font-semibold text-[#0E58A8]">
                    <span className="flex h-6 w-6 items-center font-bold justify-center rounded-full text-[30px]  font-bold text-[#0E58A8]">
                        +
                    </span>
                    <span className="text-[#111111] font-normal">Benefits</span>
                </div>

                {/* Heading */}
                <h5 className="text-3xl text-black md:text-4xl pt-7 mb-4">
                    Benefits of {" "}
                    <span className="text-[#0E58A8] font-bold">UFE</span>
                </h5>

                {/* Cards Grid */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {symptoms.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`
                bg-white w-full max-w-[320px] mx-auto rounded-xl shadow-xl 
                hover:shadow-md transition duration-300 p-4
            
            `}
                            >

                                {/* <div className="relative w-full h-48 rounded-lg overflow-hidden">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div> */}
                                <h3 className="mt-4 text-sm md:text-base font-semibold  text-gray-800 text-center">
                                    {item.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>



                {/* Button */}
                <div className="mt-12">
                    <p className="mx-auto mb-5 max-w-4xl text-sm leading-relaxed text-gray-600 md:text-base">
                        IRCC Pakistan also offers a wide range of other minimally invasive procedures including{" "}
                        <Link
                            href="/Varicose-Vein-Ablation"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                        >
                            Varicose Vein Ablation
                        </Link>
                        ,{" "}
                        <Link
                            href="/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                        >
                            Prostate Artery Embolization
                        </Link>
                        , and{" "}
                        <Link
                            href="/Interventional-Oncology"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                        >
                            Interventional Oncology
                        </Link>{" "}
                        services for patients requiring comprehensive care.
                    </p>
                    <button className="bg-[#0E58A8] hover:bg-[#0E58A8] text-white px-8 py-3 rounded-full shadow-xl transition">
                        Book Appointment
                    </button>
                </div>
            </div>
        </section>
    );
}

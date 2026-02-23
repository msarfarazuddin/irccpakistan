import Image from "next/image";

const symptoms = [
    {
        title: "Outpatient procedure",
        img: "/one1.png",
    },
    {
        title: "No surgical incisions",
        img: "/two2.png",
    },
    {
        title: "No general anesthesia required",
        img: "/three.png",
    },
    {
        title: "1-hour procedure time (typically)",
        img: "/three.png",
    },
    {
        title: "Minimal recovery time",
        img: "/one1.png",
    },
    {
        title: "No scarring",
        img: "/two2.png",
    },
    {
        title: "Immediate relief",
        img: "/two2.png",
    },
];




export default function VeinRiskFactors() {
    return (
        <section className="bg-white from-gray-100 to-gray-200 py-16 px-4">
            <div className="max-w-[1400px] mx-auto text-center">

                {/* Top Badge */}

                {/* Heading */}
                <h5 className="text-3xl text-black md:text-4xl pt-7 mb-4">
                    Benefits of Endovenous {" "}
                    <span className="text-[#0E58A8] font-bold">Ablation Procedures</span>
                </h5>

                <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-sm md:text-base">
                    Radiofrequency Ablation (RFA), Endovenous Laser Therapy (EVLT) and non thermal non tumescent (NTNT) have many benefits over traditional venous surgical stripping techniques
                </p>

                {/* Cards Grid */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {symptoms.map((item, index) => {
                        const isSecondLast = index === symptoms.length - 2;
                        const isLast = index === symptoms.length - 1;

                        return (
                            <div
                                key={index}
                                className={`
                bg-white w-full max-w-full mx-auto rounded-xl shadow-xl 
                hover:shadow-md transition duration-300 p-4
                ${isSecondLast ? "lg:col-start-2" : ""}
                ${isLast ? "lg:col-start-3" : ""}
            `}
                            >

                                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm md:text-base font-semibold pl-15 pr-15 text-gray-800 text-center">
                                    {item.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>



                {/* Button */}
                <div className="mt-12">
                    <button className="bg-[#0E58A8] hover:bg-[#0E58A8] text-white px-8 py-3 rounded-full shadow-xl transition">
                       <a href="#form">Book Appointment</a>
                    </button>
                </div>
            </div>
        </section>
    );
}

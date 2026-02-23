import Image from "next/image";

const symptoms = [
    {
        title: "Venolymphatic malformations, including angiokeratomas",
        img: "/one1.png",
    },
    {
        title: "Klippel-Trenaunay syndrome (capillary, venolymphatic malformations)",
        img: "/two2.png",
    },
    {
        title: "Parkes Weber syndrome (capillary, arteriovenous)",
        img: "/three.png",
    },
    {
        title: "CLOVES (congenital lipomatous overgrowth, vascular malformations, epidermal nevus, spinal abnormalities)",
        img: "/four.png",
    },
    {
        title: "Proteus syndrome",
        img: "/five.png",
    },
    {
        title: "Hereditary hemorrhagic telangiectasia (Osler-Weber-Rendu syndrome)",
        img: "/four.png",
    },
    {
        title: "Blue rubber bleb nevus syndrome (BRBNS)",
        img: "/four.png",
    },
];

export default function FibroidSymptomsSection() {
    return (
        <section className="bg-white from-gray-100 to-gray-200 py-16 px-4">
            <div className="max-w-[1400px] mx-auto text-center">

                {/* Top Badge */}

                 <h4 className="text-2xl md:text-3xl text-black font-semibold pt-7 mb-10">
                    There are other types of haemangiomas <br></br>which rapidly resolute (RICH) and other non involute (NICH).
                </h4>
                <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-sm md:text-base">Blood vessel abnormalities may accompany a variety of genetic or inherited syndromes. Patients that present with vascular malformations will receive multidisciplinary care to ensure coordinated treatment for all of their symptoms. A wide variety of combinations and syndromes commonly associated with vascular malformations are treated by Interventional Radiology, with additional collaboration from other multidisciplinary teams.These include:
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
                bg-white w-full max-w-[320px] mx-auto rounded-xl shadow-xl 
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
                                <h3 className="mt-4 text-sm md:text-base font-semibold pl-5 pr-5 text-gray-800 text-center">
                                    {item.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>



                {/* Button */}
                <div className="mt-12">
                    <button className="bg-[#0E58A8] hover:bg-[#0E58A8] text-white px-8 py-3 rounded-full shadow-xl transition">
                       <a href="#form">   Book Appointment</a>
                    </button>
                </div>
            </div>
        </section>
    );
}

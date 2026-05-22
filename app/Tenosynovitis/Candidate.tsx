const symptoms = [
    {
        title: "Have persistent tendon pain and swelling diagnosed as tenosynovitis",
        img: "/one1.png",
    },
    {
        title: "Did not improve with rest, splints, or medication",
        img: "/two2.png",
    },
    {
        title: "Have pain limiting daily activities",
        img: "/three.png",
    },
    {
        title: "Want a non-surgical, targeted treatment option",
        img: "/four.png",
    },
    {
        title: "Imaging evaluation helps confirm the diagnosis and guide the best therapy.",
        img: "/five.png",
    },
   
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
                    <span className="text-[#111111] font-normal">Candidate</span>
                </div>

                {/* Heading */}
                <h5 className="text-3xl text-black md:text-4xl pt-7 mb-4">
                   Who is a Candidate for This Treatment? {" "}
                    <span className="text-[#0E58A8] font-bold">You may be suitable if you:</span>
                </h5>

                {/* Cards Grid */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

                <p className="mx-auto mt-10 max-w-5xl text-center text-sm leading-7 text-[#1f2937] md:text-lg">
                    Patients choosing IR for tenosynovitis often share a similar profile to those opting for{" "}
                    <a
                        href="/Plantar-Fasciitis"
                        className="font-semibold text-[#0E58A8] underline underline-offset-4"
                    >
                        Plantar Fasciitis embolization
                    </a>
                    ,{" "}
                    <a
                        href="/Genicular-Arterial-Embolization-for-Knee-Pain"
                        className="font-semibold text-[#0E58A8] underline underline-offset-4"
                    >
                        Genicular Arterial Embolization
                    </a>
                    , or{" "}
                    <a
                        href="/Peripheral-Vascular-Disease"
                        className="font-semibold text-[#0E58A8] underline underline-offset-4"
                    >
                        Peripheral Vascular Disease
                    </a>{" "}
                    treatment - people who want effective, long-term relief without the risks and downtime of surgery. Imaging evaluation helps confirm the diagnosis and guide the best therapy.
                </p>



                {/* Button */}
                <div className="mt-12">
                    <a
                        href="#form"
                        className="inline-flex rounded-full bg-[#0E58A8] px-8 py-3 text-white shadow-xl transition hover:bg-[#0E58A8]"
                    >
                        Book Appointment
                    </a>
                </div>
            </div>
        </section>
    );
}

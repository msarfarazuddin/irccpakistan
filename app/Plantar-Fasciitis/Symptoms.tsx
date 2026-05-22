const symptoms = [
    {
        title: "Sharp heel pain, especially with the first steps in the morning",
        img: "/one1.png",
    },
    {
        title: "Pain after long periods of standing or walking",
        img: "/two2.png",
    },
    {
        title: "Heel stiffness that improves with movement but returns later",
        img: "/three.png",
    },
    {
        title: "Tenderness at the bottom of the heel",
        img: "/four.png",
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
                    <span className="text-[#111111] font-normal">Symptoms</span>
                </div>

                {/* Heading */}
                <h5 className="text-3xl text-black md:text-4xl pt-7 mb-4">
                   What are Symptoms of  {" "}
                    <span className="text-[#0E58A8] font-bold">Plantar Fasciitis?</span>
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

                <p className="mx-auto mt-10 max-w-5xl text-sm font-semibold leading-7 text-[#1f2937] md:text-lg">
                    If you are experiencing joint or tendon pain in multiple areas alongside heel pain, conditions such as{" "}
                    <a
                        href="/Tenosynovitis"
                        className="text-[#0E58A8] underline underline-offset-4"
                    >
                        Tenosynovitis
                    </a>{" "}
                    or{" "}
                    <a
                        href="/Genicular-Arterial-Embolization-for-Knee-Pain"
                        className="text-[#0E58A8] underline underline-offset-4"
                    >
                        Genicular Arterial Embolization-treatable knee pain
                    </a>{" "}
                    may also be present. Our team at IRCC Pakistan will evaluate your full clinical picture before recommending treatment.
                </p>
            </div>
        </section>
    );
}

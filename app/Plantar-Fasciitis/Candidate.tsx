const symptoms = [
    {
        title: "Have chronic heel pain diagnosed as plantar fasciitis",
        img: "/one1.png",
    },
    {
        title: "Did not improve with rest, footwear changes, or physiotherapy",
        img: "/two2.png",
    },
    {
        title: "Have persistent pain affecting daily activities",
        img: "/three.png",
    },
    {
        title: "Want a non-surgical treatment option",
        img: "/four.png",
    },
    {
        title: "An evaluation with imaging helps determine the best treatment approach.",
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
                    Patients who have already tried conservative management without lasting relief similar to those seeking{" "}
                    <a
                        href="/Radiofrequency-Ablation-of-Osteoid-Osteoma"
                        className="font-semibold text-[#0E58A8] underline underline-offset-4"
                    >
                        Radiofrequency Ablation of Osteoid Osteoma
                    </a>{" "}
                    for bone pain or{" "}
                    <a
                        href="/Peripheral-Vascular-Disease"
                        className="font-semibold text-[#0E58A8] underline underline-offset-4"
                    >
                        Peripheral Vascular Disease
                    </a>{" "}
                    treatment for limb pain often find interventional radiology to be the missing solution. An evaluation with imaging helps determine the best treatment approach.
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

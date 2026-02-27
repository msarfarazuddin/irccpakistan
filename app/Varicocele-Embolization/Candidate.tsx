import Image from "next/image";

const symptoms = [
    {
        title: "Requires NO general anesthesia (only local anesthesia)",
        img: "/Requires NO.png",
    },
    {
        title: "Results in NO scarring",
        img: "/Results in NO scarring.png",
    },
    {
        title: "Requires NO overnight stay (same day procedure)",
        img: "/NO overnight stay.png",
    },
];


const expect = [
    {
        title: "Success rates of 90%, better than surgical techniques",
        img: "/one1.png",
    },
    {
        title: "Quicker recovery time; days vs. weeks as compared to open surgery",
        img: "/Quicker recovery time.png",
    },
    {
        title: "Reduced risk of infection",
        img: "/three.png",
    },
];

export default function Candidate() {
    return (
        <section className="bg-white from-gray-100 to-gray-200 py-16 px-4">
            <div className="max-w-[1400px] mx-auto text-center">

                {/* Top Badge */}

                <div className="inline-flex w-fit items-center gap-2 rounded-full shadow-lg border border-[#dce6ff] bg-white px-4 py-2 text-sm font-semibold text-[#0E58A8]">
                    <h2 className="flex h-6 w-6 items-center font-bold justify-center rounded-full text-[30px]  font-bold text-[#0E58A8]">
                        +
                    </h2>
                    <span className="text-[#111111] font-normal">Symptoms</span>
                </div>

                {/* Heading */}
                <h5 className="text-3xl text-black md:text-4xl pt-7 mb-4">
                    Who Is a Candidate for {" "}
                    <span className="text-[#0E58A8] font-bold">Varicocele Embolization?</span>
                </h5>

                <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-sm md:text-base">
                    If you prefer a minimally invasive treatment option, speak with IRCC Pakistan team about varicocele embolization, you may be a candidate for varicocele embolization if you are an adult male and have been diagnosed with a varicocele that is causing you testicular pain, discomfort or infertility.
                </p>

                <h4 className="text-2xl md:text-3xl text-black font-semibold pt-7 mb-4">
                    Benefits of Varicocele Embolization
                </h4>

                <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-sm md:text-base">
                    Varicocele embolization is a minimally invasive outpatient procedure that:
                </p>

                {/* Cards Grid */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

                <h4 className="text-2xl md:text-3xl text-black font-semibold pt-7 mb-4">
                    With varicocele embolization, you can expect:
                </h4>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {expect.map((item, index) => {
                        const isSecondLast = index === expect.length - 2;
                        const isLast = index === expect.length - 1;

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
                         <a href="#form">     Book Appointment</a>
                    </button>
                </div>
            </div>
        </section>
    );
}

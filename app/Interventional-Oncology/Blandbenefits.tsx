import Image from "next/image";

const symptoms = [
    {
        title: "Prevent the growth of tumors or cause them to shrink.",
        img: "/one1.png",
    },
    {
        title: "Potentially preserve liver function for a longer period.",
        img: "/two2.png",
    },
];

export default function FibroidSymptomsSection() {
    return (
        <section className="bg-white from-gray-100 to-gray-200 py-16 pt-0 px-4 flex flex-col justify-center">
            <div className="max-w-[1400px] mx-auto text-center">

                {/* Heading */}
                <h5 className="text-3xl text-black md:text-4xl pt-7 mb-4">
                    What are{" "}
                    <span className="text-[#0E58A8] font-bold">the benefits?</span>
                </h5>

                <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-sm md:text-base">
                    As a highly targeted, localized therapy, bland embolization can treat a tumor without impacting other parts of the body. It can be a treatment option for patients who are no longer having success with radiation or chemotherapy or it can be combined with other cancer treatments. As bland embolization cuts off blood supply to the tumor, it can:
                </p>

                {/* Cards Grid */}

                <div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl lg:grid-cols-2 gap-6">
                    {symptoms.map((item, index) => {
                        const isSecondLast = index === symptoms.length - 2;
                        const isLast = index === symptoms.length - 1;

                        return (
                            <div
                                key={index}
                                className={`
                bg-white w-full max-w-full mx-auto rounded-xl shadow-xl 
                hover:shadow-md transition duration-300 p-4
                ${isSecondLast ? "lg:col-start-1" : ""}
                ${isLast ? "lg:col-start-2" : ""}
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
                       <a href="#form">   Book Appointment</a>
                    </button>
                </div>
            </div>
        </section>
    );
}

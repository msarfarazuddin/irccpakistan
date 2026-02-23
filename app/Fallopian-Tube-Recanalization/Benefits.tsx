import Image from "next/image";

const symptoms = [
    {
        title: "Fallopian tube recanalization is a minimally invasive outpatient procedure with no incision needed",
        img: "/one1.png",
    },
    {
        title: "Requires only local (rather than general) anesthesia",
        img: "/two2.png",
    },
    {
        title: "An increased chance of pregnancy if this is the sole cause of infertility",
        img: "/three.png",
    },
    {
        title: "Does not cause scarring or pain, as some surgical techniques can",
        img: "/three.png",
    },
    {
        title: "Reduced risk of infection as compared to surgery",
        img: "/one1.png",
    },
    {
        title: "Same day procedure, recover at home",
        img: "/two2.png",
    },
    
];




export default function VeinRiskFactors() {
    return (
        <section className="bg-white from-gray-100 to-gray-200 py-16 px-4">
            <div className="max-w-[1400px] mx-auto text-center">

                {/* Top Badge */}

                <div className="inline-flex w-fit items-center gap-2 rounded-full shadow-lg border border-[#dce6ff] bg-white px-4 py-2 text-sm font-semibold text-[#0E58A8]">
                    <h2 className="flex h-6 w-6 items-center font-bold justify-center rounded-full text-[30px]  font-bold text-[#0E58A8]">
                        +
                    </h2>
                    <span className="text-[#111111] font-normal">Benefits</span>
                </div>

                {/* Heading */}
                <h5 className="text-3xl text-black md:text-4xl pt-7 mb-4">
                    Benefits of {" "}
                    <span className="text-[#0E58A8] font-bold">Fallopian Tube Recanalization</span>
                </h5>

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

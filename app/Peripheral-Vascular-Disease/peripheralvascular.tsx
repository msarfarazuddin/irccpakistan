import Image from "next/image";

const symptoms = [
    {
        title: "Age (especially older than age 50)",
        img: "/one1.png",
    },
    {
        title: "History of heart disease",
        img: "/two2.png",
    },
    {
        title: "Male gender",
        img: "/three.png",
    },
    {
        title: "Postmenopausal women",
        img: "/three.png",
    },
    {
        title: "Family history of high cholesterol, high blood pressure, or peripheral vascular disease",
        img: "/three.png",
    },
];


const expect = [
    {
        title: "Coronary artery disease",
        img: "/one1.png",
    },
    {
        title: "Diabetes",
        img: "/two2.png",
    },
    {
        title: "High cholesterol",
        img: "/three.png",
    },
    {
        title: "High blood pressure",
        img: "/three.png",
    },
    {
        title: "Overweight",
        img: "/three.png",
    },
    {
        title: "Physical inactivity",
        img: "/three.png",
    },
    {
        title: "Smoking or use of tobacco products",
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
                    Who is at risk for {" "}
                    <span className="text-[#0E58A8] font-bold">peripheral vascular</span> disease?
                </h5>

                <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-sm md:text-base">
                    A risk factor increases your chance of developing a disease. Some can be changed, others cannot.
                </p>

                <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-sm md:text-base">
                    Risk factors that you can’t change:
                </p>

                {/* Cards Grid */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {symptoms.map((item, index) => {
                        const isSecondLast = index === symptoms.length - 3;
                        const isLast = index === symptoms.length - 3;

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
                                <h3 className="mt-4 text-sm md:text-base font-semibold pl-8 pr-8 text-gray-800 text-center">
                                    {item.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>

                <h4 className="text-2xl md:text-3xl text-black font-semibold pt-7 mb-4">
                    Risk factors that may be changed or treated include:
                </h4>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {expect.map((item, index) => {
                        const isSecondLast = index === expect.length - 1;
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
                                <h3 className="mt-4 text-sm md:text-base font-semibold pl-8 pr-8 text-gray-800 text-center">
                                    {item.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>


                <p className="text-gray-600 max-w-5xl mx-auto mt-10 text-sm md:text-base">
                    Those who smoke or have diabetes have the highest risk of complications from PVD because these risk factors also cause impaired blood flow.
                </p>


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

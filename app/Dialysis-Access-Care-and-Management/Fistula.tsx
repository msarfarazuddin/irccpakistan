import Image from "next/image";

const symptoms = [
    {
        title: "a fistula, which is made by joining together an artery and vein to make a bigger high-flow blood vessel.",
        img: "/one1.png",
    },
    {
        title: "a graft, in which a soft plastic tube is placed between an artery and a vein, creating an artificial high-flow blood vessel.",
        img: "/two2.png",
    },
];

const expect = [
    {
        title: "Dilating the narrowed vessels of dialysis fistula and grafts.",
        img: "/one1.png",
    },
    {
        title: "Removing the thrombosed blood clot from fistula and graft.",
        img: "/two2.png",
    },
   
];

export default function Candidate() {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-[1400px] mx-auto text-center items-center flex flex-col">

                {/* Top Badge */}
                <div className="inline-flex w-fit items-center gap-2 rounded-full shadow-lg border border-[#dce6ff] bg-white px-4 py-2 text-sm font-semibold text-[#0E58A8]">
                    <h2 className="flex h-6 w-6 items-center justify-center rounded-full text-[30px] font-bold text-[#0E58A8]">
                        +
                    </h2>
                    <span className="text-[#111111] font-normal">Symptoms</span>
                </div>

                {/* Heading */}
                <h5 className="text-3xl text-black md:text-4xl pt-7 mb-4">
                    What are Dialysis and {" "}
                    <span className="text-[#0E58A8] font-bold">
                        Fistula/Graft
                    </span> Declotting and Interventions?
                </h5>
                <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-sm md:text-base">
                    Dialysis fistula/graft declotting and interventions are minimally invasive procedures performed to improve or restore blood flow in the fistula and graft placed in the blood vessels of dialysis patients.
                </p>

                {/* Symptoms Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl">
                    {symptoms.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-4"
                        >
                            <div className="relative w-full h-48 rounded-lg overflow-hidden">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="mt-4 text-sm md:text-base font-semibold px-4 text-gray-800 text-center">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Heading */}
                <h5 className="text-3xl text-black md:text-4xl pt-7 mb-4">
                    What are some {" "}
                    <span className="text-[#0E58A8] font-bold">
                        common uses
                    </span> of the procedure?
                </h5>
                <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-sm md:text-base">
                    These procedures are used to treat:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl">
                    {expect.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-4"
                        >
                            <div className="relative w-full h-48 rounded-lg overflow-hidden">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="mt-4 text-sm md:text-base font-semibold px-4 text-gray-800 text-center">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="mt-12">
                    <button className="bg-[#0E58A8] hover:bg-[#0c4c91] text-white px-8 py-3 rounded-full shadow-lg transition duration-300">
                      <a href="#form">   Book Appointment</a>
                    </button>
                </div>

            </div>
        </section>
    );
}

import Image from "next/image";

const symptoms = [
    {
        title: "Bleeding during bowel movements",
        img: "/one1.png",
    },
    {
        title: "Pain or discomfort around the anus",
        img: "/two2.png",
    },
    {
        title: "Swelling or a lump near the anus",
        img: "/three.png",
    },
    {
        title: "Itching or irritation",
        img: "/four.png",
    },
    {
        title: "Mucus discharge or feeling of incomplete bowel emptying",
        img: "/five.png",
    },

];

export default function FibroidSymptomsSection() {
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
                    What are Symptoms of {" "}
                    <span className="text-[#0E58A8] font-bold">Haemorrhoids?</span>
                </h5>

                {/* Cards Grid */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {symptoms.map((item, index) => {

                        const isLast = index === symptoms.length - 1;

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
            </div>
        </section>
    );
}

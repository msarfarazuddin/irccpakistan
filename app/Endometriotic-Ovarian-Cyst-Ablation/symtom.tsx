import Image from "next/image";

const symptoms = [
    {
        title: "Pelvic pain, especially during periods",
        img: "/one1.png",
    },
    {
        title: "Severe menstrual cramps",
        img: "/two2.png",
    },
    {
        title: "Pain during intercourse",
        img: "/three.png",
    },
    {
        title: "Lower abdominal or back pain",
        img: "/four.png",
    },
    {
        title: "Bloating or pelvic heaviness",
        img: "/five.png",
    },
    {
        title: "Difficulty getting pregnant",
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
                    What are Symptoms of an  {" "}
                    <span className="text-[#0E58A8] font-bold">Endometriotic Ovarian Cyst?</span>
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
                <p className="text-gray-600 max-w-4xl mx-auto mt-10 text-sm md:text-base">
                   These symptoms can significantly impact a woman's quality of life and fertility. If left untreated, endometriotic cysts can grow larger and cause further damage to ovarian tissue and the fallopian tubes. Women experiencing difficulty conceiving may also want to explore<a href="/Fallopian-Tube-Recanalization"> Fallopian Tube Recanalization</a> if fallopian tube blockage is also a concern.
                   </p>
            </div>
        </section>
    );
}

const symptoms = [
    {
        title: "Pain along a tendon, especially with movement",
        img: "/one1.png",
    },
    {
        title: "Swelling around the joint",
        img: "/two2.png",
    },
    {
        title: "Stiffness or difficulty moving the affected area",
        img: "/three.png",
    },
    {
        title: "Tenderness when touched",
        img: "/four.png",
    },
{
        title: "A catching or creaking sensation during movement",
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
                    <span className="text-[#0E58A8] font-bold">Tenosynovitis?</span>
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

                <p className="mx-auto mt-10 max-w-5xl text-sm leading-7 text-[#374151] md:text-base">
                    Patients experiencing tendon pain alongside heel discomfort may also have{" "}
                    <a
                        href="/Plantar-Fasciitis"
                        className="text-[#0E58A8] underline underline-offset-4"
                    >
                        Plantar Fasciitis
                    </a>
                    , as both conditions frequently co-exist in patients who are on their feet for long hours. Our team will evaluate the full clinical picture to ensure the right treatment is recommended.
                </p>
            </div>
        </section>
    );
}

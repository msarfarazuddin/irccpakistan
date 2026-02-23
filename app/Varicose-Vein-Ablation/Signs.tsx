import Image from "next/image";

const symptoms = [
    {
        title: "Large, bluish or purple-appearing bulging veins that you can see under the surface of your skin",
        img: "/one1.png",
    },
    {
        title: "Swelling in your ankles and feet",
        img: "/two2.png",
    },
    {
        title: "Painful or achy legs that feel “heavy”",
        img: "/three.png",
    },
    {
        title: "Muscle cramping in your legs—particularly at night",
        img: "/four.png",
    },
    {
        title: "Itchy legs, especially on your lower leg and ankles",
        img: "/five.png",
    },
    {
        title: "Burning or throbbing sensations in your legs",
        img: "/four.png",
    },
    {
        title: "Discolored patches of skin around the area where you have varicose veins",
        img: "/five.png",
    },
    {
        title: "Stasis dermatitis (rash & itchy skin around your varicose veins). If left untreated, varicose veins rash could develop into venous leg ulcers.",
        img: "/four.png",
    }
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
                    <span className="text-[#111111] font-normal">Benefits</span>
                </div>

                {/* Heading */}
                <h5 className="text-3xl text-black md:text-4xl pt-7 mb-4">
                    Signs of {" "}
                    <span className="text-[#0E58A8] font-bold">Varicose Veins</span>
                </h5>

                <p className="mt-4 mb-10 text-[14px] sm:text-[18px] leading-relaxed text-slate-600 ">
                    Swollen, twisted veins aren’t the only indication that you have varicose veins. Other signs and symptoms of varicose veins include:
                </p>

                {/* Cards Grid */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

                                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm md:text-base font-semibold  text-gray-800 text-center">
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

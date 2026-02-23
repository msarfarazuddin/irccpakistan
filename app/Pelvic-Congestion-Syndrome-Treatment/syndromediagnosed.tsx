import Image from "next/image";

const symptoms = [
    {
        title: "Urine tests to check for problems with your urinary system",
        img: "/one1.png",
    },
    {
        title: "Blood tests to check for pregnancy, sexually transmitted infections (STIs), anemia, and other conditions",
        img: "/two2.png",
    },
    {
        title: "Pelvic ultrasound to look for growths in the pelvis",
        img: "/three.png",
    },
    {
        title: "Doppler ultrasound to check the blood flow in the pelvic blood vessels",
        img: "/four.png",
    },
    {
        title: "CT scan or MRI for more detailed pictures",
        img: "/five.png",
    },
    {
        title: "Diagnostic laparoscopy to rule out other causes of pelvic pain",
        img: "/four.png",
    },
    {
        title: "A procedure to take fluoroscopy of the pelvic veins (venography)",
        img: "/five.png",
    },
];

export default function Syndrom() {
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
                    How is {" "}
                    <span className="text-[#0E58A8] font-bold">pelvic congestion syndrome </span>diagnosed?
                </h5>

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
                      <a href="#form">   Book Appointment</a>
                    </button>
                </div>
            </div>
        </section>
    );
}

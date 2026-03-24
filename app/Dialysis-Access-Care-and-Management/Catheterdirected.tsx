import Image from "next/image";


const symptoms = [
    {
        title: "Catheter-directed thrombolysis can greatly improve blood flow and reduce or eliminate the related symptoms and effects without the need for more invasive surgery.",
        img: "/one1.png",
    },
    {
        title: "Thrombolysis is a safe, highly effective way of re-establishing circulation blocked by a clot.",
        img: "/two2.png",
    },
    {
        title: "Thrombolysis is less invasive than conventional open surgery to remove clots and the hospital stay is relatively brief. Blood loss is less than with traditional surgical treatment and there is no obvious surgical incision.",
        img: "/three.png",
    },

];


export default function FibroidSymptomsSection() {
    return (
        <section className="relative  bg-[#0E58A8E5] from-gray-100 to-gray-200 py-16  px-4"  >
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/banner-cand.mp4" type="video/mp4" />
            </video>

            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-[rgba(14,88,168,0.9)]"></div>


            <div className="relative  max-w-[1400px] mx-auto text-center">

                {/* Top Badge */}

                <div className="inline-flex w-fit items-center gap-2 rounded-full shadow-lg border border-[#dce6ff] bg-white px-4 py-2 text-sm font-semibold text-[#0E58A8]">
                    <h2 className="flex h-6 w-6 items-center font-bold justify-center rounded-full text-[30px]  font-bold text-[#0E58A8]">
                        +
                    </h2>
                    <span className="text-[#111111] font-normal">benefits</span>
                </div>

                {/* Heading */}
                <h5 className="text-3xl text-white md:text-4xl pt-7 mb-4">
                    Catheter-directed
                    <span className="text-white font-bold"> Thrombolysis</span>
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
                bg-[#386fab] w-full max-w-full mx-auto rounded-xl shadow-xl 
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
                                <h3 className="mt-4 text-[18px] md:text-base font-semibold pl-6 pr-6 text-white text-center">
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

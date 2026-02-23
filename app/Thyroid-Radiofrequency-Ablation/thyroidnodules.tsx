import Image from "next/image";

export default function UterineFibroidsSection() {
    return (
        <section className="bg-[#ffffff] py-16 px-4 bg-center bg-no-repeat" style={{ backgroundImage: "url('/faq.png')" }}>
            <div className="max-w-full mx-auto text-center">

                {/* Heading */}
                <h5 className="text-4xl text-black  mb-2">
                    Benign <span className="text-[#0E58A8] font-bold">thyroid nodules</span>
                </h5>

                <p className="text-gray-600 mb-8">
                    This treatment is used to treat benign thyroid nodules that cause:
                </p>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center">

                    {/* Left Side */}
                    <div className=" flex flex-col items-center">

                        {/* Subserosal */}
                        <div className="bg-white shadow-lg rounded-xl max-w-xs h-40 p-6 mb-15 text-left flex flex-col justify-center  relative">
                            <p className="text-black text-sm">
                                Compressive symptoms ( difficulty in swallowing, difficulty in breathing or a significant neck lump)
                            </p>
                            <div className="absolute right-[-7px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0E58A8] rounded-full"></div>
                        </div>

                    </div>

                    {/* Center Image */}
                    <div className="flex justify-center">
                        <Image
                            src="/Uterine Fibroids.png" // apni image public folder me rakho
                            alt="Uterus Illustration"
                            width={400}
                            height={300}
                            className="object-cover"
                        />
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col items-center">

                        {/* Submucosal */}
                        <div className="bg-white shadow-lg rounded-xl p-6 max-w-xs h-40 mb-15 flex flex-col justify-center text-left relative">
                            <p className="text-black text-sm">
                                Hyper functioning thyroid nodule (a nodule that produces excess thyroid hormone)
                            </p>
                            <div className="absolute left-[-7px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0E58A8] rounded-full"></div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

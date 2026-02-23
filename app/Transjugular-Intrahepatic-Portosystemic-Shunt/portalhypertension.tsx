import Image from "next/image";

export default function UterineFibroidsSection() {
    return (
        <section className="bg-[#ffffff] py-16 px-4 bg-center bg-no-repeat" style={{ backgroundImage: "url('/irccpakistan/faq.png')" }}>
            <div className="max-w-full mx-auto text-center">

                {/* Heading */}
                <h5 className="text-4xl text-black  mb-2">
                    What happens in <span className="text-[#0E58A8] font-bold">portal hypertension?</span>
                </h5>

                <p className="text-gray-600 mb-8">
                    Portal hypertension causes 2 main problems: variceal bleeding and ascites.
                </p>



                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center">

                    {/* Left Side */}
                    <div className=" flex flex-col items-center">

                        {/* Subserosal */}
                        <div className="bg-white shadow-lg rounded-xl max-w-xs h-55 p-6 mb-15 text-left flex flex-col justify-center  relative">
                            <h3 className="font-bold text-black text-lg mb-2">Variceal Bleeding</h3>
                            <p className="text-black text-sm">
                                High pressure in the veins in the liver can cause the blood flow in the portal veins to back up. The blood must then drain through new pathways called varices (enlarged veins). When too much blood fills the veins, they weaken, and possibly break. This can cause bleeding.
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
                        <div className="bg-white shadow-lg rounded-xl p-6 max-w-xs h-55 mb-15 flex flex-col justify-center text-left relative">
                            <h3 className="font-bold text-black text-lg mb-2">Ascites</h3>
                            <p className="text-black text-sm">
                                Ascites is a buildup of fluid in the abdomen. The increased pressure from portal hypertension stops blood from flowing through the liver. Blood then leaks into the abdomen and causes ascites.
                            </p>
                            <div className="absolute left-[-7px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0E58A8] rounded-full"></div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

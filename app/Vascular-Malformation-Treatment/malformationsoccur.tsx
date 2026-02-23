import Image from "next/image";

export default function UterineFibroidsSection() {
    return (
        <section className="bg-[#ffffff] py-16 px-4 bg-center bg-no-repeat" style={{ backgroundImage: "url('/irccpakistan/faq.png')" }}>
            <div className="max-w-full mx-auto text-center">


                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-start">

                    {/* Left Side */}
                    <div className=" flex flex-col items-center">

                        {/* Subserosal */}
                        <div className="bg-white shadow-lg rounded-xl max-w-full h-55 p-6 mb-15 text-left flex flex-col justify-center  relative">
                            <h3 className="font-bold text-black text-lg mb-2">Venolymphatic malformation</h3>
                            <p className="text-black text-sm">
                                may cause pain wherever they are located. Venous and lymphatic malformations may cause a lump under the skin. There may be an overlying birthmark on the skin. Bleeding or lymph fluid leaking may occur from skin lesions. Lymphatic malformations tend to become infected, requiring repeated antibiotic treatments. Venous and lymphatic malformations may be associated with a syndrome called Klippel-Trenaunay Syndrome.
                            </p>
                            <div className="absolute right-[-7px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0E58A8] rounded-full"></div>
                        </div>

                        {/* Intramural */}
                     
                    </div>

                    {/* Center Image */}
                    <div className="flex justify-center flex-col">
                        <Image
                            src="/Uterine Fibroids.png" // apni image public folder me rakho
                            alt="Uterus Illustration"
                            width={400}
                            height={300}
                            className="object-cover"
                        />

                           <div className="bg-white shadow-lg rounded-xl max-w-full h-55 p-6 text-left flex flex-col justify-center  relative">
                            <h3 className="font-bold text-black text-lg mb-2">Hemangioma </h3>
                            <p className="text-black text-sm">
                                is another common term used for vascular anomalies. However, this name actually applies to a childhood vascular anomaly that has a rapid growth phase between birth and 3 months of age. These will resolve completely by age 7.Haemangioma most commonly appears on the face, scalp, chest or back. Treatment of a hemangioma is usually unnecessary unless the nodule interferes with vision or breathing, or in rare cases of internal hemangiomas causes or contributes to other medical problems.
                            </p>
                            <div className="absolute right-[-7px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0E58A8] rounded-full"></div>
                        </div>

                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col items-center">

                        {/* Submucosal */}
                        <div className="bg-white shadow-lg rounded-xl p-6 max-w-full h-55 mb-15 flex flex-col justify-center text-left relative">
                            <h3 className="font-bold text-black text-lg mb-2">Arteriovenous malformations</h3>
                            <p className="text-black text-sm">
                                may cause pain. They are also more stressful on the heart because of the rapid shunting of blood from arteries to veins. Depending on their location, they may also result in bleeding (for example from the bowels, from the uterus or from the bladder).
                            </p>
                            <div className="absolute left-[-7px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0E58A8] rounded-full"></div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

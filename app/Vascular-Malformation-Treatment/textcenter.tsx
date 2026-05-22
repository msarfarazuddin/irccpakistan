import Link from "next/link";




export default function textcenter() {
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
                    How do I find out if I have{" "}
                    <span className="text-[#0E58A8] font-bold">one of these vascular</span> malformations?
                </h5>
                <h4 className="text-black text-[30px]">How Are Vascular Malformations Diagnosed?</h4>

                <p className="text-gray-600 max-w-4xl mx-auto mb-5 text-sm md:text-base">
                    Superficial malformations can often be identified on physical examination. Deeper malformations are diagnosed using MRI (Magnetic Resonance Imaging), which provides detailed imaging of internal vascular structures.
                </p>

                <h4 className="text-black text-[30px]">How Are Vascular Malformations Treated?</h4>

                <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-sm md:text-base">
                    Although surgery is sometimes considered, surgeons frequently find it difficult to completely remove vascular malformations  and incomplete removal leads to recurrence. At IRCC Pakistan, our interventional radiologists use non-surgical, image-guided embolization as the primary treatment approach.
                </p>


                <h4 className="text-black text-[30px]">Sclerotherapy for Venous and Lymphatic Malformations</h4>

                <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-sm md:text-base">
                    Alcohol is injected directly into the fluid-filled sacs of venous or lymphatic malformations (sclerotherapy), causing them to collapse and permanently stop filling. This approach is closely related to the embolization techniques used in our{" "}
                    <Link
                        href="/Interventional-Oncology"
                        className="text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                    >
                        Interventional Oncology
                    </Link>{" "}
                    treatments such as{" "}
                    <Link
                        href="/Interventional-Oncology"
                        className="text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                    >
                        Bland Embolization and Chemoembolization
                    </Link>
                    , where blocking abnormal blood supply is used to treat tumors. Similarly,{" "}
                    <Link
                        href="/Hemorrhoidal-Artery-Embolization"
                        className="text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                    >
                        Hemorrhoidal Artery Embolization
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="/Uterine-Fibroid-Embolization"
                        className="text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                    >
                        Uterine Fibroid Embolization
                    </Link>{" "}
                    use the same minimally invasive embolization principles.
                </p>

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

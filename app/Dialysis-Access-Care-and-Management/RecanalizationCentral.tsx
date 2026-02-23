import Image from "next/image";




export default function textcenter() {
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
                    Recanalization of {" "}
                    <span className="text-[#0E58A8] font-bold">Central Venous </span>occlusions
                </h5>

                <p className="text-gray-600 max-w-4xl mx-auto mb-5 text-sm md:text-base">
                    Central vein occlusion (CVO) is a common complication in chronic hemodialysis patients due to mechanical damage to the vessel walls from prior catheterization, as well as high flow rate of a functioning arteriovenous fistula (AVF). CVO could result in ipsilateral limb swelling and altered vascular access function, leading to suboptimal hemodialysis sometimes with superior vena caval syndrome resulting in facial swelling, puffiness, headache and tinnitus.
                </p>

                <p className="text-gray-600 max-w-4xl mx-auto mb-5 text-sm md:text-base">
                    Central venous recanalization are practical strategies in treating long-segment CVO in hemodialysis patients crossing with standard wires, sharp needles and sometimes with central venous occlusion reentry devices in establishing and restoring flow through the central venous system resulting in clinical improvements.
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

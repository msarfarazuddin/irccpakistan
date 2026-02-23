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
                    What Is{" "}
                    <span className="text-[#0E58A8] font-bold">Varicocele Embolization</span>
                </h5>

                <p className="text-gray-600 max-w-4xl mx-auto mb-5 text-sm md:text-base">
                    Varicocele embolization, performed by a vascular interventional radiologist, is a minimally invasive procedure that closes off blood flow to the affected veins, causing the varicocele to shrink and die off.
                </p>

                <p className="text-gray-600 max-w-4xl mx-auto mb-5 text-sm md:text-base">
                    You will be given a mild sedative before the procedure begins to help you relax, as well as a local anesthetic at the procedure site.The interventional radiologist will then insert a catheter through a small nick in your arm/groin and using fluoroscopy, a type of x-ray, image-guided technology. The catheter will be advanced and placed into the affected testicular vein.
                </p>

                <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-sm md:text-base">
                    Contrast (a type of dye) is injected to help your IR physician visualize your veins so they know exactly where to embolize (block) the varicocele. Your IR physician does this by placing small coils and/or sclerosants (medicine that is injected directly into your veins which irritates the vein and causes them to become occluded). Once this occurs, the vein is blocked and blood flow is now redirected away from the varicocele, so the varicocele will no longer be able to live.
                </p>


                {/* Button */}
                <div className="mt-12">
                    <button className="bg-[#0E58A8] hover:bg-[#0E58A8] text-white px-8 py-3 rounded-full shadow-xl transition">
              <a href="#form">     Book Appointment</a>
                    </button>
                </div>
            </div>
        </section>
    );
}

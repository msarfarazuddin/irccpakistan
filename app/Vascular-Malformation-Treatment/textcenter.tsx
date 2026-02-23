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
                    How do I find out if I have{" "}
                    <span className="text-[#0E58A8] font-bold">one of these vascular</span> malformations?
                </h5>

                <p className="text-gray-600 max-w-4xl mx-auto mb-5 text-sm md:text-base">
                    These can often be seen on physical examination. Deeper vascular malformations can be diagnosed on MRI (magnetic resonance imaging).
                </p>

                <h4 className="text-black text-[30px]">How are these malformations treated?</h4>

                <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-sm md:text-base">
                    Although surgery is sometimes useful, it is usually difficult for surgeons to completely remove vascular malformations, which will return if not removed completely. A nonsurgical method of closing down the blood or lymph flow into the malformation is done by interventional radiologists, who treat patients with image guided procedures. Vascular malformations are treated by embolization. The AVMs and hemangiomas can be closed by advancing a tiny plastic tubing, no larger than a pencil point, into the feeding artery to the malformation. This can be done without incisions or stitches, and with only mild sedation. Medical glue or alcohol or small beads are then floated into the malformation until it is full and no longer has blood flowing through it. For the VMs and LMs are closed by injecting alcohol into the sacs filled (sclerotherapy) with venous blood or lymph until these sacs collapse and no longer fill .
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

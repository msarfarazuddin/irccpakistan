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
                    How do I know if{" "}
                    <span className="text-[#0E58A8] font-bold">Prostatic Artery Embolization</span> is right for me?
                </h5>

                <p className="text-gray-600 max-w-4xl mx-auto mb-5 text-sm md:text-base">
                    The PAE procedure is for candidates who are either ineligible or not interested in traditional surgery. An exam with an interventional radiologist can determine if you are a candidate for PAE. At this appointment, you may be asked how often you have urinary symptoms of BPH, how severe they are, and how much they affect your quality of life.
                </p>


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

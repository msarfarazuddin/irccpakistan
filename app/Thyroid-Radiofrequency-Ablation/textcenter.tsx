import Image from "next/image";




export default function textcenter() {
    return (
        <section className="bg-white from-gray-100 to-gray-200 py-16 px-4">
            <div className="max-w-[1400px] mx-auto text-center">

                {/* Top Badge */}

                <div className="inline-flex w-fit items-center gap-2 rounded-full shadow-lg border border-[#dce6ff] bg-white px-4 py-2 text-sm font-semibold text-[#0E58A8]">
                    <span className="flex h-6 w-6 items-center font-bold justify-center rounded-full text-[30px]  font-bold text-[#0E58A8]">
                        +
                    </span>
                    <span className="text-[#111111] font-normal">Ablation</span>
                </div>

                {/* Heading */}
                <h5 className="text-3xl text-black md:text-4xl pt-7 mb-4">
                    How can {" "}
                    <span className="text-[#0E58A8] font-bold">Ablation </span>help?
                </h5>

                <p className="text-gray-600 max-w-4xl mx-auto mb-5 text-sm md:text-base">
                    The aim of this treatment is to reduce the size of nodular thyroid tissue in order to relieve pressure symptoms and reduce visible swelling in the neck. Unlike surgical removal, RFA precisely targets only the nodule leaving healthy thyroid tissue intact and preserving normal thyroid function. This is a key advantage over traditional thyroid surgery.
                </p>
                <p className="text-gray-600 max-w-4xl mx-auto mb-5 text-sm md:text-base">For patients dealing with other thyroid-related tumors or nodules, our <a href="/Interventional-Oncology"> Interventional Oncology</a> team provides comprehensive minimally invasive care.</p>

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

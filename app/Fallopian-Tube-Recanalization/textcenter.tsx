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
                    Are you a Candidate for{" "}
                    <span className="text-[#0E58A8] font-bold">Fallopian Tube Recanalization?</span>
                </h5>

                <p className="text-gray-600 max-w-4xl mx-auto mb-5 text-sm md:text-base">
                    If you have been diagnosed with blockages in your fallopian tube and/or have a history of infertility, endometriosis, or are suffering from painful intercourse then you may be a candidate for fallopian tube recanalization. Before you decide on your treatment speak to your IRCC team about all of the treatment options as well as all of your symptoms, including a history of pelvic inflammatory disease, uterine fibroids, tubal or ovarian abscesses, and other pelvic conditions to determine if you are a candidate for fallopian tube recanalization.
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

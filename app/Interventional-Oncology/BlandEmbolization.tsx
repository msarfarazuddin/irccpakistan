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
                <h3 className="text-3xl text-black md:text-4xl pt-7 mb-4">
                    Bland Embolization{" "}
                </h3>

                <p className="text-gray-600 max-w-5xl mx-auto mb-5 text-sm md:text-base">
                    Bland embolization is a minimally invasive treatment for liver cancer or other cancers that have spread to the liver. The procedure uses synthetic material called an embolic agent to block vessels that supply blood to tumors in the liver. It is generally used for tumors that cannot be treated surgically, but it can also be used to stop bleeding prior to cancer surgery.
                </p>


            </div>
        </section>
    );
}

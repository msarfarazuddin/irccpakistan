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
                    Chemoembolization
                </h3>

                <p className="text-gray-600 max-w-4xl mx-auto mb-5 text-sm md:text-base">
                    Chemoembolization directly injects a cancer-fighting drug into the blood vessels feeding a cancerous tumor. Synthetic material called an embolic agent is also placed inside those blood vessels to hold the medication in the tumor. Chemoembolization is most often used to treat liver cancer, but also to treat cancers such as breast cancer and colon cancer that have spread to the liver. It has been used with some success in cancers in other areas of the body.
                </p>

            </div>
        </section>
    );
}

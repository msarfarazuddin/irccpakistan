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
                    Radioembolization{" "}
                </h3>

                <p className="text-gray-600 max-w-5xl mx-auto mb-5 text-sm md:text-base">
                    Radioembolization, also known as selective internal radiation therapy (SIRT), delivers powerful radiation directly to the liver to treat liver tumors. A relatively new, minimally invasive procedure, radioembolization has been shown to help reduce the size of tumors and improve survival time among patients with advanced disease.
                </p>

                <p className="text-gray-600 max-w-5xl mx-auto mb-5 text-sm md:text-base">
                    The procedure is generally reserved for patients whose chemotherapy is no longer working or patients who can no longer tolerate intensive chemotherapy. In some patients, however, combining radioembolization with chemotherapy has produced positive results.
                </p>

            </div>
        </section>
    );
}


export default function textcenter() {
    return (
        <section className="bg-white from-gray-100 to-gray-200  lg:pt-16 lg:pb-1 px-4">
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
                    How is an{" "}
                    <span className="text-[#0E58A8] font-bold">osteoid osteoma</span> treated?
                </h5>

                <p className="text-gray-600 max-w-4xl mx-auto mb-2 text-sm md:text-base">
                    Osteoid osteomas may shrink on their own. But that usually takes years. Some people get pain relief from nonsteroidal anti-inflammatory drugs (NSAIDs).
                </p>

                <p className="text-gray-600 max-w-4xl mx-auto mb-2 text-sm md:text-base">
                    Because osteoid osteomas can be quite painful and take a long time to go away, interventional radiologist often treat them more aggressively.
                </p>

                <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-sm md:text-base">
                    Interventional radiology treatment options include:
                </p>
            </div>
        </section>
    );
}

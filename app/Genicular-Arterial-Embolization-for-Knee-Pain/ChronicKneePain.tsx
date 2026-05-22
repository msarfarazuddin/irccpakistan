import Link from "next/link";

const causes = [
    {
        title: "Post-surgical knee pain",
    },
    {
        title: "Rheumatoid arthritis",
    },
    {
        title: "Chronic synovitis (inflammation of the joint lining)",
    },
    {
        title: "Sports injuries that have not fully healed",
    },
    {
        title: "Previous knee trauma or fractures",
    },
];

export default function ChronicKneePain() {
    return (
        <section className="bg-white from-gray-100 to-gray-200 py-16 px-4">
            <div className="max-w-[1400px] mx-auto text-center">
                <div className="inline-flex w-fit items-center gap-2 rounded-full shadow-lg border border-[#dce6ff] bg-white px-4 py-2 text-sm font-semibold text-[#0E58A8]">
                    <span className="flex h-6 w-6 items-center font-bold justify-center rounded-full text-[30px] font-bold text-[#0E58A8]">
                        +
                    </span>
                    <span className="text-[#111111] font-normal">Knee Pain</span>
                </div>

                <h5 className="text-3xl text-black md:text-4xl pt-7 mb-4">
                    What Causes <span className="text-[#0E58A8] font-bold">Chronic Knee Pain?</span>
                </h5>

                <p className="text-gray-600 max-w-4xl mx-auto mb-5 text-sm md:text-base">
                    Chronic knee pain is most commonly caused by osteoarthritis, a degenerative joint condition in which the cartilage protecting the knee joint gradually breaks down. As cartilage wears away, abnormal new blood vessels grow into the joint lining (synovium), triggering persistent inflammation, swelling, and pain.
                </p>

                <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-sm md:text-base">
                    Other causes of chronic knee pain include:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {causes.map((item, index) => {
                        const isSecondLast = index === causes.length - 2;
                        const isLast = index === causes.length - 1;

                        return (
                            <div
                                key={index}
                                className={`
                bg-white w-full max-w-full mx-auto rounded-xl shadow-xl
                hover:shadow-md transition duration-300 p-4
                ${isSecondLast ? "lg:col-start-2" : ""}
                ${isLast ? "lg:col-start-3" : ""}
            `}
                            >
                                <h3 className="mt-4 text-sm md:text-base font-semibold pl-8 pr-8 text-gray-800 text-center">
                                    {item.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>

                <p className="text-gray-600 max-w-4xl mx-auto mt-5 text-sm md:text-base">
                    Patients experiencing musculoskeletal pain in other areas may also benefit from related minimally invasive treatments at IRCC Pakistan such as{" "}
                    <Link
                        href="/Plantar-Fasciitis"
                        className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                    >
                        Plantar Fasciitis Treatment
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="/Tenosynovitis"
                        className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                    >
                        Tenosynovitis Treatment
                    </Link>
                    .
                </p>

                <div className="mt-12">
                    <button className="bg-[#0E58A8] hover:bg-[#0E58A8] text-white px-8 py-3 rounded-full shadow-xl transition">
                        <a href="#form">Book Appointment</a>
                    </button>
                </div>
            </div>
        </section>
    );
}

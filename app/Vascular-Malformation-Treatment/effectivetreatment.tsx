import Image from "next/image";

export default function FibroidSymptomsSection() {
    return (
        <section className="relative  bg-[#0E58A8E5] from-gray-100 to-gray-200 py-16  px-4"  >
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/banner cand.mp4" type="video/mp4" />
            </video>

            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-[rgba(14,88,168,0.9)]"></div>


            <div className="relative  max-w-[1400px] mx-auto text-center">

                {/* Top Badge */}

                <div className="inline-flex w-fit items-center gap-2 rounded-full shadow-lg border border-[#dce6ff] bg-white px-4 py-2 text-sm font-semibold text-[#0E58A8]">
                    <h2 className="flex h-6 w-6 items-center font-bold justify-center rounded-full text-[30px]  font-bold text-[#0E58A8]">
                        +
                    </h2>
                    <span className="text-[#111111] font-normal">treatment</span>
                </div>

                {/* Heading */}
                <h5 className="text-3xl text-white md:text-4xl pt-7 mb-4">
                    How effective
                    <span className="text-white font-bold"> is the treatment?</span>
                </h5>

                <p className="text-white max-w-4xl mx-auto mb-10 text-sm md:text-base">
                    Arteriovenous malformations are more difficult to treat since they tend to pull in new artery feeders from time to time. However, embolization is very effective in blocking abnormal artery feeders while preserving normal arteries. AVMs may require a series of treatments to block all of the abnormal feeders. Venous and lymphatic malformations respond well to alcohol embolization. These may also require a series of treatments about six weeks apart to block all of the abnormal vessels. All vascular malformations require long term surveillance, so that if there is any change, such as a growth spurt with puberty or pregnancy or menopause, they can be monitored for symptoms that may warrant rechecking and possibly retreating.
                </p>


            </div>
        </section>
    );
}

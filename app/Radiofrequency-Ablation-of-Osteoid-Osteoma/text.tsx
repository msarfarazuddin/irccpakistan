import Image from "next/image";

export default function Varicoceleabout() {
    return (
        <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
            <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                {/* Card */}
                <div className="rounded-2xl bg-[#BFDBEA33] p-5  lg:pb-10 pb-10 sm:p-8 lg:p-10 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Left Image (4/12) */}

                        {/* Right Content (8/12) */}
                        <div className="lg:col-span-12">
                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                Usually, osteoid osteomas are small tumors that measure less than an inch across. They typically form in the long bones, especially the thigh (femur) and shin (tibia) bones. They may also develop in the bones of the spine, arms, hands, fingers, ankles, or feet. They can occur in other bones. But that is much less common.<br></br>
                                Osteoid osteomas tend to be painful. They cause a dull, achy pain that can be moderate to severe. The pain is often worse at night. Osteoid osteomas occur more often in men than in women. They typically occur in children and young adults up to about age 24. But they can occur at any age.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

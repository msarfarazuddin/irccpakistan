import Link from "next/link";

export default function UfeInfoSection() {
    const relatedTreatments = [
        {
            title: "Radiofrequency Ablation of Osteoid Osteoma",
            href: "/Radiofrequency-Ablation-of-Osteoid-Osteoma",
            description: "image-guided ablation for bone tumors",
        },
        {
            title: "Thyroid Radiofrequency Ablation",
            href: "/Thyroid-Radiofrequency-Ablation",
            description: "non-surgical treatment for thyroid nodules",
        },
        {
            title: "Thyroid Artery Embolization",
            href: "/Thyroid-Artery-Embolization",
            description: "minimally invasive thyroid treatment",
        },
        {
            title: "Thyroid Alcohol Cyst Ablation",
            href: "/Thyroid-Alcohol-cyst-ablation",
            description: "targeted cyst treatment without surgery",
        },
        {
            title: "Transjugular Intrahepatic Portosystemic Shunt (TIPS)",
            href: "/Transjugular-Intrahepatic-Portosystemic-Shunt",
            description:
                "for portal hypertension, commonly seen in liver disease and liver cancer patients",
        },
        {
            title: "Vascular Malformation Treatment",
            href: "/Vascular-Malformation-Treatment",
            description: "managing abnormal vascular structures",
        },
        {
            title: "Peripheral Vascular Disease",
            href: "/Peripheral-Vascular-Disease",
            description: "vascular care for circulatory complications",
        },
        {
            title: "Endometriotic Ovarian Cyst Ablation",
            href: "/Endometriotic-Ovarian-Cyst-Ablation",
            description: "for gynecological tumor-like cysts",
        },
    ];

    return (


        <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
            <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                {/* Card */}
                <div className="rounded-2xl bg-[#BFDBEA33] p-5   pb-10 sm:p-8 lg:p-10 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                        {/* Right Content (8/12) */}
                        <div className="lg:col-span-12">
                            <h4 className="text-[22px] sm:text-[35px] text-[30px] lg:text-[45px]  leading-tight text-slate-900">
                                How does the {" "}
                                <span className="text-[#0b4aa2] font-extrabold">procedure work?</span>
                            </h4>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                Using X-ray imaging guidance, your interventional radiologist will insert a catheter through the skin into a blood vessel in the leg. The catheter is advanced to arteries in the liver. The embolic agent is then inserted through the catheter and positioned within the vessels that supply blood to tumors. This permanently cuts off the blood supply feeding the tumors.
                            </p>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                During the procedure, you are given medication to relax as well as a local anesthetic to numb the area where the catheter is inserted. The procedure varies in time depending on the complexity of your condition, but most patients go home the same day.
                            </p>

                            <h5 className="mt-8 text-[22px] font-semibold leading-tight text-slate-900 sm:text-[28px]">
                                Related <span className="text-[#0b4aa2]">Minimally Invasive Treatments</span> at IRCC Pakistan
                            </h5>

                            <p className="mt-4 text-[16px] leading-relaxed text-slate-700">
                                Cancer care often requires a comprehensive, multidisciplinary approach. Depending on your condition, you may also benefit from:
                            </p>

                            <ul className="mt-5 space-y-3 text-[16px] leading-relaxed text-slate-700">
                                {relatedTreatments.map((treatment) => (
                                    <li key={treatment.href} className="flex items-start gap-3">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-[#0b4aa2]" aria-hidden="true" />
                                        <span>
                                            <Link
                                                href={treatment.href}
                                                className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                                            >
                                                {treatment.title}
                                            </Link>{" "}
                                            - {treatment.description}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import Image from "next/image";

type ChooseCard = {
    title: string;
    desc: string;
    icon: React.ReactNode; // SVG/JSX icon
    href?: string;
};



function ArrowIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
        </svg>
    );
}

/** Simple inline icons (aap apne SVGs replace kar sakte ho) */
function ThyroidIcon() {
    return (
        <div className="relative h-7 w-7">
            <Image
                src="/Vector.png"   // 👈 apni image ka path
                alt="Pleural Management Icon"
                fill
                className="object-contain"
            />
        </div>
    );
}

function MSKIcon() {
    return (
        <div className="relative h-7 w-7">
            <Image
                src="/Frame.png"   // 👈 apni image ka path
                alt="Pleural Management Icon"
                fill
                className="object-contain"
            />
        </div>
    );
}

function PleuralIcon() {
    return (
        <div className="relative h-7 w-7">
            <Image
                src="/Frame (1).png"   // 👈 apni image ka path
                alt="Pleural Management Icon"
                fill
                className="object-contain"
            />
        </div>
    );
}

function ChooseCardItem({ title, desc, icon, href = "#" }: ChooseCard) {
    return (
        <div className="rounded-2xl bg-white p-6 lg:pt-5 lg:pb-5 text-center shadow-[0_18px_35px_rgba(10,20,40,0.10)] ring-1 ring-black/5 sm:p-8">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[#BFD9FF] bg-white">
                {icon}
            </div>

            <h3 className="text-lg  font-semibold text-[#111111] sm:text-xl">{title}</h3>

            <p className="mx-auto mt-2 max-w-full text-sm leading-5 text-[#111111]">
                {desc}
            </p>

            <a
                href={href}
                className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full bg-[#0E58A8] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#0E58A8]"
            >
                Know More <ArrowIcon />
            </a>
        </div>
    );
}

export default function WhyChooseSection() {
    const cards: ChooseCard[] = [
        {
            title: "Thyroid Interventions",
            desc: "Our Interventional Radiologists are trained in the West and have qualifications from globally recognized academies.",
            icon: <ThyroidIcon />,
            href: "#",
        },
        {
            title: "MSK Interventions",
            desc: "We specialize in a wide array of musculoskeletal interventional radiology services.",
            icon: <MSKIcon />,
            href: "#",
        },
        {
            title: "Pleural Management",
            desc: "Our Pleural Management specialists are trained in leading institutions worldwide, ensuring top-notch care.",
            icon: <PleuralIcon />,
            href: "#",
        },
    ];

    return (
        <section className="relative w-full overflow-hidden">
            {/* Background (soft blue + vignette) */}
            <div className="absolute inset-0 bg-[#E6F6FE]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#e6f6fea8,#ffffff00_60%)]" />

            <div className="relative mx-auto w-full max-w-full px-4 py-12 sm:px-6 lg:px-10">
                <div className="text-center">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full shadow-lg border border-[#dce6ff] bg-white px-4 py-2 text-sm font-semibold text-[#0E58A8]">
                        <h2 className="flex h-6 w-6 items-center font-bold justify-center rounded-full text-[30px]  font-bold text-[#0E58A8]">
                            +
                        </h2>
                        <span className="text-[#111111] font-normal">See The Difference</span>
                    </div>
                    <h4 className="mt-5 text-3xl lg:text-4xl tracking-tight text-[#0B1220] sm:text-4xl">
                        Why <span className="text-[#0E58A8] font-semibold">Choose Us</span>
                    </h4>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {cards.map((c) => (
                        <ChooseCardItem key={c.title} {...c} />
                    ))}
                </div>
            </div>
        </section>
    );
}

import Link from "next/link";
import type { ReactNode } from "react";

type Symptom = {
    title: ReactNode;
    img: string;
};

const symptoms: Symptom[] = [
    {
        title: "Painful menstrual periods",
        img: "/one1.png",
    },
    {
        title: "Pain during or after sexual intercourse",
        img: "/two2.png",
    },
    {
        title: "Frequent urination due to bladder pressure.",
        img: "/three.png",
    },
    {
        title: "Abnormal menstrual cycle",
        img: "/four.png",
    },
    {
        title: (
            <>
                Acute or severe pelvic pain, also commonly seen in{" "}
                <Link
                    href="/Pelvic-Congestion-Syndrome-Treatment"
                    className="text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                >
                    Pelvic Congestion Syndrome
                </Link>
                , a separate but related condition affecting women
            </>
        ),
        img: "/five.png",
    },
    {
        title: "Bloating",
        img: "/four.png",
    },
];

export default function FibroidSymptomsSection() {
    return (
        <section className="bg-white from-gray-100 to-gray-200 py-16 px-5">
            <div className="max-w-[1400px] mx-auto text-center">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#dce6ff] bg-white px-4 py-2 text-sm font-semibold text-[#0E58A8] shadow-lg">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full text-[30px] font-bold text-[#0E58A8]">
                        +
                    </span>
                    <span className="font-normal text-[#111111]">Symptoms</span>
                </div>

                <h5 className="pt-7 mb-4 text-3xl text-black md:text-4xl">
                    What are Symptoms of{" "}
                    <span className="font-bold text-[#0E58A8]">Uterine Fibroids?</span>
                </h5>

                <p className="mx-auto mb-10 max-w-4xl text-sm text-gray-600 md:text-base">
                    In some women, fibroids can produce mild or no symptoms at all. For others, symptoms of uterine fibroids include considerable pain and heavy bleeding. For these reasons alone, treating uterine fibroids is a priority for most women seeking symptomatic relief.
                </p>

                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#dce6ff] bg-white px-4 py-2 text-sm font-semibold text-[#0E58A8] shadow-lg">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full text-[30px] font-bold text-[#0E58A8]">
                        +
                    </span>
                    <span className="font-normal text-[#111111]">Other symptoms</span>
                </div>

                <h4 className="pt-7 mb-10 text-2xl font-semibold text-black md:text-3xl">
                    Other symptoms include:
                </h4>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {symptoms.map((item, index) => {
                        const isSecondLast = index === symptoms.length - 2;
                        const isLast = index === symptoms.length - 1;

                        return (
                            <div
                                key={index}
                                className={`
                bg-white w-full max-w-[320px] mx-auto rounded-xl shadow-xl
                hover:shadow-md transition duration-300 p-4
                ${isSecondLast ? "lg:col-start-2" : ""}
                ${isLast ? "lg:col-start-3" : ""}
            `}
                            >
                                <h3 className="mt-4 pl-15 pr-15 text-center text-sm font-semibold text-gray-800 md:text-base">
                                    {item.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12">
                    <button className="rounded-full bg-[#0E58A8] px-8 py-3 text-white shadow-xl transition hover:bg-[#0E58A8]">
                        <a href="#form">   Book Appointment</a>
                    </button>
                </div>
            </div>
        </section>
    );
}

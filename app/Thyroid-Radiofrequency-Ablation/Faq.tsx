"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";

type Faq = {
  q: string;
  a: ReactNode;
};

function ArrowIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
        </svg>
    );
}


export default function FaqSection() {
  const faqs = useMemo<Faq[]>(
    () => [
      {
        q: "What is Thyroid Radiofrequency Ablation (RFA)?",
        a: "Thyroid RFA is a minimally invasive, non-surgical procedure in which radiofrequency energy is used to heat and shrink benign thyroid nodules. It is performed under local anesthesia using ultrasound guidance, no surgery, no scars, no hospital admission required.",
      },
      {
        q: "Is Thyroid RFA painful? ",
        a: "No. The procedure is performed under local anesthesia so you will feel little to no pain. Most patients only feel mild pressure or pushing in the neck area during the procedure. Any mild discomfort after the procedure typically resolves within a few hours.",
      },
      {
        q: "How long does the Thyroid RFA procedure take?",
        a: "Within the first month, patients can expect a 40–60% reduction in nodule size. Maximum reduction is achieved at 6 months post-procedure. Some patients with larger nodules may require more than one session for optimal results.",
      },
      {
        q: "Will Thyroid RFA affect my thyroid hormone levels?",
        a: "No. Unlike surgery, Thyroid RFA precisely targets only the nodule while leaving surrounding healthy thyroid tissue intact. This means your normal thyroid function is preserved and hormone levels remain unaffected in most cases.",
      },
      {
        q: "Is Thyroid RFA safe? Are there any risks?",
        a: "Thyroid RFA is a well-established, globally practiced procedure with an excellent safety record. Possible but rare side effects include temporary voice change, mild neck pain, or skin redness at the treatment site. Your IRCC physician will discuss all risks with you before the procedure.",
      },
      {
        q: "How is Thyroid RFA different from thyroid surgery? ",
        a: "Thyroid surgery requires general anesthesia, a surgical incision in the neck, hospital stay, and carries risks such as permanent voice changes or damage to parathyroid glands. Thyroid RFA requires none of these it is scarless, performed under local anesthesia, and patients go home within 30 minutes.",
      },
      {
        q: "Can thyroid nodules come back after RFA? ",
        a: "Treated nodules continue to shrink after RFA and rarely regrow. However, new nodules can develop in the thyroid gland over time. Regular ultrasound follow-ups are recommended to monitor thyroid health.",
      },
      {
        q: "Who is NOT a suitable candidate for Thyroid RFA? ",
        a: "Thyroid RFA is not suitable for patients with malignant (cancerous) thyroid nodules, patients who are pregnant, or those with certain anatomical challenges. A thorough evaluation including biopsy confirmation of the benign nodule is required before proceeding.",
      },
      {
        q: "What is the difference between Thyroid RFA and Thyroid Alcohol Cyst Ablation?",
        a: (
        <>
            Thyroid RFA uses radiofrequency energy and is best suited for solid benign thyroid nodules.{" "}
            <Link href="/Thyroid-Alcohol-cyst-ablation"
              className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]" >
              Thyroid Alcohol Cyst Ablation
            </Link>{" "}
            uses ethanol injection and is more suitable for fluid-filled thyroid cysts. Our IRCC team will evaluate your nodule type and recommend the most appropriate treatment.
          </>
        ),
      },
      {
        q: "Is Thyroid RFA available in Pakistan? ",
        a: (
        <>
            Yes. IRCC Pakistan is one of the leading centres offering Thyroid Radiofrequency Ablation performed by expert interventional radiologists.{" "}
            <Link href="/get-consultation"
              className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]" >
              Book an appointment
            </Link>{" "}
            today for a consultation.
          </>
        ),
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="relative w-full overflow-hidden bg-white py-16  bg-center bg-no-repeat" style={{ backgroundImage: "url('/faq.png')" }}>
      {/* soft wave background */}
      {/* <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-44 h-72 w-[520px] rounded-[999px] bg-[#0E58A8]/6 blur-[1px]" />
        <div className="absolute -right-32 top-28 h-80 w-[560px] rounded-[999px] bg-[#0E58A8]/6 blur-[1px]" />
        <div className="absolute left-1/2 top-[520px] h-72 w-[760px] -translate-x-1/2 rounded-[999px] bg-[#0E58A8]/5 blur-[1px]" />
      </div> */}

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="text-center">
          <h4 className="text-3xl lg:text-4xl tracking-tight text-[#0B1220] sm:text-4xl">
            Frequently <span className="font-semibold text-[#0E58A8]">Asked Questions</span>
          </h4>
        </div>

        {/* accordion */}
        <div className="mx-auto mt-10 max-w-4xl">
          <div className="rounded-3xl  p-3 ">
            <div className="space-y-3">
              {faqs.map((item, idx) => {
                const isOpen = idx === openIndex;

                return (
                  <div
                    key={item.q}
                    className={[
                      "rounded-2xl border bg-white transition shadow-[0_25px_70px_rgba(0,0,0,0.08)]",
                      isOpen
                        ? "border-[#0E58A8]/25 "
                        : "border-[#0E58A8]/15",
                    ].join(" ")}
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    >
                      <span className="text-base mobilew text-[#0E58A8] sm:text-lg">
                        {item.q}
                      </span>

                      <span
                        className={[
                          "inline-flex h-11 w-11 items-center justify-center rounded-full border transition ",
                          isOpen
                            ? "border-[#0E58A8]/15 bg-[#0E58A8] text-[#ffffff]"
                            : "border-[#0E58A8]/15  text-[#0E58A8]",
                        ].join(" ")}
                        aria-hidden="true"
                      >
                        {isOpen ? (
                          // minus
                          <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          >
                            <path d="M12 6v12" />
                            <path d="M6 12h12" />
                          </svg>
                         
                        ) : (
                          // plus
                           <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          >
                            <path d="M6 12h12" />
                          </svg>
                        )}
                      </span>
                    </button>

                    {/* answer */}
                    <div
                      className={[
                        "grid overflow-hidden px-6 transition-[grid-template-rows,opacity] duration-300",
                        isOpen
                          ? "grid-rows-[1fr] pb-5 opacity-100"
                          : "grid-rows-[0fr] pb-0 opacity-0",
                      ].join(" ")}
                    >
                      <div className="min-h-0">
                        <p className="text-sm leading-6 text-[#5B6577] sm:text-[15px]">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-10 flex justify-center pb-2">
               <a
                href={""}
                className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full bg-[#0E58A8] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#0E58A8]"
            >
                Know More <ArrowIcon />
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

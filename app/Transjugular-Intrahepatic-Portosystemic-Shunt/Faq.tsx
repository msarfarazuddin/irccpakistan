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
        q: "What does TIPS stand for and what is it used for? ",
        a: "TIPS stands for Transjugular Intrahepatic Portosystemic Shunt. It is a minimally invasive procedure used to treat complications of portal hypertension primarily variceal bleeding and ascites in patients with liver cirrhosis or significant liver scarring.",
      },
      {
        q: "Is the TIPS procedure painful? ",
        a: "No. The procedure is performed under conscious sedation and local anesthesia. Most patients feel little to no pain during the procedure. Mild discomfort in the neck or abdomen may be experienced for a few days afterward, which resolves on its own.",
      },
      {
        q: "How long does the TIPS procedure take? ",
        a: "The TIPS procedure typically takes 2 to 3 hours, though it may take longer depending on the complexity of the patient's anatomy and condition.",
      },
      {
        q: "How effective is TIPS for stopping variceal bleeding?",
        a: "TIPS is highly effective  80 to 90% of patients do not experience any further variceal bleeding after the procedure. It is considered one of the most reliable interventional options for managing this life-threatening complication.",
      },
      {
        q: "How effective is TIPS for treating ascites? ",
        a: "Approximately 65% of patients see their abdominal fluid (ascites) reduce significantly or resolve completely within about 1 month following the TIPS procedure.",
      },
      {
        q: "Does TIPS cure liver disease or cirrhosis? ",
        a: "No. TIPS manages the complications of portal hypertension but does not restore or improve liver function itself. The only long-term cure for portal hypertension caused by cirrhosis is a liver transplant. TIPS can be used as a bridging procedure while awaiting transplant.",
      },
      {
        q: "Can I still get a liver transplant after having TIPS?",
        a: "Yes. TIPS does not prevent you from receiving a liver transplant in the future. In fact, TIPS is often performed specifically as a bridge to liver transplant helping manage dangerous complications while the patient awaits a suitable donor.",
      },
      {
        q: "What are the risks of the TIPS procedure? ",
        a: "Possible risks include hepatic encephalopathy (confusion caused by toxins not being filtered by the liver), stent narrowing over time, infection, or bleeding at the catheter entry site. Your IRCC interventional radiologist will discuss all risks in detail before the procedure.",
      },
       {
        q: "How soon will I feel better after TIPS? ",
        a: "Improvement in variceal bleeding risk is seen almost immediately after the procedure. For ascites, most patients notice significant improvement within 2–4 weeks. Regular follow-up with Doppler ultrasound imaging is required to monitor shunt function.",
      },
      {
        q: "Is the TIPS procedure available in Pakistan?",
        a: (
        <>
            Yes. IRCC Pakistan offers the TIPS procedure performed by expert interventional radiologists using advanced imaging guidance.{" "}
            <Link href="/get-consultation"
              className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]" >
              Book an appointment
            </Link>{" "}
            today to discuss whether TIPS is the right treatment option for you.
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

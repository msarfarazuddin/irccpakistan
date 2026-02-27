"use client";

import * as React from "react";

type Faq = { q: string; a: string };

const faqs: Faq[] = [
  {
    q: "What is the difference between minimally invasive procedures and surgery?",
    a: "Minimally invasive procedures allow your physicians to use techniques that without any cuts or incisions, utilizing minimally-invasive image-guided techniques to diagnose and treat diseases in nearly every organ system.",
  },
  {
    q: "What are the advantages of minimally invasive procedures?",
    a: "No incision Short procedure time Faster recovery No hospital stay Less pain No General anesthesia",
  },
  {
    q: "What investigations required before consultations?",
    a: "MRI pelvis with contrast for fibroids HSG for fallopian tube recanalization Doppler ultrasound and semen analysis for varicocele CT lower extremity venogram for DVT Required all previous investigations or medical record",
  },
  {
    q: "What are the possible risks?",
    a: "Small risks may include bleeding or infection. However, our interventional radiologists use the latest technology and advanced imaging to reduce these risks as much as possible.",
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-8 w-8 text-[#1F6BFF] transition-transform sm:h-7 sm:w-7 ${open ? "rotate-180" : "rotate-0"}`}
      fill="none"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-md bg-white shadow-sm ring-1 ring-black/5">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-8 py-6 pb-0 text-left"
      >
        <span className="text-[18px] font-semibold leading-snug text-[#0E58A8] ">{q}</span>
        <Chevron open={isOpen} />
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden px-8 pb-6">
          <p className="text-[16px] leading-7 text-gray-600 pt-3">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  // 1 open at a time (nice UX). If you want multiple open, change this to Set.
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  // split into 2 columns like screenshot
  const left = [faqs[0], faqs[2]];
  const right = [faqs[1], faqs[3]];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="text-center text-3xl font-semibold tracking-wide text-[#2B2B2B] sm:text-[44px]">
          FAQ&apos;s
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:gap-10 lg:grid-cols-2">
          {/* Left column */}
          <div className="space-y-5">
            {left.map((item) => {
              const idx = faqs.findIndex((f) => f.q === item.q);
              return (
                <FaqItem
                  key={item.q}
                  q={item.q}
                  a={item.a}
                  isOpen={openIndex === idx}
                  onToggle={() => setOpenIndex((p) => (p === idx ? null : idx))}
                />
              );
            })}
          </div>

          {/* Right column */}
          <div className="space-y-5">
            {right.map((item) => {
              const idx = faqs.findIndex((f) => f.q === item.q);
              return (
                <FaqItem
                  key={item.q}
                  q={item.q}
                  a={item.a}
                  isOpen={openIndex === idx}
                  onToggle={() => setOpenIndex((p) => (p === idx ? null : idx))}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import {
  FiAward,
  FiChevronRight,
  FiClipboard,
  FiFileText,
  FiHeadphones,
  FiHeart,
  FiMapPin,
  FiMessageCircle,
  FiPlusSquare,
  FiShield,
  FiUsers,
} from "react-icons/fi";

const patientJourneySteps = [
  {
    number: "01",
    title: "Initial Inquiry",
    icon: FiMessageCircle,
    preview:
      "Contact IRCC from the UAE through WhatsApp, phone or the online consultation form.",
    detail:
      "Tell the team about your condition, previous diagnosis and the treatment you are considering.",
    label: "Start Remotely",
  },
  {
    number: "02",
    title: "Share  Reports",
    icon: FiFileText,
    preview:
      "Send relevant medical records, imaging reports, laboratory results and previous consultation notes.",
    detail:
      "The more complete the information, the easier it may be for the specialist team to understand your case.",
    label: "Reports & Imaging",
  },
  {
    number: "03",
    title: "Specialist Review",
    icon: FiUsers,
    preview:
      "The IRCC team reviews the information provided and checks whether the case may be suitable.",
    detail:
      "Additional information may be requested where necessary for an interventional radiology consultation or procedure.",
    label: "Expert Review",
  },
  {
    number: "04",
    title: "Treatment Planning",
    icon: FiClipboard,
    preview:
      "If treatment is considered appropriate, the team can discuss the proposed procedure and preparation.",
    detail:
      "Treatment decisions remain dependent on an in-person clinical assessment where required.",
    label: "Clear Planning",
  },
  {
    number: "05",
    title: "Travel to Pakistan",
    icon: FiMapPin,
    preview:
      "Once the treatment pathway is understood, the patient can arrange travel and accommodation.",
    detail:
      "Patients should independently confirm applicable travel, visa and entry requirements before travelling.",
    label: "Travel Ready",
  },
  {
    number: "06",
    title: "Treatment",
    icon: FiPlusSquare,
    preview:
      "After consultation and assessment, the appropriate procedure can be performed where suitable.",
    detail:
      "The type of anaesthesia, duration, recovery and discharge arrangements depend on the specific treatment.",
    label: "Procedure Day",
  },
  {
    number: "07",
    title: "Follow-Up Care",
    icon: FiHeart,
    preview:
      "Follow-up requirements vary by procedure and individual patient after treatment.",
    detail:
      "The IRCC team can explain what follow-up is recommended and what information should be monitored after treatment.",
    label: "Recovery Support",
  },
] as const;

const supportPoints = [
  {
    title: "Your health and privacy are our top priorities.",
    description:
      "All information shared with IRCC is kept secure and confidential.",
    icon: FiShield,
  },
  {
    title: "24/7 Support",
    description: "We're here to help you at every step.",
    icon: FiHeadphones,
  },
  {
    title: "Dedicated Care Team",
    description: "A team that understands international patient needs.",
    icon: FiUsers,
  },
  {
    title: "International Standards",
    description: "Care that meets global quality benchmarks.",
    icon: FiAward,
  },
] as const;

export default function PatientJourneySection() {
  const [expandedStep, setExpandedStep] = useState<string | null>(null);

  return (
    <section className="bg-[linear-gradient(180deg,#f7fbfc_0%,#ffffff_100%)] py-14 [font-family:var(--font-neue-montreal),var(--font-geist-sans),Arial,Helvetica,sans-serif] sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0e58a8]">
            Patient Journey
          </span>
          <h2 className="mt-4 text-[28px] leading-tight text-[#0d1728] sm:text-4xl lg:text-[52px]">
            How UAE Patients Can Get Treatment at{" "}
            <span className="text-[#0e58a8]">IRCC Pakistan</span>
          </h2>
          <div className="mx-auto mt-5 h-px w-24 bg-[#93c5fd]" />
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#49607a] sm:text-lg">
            A simple, transparent process designed to provide world-class care
            for patients travelling from the UAE.
          </p>
        </div>

        <div className="mt-12 hidden items-center lg:flex">
          {patientJourneySteps.map((step, index) => (
            <div key={step.number} className="flex min-w-0 flex-1 items-center">
              <div className="h-px flex-1 border-t border-dashed border-[#bfdbfe]" />
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0e58a8] text-lg font-semibold text-white">
                {index + 1}
              </div>
              {index < patientJourneySteps.length - 1 ? (
                <>
                  <div className="mx-3 h-px flex-1 border-t border-dashed border-[#bfdbfe]" />
                  <FiChevronRight className="mr-3 h-5 w-5 shrink-0 text-[#0e58a8]" />
                </>
              ) : (
                <div className="h-px flex-1 border-t border-dashed border-[#bfdbfe]" />
              )}
            </div>
          ))}
        </div>

        <div className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:overflow-visible lg:px-0 lg:pb-0 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-7">
          {patientJourneySteps.map((step) => {
            const Icon = step.icon;
            const isExpanded = expandedStep === step.number;

            return (
              <article
                key={step.number}
                className="flex min-h-[344px] w-[88vw] min-w-[88vw] snap-center flex-col items-center rounded-[24px] border border-[#dbeafe] bg-white px-5 pb-4 pt-6 text-center sm:w-[420px] sm:min-w-[420px] lg:min-w-0 lg:w-auto"
              >
                <div className="mt-1 flex h-[86px] w-[86px] items-center justify-center rounded-full bg-[#eff6ff] text-[#0e58a8]">
                  <Icon className="h-9 w-9" />
                </div>

                <h3 className="mt-5 text-[16px] font-medium leading-7 text-[#0d1728]">
                  {step.title}
                </h3>
                <div className="mt-3 h-0.5 w-11 rounded-full bg-[#94cdc7]" />

                <div className="mt-4 flex flex-1 flex-col items-center">
                  <p className="w-full text-[13px] font-normal leading-6 text-[#4b617a] lg:max-w-[18ch]">
                    {step.preview}
                  </p>

                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ${
                      isExpanded
                        ? "mt-3 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="w-full text-[13px] font-normal leading-6 text-[#4b617a] lg:max-w-[18ch]">
                        {step.detail}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setExpandedStep((current) =>
                        current === step.number ? null : step.number
                      )
                    }
                    className="mt-3 text-[13px] font-semibold text-[#0e58a8] transition hover:text-[#0b4a8d]"
                  >
                    {isExpanded ? "Read less" : "Read more"}
                  </button>
                </div>

                <div className="mt-4 flex w-full items-center justify-center gap-2 rounded-[16px] bg-[#f5f9ff] px-3 py-3 text-[12px] font-semibold text-[#0e58a8]">
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{step.label}</span>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-4 text-center text-[13px] leading-6 text-[#5b6f88] lg:hidden">
          Swipe left or right to view all steps.
        </p>

        <div className="mt-10 grid gap-4 rounded-[30px] border border-[#dbeafe] bg-white p-5 sm:p-6 lg:grid-cols-4">
          {supportPoints.map((point) => {
            const Icon = point.icon;

            return (
              <div
                key={point.title}
                className="flex h-full min-w-0 items-start gap-4 rounded-[24px] border border-[#dbeafe] bg-[#f8fbff] p-4"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eff6ff] text-[#0e58a8]">
                  <Icon className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-lg leading-7 text-[#0d1728]">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#4b617a]">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

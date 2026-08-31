"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FiCheckCircle,
  FiChevronDown,
  FiMap,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiShield,
} from "react-icons/fi";

const locations = [
  {
    title: "Karachi",
    cardTitle: "Minimally invasive treatment in Karachi",
    description:
      "Patients travelling from Qatar can plan minimally invasive treatment and interventional radiology care in Karachi.",
    image: "/karachi.jpg",
    href: "/minimally-invasive-treatment-karachi",
  },
  {
    title: "Lahore",
    cardTitle: "Interventional radiology in Lahore",
    description:
      "Patients travelling from Qatar can plan interventional radiology and image-guided treatment services in Lahore.",
    image: "/lahore.jpg",
    href: "/interventional-radiology-lahore",
  },
  {
    title: "Islamabad",
    cardTitle: "Non-surgical treatment options in Islamabad",
    description:
      "Patients travelling from Qatar can plan non-surgical and minimally invasive treatment options in Islamabad.",
    image: "/islmabad.webp",
    href: "/non-surgical-treatment-islamabad",
  },
] as const;

const travelReasons = [
  "Discuss your case with a specialist before making travel arrangements.",
  "Send current imaging and medical reports for assessment.",
  "Ask what investigations are required before the procedure.",
  "Confirm the expected treatment timeline and follow-up plan.",
  "Confirm the final cost directly with IRCC before travel.",
] as const;

const faqs = [
  {
    question: "Can patients from Qatar get medical treatment in Pakistan?",
    answer:
      "Yes. Patients living in Qatar can contact IRCC Pakistan for a case review. The clinical team can assess the available medical information and advise whether an IRCC procedure may be appropriate.",
  },
  {
    question: "Do I need to travel to Pakistan for the first consultation?",
    answer:
      "Not necessarily. Patients can submit medical reports for an initial case review before making travel arrangements. If an in-person assessment is required, the team can guide you.",
  },
  {
    question: "Can non-Pakistani residents from Qatar receive treatment at IRCC?",
    answer:
      "Yes. The page is intended for Qatari nationals, expatriates, Overseas Pakistanis and other international residents. Eligibility and treatment suitability are assessed case by case.",
  },
  {
    question: "How long should I plan to stay in Pakistan for treatment?",
    answer:
      "The required stay depends on the procedure, investigations, recovery and follow-up requirements. A more specific timeline can be discussed after case review.",
  },
  {
    question: "Can I send my medical reports from Qatar?",
    answer:
      "Yes. Relevant reports, scans and previous treatment information can be shared for specialist review before travel.",
  },
  {
    question: "Where can Qatar patients receive treatment in Pakistan?",
    answer:
      "IRCC provides treatment services in Karachi, Lahore and Islamabad. The appropriate location depends on the procedure and clinical plan.",
  },
  {
    question: "How much does treatment in Pakistan cost for Qatar patients?",
    answer:
      "Costs vary by procedure and patient. IRCC should provide a case-specific estimate after reviewing the diagnosis, reports, investigations and treatment requirements.",
  },
  {
    question: "Can someone accompany me from Qatar?",
    answer:
      "Patients may travel with a family member or companion when appropriate. Practical arrangements should be discussed with the IRCC team before travel.",
  },
  {
    question: "Will I receive follow-up after returning to Qatar?",
    answer:
      "Follow-up requirements depend on the procedure. The treating team can provide post-treatment instructions and advise how follow-up should be coordinated after you return to Qatar.",
  },
  {
    question: "How do I start treatment planning from Qatar?",
    answer:
      "Contact IRCC, share your medical reports and explain the treatment you are considering. The team can then guide you through case review and next steps.",
  },
] as const;

const faqColumns = [
  faqs.filter((_, index) => index % 2 === 0),
  faqs.filter((_, index) => index % 2 === 1),
] as const;

const contactOptions = [
  {
    title: "WhatsApp Us",
    detail: "Quick Response",
    icon: FiMessageCircle,
    href: "https://wa.me/923310232883",
  },
  {
    title: "+92-3310232883",
    detail: "Mon - Sat, 9AM - 6PM (PKT)",
    icon: FiPhone,
    href: "tel:+923310232883",
  },
  {
    title: "Contact IRCC",
    detail: "Talk with our team",
    icon: FiShield,
    href: "/Contact",
  },
] as const;

export default function LocationsFaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfd_100%)] py-14 [font-family:var(--font-neue-montreal),var(--font-geist-sans),Arial,Helvetica,sans-serif] sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-5 xl:grid-cols-[1.45fr_1fr] xl:items-stretch">
          <div className="rounded-[28px] border border-[#deeaec] bg-white p-5 shadow-[0_18px_50px_rgba(15,71,91,0.05)] sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eff6ff] text-[#0e58a8]">
                <FiMapPin className="h-6 w-6" />
              </span>
              <h2 className="text-[22px] leading-tight text-[#0d1728] sm:text-[30px]">
                IRCC Treatment Locations in Pakistan
              </h2>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {locations.map((location) => (
                <article
                  key={location.title}
                  className="flex h-full min-w-0 flex-col overflow-hidden rounded-[22px] border border-[#e1ebed] bg-white shadow-[0_12px_35px_rgba(15,71,91,0.05)]"
                >
                  <div className="relative h-[200px] overflow-hidden sm:h-[220px]">
                    <Image
                      src={location.image}
                      alt={location.cardTitle}
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <div className="flex items-start gap-2">
                      <FiMapPin className="mt-1 h-5 w-5 shrink-0 text-[#0e58a8]" />
                      <div>
                        <h3 className="text-[18px] leading-6 text-[#0d1728]">
                          {location.cardTitle}
                        </h3>
                        <p className="mt-2 text-[15px] leading-7 text-[#455d75]">
                          {location.description}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={location.href}
                      className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-[#0e58a8] transition hover:text-[#0b4a8d]"
                    >
                      Explore {location.cardTitle}
                      <span aria-hidden="true">{"->"}</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <Link
                href="/Clinic"
                className="inline-flex items-center gap-3 rounded-[16px] bg-[linear-gradient(90deg,#0e58a8_0%,#0b4a8d_100%)] px-6 py-4 text-[16px] font-semibold text-white transition hover:opacity-95"
              >
                <FiMap className="h-5 w-5" />
                Learn More About Our Locations
              </Link>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#deeaec] bg-white p-5 shadow-[0_18px_50px_rgba(15,71,91,0.05)] sm:p-6">
            <div className="flex items-start gap-3">
              <span className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-[#eff6ff] text-[#0e58a8]">
                <FiCheckCircle className="h-6 w-6" />
              </span>
              <h2 className="text-[22px] leading-tight text-[#0d1728] sm:text-[30px]">
                Why Travel from Qatar to Pakistan for Treatment?
              </h2>
            </div>

            <p className="mt-4 text-[15px] leading-7 text-[#455d75]">
              Choosing treatment outside Qatar is a personal medical decision.
              Patients may consider Pakistan when they are looking for a
              particular specialist, a minimally invasive treatment option,
              access to a procedure, or a treatment plan that fits their
              personal circumstances.
            </p>

            <div className="mt-6 divide-y divide-[#e6efef]">
              {travelReasons.map((reason) => (
                <div key={reason} className="flex items-center gap-4 py-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#0e58a8]">
                    <FiCheckCircle className="h-6 w-6" />
                  </span>
                  <p className="text-[17px] leading-7 text-[#23384f]">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-[28px] border border-[#deeaec] bg-white p-5 shadow-[0_18px_50px_rgba(15,71,91,0.05)] sm:mt-6 sm:p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eff6ff] text-[#0e58a8]">
              <FiMessageCircle className="h-6 w-6" />
            </span>
            <h2 className="text-[22px] leading-tight text-[#0d1728] sm:text-[30px]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-5 grid gap-3 xl:grid-cols-2 xl:gap-4 xl:items-start">
            {faqColumns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-3 xl:space-y-4">
                {column.map((item, itemIndex) => {
                  const index =
                    columnIndex === 0 ? itemIndex * 2 : itemIndex * 2 + 1;
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={item.question}
                      className={`min-w-0 overflow-hidden rounded-[16px] border bg-[linear-gradient(180deg,#ffffff_0%,#fbfefe_100%)] shadow-[0_8px_20px_rgba(15,71,91,0.035)] transition-[border-color,box-shadow,transform] duration-300 ease-out ${
                        isOpen
                          ? "border-[#bfdbfe] shadow-[0_14px_34px_rgba(15,71,91,0.07)]"
                          : "border-[#ddeaea]"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors duration-300 ease-out hover:bg-[#f8fbff] sm:px-5"
                      >
                        <span className="text-[15px] leading-7 text-[#0d1728] sm:text-[16px]">
                          {item.question}
                        </span>
                        <FiChevronDown
                          className={`h-5 w-5 shrink-0 text-[#0e58a8] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-[max-height,opacity,padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isOpen
                            ? "max-h-[420px] px-4 pb-4 opacity-100 sm:px-5"
                            : "max-h-0 px-4 pb-0 opacity-0 sm:px-5"
                        }`}
                      >
                        <div
                          className={`transition-[border-color,padding,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            isOpen
                              ? "translate-y-0 border-t border-[#dbeafe] pt-3"
                              : "-translate-y-1 border-t border-transparent pt-0"
                          }`}
                        >
                          <p
                            className={`text-[14px] leading-7 text-[#455d75] transition-opacity duration-300 ease-out sm:text-[15px] ${
                              isOpen ? "opacity-100 delay-75" : "opacity-0"
                            }`}
                          >
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[22px] border border-[#dbeafe] bg-[linear-gradient(180deg,#f8fbff_0%,#f5f9ff_100%)] p-4 sm:p-5">
            <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:items-center">
              <div className="flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[#0e58a8] shadow-sm">
                  <FiShield className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-[21px] leading-tight text-[#0d1728] sm:text-[24px]">
                    Need more information?
                  </h3>
                  <p className="mt-2 text-[15px] leading-7 text-[#455d75]">
                    Our care team is here to help you with case review, reports
                    and treatment planning.
                  </p>
                </div>
              </div>

              {contactOptions.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex h-full items-start gap-3 rounded-[18px] border border-transparent px-2 py-2 transition hover:border-[#dbeafe] hover:bg-white/70"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#0e58a8] shadow-sm">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[16px] font-semibold leading-6 text-[#0e58a8]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[14px] leading-6 text-[#455d75]">
                        {item.detail}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

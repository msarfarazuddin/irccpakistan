"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FiCalendar,
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
    description: "Modern facilities with specialist care.",
    image: "/karachi.jpg",
    href: "/minimally-invasive-treatment-karachi",
  },
  {
    title: "Lahore",
    description: "Advanced image-guided treatment services.",
    image: "/lahore.jpg",
    href: "/interventional-radiology-lahore",
  },
  {
    title: "Islamabad",
    description: "International standard patient care.",
    image: "/islmabad.webp",
    href: "/non-surgical-treatment-islamabad",
  },
] as const;

const travelReasons = [
  "Access to specialist interventional radiology treatments",
  "Timely appointments and shorter waiting time",
  "Family support and comfortable recovery environment",
  "Personalized treatment and follow-up care",
  "Case review before travel for better planning",
  "International patient coordination and assistance",
] as const;

const faqs = [
  {
    question: "Can UAE residents travel to Pakistan for medical treatment?",
    answer:
      "Yes, UAE residents can enquire about medical treatment in Pakistan and contact IRCC for an initial case review. Treatment suitability depends on the patient's diagnosis, medical history, imaging and clinical assessment. Patients should also confirm the applicable travel and entry requirements before making arrangements.",
  },
  {
    question: "Can Overseas Pakistanis living in the UAE consult IRCC?",
    answer:
      "Yes. Overseas Pakistanis living in the UAE can contact IRCC, share their medical reports and discuss possible treatment options before travelling to Pakistan.",
  },
  {
    question: "Can non-Pakistani UAE residents receive treatment in Pakistan?",
    answer:
      "Non-Pakistani UAE residents can also enquire about treatment at IRCC. Nationality does not by itself determine whether a procedure is clinically appropriate. Treatment decisions are based on individual medical assessment and applicable requirements.",
  },
  {
    question: "What treatments are available for UAE patients?",
    answer:
      "IRCC offers a range of interventional radiology treatments, including uterine fibroid embolization, varicocele embolization, prostate artery embolization, thyroid RFA, varicose vein ablation, vascular treatments, selected musculoskeletal procedures and interventional oncology services.",
  },
  {
    question: "Can I send my medical reports from the UAE?",
    answer:
      "Yes. Patients can begin the consultation process remotely by sharing relevant medical reports, imaging and previous treatment information via the online consultation form. The specialist team can review the information and advise on the next appropriate step.",
  },
  {
    question: "Can I consult an IRCC specialist before travelling to Pakistan?",
    answer:
      "Yes. An initial case review can be arranged before travel. This allows the team to understand your condition and determine what further information or assessment may be needed.",
  },
  {
    question: "How much does medical treatment in Pakistan cost?",
    answer:
      "Treatment costs depend on the procedure and the individual patient's clinical requirements. The cost comparison on this page is intended as an indicative guide only. For an accurate estimate, patients should contact IRCC and provide their relevant medical information.",
  },
  {
    question: "How are UAE and Pakistan treatment costs compared?",
    answer:
      "Costs can differ substantially between procedures and facilities. Patients should compare complete treatment requirements rather than looking only at the procedure price. IRCC can provide case-specific information after reviewing the patient's condition and treatment requirements.",
  },
  {
    question: "How long should I stay in Pakistan for treatment?",
    answer:
      "The required stay depends on the procedure, medical assessment, recovery and follow-up requirements. Some interventional radiology procedures are performed on an outpatient or short-stay basis, while others may require additional monitoring. The treating team can advise you based on your individual treatment plan.",
  },
  {
    question: "Where does IRCC provide treatment?",
    answer:
      "IRCC currently presents treatment services in Karachi, Lahore and Islamabad. Patients should confirm the location for their specific procedure when arranging their consultation.",
  },
  {
    question: "What medical reports should I send?",
    answer:
      "Depending on your condition, relevant information may include previous consultation notes, blood tests, ultrasound, CT, MRI, biopsy or pathology reports and previous treatment records. Send the reports that are relevant to your current medical concern.",
  },
  {
    question: "How can I contact IRCC from the UAE?",
    answer:
      "UAE patients can contact IRCC through the online consultation form, phone or WhatsApp. You can begin by requesting a case review and sharing your medical reports.",
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
    title: "Request a Call Back",
    detail: "Schedule at your convenience",
    icon: FiCalendar,
    href: "#uae-case-review-form",
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

            <p className="mt-5 text-[16px] leading-8 text-[#455d75]">
              Access world-class, internationally accredited healthcare
              facilities in Pakistan.
            </p>
            <p className="mt-1 text-[16px] leading-8 text-[#455d75]">
              Modern infrastructure, advanced technology, and expert specialists
              across major cities.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {locations.map((location) => (
                <article
                  key={location.title}
                  className="flex h-full min-w-0 flex-col overflow-hidden rounded-[22px] border border-[#e1ebed] bg-white shadow-[0_12px_35px_rgba(15,71,91,0.05)]"
                >
                  <div className="relative h-[200px] overflow-hidden sm:h-[220px]">
                    <Image
                      src={location.image}
                      alt={location.title}
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <div className="flex items-start gap-2">
                      <FiMapPin className="mt-1 h-5 w-5 shrink-0 text-[#0e58a8]" />
                      <div>
                        <h3 className="text-[18px] leading-6 text-[#0d1728]">
                          {location.title}
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
                      Explore {location.title}
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
                Why Travel from UAE to Pakistan for Treatment?
              </h2>
            </div>

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
                    Our care team is here to guide you at every step.
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

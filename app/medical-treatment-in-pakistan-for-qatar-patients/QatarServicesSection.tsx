"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

type ServiceCard = {
  title: string;
  href: string;
};

type ServiceGroup = {
  title: string;
  description: string;
  cards: readonly ServiceCard[];
};

const serviceGroups: readonly ServiceGroup[] = [
  {
    title: "Women's Health",
    description:
      "Uterine Fibroid Embolization, Endometriotic Ovarian Cyst Ablation, Pelvic Congestion Syndrome Treatment and Fallopian Tube Recanalization.",
    cards: [
      {
        title: "Explore Uterine Fibroid Embolization",
        href: "/Uterine-Fibroid-Embolization",
      },
      {
        title: "Explore Endometriotic Ovarian Cyst Ablation",
        href: "/Endometriotic-Ovarian-Cyst-Ablation",
      },
      {
        title: "Explore Pelvic Congestion Syndrome Treatment",
        href: "/Pelvic-Congestion-Syndrome-Treatment",
      },
      {
        title: "Explore Fallopian Tube Recanalization",
        href: "/Fallopian-Tube-Recanalization",
      },
    ],
  },
  {
    title: "Men's Health",
    description:
      "Varicocele Embolization and Prostate Artery Embolization for Benign Prostatic Hyperplasia.",
    cards: [
      {
        title: "Explore Varicocele Embolization",
        href: "/Varicocele-Embolization",
      },
      {
        title: "Explore Prostate Artery Embolization",
        href: "/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia",
      },
    ],
  },
  {
    title: "Vascular Treatments",
    description:
      "Varicose Vein Ablation, Peripheral Vascular Disease, Vascular Malformation Treatment and Dialysis Access Care and Management.",
    cards: [
      {
        title: "Explore Varicose Vein Ablation",
        href: "/Varicose-Vein-Ablation",
      },
      {
        title: "Explore Peripheral Vascular Disease",
        href: "/Peripheral-Vascular-Disease",
      },
      {
        title: "Explore Vascular Malformation Treatment",
        href: "/Vascular-Malformation-Treatment",
      },
      {
        title: "Explore Dialysis Access Care and Management",
        href: "/Dialysis-Access-Care-and-Management",
      },
    ],
  },
  {
    title: "Thyroid Treatments",
    description:
      "Thyroid Radiofrequency Ablation, Thyroid Artery Embolization and Thyroid Alcohol Cyst Ablation.",
    cards: [
      {
        title: "Explore Thyroid Radiofrequency Ablation",
        href: "/Thyroid-Radiofrequency-Ablation",
      },
      {
        title: "Explore Thyroid Artery Embolization",
        href: "/Thyroid-Artery-Embolization",
      },
      {
        title: "Explore Thyroid Alcohol Cyst Ablation",
        href: "/Thyroid-Alcohol-cyst-ablation",
      },
    ],
  },
  {
    title: "Musculoskeletal",
    description:
      "Genicular Arterial Embolization for Knee Pain, Plantar Fasciitis, Radiofrequency Ablation of Osteoid Osteoma and Tenosynovitis.",
    cards: [
      {
        title: "Explore Genicular Arterial Embolization for Knee Pain",
        href: "/Genicular-Arterial-Embolization-for-Knee-Pain",
      },
      {
        title: "Explore Plantar Fasciitis Treatment",
        href: "/Plantar-Fasciitis",
      },
      {
        title: "Explore Radiofrequency Ablation of Osteoid Osteoma",
        href: "/Radiofrequency-Ablation-of-Osteoid-Osteoma",
      },
      {
        title: "Explore Tenosynovitis Treatment",
        href: "/Tenosynovitis",
      },
    ],
  },
  {
    title: "Interventional Oncology",
    description:
      "Image-guided interventional oncology procedures and tumour-directed treatment where clinically appropriate.",
    cards: [
      {
        title: "Explore Interventional Oncology Procedures",
        href: "/Interventional-Oncology",
      },
    ],
  },
  {
    title: "Other Interventional Procedures",
    description:
      "Hemorrhoidal Artery Embolization and Transjugular Intrahepatic Portosystemic Shunt.",
    cards: [
      {
        title: "Explore Hemorrhoidal Artery Embolization",
        href: "/Hemorrhoidal-Artery-Embolization",
      },
      {
        title: "Explore Transjugular Intrahepatic Portosystemic Shunt",
        href: "/Transjugular-Intrahepatic-Portosystemic-Shunt",
      },
    ],
  },
] as const;

export default function QatarServicesSection() {
  return (
    <section className="bg-white py-14 [font-family:var(--font-neue-montreal),var(--font-geist-sans),Arial,Helvetica,sans-serif] sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.32em] text-[#0e58a8]">
            Treatment Options
          </span>
          <h2 className="mt-4 text-[28px] leading-tight text-[#0d1728] sm:text-4xl lg:text-[52px]">
            Medical Treatments Available at{" "}
            <span className="text-[#0e58a8]">IRCC Pakistan</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#49607a] sm:text-lg">
            IRCC Pakistan provides image-guided, minimally invasive treatment
            options across several areas of interventional radiology.
            Suitability depends on diagnosis, imaging, medical history and
            specialist assessment.
          </p>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-2">
          {serviceGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-[26px] border border-[#deeaec] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfd_100%)] p-5 shadow-[0_16px_40px_rgba(15,71,91,0.05)] sm:p-6"
            >
              <h3 className="text-[24px] leading-tight text-[#0d1728]">
                {group.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-[#455d75]">
                {group.description}
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {group.cards.map((card) => (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="flex items-center justify-between gap-3 rounded-[18px] border border-[#dbeafe] bg-white px-4 py-4 text-[15px] font-semibold leading-6 text-[#0d1728] transition hover:border-[#0e58a8] hover:text-[#0e58a8]"
                  >
                    <span>{card.title}</span>
                    <FiArrowUpRight className="h-5 w-5 shrink-0" />
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

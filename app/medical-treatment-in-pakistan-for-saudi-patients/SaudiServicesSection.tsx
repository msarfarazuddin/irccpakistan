"use client";

import Image from "next/image";
import Link from "next/link";

type ServiceCard = {
  title: string;
  desc: string;
  image: string;
  href: string;
};

const primaryServices: ServiceCard[] = [
  {
    title: "Uterine Fibroid Embolization",
    desc: "A minimally invasive option for selected women with symptomatic uterine fibroids.",
    image: "/Uterine Fibroid Embolization.png",
    href: "/Uterine-Fibroid-Embolization",
  },
  {
    title: "Varicocele Embolization",
    desc: "Image-guided embolization for selected patients with varicocele.",
    image: "/Varicocele Embolization.jpg",
    href: "/Varicocele-Embolization",
  },
  {
    title: "Thyroid Radiofrequency Ablation",
    desc: "A minimally invasive option for selected benign thyroid nodules.",
    image: "/Thyroid Radiofrequency Ablation.jpg",
    href: "/Thyroid-Radiofrequency-Ablation",
  },
  {
    title: "Varicose Vein Ablation",
    desc: "Image-guided treatment for selected patients with symptomatic varicose veins.",
    image: "/Varicose Vein Ablations.jpg",
    href: "/Varicose-Vein-Ablation",
  },
  {
    title: "Prostate Artery Embolization",
    desc: "A minimally invasive treatment option for selected men with BPH.",
    image: "/Prostate Artery Embolization.png",
    href: "/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia",
  },
  {
    title: "Interventional Oncology",
    desc: "Image-guided procedures used in the management of selected cancer cases.",
    image: "/Interventional Oncology.jpg",
    href: "/Interventional-Oncology",
  },
  {
    title: "Hemorrhoidal Artery Embolization",
    desc: "A minimally invasive option for selected patients with symptomatic hemorrhoids.",
    image: "/Haemorrhoids.png",
    href: "/Hemorrhoidal-Artery-Embolization",
  },
  {
    title: "Peripheral Vascular Disease",
    desc: "Image-guided vascular assessment and treatment for selected peripheral vascular conditions.",
    image: "/Peripheral Vascular Disease.jpeg",
    href: "/Peripheral-Vascular-Disease",
  },
] as const;

const additionalServices: ServiceCard[] = [
  {
    title: "Endometriotic Ovarian Cyst Ablation",
    desc: "Explore treatment details.",
    image: "/Endometriotic Ovarian.png",
    href: "/Endometriotic-Ovarian-Cyst-Ablation",
  },
  {
    title: "Fallopian Tube Recanalization",
    desc: "Explore treatment details.",
    image: "/Fallopian Tube Recanalization.png",
    href: "/Fallopian-Tube-Recanalization",
  },
  {
    title: "Genicular Arterial Embolization for Knee Pain",
    desc: "Explore treatment details.",
    image: "/Genicular Artery Embolization.png",
    href: "/Genicular-Arterial-Embolization-for-Knee-Pain",
  },
  {
    title: "Pelvic Congestion Syndrome Treatment",
    desc: "Explore treatment details.",
    image: "/Syndrome.png",
    href: "/Pelvic-Congestion-Syndrome-Treatment",
  },
  {
    title: "Thyroid Artery Embolization",
    desc: "Explore treatment details.",
    image: "/Thyroid Ablation.png",
    href: "/Thyroid-Artery-Embolization",
  },
  {
    title: "Thyroid Alcohol Cyst Ablation",
    desc: "Explore treatment details.",
    image: "/Thyroid Alcohol.png",
    href: "/Thyroid-Alcohol-cyst-ablation",
  },
  {
    title: "TIPS",
    desc: "Explore treatment details.",
    image: "/TIPS.png",
    href: "/Transjugular-Intrahepatic-Portosystemic-Shunt",
  },
  {
    title: "Vascular Malformation Treatment",
    desc: "Explore treatment details.",
    image: "/Vascular malformations.jpeg",
    href: "/Vascular-Malformation-Treatment",
  },
  {
    title: "Dialysis Access Care",
    desc: "Explore treatment details.",
    image: "/Dialysis Access Services.png",
    href: "/Dialysis-Access-Care-and-Management",
  },
  {
    title: "Plantar Fasciitis",
    desc: "Explore treatment details.",
    image: "/Plantar Fasciitis.png",
    href: "/Plantar-Fasciitis",
  },
  {
    title: "Tenosynovitis",
    desc: "Explore treatment details.",
    image: "/Tenosynovitis.png",
    href: "/Tenosynovitis",
  },
  {
    title: "Radiofrequency Ablation of Osteoid Osteoma",
    desc: "Explore treatment details.",
    image: "/Osteoid Osteoma Ablation.jpeg",
    href: "/Radiofrequency-Ablation-of-Osteoid-Osteoma",
  },
] as const;

function ServiceGrid({
  cards,
}: {
  cards: readonly ServiceCard[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((service) => (
        <article
          key={service.title}
          className="overflow-hidden rounded-[24px] border border-[#e1ebed] bg-white shadow-[0_14px_34px_rgba(15,71,91,0.05)]"
        >
          <div className="relative h-[220px] overflow-hidden bg-[#eef3ff]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="p-5">
            <h3 className="text-[19px] leading-7 text-[#0d1728]">
              {service.title}
            </h3>
            <p className="mt-3 text-[15px] leading-7 text-[#455d75]">
              {service.desc}
            </p>

            <Link
              href={service.href}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0e58a8] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0b4a8d]"
            >
              Explore Treatment
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function SaudiServicesSection() {
  return (
    <section className="bg-white py-14 [font-family:var(--font-neue-montreal),var(--font-geist-sans),Arial,Helvetica,sans-serif] sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.32em] text-[#0e58a8]">
            Treatment Options
          </span>
          <h2 className="mt-4 text-[28px] leading-tight text-[#0d1728] sm:text-4xl lg:text-[52px]">
            General Services for Patients from{" "}
            <span className="text-[#0e58a8]">Saudi Arabia</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#49607a] sm:text-lg">
            Explore image-guided, minimally invasive procedures available at
            IRCC Pakistan. Each card links to the relevant treatment page for
            more information.
          </p>
        </div>

        <div className="mt-10">
          <ServiceGrid cards={primaryServices} />
        </div>

        <div className="mt-10 rounded-[28px] border border-[#deeaec] bg-[linear-gradient(180deg,#f8fbfd_0%,#ffffff_100%)] p-5 sm:p-6">
          <h3 className="text-[24px] leading-tight text-[#0d1728]">
            Additional Treatment Pages
          </h3>
          <p className="mt-3 text-[15px] leading-7 text-[#455d75]">
            Additional treatment cards can link to the remaining IRCC service
            pages already available on the site.
          </p>
          <div className="mt-6">
            <ServiceGrid cards={additionalServices} />
          </div>
        </div>
      </div>
    </section>
  );
}

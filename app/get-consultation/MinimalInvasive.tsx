import Image from "next/image";

type ProcedureItem = {
  title: string;
  desc: string;
  image: string;
  imageAlt: string;
};

const procedures: ProcedureItem[] = [
  {
    title: "Peripheral Artery Disease",
    desc: "Peripheral Artery Disease is a disorder in which your arteries get narrowed and are unable to transport enough blood to your extremities, such as your arms and legs.",
    image: "/Artery Disease.jpg",
    imageAlt: "Peripheral Artery Disease",
  },
  {
    title: "Prostatic Artery Embolization",
    desc: "The treatment for uterine fibroids known as uterine fibroid embolization (UFE) is a minimally invasive procedure that safely and successfully reduces fibroids by stopping the blood flow to the fibroids.",
    image: "/Artery Embolization.jpg",
    imageAlt: "Prostatic Artery Embolization",
  },
  {
    title: "Pelvic Congestion Syndrome Treatment",
    desc: "Pain in the pelvic region is a common symptom of Pelvic Congestion Syndrome. Problems with the pelvic veins are a likely reason.",
    image: "/Syndrome.png",
    imageAlt: "Pelvic Congestion Syndrome Treatment",
  },
  {
    title: "Interventional Oncology",
    desc: "Many forms of cancer and cancer-related problems require interventional radiology as part of the diagnostic and therapeutic process.",
    image: "/Interventional Oncology.jpg",
    imageAlt: "Interventional Oncology",
  },
  {
    title: "Radiofrequency Ablation of Osteoid Osteoma",
    desc: "A benign bone tumor called an osteoid osteoma. Although this tumor occurs most often in the legs, it can develop on any bone in the body.",
    image: "/Osteoma.jpg",
    imageAlt: "Pelvic Congestion Syndrome Treatment",
  },
  {
    title: "Dialysis Access Care",
    desc: "Dialysis gives those who have suffered kidney failure a second chance at a normal life. Dialysis may become necessary if a patient’s kidney function becomes too low or if complications develop.",
    image: "/Care.jpg",
    imageAlt: "Interventional Oncology",
  },
];

export default function MinimalInvasiveProcedureSection() {
  return (
    <section className="w-full bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-[1280px] px-4">
        {/* Blue container */}
        <div className="rounded-[32px] bg-[#1f78b7] px-5 py-10 sm:rounded-[44px] sm:px-10 sm:py-14 lg:px-14">
          <h2 className="text-center text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-4xl">
            Minimal Invasive Procedure
          </h2>

          {/* Grid */}
          <div className="mt-10 grid gap-y-10 gap-x-10 lg:mt-12 lg:gap-y-14 lg:grid-cols-2">
            {procedures.map((p) => (
              <ProcedureCard key={p.title} item={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcedureCard({ item }: { item: ProcedureItem }) {
  return (
    <div className="grid grid-cols-[84px_1fr] items-center gap-4 md:grid-cols-[180px_1fr] md:items-start md:gap-6">
      {/* Image box */}
      <div className="relative h-[84px] w-[84px] overflow-hidden rounded-tl-3xl rounded-br-3xl bg-white/10 md:h-[180px] md:w-[180px]">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 767px) 84px, 180px"
        />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-[19px] font-extrabold leading-tight text-white sm:text-[24px] lg:text-xl">
          {item.title}
        </h3>
        <p className="mt-3 hidden max-w-[520px] text-lg/6 text-sm text-white/90 md:block md:text-base">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

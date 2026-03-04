import Image from "next/image";

type ServiceCard = {
  title: string;
  image: string;
  whatsappLink: string;
};

const cards: ServiceCard[] = [
  {
    title: "Varicose Vein Ablation",
    image: "/Varicose Vein Ablation.jpg",
    whatsappLink:
      "https://wa.me/923340005020?text=Hi%20IRCC%2C%20I%20want%20to%20book%20Varicose%20Vein%20Ablation.",
  },
  {
    title: "Varicocele Embolization",
    image: "/Varicocele Embolization.jpg",
    whatsappLink:
      "https://wa.me/923340005020?text=Hi%20IRCC%2C%20I%20want%20to%20book%20Varicocele%20Embolization.",
  },
  {
    title: "Thyroid Radiofrequency Ablation",
    image: "/Thyroid Radiofrequency Ablation.jpg",
    whatsappLink:
      "https://wa.me/923340005020?text=Hi%20IRCC%2C%20I%20want%20to%20book%20Thyroid%20Radiofrequency%20Ablation.",
  },
];

export default function ServicesWhatsappCards() {
  return (
    <section className="w-full bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-black sm:text-4xl lg:text-4xl">
            <span>Our Interventional Radiology Services</span>
          </h2>

          <p className="mx-auto mb-10 max-w-[900px] text-sm leading-relaxed text-black sm:text-base">
            We integrate our healthcare expertise with innovative technology to improve patient
            experiences, transform people health, and reduce healthcare costs.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <ServiceCardItem key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCardItem({ card }: { card: ServiceCard }) {
  return (
    // ✅ Only TOP corners rounded
    <div className="border border-[#b8cde6] bg-white shadow-sm rounded-t-2xl overflow-hidden">
      
      {/* Image Wrapper */}
      <div className="relative h-[420px] rounded-t-2xl overflow-hidden sm:h-[500px] lg:h-[560px]">
        <Image
          src={card.image}
          alt={card.title}
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width:768px) 100vw, 33vw"
        />

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#5f82ad]/80 px-3 py-3 text-center backdrop-blur-[2px]">
          <h3 className="text-[18px] font-semibold tracking-wide text-white sm:text-[20px] lg:text-[22px]">
            {card.title}
          </h3>
        </div>
      </div>

      {/* WhatsApp Button (NO radius bottom) */}
      <a
        href={card.whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-3 bg-[#2ea61f] px-4 py-3 text-base font-semibold text-white transition hover:brightness-95 sm:text-[18px]"
      >
        <WhatsappIcon className="h-6 w-6" />
        Whatsapp
      </a>
    </div>
  );
}

function WhatsappIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.7 8.8c.2-.2.4-.2.6-.1l1 .5c.2.1.3.4.2.6l-.4 1c.5 1 1.3 1.8 2.3 2.3l1-.4c.2-.1.5 0 .6.2l.5 1c.1.2.1.4-.1.6-.5.5-1.1.8-1.8.8-2.8 0-5.1-2.3-5.1-5.1 0-.7.3-1.3.8-1.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

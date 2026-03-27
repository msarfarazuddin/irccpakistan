import Image from "next/image";

const iconStyles = "h-5 w-5 text-[#0E58A8]";

const socialLinks = [
  {
    label: "YouTube",
    url: "https://youtu.be/Ppfrn80dfzs",
    icon: (
      <svg viewBox="0 0 24 24" className={iconStyles} fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.2 3.5 12 3.5 12 3.5s-7.2 0-9.4.6A3 3 0 0 0 .4 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .4 5.8 3 3 0 0 0 2.1 2.1c2.2.6 9.4.6 9.4.6s7.2 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.8 15.5V8.5l6.4 3.5z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/irccpakistan",
    icon: (
      <svg viewBox="0 0 24 24" className={iconStyles} fill="currentColor">
        <path d="M13 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h2v7h3v-7h2l.5-3H13z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    url: "https://instagram.com/irccpakistan?igshid=i7fclbk4863y",
    icon: (
      <svg viewBox="0 0 24 24" className={iconStyles} fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M17.5 6.5h.01" />
      </svg>
    ),
  },
  {
    label: "X",
    url: "https://twitter.com/irccpakistan?lang=en",
    icon: (
      <svg viewBox="0 0 24 24" className={iconStyles} fill="currentColor">
        <path d="M18.3 2H21l-6.6 7.6L22 22h-6l-4.7-6.1L6 22H3l7.1-8.2L2 2h6.1l4.2 5.6L18.3 2zm-1 18h1.7L7.7 4H6L17.3 20z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    url: "https://www.tiktok.com/@drshahbazqazi",
    icon: (
      <svg viewBox="0 0 24 24" className={iconStyles} fill="currentColor">
        <path d="M14.5 3c.4 1.4 1.2 2.4 2.4 3.1 1 .6 2 .9 3.1.9V10c-1.6 0-3.1-.5-4.4-1.4v6.1a5.6 5.6 0 1 1-4.5-5.5v3c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5V3h2.9z" />
      </svg>
    ),
  },
  {
    label: "Snapchat",
    url: "https://www.snapchat.com/add/irccpakistan",
    icon: (
      <svg viewBox="0 0 24 24" className={iconStyles} fill="currentColor">
        <path d="M12 2c3.3 0 5.3 2.3 5.3 5.7v2c0 .4.2.8.5 1l1.2.8c.4.3.3.9-.2 1.1l-1.1.5c-.2.1-.4.4-.4.6.1 1.4 1 1.9 1 1.9-.5.8-1.7 1.2-2.9 1.3-.5 1.1-1.7 1.8-3.4 1.8s-2.9-.7-3.4-1.8c-1.2-.1-2.4-.5-2.9-1.3 0 0 .9-.5 1-1.9 0-.2-.1-.5-.4-.6l-1.1-.5c-.5-.2-.6-.8-.2-1.1l1.2-.8c.3-.2.5-.6.5-1v-2C6.7 4.3 8.7 2 12 2z" />
      </svg>
    ),
  },
];

export default function UterineHero() {
    return (
        <section className="relative w-full bg-[#f4fbff] pt-10  -mt-[100px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/UterineHero.png"
                    alt="Uterine Fibroid Embolization"
                    fill
                    priority
                    className="object-cover object-right"
                />
            </div>

            {/* Social Icons (Desktop only) */}
            <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 flex-col bg-white shadow-lg sm:flex z-20">
                {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center"
            aria-label={link.label}
            title={link.label}
          >
            {link.icon}
          </a>
        ))}
            </div>

            {/* Wrapper */}
            <div className="relative mx-auto w-full pl-5 sm:pl-8  lg:pl-12 pr-0">
                <div className="grid grid-cols-12 h-auto lg:h-screen items-center">
                    <div className="col-span-12 lg:col-span-6 z-10 px-5 sm:px-8 lg:px-0 pl-0 lg:pl-10 py-20 pb-0 lg:py-0">
                        <h1 className="text-[30px] sm:text-[55px] lg:text-[45px] font-extrabold leading-[1.1] text-slate-900">
                            Vascular Malformation<br />
                            <span className="text-[#0b4aa2] ">Treatment</span>
                        </h1>
                        <h5 className="text-black text-[30px]">What is a vascular malformation?</h5>
                        <p className="mt-4 text-[14px] sm:text-[18px] leading-relaxed text-slate-600 max-w-full">
                            Vascular malformation is a general term that includes congenital vascular anomalies of only veins, only lymph vessels, both veins and lymph vessels, or both arteries and veins.
                        </p>
                        <ul className="text-black mt-4 leading-relaxed text-slate-600">
                            <li>Only veins: venous malformation (VM)</li>
                            <li>Only lymph vessels: lymphatic malformations (LM)</li>
                            <li>Both veins and lymph vessels: venolymphatic malformations (VLM)</li>
                            <li>Arteries connected directly to veins without any capillaries in between: arteriovenous malformation (AVM)</li>
                        </ul>
                        <button className="mt-6 inline-flex items-center justify-center shadow-xl rounded-full bg-[#0b4aa2] px-6 py-3 text-[16px] font-semibold text-white hover:opacity-95">
                            <a href="#form">   Book Appointment</a>
                        </button>
                    </div>

                    <div className="col-span-12 lg:col-span-6 relative h-[320px] sm:h-[420px] lg:h-screen pr-0">
                        <div className="absolute inset-0 flex items-end justify-end">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/Vascular Malformation.png"
                                    alt="Doctor"
                                    fill
                                    priority
                                    className="object-contain object-bottom object-right"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


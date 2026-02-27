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
      <svg viewBox="0 0 24 24" className={iconStyles} fill="currentColor">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" />
        <circle cx="12" cy="12" r="3.2" fill="#fff" />
        <circle cx="17" cy="7" r="1.1" fill="#fff" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    url: "https://twitter.com/irccpakistan?lang=en",
    icon: (
      <svg viewBox="0 0 24 24" className={iconStyles} fill="currentColor">
        <path d="M22 5.8c-.8.4-1.6.6-2.5.8a4.3 4.3 0 0 0 1.9-2.4 8.6 8.6 0 0 1-2.7 1 4.3 4.3 0 0 0-7.3 3v1A12.2 12.2 0 0 1 3 4.9a4.3 4.3 0 0 0 1.3 5.7c-.6 0-1.2-.2-1.7-.4v.1a4.3 4.3 0 0 0 3.4 4.2c-.5.1-1 .2-1.5.1a4.3 4.3 0 0 0 4 3 8.6 8.6 0 0 1-5.4 1.9A8.9 8.9 0 0 1 2 19a12.1 12.1 0 0 0 6.6 1.9c7.9 0 12.2-6.5 12.2-12.2v-.6A8.7 8.7 0 0 0 22 5.8z" />
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
                            Radiofrequency Ablation <br />
                            <span className="text-[#0b4aa2] ">of Osteoid Osteoma (TIPS)</span>
                        </h1>
                        <h5 className="text-black lg:text-[30px]">What is an osteoid osteoma?</h5>
                        <p className="mt-4 text-[14px] sm:text-[18px] leading-relaxed text-slate-600 max-w-full">
                            Osteoid osteoma is a benign tumor of the bone. This tumor is most frequently found in the legs but may occur also at other bones in nearly any part of the body.
                            
                        </p>

                        <button className="mt-6 inline-flex items-center justify-center shadow-xl rounded-full bg-[#0b4aa2] px-6 py-3 text-[16px] font-semibold text-white hover:opacity-95">
                            <a href="#form">   Book Appointment</a>
                        </button>
                    </div>

                    <div className="col-span-12 lg:col-span-6 relative h-[320px] sm:h-[420px] lg:h-screen pr-0">
                        <div className="absolute inset-0 flex items-end justify-end">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/banneri.png"
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



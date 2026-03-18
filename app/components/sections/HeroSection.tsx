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

const stats = [
  { label: "SPECIALTIES", value: "30+" },
  { label: "YEARS EXPERIENCE", value: "25+" },
  { label: "SUCCESSFUL PROCEDURES", value: "250k" },
];

export default function HeroSection() {
  return (
    <section>
      <div
        className="bannerstyle relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(
            rgba(231, 238, 252, 0.29),
            rgb(231, 238, 252)
          ),
          url('/bannermain.png')`,
        }}
      >
        <div className="mobilecss mx-auto grid w-full max-w-full grid-cols-1 gap-10 bg-white/0 pb-0 lg:pb-0 pt-40  sm:px-10 lg:grid-cols-12">
          <div className="absolute left-0 top-1/2 hidden bg-white -translate-y-1/2 flex-col shadow-lg sm:flex">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center text-base font-semibold text-[#0b4ef0]  "
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}

          </div>

          <div className="lg:col-span-5">
            <div className="flex h-full items-end justify-center px-6 pb-0">
              <div className="bannerimag absolute bottom h-full w-full max-w-[380px] " style={{ bottom: `0` }}>
                <Image
                  src="/drshbaz.png"
                  alt="Dr. Shahbaz Ahmed Qazi"
                  fill
                  className="object-contain object-bottom sm:object-bottom"
                  priority
                />
                <div className="absolute bottom-9 lg:left-42 sm:left-0 flex -translate-x-1/2 items-center justify-center">
                  <div className="absolute bottom-2 left-50 -translate-x-1/2">
                    <svg
                      viewBox="0 0 200 200"
                      className="h-50 w-50 animate-spin-slow"
                      aria-hidden="true"
                    >
                      <defs>
                        <path
                          id="circlePath"
                          d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                        />
                      </defs>

                      <text className="text-[10px] uppercase tracking-[0.35em] fill-[#111111]">
                        <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                          Explore | Scroll To Explore | Scroll To Explore
                        </textPath>
                      </text>
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                      <div className="relative h-10 w-6 rounded-full border-2 border-[#0b4ef0]">
                        <span className="absolute left-1/2 top-2 h-2 w-[3px] -translate-x-1/2 rounded-full bg-[#0b4ef0] animate-wheel" />
                      </div>
                      <span className="h-3 w-3 rotate-45 border-b-2 border-r-2 border-[#0b4ef0] animate-bounce" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 justify-center px-6 py-10 sm:px-10 lg:col-span-7">
            <div className="inline-flex w-fit items-center gap-2 rounded-full shadow-lg border border-[#dce6ff] bg-white px-4 py-2 text-sm font-semibold text-[#0E58A8]">
              <h3 className="flex h-6 w-6 items-center justify-center rounded-full text-[30px] font-bold text-[#0E58A8]">
                +
              </h3>
              <span>Pakistan's No. 1 Interventional Radiologist</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-[#0E58A8] sm:text-5xl">
              Dr. Shahbaz Ahmed Qazi
            </h1>
            <p className="text-[30px]   text-[#111111] lg:pr-30 md:pr-30 sm:pr-5  leading-[1.2]">
              Leading Expertise in Image-Guided & Minimally Invasive Procedures
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bannbutton rounded-full bg-[#0E58A8] px-6 py-2 sm:text-[14px] lg:text-[16px]  font-semibold capitalize text-white transition hover:border-[#0E58A8]">
               <a href="#form">   Book Appointment</a>
              </button>
              <button className="bannbutton rounded-full border border-[#0E58A8] px-8 py-2 text-[16px] font-semibold capitalize text-[#0E58A8] hover:text-white hover:border-[#0b4ef0]/80 hover:bg-[#0E58A8]">
                View Treatments
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:pt-5 lg:pt-18">
              {stats.map((stat) => (
                <div key={stat.label} className="paddingl flex flex-col px-4 py-3">
                  <h2 className="pricesize mt-3 text-5xl  font-bold text-[#C60F1E]">{stat.value}</h2>
                  <span className="text-[14px] font-bold uppercase text-[#111111]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>


  );
}

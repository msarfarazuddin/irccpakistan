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

const stats = [
  { label: "SPECIALTIES", value: "30+" },
  { label: "YEARS EXPERIENCE", value: "20+" },
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
          url('/irccpakistan/bannermain.png')`,
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

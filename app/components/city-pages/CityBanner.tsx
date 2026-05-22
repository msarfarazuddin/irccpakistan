import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { CityPillarPageData } from "@/app/lib/cityPillarContent";

type CityBannerProps = {
  data: CityPillarPageData;
};

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
      <svg
        viewBox="0 0 24 24"
        className={iconStyles}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
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

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightCity(text: string, city: string) {
  const pattern = new RegExp(`(${escapeRegExp(city)})`, "ig");
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    if (part.toLowerCase() === city.toLowerCase()) {
      return (
        <span key={`${part}-${index}`} className="text-[#0B4AA2]">
          {part}
        </span>
      );
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

function renderIntroParagraph(
  paragraph: string,
  linkText: string | undefined,
  href: string,
) {
  if (!linkText || !paragraph.includes(linkText)) {
    return paragraph;
  }

  const parts = paragraph.split(linkText);

  return parts.flatMap((part, index) => {
    const nodes: ReactNode[] = [<span key={`text-${index}`}>{part}</span>];

    if (index < parts.length - 1) {
      nodes.push(
        <Link
          key={`link-${index}`}
          href={href}
          className="font-medium text-[#0B4AA2] underline decoration-[#0B4AA2]/35 underline-offset-4 transition hover:text-[#083A7B]"
        >
          {linkText}
        </Link>,
      );
    }

    return nodes;
  });
}

export default function CityBanner({ data }: CityBannerProps) {
  const hasCustomBackground = Boolean(data.heroBackgroundImage);
  const showHeroImage = !data.hideHeroImage;
  const customBackgroundImageClassName =
    data.heroBackgroundImageClassName ?? "object-cover object-right";

  return (
    <section
      className="relative -mt-[100px] w-full overflow-hidden bg-[#F4FBFF] pt-10"
    >
      {hasCustomBackground ? (
      <div className="absolute inset-0 -z-10">
          <Image
            src={data.heroBackgroundImage!}
            alt={`${data.city} banner background`}
            fill
            priority
            sizes="100vw"
            className={customBackgroundImageClassName}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,251,255,0.985)_0%,rgba(244,251,255,0.96)_24%,rgba(244,251,255,0.8)_40%,rgba(244,251,255,0.38)_55%,rgba(244,251,255,0.1)_70%,rgba(244,251,255,0.02)_100%)]" />
          <div className="absolute inset-y-0 left-[24%] hidden w-[20%] bg-[linear-gradient(90deg,#F4FBFF_0%,rgba(244,251,255,0.52)_58%,rgba(244,251,255,0)_100%)] blur-3xl lg:block" />
        </div>
      ) : (
        <div className="absolute inset-0 -z-10">
          <Image
            src="/UterineHero.png"
            alt={`${data.city} banner background`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,251,255,0.98)_0%,rgba(244,251,255,0.94)_48%,rgba(244,251,255,0.62)_100%)]" />
        </div>
      )}

      <div className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 flex-col bg-white shadow-lg lg:flex">
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

      <div className="relative mx-auto w-full px-5 sm:px-8 lg:px-12">
        <div className="grid h-auto grid-cols-12 items-center lg:h-screen">
          <div
            className={`col-span-12 z-10 px-0 py-16 sm:py-20 ${
              showHeroImage ? "lg:col-span-7" : "lg:col-span-10"
            } lg:px-0 lg:py-0 lg:pl-10`}
          >
            <h1
              className={`mt-6 text-[28px] font-extrabold leading-[1.08] text-slate-900 sm:text-[40px] lg:text-[46px] ${
                showHeroImage ? "lg:max-w-[760px]" : "lg:max-w-[980px]"
              }`}
            >
              {highlightCity(data.heroTitle, data.city)}
            </h1>

            <div
              className={`mt-4 space-y-3 ${
                showHeroImage ? "max-w-3xl" : "max-w-[62rem]"
              }`}
            >
              {data.intro.map((paragraph, index) => (
                <p
                  key={`${data.city}-intro-${index}`}
                  className="text-[14px] leading-relaxed text-slate-600 sm:text-[18px]"
                >
                  {renderIntroParagraph(
                    paragraph,
                    data.heroIntroLinkText,
                    data.heroIntroLinkHref ?? data.canonicalPath,
                  )}
                </p>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#consultation"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#0B4AA2] px-6 py-3 text-[16px] font-semibold text-white shadow-xl transition hover:opacity-95 sm:w-auto"
              >
                Book Appointment
              </a>
              <Link
                href="/Clinic"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#0B4AA2] px-6 py-3 text-[16px] font-semibold text-[#0B4AA2] transition hover:bg-[#0B4AA2] hover:text-white sm:w-auto"
              >
                View Clinics
              </Link>
            </div>

          </div>

          {showHeroImage ? (
            <div className="col-span-12 relative h-[320px] pr-0 sm:h-[420px] lg:col-span-5 lg:h-screen">
              <div className="absolute inset-0 flex items-end justify-end">
                <div className="relative h-full w-full">
                  <Image
                    src={data.heroImage}
                    alt={data.heroImageAlt}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 44vw, 40vw"
                    className="object-contain object-bottom object-right"
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

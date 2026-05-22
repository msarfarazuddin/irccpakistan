import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/app/components/seo/JsonLd";
import CityBanner from "@/app/components/city-pages/CityBanner";
import type {
  CityPageComparisonRow,
  CityPillarPageData,
} from "@/app/lib/cityPillarContent";
import CityConsultationForm from "@/app/components/city-pages/CityConsultationForm";
import CityFaqAccordion from "@/app/components/city-pages/CityFaqAccordion";
import CityServicesCarousel from "@/app/components/city-pages/CityServicesCarousel";
import CityReasonsCarousel from "@/app/components/city-pages/CityReasonsCarousel";

type CityPillarPageProps = {
  data: CityPillarPageData;
};

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}

function ComparisonTable({
  rows,
}: {
  rows: CityPageComparisonRow[];
}) {
  return (
    <div className="overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="min-w-[720px] overflow-hidden rounded-[30px] border border-[#D7E4F6] bg-white shadow-[0_26px_70px_rgba(13,56,113,0.09)]">
        <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-[#D7E4F6] bg-[#F4F9FF] px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#0E58A8] sm:px-7">
          <span>Parameter</span>
          <span>Traditional Surgery</span>
          <span>IRCC Approach</span>
        </div>

        <div className="divide-y divide-[#ECF2FA]">
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[1.2fr_1fr_1fr] gap-5 px-5 py-5 text-sm text-[#4F6178] sm:px-7 sm:text-[15px]"
            >
              <div>
                <p className="font-semibold text-[#0B1220]">{row.label}</p>
              </div>
              <div>
                <p className="font-medium text-[#7C8EA8]">{row.traditional}</p>
              </div>
              <div>
                <p className="font-medium text-[#0E58A8]">{row.ircc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CityPillarPage({ data }: CityPillarPageProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  const [leftSignatureCard, rightSignatureCard, bottomSignatureCard] =
    data.signatureCards;
  const isSingleReason = data.reasons.length === 1;
  const featuredReason = isSingleReason ? data.reasons[0] : null;
  const showReasonsCarousel =
    data.reasonsLayout === "carousel" && data.reasons.length > 1;

  return (
    <>
      <JsonLd id={`${data.city.toLowerCase()}-faq-schema`} data={faqSchema} />

      <div className="bg-white">
        <CityBanner data={data} />

        <section className="relative bg-[linear-gradient(180deg,#FFFFFF_0%,#F4FAFF_100%)] py-16 sm:py-20">
          <div className="mx-auto w-full px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-[#D7E4F6] bg-white px-4 py-2 text-sm font-medium text-[#0E58A8]">
                Why {data.city}
              </span>
              <h2 className="mt-5 text-3xl leading-tight text-[#0B1220] sm:text-4xl">
                {data.reasonsTitle}
              </h2>
              {data.reasonsIntro ? (
                <p className="mt-4 text-sm leading-7 text-[#4F6178] sm:text-[15px]">
                  {data.reasonsIntro}
                </p>
              ) : null}
            </div>

            {featuredReason ? (
              <article className="relative mt-10 overflow-hidden rounded-[34px] border border-[#D7E4F6] bg-white shadow-[0_30px_90px_rgba(13,56,113,0.10)]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,88,168,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,185,130,0.14),transparent_26%),linear-gradient(135deg,#FFFFFF_0%,#F7FBFF_52%,#FFFFFF_100%)]" />

                <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 lg:p-10">
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF4FF] text-[#0E58A8] shadow-[0_18px_35px_rgba(14,88,168,0.10)]">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-7 w-7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </div>

                    <span className="mt-6 inline-flex rounded-full border border-[#D7E4F6] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E58A8]">
                      Why Patients Trust IRCC
                    </span>

                    <h3 className="mt-5 max-w-[18ch] text-3xl leading-tight text-[#0B1220] sm:text-[38px]">
                      {featuredReason.title}
                    </h3>

                    {featuredReason.description ? (
                      <p className="mt-5 max-w-2xl text-sm leading-8 text-[#4F6178] sm:text-[16px]">
                        {featuredReason.description}
                      </p>
                    ) : null}
                  </div>

                  <div className="rounded-[28px] border border-[#D7E4F6] bg-white/85 p-5 shadow-[0_18px_50px_rgba(13,56,113,0.06)] sm:p-6">
                    <div className="flex items-center justify-between gap-4 border-b border-[#E6EEF8] pb-4">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0E58A8]">
                          Key Benefits
                        </p>
                        <p className="mt-1 text-sm text-[#4F6178] sm:text-[15px]">
                          The advantages {data.city} patients value most.
                        </p>
                      </div>
                      <span className="rounded-full bg-[#0E58A8] px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(14,88,168,0.18)]">
                        {featuredReason.bullets.length} reasons
                      </span>
                    </div>

                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {featuredReason.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex min-h-[88px] items-start gap-3 rounded-[22px] border border-[#E5EEF9] bg-[#F8FBFF] px-4 py-4"
                        >
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#0E58A8] shadow-sm">
                            <svg
                              viewBox="0 0 20 20"
                              className="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M4 10.5 8 14l8-8" />
                            </svg>
                          </span>
                          <span className="text-sm leading-7 text-[#35506E] sm:text-[15px]">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ) : showReasonsCarousel ? (
              <CityReasonsCarousel items={data.reasons} />
            ) : (
              <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {data.reasons.map((reason) => (
                  <article
                    key={reason.title}
                    className="rounded-[30px] border border-[#D7E4F6] bg-white p-6 shadow-[0_24px_70px_rgba(13,56,113,0.07)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF4FF] text-[#0E58A8]">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </div>

                    <h3 className="mt-5 text-xl leading-8 text-[#0B1220]">
                      {reason.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#4F6178] sm:text-[15px]">
                      {reason.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {reason.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-[6px] flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#0E58A8]" />
                          <span className="text-sm leading-7 text-[#4F6178] sm:text-[15px]">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto w-full px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-[#D7E4F6] bg-[#F7FBFF] px-4 py-2 text-sm font-medium text-[#0E58A8]">
                Featured Treatments
              </span>
              <h2 className="mt-5 text-3xl leading-tight text-[#0B1220] sm:text-4xl">
                {data.servicesTitle}
              </h2>
              {data.servicesIntro ? (
                <p className="mt-4 text-sm leading-7 text-[#4F6178] sm:text-[15px]">
                  {data.servicesIntro}
                </p>
              ) : null}
            </div>

            <CityServicesCarousel items={data.services} />
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#F8FCFF_0%,#EEF7FF_100%)] py-16 sm:py-20">
          <div className="mx-auto w-full px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <div className="pt-2">
                <span className="inline-flex rounded-full border border-[#D7E4F6] bg-[#F7FBFF] px-4 py-2 text-sm font-medium text-[#0E58A8]">
                  How It Works
                </span>
                <h2 className="mt-5 text-3xl leading-tight text-[#0B1220] sm:text-4xl">
                  {data.consultationJourneyTitle}
                </h2>
                {data.consultationJourneyIntro ? (
                  <p className="mt-4 text-sm leading-7 text-[#4F6178] sm:text-[15px]">
                    {data.consultationJourneyIntro}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-6xl space-y-4">
              {data.consultationJourneySteps.map((step, index) => (
                <article
                  key={step}
                  className={`rounded-[28px] border border-[#D7E4F6] bg-white p-5 shadow-[0_18px_50px_rgba(13,56,113,0.06)] sm:p-6 lg:w-[calc(50%_-_0.75rem)] ${
                    index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
                  }`}
                >
                  <div
                    className={`flex items-start gap-4 ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0E58A8] text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <div className={index % 2 === 1 ? "lg:text-right" : ""}>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0E58A8]/70">
                        Step {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#4F6178] sm:text-[15px]">
                        {step}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_100%)] py-16 sm:py-20">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-0 top-16 h-40 w-40 rounded-full bg-[#E4F1FF]/70 blur-3xl" />
            <div className="absolute right-10 top-24 h-48 w-48 rounded-full bg-[#FFF1E4]/70 blur-3xl" />
            <div className="absolute bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#EAF5FF]/75 blur-3xl" />
          </div>

          <div className="mx-auto w-full px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex rounded-full border border-[#D7E4F6] bg-[#F7FBFF] px-4 py-2 text-sm font-medium text-[#0E58A8]">
                Why IRCC Pakistan
              </span>
              <h2 className="mt-5 text-3xl leading-tight text-[#0B1220] sm:text-4xl">
                {data.signatureTitle}
              </h2>
              {data.signatureIntro ? (
                <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#4F6178] sm:text-[15px]">
                  {data.signatureIntro}
                </p>
              ) : null}
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_minmax(340px,430px)_1fr] lg:grid-rows-[minmax(420px,auto)_auto] lg:items-center">
              {leftSignatureCard ? (
                <article className="order-2 relative rounded-[30px] border border-[#D7E4F6] bg-white p-6 shadow-[0_22px_60px_rgba(13,56,113,0.07)] lg:order-none lg:col-start-1 lg:row-start-1">
                  <span className="absolute right-[-12px] top-1/2 hidden h-6 w-6 -translate-y-1/2 rounded-full border-4 border-[#F7FBFF] bg-[#0E58A8] lg:block" />
                  <h3 className="text-xl leading-8 text-[#0B1220]">
                    {leftSignatureCard.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#4F6178] sm:text-[15px]">
                    {leftSignatureCard.description}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {leftSignatureCard.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-[6px] flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#0E58A8]" />
                        <span className="text-sm leading-7 text-[#4F6178] sm:text-[15px]">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              ) : null}

              <div className="order-1 relative mx-auto flex h-[320px] w-full max-w-[360px] items-center justify-center self-center lg:order-none lg:col-start-2 lg:row-start-1 lg:h-[420px] lg:max-w-[430px]">
                <div className="absolute inset-0 rounded-full border border-[#DDE9F7] bg-[radial-gradient(circle_at_center,#FFFFFF_0%,#F6FBFF_72%,#ECF5FF_100%)] shadow-[0_30px_80px_rgba(13,56,113,0.08)]" />
                <div className="absolute inset-[22px] rounded-full border border-[#EDF4FC]" />
                <Image
                  src={data.signatureImage}
                  alt={data.signatureImageAlt}
                  fill
                  sizes="(max-width: 1024px) 70vw, 420px"
                  className="object-contain object-center p-8 sm:p-10"
                />
              </div>

              {rightSignatureCard ? (
                <article className="order-3 relative rounded-[30px] border border-[#D7E4F6] bg-white p-6 shadow-[0_22px_60px_rgba(13,56,113,0.07)] lg:order-none lg:col-start-3 lg:row-start-1">
                  <span className="absolute left-[-12px] top-1/2 hidden h-6 w-6 -translate-y-1/2 rounded-full border-4 border-[#F7FBFF] bg-[#0E58A8] lg:block" />
                  <h3 className="text-xl leading-8 text-[#0B1220]">
                    {rightSignatureCard.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#4F6178] sm:text-[15px]">
                    {rightSignatureCard.description}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {rightSignatureCard.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-[6px] flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#0E58A8]" />
                        <span className="text-sm leading-7 text-[#4F6178] sm:text-[15px]">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              ) : null}

              {bottomSignatureCard ? (
                <article className="order-4 relative rounded-[30px] border border-[#D7E4F6] bg-white p-6 shadow-[0_22px_60px_rgba(13,56,113,0.07)] lg:col-start-2 lg:row-start-2 lg:mx-auto lg:mt-2 lg:max-w-[430px]">
                  <span className="absolute left-1/2 top-[-12px] hidden h-6 w-6 -translate-x-1/2 rounded-full border-4 border-[#F7FBFF] bg-[#0E58A8] lg:block" />
                  <h3 className="text-center text-xl leading-8 text-[#0B1220]">
                    {bottomSignatureCard.title}
                  </h3>
                  <p className="mt-3 text-center text-sm leading-7 text-[#4F6178] sm:text-[15px]">
                    {bottomSignatureCard.description}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {bottomSignatureCard.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-[6px] flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#0E58A8]" />
                        <span className="text-sm leading-7 text-[#4F6178] sm:text-[15px]">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              ) : null}
            </div>
          </div>
        </section>

        <section className="bg-[#F7FBFF] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-[#D7E4F6] bg-white px-4 py-2 text-sm font-medium text-[#0E58A8]">
                Comparison
              </span>
              <h2 className="mt-5 text-3xl leading-tight text-[#0B1220] sm:text-4xl">
                {data.comparisonTitle}
              </h2>
              {data.comparisonIntro ? (
                <p className="mt-4 text-sm leading-7 text-[#4F6178] sm:text-[15px]">
                  {data.comparisonIntro}
                </p>
              ) : null}
            </div>

            <div className="mt-10">
              <ComparisonTable rows={data.comparisonRows} />
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-[#D7E4F6] bg-[#F7FBFF] px-4 py-2 text-sm font-medium text-[#0E58A8]">
                Testimonials
              </span>
              <h2 className="mt-5 text-3xl leading-tight text-[#0B1220] sm:text-4xl">
                {data.testimonialsTitle}
              </h2>
              {data.testimonialsIntro ? (
                <p className="mt-4 text-sm leading-7 text-[#4F6178] sm:text-[15px]">
                  {data.testimonialsIntro}
                </p>
              ) : null}
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {data.testimonials.map((item) => (
                <article
                  key={`${item.author}-${item.detail}`}
                  className="rounded-[30px] border border-[#D7E4F6] bg-white p-6 shadow-[0_20px_60px_rgba(13,56,113,0.07)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-10 w-10 text-[#0E58A8]"
                    fill="currentColor"
                  >
                    <path d="M9.4 6C6.9 7.2 5 9.8 5 13v5h6v-5H8.2c0-2.1 1-4 2.8-5.3L9.4 6Zm8 0C14.9 7.2 13 9.8 13 13v5h6v-5h-2.8c0-2.1 1-4 2.8-5.3L17.4 6Z" />
                  </svg>

                  <p className="mt-4 text-sm leading-7 text-[#4F6178] sm:text-[15px]">
                    {item.quote}
                  </p>

                  <div className="mt-5 border-t border-[#ECF2FA] pt-5">
                    <p className="text-lg font-semibold text-[#0B1220]">
                      {item.author}
                    </p>
                    <p className="mt-1 text-sm text-[#0E58A8]">{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7FBFF] py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-flex rounded-full border border-[#D7E4F6] bg-white px-4 py-2 text-sm font-medium text-[#0E58A8]">
                FAQ
              </span>
              <h2 className="mt-5 text-3xl leading-tight text-[#0B1220] sm:text-4xl">
                {data.faqsTitle}
              </h2>
            </div>

            <div className="mt-10">
              <CityFaqAccordion items={data.faqs} />
            </div>
          </div>
        </section>

        {data.relatedLinks.length > 0 ? (
          <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F4FAFF_100%)] py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <span className="inline-flex rounded-full border border-[#D7E4F6] bg-white px-4 py-2 text-sm font-medium text-[#0E58A8]">
                  Continue Exploring
                </span>
                <h2 className="mt-5 text-3xl leading-tight text-[#0B1220] sm:text-4xl">
                  {data.relatedTitle}
                </h2>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {data.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group rounded-[30px] border border-[#D7E4F6] bg-white p-6 text-[#0B1220] shadow-[0_18px_50px_rgba(13,56,113,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(13,56,113,0.1)]"
                  >
                    <p className="text-xl leading-8 text-[#0B1220]">{link.label}</p>
                    <p className="mt-3 text-sm leading-7 text-[#4F6178] sm:text-[15px]">
                      {link.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0E58A8]">
                      Open page <ArrowIcon />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="bg-[#F7FBFF] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <CityConsultationForm
              city={data.city}
              title={data.formTitle}
              description={data.formDescription}
              clinic={data.clinic}
            />
          </div>
        </section>
      </div>
    </>
  );
}

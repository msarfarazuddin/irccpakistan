import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { createPageMetadata } from "@/app/lib/metadata";
import Varicocele from "@/app/Varicocele-Embolization/Varicocele Banner";

// Lazy load heavy components
const Varicoceleabout = dynamic(() => import("@/app/Varicocele-Embolization/Varicoceleabout"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

const TextCenter = dynamic(() => import("@/app/Varicocele-Embolization/textcenter"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />,
});

const Candidat = dynamic(() => import("@/app/Varicocele-Embolization/Candidate"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

const Form = dynamic(() => import("@/app/Varicocele-Embolization/form"), {
  loading: () => <div className="h-80 bg-gray-100 animate-pulse" />,
});

const Review = dynamic(() => import("@/app/components/sections/TestimonialsSection"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

const Blog = dynamic(() => import("@/app/components/sections/BlogSection"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});
const Faqs = dynamic(() => import("@/app/Varicocele-Embolization/FaqSection"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

export const metadata: Metadata = createPageMetadata({
  canonicalPath: "/Varicocele-Embolization",
  title: "Varicocele Embolization | Non-Surgical Treatment Pakistan",
  description:
    "IRCC Pakistan has the highest number of varicocele embolizations in Pakistan. Treat pain and infertility without surgery. Book a consultation.",
});

export default function VE() {
  return (
    <>
      <Varicocele />
      <Varicoceleabout />
      <TextCenter/>
      <Candidat/>
      <Form/>
      <section className="pt-20 bg-white">
        <Review/>
      </section>
      <Faqs/>
      <Blog/>
    </>
  );
}

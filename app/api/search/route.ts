import { NextResponse } from "next/server";

type Suggestion = {
  id: string;
  title: string;
  subtitle?: string;
};

const SUGGESTIONS: Suggestion[] = [
  {
    id: "varicose-vein-ablations",
    title: "Varicose Vein Ablations",
    subtitle: "Laser and RFA ablations that remove bulging veins without open surgery.",
  },
  {
    id: "fallopian-tube-recanalization",
    title: "Fallopian Tube Recanalization",
    subtitle: "Non-surgical treatment designed to open blocked fallopian tubes.",
  },
  {
    id: "dialysis-access-services",
    title: "Dialysis Access Services",
    subtitle: "Angioplasty and thrombectomy to maintain or restore dialysis fistulas.",
  },
  {
    id: "avoid-varicocele-surgery",
    title: "Avoid Varicocele Surgery",
    subtitle: "Targeted varicocele embolization for pain, swelling, and infertility.",
  },
  {
    id: "ufe-fibroid-treatment",
    title: "UFE (Fibroids) Treatment",
    subtitle: "Uterine fibroid embolization offering fast recovery and symptom relief.",
  },
  {
    id: "thyroid-rfa",
    title: "Thyroid Radiofrequency Ablation",
    subtitle: "Image-guided RFA for thyroid nodules with minimal downtime.",
  },
  {
    id: "prostate-artery-embolization",
    title: "Prostate Artery Embolization",
    subtitle: "Minimally invasive therapy for benign prostatic hyperplasia (BPH).",
  },
  {
    id: "uterine-fibroid-embolization",
    title: "Uterine Fibroid Embolization",
    subtitle: "Conservative fibroid treatment that preserves the uterus.",
  },
  {
    id: "varicocele-embolization",
    title: "Varicocele Embolization",
    subtitle: "Radiological solution for infertility and chronic scrotal pain.",
  },
  {
    id: "pelvic-congestion-therapy",
    title: "Pelvic Congestion Therapy",
    subtitle: "Embolization of pelvic veins to relieve chronic pelvic pain.",
  },
];

const MAX_RESULTS = 6;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const rawQuery = url.searchParams.get("q")?.trim() ?? "";
  if (!rawQuery) {
    return NextResponse.json({ results: [] });
  }

  const normalizedQuery = rawQuery.toLowerCase();

  const matches = SUGGESTIONS.filter((item) => {
    const haystack = `${item.title} ${item.subtitle ?? ""}`.toLowerCase();
    return haystack.includes(normalizedQuery);
  }).slice(0, MAX_RESULTS);

  return NextResponse.json({ results: matches });
}

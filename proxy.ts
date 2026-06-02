import { NextResponse, type NextRequest } from "next/server";
import { isGonePath } from "@/app/lib/gonePaths";

const exactCaseRedirects = new Map<string, string>([
  ["/contact", "/Contact"],
  ["/contact/", "/Contact"],
  ["/contacts", "/Contact"],
  ["/contacts/", "/Contact"],
  ["/varicose-vein-ablation", "/Varicose-Vein-Ablation"],
  ["/varicose-vein-ablation/", "/Varicose-Vein-Ablation"],
  [
    "/dialysis-access-care-and-management//1000",
    "/Dialysis-Access-Care-and-Management",
  ],
  [
    "/dialysis-access-care-and-management/1000",
    "/Dialysis-Access-Care-and-Management",
  ],
  ["/doctor-page", "/"],
  ["/doctor-page/", "/"],
  ["/peripheral-vascular-disease", "/Peripheral-Vascular-Disease"],
  ["/peripheral-vascular-disease/", "/Peripheral-Vascular-Disease"],
  ["/peripheral-vascular-disease/contact", "/Peripheral-Vascular-Disease"],
  ["/peripheral-vascular-disease/contact/", "/Peripheral-Vascular-Disease"],
  ["/thyroid-radiofrequency-ablation/contact", "/Thyroid-Radiofrequency-Ablation"],
  ["/thyroid-radiofrequency-ablation/contact/", "/Thyroid-Radiofrequency-Ablation"],
  ["/varicocele-embolization", "/Varicocele-Embolization"],
  ["/varicocele-embolization/", "/Varicocele-Embolization"],
  ["/uterine-fibroid-embolization", "/Uterine-Fibroid-Embolization"],
  ["/uterine-fibroid-embolization/", "/Uterine-Fibroid-Embolization"],
  ["/fallopian-tube-recanalization", "/Fallopian-Tube-Recanalization"],
  ["/fallopian-tube-recanalization/", "/Fallopian-Tube-Recanalization"],
  ["/blog-posts", "/blog"],
  ["/blog-posts/", "/blog"],
  ["/blogs", "/blog"],
  ["/blogs/", "/blog"],
  [
    "/radiofrequency-ablation-of-osteoid-osteoma",
    "/Radiofrequency-Ablation-of-Osteoid-Osteoma",
  ],
  [
    "/radiofrequency-ablation-of-osteoid-osteoma/",
    "/Radiofrequency-Ablation-of-Osteoid-Osteoma",
  ],
  ["/vascular-malformation-treatment", "/Vascular-Malformation-Treatment"],
  ["/vascular-malformation-treatment/", "/Vascular-Malformation-Treatment"],
  ["/liver-cancer-management", "/Interventional-Oncology"],
  ["/liver-cancer-management/", "/Interventional-Oncology"],
  ["/ircc-video-gallery", "/"],
  ["/ircc-video-gallery/", "/"],
  [
    "/pelvic-congestion-syndrome-treatment",
    "/Pelvic-Congestion-Syndrome-Treatment",
  ],
  [
    "/pelvic-congestion-syndrome-treatment/",
    "/Pelvic-Congestion-Syndrome-Treatment",
  ],
  [
    "/portal-hypertension-management-and-treatment",
    "/Transjugular-Intrahepatic-Portosystemic-Shunt",
  ],
  [
    "/portal-hypertension-management-and-treatment/",
    "/Transjugular-Intrahepatic-Portosystemic-Shunt",
  ],
  [
    "/prostate-artery-embolization-for-benign-prostatic-hyperplasia",
    "/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia",
  ],
  [
    "/prostate-artery-embolization-for-benign-prostatic-hyperplasia/",
    "/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia",
  ],
  [
    "/pakistani-women-largely-unaware-of-uterine-fibroid-embolization-as-an-option-of-fibroid-treatment-without-surgery",
    "/blog/pakistani-women-largely-unaware-of-uterine-fibroid-embolization-as-an-option-of-fibroid-treatment-without-surgery",
  ],
  [
    "/pakistani-women-largely-unaware-of-uterine-fibroid-embolization-as-an-option-of-fibroid-treatment-without-surgery/",
    "/blog/pakistani-women-largely-unaware-of-uterine-fibroid-embolization-as-an-option-of-fibroid-treatment-without-surgery",
  ],
]);

const goneResponseHeaders = {
  "Content-Type": "text/plain; charset=utf-8",
  "X-Robots-Tag": "noindex, nofollow, noarchive",
} as const;

export function proxy(request: NextRequest) {
  if (isGonePath(request.nextUrl.pathname)) {
    return new NextResponse("Gone", {
      status: 410,
      headers: goneResponseHeaders,
    });
  }

  const destination = getRedirectDestination(request.nextUrl.pathname);

  if (!destination) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = destination;

  return NextResponse.redirect(url, 308);
}

function getRedirectDestination(pathname: string) {
  const directDestination = exactCaseRedirects.get(pathname);

  if (directDestination) {
    return directDestination;
  }

  try {
    const normalizedPathname = decodeURIComponent(pathname).replace(/\u200B/g, "");
    return exactCaseRedirects.get(normalizedPathname);
  } catch {
    return undefined;
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:avif|gif|ico|jpe?g|json|mp4|otf|png|svg|txt|webp|woff2?|xml)$).*)",
  ],
};

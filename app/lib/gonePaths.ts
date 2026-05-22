const normalizeTrailingSlash = (pathname: string) =>
  pathname === "/" ? pathname : pathname.replace(/\/+$/, "") || "/";

export const gonePathnames = [
  "/product-category/compression-bandages",
  "/ircc-online-products",
  "/product/demo",
  "/bonus-casino-sign-up",
  "/checkout",
  "/product",
  "/product/compression-arm-sleeves",
  "/product/self-adherent-bandages",
  "/product/pneumatic-compression-device",
  "/product/unna-boot",
  "/product/wound-dressing",
  "/product/varicocele-underwear",
  "/bonus-casino-sign-up/contact",
  "/services/contact",
  "/author/irccpakistan",
  "/author/cutredblackfox",
  "/product/varicocele-underwear/contact",
  "/product/self-adherent-bandages/contact",
  "/ircc-online-products/contact",
  "/services",
] as const;

const normalizedGonePathnames = new Set(
  gonePathnames.map((pathname) => normalizeTrailingSlash(pathname)),
);

export function isGonePath(pathname: string) {
  const normalizedPathname = normalizeTrailingSlash(pathname);

  try {
    const decodedPathname = decodeURIComponent(normalizedPathname).replace(
      /\u200B/g,
      "",
    );

    return normalizedGonePathnames.has(decodedPathname);
  } catch {
    return normalizedGonePathnames.has(normalizedPathname);
  }
}

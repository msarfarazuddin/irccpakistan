const normalizeBasePath = (value: string | undefined) => {
  if (!value) return "";
  const trimmed = value.replace(/^\/+|\/+$/g, "");
  return trimmed ? `/${trimmed}` : "";
};

export const resolveSiteUrl = () => {
  const rawUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    "https://www.irccpakistan.com";

  const withProtocol = rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;
  return withProtocol.replace(/\/+$/, "");
};

export const getBasePath = () => normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);

export const buildAbsoluteUrl = (path: string) => {
  const siteUrl = resolveSiteUrl();
  const basePath = getBasePath();
  const routePath = path ? `${basePath}${path}` : basePath || "/";
  return new URL(routePath, siteUrl).toString();
};

const DEFAULT_SITE_URL = "http://localhost:3000";

export function getSiteUrl() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    DEFAULT_SITE_URL;

  return siteUrl.replace(/\/+$/, "");
}

export function getAbsoluteUrl(pathname: string) {
  return `${getSiteUrl()}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

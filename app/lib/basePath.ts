/**
 * Exports the Next.js basePath so client components can prefix
 * fetch() URLs, <source> src, and inline background-image URLs.
 *
 * Next.js <Link> and <Image> handle basePath automatically —
 * only use this for raw HTML and fetch().
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export default basePath;

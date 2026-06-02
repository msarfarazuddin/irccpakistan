import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogSection from "@/app/components/sections/BlogSection";
import type { BlogInlineSegment } from "@/app/data/blogPosts";
import { formatBlogDate, getAllBlogPosts, getBlogPostBySlug } from "@/app/data/blogPosts";
import { createPageMetadata } from "@/app/lib/metadata";

function renderInlineContent(segments: BlogInlineSegment[], keyPrefix: string) {
  return segments.map((segment, index) => {
    const key = `${keyPrefix}-${index}`;

    if (typeof segment === "string") {
      return <span key={key}>{segment}</span>;
    }

    if (segment.external) {
      return (
        <a
          key={key}
          href={segment.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#0E58A8] underline decoration-[#0E58A8]/30 underline-offset-4 transition hover:decoration-[#0E58A8]"
        >
          {segment.text}
        </a>
      );
    }

    return (
      <Link
        key={key}
        href={segment.href}
        className="font-medium text-[#0E58A8] underline decoration-[#0E58A8]/30 underline-offset-4 transition hover:decoration-[#0E58A8]"
      >
        {segment.text}
      </Link>
    );
  });
}

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  const title = post.metaTitle ?? `${post.title} | IRCC Pakistan`;
  const description = post.metaDescription ?? post.excerpt;

  return createPageMetadata({
    canonicalPath: `/blog/${post.slug}`,
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: post.image ? [{ url: post.image, alt: post.imageAlt ?? post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: post.image ? [post.image] : undefined,
    },
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="mt-[-100px] bg-white pt-30">
        <section className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-sm font-semibold text-[#0E58A8]">
            Back to Blog
          </Link>
          <h1 className="mt-4 text-3xl font-semibold text-[#0B1220] sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[#5B6577]">
            <span>{formatBlogDate(post.date)}</span>
            <span className="text-[#CBD5E1]">|</span>
            <span>{post.readTime}</span>
            <span className="text-[#CBD5E1]">|</span>
            <span>{post.author}</span>
          </div>
        </section>

        <div className="mx-auto mt-8 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80 lg:h-[420px]">
            <Image
              src={post.image}
              alt={post.imageAlt ?? post.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 70vw"
              priority
            />
          </div>
        </div>

        <section className="mx-auto max-w-5xl px-4 pb-16 pt-10 text-[#4B5563] sm:px-6 lg:px-8">
          {(post.content || []).map((block, index) => {
            if (typeof block === "string") {
              return (
                <p key={`${post.slug}-${index}`} className="mt-4 text-base leading-7">
                  {block}
                </p>
              );
            }

            if (block.type === "h2") {
              return (
                <h2
                  id={block.id}
                  key={`${post.slug}-${index}`}
                  className="mt-8 scroll-mt-32 text-2xl font-semibold text-[#0B1220]"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "h3") {
              return (
                <h3
                  id={block.id}
                  key={`${post.slug}-${index}`}
                  className="mt-6 scroll-mt-32 text-xl font-semibold text-[#0B1220]"
                >
                  {block.text}
                </h3>
              );
            }

            if (block.type === "p") {
              return (
                <p key={`${post.slug}-${index}`} className="mt-4 text-base leading-7">
                  {block.text}
                </p>
              );
            }

            if (block.type === "rich-p") {
              return (
                <p key={`${post.slug}-${index}`} className="mt-4 text-base leading-7">
                  {renderInlineContent(block.content, `${post.slug}-${index}`)}
                </p>
              );
            }

            if (block.type === "ul") {
              return (
                <ul key={`${post.slug}-${index}`} className="mt-4 list-disc pl-6">
                  {block.items.map((item, itemIndex) => (
                    <li key={`${post.slug}-${index}-ul-${itemIndex}`} className="mt-2">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }

            if (block.type === "ol") {
              return (
                <ol key={`${post.slug}-${index}`} className="mt-4 list-decimal pl-6">
                  {block.items.map((item, itemIndex) => (
                    <li key={`${post.slug}-${index}-ol-${itemIndex}`} className="mt-2">
                      {item}
                    </li>
                  ))}
                </ol>
              );
            }

            if (block.type === "table") {
              return (
                <div
                  key={`${post.slug}-${index}`}
                  className="mt-5 overflow-x-auto rounded-2xl border border-[#E2E8F0]"
                >
                  <table className="min-w-full border-collapse bg-white">
                    <thead>
                      <tr className="bg-[#F8FAFC] text-left">
                        {block.headers.map((header, headerIndex) => (
                          <th
                            key={`${post.slug}-${index}-header-${headerIndex}`}
                            className="px-4 py-3 text-sm font-semibold text-[#0B1220]"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, rowIndex) => (
                        <tr
                          key={`${post.slug}-${index}-row-${rowIndex}`}
                          className="border-t border-[#E2E8F0] align-top"
                        >
                          {row.map((cell, cellIndex) => (
                            <td
                              key={`${post.slug}-${index}-cell-${rowIndex}-${cellIndex}`}
                              className="px-4 py-3 text-sm leading-6"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }

            return null;
          })}

          {post.faq?.length ? (
            <section id="faq" className="mt-12 scroll-mt-32">
              <h2 className="text-2xl font-semibold text-[#0B1220]">
                Frequently Asked Questions About Fibroid Treatment
              </h2>
              <div className="mt-6 space-y-6">
                {post.faq.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5"
                  >
                    <h3 className="text-lg font-semibold text-[#0B1220]">{item.question}</h3>
                    <p className="mt-2 text-base leading-7 text-[#4B5563]">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}
        </section>
      </article>

      <BlogSection />
    </>
  );
}

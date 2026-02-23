import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogSection from "@/app/components/sections/BlogSection";
import { formatBlogDate, getAllBlogPosts, getBlogPostBySlug } from "@/app/data/blogPosts";

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
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
      <article className="bg-white pt-30 mt-[-100px]">
        <section className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-sm font-semibold text-[#0E58A8]">
            Back to Blog
          </Link>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1220]">
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
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 70vw"
              priority
            />
          </div>
        </div>

        <section className="mx-auto max-w-5xl px-4 pb-16 pt-10 text-[#4B5563] sm:px-6 lg:px-8">
          {post.content.map((block, index) => {
            // ✅ 1) If it's plain string, render as paragraph
            if (typeof block === "string") {
              return (
                <p key={`${post.slug}-${index}`} className="mt-4 text-base leading-7">
                  {block}
                </p>
              );
            }

            // ✅ 2) If it's a block object, render by type
            if (block.type === "h2") {
              return (
                <h2 key={`${post.slug}-${index}`} className="mt-8 text-2xl font-semibold text-[#0B1220]">
                  {block.text}
                </h2>
              );
            }

            if (block.type === "h3") {
              return (
                <h3 key={`${post.slug}-${index}`} className="mt-6 text-xl font-semibold text-[#0B1220]">
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

            if (block.type === "ul") {
              return (
                <ul key={`${post.slug}-${index}`} className="mt-4 list-disc pl-6">
                  {block.items.map((it, idx) => (
                    <li key={idx} className="mt-2">
                      {it}
                    </li>
                  ))}
                </ul>
              );
            }

            return null;
          })}
        </section>
      </article>

      <BlogSection />
    </>
  );
}

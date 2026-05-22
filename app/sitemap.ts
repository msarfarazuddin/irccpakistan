import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/app/data/blogPosts";
import { buildAbsoluteUrl } from "@/app/lib/siteUrl";

type SitemapEntry = MetadataRoute.Sitemap[number];

type StaticRoute = {
  path: string;
  changeFrequency: SitemapEntry["changeFrequency"];
  priority: number;
};

const staticRoutes: StaticRoute[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/About", changeFrequency: "monthly", priority: 0.8 },
  { path: "/Clinic", changeFrequency: "monthly", priority: 0.75 },
  { path: "/Contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/female-clinic", changeFrequency: "weekly", priority: 0.85 },
  { path: "/get-consultation", changeFrequency: "weekly", priority: 0.85 },
  { path: "/minimally-invasive-treatment-karachi", changeFrequency: "monthly", priority: 0.78 },
  { path: "/interventional-radiology-lahore", changeFrequency: "monthly", priority: 0.8 },
  { path: "/non-surgical-treatment-islamabad", changeFrequency: "monthly", priority: 0.78 },
  { path: "/Dialysis-Access-Care-and-Management", changeFrequency: "monthly", priority: 0.7 },
  { path: "/Endometriotic-Ovarian-Cyst-Ablation", changeFrequency: "monthly", priority: 0.7 },
  { path: "/Fallopian-Tube-Recanalization", changeFrequency: "monthly", priority: 0.7 },
  { path: "/Genicular-Arterial-Embolization-for-Knee-Pain", changeFrequency: "monthly", priority: 0.7 },
  { path: "/Hemorrhoidal-Artery-Embolization", changeFrequency: "monthly", priority: 0.7 },
  { path: "/Interventional-Oncology", changeFrequency: "monthly", priority: 0.75 },
  { path: "/Pelvic-Congestion-Syndrome-Treatment", changeFrequency: "monthly", priority: 0.7 },
  { path: "/Peripheral-Vascular-Disease", changeFrequency: "monthly", priority: 0.7 },
  { path: "/Plantar-Fasciitis", changeFrequency: "monthly", priority: 0.7 },
  { path: "/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia", changeFrequency: "monthly", priority: 0.7 },
  { path: "/Radiofrequency-Ablation-of-Osteoid-Osteoma", changeFrequency: "monthly", priority: 0.7 },
  { path: "/Tenosynovitis", changeFrequency: "monthly", priority: 0.7 },
  { path: "/Thyroid-Alcohol-cyst-ablation", changeFrequency: "monthly", priority: 0.7 },
  { path: "/Thyroid-Artery-Embolization", changeFrequency: "monthly", priority: 0.7 },
  { path: "/Thyroid-Radiofrequency-Ablation", changeFrequency: "monthly", priority: 0.75 },
  { path: "/Transjugular-Intrahepatic-Portosystemic-Shunt", changeFrequency: "monthly", priority: 0.7 },
  { path: "/Uterine-Fibroid-Embolization", changeFrequency: "monthly", priority: 0.75 },
  { path: "/Vascular-Malformation-Treatment", changeFrequency: "monthly", priority: 0.7 },
  { path: "/Varicocele-Embolization", changeFrequency: "monthly", priority: 0.75 },
  { path: "/Varicose-Vein-Ablation", changeFrequency: "monthly", priority: 0.75 },
];

const toUtcDate = (date: string) => new Date(`${date}T00:00:00Z`);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: buildAbsoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: buildAbsoluteUrl(`/blog/${post.slug}`),
    lastModified: toUtcDate(post.date),
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticEntries, ...blogEntries];
}

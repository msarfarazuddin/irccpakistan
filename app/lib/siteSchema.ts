import type { BlogPost } from "@/app/data/blogPosts";
import { getAllBlogPosts, getBlogPostBySlug } from "@/app/data/blogPosts";
import { gonePathnames } from "@/app/lib/gonePaths";
import { buildAbsoluteUrl, getBasePath } from "@/app/lib/siteUrl";

type JsonLdNode = Record<string, unknown>;

type RouteWebPageType =
  | "AboutPage"
  | "CollectionPage"
  | "ContactPage"
  | "MedicalWebPage"
  | "WebPage";

type RouteCategory = "content" | "medical-service";

type RouteSchemaMeta = {
  canonicalPath: string;
  category: RouteCategory;
  description?: string;
  breadcrumbName?: string;
  name: string;
  webPageType: RouteWebPageType;
};

const SITE_NAME = "IRCC Pakistan";
const SITE_LEGAL_NAME =
  "IRCC Pakistan - Interventional Radiology & Vascular Treatment Center";
const SITE_DESCRIPTION =
  "Pakistan's leading interventional radiology and vascular treatment center offering minimally invasive procedures including UFE, varicocele embolization, thyroid RFA, and more.";
const SITE_EMAIL = "irccpakistan@gmail.com";
const SITE_LANGUAGE = "en-PK";
const SITE_SLOGAN = "Your Health, Our Priority Anytime, Anywhere";

const phoneNumbers = ["+92-3324520052", "+92-3310232883", "+92-3340005020"] as const;

const socialProfiles = [
  "https://www.facebook.com/irccpakistan",
  "https://instagram.com/irccpakistan?igshid=i7fclbk4863y",
  "https://twitter.com/irccpakistan?lang=en",
  "https://www.tiktok.com/@drshahbazqazi",
  "https://www.snapchat.com/add/irccpakistan",
] as const;

const doctorSocialProfiles = ["https://www.tiktok.com/@drshahbazqazi"] as const;

const medicalSpecialties = [
  "https://schema.org/Radiography",
  "https://schema.org/Cardiovascular",
  "https://schema.org/Gynecologic",
  "https://schema.org/Oncologic",
  "https://schema.org/Urologic",
  "https://schema.org/Musculoskeletal",
] as const;

const routeSchemaEntries: RouteSchemaMeta[] = [
  {
    canonicalPath: "/",
    category: "content",
    description:
      "IRCC Pakistan Minimally invasive treatments for fibroids, varicocele & vascular diseases. Led by Dr. Shahbaz Qazi. Book a consultation today.",
    breadcrumbName: "Home",
    name: "IRCC Pakistan | Interventional Radiology & Vascular Treatment Center",
    webPageType: "WebPage",
  },
  {
    canonicalPath: "/About",
    category: "content",
    description:
      "Learn about IRCC Pakistan and Dr. Shahbaz Ahmed Qazi - Pakistan's No.1 interventional radiologist with 25+ years of minimally invasive expertise.",
    breadcrumbName: "About",
    name: "About IRCC Pakistan | Dr. Shahbaz Ahmed Qazi",
    webPageType: "AboutPage",
  },
  {
    canonicalPath: "/Clinic",
    category: "content",
    description:
      "Visit IRCC Pakistan at our clinics in Lahore DHA, Karachi Clifton, and Islamabad. Expert interventional radiology care near you. Book a consultation today.",
    breadcrumbName: "Clinics",
    name: "Dr. Shahbaz Ahmed Qazi's Interventional Radiology Clinic in Pakistan",
    webPageType: "CollectionPage",
  },
  {
    canonicalPath: "/Contact",
    category: "content",
    description:
      "Contact IRCC Pakistan to book your appointment with Dr. Shahbaz Ahmed Qazi. Call, WhatsApp or visit our clinic in DHA Lahore. We're here to help.",
    breadcrumbName: "Contact",
    name: "Contact IRCC Pakistan | Book an Appointment Today",
    webPageType: "ContactPage",
  },
  {
    canonicalPath: "/blog",
    category: "content",
    description:
      "Read expert health articles on interventional radiology, minimally invasive treatments, and patient care tips from IRCC Pakistan's specialists.",
    breadcrumbName: "Blog",
    name: "Interventional Radiology Blog in Pakistan | IRCC - Latest Medical Insights & Treatments",
    webPageType: "CollectionPage",
  },
  {
    canonicalPath: "/female-clinic",
    category: "content",
    description:
      "IRCC Pakistan's female clinic offers specialized minimally invasive treatments for women including UFE, fallopian tube recanalization and more.",
    breadcrumbName: "Female Clinic",
    name: "Female Clinic | Women's Health Services - IRCC Pakistan",
    webPageType: "MedicalWebPage",
  },
  {
    canonicalPath: "/get-consultation",
    category: "content",
    description:
      "Book your consultation with Dr. Shahbaz Ahmed Qazi at IRCC Pakistan. Expert advice on minimally invasive treatments - no surgery needed.",
    breadcrumbName: "Get Consultation",
    name: "Get Consultation | IRCC Pakistan Interventional Radiology",
    webPageType: "WebPage",
  },
  {
    canonicalPath: "/minimally-invasive-treatment-karachi",
    category: "medical-service",
    description:
      "Minimally invasive treatment in Karachi by expert interventional radiologist Dr. Shahbaz Qazi. UFE, varicocele, thyroid, varicose veins. Book consultation now.",
    breadcrumbName: "Karachi Treatment",
    name: "Minimally Invasive Treatment Karachi | IRCC Pakistan",
    webPageType: "MedicalWebPage",
  },
  {
    canonicalPath: "/interventional-radiology-lahore",
    category: "medical-service",
    description:
      "Interventional radiology in Lahore by expert Dr. Shahbaz Qazi. UFE, varicocele, thyroid, prostate treatment. World-class DHA clinic. Book consultation.",
    breadcrumbName: "Lahore IR",
    name: "Interventional Radiology Lahore | Dr. Shahbaz Qazi | IRCC",
    webPageType: "MedicalWebPage",
  },
  {
    canonicalPath: "/non-surgical-treatment-islamabad",
    category: "medical-service",
    description:
      "Advanced non-surgical treatment in Islamabad - fibroid, varicocele, thyroid, varicose veins. Expert interventional radiologist. Discreet, affordable. Book consultation.",
    breadcrumbName: "Islamabad Non-Surgical",
    name: "Non-Surgical Treatment Islamabad | IRCC Pakistan",
    webPageType: "MedicalWebPage",
  },
  {
    canonicalPath: "/Dialysis-Access-Care-and-Management",
    category: "medical-service",
    description:
      "IRCC Pakistan provides expert dialysis access management including fistula angioplasty and thrombectomy to preserve kidney patients' vascular access.",
    name: "Dialysis Access Care & Management | IRCC Pakistan",
    webPageType: "MedicalWebPage",
  },
  {
    canonicalPath: "/Endometriotic-Ovarian-Cyst-Ablation",
    category: "medical-service",
    description:
      "Image-guided treatment for chocolate cysts (endometriomas) at IRCC Pakistan. Relieve pelvic pain and preserve fertility no major surgery, faster recovery.",
    name: "Endometriotic Ovarian Cyst Ablation | IRCC Pakistan",
    webPageType: "MedicalWebPage",
  },
  {
    canonicalPath: "/Fallopian-Tube-Recanalization",
    category: "medical-service",
    description:
      "Treat tubal blockage infertility without surgery at IRCC Pakistan. Fallopian tube recanalization is safe, effective and minimally invasive.",
    name: "Fallopian Tube Recanalization | Infertility Treatment Pakistan",
    webPageType: "MedicalWebPage",
  },
  {
    canonicalPath: "/Genicular-Arterial-Embolization-for-Knee-Pain",
    category: "medical-service",
    description:
      "Relieve chronic knee pain from osteoarthritis without surgery at IRCC Pakistan. GAE reduces inflammation via image-guided embolization same-day, local anaesthesia.",
    name: "Genicular Artery Embolization for Knee Pain | IRCC Pakistan",
    webPageType: "MedicalWebPage",
  },
  {
    canonicalPath: "/Hemorrhoidal-Artery-Embolization",
    category: "medical-service",
    description:
      "Treat bleeding haemorrhoids without painful surgery at IRCC Pakistan. HAE is a minimally invasive, image-guided procedure no surgical cuts, fast recovery.",
    name: "Hemorrhoidal Artery Embolization | IRCC Pakistan",
    webPageType: "MedicalWebPage",
  },
  {
    canonicalPath: "/Interventional-Oncology",
    category: "medical-service",
    description:
      "IRCC Pakistan offers radioembolization, chemoembolization & bland embolization for liver and other cancers targeted, minimally invasive therapies with same-day discharge.",
    name: "Interventional Oncology | Cancer Treatment - IRCC Pakistan",
    webPageType: "MedicalWebPage",
  },
  {
    canonicalPath: "/Pelvic-Congestion-Syndrome-Treatment",
    category: "medical-service",
    description:
      "Relieve chronic pelvic pain caused by pelvic congestion syndrome with minimally invasive embolization at IRCC Pakistan. Book a consultation.",
    name: "Pelvic Congestion Syndrome Treatment | IRCC Pakistan",
    webPageType: "MedicalWebPage",
  },
  {
    canonicalPath: "/Peripheral-Vascular-Disease",
    category: "medical-service",
    description:
      "IRCC Pakistan treats peripheral artery disease (PAD) with image-guided procedures to restore blood flow to legs and feet. Non-surgical options.",
    name: "Peripheral Vascular Disease Treatment | IRCC Pakistan",
    webPageType: "MedicalWebPage",
  },
  {
    canonicalPath: "/Plantar-Fasciitis",
    category: "medical-service",
    description:
      "IRCC Pakistan offers minimally invasive, image-guided embolization for chronic heel pain from plantar fasciitis - no surgery, no stitches, back to normal life quickly.",
    name: "Plantar Fasciitis Treatment | Interventional Radiology - IRCC",
    webPageType: "MedicalWebPage",
  },
  {
    canonicalPath: "/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia",
    category: "medical-service",
    description:
      "Treat enlarged prostate (BPH) without surgery at IRCC Pakistan. Prostate artery embolization offers fast relief with minimal downtime.",
    name: "Prostate Artery Embolization for BPH | IRCC Pakistan",
    webPageType: "MedicalWebPage",
  },
  {
    canonicalPath: "/Radiofrequency-Ablation-of-Osteoid-Osteoma",
    category: "medical-service",
    description:
      "IRCC Pakistan performs Pakistan's highest number of osteoid osteoma RFA procedures. CT-guided, same-day discharge return to school or work within a few days.",
    name: "RFA of Osteoid Osteoma | Bone Pain Treatment - IRCC Pakistan",
    webPageType: "MedicalWebPage",
  },
  {
    canonicalPath: "/Tenosynovitis",
    category: "medical-service",
    description:
      "Treat painful tenosynovitis without surgery at IRCC Pakistan. Image-guided anti-inflammatory injections reduce swelling and restore movement precise and effective.",
    name: "Tenosynovitis Treatment | Non-Surgical IR Care - IRCC Pakistan",
    webPageType: "MedicalWebPage",
  },
  {
    canonicalPath: "/Thyroid-Alcohol-cyst-ablation",
    category: "medical-service",
    description:
      "Treat fluid-filled thyroid cysts without surgery at IRCC Pakistan. Ultrasound-guided ethanol ablation - drain, treat, and prevent refilling. No stitches, quick recovery.",
    name: "Thyroid Alcohol Cyst Ablation | IRCC Pakistan",
    webPageType: "MedicalWebPage",
  },
  {
    canonicalPath: "/Thyroid-Artery-Embolization",
    category: "medical-service",
    description:
      "Shrink enlarged thyroid gland or large nodules without surgery at IRCC Pakistan. TAE is image-guided, relieves pressure symptoms, and avoids general anaesthesia.",
    name: "Thyroid Artery Embolization | Enlarged Thyroid - IRCC Pakistan",
    webPageType: "MedicalWebPage",
  },
  {
    canonicalPath: "/Thyroid-Radiofrequency-Ablation",
    category: "medical-service",
    description:
      "Treat thyroid nodules and cysts without surgery using RFA at IRCC Pakistan. Proven results with 100% patient satisfaction and minimal downtime.",
    name: "Thyroid Radiofrequency Ablation | Non-Surgical Thyroid Care",
    webPageType: "MedicalWebPage",
  },
  {
    canonicalPath: "/Transjugular-Intrahepatic-Portosystemic-Shunt",
    category: "medical-service",
    description:
      "IRCC Pakistan offers TIPS for portal hypertension 80-90% success in stopping variceal bleeding and 65% reduction in ascites. Image-guided, minimally invasive care.",
    name: "TIPS Procedure | Portal Hypertension Treatment - IRCC Pakistan",
    webPageType: "MedicalWebPage",
  },
  {
    canonicalPath: "/Uterine-Fibroid-Embolization",
    category: "medical-service",
    description:
      "Avoid fibroid surgery with UFE at IRCC Pakistan. Dr. Shahbaz offers minimally invasive uterine fibroid embolization with fast recovery in Pakistan.",
    name: "Uterine Fibroid Embolization (UFE) | IRCC Pakistan",
    webPageType: "MedicalWebPage",
  },
  {
    canonicalPath: "/Vascular-Malformation-Treatment",
    category: "medical-service",
    description:
      "IRCC Pakistan offers image-guided, minimally invasive treatment for vascular malformations of veins, arteries and lymph vessels. Consult today.",
    name: "Vascular Malformation Treatment | IRCC Pakistan",
    webPageType: "MedicalWebPage",
  },
  {
    canonicalPath: "/Varicocele-Embolization",
    category: "medical-service",
    description:
      "IRCC Pakistan has the highest number of varicocele embolizations in Pakistan. Treat pain and infertility without surgery. Book a consultation.",
    name: "Varicocele Embolization | Non-Surgical Treatment Pakistan",
    webPageType: "MedicalWebPage",
  },
  {
    canonicalPath: "/Varicose-Vein-Ablation",
    category: "medical-service",
    description:
      "Get rid of varicose veins without surgery at IRCC Pakistan. Laser and radiofrequency ablation for quick, effective relief and fast recovery.",
    name: "Varicose Vein Ablation | Laser & RFA Treatment Pakistan",
    webPageType: "MedicalWebPage",
  },
];

const excludedSchemaPaths = new Set(
  ["/search", "/thank-you", ...gonePathnames].map((pathname) =>
    normalizeSchemaPath(pathname),
  ),
);

const routeSchemaRegistry = new Map(
  routeSchemaEntries.map((entry) => [normalizeSchemaPath(entry.canonicalPath), entry]),
);

const organizationId = buildNodeId("/", "organization");
const physicianId = buildNodeId("/", "physician");
const websiteId = buildNodeId("/", "website");
const logoId = buildNodeId("/", "logo");

export function buildGlobalStructuredData(): Record<string, unknown> {
  const serviceNodes = getMedicalServiceEntries().map(buildServiceNode);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "Organization"],
        "@id": organizationId,
        name: SITE_NAME,
        legalName: SITE_LEGAL_NAME,
        alternateName: "Interventional Radiology & Vascular Treatment Center Pakistan",
        url: buildAbsoluteUrl("/"),
        description: SITE_DESCRIPTION,
        slogan: SITE_SLOGAN,
        email: SITE_EMAIL,
        telephone: [...phoneNumbers],
        image: buildAbsoluteUrl("/logo.png"),
        logo: { "@id": logoId },
        sameAs: [...socialProfiles],
        availableLanguage: ["English", "Urdu"],
        isAcceptingNewPatients: true,
        medicalSpecialty: medicalSpecialties.map((specialty) => ({ "@id": specialty })),
        founder: { "@id": physicianId },
        employee: { "@id": physicianId },
        areaServed: {
          "@type": "Country",
          name: "Pakistan",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "153/1, F Block Phase 5 D.H.A",
          addressLocality: "Lahore",
          addressCountry: "PK",
        },
        contactPoint: phoneNumbers.map((telephone) => ({
          "@type": "ContactPoint",
          contactType: "appointments",
          telephone,
          areaServed: "PK",
          availableLanguage: ["English", "Urdu"],
          email: SITE_EMAIL,
        })),
        availableService: serviceNodes.map((node) => ({
          "@id": node["@id"],
        })),
      },
      {
        "@type": "ImageObject",
        "@id": logoId,
        contentUrl: buildAbsoluteUrl("/logo.png"),
        url: buildAbsoluteUrl("/logo.png"),
        caption: SITE_NAME,
      },
      {
        "@type": "Physician",
        "@id": physicianId,
        name: "Dr. Shahbaz Ahmed Qazi",
        url: buildAbsoluteUrl("/About"),
        worksFor: { "@id": organizationId },
        jobTitle: "Interventional Radiologist",
        description:
          "Dr. Shahbaz Ahmed Qazi is an interventional radiologist leading minimally invasive vascular, oncologic, musculoskeletal, thyroid, and women's health procedures at IRCC Pakistan.",
        sameAs: [...doctorSocialProfiles],
        medicalSpecialty: medicalSpecialties.map((specialty) => ({ "@id": specialty })),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: buildAbsoluteUrl("/"),
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: SITE_LANGUAGE,
        publisher: { "@id": organizationId },
      },
      ...serviceNodes,
    ],
  };
}

export function buildRouteStructuredData(pathname: string | null) {
  if (!pathname) {
    return null;
  }

  const cleanedPathname = cleanPathname(pathname);
  const normalizedPathname = normalizeSchemaPath(cleanedPathname);

  if (excludedSchemaPaths.has(normalizedPathname)) {
    return null;
  }

  const blogPost = getBlogPostFromPath(cleanedPathname);

  if (blogPost) {
    const webpageUrl = buildAbsoluteUrl(`/blog/${blogPost.slug}`);
    const breadcrumbNode = buildBreadcrumbNode(cleanedPathname, blogPost.title);
    const webpageNode = buildBlogPageNode(blogPost, webpageUrl);
    const blogPostingNode = buildBlogPostingNode(blogPost, webpageUrl);

    return {
      "@context": "https://schema.org",
      "@graph": [webpageNode, breadcrumbNode, blogPostingNode],
    };
  }

  const routeMeta = routeSchemaRegistry.get(normalizedPathname);

  if (!routeMeta) {
    return null;
  }

  const webpageUrl = buildAbsoluteUrl(routeMeta.canonicalPath);
  const breadcrumbNode = buildBreadcrumbNode(routeMeta.canonicalPath, routeMeta.name);
  const webpageNode = buildRouteWebPageNode(routeMeta, webpageUrl);
  const graph: JsonLdNode[] = [webpageNode, breadcrumbNode];

  if (normalizedPathname === normalizeSchemaPath("/blog")) {
    graph.push(buildBlogIndexItemListNode());
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

function buildRouteWebPageNode(
  routeMeta: RouteSchemaMeta,
  webpageUrl: string,
): JsonLdNode {
  const webpageId = buildNodeId(routeMeta.canonicalPath, "webpage");
  const baseNode: JsonLdNode = {
    "@type": routeMeta.webPageType,
    "@id": webpageId,
    url: webpageUrl,
    name: routeMeta.name,
    description: routeMeta.description,
    inLanguage: SITE_LANGUAGE,
    isPartOf: { "@id": websiteId },
    breadcrumb: { "@id": buildNodeId(routeMeta.canonicalPath, "breadcrumb") },
  };

  if (routeMeta.category === "medical-service") {
    return {
      ...baseNode,
      about: { "@id": buildServiceNodeId(routeMeta.canonicalPath) },
      mainEntity: { "@id": buildServiceNodeId(routeMeta.canonicalPath) },
    };
  }

  if (normalizeSchemaPath(routeMeta.canonicalPath) === normalizeSchemaPath("/About")) {
    return {
      ...baseNode,
      about: [{ "@id": organizationId }, { "@id": physicianId }],
      mainEntity: { "@id": organizationId },
    };
  }

  if (normalizeSchemaPath(routeMeta.canonicalPath) === normalizeSchemaPath("/Contact")) {
    return {
      ...baseNode,
      about: { "@id": organizationId },
      mainEntity: { "@id": organizationId },
    };
  }

  if (normalizeSchemaPath(routeMeta.canonicalPath) === normalizeSchemaPath("/blog")) {
    return {
      ...baseNode,
      about: { "@id": organizationId },
      mainEntity: { "@id": buildNodeId("/blog", "itemlist") },
    };
  }

  return {
    ...baseNode,
    about: { "@id": organizationId },
  };
}

function buildBlogPageNode(blogPost: BlogPost, webpageUrl: string): JsonLdNode {
  return {
    "@type": "MedicalWebPage",
    "@id": buildNodeId(`/blog/${blogPost.slug}`, "webpage"),
    url: webpageUrl,
    name: `${blogPost.title} | IRCC Pakistan`,
    description: blogPost.excerpt,
    inLanguage: SITE_LANGUAGE,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    mainEntity: { "@id": buildNodeId(`/blog/${blogPost.slug}`, "blogposting") },
    breadcrumb: { "@id": buildNodeId(`/blog/${blogPost.slug}`, "breadcrumb") },
  };
}

function buildBlogPostingNode(blogPost: BlogPost, webpageUrl: string): JsonLdNode {
  return {
    "@type": "BlogPosting",
    "@id": buildNodeId(`/blog/${blogPost.slug}`, "blogposting"),
    url: webpageUrl,
    headline: blogPost.title,
    name: blogPost.title,
    description: blogPost.excerpt,
    articleSection: "Interventional Radiology",
    datePublished: toIsoDate(blogPost.date),
    dateModified: toIsoDate(blogPost.date),
    inLanguage: SITE_LANGUAGE,
    wordCount: countWords(flattenBlogText(blogPost)),
    image: toAbsoluteUrl(blogPost.image),
    mainEntityOfPage: { "@id": buildNodeId(`/blog/${blogPost.slug}`, "webpage") },
    publisher: { "@id": organizationId },
    author: resolveBlogAuthor(blogPost.author),
  };
}

function buildBlogIndexItemListNode(): JsonLdNode {
  const blogPosts = getAllBlogPosts();

  return {
    "@type": "ItemList",
    "@id": buildNodeId("/blog", "itemlist"),
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: blogPosts.length,
    itemListElement: blogPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: buildAbsoluteUrl(`/blog/${post.slug}`),
      name: post.title,
    })),
  };
}

function buildServiceNode(routeMeta: RouteSchemaMeta): JsonLdNode {
  return {
    "@type": "MedicalProcedure",
    "@id": buildServiceNodeId(routeMeta.canonicalPath),
    url: buildAbsoluteUrl(routeMeta.canonicalPath),
    name: routeMeta.breadcrumbName ?? toDisplayName(routeMeta.name),
    description: routeMeta.description,
    howPerformed:
      "A minimally invasive, image-guided interventional radiology procedure or therapy performed through targeted access instead of open surgery.",
    procedureType: { "@id": "https://schema.org/PercutaneousProcedure" },
    mainEntityOfPage: buildAbsoluteUrl(routeMeta.canonicalPath),
  };
}

function buildBreadcrumbNode(pathname: string, currentName: string): JsonLdNode {
  const cleanedPathname = cleanPathname(pathname);
  const breadcrumbItems: JsonLdNode[] = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: buildAbsoluteUrl("/"),
    },
  ];

  if (cleanedPathname === "/") {
    return {
      "@type": "BreadcrumbList",
      "@id": buildNodeId("/", "breadcrumb"),
      itemListElement: breadcrumbItems,
    };
  }

  const segments = cleanedPathname.split("/").filter(Boolean);
  let runningPath = "";

  for (const [index, segment] of segments.entries()) {
    runningPath += `/${segment}`;

    const isLast = index === segments.length - 1;
    const meta = routeSchemaRegistry.get(normalizeSchemaPath(runningPath));
    const name = isLast
      ? toDisplayName(currentName)
      : meta?.breadcrumbName ?? toDisplayName(meta?.name ?? segment);

    breadcrumbItems.push({
      "@type": "ListItem",
      position: breadcrumbItems.length + 1,
      name,
      item: buildAbsoluteUrl(meta?.canonicalPath ?? runningPath),
    });
  }

  return {
    "@type": "BreadcrumbList",
    "@id": buildNodeId(cleanedPathname, "breadcrumb"),
    itemListElement: breadcrumbItems,
  };
}

function buildServiceNodeId(pathname: string) {
  return buildNodeId(pathname, "medical-procedure");
}

function buildNodeId(pathname: string, fragment: string) {
  return `${buildAbsoluteUrl(pathname)}#${fragment}`;
}

function getMedicalServiceEntries() {
  return routeSchemaEntries.filter((entry) => entry.category === "medical-service");
}

function getBlogPostFromPath(pathname: string) {
  const blogPrefix = "/blog/";

  if (!normalizeSchemaPath(pathname).startsWith(normalizeSchemaPath(blogPrefix))) {
    return undefined;
  }

  const slug = cleanPathname(pathname).slice(blogPrefix.length);
  return slug ? getBlogPostBySlug(slug) : undefined;
}

function resolveBlogAuthor(author: string) {
  if (/shahbaz/i.test(author)) {
    return { "@id": physicianId };
  }

  return { "@id": organizationId };
}

function flattenBlogText(blogPost: BlogPost) {
  return blogPost.content
    .map((block) => {
      if (typeof block === "string") {
        return block;
      }

      if (block.type === "ul") {
        return block.items.join(" ");
      }

      return block.text;
    })
    .join(" ");
}

function countWords(text: string) {
  const normalizedText = text.trim().replace(/\s+/g, " ");
  return normalizedText ? normalizedText.split(" ").length : 0;
}

function toAbsoluteUrl(url: string) {
  return url.startsWith("http") ? url : buildAbsoluteUrl(url);
}

function toIsoDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toISOString();
}

function toDisplayName(value: string) {
  return value
    .replace(/\s+\|\s+IRCC.*$/i, "")
    .replace(/\s+-\s+IRCC.*$/i, "")
    .replace(/\s+\|\s+Book an Appointment Today$/i, "")
    .replace(/\s+\|\s+Women's Health Services$/i, "")
    .replace(/\s+\|\s+Latest Medical Insights & Treatments$/i, "")
    .trim();
}

function cleanPathname(pathname: string) {
  const [pathOnly] = pathname.split(/[?#]/, 1);
  const withoutBasePath = stripBasePath(pathOnly || "/");
  const normalizedPath = withoutBasePath === "/" ? "/" : withoutBasePath.replace(/\/+$/, "");
  return normalizedPath || "/";
}

function normalizeSchemaPath(pathname: string) {
  return cleanPathname(pathname).toLowerCase();
}

function stripBasePath(pathname: string) {
  const basePath = getBasePath();

  if (!basePath) {
    return pathname || "/";
  }

  if (pathname.toLowerCase().startsWith(basePath.toLowerCase())) {
    const strippedPathname = pathname.slice(basePath.length);
    return strippedPathname || "/";
  }

  return pathname || "/";
}

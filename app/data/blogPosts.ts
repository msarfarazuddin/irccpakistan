export type BlogContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  author: string;
  readTime: string;

  // ✅ allow both during migration
  content: Array<string | BlogContentBlock>;
};


const blogPosts: BlogPost[] = [
  {
    slug: "am-i-in-danger-if-i-dont-treat-my-varicose-veins",
    title: "Am I in Danger if I don’t Treat My Varicose Veins?",
    date: "2025-02-12",
    excerpt: "Varicose veins are bulging, twisted veins that can be seen and felt right under the skin. They commonly occur on the legs, and are present in up to 30% of people.",
    image: "/varicose-viens.jpg",
    author: "Dr Shahbaz Ahmed Qazi",
    readTime: "6 min read",
    content: [
      {
        type: "p",
        text: "Varicose veins are bulging, twisted veins that can be seen and felt right under the skin. They commonly occur on the legs, and are present in up to 30% of people. Sometimes, they really are just a cosmetic issue, which is most often the case with spider veins. Spider veins are a smaller version of varicose veins that can appear as red or blue lines in a webbed pattern. Varicose veins and spider veins differ, largely because varicose veins can lead to more serious health problems. And if your varicose veins are painful, it’s important that you don’t ignore them.",
      },
      {
        type: "p",
        text: "Varicose veins form when the one-way valves in the veins that are designed to prevent the backflow of blood become leaky and blood pools in the veins. Or, for various reasons, the vein walls may become weak and unable to handle the pressure from the increased amount of blood. These factors are thought to lead to the enlargement and twisting of the veins, which ultimately results in the appearance of varicose veins.",
      },
      {
        type: "p",
        text: "Varicose veins can significantly impact quality of life, and up to 70% of people with them will have leg symptoms beyond just appearance. Painful varicose veins should not be ignored.",
      },
      { type: "h2", text: "Why Painful Varicose Veins Should Not Be Ignored?" },
      {
        type: "p",
        text: "Painful varicose veins can be a sign of a more serious problem, such as a blood clot, an open sore or a skin infection. If you have a varicose vein that is becoming or has become painful, it could be a clue that something more serious is happening and you should see your interventional radiologist.",
      },
      {
        type: "p",
        text: "Painful varicose veins can get worse, and as they worsen, you can develop new complications as a result. Hidden dangers to be aware of if you don’t treat varicose veins include:",
      },
      {
        type: "ul",
        items: [
          "Leg Swelling",
          "Skin Ulcers ",
          "Skin Infection ",
          "Bleeding ",
          "Thrombophlebitis",
        ],
      },
      { type: "h2", text: "Take Action Against Vein Disease" },
      {
        type: "p",
        text: "The best time to take action against vein disease or seek treatment for vein disease is when you first notice the symptoms. However, it is never too late to restore your quality of life through vein disease treatments.",
      },
      { type: "h2", text: "What is Radiofrequency Ablation?  What is Endovenous Laser Ablation?" },
      {
        type: "p",
        text: "Endovenous procedures are treatments that occur within the veins. Radiofrequency or laser energy is used to heat and irritate the inside of the vein, causing it to scar and, eventually, clot off.  This redirects blood flow to other healthy veins. While this can lead to improving the appearance of varicose veins, it is also particularly helpful to treat painful or uncomfortable leg symptoms that can be the result of varicose veins.",
      },
      {
        type: "p",
        text: "Endovenous radiofrequency ablation and laser ablation may be excellent options for you. If you have large varicose veins that are causing you problems, and you are hoping to avoid surgery, set up a consultation with an interventional radiologist of IRCC Pakistan who specializes in endovenous treatment of varicose veins.",
      },
    ],
  },

  {
    slug: "varicocele-and-male-infertility-is-there-any-link",
    title: "Varicocele and Male Infertility- is there any link?",
    date: "2025-03-15",
    excerpt:"Male infertility often involves low sperm count. Varicocele, swollen veins within the testicles, is a common contributor and can impact sperm health.",
    image: "/vericocele.jpg",
    author: "Dr Shahbaz Ahmed Qazi",
    readTime: "5 min read",
    content: [
      {
        type: "p",
        text: "Male infertility typically involves one having a low sperm count. Varicocele (swollen veins within the testicles) is the main contributing factor leading to decrease in the number and formation of abnormal structure sperms and can have a negative effect on those wishing to start a family.",
      },
      {
        type: "p",
        text: "Many men often don’t know they have a varicocele until they are evaluated for infertility. Varicoceles occur in 15% of all men, and are thought to be involved in up to 40% of cases of infertility. The good news is there is a non surgical varicocele infertility treatment option now available in Pakistan. ",
      },
      { type: "h2", text: "How does a varicocele cause infertility?" },
      {
        type: "p",
        text: "Varicoceles raise the temperature of the testicle, which affects the development of sperm.This increase in temperature has two effects. First, it leads to a decrease in the production of testosterone, which is the male hormone involved in the production of sperm.",
      },
      {
        type: "p",
        text: "This decrease in testosterone leads to a reduction to the number of sperm produced and may also lead to defects in the development of the sperm so that the motility, or the ability of the sperm to swim, is impaired. The increased temperature is also thought to lead to a rise in reactive oxygen species, which is said to damage the sperm’s DNA and membrane, or outer coating. All of these effects harm the health of the sperm.",
      },
       { type: "h2", text: "How to Treat Varicocele Infertility Without Surgery?" },
      {
        type: "p",
        text: "Hopefully you have a better understanding of the link between varicocele and infertility. More importantly, you should be aware of the treatment options that are available to reverse varicoceles. Varicoceles can be reversed through a nonsurgical minimal invasive treatment option called Varicocele Embolization.This treatment can alleviate the varicocele and lead to improvements in the sperm count and quality. ",
      },
       { type: "h2", text: "What are chances of getting pregnant after Varicocele Embolization?" },
      {
        type: "p",
        text: "The main reason men tend to consider varicocele embolization treatment is the possibility of improving fertility. About 3 months after treatment, sperm count can go up and the health of the sperm can improve. Following varicocele  embolization 30-50% of couples become pregnant.",
      },
      {
        type: "p",
        text: "Dealing with varicocele can be a challenge, but with the right guidance, it’s certainly manageable. Before jumping to any conclusions on your own, it’s always best to discuss your concerns with a professional interventional radiologist to receive expert advice. ",
      },
    ],
  },

  {
    slug: "pakistani-women-largely-unaware-of-uterine-fibroid-embolization-as-an-option-of-fibroid-treatment-without-surgery",
    title: "Pakistani women largely unaware of uterine fibroid!",
    date: "2025-04-26",
    excerpt:
      "Varicose veins are bulging, twisted veins visible under the skin. While often considered cosmetic, they can signal circulation problems.",
    image: "/blog.png",
    author: "IRCC Pakistan",
    readTime: "4 min read",
    content: [
      {
        type: "p",
        text: "For decades, women with uterine fibroids, or benign growths inside the uterus, commonly have been offered two options to manage the symptoms—get a hysterectomy, or just deal with the pain.",
      },
      {
        type: "p",
        text: "Uterine fibroid embolization, a minimally invasive procedure, can relieve painful symptoms without removing a woman’s uterus.",
      },
      {
        type: "p",
        text: "But a 2017 survey found that almost half of women diagnosed with uterine fibroids had never heard of uterine fibroid embolization, which has been available for a while from the last  decade. This statistic shocked IRCC Pakistan my center colleagues and me. Women need to know about this life-changing procedure, which involves pinhole incisions only and has been shown to improve symptoms in 90 percent of the women who get it.",
      },
      {
        type: "p",
        text: "More than a third of all hysterectomies are performed due to uterine fibroids. Doctors must do a better job of getting the word out about this procedure because fibroids affect millions of women. Uterine fibroid embolization is highly effective, and women who undergo the procedure can get back to their daily routines in about half the time as women who have hysterectomies.",
      },
      { type: "h2", text: "Consider uterine fibroid embolization if:" },
      {
        type: "ul",
        items: [
          "You want to keep your uterus, but your symptoms affect your quality of life (the procedure is around 90 percent effective to manage symptoms)",
          "You might want to become pregnant in the future",
          "You’d prefer a quicker recovery time of seven to 10 days",
        ],
      },
      {
        type: "p",
        text: "Our interventional radiologists to discuss treatment plans for every patient with fibroids. Then, we counsel our patients about their options and discuss the science behind our recommendations. If you’re suffering with uterine fibroids, you owe it to yourself to investigate your options. And remember, we’re here to help you.",
      },
    ],
  },
];

const toTimestamp = (date: string) => {
  const [year, month, day] = date.split("-").map(Number);
  return Date.UTC(year, month - 1, day);
};

const toUtcDate = (date: string) => new Date(toTimestamp(date));

const sortedBlogPosts = [...blogPosts].sort(
  (a, b) => toTimestamp(b.date) - toTimestamp(a.date)
);

export const getAllBlogPosts = () => sortedBlogPosts;

export const getLatestBlogPosts = (count = 3) => sortedBlogPosts.slice(0, count);

export const getBlogPostBySlug = (slug: string) =>
  sortedBlogPosts.find((post) => post.slug === slug);

export const formatBlogDate = (date: string) => {
  const utcDate = toUtcDate(date);
  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(utcDate);
};

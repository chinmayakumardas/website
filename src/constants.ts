export const socials = [
  { label: "INSTAGRAM", href: "https://instagram.com/builtbychinmay" },
  { label: "YOUTUBE", href: "https://www.youtube.com/@builtbychinmay" },
  { label: "FACEBOOK", href: "https://facebook.com/builtbychinmay" },

  { label: "BEHANCE", href: "https://www.behance.net/chinmaykumard" },
  { label: "GITHUB", href: "https://github.com/chinmayakumardas" },
  { label: "LINKEDIN", href: "https://linkedin.com/in/chinmayakumardas2" },
];

export const quickLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "WORK", href: "/work" },
  // { label: "BLOG", href: "/blog" },
  // { label: "CASE STUDIES", href: "/case-studies" },
  { label: "CONTACT", href: "/contact" },
];
export const legalLinks = [
  { label: "PRIVACY POLICY", href: "/privacy-policy" },
  { label: "TERMS", href: "/terms" },
];

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://chinmayakumardas.com/#person",

  name: "Chinmaya Kumar Das",
  givenName: "Chinmaya",
  familyName: "Das",

  url: "https://chinmayakumardas.com",
  image: "https://chinmayakumardas.com/profile.png",

  jobTitle: "AI Engineer & Full Stack Developer",

  description:
    "AI Engineer and Full Stack Developer specializing in AI-powered applications, scalable SaaS products, automation systems, and modern web experiences.",

  sameAs: [
    "https://github.com/chinmayakumardas",
    "https://linkedin.com/in/chinmayakumardas2",
    "https://x.com/chinmayakmdas",
    "https://instagram.com/builtbychinmay",
    "https://youtube.com/@builtbychinmay",
    "https://www.behance.net/chinmaykumard",
  ],

  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "GSAP",
    "Framer Motion",
    "React Three Fiber",
    "Three.js",
    "Artificial Intelligence",
    "Generative AI",
    "LLMs",
    "AI Agents",
    "Automation",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://chinmayakumardas.com/#website",

  name: "Chinmaya Kumar Das",
  url: "https://chinmayakumardas.com",

  description:
    "Official portfolio of Chinmaya Kumar Das showcasing AI engineering, full-stack development, SaaS products, and software projects.",

  inLanguage: "en",

  publisher: {
    "@id": "https://chinmayakumardas.com/#person",
  },

  author: {
    "@id": "https://chinmayakumardas.com/#person",
  },

  mainEntity: {
    "@id": "https://chinmayakumardas.com/#person",
  },

  copyrightHolder: {
    "@id": "https://chinmayakumardas.com/#person",
  },

  keywords: [
    "AI Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
    "SaaS",
    "Software Engineer",
  ],

  potentialAction: {
    "@type": "SearchAction",
    target: "https://chinmayakumardas.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

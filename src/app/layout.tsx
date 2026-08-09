import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppProvider } from "@/components/providers/app-provider";
import { personSchema, websiteSchema } from "@/constants";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chinmayakumardas.com"),

  title: {
    default: "Chinmaya Kumar Das | • Full Stack Developer • Product Engineer",
    template: "%s | Chinmaya Kumar Das",
  },

  description:
    "Chinmaya Kumar Das is an AI Engineer and Full Stack Developer specializing in AI-powered applications, modern web experiences, scalable software, automation systems, and high-performance digital products. Available for full-time opportunities, freelance projects, startup consulting, and technical collaborations worldwide.",

  applicationName: "Chinmaya Kumar Das",

  referrer: "origin-when-cross-origin",

  authors: [
    {
      name: "Chinmaya Kumar Das",
      url: "https://chinmayakumardas.com",
    },
  ],

  creator: "Chinmaya Kumar Das",

  publisher: "Chinmaya Kumar Das",

  category: "Technology",

  keywords: [
    "Chinmaya Kumar Das",
    "AI Engineer",
    "Software Engineer",
    "Full Stack Developer",
    "Product Engineer",
    "Frontend Developer",
    "Web Developer",
    "Creative Developer",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "GSAP",
    "Framer Motion",
    "React Three Fiber",
    "Three.js",
    "Node.js",
    "REST API",
    "Portfolio",
    "Freelancer",
    "Technical Consultant",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },



  alternates: {
    canonical: "https://chinmayakumardas.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chinmayakumardas.com",
    siteName: "Chinmaya Kumar Das",

    title:
      "Chinmaya Kumar Das | AI Engineer • Full Stack Developer • Product Engineer",

    description:
      "Building AI-powered applications, scalable web platforms, automation systems, and modern digital experiences.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chinmaya Kumar Das",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    creator: "@chinmayakmdas",

    title:
      "Chinmaya Kumar Das | AI Engineer • Full Stack Developer • Product Engineer",

    description: "AI Engineer • Full Stack Developer • Product Engineer",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <GoogleTagManager gtmId="GTM-KRK7ZQZC" />

      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

       <AppProvider>
  {children}
</AppProvider>
      </body>
    </html>
  );
}

import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import { Montserrat, Ubuntu } from "next/font/google";
import "./globals.css";
import "./reset.css";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import { ToasterClient } from "@/components/Providers/ToasterClient";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
const nyghtSerif = localFont({
  src: [
    {
      path: "./fonts/NyghtSerif-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/NyghtSerif-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NyghtSerif-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/NyghtSerif-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-nyght-serif",
  display: "swap",
  // Accent serif: kept off the critical path, it swaps in after first paint.
  preload: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vektra.agency";

const description =
  "Vektra — digital IT агенція: стратегія бренду, брендинг, UX/UI дизайн, редизайн та full-stack розробка сайтів і цифрових продуктів для бізнесу.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vektra — digital IT агенція: дизайн та розробка сайтів",
    template: "%s | Vektra",
  },
  description,
  keywords: [
    "розробка сайтів",
    "створення сайтів",
    "digital агенція",
    "IT агенція",
    "UX/UI дизайн",
    "брендинг",
    "редизайн сайту",
    "full-stack розробка",
    "Vektra",
  ],
  applicationName: "Vektra",
  authors: [{ name: "Vektra Agency", url: siteUrl }],
  creator: "Vektra Agency",
  publisher: "Vektra Agency",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: siteUrl,
    siteName: "Vektra",
    title: "Vektra — digital IT агенція: дизайн та розробка сайтів",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Vektra — digital IT агенція: дизайн та розробка сайтів",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0A0B19",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Vektra",
      alternateName: "Vektra Agency",
      url: siteUrl,
      description,
      email: "vektra.it.agency@gmail.com",
      telephone: "+380500521571",
      logo: `${siteUrl}/Logo/Vektra-black.svg`,
      sameAs: [
        "https://www.instagram.com/vektra_agency/",
        "https://www.threads.com/@vektra_agency",
        "https://t.me/iLyhaha1",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: "Vektra",
      inLanguage: "uk-UA",
      publisher: { "@id": `${siteUrl}#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}#service`,
      name: "Vektra — розробка сайтів та цифрових продуктів",
      url: siteUrl,
      areaServed: "UA",
      priceRange: "$$",
      parentOrganization: { "@id": `${siteUrl}#organization` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Послуги",
        itemListElement: [
          "Стратегія бренду",
          "Брендинг та айдентика",
          "UX/UI дизайн",
          "Редизайн сайту",
          "Full-stack веб-розробка",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${montserrat.className} ${ubuntu.className} ${nyghtSerif.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ToasterClient />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

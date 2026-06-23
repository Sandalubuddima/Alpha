import "./globals.css";

const siteUrl = "https://alphagencoding.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AlphaGen Coding | Custom Software Development Company",
    template: "%s | AlphaGen Coding",
  },
  description:
    "AlphaGen Coding builds websites, SaaS platforms, business systems, POS software, mobile apps and custom software solutions for Sri Lankan and international businesses.",
  keywords: [
    "software development Sri Lanka",
    "custom web application",
    "SaaS development",
    "POS system",
    "business website Sri Lanka",
    "Next.js development",
    "React development",
    "IoT software",
    "gym management system",
    "AlphaGen Coding",
  ],
  authors: [{ name: "AlphaGen Coding", url: siteUrl }],
  creator: "AlphaGen Coding",
  publisher: "AlphaGen Coding",
  category: "Software Development",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "AlphaGen Coding",
    title: "AlphaGen Coding | Custom Software Development Company",
    description:
      "AlphaGen Coding builds websites, SaaS platforms, business systems, POS software, mobile apps and custom software solutions for Sri Lankan and international businesses.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "AlphaGen Coding – Custom Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AlphaGen Coding | Custom Software Development Company",
    description:
      "AlphaGen Coding builds websites, SaaS platforms, business systems, POS software and custom software solutions for Sri Lankan and international businesses.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@alphagencoding",
    site: "@alphagencoding",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180" },
    ],
    shortcut: "/favicon/favicon.ico",
  },
  manifest: "/favicon/site.webmanifest",
  themeColor: "#020617",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  verification: {
    // google: "your-google-verification-code",
    // bing: "your-bing-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "AlphaGen Coding",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon/favicon.svg`,
      },
      description:
        "Sri Lankan software development company building websites, SaaS platforms, business systems, POS solutions and IoT-integrated applications.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "LK",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "alphagencoding@gmail.com",
        availableLanguage: ["English", "Sinhala"],
      },
      sameAs: [
        "https://facebook.com/alphagencoding",
        "https://linkedin.com/company/alphagencoding",
        "https://github.com/alphagencoding",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "AlphaGen Coding",
      description:
        "Custom software development company in Sri Lanka – websites, SaaS, POS, IoT and business systems.",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "AlphaGen Coding | Custom Software Development Company",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      description:
        "AlphaGen Coding builds websites, SaaS platforms, business systems, POS software, mobile apps and custom software solutions.",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "AlphaGen Coding",
      url: siteUrl,
      image: `${siteUrl}/favicon/favicon.svg`,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressCountry: "LK",
      },
      areaServed: ["LK", "AU", "US", "GB"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software Development Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Web Applications" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Websites" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Product Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "POS Systems" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gym Management Systems" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "IoT & Device-Integrated Systems" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Deployment & Maintenance" } },
        ],
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}

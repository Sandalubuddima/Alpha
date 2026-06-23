export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://alphagencoding.com/sitemap.xml",
    host: "https://alphagencoding.com",
  };
}

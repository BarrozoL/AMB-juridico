export default function robots() {
  const base = "https://www.accaciobarrozo.com";
  return {
    rules: [
      // Regra padrão
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/tmp/"],
      },

      // Google principal
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      { userAgent: "Googlebot-Image", allow: "/", disallow: ["/admin/"] },
      { userAgent: "AdsBot-Google", allow: "/" },
      { userAgent: "AdsBot-Google-Mobile", allow: "/" },

      // bloquear crawlers competitivos
      { userAgent: "AhrefsBot", disallow: "/" },
      { userAgent: "SemrushBot", disallow: "/" },
      { userAgent: "MJ12bot", disallow: "/" },
      { userAgent: "DotBot", disallow: "/" },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}

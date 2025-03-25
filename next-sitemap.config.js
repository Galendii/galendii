/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://galendii.dev",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api", // Block API routes
          "/_next", // Next.js internals
        ],
      },
    ],
    additionalSitemaps: ["https://galendii.dev/server-sitemap.xml"],
  },
  exclude: [
    "/server-sitemap.xml", // Dynamic sitemap
  ],
};

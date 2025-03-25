import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://galendii.dev";
const PRIMARY_LANGUAGES = ["English (Professional)", "Portuguese (Native)"];

export const metadata: Metadata = {
  title: {
    default: "Galendii.dev | Global Fullstack Developer",
    template: "%s | Your Name | International Tech Solutions",
  },
  description:
    "Brazilian fullstack developer with international experience, specializing in scalable web solutions for global clients. Available for remote contracts and full-time positions with flexible timezone collaboration.",
  keywords: [
    "remote developer",
    "international developer",
    "global tech talent",
    "cross-border development",
    "React expert",
    "Next.js specialist",
    "Node.js architect",
    "AWS certified",
    "multilingual developer",
    "timezone flexible",
    "Brazilian developer",
    "international collaboration",
    "software engineer",
    "forntend engineer",
    "backend engineer",
    "frontend developer",
    "backend developer",
    "mobile developer",
    "fullstack developer",
    "freelance developer",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Galendii.dev | Global Fullstack Developer",
    description:
      "Brazilian technical lead available for remote collaboration with worldwide companies and startups",
    url: SITE_URL,
    siteName: "Galendii.dev | Global Fullstack Developer",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Fullstack Developer Available for Global Opportunities",
      },
    ],
  },

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Global Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Breno Zielinski Galendi",
            url: "https://galendii.dev",
            jobTitle: "Senior Fullstack Developer",
            description:
              "I build scalable, high-performance web applications with modern technologies.",
            skills: [
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "GraphQL",
              "Django",
              "MongoDB",
              "AWS",
              "Docker",
              "CI/CD",
              "Tailwind CSS",
              "Nest.js",
              "PostgreSQL",
              "Flutter",
            ],
            experience: [
              {
                "@type": "EmploymentAgency",
                name: "OneBlinc",
                startDate: "2021",
                endDate: "Present",
                jobTitle: "Senior Fullstack Developer",
                description:
                  "Led full-stack development of mission-critical products using Django, Next/React, and Flutter while improving architectural replicability through AWS CDK. Key achievements include mentoring junior developers, developing MVPs with a high success rate, creating white-label management dashboards, and architecting maintainable MVP infrastructure."[1],
              },
              {
                "@type": "EmploymentAgency",
                name: "Mind Consulting",
                startDate: "2019",
                endDate: "2021",
                jobTitle: "Technology Manager",
                description:
                  "Led technical operations and infrastructure development for multiple squads while establishing CI/CD pipelines and cloud solutions. Key achievements include directing development squads, implementing AWS infrastructure and CI/CD pipelines, developing a company-wide UI system using React with TypeScript and Storybook, and establishing technical prerequisites for new project initiatives."[2],
              },
              {
                "@type": "EmploymentAgency",
                name: "Mind Consulting",
                startDate: "2018",
                endDate: "2019",
                jobTitle: "Fullstack Web and Mobile Developer",
                description:
                  "Full-cycle development of educational and financial applications across mobile and web platforms. Key achievements include building the 'Nerd App' educational platform and the 'Clube de Investimentos' financial education app, and implementing solutions using React, React Native, Node.js, and Laravel."[3],
              },
              {
                "@type": "EmploymentAgency",
                name: "Mind Consulting",
                startDate: "2017",
                endDate: "2018",
                jobTitle: "Junior Fullstack Web Developer",
                description:
                  "Contributed to legacy system maintenance while developing internal tools and expanding technical skillset. Key achievements include maintaining a logistics platform built with Laravel and creating an internal HR/payroll management web application, and pioneering TypeScript adoption."[4],
              },
            ],
            sameAs: [
              "https://www.linkedin.com/in/breno-zielinski-galendi",
              "https://github.com/Galendii",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              email: "breno.z.galendi@gmail.com",
              contactType: "professional service",
              availableLanguage: ["English", "Portuguese"],
            },
            availability:
              "Available for new projects starting from January."[5],
          })}
        </script>
      </head>

      <body className={inter.className}>
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

import PortfolioClient from "./PortfolioClient" // Your client component with "use client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio | AxoraWeb Solutions",
  description:
    "Explore AxoraWeb's portfolio showcasing successful web, mobile, and custom software projects for clients around the globe.",
  keywords: [
    "AxoraWeb Portfolio",
    "Web development case studies",
    "Mobile app projects",
    "Custom software examples",
    "AxoraWeb projects",
    "UI UX design portfolio",
    "Software agency work",
    "Startup product builds",
    "Tech company showcase",
    "Lahore software company portfolio"
  ],
  openGraph: {
    title: "Our Portfolio - AxoraWeb Solutions",
    description:
      "Take a look at the digital products we've built — from high-performance websites to mobile apps and enterprise software.",
    url: "https://axorawebsolution.vercel.app/portfolio",
    siteName: "AxoraWeb Solutions",
    images: [
      {
        url: "https://axorawebsolution.vercel.app/og-portfolio.png", // Add a proper OG image
        width: 1200,
        height: 630,
        alt: "AxoraWeb Portfolio Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AxoraWeb Portfolio",
    description:
      "Browse through our most impactful projects and success stories across industries and technologies.",
    images: ["https://axorawebsolution.vercel.app/og-portfolio.png"],
  },
  alternates: {
    canonical: "https://axorawebsolution.vercel.app/portfolio",
  },
}

export default function PortfolioPage() {
  return <PortfolioClient />
}

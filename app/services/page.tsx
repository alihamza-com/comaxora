import ServicesClient from "./ServicesClient" // Your "use client" component
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | AxoraWeb Solutions",
  description:
    "Discover AxoraWeb Solutions' full range of services including web development, mobile apps, UI/UX design, SEO, cloud solutions, and more.",
  keywords: [
    "AxoraWeb Services",
    "Web development company",
    "Mobile app development",
    "UI UX design agency",
    "SEO and digital marketing",
    "Custom software development",
    "DevOps and cloud",
    "Tech consulting Pakistan",
    "Lahore software company",
    "Software agency services"
  ],
  openGraph: {
    title: "Services - AxoraWeb Solutions",
    description:
      "Explore our expert services: web and mobile development, design, SEO, cloud, and custom software tailored for your success.",
    url: "https://axorawebsolution.vercel.app/services",
    siteName: "AxoraWeb Solutions",
    images: [
      {
        url: "https://axorawebsolution.vercel.app/og-services.png", // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "AxoraWeb Services Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - AxoraWeb Solutions",
    description:
      "AxoraWeb offers powerful digital services to help your business grow. See what we can do for you.",
    images: ["https://axorawebsolution.vercel.app/og-services.png"],
  },
  alternates: {
    canonical: "https://axorawebsolution.vercel.app/services",
  },
}

export default function ServicesPage() {
  return <ServicesClient />
}

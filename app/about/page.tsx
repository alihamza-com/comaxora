import AboutClient from "./aboutClient" // Rename your client component file if needed
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | AxoraWeb Solutions",
  description:
    "Learn more about AxoraWeb Solutions — a top software company delivering web, mobile, and digital solutions with passion and precision.",
  keywords: [
    "AxoraWeb Solutions",
    "About AxoraWeb",
    "Web development company",
    "Mobile app agency",
    "SEO experts Pakistan",
    "UI UX design team",
    "Software house Lahore",
    "Tech services Pakistan",
    "Software development firm"
  ],
  openGraph: {
    title: "About AxoraWeb Solutions",
    description:
      "Discover the mission, team, and technology behind AxoraWeb Solutions. We're building the future of digital experiences.",
    url: "https://axorawebsolution.vercel.app/about",
    siteName: "AxoraWeb Solutions",
    images: [
      {
        url: "https://axorawebsolution.vercel.app/og-about.png", // Add a relevant Open Graph image
        width: 1200,
        height: 630,
        alt: "AxoraWeb Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - AxoraWeb Solutions",
    description:
      "AxoraWeb Solutions is a leading tech company offering web, mobile, and cloud solutions. Meet our team and vision.",
    images: ["https://axorawebsolution.vercel.app/og-about.png"],
  },
  alternates: {
    canonical: "https://axorawebsolution.vercel.app/about",
  },
}

export default function AboutPage() {
  return <AboutClient />
}

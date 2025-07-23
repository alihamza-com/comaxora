import ContactPage from "./ContactClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | AxoraWeb Solutions",
  description:
    "Get in touch with AxoraWeb Solutions for expert web development, mobile apps, SEO, and design services. Let's build something amazing together.",
  keywords: [
    "AxoraWeb Solutions",
    "Contact AxoraWeb",
    "Web development Pakistan",
    "Mobile app developers",
    "SEO services",
    "UI UX design",
    "Custom software company",
    "Digital marketing agency",
    "Lahore software house",
    "Tech agency Pakistan"
  ],
  openGraph: {
    title: "Contact AxoraWeb Solutions",
    description: "Start your project with AxoraWeb's expert development team today.",
    url: "https://axorawebsolution.vercel.app/contact",
    siteName: "AxoraWeb Solutions",
    images: [
      {
        url: "https://axorawebsolution.vercel.app/og-image.png", // Replace with your OG image path
        width: 1200,
        height: 630,
        alt: "AxoraWeb Contact Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AxoraWeb Solutions",
    description: "Connect with our expert team and get your digital solution built.",
    images: ["https://axorawebsolution.vercel.app/og-image.png"], // Same as Open Graph
  },
  alternates: {
    canonical: "https://axorawebsolution.vercel.app/contact",
  },
}
 
export default function Contact() {
  return <ContactPage />
}

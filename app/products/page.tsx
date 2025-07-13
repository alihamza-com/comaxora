import ProductsPage from "./ProductsClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Products | AxoraWeb Solutions",
  description:
    "Explore powerful digital products developed by AxoraWeb Solutions. From SaaS platforms to mobile apps, discover innovation and performance.",
  keywords: [
    "AxoraWeb Solutions Products",
    "Digital Products Pakistan",
    "Software Products",
    "SaaS Applications",
    "Mobile Applications",
    "AxoraWeb Tools",
    "Web Platforms",
    "Custom Software",
    "Innovative Tech Products",
    "Tech Solutions Lahore"
  ],
  openGraph: {
    title: "AxoraWeb Solutions – Digital Products",
    description:
      "Discover our cutting-edge web and mobile products. Ready-to-use, customizable, and built for growth.",
    url: "https://axorawebsolution.vercel.app/products",
    siteName: "AxoraWeb Solutions",
    images: [
      {
        url: "https://axorawebsolution.vercel.app/og-products.png", // Make sure this OG image exists
        width: 1200,
        height: 630,
        alt: "AxoraWeb Products Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Products | AxoraWeb Solutions",
    description:
      "Browse and experience high-quality digital products by AxoraWeb. Built for modern businesses.",
    images: ["https://axorawebsolution.vercel.app/og-products.png"],
  },
  alternates: {
    canonical: "https://axorawebsolution.vercel.app/products",
  },
}

export default function Products() {
  return <ProductsPage />
}

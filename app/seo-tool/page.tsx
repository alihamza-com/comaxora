import type { Metadata } from "next"
import SEOToolClientPage from "./SEOToolClientPage"

export const metadata: Metadata = {
  title: "SEO AutoPilot Pro | Free Website SEO Optimization Tool | AxoraWeb",
  description:
    "Upload your website ZIP file and get back a fully SEO-optimized version with enhanced meta tags, structured data, and code preview. Free AI-powered SEO tool by AxoraWeb.",
  keywords: [
    "SEO tool",
    "website optimization",
    "SEO AutoPilot Pro",
    "free SEO tool",
    "meta tags optimization",
    "structured data",
    "website SEO analysis",
    "AxoraWeb SEO",
    "AI SEO optimization",
    "ZIP file SEO",
    "code preview SEO",
    "HTML optimization",
    "React SEO",
    "Next.js SEO",
    "TypeScript SEO",
  ],
  authors: [{ name: "Ali Hamza", url: "https://axoraweb.vercel.app" }],
  creator: "Ali Hamza",
  publisher: "AxoraWeb",
  applicationName: "SEO AutoPilot Pro",
  metadataBase: new URL("https://axoraweb.vercel.app"),
  openGraph: {
    title: "SEO AutoPilot Pro | Free Website SEO Optimization Tool",
    description:
      "Upload ZIP → AI Analysis → Preview Code → Download Optimized Website. Free SEO tool with code preview and comprehensive optimization.",
    url: "https://axoraweb.vercel.app/seo-tool",
    siteName: "AxoraWeb",
    images: [
      {
        url: "https://axoraweb.vercel.app/og-seo-tool.png",
        width: 1200,
        height: 630,
        alt: "SEO AutoPilot Pro - Free Website SEO Optimization Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO AutoPilot Pro | Free Website SEO Optimization Tool",
    description:
      "Upload ZIP → AI Analysis → Preview Code → Download Optimized Website. Free SEO tool with comprehensive optimization.",
    site: "@axoraweb",
    creator: "@alihamza",
    images: ["https://axoraweb.vercel.app/og-seo-tool.png"],
  },
  alternates: {
    canonical: "https://axoraweb.vercel.app/seo-tool",
    languages: {
      "en-US": "https://axoraweb.vercel.app/seo-tool",
    },
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
  category: "technology",
  other: {
    "application-name": "SEO AutoPilot Pro",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "SEO AutoPilot Pro",
    "format-detection": "telephone=no",
  },
}

export default function SEOToolPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <SEOToolClientPage />
    </div>
  )
}

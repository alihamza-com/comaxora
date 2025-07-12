import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "AxoraWeb | Custom Software & App Development Company",
    template: "%s | AxoraWeb",
  },
  description:
    "AxoraWeb specializes in custom web development, mobile apps, and software solutions. Expert team delivering scalable, modern applications for startups and enterprises.",
  keywords: [
    "AxoraWeb",
    "custom software development",
    "web development",
    "mobile app development",
    "React development",
    "Next.js development",
    "full-stack development",
    "Ali Hamza",
    "software company Pakistan",
    "startup development",
    "enterprise solutions",
  ],
  authors: [{ name: "Ali Hamza", url: "https://axoraweb.vercel.app" }],
  creator: "Ali Hamza",
  publisher: "AxoraWeb",
  applicationName: "AxoraWeb",
  metadataBase: new URL("https://axoraweb.vercel.app"),
  openGraph: {
    title: "AxoraWeb | Custom Software & App Development Company",
    description:
      "Expert custom software development, web applications, and mobile apps. Transforming ideas into scalable digital solutions.",
    url: "https://axoraweb.vercel.app",
    siteName: "AxoraWeb",
    images: [
      {
        url: "https://axoraweb.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "AxoraWeb - Custom Software Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AxoraWeb | Custom Software & App Development",
    description:
      "Expert custom software development, web applications, and mobile apps. Transforming ideas into scalable digital solutions.",
    site: "@axoraweb",
    creator: "@alihamza",
    images: ["https://axoraweb.vercel.app/og-image.png"],
  },
  alternates: {
    canonical: "https://axoraweb.vercel.app",
    languages: {
      "en-US": "https://axoraweb.vercel.app",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Navigation />
            <main className="relative">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

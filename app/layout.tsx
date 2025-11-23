import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: {
    default: "CloneForge - AI Website Clone Generator & Editor",
    template: "%s | CloneForge",
  },
  description: "Instantly clone any website URL, customize branding, edit content, and export production-ready code (React, Next.js, HTML/CSS). The ultimate AI web design tool.",
  keywords: [
    "website cloner",
    "AI web designer",
    "convert website to code",
    "react generator",
    "next.js builder",
    "html exporter",
    "clone website design",
    "ai coding assistant",
    "web design automation",
    "frontend generator"
  ],
  authors: [{ name: "CloneForge Team" }],
  creator: "CloneForge",
  publisher: "CloneForge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cloneforge.punyanshsingla.com/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CloneForge - AI Website Clone Generator",
    description: "Transform any URL into editable code. Add your branding, logo, and export to React/Next.js in seconds.",
    url: "https://cloneforge.punyanshsingla.com/",
    siteName: "CloneForge",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CloneForge AI Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloneForge - Clone & Edit Websites with AI",
    description: "Turn any website into clean code. Customize and export instantly.",
    images: ["/twitter-image.png"],
    creator: "@cloneforge",
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
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "CloneForge",
              "applicationCategory": "DesignApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
              },
              "description":
                "AI-powered tool to clone, edit, and export websites as code. Transform any URL into editable React/Next.js code instantly.",
              "featureList": "Website Cloning, Brand Customization, Code Export (React, Next.js, HTML), AI Design Analysis",
              "screenshot": "https://www.cloneforge.com/og-image.png",
              "softwareHelp": "https://www.cloneforge.com/docs",
              "author": {
                "@type": "Organization",
                "name": "CloneForge",
                "url": "https://www.cloneforge.com",
              },
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

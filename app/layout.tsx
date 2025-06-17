import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/config/site-config"
import { ScrollAnimationProvider } from "@/components/scroll-animation-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.title}`,
  description: siteConfig.description,
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ScrollAnimationProvider>
            <div className="min-h-screen flex flex-col bg-[#f0f5ff] dark:bg-gray-950">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ScrollAnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

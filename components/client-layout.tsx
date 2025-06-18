"use client"

import { useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollAnimationProvider } from "@/components/scroll-animation-provider"
import { Navbar } from "@/components/navbar"
import { updateSectionBackground } from "@/lib/utils"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    updateSectionBackground()
  }, [])

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <ScrollAnimationProvider>
        <Navbar />
        {children}
      </ScrollAnimationProvider>
    </ThemeProvider>
  )
} 
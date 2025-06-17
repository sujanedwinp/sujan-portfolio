"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface ScrollAnimationProviderProps {
  children: ReactNode
}

export function ScrollAnimationProvider({ children }: ScrollAnimationProviderProps) {
  useScrollAnimation()
  return <>{children}</>
}

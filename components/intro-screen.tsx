"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function IntroScreen() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Simple morphing calculation
  const progress = Math.min(scrollY / 600, 1)
  const opacity = Math.max(1 - progress * 1.5, 0)
  const scale = 1 - progress * 0.4
  const translateX = -progress * 30 // Move left
  const translateY = -progress * 10 // Move up

  if (progress >= 1) return null // Hide completely when morphed

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#f0f5ff] dark:bg-gray-950 pointer-events-none"
      style={{ opacity: opacity > 0 ? 1 : 0 }}
    >
      <div
        className="text-center transition-all duration-300 ease-out"
        style={{
          transform: `translate(${translateX}vw, ${translateY}vh) scale(${scale})`,
          opacity: opacity,
        }}
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4">Hi, I'm</h1>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-blue-500 dark:text-blue-400">
          Sujan
        </h1>
      </div>

      {scrollY < 50 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-gray-500 dark:text-gray-400">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="h-6 w-6" />
          </div>
        </div>
      )}
    </div>
  )
}

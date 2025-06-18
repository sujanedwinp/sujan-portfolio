"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function IntroScreen() {
  const [scrollY, setScrollY] = useState(0)
  const [nameColor, setNameColor] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Start the color change almost immediately with a minimal delay
    const timer = setTimeout(() => {
      setNameColor(true)
    }, 0)
    return () => clearTimeout(timer)
  }, [])

  // Simple morphing calculation
  const progress = Math.min(scrollY / 600, 1)
  const opacity = Math.max(1 - progress * 1.5, 0)
  const scale = 1 - progress * 0.4
  const translateX = -progress * 30 // Move left
  const translateY = -progress * 10 // Move up

  // Background transition based on scroll
  const bgProgress = Math.min(scrollY / 300, 1)

  if (progress >= 1) return null // Hide completely when morphed

  return (
    <>
      {/* Dark overlay that stays until component unmounts */}
      <div 
        className="fixed inset-0 z-40 bg-[#0a0a0a] pointer-events-none transition-opacity duration-1000"
        style={{ 
          opacity: bgProgress
        }}
      />
      
      {/* Main content */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center pointer-events-none transition-all duration-1000 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          opacity: opacity > 0 ? 1 : 0,
        }}
      >
        <div
          className="text-center transition-all duration-300 ease-out"
          style={{
            transform: `translate(${translateX}vw, ${translateY}vh) scale(${scale})`,
            opacity: opacity,
          }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4 text-white">Hi, I'm</h1>
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter"
            style={{
              color: nameColor ? '#3b82f6' : '#6b7280',
              transitionProperty: 'color',
              transitionDuration: '200ms',
              transitionTimingFunction: 'ease-in-out'
            }}
          >
            Sujan
          </h1>
        </div>

        {scrollY < 50 && (
          <div className="absolute bottom-8 inset-x-0 mx-auto animate-bounce">
            <div className="flex flex-col items-center justify-center text-gray-300">
              <span className="text-sm font-medium mb-2">Scroll to explore</span>
              <ChevronDown className="h-6 w-6" />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

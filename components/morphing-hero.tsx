"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ShuffleText } from "@/components/shuffle-text"
import { siteConfig } from "@/config/site-config"
import { FileDown, ChevronDown, Shield, Code, Terminal, Globe, Lock, Database } from "lucide-react"

export function MorphingHero() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [showScrollHint, setShowScrollHint] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % siteConfig.hero.skills.length)
    }, siteConfig.hero.skillRotationSpeed)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      if (window.scrollY > 50) {
        setShowScrollHint(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate morphing progress (0 to 1)
  const progress = Math.min(scrollY / 800, 1)

  // Morphing calculations
  const scale = 1 - progress * 0.65 // Scale from 1 to 0.35
  const translateX = progress * -45 // Move from center (0) to left (-45vw)
  const translateY = progress * -15 // Move up slightly (-15vh)
  const fontSize = 1 - progress * 0.6 // Font size scaling

  // Background and other elements
  const bgOpacity = Math.max(1 - progress * 1.5, 0)
  const iconsOpacity = Math.max(1 - progress * 2, 0)
  const contentOpacity = Math.max(progress - 0.3, 0) / 0.7

  return (
    <>
      {/* Background layer */}
      <div
        className="fixed inset-0 z-20 bg-[#f0f5ff] dark:bg-gray-950 pointer-events-none transition-opacity duration-300"
        style={{ opacity: bgOpacity }}
      />

      {/* Floating background icons */}
      <div className="fixed inset-0 z-25 pointer-events-none overflow-hidden" style={{ opacity: iconsOpacity }}>
        <Shield className="absolute top-20 left-20 h-8 w-8 text-blue-500/30 animate-float-1" />
        <Code className="absolute top-40 right-32 h-6 w-6 text-blue-400/40 animate-float-2" />
        <Terminal className="absolute bottom-32 left-16 h-7 w-7 text-blue-600/35 animate-float-3" />
        <Globe className="absolute top-32 right-20 h-5 w-5 text-blue-500/45 animate-float-4" />
        <Lock className="absolute bottom-40 right-24 h-6 w-6 text-blue-400/30 animate-float-5" />
        <Database className="absolute top-60 left-32 h-8 w-8 text-blue-600/40 animate-float-6" />
      </div>

      {/* Scroll hint */}
      {showScrollHint && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
          <div className="flex flex-col items-center text-gray-500 dark:text-gray-400">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="h-6 w-6" />
          </div>
        </div>
      )}

      {/* Main hero section with morphing text */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex flex-col space-y-6 md:w-1/2">
              {/* Morphing Title - Single element that transforms */}
              <div className="relative">
                <h1
                  className="font-bold tracking-tighter transition-all duration-500 ease-out"
                  style={{
                    transform: `translate(${translateX}vw, ${translateY}vh) scale(${scale})`,
                    fontSize: `${fontSize * 6 + 2}rem`, // Responsive font size
                    transformOrigin: progress < 0.5 ? "center center" : "left center",
                    lineHeight: 1.1,
                  }}
                >
                  {siteConfig.hero.title}
                  <br />
                  <span className="text-blue-500 dark:text-blue-400">{siteConfig.hero.name}</span>
                </h1>
              </div>

              {/* Rest of hero content - appears after morphing */}
              <div
                className="space-y-6 transition-all duration-700 ease-out"
                style={{
                  opacity: contentOpacity,
                  transform: `translateY(${(1 - contentOpacity) * 30}px)`,
                }}
              >
                <div>
                  <p className="text-2xl md:text-3xl font-medium">
                    {siteConfig.hero.subtitle}{" "}
                    <span className="text-blue-500 dark:text-blue-400">{siteConfig.hero.profession}</span>
                  </p>
                </div>

                <div className="h-16 flex items-center">
                  <span className="mr-2 text-xl md:text-2xl font-mono">{siteConfig.hero.learningPrefix} </span>
                  <ShuffleText text={siteConfig.hero.skills[currentSkillIndex]} />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/documents/resume.pdf"
                    target="_blank"
                    className="btn-outline-blue flex items-center gap-2 w-fit"
                    download
                  >
                    <FileDown className="h-4 w-4" />
                    Download Resume
                  </Link>
                </div>
              </div>
            </div>

            {/* Right side image */}
            <div
              className="md:w-1/2 flex justify-center transition-all duration-700 ease-out"
              style={{
                opacity: contentOpacity,
                transform: `translateX(${(1 - contentOpacity) * 100}px)`,
              }}
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-100 dark:bg-blue-900/30 overflow-hidden flex items-center justify-center">
                  <img
                    src={siteConfig.mainImage || "/placeholder.svg"}
                    alt="Cybersecurity"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -z-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

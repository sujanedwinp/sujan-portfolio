"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ShuffleText } from "@/components/shuffle-text"
import { siteConfig } from "@/config/site-config"
import { FileDown } from "lucide-react"

export function HeroSection() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % siteConfig.hero.skills.length)
    }, siteConfig.hero.skillRotationSpeed)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Show hero content after intro morphs away
  const progress = Math.min(scrollY / 600, 1)
  const contentOpacity = progress > 0.5 ? (progress - 0.5) * 2 : 0

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col space-y-6 md:w-1/2">
            <div
              className="fade-in-up transition-all duration-700 ease-out"
              style={{ opacity: contentOpacity, transform: `translateY(${(1 - contentOpacity) * 20}px)` }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                {siteConfig.hero.title}
                <br />
                <span className="text-blue-500 dark:text-blue-400">{siteConfig.hero.name}</span>
              </h1>
            </div>

            <div
              className="fade-in-up transition-all duration-700 ease-out"
              style={{
                opacity: contentOpacity,
                transform: `translateY(${(1 - contentOpacity) * 20}px)`,
                transitionDelay: "200ms",
              }}
            >
              <p className="text-2xl md:text-3xl font-medium">
                {siteConfig.hero.subtitle}{" "}
                <span className="text-blue-500 dark:text-blue-400">{siteConfig.hero.profession}</span>
              </p>
            </div>

            <div
              className="h-16 flex items-center fade-in-up transition-all duration-700 ease-out"
              style={{
                opacity: contentOpacity,
                transform: `translateY(${(1 - contentOpacity) * 20}px)`,
                transitionDelay: "400ms",
              }}
            >
              <span className="mr-2 text-xl md:text-2xl font-mono">{siteConfig.hero.learningPrefix} </span>
              <ShuffleText text={siteConfig.hero.skills[currentSkillIndex]} />
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 fade-in-up transition-all duration-700 ease-out"
              style={{
                opacity: contentOpacity,
                transform: `translateY(${(1 - contentOpacity) * 20}px)`,
                transitionDelay: "600ms",
              }}
            >
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

          <div
            className="md:w-1/2 flex justify-center slide-in-left transition-all duration-700 ease-out"
            style={{ opacity: contentOpacity, transform: `translateX(${(1 - contentOpacity) * 50}px)` }}
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
  )
}

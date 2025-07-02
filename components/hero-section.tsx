"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site-config"
import { FileDown } from "lucide-react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Show hero content after intro morphs away
  const progress = Math.min(scrollY / 600, 1)
  const contentOpacity = progress > 0.5 ? (progress - 0.5) * 2 : 0

  return (
    <section id="home" className="relative pt-12 pb-24 md:pt-16 md:pb-40 min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col space-y-4 md:w-1/2">
            <div
              className="fade-in-up"
              style={{ 
                opacity: contentOpacity, 
                transform: `translateY(${(1 - contentOpacity) * 20}px)`,
                transitionDuration: `${siteConfig.animation.fadeInDuration}ms`
              }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                {siteConfig.hero.title}
                <br />
                <span className="text-blue-500 dark:text-blue-400">{siteConfig.hero.name}</span>
              </h1>
            </div>

            <div
              className="fade-in-up"
              style={{
                opacity: contentOpacity,
                transform: `translateY(${(1 - contentOpacity) * 20}px)`,
                transitionDuration: `${siteConfig.animation.fadeInDuration}ms`,
                transitionDelay: "200ms",
              }}
            >
              <p className="text-xl md:text-2xl text-gray-300">
                Learning <span className="text-blue-500 dark:text-blue-400">cybersecurity</span> with a focus on system security, Linux, and secure networks. Using Python, Java, and C to explore real-world threats and defenses.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 fade-in-up"
              style={{
                opacity: contentOpacity,
                transform: `translateY(${(1 - contentOpacity) * 20}px)`,
                transitionDuration: `${siteConfig.animation.fadeInDuration}ms`,
                transitionDelay: "400ms",
              }}
            >
              <Link
                href="/documents/resume.pdf"
                target="_blank"
                className="btn-outline-blue flex items-center gap-2 w-fit"
                download
              >
                <FileDown className="h-4 w-4" />
                Resume
              </Link>
            </div>
          </div>

          <div
            className="md:w-1/2 flex justify-center slide-in-left"
            style={{ 
              opacity: contentOpacity, 
              transform: `translateX(${(1 - contentOpacity) * 50}px)`,
              transitionDuration: `${siteConfig.animation.fadeInDuration}ms`
            }}
          >
            {siteConfig.display.showProfileImage && (
              <div className="relative">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden flex items-center justify-center relative z-10">
                  <Image
                    src={siteConfig.profileImage || "/placeholder.svg"}
                    alt={`${siteConfig.name}'s profile`}
                    width={320}
                    height={320}
                    className="w-full h-full object-cover rounded-full"
                    priority
                  />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 w-56 h-56 md:w-72 md:h-72 rounded-full bg-blue-500/20 dark:bg-blue-500/10 blur-2xl -z-10 animate-pulse"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

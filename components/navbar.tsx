"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { siteConfig } from "@/config/site-config"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [showNav, setShowNav] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id)

    // Smooth scroll to section
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  // Handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Show navbar after intro section (600px)
      if (window.scrollY > 300) {
        setShowNav(true)
      } else {
        setShowNav(false)
      }

      // Update active section based on scroll position
      const sections = siteConfig.navigation.map((item) => item.id)
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const element = document.getElementById(section)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
        scrolled ? "glass-effect py-2" : "bg-transparent py-4"
      } ${showNav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center">
        <div className="flex-none">
          <button
            onClick={() => handleNavClick("/#home", "home")}
            className="text-xl font-bold hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            {siteConfig.name}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 ml-auto">
          {siteConfig.navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.href, item.id)}
              className={`px-4 py-1 rounded-full transition-all duration-300 ${
                activeSection === item.id 
                ? "bg-blue-500 text-white hover:bg-blue-600" 
                : "hover:text-blue-500 dark:hover:text-blue-400"
              }`}
            >
              {item.name}
            </button>
          ))}
          <div className="ml-6">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect border-t border-white/20 dark:border-gray-800/20 transition-all duration-300 ease-in-out">
          <div className="container flex flex-col space-y-2 py-4">
            {siteConfig.navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  handleNavClick(item.href, item.id)
                  toggleMenu()
                }}
                className={`nav-item-smooth ${activeSection === item.id ? "nav-item-active-smooth" : ""}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

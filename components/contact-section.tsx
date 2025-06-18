"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { siteConfig, getSocialIconComponent } from "@/config/site-config"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-heading">
          <h2 
            className="section-title fade-in-up"
            style={{ transitionDuration: `${siteConfig.animation.fadeInDuration}ms` }}
          >
            Get in Touch
          </h2>
          <p
            className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 fade-in-up"
            style={{ 
              transitionDuration: `${siteConfig.animation.fadeInDuration}ms`,
              transitionDelay: "100ms" 
            }}
          >
            Let's connect and explore opportunities together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Contact Information */}
          <Card 
            className="border-blue-200 dark:border-blue-900 fade-in-up"
            style={{ 
              transitionDuration: `${siteConfig.animation.fadeInDuration}ms`,
              transitionDelay: "200ms" 
            }}
          >
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="contact-item-wrapper">
                  <Mail className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-3" />
                  <Link
                    href={`mailto:${siteConfig.contact.info.email}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    {siteConfig.contact.info.email}
                  </Link>
                </div>
                <div className="contact-item-wrapper">
                  <MapPin className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-3" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {siteConfig.contact.info.location}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card 
            className="border-blue-200 dark:border-blue-900 fade-in-up"
            style={{ 
              transitionDuration: `${siteConfig.animation.fadeInDuration}ms`,
              transitionDelay: "300ms" 
            }}
          >
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6">Connect with Me</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {siteConfig.contact.social.map((platform, index) => {
                  const IconComponent = getSocialIconComponent(platform.icon)
                  return (
                    <Link
                      key={index}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link-clean"
                    >
                      <IconComponent className="h-5 w-5 mr-3" />
                      <span>{platform.name}</span>
                    </Link>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

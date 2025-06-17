"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { siteConfig, getSocialIconComponent } from "@/config/site-config"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-heading">
          <h2 className="section-title fade-in-up">
            Get In <span className="text-blue-500 dark:text-blue-400">Touch</span>
          </h2>
          <p
            className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 fade-in-up"
            style={{ transitionDelay: "100ms" }}
          >
            Well you have come this far, lets get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {/* Left Side - Contact Information */}
          <div className="space-y-6 slide-in-right">
            <h3 className="text-xl font-bold mb-6 text-center">Contact Information</h3>

            <div className="contact-item-wrapper">
              <Mail className="h-5 w-5 mr-3 text-blue-500 dark:text-blue-400 flex-shrink-0" />
              <span className="break-all">{siteConfig.contact.info.email}</span>
            </div>

            <div className="contact-item-wrapper">
              <Phone className="h-5 w-5 mr-3 text-blue-500 dark:text-blue-400 flex-shrink-0" />
              <span>{siteConfig.contact.info.phone}</span>
            </div>

            <div className="contact-item-wrapper">
              <MapPin className="h-5 w-5 mr-3 text-blue-500 dark:text-blue-400 flex-shrink-0" />
              <span>{siteConfig.contact.info.location}</span>
            </div>
          </div>

          {/* Right Side - Social Platforms */}
          <div className="space-y-6 slide-in-left">
            <h3 className="text-xl font-bold mb-6 text-center">Find me on social platforms</h3>

            <div className="space-y-4">
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
                    <IconComponent className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span>{platform.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

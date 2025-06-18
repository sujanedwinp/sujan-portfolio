"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { siteConfig } from "@/config/site-config"
import Link from "next/link"

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-heading">
          <h2 
            className="section-title fade-in-up"
            style={{ transitionDuration: `${siteConfig.animation.fadeInDuration}ms` }}
          >
            Certifications
          </h2>
          <p
            className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 fade-in-up"
            style={{ 
              transitionDuration: `${siteConfig.animation.fadeInDuration}ms`,
              transitionDelay: "100ms" 
            }}
          >
            "Proof of <span className="text-blue-500 dark:text-blue-400">commitment</span>. Credentials that back the
            skills."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {siteConfig.certifications.map((cert, index) => (
            <Card
              key={index}
              className="overflow-hidden border-blue-200 dark:border-blue-900 transition-all duration-300 transform hover-elevation fade-in-up hover-glow"
              style={{ 
                transitionDuration: `${siteConfig.animation.fadeInDuration}ms`,
                transitionDelay: `${(index + 2) * 100}ms` 
              }}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                  <span className="text-sm font-medium px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded">
                    {cert.date}
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{cert.organization}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{cert.description}</p>
                <Link
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 dark:text-blue-400 hover:underline"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

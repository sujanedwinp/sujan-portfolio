"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import { siteConfig } from "@/config/site-config"

export function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 bg-[#020817]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Education Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-5xl font-bold tracking-tight mb-4 fade-in-up"
            style={{ transitionDuration: `${siteConfig.animation.fadeInDuration}ms` }}
          >
            Education
          </h1>
          <p
            className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 fade-in-up"
            style={{ 
              transitionDuration: `${siteConfig.animation.fadeInDuration}ms`,
              transitionDelay: "100ms" 
            }}
          >
            "Building a <span className="text-blue-500 dark:text-blue-400">strong foundation</span>, one byte at a time."
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {siteConfig.education.map((edu, index) => (
            <Card 
              key={edu.id} 
              className="border border-blue-900/20 bg-[#0f1629] shadow-lg fade-in-up hover-glow"
              style={{ 
                transitionDuration: `${siteConfig.animation.fadeInDuration}ms`,
                transitionDelay: `${(index + 2) * 100}ms` 
              }}
            >
              <CardContent className="p-6">
                <div className="text-blue-500 font-medium mb-2">{edu.period}</div>
                <h3 className="text-2xl font-bold mb-2">{edu.institution}</h3>
                <p className="text-lg text-gray-200 mb-4">{edu.degree}</p>
                <div className="flex items-center text-gray-400 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{edu.location}</span>
                </div>
                <p className="text-gray-300">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

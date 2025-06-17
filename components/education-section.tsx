"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { siteConfig } from "@/config/site-config"

export function EducationSection() {
  const [activeEducation, setActiveEducation] = useState<string>(siteConfig.education[0].id)

  const handleTimelineClick = (id: string) => {
    setActiveEducation(id)
  }

  return (
    <section id="education" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-heading">
          <h2 className="section-title fade-in-up">Education</h2>
          <p
            className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 fade-in-up"
            style={{ transitionDelay: "100ms" }}
          >
            "Building a <span className="text-blue-500 dark:text-blue-400">strong foundation</span>, one byte at a
            time."
          </p>
        </div>

        <div className="mt-12 fade-in-up" style={{ transitionDelay: "200ms" }}>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {siteConfig.education.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTimelineClick(item.id)}
                className={`relative px-6 py-3 text-center transition-all duration-300 ${
                  activeEducation === item.id
                    ? "text-blue-500 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                }`}
              >
                <span className="font-medium relative z-10">{item.period}</span>
                {activeEducation === item.id && (
                  <span className="absolute inset-0 border-2 border-blue-500 dark:border-blue-400 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          <div className="mt-8 scale-in" style={{ transitionDelay: "300ms" }}>
            {siteConfig.education.map(
              (item) =>
                activeEducation === item.id && (
                  <Card
                    key={item.id}
                    className="border-blue-200 dark:border-blue-900 transition-all duration-300 transform hover-elevation"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900">
                          <GraduationCap className="h-8 w-8 text-blue-500 dark:text-blue-400" />
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold">{item.institution}</h3>
                          <p className="text-lg font-medium">{item.degree}</p>
                          <div className="flex flex-wrap gap-4 text-gray-500 dark:text-gray-400">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>{item.period}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>{item.location}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

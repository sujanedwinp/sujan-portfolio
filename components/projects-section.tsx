"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, FileCheck, FileText } from "lucide-react"
import Link from "next/link"
import { siteConfig, getIconComponent } from "@/config/site-config"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-heading">
          <h2 
            className="section-title fade-in-up"
            style={{ transitionDuration: `${siteConfig.animation.fadeInDuration}ms` }}
          >
            My Projects
          </h2>
          <p
            className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 fade-in-up"
            style={{ 
              transitionDuration: `${siteConfig.animation.fadeInDuration}ms`,
              transitionDelay: "100ms" 
            }}
          >
            "Turning Theory into <span className="text-blue-500 dark:text-blue-400">Practicality</span>."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {siteConfig.projects.map((project, index) => {
            const IconComponent = getIconComponent(project.icon)
            const isBotium = project.title.includes("Botium Toys")

            return (
              <Card
                key={index}
                className="flex flex-col h-full border-blue-200 dark:border-blue-900 transition-all duration-300 transform hover-elevation fade-in-up hover-glow"
                style={{ 
                  transitionDuration: `${siteConfig.animation.fadeInDuration}ms`,
                  transitionDelay: `${(index + 2) * 100}ms` 
                }}
              >
                <CardHeader>
                  <div className="mb-4">
                    {isBotium ? (
                      <FileCheck className="h-10 w-10 text-blue-500 dark:text-blue-400" />
                    ) : (
                      <IconComponent className="h-10 w-10 text-blue-500 dark:text-blue-400" />
                    )}
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-500 dark:text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between gap-2">
                  <Link href={project.githubUrl} className="btn-outline-blue text-sm py-1.5 px-4">
                    <Github className="mr-2 h-4 w-4 inline-block" />
                    {project.githubText || "Code"}
                  </Link>
                  {project.demoAvailable && (
                    <Link href={project.demoUrl} className="btn-solid-blue text-sm py-1.5 px-4">
                      <ExternalLink className="mr-2 h-4 w-4 inline-block" />
                      {project.demoText || "Demo"}
                    </Link>
                  )}
                  {project.pdfUrl && (
                    <Link href={project.pdfUrl} className="btn-outline-blue text-sm py-1.5 px-4 flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                      <FileText className="h-4 w-4 inline-block" />
                      {project.pdfText || "PDF"}
                    </Link>
                  )}
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { siteConfig, getIconComponent } from "@/config/site-config"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-heading">
          <h2 className="section-title fade-in-up">My Projects</h2>
          <p
            className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 fade-in-up"
            style={{ transitionDelay: "100ms" }}
          >
            "Turning Theory into <span className="text-blue-500 dark:text-blue-400">Practicality</span>."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {siteConfig.projects.map((project, index) => {
            const IconComponent = getIconComponent(project.icon)

            return (
              <Card
                key={index}
                className="flex flex-col h-full hover-elevation stagger-item"
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <CardHeader>
                  <div className="mb-4">
                    <IconComponent className="h-10 w-10 text-blue-500 dark:text-blue-400" />
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
                <CardFooter className="flex justify-between">
                  <Link href={project.githubUrl} className="btn-outline-blue text-sm py-1.5 px-4">
                    <Github className="mr-2 h-4 w-4 inline-block" />
                    Code
                  </Link>
                  <Link href={project.demoUrl} className="btn-solid-blue text-sm py-1.5 px-4">
                    <ExternalLink className="mr-2 h-4 w-4 inline-block" />
                    Demo
                  </Link>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Code, Terminal, Server } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-heading">
          <h2 className="section-title fade-in-up">About Me</h2>
          <p
            className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 fade-in-up"
            style={{ transitionDelay: "100ms" }}
          >
            "To Improve is to Change; to be Perfect is to{" "}
            <span className="text-blue-500 dark:text-blue-400">Change often</span>."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Card className="hover-elevation fade-in-up" style={{ transitionDelay: "200ms" }}>
            <CardContent className="flex flex-col p-6">
              <h3 className="text-xl font-bold mb-4">My Journey</h3>
              <p className="text-gray-500 dark:text-gray-400">
                I'm an aspiring Cybersecurity Analyst with a strong passion for protecting digital assets and
                information systems. My journey began with a fascination for how systems work and how they can be
                secured against various threats. I've been developing my skills in programming, network security, and
                vulnerability assessment to prepare for a career in cybersecurity.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevation fade-in-up" style={{ transitionDelay: "300ms" }}>
            <CardContent className="flex flex-col p-6">
              <h3 className="text-xl font-bold mb-4">My Focus</h3>
              <p className="text-gray-500 dark:text-gray-400">
                I focus on understanding security vulnerabilities, implementing protective measures, and staying updated
                with the latest security trends and threats. My goal is to help organizations protect their critical
                information and systems from cyber threats through proactive security measures and best practices.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <Card className="hover-elevation stagger-item stagger-delay-1">
            <CardContent className="flex flex-col items-center p-6">
              <Shield className="h-12 w-12 mb-4 text-blue-500 dark:text-blue-400" />
              <h3 className="text-xl font-bold">Security</h3>
              <p className="text-center text-gray-500 dark:text-gray-400 mt-2">
                Network & system security, vulnerability assessment
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevation stagger-item stagger-delay-2">
            <CardContent className="flex flex-col items-center p-6">
              <Code className="h-12 w-12 mb-4 text-blue-500 dark:text-blue-400" />
              <h3 className="text-xl font-bold">Programming</h3>
              <p className="text-center text-gray-500 dark:text-gray-400 mt-2">
                Python, Java, C for security applications
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevation stagger-item stagger-delay-3">
            <CardContent className="flex flex-col items-center p-6">
              <Terminal className="h-12 w-12 mb-4 text-blue-500 dark:text-blue-400" />
              <h3 className="text-xl font-bold">Linux</h3>
              <p className="text-center text-gray-500 dark:text-gray-400 mt-2">
                System administration, security hardening
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevation stagger-item stagger-delay-4">
            <CardContent className="flex flex-col items-center p-6">
              <Server className="h-12 w-12 mb-4 text-blue-500 dark:text-blue-400" />
              <h3 className="text-xl font-bold">Infrastructure</h3>
              <p className="text-center text-gray-500 dark:text-gray-400 mt-2">
                Network architecture, secure configurations
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

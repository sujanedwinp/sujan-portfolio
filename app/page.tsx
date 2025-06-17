import { IntroScreen } from "@/components/intro-screen"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { ProjectsSection } from "@/components/projects-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactSection } from "@/components/contact-section"
import { ProgressAnimation } from "@/components/progress-animation"

export default function Home() {
  return (
    <div className="relative">
      <ProgressAnimation />
      <IntroScreen />
      <div className="h-screen" /> {/* Spacer for scrolling */}
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  )
}

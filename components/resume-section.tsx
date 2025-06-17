import { Card, CardContent } from "@/components/ui/card"
import { FileDown } from "lucide-react"
import Link from "next/link"
import { PDFViewer } from "./pdf-viewer"

export function ResumeSection() {
  return (
    <section id="resume" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-heading">
          <h2 className="section-title fade-in-up">My Resume</h2>
          <p
            className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 fade-in-up"
            style={{ transitionDelay: "100ms" }}
          >
            View or download my complete professional resume
          </p>
          <div className="mt-4">
            <Link
              href="/documents/resume.pdf"
              target="_blank"
              className="btn-solid-blue flex items-center gap-2 mx-auto w-fit"
              download="Sujan_Resume.pdf"
            >
              <FileDown className="h-4 w-4" />
              Download Resume
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <Card className="hover-elevation fade-in-up">
            <CardContent className="p-6">
              <PDFViewer pdfUrl="/documents/resume.pdf" height="800px" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

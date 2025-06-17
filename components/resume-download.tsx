import { FileDown } from "lucide-react"
import Link from "next/link"

export function ResumeDownload() {
  return (
    <Link
      href="/documents/resume.pdf"
      target="_blank"
      className="btn-solid-blue flex items-center gap-2"
      download="Sujan_Resume.pdf"
    >
      <FileDown className="h-4 w-4" />
      Download Resume
    </Link>
  )
}

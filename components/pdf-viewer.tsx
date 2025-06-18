"use client"

import { useState } from "react"

interface PDFViewerProps {
  pdfUrl: string
  title?: string
  height?: string
}

export function PDFViewer({ pdfUrl, title, height = "500px" }: PDFViewerProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="w-full flex flex-col">
      {title && <h3 className="text-xl font-bold mb-4">{title}</h3>}
      {isLoading && (
        <div className="flex justify-center items-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      <iframe
        src={`${pdfUrl}#view=FitH`}
        className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
        style={{ height }}
        onLoad={() => setIsLoading(false)}
        title={title || "PDF Document"}
      />
    </div>
  )
}

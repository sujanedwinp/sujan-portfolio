"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload, X, FileText } from "lucide-react"

interface FileUploadProps {
  onFileChange: (file: File | null) => void
  accept?: string
  maxSize?: number // in MB
}

export function FileUpload({ onFileChange, accept = ".pdf", maxSize = 5 }: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null

    // Reset error
    setError(null)

    if (selectedFile) {
      // Check file size (convert maxSize from MB to bytes)
      if (selectedFile.size > maxSize * 1024 * 1024) {
        setError(`File size exceeds ${maxSize}MB limit`)
        setFile(null)
        onFileChange(null)
        return
      }

      // Check file type
      if (!selectedFile.type.includes("pdf")) {
        setError("Only PDF files are allowed")
        setFile(null)
        onFileChange(null)
        return
      }

      setFile(selectedFile)
      onFileChange(selectedFile)
    } else {
      setFile(null)
      onFileChange(null)
    }
  }

  const handleRemoveFile = () => {
    setFile(null)
    onFileChange(null)
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  return (
    <div className="space-y-2">
      {!file ? (
        <div className="flex flex-col gap-2">
          <label className="relative cursor-pointer bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-lg p-6">
            <div className="flex flex-col items-center justify-center text-center">
              <Upload className="h-8 w-8 text-blue-500 dark:text-blue-400 mb-2" />
              <p className="text-sm font-medium">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">PDF (max {maxSize}MB)</p>
            </div>
            <Input
              ref={inputRef}
              type="file"
              accept={accept}
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </label>
          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
      ) : (
        <div className="flex items-center justify-between bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-500 dark:text-blue-400" />
            <div className="text-sm truncate max-w-[200px]">{file.name}</div>
          </div>
          <Button variant="ghost" size="sm" onClick={handleRemoveFile} className="h-8 w-8 p-0 rounded-full">
            <X className="h-4 w-4" />
            <span className="sr-only">Remove file</span>
          </Button>
        </div>
      )}
    </div>
  )
}

"use client"

import { useEffect } from "react"

export function ProgressAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target as HTMLElement
            const value = progressBar.dataset.value

            if (value) {
              const indicator = progressBar.querySelector("div")
              if (indicator) {
                setTimeout(() => {
                  indicator.style.transform = `translateX(-${100 - Number.parseInt(value)}%)`
                }, 100)
              }
            }
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    const progressBars = document.querySelectorAll(".progress-bar")
    progressBars.forEach((bar) => {
      observer.observe(bar)
    })

    return () => {
      progressBars.forEach((bar) => {
        observer.unobserve(bar)
      })
    }
  }, [])

  return null
}

"use client"

import { useEffect, useRef } from "react"

interface UseScrollAnimationProps {
  threshold?: number
  rootMargin?: string
}

export function useScrollAnimation({ threshold = 0.1, rootMargin = "0px" }: UseScrollAnimationProps = {}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          }
        })
      },
      {
        threshold,
        rootMargin,
      },
    )

    const elements = document.querySelectorAll(
      ".fade-in-up, .fade-in, .slide-in-right, .slide-in-left, .scale-in, .stagger-item",
    )

    elements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [threshold, rootMargin])

  return ref
}

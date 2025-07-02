"use client"

import { useState, useEffect } from "react"

interface ShuffleTextProps {
  text: string
}

export function ShuffleText({ text }: ShuffleTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isShuffling, setIsShuffling] = useState(true)

  useEffect(() => {
    setIsShuffling(true)
    setDisplayText("")

    const characters = "abcdefghijklmnopqrstuvwxyz"
    const finalText = text
    let iterations = 0

    const interval = setInterval(() => {
      setDisplayText((current) => {
        const result = finalText
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return finalText[index]
            }
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join("")

        return result
      })

      iterations += 1 / 3

      if (iterations >= finalText.length) {
        clearInterval(interval)
        setIsShuffling(false)
        setDisplayText(finalText)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [text])

  return (
    <div className="font-mono text-xl md:text-2xl text-blue-600 dark:text-blue-400">
      <span className={`${isShuffling ? "opacity-70" : "opacity-100"}`}>{displayText}</span>
    </div>
  )
}

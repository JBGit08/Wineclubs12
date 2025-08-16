"use client"

import { useEffect, useState } from "react"

export default function SkipNavigation() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        setIsVisible(true)
      }
    }

    const handleBlur = () => {
      setIsVisible(false)
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("click", handleBlur)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("click", handleBlur)
    }
  }, [])

  const skipToMain = () => {
    const mainContent = document.getElementById("main-content")
    if (mainContent) {
      mainContent.focus()
      mainContent.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isVisible) return null

  return (
    <button
      onClick={skipToMain}
      className="fixed top-4 left-4 z-50 bg-slate-800 text-white px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transform -translate-y-full focus:translate-y-0 transition-transform"
      onBlur={() => setIsVisible(false)}
    >
      Skip to main content
    </button>
  )
}

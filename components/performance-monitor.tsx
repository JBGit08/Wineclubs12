"use client"

import { useEffect, useState } from "react"

interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  interactionTime: number
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)

  useEffect(() => {
    // Monitor page load performance
    const measurePerformance = () => {
      if (typeof window !== "undefined" && "performance" in window) {
        const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming

        const loadTime = navigation.loadEventEnd - navigation.loadEventStart
        const renderTime = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
        const interactionTime = navigation.domInteractive - navigation.navigationStart

        setMetrics({
          loadTime: Math.round(loadTime),
          renderTime: Math.round(renderTime),
          interactionTime: Math.round(interactionTime),
        })
      }
    }

    // Wait for page to fully load
    if (document.readyState === "complete") {
      measurePerformance()
    } else {
      window.addEventListener("load", measurePerformance)
      return () => window.removeEventListener("load", measurePerformance)
    }
  }, [])

  // Only show in development
  if (process.env.NODE_ENV !== "development" || !metrics) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50">
      <div className="space-y-1">
        <div>Load: {metrics.loadTime}ms</div>
        <div>Render: {metrics.renderTime}ms</div>
        <div>Interactive: {metrics.interactionTime}ms</div>
      </div>
    </div>
  )
}

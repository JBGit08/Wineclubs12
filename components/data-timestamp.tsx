"use client"

import { Clock, Database } from "lucide-react"

export default function DataTimestamp() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <section className="py-8 px-6 bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-600">
          <div className="flex items-center mb-4 md:mb-0">
            <Database className="w-4 h-4 mr-2" />
            <span>
              <strong>Data Currency:</strong> Information last compiled on {lastUpdated}
            </span>
          </div>

          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-xs">
              Wine club details and pricing subject to change. Verify directly with wineries.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

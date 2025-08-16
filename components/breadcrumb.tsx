"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              href="/"
              className="flex items-center text-slate-500 hover:text-slate-700 transition-colors"
              aria-label="Home"
            >
              <Home className="w-4 h-4" />
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-slate-400 mx-2" />
              {item.current ? (
                <span className="text-slate-900 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href || "#"} className="text-slate-500 hover:text-slate-700 transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"
import { Wine, X } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)
  const compassButtonRef = useRef<HTMLButtonElement>(null)
  const compassMenuRef = useRef<HTMLDivElement>(null)

  // 8 navigation sections for perfect octagonal distribution
  const navigationSections = [
    { title: "Search Wine Clubs", id: "search-section", href: "#search-section", angle: 0 },
    { title: "Featured Clubs", id: "featured-clubs", href: "#featured-clubs", angle: 45 },
    { title: "Member Benefits", id: "member-benefits", href: "#member-benefits", angle: 90 },
    { title: "Wine Directory", id: "wine-club-table", href: "#wine-club-table", angle: 135 },
    { title: "Winery Guide", id: "winery-directory", href: "#winery-directory", angle: 180 },
    { title: "Contact Us", id: "contact", href: "#contact", angle: 225 },
    { title: "About Us", id: "about", href: "/about", angle: 270 },
    { title: "Legal Info", id: "legal", href: "/legal", angle: 315 },
  ]

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isNavigationOpen) {
        setIsNavigationOpen(false)
        compassButtonRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isNavigationOpen])

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        compassMenuRef.current &&
        !compassMenuRef.current.contains(event.target as Node) &&
        !compassButtonRef.current?.contains(event.target as Node)
      ) {
        setIsNavigationOpen(false)
      }
    }

    if (isNavigationOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isNavigationOpen])

  const handleNavigationClick = (href: string) => {
    setIsNavigationOpen(false)

    if (href.startsWith("/")) {
      // External page navigation
      window.location.href = href
      return
    }

    // Smooth scroll to section
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Set focus to the target section for screen readers
      targetElement.setAttribute("tabindex", "-1")
      targetElement.focus()

      // Remove tabindex after focus
      setTimeout(() => {
        targetElement.removeAttribute("tabindex")
      }, 1000)
    }
  }

  // Calculate position based on angle for uniform distribution
  const getPositionFromAngle = (angle: number, radius = 120) => {
    const radian = (angle - 90) * (Math.PI / 180) // Subtract 90 to make 0° point north
    const x = Math.cos(radian) * radius
    const y = Math.sin(radian) * radius

    return {
      transform: `translate(${x}px, ${y}px)`,
      left: "50%",
      top: "50%",
      marginLeft: "-40px", // Half button width
      marginTop: "-20px", // Half button height
    }
  }

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-800"
      role="banner"
      aria-labelledby="hero-heading"
    >
      {/* Compass Background Graphic */}
      <div className="absolute inset-0 opacity-8" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer compass ring */}
          <circle
            cx="600"
            cy="400"
            r="350"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-slate-600"
          />

          {/* Inner compass ring */}
          <circle
            cx="600"
            cy="400"
            r="280"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-slate-600"
          />

          {/* Compass points */}
          <g className="text-slate-600">
            {/* North */}
            <line x1="600" y1="50" x2="600" y2="120" stroke="currentColor" strokeWidth="3" />
            <polygon points="600,50 590,70 610,70" fill="currentColor" />

            {/* South */}
            <line x1="600" y1="680" x2="600" y2="750" stroke="currentColor" strokeWidth="3" />
            <polygon points="600,750 590,730 610,730" fill="currentColor" />

            {/* East */}
            <line x1="950" y1="400" x2="1020" y2="400" stroke="currentColor" strokeWidth="3" />
            <polygon points="1020,400 1000,390 1000,410" fill="currentColor" />

            {/* West */}
            <line x1="180" y1="400" x2="250" y2="400" stroke="currentColor" strokeWidth="3" />
            <polygon points="180,400 200,390 200,410" fill="currentColor" />
          </g>

          {/* Compass rose center */}
          <circle cx="600" cy="400" r="12" fill="currentColor" className="text-slate-600" />

          {/* Decorative compass lines */}
          <g className="text-slate-600 opacity-40">
            <line x1="600" y1="120" x2="600" y2="680" stroke="currentColor" strokeWidth="1" />
            <line x1="250" y1="400" x2="950" y2="400" stroke="currentColor" strokeWidth="1" />
            <line x1="424" y1="224" x2="776" y2="576" stroke="currentColor" strokeWidth="1" />
            <line x1="776" y1="224" x2="424" y2="576" stroke="currentColor" strokeWidth="1" />
          </g>

          {/* Compass degree markings */}
          <g className="text-slate-600 opacity-25">
            {Array.from({ length: 16 }, (_, i) => {
              const angle = i * 22.5 * (Math.PI / 180)
              const x1 = 600 + Math.cos(angle - Math.PI / 2) * 330
              const y1 = 400 + Math.sin(angle - Math.PI / 2) * 330
              const x2 = 600 + Math.cos(angle - Math.PI / 2) * 310
              const y2 = 400 + Math.sin(angle - Math.PI / 2) * 310
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" />
            })}
          </g>
        </svg>
      </div>

      {/* Compass Navigation - Top Right */}
      <div className="absolute top-8 right-8 z-20">
        <div className="flex flex-col items-center">
          <button
            ref={compassButtonRef}
            onClick={() => setIsNavigationOpen(!isNavigationOpen)}
            className="w-16 h-16 bg-slate-700/80 backdrop-blur-sm border-2 border-slate-600 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-600/80 hover:border-slate-500 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-slate-800 relative"
            aria-label={isNavigationOpen ? "Close compass navigation" : "Open compass navigation"}
            aria-expanded={isNavigationOpen}
            aria-controls="compass-navigation"
            title="Compass navigation menu"
          >
            {/* Compass Icon */}
            <div className="relative w-8 h-8">
              <svg viewBox="0 0 32 32" className="w-full h-full">
                {/* Compass ring */}
                <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1" fill="none" />

                {/* Compass points */}
                <g>
                  {/* North */}
                  <line x1="16" y1="4" x2="16" y2="8" stroke="currentColor" strokeWidth="2" />
                  <polygon points="16,4 14,6 18,6" fill="currentColor" />

                  {/* South */}
                  <line x1="16" y1="24" x2="16" y2="28" stroke="currentColor" strokeWidth="2" />

                  {/* East */}
                  <line x1="24" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth="1" />

                  {/* West */}
                  <line x1="4" y1="16" x2="8" y2="16" stroke="currentColor" strokeWidth="1" />
                </g>

                {/* Center dot */}
                <circle cx="16" cy="16" r="2" fill="currentColor" />
              </svg>
            </div>

            {/* Close X when open */}
            {isNavigationOpen && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-700/90 rounded-full">
                <X className="w-6 h-6" />
              </div>
            )}
          </button>
          {/* Navigate label */}
          <span className="text-xs text-slate-400 mt-2 font-medium">Navigate</span>
        </div>

        {/* Compass Navigation Menu */}
        {isNavigationOpen && (
          <div
            ref={compassMenuRef}
            id="compass-navigation"
            className="absolute top-20 right-0 animate-in fade-in-0 zoom-in-95 duration-300"
            role="navigation"
            aria-label="Compass navigation menu"
          >
            {/* Desktop Compass Layout */}
            <div className="hidden md:block relative w-96 h-96">
              {/* Compass Background */}
              <div className="absolute inset-0 bg-slate-800/95 backdrop-blur-md border-2 border-slate-600 rounded-full shadow-2xl">
                {/* Compass Rose Background */}
                <svg className="absolute inset-4 w-88 h-88 text-slate-600 opacity-30" viewBox="0 0 352 352">
                  <circle cx="176" cy="176" r="170" stroke="currentColor" strokeWidth="1" fill="none" />
                  <circle cx="176" cy="176" r="130" stroke="currentColor" strokeWidth="1" fill="none" />
                  <circle cx="176" cy="176" r="90" stroke="currentColor" strokeWidth="1" fill="none" />
                  <circle cx="176" cy="176" r="50" stroke="currentColor" strokeWidth="1" fill="none" />

                  {/* Compass lines for all 8 directions */}
                  <line x1="176" y1="6" x2="176" y2="346" stroke="currentColor" strokeWidth="1" />
                  <line x1="6" y1="176" x2="346" y2="176" stroke="currentColor" strokeWidth="1" />
                  <line x1="52" y1="52" x2="300" y2="300" stroke="currentColor" strokeWidth="1" />
                  <line x1="300" y1="52" x2="52" y2="300" stroke="currentColor" strokeWidth="1" />

                  {/* Center */}
                  <circle cx="176" cy="176" r="8" fill="currentColor" />
                </svg>

                {/* Navigation Buttons - Uniformly Distributed */}
                {navigationSections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => handleNavigationClick(section.href)}
                    className="absolute w-20 h-10 bg-slate-700/90 backdrop-blur-sm border border-slate-500 rounded-lg text-slate-200 hover:text-white hover:bg-slate-600/90 hover:border-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-slate-800 shadow-lg group text-xs font-medium leading-tight px-2 text-center flex items-center justify-center"
                    style={getPositionFromAngle(section.angle, 140)}
                    role="menuitem"
                    tabIndex={0}
                    title={section.title}
                  >
                    <span className="leading-tight">{section.title}</span>

                    {/* Direction indicator line */}
                    <div
                      className="absolute w-6 h-0.5 bg-slate-500 group-hover:bg-slate-400 transition-colors duration-200"
                      style={{
                        transform: `rotate(${section.angle}deg)`,
                        transformOrigin: section.angle < 180 ? "left center" : "right center",
                        left: section.angle < 180 ? "100%" : "auto",
                        right: section.angle >= 180 ? "100%" : "auto",
                        top: "50%",
                        marginTop: "-1px",
                      }}
                    />
                  </button>
                ))}

                {/* Compass Center Info */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="w-20 h-20 bg-slate-700/95 backdrop-blur-sm border border-slate-500 rounded-full flex flex-col items-center justify-center">
                    <Wine className="w-6 h-6 text-slate-300 mb-1" />
                    <span className="text-xs text-slate-400 font-medium">Navigate</span>
                  </div>
                </div>

                {/* Cardinal Direction Labels - Removed for cleaner look */}
              </div>
            </div>

            {/* Mobile Responsive Layout */}
            <div className="md:hidden w-80 bg-slate-800/95 backdrop-blur-md border border-slate-600 rounded-lg shadow-2xl p-4">
              <div className="text-center mb-4">
                <h3 className="text-white font-medium text-sm">Quick Navigation</h3>
                <p className="text-slate-400 text-xs mt-1">Jump to any section</p>
              </div>

              <div className="space-y-2">
                {navigationSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleNavigationClick(section.href)}
                    className="w-full px-4 py-3 text-left text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200 rounded-lg focus:outline-none focus:bg-slate-700/50 focus:text-white"
                    role="menuitem"
                  >
                    <span className="text-sm font-medium">{section.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center mb-8">
          <Wine className="w-12 h-12 text-slate-300 mr-4" aria-hidden="true" />
          <h1 id="hero-heading" className="text-5xl md:text-7xl font-light text-white tracking-wide">
            Vintner's
            <span className="block font-serif italic text-slate-300">Compass</span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light leading-relaxed">
          Navigate wine clubs from Napa Valley region wineries with precision.
          <span className="block mt-2">Your independent guide to vintner communities.</span>
        </p>

        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
          Discover detailed information, member benefits, and direct access to over 300 carefully curated wine clubs
          from wineries located in the Napa Valley region.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            className="bg-slate-200 text-slate-800 px-8 py-3 rounded-lg font-medium hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-slate-800"
            onClick={() => handleNavigationClick("#wine-club-table")}
            aria-describedby="explore-clubs-desc"
          >
            Explore Wine Clubs
          </button>
          <span id="explore-clubs-desc" className="sr-only">
            Browse our comprehensive directory of wine clubs
          </span>
          <button
            className="border border-slate-300 text-slate-200 px-8 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-slate-800"
            onClick={() => handleNavigationClick("#winery-directory")}
            aria-describedby="browse-wineries-desc"
          >
            Browse Wineries
          </button>
          <span id="browse-wineries-desc" className="sr-only">
            Explore wineries throughout the Napa Valley region
          </span>
        </div>

        {/* Minimal Legal Notice */}
        <div className="text-center">
          <p className="text-xs text-slate-400">
            Independent directory service • Not affiliated with wineries or organizations •{" "}
            <Link
              href="/legal"
              className="text-slate-300 hover:text-white underline focus:outline-none focus:ring-1 focus:ring-slate-300 rounded"
            >
              Legal Information
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

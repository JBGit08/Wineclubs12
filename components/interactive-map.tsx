"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Wine, Star, ArrowLeft, Home } from "lucide-react"

// Simplified map data for demonstration
const mapRegions = [
  {
    id: "oakville",
    name: "Oakville",
    wineries: 45,
    description: "Home to some of Napa's most prestigious wineries",
    featured: ["Opus One", "Screaming Eagle", "Silver Oak"],
  },
  {
    id: "rutherford",
    name: "Rutherford",
    wineries: 38,
    description: "Known for exceptional Cabernet Sauvignon",
    featured: ["Caymus", "Inglenook", "Beaulieu Vineyard"],
  },
  {
    id: "st-helena",
    name: "St. Helena",
    wineries: 52,
    description: "Historic wine region with diverse varietals",
    featured: ["Charles Krug", "Beringer", "Louis Martini"],
  },
  {
    id: "calistoga",
    name: "Calistoga",
    wineries: 29,
    description: "Northern region known for bold reds",
    featured: ["Chateau Montelena", "Schramsberg", "Frank Family"],
  },
]

export default function InteractiveMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  const selectedRegionData = mapRegions.find((region) => region.id === selectedRegion)

  // Multiple navigation methods for maximum reliability
  const handleBackToDirectory = () => {
    try {
      // Method 1: Direct navigation
      if (typeof window !== "undefined") {
        window.location.href = "/"
      }
    } catch (error) {
      console.error("Navigation error:", error)
      // Fallback: Try alternative navigation
      try {
        if (typeof window !== "undefined" && window.history) {
          window.history.back()
        }
      } catch (fallbackError) {
        console.error("Fallback navigation error:", fallbackError)
      }
    }
  }

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Header with Multiple Options */}
        <div className="mb-8 flex items-center justify-between">
          {/* Primary Back Button */}
          <Button
            variant="outline"
            onClick={handleBackToDirectory}
            className="bg-white border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors duration-200 flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm font-medium"
            aria-label="Navigate back to main directory"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Directory
          </Button>

          {/* Alternative Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center text-sm text-slate-600">
            <button
              onClick={handleBackToDirectory}
              className="flex items-center hover:text-slate-800 transition-colors duration-200"
              aria-label="Go to home page"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </button>
            <span className="mx-2">/</span>
            <span className="text-slate-800 font-medium">Map View</span>
          </nav>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-800 mb-4">Explore Napa Valley Regions</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover wine clubs by region and explore the unique characteristics of each Napa Valley area
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Visualization */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-medium text-slate-800">Napa Valley Wine Regions</h3>
                {/* Additional Navigation Link within Map */}
                <button
                  onClick={handleBackToDirectory}
                  className="text-sm text-slate-600 hover:text-slate-800 underline transition-colors duration-200"
                  aria-label="Return to directory"
                >
                  ← Directory
                </button>
              </div>

              {/* Simplified Map Grid */}
              <div className="grid grid-cols-2 gap-4">
                {mapRegions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(region.id)}
                    className={`p-6 rounded-lg border-2 transition-all text-left hover:shadow-md ${
                      selectedRegion === region.id
                        ? "border-slate-600 bg-slate-50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <MapPin className="w-5 h-5 mr-2 text-slate-600" />
                      <h4 className="font-semibold text-slate-800">{region.name}</h4>
                    </div>
                    <div className="text-sm text-slate-600 mb-2">{region.wineries} wineries</div>
                    <div className="text-xs text-slate-500">{region.description}</div>
                  </button>
                ))}
              </div>

              <div className="mt-6 p-4 bg-slate-100 rounded-lg">
                <p className="text-sm text-slate-600">
                  Click on any region above to explore featured wineries and their wine clubs
                </p>
              </div>
            </div>
          </div>

          {/* Region Details */}
          <div>
            {selectedRegionData ? (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <MapPin className="w-6 h-6 mr-3 text-slate-600" />
                    {selectedRegionData.name}
                  </CardTitle>
                  <p className="text-slate-600">{selectedRegionData.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Wine className="w-5 h-5 mr-2 text-slate-600" />
                      <span className="font-medium">{selectedRegionData.wineries} Wineries</span>
                    </div>
                    <Badge variant="secondary">{selectedRegionData.featured.length} Featured</Badge>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Featured Wineries</h4>
                    <div className="space-y-2">
                      {selectedRegionData.featured.map((winery, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <span className="font-medium text-slate-800">{winery}</span>
                          <div className="flex items-center text-sm text-slate-600">
                            <Star className="w-4 h-4 mr-1 fill-current text-amber-400" />
                            Featured
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-slate-800 hover:bg-slate-700">View All Wineries</Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Wine Clubs
                    </Button>
                  </div>

                  {/* Additional Navigation at Bottom */}
                  <div className="pt-4 border-t border-slate-200">
                    <Button
                      variant="ghost"
                      onClick={handleBackToDirectory}
                      className="w-full text-slate-600 hover:text-slate-800 hover:bg-slate-50"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Return to Main Directory
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-lg">
                <CardContent className="p-12 text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                  <h3 className="text-xl font-medium text-slate-800 mb-2">Select a Region</h3>
                  <p className="text-slate-600 mb-6">
                    Click on any region in the map to explore its wineries and wine clubs
                  </p>
                  {/* Navigation option in empty state */}
                  <Button
                    variant="outline"
                    onClick={handleBackToDirectory}
                    className="text-slate-600 hover:text-slate-800 bg-transparent"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Directory
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
          <Button
            variant="outline"
            onClick={handleBackToDirectory}
            className="bg-white border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400"
          >
            <Home className="w-4 h-4 mr-2" />
            Return to Main Directory
          </Button>
        </div>
      </div>
    </section>
  )
}

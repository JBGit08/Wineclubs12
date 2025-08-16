"use client"

import { useState, useCallback } from "react"
import { Search, MapPin, DollarSign, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useMediaQuery } from "@/hooks/use-mobile"

const subRegions = [
  "All Sub-Regions",
  "Oakville",
  "Rutherford",
  "St. Helena",
  "Calistoga",
  "Yountville",
  "Stags Leap District",
  "Mount Veeder",
  "Howell Mountain",
  "Spring Mountain",
  "Diamond Mountain",
  "Atlas Peak",
  "Carneros",
  "Coombsville",
  "Oak Knoll District",
  "Wild Horse Valley",
  "Chiles Valley",
  "Pope Valley",
  "Wooden Valley",
  "Los Carneros",
]

const priceRanges = [
  { value: "any-price", label: "Any Price Range" },
  { value: "under-100", label: "Under $100" },
  { value: "100-200", label: "$100 - $200" },
  { value: "200-400", label: "$200 - $400" },
  { value: "over-400", label: "Over $400" },
  { value: "premium", label: "Premium ($300+)" },
]

export default function SearchSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubRegion, setSelectedSubRegion] = useState("All Sub-Regions")
  const [selectedPriceRange, setSelectedPriceRange] = useState("any-price")
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const isMobile = useMediaQuery("(max-width: 768px)")

  const handleSearch = useCallback(() => {
    // Dispatch custom event to communicate with wine club table
    const searchEvent = new CustomEvent("applySearchFilters", {
      detail: {
        searchTerm: searchTerm.trim(),
        subRegion: selectedSubRegion === "All Sub-Regions" ? "all" : selectedSubRegion,
        priceRange: selectedPriceRange,
      },
    })

    console.log("Dispatching search filters:", {
      searchTerm: searchTerm.trim(),
      subRegion: selectedSubRegion === "All Sub-Regions" ? "all" : selectedSubRegion,
      priceRange: selectedPriceRange,
    })

    // Ensure the event is dispatched properly
    window.dispatchEvent(searchEvent)

    // Scroll to results section
    const resultsSection = document.getElementById("wine-club-table")
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: "smooth" })
    }
  }, [searchTerm, selectedSubRegion, selectedPriceRange])

  const clearFilters = useCallback(() => {
    setSearchTerm("")
    setSelectedSubRegion("All Sub-Regions")
    setSelectedPriceRange("any-price")
    setShowMobileFilters(false)

    // Dispatch clear event with proper timing
    setTimeout(() => {
      const clearEvent = new CustomEvent("applySearchFilters", {
        detail: {
          searchTerm: "",
          subRegion: "all",
          priceRange: "any-price",
        },
      })

      window.dispatchEvent(clearEvent)
    }, 100)
  }, [])

  return (
    <section id="search-section" className="py-16 px-6 bg-white" role="search" aria-labelledby="search-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="search-heading" className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
            Find Your Perfect Wine Club
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Search through hundreds of Napa Valley wine clubs to find the perfect match for your taste preferences,
            budget, and lifestyle. Filter by region, price range, and wine style to discover your next favorite wines.
          </p>
        </div>

        <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-slate-50">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-slate-800">
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                <span>Wine Club Search</span>
              </div>
              {isMobile && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  aria-expanded={showMobileFilters}
                  aria-controls="mobile-search-filters"
                >
                  <Filter className="w-4 h-4 mr-1" />
                  Filters
                </Button>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Main Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search wineries, wine types, regions, or club names..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg border-2 border-slate-200 focus:border-slate-400 rounded-lg"
                aria-label="Search wine clubs"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    handleSearch()
                  }
                }}
              />
              {searchTerm && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>

            {/* Filter Controls */}
            <div
              id="mobile-search-filters"
              className={`grid md:grid-cols-2 gap-6 ${isMobile && !showMobileFilters ? "hidden" : ""}`}
            >
              {/* Sub-Region Filter */}
              <div className="space-y-2">
                <label htmlFor="sub-region-select" className="flex items-center text-sm font-medium text-slate-700">
                  <MapPin className="w-4 h-4 mr-2" />
                  Sub-Region
                </label>
                <Select value={selectedSubRegion} onValueChange={setSelectedSubRegion}>
                  <SelectTrigger
                    id="sub-region-select"
                    className="h-12 border-2 border-slate-200 focus:border-slate-400"
                    aria-label="Filter by sub-region"
                  >
                    <SelectValue placeholder="Select sub-region" />
                  </SelectTrigger>
                  <SelectContent>
                    {subRegions.map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range Filter */}
              <div className="space-y-2">
                <label htmlFor="price-range-select" className="flex items-center text-sm font-medium text-slate-700">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Price Range
                </label>
                <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                  <SelectTrigger
                    id="price-range-select"
                    className="h-12 border-2 border-slate-200 focus:border-slate-400"
                    aria-label="Filter by price range"
                  >
                    <SelectValue placeholder="Select price range" />
                  </SelectTrigger>
                  <SelectContent>
                    {priceRanges.map((range) => (
                      <SelectItem key={range.value} value={range.value}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handleSearch}
                className="flex-1 h-12 bg-slate-800 hover:bg-slate-700 text-white font-medium"
                aria-label="Search wine clubs"
              >
                <Search className="w-4 h-4 mr-2" />
                Search Wine Clubs
              </Button>
              <Button
                variant="outline"
                onClick={clearFilters}
                className="h-12 px-8 border-2 border-slate-200 hover:bg-slate-50 bg-transparent"
                aria-label="Clear all filters"
              >
                Clear Filters
              </Button>
            </div>

            {/* Search Tips */}
            <div className="bg-slate-50 rounded-lg p-4 mt-6">
              <h3 className="text-sm font-medium text-slate-800 mb-2">Search Tips:</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Try searching for specific wine types like "Cabernet Sauvignon" or "Chardonnay"</li>
                <li>• Search by winery names like "Opus One" or "Screaming Eagle"</li>
                <li>• Filter by sub-regions to find clubs in specific areas like "Oakville" or "Rutherford"</li>
                <li>• Use price filters to find clubs within your budget range</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

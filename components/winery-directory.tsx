"use client"

import { useState, useMemo, useCallback } from "react"
import { Search, MapPin, Phone, Globe, ExternalLink, ChevronDown, ChevronUp, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { wineries } from "@/data/wineries"
import { useMediaQuery } from "@/hooks/use-mobile"

const ITEMS_PER_PAGE = 8

// Highlight search terms in text
const highlightText = (text: string, searchTerm: string) => {
  if (!searchTerm) return text

  const regex = new RegExp(`(${searchTerm})`, "gi")
  const parts = text.split(regex)

  return parts.map((part, index) =>
    regex.test(part) ? (
      <mark key={index} className="bg-yellow-200 px-1 rounded">
        {part}
      </mark>
    ) : (
      part
    ),
  )
}

// Mobile Winery Card Component
function WineryMobileCard({ winery, searchTerm = "", onToggleExpand, isExpanded }: any) {
  const handleVisitWinery = () => {
    const websiteUrl = winery.website.startsWith("http") ? winery.website : `https://${winery.website}`
    window.open(websiteUrl, "_blank")
  }

  return (
    <Card className="hover:shadow-lg transition-shadow mb-4">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-slate-800 mb-1">
              {highlightText(winery.name, searchTerm)}
            </CardTitle>
            <div className="flex items-center text-sm text-slate-500 mb-2">
              <MapPin className="w-3 h-3 mr-1" />
              {winery.region}
            </div>
            <div className="text-sm text-slate-600">
              Est. {winery.established}
              {winery.winemaker && (
                <>
                  {" • "}
                  {winery.winemaker}
                </>
              )}
            </div>
          </div>
          <div className="text-right">
            {winery.wineClubs && winery.wineClubs.length > 0 ? (
              <>
                <div className="text-lg font-semibold text-slate-800">
                  {winery.wineClubs.length} club{winery.wineClubs.length > 1 ? "s" : ""}
                </div>
                {winery.totalMembers && <div className="text-xs text-slate-500">{winery.totalMembers} total</div>}
              </>
            ) : (
              <div className="text-sm text-slate-500">No clubs</div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Specialties */}
        <div>
          <h4 className="text-sm font-medium text-slate-800 mb-2">Specialties</h4>
          <div className="flex flex-wrap gap-1">
            {winery.varietals?.slice(0, 3).map((varietal: string) => (
              <Badge key={varietal} variant="secondary" className="text-xs">
                {highlightText(varietal, searchTerm)}
              </Badge>
            ))}
            {winery.varietals && winery.varietals.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{winery.varietals.length - 3}
              </Badge>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="text-sm text-slate-600 line-clamp-2">{highlightText(winery.description, searchTerm)}</p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center text-slate-600">
            <Phone className="w-3 h-3 mr-1" />
            <a href={`tel:${winery.phone}`} className="hover:text-slate-800 truncate">
              {winery.phone}
            </a>
          </div>
          <div className="flex items-center text-slate-600">
            <Globe className="w-3 h-3 mr-1" />
            <span className="truncate">{winery.website.replace(/^https?:\/\//, "")}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button
            size="sm"
            className="flex-1 bg-slate-800 hover:bg-slate-700"
            onClick={() => onToggleExpand(winery.id)}
            aria-expanded={isExpanded}
            aria-label={`${isExpanded ? "Hide" : "Show"} details for ${winery.name}`}
          >
            {isExpanded ? "Hide Details" : "View Details"}
            {isExpanded ? <ChevronUp className="w-3 h-3 ml-1" /> : <ChevronDown className="w-3 h-3 ml-1" />}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              const address = encodeURIComponent(`${winery.name}, ${winery.region}, Napa Valley, CA`)
              window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, "_blank")
            }}
            aria-label={`View ${winery.name} location on map`}
            className="bg-transparent"
          >
            <MapPin className="w-3 h-3" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={handleVisitWinery}
            aria-label={`Visit ${winery.name} website`}
            className="bg-transparent"
          >
            <ExternalLink className="w-3 h-3" />
          </Button>
        </div>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="border-t border-slate-200 pt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Established:</strong> {winery.established}
              </div>
              {winery.winemaker && (
                <div>
                  <strong>Winemaker:</strong> {winery.winemaker}
                </div>
              )}
              {winery.acreage && (
                <div>
                  <strong>Vineyard Size:</strong> {winery.acreage} acres
                </div>
              )}
              {winery.annualProduction && (
                <div>
                  <strong>Annual Production:</strong> {winery.annualProduction}
                </div>
              )}
            </div>

            {winery.wineClubs && winery.wineClubs.length > 0 && (
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Wine Clubs</h4>
                <div className="space-y-2">
                  {winery.wineClubs.slice(0, 3).map((club: any, index: number) => (
                    <div key={index} className="text-sm border-l-2 border-slate-300 pl-3">
                      <div className="font-medium text-slate-800">{club.clubName}</div>
                      <div className="text-slate-600">
                        {club.priceRange} • {club.frequency} • {club.memberCount} members
                      </div>
                    </div>
                  ))}
                  {winery.wineClubs.length > 3 && (
                    <div className="text-sm text-slate-500">+{winery.wineClubs.length - 3} more clubs</div>
                  )}
                </div>
              </div>
            )}

            {/* Single Visit Button */}
            <div className="border-t border-slate-200 pt-4">
              <div className="flex justify-between items-center">
                <div className="text-sm text-slate-600">
                  <strong>Contact:</strong> {winery.phone} • {winery.address}
                </div>
                <Button size="sm" onClick={handleVisitWinery} className="bg-slate-800 hover:bg-slate-700">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Visit
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function WineryDirectory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [expandedRows, setExpandedRows] = useState<(number | string)[]>([])
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const isMobile = useMediaQuery("(max-width: 768px)")

  // Get unique filter options from all wineries
  const filterOptions = useMemo(() => {
    const regions = [...new Set(wineries.map((w) => w.region))].sort()
    const allSpecialties = wineries.flatMap((w) => w.varietals || [])
    const specialties = [...new Set(allSpecialties)].sort()
    return { regions, specialties }
  }, [])

  // Filter and search logic
  const filteredWineries = useMemo(() => {
    let filtered = [...wineries]

    // Apply search filter
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase().trim()
      filtered = filtered.filter(
        (winery) =>
          winery.name.toLowerCase().includes(searchLower) ||
          winery.region.toLowerCase().includes(searchLower) ||
          winery.description.toLowerCase().includes(searchLower) ||
          winery.winemaker?.toLowerCase().includes(searchLower) ||
          winery.varietals?.some((varietal) => varietal.toLowerCase().includes(searchLower)) ||
          winery.wineClubs?.some(
            (club) =>
              club.clubName.toLowerCase().includes(searchLower) ||
              club.description.toLowerCase().includes(searchLower) ||
              club.varietals.some((varietal) => varietal.toLowerCase().includes(searchLower)) ||
              club.benefits.some((benefit) => benefit.toLowerCase().includes(searchLower)),
          ),
      )
    }

    // Apply region filter
    if (selectedRegion !== "all") {
      filtered = filtered.filter((winery) => winery.region === selectedRegion)
    }

    // Apply specialty filter
    if (selectedSpecialty !== "all") {
      filtered = filtered.filter((winery) => winery.varietals?.includes(selectedSpecialty))
    }

    // Sort alphabetically by winery name
    filtered.sort((a, b) => a.name.localeCompare(b.name))

    return filtered
  }, [wineries, searchTerm, selectedRegion, selectedSpecialty])

  // Pagination logic
  const totalPages = Math.ceil(filteredWineries.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentWineries = filteredWineries.slice(startIndex, endIndex)

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedRegion, selectedSpecialty])

  const toggleRow = useCallback((id: number | string) => {
    setExpandedRows((prev) => (prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]))
  }, [])

  const clearFilters = useCallback(() => {
    setSearchTerm("")
    setSelectedRegion("all")
    setSelectedSpecialty("all")
    setCurrentPage(1)
    setShowMobileFilters(false)
  }, [])

  // Simulate loading for better UX
  const handleSearch = useCallback((value: string) => {
    setIsLoading(true)
    setSearchTerm(value)
    setTimeout(() => setIsLoading(false), 300)
  }, [])

  // Handle visit winery functionality
  const handleVisitWinery = useCallback((winery: any) => {
    const websiteUrl = winery.website.startsWith("http") ? winery.website : `https://${winery.website}`
    window.open(websiteUrl, "_blank")
  }, [])

  // Generate page numbers for pagination
  const getPageNumbers = useCallback(() => {
    const pages = []
    const maxVisiblePages = 7

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) pages.push(i)
        pages.push("...")
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 3) {
        pages.push(1)
        pages.push("...")
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i)
      } else {
        pages.push(1)
        pages.push("...")
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i)
        pages.push("...")
        pages.push(totalPages)
      }
    }

    return pages
  }, [currentPage, totalPages])

  return (
    <section
      id="winery-directory"
      className="py-16 px-6 bg-stone-50"
      role="main"
      aria-labelledby="winery-directory-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="winery-directory-heading" className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
            Winery Directory
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our complete directory of wineries throughout the Napa Valley region. Browse the list or use the
            search and filters below to narrow your hunt. Each listing includes contact information, mapped locations,
            and links.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Search & Filter Wineries</span>
              <div className="flex gap-2">
                {isMobile && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowMobileFilters(!showMobileFilters)}
                    aria-expanded={showMobileFilters}
                    aria-controls="mobile-winery-filters"
                  >
                    <Filter className="w-4 h-4 mr-1" />
                    Filters
                  </Button>
                )}
                <Button variant="outline" size="sm" onClick={clearFilters}>
                  Clear All
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search by winery name, region, wine types, winemaker, or wine club details..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 h-12 text-base"
                aria-label="Search wineries"
              />
              {searchTerm && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                  onClick={() => handleSearch("")}
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>

            {/* Filter Controls */}
            <div
              id="mobile-winery-filters"
              className={`grid md:grid-cols-2 gap-4 ${isMobile && !showMobileFilters ? "hidden" : ""}`}
            >
              <div>
                <label htmlFor="winery-region-filter" className="block text-sm font-medium text-slate-700 mb-2">
                  Region
                </label>
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger id="winery-region-filter" aria-label="Filter wineries by region">
                    <SelectValue placeholder="All regions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All regions</SelectItem>
                    {filterOptions.regions.map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="winery-specialty-filter" className="block text-sm font-medium text-slate-700 mb-2">
                  Wine Specialty
                </label>
                <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                  <SelectTrigger id="winery-specialty-filter" aria-label="Filter wineries by wine specialty">
                    <SelectValue placeholder="All wine types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All wine types</SelectItem>
                    {filterOptions.specialties.map((specialty) => (
                      <SelectItem key={specialty} value={specialty}>
                        {specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-slate-600">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredWineries.length)} of {filteredWineries.length} wineries
            {searchTerm && (
              <span className="ml-2 text-slate-500">(filtered from {wineries.length} total wineries)</span>
            )}
          </div>
          <div className="text-sm text-slate-500">
            Page {currentPage} of {totalPages}
          </div>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="animate-pulse border border-slate-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className="space-y-2">
                        <div className="h-5 bg-slate-200 rounded w-32"></div>
                        <div className="h-4 bg-slate-200 rounded w-24"></div>
                        <div className="h-3 bg-slate-200 rounded w-20"></div>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="h-5 bg-slate-200 rounded w-16"></div>
                        <div className="h-3 bg-slate-200 rounded w-12"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-slate-200 rounded w-full"></div>
                      <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Mobile Card View */}
            {isMobile ? (
              <div className="space-y-4">
                {currentWineries.length > 0 ? (
                  currentWineries.map((winery) => (
                    <WineryMobileCard
                      key={winery.id}
                      winery={winery}
                      searchTerm={searchTerm}
                      onToggleExpand={toggleRow}
                      isExpanded={expandedRows.includes(winery.id)}
                    />
                  ))
                ) : (
                  <Card className="shadow-lg">
                    <CardContent className="p-12 text-center">
                      <div className="text-slate-500">
                        <p className="mb-4">No wineries found matching your criteria.</p>
                        <Button variant="outline" onClick={clearFilters}>
                          Clear Filters
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            ) : (
              /* Desktop Table View */
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Wineries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[250px]">Winery</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>Specialties</TableHead>
                          <TableHead>Wine Clubs</TableHead>
                          <TableHead>Contact</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {currentWineries.length > 0 ? (
                          currentWineries.map((winery) => (
                            <TableRow key={winery.id}>
                              {/* Winery name & established */}
                              <TableCell className="font-medium">
                                <div className="font-semibold text-slate-800">
                                  {highlightText(winery.name, searchTerm)}
                                </div>
                                <div className="text-sm text-slate-500">
                                  Est.&nbsp;{winery.established}
                                  {winery.winemaker && (
                                    <>
                                      {" • "}
                                      {highlightText(winery.winemaker, searchTerm)}
                                    </>
                                  )}
                                </div>
                              </TableCell>

                              {/* Location */}
                              <TableCell>{winery.region}</TableCell>

                              {/* Specialties */}
                              <TableCell>
                                <div className="flex flex-wrap gap-1">
                                  {winery.varietals?.slice(0, 3).map((v) => (
                                    <Badge key={v} variant="secondary" className="text-xs">
                                      {highlightText(v, searchTerm)}
                                    </Badge>
                                  ))}
                                  {winery.varietals?.length > 3 && (
                                    <Badge variant="secondary" className="text-xs">
                                      +{winery.varietals.length - 3}
                                    </Badge>
                                  )}
                                </div>
                              </TableCell>

                              {/* Wine-club count */}
                              <TableCell>
                                {winery.wineClubs?.length ?? 0} club
                                {winery.wineClubs && winery.wineClubs.length !== 1 ? "s" : ""}
                              </TableCell>

                              {/* Phone */}
                              <TableCell>
                                <a href={`tel:${winery.phone}`} className="underline">
                                  {winery.phone}
                                </a>
                              </TableCell>

                              {/* Actions */}
                              <TableCell className="space-x-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    const addr = encodeURIComponent(`${winery.name}, ${winery.region}, Napa Valley, CA`)
                                    window.open(`https://www.google.com/maps/search/?api=1&query=${addr}`, "_blank")
                                  }}
                                >
                                  <MapPin className="w-3 h-3 mr-1" />
                                  Map
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    const url = winery.website.startsWith("http")
                                      ? winery.website
                                      : `https://${winery.website}`
                                    window.open(url, "_blank")
                                  }}
                                >
                                  <ExternalLink className="w-3 h-3 mr-1" />
                                  Visit
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={6} className="py-12 text-center text-slate-500">
                              No wineries found matching your criteria.
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            )}
          </>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              aria-label="Go to previous page"
            >
              Previous
            </Button>

            <div className="flex items-center gap-2 mx-4">
              {getPageNumbers().map((page, index) =>
                page === "..." ? (
                  <span key={index}>...</span>
                ) : (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page as number)}
                    disabled={currentPage === page}
                    aria-label={`Go to page ${page}`}
                  >
                    {page}
                  </Button>
                ),
              )}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              aria-label="Go to next page"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

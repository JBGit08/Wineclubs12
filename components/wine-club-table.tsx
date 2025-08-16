"use client"

import {
  Search,
  Filter,
  MapPin,
  DollarSign,
  Calendar,
  Users,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState, useMemo, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { searchWineClubs, getWineClubFilterOptions } from "@/data/wine-clubs"
import { useMediaQuery } from "@/hooks/use-mobile"
import type { WineClub } from "@/data/wine-clubs"

/* -------------------------------------------------------------- */
/* constants                                                      */
const ITEMS_PER_PAGE = 8

/* -------------------------------------------------------------- */
/* tiny helpers                                                   */
const highlightText = (text: string, needle: string) => {
  if (!needle) return text
  const regex = new RegExp(`(${needle})`, "gi")
  return text.split(regex).map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-yellow-200 px-1 rounded">
        {part}
      </mark>
    ) : (
      part
    ),
  )
}

const getClubTypeColor = (type: WineClub["clubType"]) => {
  const colors = {
    "entry-level": "bg-green-100 text-green-800",
    signature: "bg-blue-100 text-blue-800",
    specialty: "bg-purple-100 text-purple-800",
    premium: "bg-orange-100 text-orange-800",
    reserve: "bg-red-100 text-red-800",
    collectors: "bg-gray-100 text-gray-800",
  }
  return colors[type] ?? "bg-gray-100 text-gray-800"
}

/* -------------------------------------------------------------- */
/* Wine-club mobile card (used on ≤768 px)                        */
function WineClubMobileCard({
  club,
  searchTerm,
  onToggleExpand,
  isExpanded,
}: {
  club: WineClub
  searchTerm: string
  onToggleExpand: (id: string) => void
  isExpanded: boolean
}) {
  const visitSite = () => {
    const url = club.website.startsWith("http") ? club.website : `https://${club.website}`
    window.open(url, "_blank")
  }

  return (
    <Card className="hover:shadow-lg transition-shadow mb-4">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-slate-800 mb-1">
              {highlightText(club.winery, searchTerm)}
            </CardTitle>
            <div className="text-sm text-slate-600 mb-2">{highlightText(club.clubName, searchTerm)}</div>
            <div className="flex items-center text-sm text-slate-500 mb-2">
              <MapPin className="w-3 h-3 mr-1" />
              {club.subRegion}
            </div>
            <Badge className={`text-xs ${getClubTypeColor(club.clubType)}`}>{club.clubType}</Badge>
          </div>
          <div className="text-right">
            <div className="text-lg font-semibold text-slate-800">{club.priceRange}</div>
            <div className="text-xs text-slate-500">{club.frequency}</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* metrics */}
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="flex items-center text-slate-600">
            <DollarSign className="w-3 h-3 mr-1" />
            <span>{club.priceRange}</span>
          </div>
          <div className="flex items-center text-slate-600">
            <Calendar className="w-3 h-3 mr-1" />
            <span>{club.frequency}</span>
          </div>
          <div className="flex items-center text-slate-600">
            <Users className="w-3 h-3 mr-1" />
            <span>{club.memberCount}</span>
          </div>
        </div>

        {/* description */}
        <p className="text-sm text-slate-600 line-clamp-2">{highlightText(club.description, searchTerm)}</p>

        {/* varietals */}
        <div>
          <h4 className="text-sm font-medium text-slate-800 mb-2">Wine Varietals</h4>
          <div className="flex flex-wrap gap-1">
            {club.varietals.slice(0, 3).map((v) => (
              <Badge key={v} variant="outline" className="text-xs">
                {highlightText(v, searchTerm)}
              </Badge>
            ))}
            {club.varietals.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{club.varietals.length - 3}
              </Badge>
            )}
          </div>
        </div>

        {/* benefits */}
        <div>
          <h4 className="text-sm font-medium text-slate-800 mb-2">Member Benefits</h4>
          <ul className="text-xs text-slate-600 space-y-1">
            {club.benefits.slice(0, 2).map((b, i) => (
              <li key={i} className="flex items-start">
                <span className="w-1 h-1 bg-slate-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                {highlightText(b, searchTerm)}
              </li>
            ))}
            {club.benefits.length > 2 && <li className="text-slate-500">+{club.benefits.length - 2} more benefits</li>}
          </ul>
        </div>

        {/* actions */}
        <div className="flex gap-2 pt-2">
          <Button
            size="sm"
            className="flex-1 bg-slate-800 hover:bg-slate-700"
            onClick={() => onToggleExpand(club.id)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? "Hide Details" : "View Details"}
            {isExpanded ? <ChevronUp className="w-3 h-3 ml-1" /> : <ChevronDown className="w-3 h-3 ml-1" />}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              const q = encodeURIComponent(`${club.winery}, ${club.subRegion}, Napa Valley, CA`)
              window.open(`https://www.google.com/maps/search/?api=1&query=${q}`, "_blank")
            }}
            aria-label="Open map"
          >
            <MapPin className="w-3 h-3" />
          </Button>
          <Button size="sm" variant="outline" onClick={visitSite} aria-label="Visit website">
            <ExternalLink className="w-3 h-3" />
          </Button>
        </div>

        {/* expanded */}
        {isExpanded && (
          <div className="border-t border-slate-200 pt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Established:</strong> {club.established}
              </div>
              {club.winemaker && (
                <div>
                  <strong>Winemaker:</strong> {club.winemaker}
                </div>
              )}
              {club.acreage && (
                <div>
                  <strong>Vineyard Size:</strong> {club.acreage} ac
                </div>
              )}
              {club.annualProduction && (
                <div>
                  <strong>Annual Prod.:</strong> {club.annualProduction}
                </div>
              )}
            </div>

            <div>
              <h4 className="font-semibold text-slate-800 mb-2">All Varietals</h4>
              <div className="flex flex-wrap gap-1">
                {club.varietals.map((v) => (
                  <Badge key={v} variant="secondary" className="text-xs">
                    {highlightText(v, searchTerm)}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800 mb-2">All Benefits</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                {club.benefits.map((b, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                    {highlightText(b, searchTerm)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <div className="flex justify-between items-center">
                <div className="text-sm text-slate-600">
                  <strong>Contact:</strong> {club.website}
                </div>
                <Button size="sm" onClick={visitSite} className="bg-slate-800 hover:bg-slate-700">
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

/* -------------------------------------------------------------- */
/* Main Wine Club Table component                                 */
export default function WineClubTable() {
  /* state ------------------------------------------------------- */
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [selectedSubRegion, setSelectedSubRegion] = useState("all")
  const [selectedVarietal, setSelectedVarietal] = useState("all")
  const [selectedPriceRange, setSelectedPriceRange] = useState("all")
  const [selectedFrequency, setSelectedFrequency] = useState("all")
  const [selectedClubType, setSelectedClubType] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [expandedRows, setExpandedRows] = useState<string[]>([])
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const isMobile = useMediaQuery("(max-width: 768px)")

  /* filter options (memoised) ----------------------------------- */
  const filterOptions = useMemo(() => getWineClubFilterOptions(), [])

  /* full filtering + searching ---------------------------------- */
  const filteredClubs = useMemo(() => {
    const filters = {
      region: selectedRegion !== "all" ? selectedRegion : undefined,
      subRegion: selectedSubRegion !== "all" ? selectedSubRegion : undefined,
      varietal: selectedVarietal !== "all" ? selectedVarietal : undefined,
      priceRange: selectedPriceRange !== "all" ? selectedPriceRange : undefined,
      frequency: selectedFrequency !== "all" ? selectedFrequency : undefined,
      clubType: selectedClubType !== "all" ? selectedClubType : undefined,
    }
    return searchWineClubs(searchTerm, filters)
  }, [
    searchTerm,
    selectedRegion,
    selectedSubRegion,
    selectedVarietal,
    selectedPriceRange,
    selectedFrequency,
    selectedClubType,
  ])

  /* pagination -------------------------------------------------- */
  const totalPages = Math.ceil(filteredClubs.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentClubs = filteredClubs.slice(startIndex, endIndex)

  /* handlers ---------------------------------------------------- */
  const toggleRow = useCallback((id: string) => {
    setExpandedRows((prev) => (prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]))
  }, [])

  const clearFilters = useCallback(() => {
    setSearchTerm("")
    setSelectedRegion("all")
    setSelectedSubRegion("all")
    setSelectedVarietal("all")
    setSelectedPriceRange("all")
    setSelectedFrequency("all")
    setSelectedClubType("all")
    setCurrentPage(1)
    setShowMobileFilters(false)
  }, [])

  const handleSearch = useCallback((value: string) => {
    setIsLoading(true)
    setSearchTerm(value)
    setTimeout(() => setIsLoading(false), 300)
  }, [])

  /* render ------------------------------------------------------ */
  return (
    <section id="wine-club-table" className="py-16 px-6 bg-blue-50" aria-labelledby="wine-club-directory-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="wine-club-directory-heading" className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
            Wine Club Directory
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover and compare wine clubs from Napa Valley's finest wineries. Use our search &amp; filter tools to
            find the perfect club.
          </p>
        </div>

        {/* search + filter card ----------------------------------- */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Search &amp; Filter Wine Clubs</span>
              <div className="flex gap-2">
                {isMobile && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowMobileFilters((s) => !s)}
                    aria-expanded={showMobileFilters}
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
            {/* search bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search by winery, club, varietal…"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 h-12 text-base"
              />
              {searchTerm && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                  onClick={() => handleSearch("")}
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>

            {/* filter controls */}
            <div
              className={`grid md:grid-cols-3 lg:grid-cols-6 gap-4 ${isMobile && !showMobileFilters ? "hidden" : ""}`}
            >
              {/* Region */}
              <div>
                <label htmlFor="filter-region" className="block text-sm font-medium text-slate-700 mb-2">
                  Region
                </label>
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger id="filter-region">
                    <SelectValue placeholder="All regions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All regions</SelectItem>
                    {filterOptions.regions.map((r) => (
                      <SelectItem key={r} value={r}>
                        {r}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sub-region */}
              <div>
                <label htmlFor="filter-subregion" className="block text-sm font-medium text-slate-700 mb-2">
                  Sub-Region
                </label>
                <Select value={selectedSubRegion} onValueChange={setSelectedSubRegion}>
                  <SelectTrigger id="filter-subregion">
                    <SelectValue placeholder="All sub-regions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All sub-regions</SelectItem>
                    {filterOptions.subRegions.map((sr) => (
                      <SelectItem key={sr} value={sr}>
                        {sr}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Varietal */}
              <div>
                <label htmlFor="filter-varietal" className="block text-sm font-medium text-slate-700 mb-2">
                  Wine Type
                </label>
                <Select value={selectedVarietal} onValueChange={setSelectedVarietal}>
                  <SelectTrigger id="filter-varietal">
                    <SelectValue placeholder="All varietals" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All varietals</SelectItem>
                    {filterOptions.varietals.map((v) => (
                      <SelectItem key={v} value={v}>
                        {v}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price */}
              <div>
                <label htmlFor="filter-price" className="block text-sm font-medium text-slate-700 mb-2">
                  Price Range
                </label>
                <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                  <SelectTrigger id="filter-price">
                    <SelectValue placeholder="All prices" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All price ranges</SelectItem>
                    {filterOptions.priceRanges.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Frequency */}
              <div>
                <label htmlFor="filter-frequency" className="block text-sm font-medium text-slate-700 mb-2">
                  Frequency
                </label>
                <Select value={selectedFrequency} onValueChange={setSelectedFrequency}>
                  <SelectTrigger id="filter-frequency">
                    <SelectValue placeholder="All frequencies" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All frequencies</SelectItem>
                    {filterOptions.frequencies.map((f) => (
                      <SelectItem key={f} value={f}>
                        {f}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Club type */}
              <div>
                <label htmlFor="filter-clubtype" className="block text-sm font-medium text-slate-700 mb-2">
                  Club Type
                </label>
                <Select value={selectedClubType} onValueChange={setSelectedClubType}>
                  <SelectTrigger id="filter-clubtype">
                    <SelectValue placeholder="All types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All types</SelectItem>
                    {filterOptions.clubTypes.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* results summary ---------------------------------------- */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-slate-600">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredClubs.length)} of {filteredClubs.length} wine clubs
          </div>
          <div className="text-sm text-slate-500">
            Page {currentPage} of {totalPages}
          </div>
        </div>

        {/* loading skeleton --------------------------------------- */}
        {isLoading ? (
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <p className="animate-pulse text-slate-500">Loading…</p>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* mobile view */}
            {isMobile ? (
              <>
                {currentClubs.map((c) => (
                  <WineClubMobileCard
                    key={c.id}
                    club={c}
                    searchTerm={searchTerm}
                    onToggleExpand={toggleRow}
                    isExpanded={expandedRows.includes(c.id)}
                  />
                ))}
                {!currentClubs.length && (
                  <Card>
                    <CardContent className="p-12 text-center text-slate-500">
                      <p className="mb-4">No wine clubs found for your criteria.</p>
                      <Button variant="outline" onClick={clearFilters}>
                        Clear Filters
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </>
            ) : (
              /* desktop table (simplified) ------------------------- */
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Wine Clubs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[260px]">Winery & Club</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>Varietals</TableHead>
                          <TableHead>Price / Freq.</TableHead>
                          <TableHead>Members</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {currentClubs.map((c) => (
                          <>
                            <TableRow
                              key={c.id}
                              className="cursor-pointer hover:bg-slate-50"
                              onClick={() => toggleRow(c.id)}
                              aria-expanded={expandedRows.includes(c.id)}
                            >
                              <TableCell className="font-medium">
                                <div className="font-semibold text-slate-800">
                                  {highlightText(c.winery, searchTerm)}
                                </div>
                                <div className="text-sm text-slate-600">{highlightText(c.clubName, searchTerm)}</div>
                                <div className="text-xs text-slate-500 mt-1">Est. {c.established}</div>
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-1 text-slate-500" />
                                  <div>
                                    <div className="font-medium">{c.subRegion}</div>
                                    <div className="text-sm text-slate-500">{c.region}</div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="flex flex-wrap gap-1">
                                  {c.varietals.slice(0, 2).map((v) => (
                                    <Badge key={v} variant="secondary" className="text-xs">
                                      {highlightText(v, searchTerm)}
                                    </Badge>
                                  ))}
                                  {c.varietals.length > 2 && (
                                    <Badge variant="secondary" className="text-xs">
                                      +{c.varietals.length - 2}
                                    </Badge>
                                  )}
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="text-sm">
                                  <div className="font-medium text-slate-800">{c.priceRange}</div>
                                  <div className="text-slate-500">{c.frequency}</div>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center text-sm">
                                  <Users className="w-4 h-4 mr-1 text-slate-500" />
                                  {c.memberCount}
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center space-x-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      const q = encodeURIComponent(`${c.winery}, ${c.subRegion}, Napa Valley, CA`)
                                      window.open(`https://www.google.com/maps/search/?api=1&query=${q}`, "_blank")
                                    }}
                                  >
                                    <MapPin className="w-3 h-3 mr-1" />
                                    Map
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      window.open(
                                        c.website.startsWith("http") ? c.website : `https://${c.website}`,
                                        "_blank",
                                      )
                                    }}
                                  >
                                    <ExternalLink className="w-3 h-3 mr-1" />
                                    Visit
                                  </Button>
                                  {expandedRows.includes(c.id) ? (
                                    <ChevronUp className="w-4 h-4 text-slate-400" />
                                  ) : (
                                    <ChevronDown className="w-4 h-4 text-slate-400" />
                                  )}
                                </div>
                              </TableCell>
                            </TableRow>

                            {/* expanded desktop row */}
                            {expandedRows.includes(c.id) && (
                              <TableRow>
                                <TableCell colSpan={6} className="bg-slate-50">
                                  <div className="p-4 space-y-4">
                                    <p className="text-sm text-slate-600">{highlightText(c.description, searchTerm)}</p>
                                    <div className="flex flex-wrap gap-1">
                                      {c.benefits.slice(0, 6).map((b, i) => (
                                        <Badge key={i} variant="outline" className="text-xs">
                                          {highlightText(b, searchTerm)}
                                        </Badge>
                                      ))}
                                      {c.benefits.length > 6 && (
                                        <Badge variant="outline" className="text-xs">
                                          +{c.benefits.length - 6}
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                </TableCell>
                              </TableRow>
                            )}
                          </>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            )}
          </>
        )}

        {/* pagination -------------------------------------------- */}
        {totalPages > 1 && (
          <nav aria-label="Pagination" className="mt-12">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (p) =>
                  (p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1) && (
                    <Button
                      key={p}
                      variant={p === currentPage ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(p)}
                    >
                      {p}
                    </Button>
                  ),
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </nav>
        )}
      </div>
    </section>
  )
}

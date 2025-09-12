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
import { useState, useMemo, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useMediaQuery } from "@/hooks/use-mobile"

/* -------------------------------------------------------------- */
/* Simplified types for Airtable integration                     */
type WineClub = {
  id: string
  wineryClub: string
  location: string
  varietals: string
  priceFreq: string
  members: string
}

/* -------------------------------------------------------------- */
/* constants                                                      */
const ITEMS_PER_PAGE = 8
const AIRTABLE_BASE_ID = 'app47CT6F3Yetnnhr'
const AIRTABLE_TABLE_NAME = 'Wine Club Database'
const AIRTABLE_API_KEY = 'patVmwquvE7xL96fc'

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

/* -------------------------------------------------------------- */
/* Wine-club mobile card (simplified for Airtable data)          */
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
  // Extract winery name from wineryClub field
  const wineryName = club.wineryClub.split(' - ')[0] || club.wineryClub

  return (
    <Card className="hover:shadow-lg transition-shadow mb-4">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-slate-800 mb-1">
              {highlightText(club.wineryClub, searchTerm)}
            </CardTitle>
            <div className="flex items-center text-sm text-slate-500 mb-2">
              <MapPin className="w-3 h-3 mr-1" />
              {club.location}
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-semibold text-slate-800">{club.priceFreq}</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* metrics */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center text-slate-600">
            <DollarSign className="w-3 h-3 mr-1" />
            <span>{club.priceFreq}</span>
          </div>
          <div className="flex items-center text-slate-600">
            <Users className="w-3 h-3 mr-1" />
            <span>{club.members}</span>
          </div>
        </div>

        {/* varietals */}
        <div>
          <h4 className="text-sm font-medium text-slate-800 mb-2">Wine Varietals</h4>
          <div className="text-sm text-slate-600">
            {highlightText(club.varietals, searchTerm)}
          </div>
        </div>

        {/* actions */}
        <div className="flex gap-2 pt-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              const q = encodeURIComponent(`${wineryName}, ${club.location}, Napa Valley, CA`)
              window.open(`https://www.google.com/maps/search/?api=1&query=${q}`, "_blank")
            }}
            aria-label="Open map"
          >
            <MapPin className="w-3 h-3 mr-1" />
            Map
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={() => {
              const searchQuery = encodeURIComponent(`${wineryName} winery official website`)
              window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank")
            }}
            aria-label="Find website"
          >
            <ExternalLink className="w-3 h-3 mr-1" />
            Visit
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

/* -------------------------------------------------------------- */
/* Main Wine Club Table component                                 */
export default function WineClubTable() {
  /* state ------------------------------------------------------- */
  const [wineClubs, setWineClubs] = useState<WineClub[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>("")
  const [mounted, setMounted] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [expandedRows, setExpandedRows] = useState<string[]>([])
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [isSearching, setIsSearching] = useState(false)

  const isMobile = useMediaQuery("(max-width: 768px)")

  // Fix hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  /* fetch data from Airtable ------------------------------------ */
  useEffect(() => {
    if (!mounted) return

    const fetchWineClubs = async () => {
      console.log("Fetching wine clubs from Airtable...")
      
      try {
        const response = await fetch(
          `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`,
          {
            headers: {
              'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
              'Content-Type': 'application/json',
            },
          }
        )
        
        console.log("Airtable response status:", response.status)
        
        if (response.ok) {
          const data = await response.json()
          console.log("Airtable data received:", data)
          
          const clubs: WineClub[] = data.records.map((record: any, index: number) => ({
            id: record.id || `club-${index}`,
            wineryClub: record.fields['Winery & Club'] || '',
            location: record.fields['Location'] || '',
            varietals: record.fields['Varietals'] || '',
            priceFreq: record.fields['Price/Freq.'] || '',
            members: record.fields['Members'] || '',
          }))
          
          setWineClubs(clubs)
          setLoading(false)
          setError("")
          console.log(`Successfully loaded ${clubs.length} wine clubs from Airtable`)
        } else {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
      } catch (err) {
        console.error("Error fetching wine clubs:", err)
        setError("Failed to load wine clubs from database")
        setLoading(false)
        
        // Fallback data
        const fallbackClubs: WineClub[] = [
          {
            id: "fallback-1",
            wineryClub: "Opus One Membership",
            location: "Oakville",
            varietals: "Cabernet Sauvignon, Merlot",
            priceFreq: "$800/year",
            members: "800 members"
          },
          {
            id: "fallback-2",
            wineryClub: "Caymus Club",
            location: "Rutherford",
            varietals: "Cabernet Sauvignon, Zinfandel",
            priceFreq: "$300/year",
            members: "15,000+ members"
          }
        ]
        setWineClubs(fallbackClubs)
      }
    }
    
    fetchWineClubs()
  }, [mounted])

  /* filter options (simplified) --------------------------------- */
  const filterOptions = useMemo(() => {
    const locations = new Set<string>()
    wineClubs.forEach((club) => {
      locations.add(club.location)
    })
    return {
      locations: Array.from(locations).sort(),
    }
  }, [wineClubs])

  /* filtering + searching --------------------------------------- */
  const filteredClubs = useMemo(() => {
    let filtered = wineClubs

    // Location filter
    if (selectedLocation !== "all") {
      filtered = filtered.filter(club => club.location === selectedLocation)
    }

    // Search filter
    if (searchTerm) {
      const lower = searchTerm.toLowerCase().trim()
      filtered = filtered.filter(club => 
        club.wineryClub.toLowerCase().includes(lower) ||
        club.location.toLowerCase().includes(lower) ||
        club.varietals.toLowerCase().includes(lower) ||
        club.priceFreq.toLowerCase().includes(lower)
      )
    }

    return filtered
  }, [wineClubs, searchTerm, selectedLocation])

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
    setSelectedLocation("all")
    setCurrentPage(1)
    setShowMobileFilters(false)
  }, [])

  const handleSearch = useCallback((value: string) => {
    setIsSearching(true)
    setSearchTerm(value)
    setCurrentPage(1)
    setTimeout(() => setIsSearching(false), 300)
  }, [])

  // Don't render until mounted (prevents hydration issues)
  if (!mounted) {
    return (
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-pulse">Loading wine club directory...</div>
          </div>
        </div>
      </section>
    )
  }

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
          {error && (
            <div className="mt-4 text-sm text-amber-600 bg-amber-50 p-2 rounded">
              {error} - Showing available data
            </div>
          )}
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
                placeholder="Search by winery, location, varietals…"
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
              className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 ${isMobile && !showMobileFilters ? "hidden" : ""}`}
            >
              {/* Location */}
              <div>
                <label htmlFor="filter-location" className="block text-sm font-medium text-slate-700 mb-2">
                  Location
                </label>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger id="filter-location">
                    <SelectValue placeholder="All locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All locations</SelectItem>
                    {filterOptions.locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
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
          {totalPages > 1 && (
            <div className="text-sm text-slate-500">
              Page {currentPage} of {totalPages}
            </div>
          )}
        </div>

        {/* loading/content ---------------------------------------- */}
        {loading ? (
          <Card className="shadow-lg">
            <CardContent className="p-12 text-center">
              <div className="animate-pulse text-slate-500">Loading wine clubs from database...</div>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* mobile view */}
            {isMobile ? (
              <>
                {currentClubs.map((club) => (
                  <WineClubMobileCard
                    key={club.id}
                    club={club}
                    searchTerm={searchTerm}
                    onToggleExpand={toggleRow}
                    isExpanded={expandedRows.includes(club.id)}
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
              /* desktop table ---------------------------------------- */
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
                        {currentClubs.map((club) => (
                          <TableRow
                            key={club.id}
                            className="cursor-pointer hover:bg-slate-50"
                            onClick={() => toggleRow(club.id)}
                            aria-expanded={expandedRows.includes(club.id)}
                          >
                            <TableCell className="font-medium">
                              <div className="font-semibold text-slate-800">
                                {highlightText(club.wineryClub, searchTerm)}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1 text-slate-500" />
                                <div className="font-medium">{highlightText(club.location, searchTerm)}</div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="text-sm">
                                {highlightText(club.varietals, searchTerm)}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="text-sm">
                                <div className="font-medium text-slate-800">{club.priceFreq}</div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center text-sm">
                                <Users className="w-4 h-4 mr-1 text-slate-500" />
                                {club.members}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    const wineryName = club.wineryClub.split(' - ')[0] || club.wineryClub
                                    const q = encodeURIComponent(`${wineryName}, ${club.location}, Napa Valley, CA`)
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
                                    const wineryName = club.wineryClub.split(' - ')[0] || club.wineryClub
                                    const searchQuery = encodeURIComponent(`${wineryName} winery official website`)
                                    window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank")
                                  }}
                                >
                                  <ExternalLink className="w-3 h-3 mr-1" />
                                  Visit
                                </Button>
                                {expandedRows.includes(club.id) ? (
                                  <ChevronUp className="w-4 h-4 text-slate-400" />
                                ) : (
                                  <ChevronDown className="w-4 h-4 text-slate-400" />
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    {!currentClubs.length && (
                      <div className="p-12 text-center text-slate-500">
                        <p className="mb-4">No wine clubs found for your criteria.</p>
                        <Button variant="outline" onClick={clearFilters}>
                          Clear Filters
                        </Button>
                      </div>
                    )}
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

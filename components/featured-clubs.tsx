"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, ExternalLink, Wine, Award, Calendar, DollarSign } from "lucide-react"

// Update this array to change the featured wine clubs
const featuredClubs = [
  {
    id: 1,
    winery: "Harlan Estate",
    clubName: "Harlan Estate Wine Club",
    description:
      "Ultra-premium Bordeaux-style blend from one of Napa's most prestigious cult wineries, known for exceptional quality and limited production.",
    priceRange: "$500-900",
    frequency: "Semi-Annual",
    members: "Waitlist Only",
    varietals: ["Bordeaux Blend", "Cabernet Sauvignon"],
    perks: ["Private estate tours", "Winemaker dinners", "First access to releases"],
    website: "https://harlanestate.com",
    featured: true,
  },
  {
    id: 2,
    winery: "Dominus Estate",
    clubName: "Dominus Wine Club",
    description:
      "Christian Moueix's Napa Valley expression of Bordeaux winemaking tradition, producing world-class Cabernet Sauvignon blends.",
    priceRange: "$200-400",
    frequency: "Quarterly",
    members: "Limited",
    varietals: ["Cabernet Sauvignon", "Cabernet Franc", "Petit Verdot"],
    perks: ["Library wine access", "Harvest events", "Member-only tastings"],
    website: "https://dominusestate.com",
    featured: true,
  },
  {
    id: 3,
    winery: "Schramsberg Vineyards",
    clubName: "Schramsberg Sparkling Club",
    description:
      "America's first hillside winery dedicated to sparkling wine production, crafting méthode champenoise wines since 1862.",
    priceRange: "$60-120",
    frequency: "Quarterly",
    members: "3,500+",
    varietals: ["Chardonnay", "Pinot Noir", "Pinot Meunier"],
    perks: ["Cave tours", "Sparkling wine education", "Holiday releases"],
    website: "https://schramsberg.com",
    featured: true,
  },
]

export default function FeaturedClubs() {
  const handleJoinClub = (club: (typeof featuredClubs)[0]) => {
    // Open the winery's website in a new tab
    window.open(club.website, "_blank")
  }

  return (
    <section id="featured-clubs" className="py-20 px-6 bg-stone-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-4">Featured Wine Clubs</h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Handpicked selections from Napa Valley's most prestigious wineries
          </p>
        </div>

        {/* Three-column grid with enhanced content layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredClubs.map((club) => (
            <Card
              key={club.id}
              className="h-full flex flex-col overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 ring-1 ring-amber-400 bg-white"
            >
              {/* Header Section with Featured Badge */}
              <CardHeader className="pb-4 p-6 bg-gradient-to-br from-stone-50 to-stone-100 relative">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-amber-500 text-white border-0 text-sm">
                    <Award className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>

                <div className="pr-20">
                  <CardTitle className="text-xl md:text-2xl font-semibold text-stone-800 leading-tight mb-2">
                    {club.winery}
                  </CardTitle>
                  <p className="text-sm text-stone-600 font-medium mb-3">{club.clubName}</p>

                  {/* Key Metrics Row */}
                  <div className="flex items-center justify-between text-sm bg-white/60 rounded-lg p-3 mb-3">
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1 text-amber-600" />
                      <span className="font-semibold text-stone-800">{club.priceRange}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 text-amber-600" />
                      <span className="text-stone-600">{club.frequency}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1 text-amber-600" />
                      <span className="text-stone-600">{club.members}</span>
                    </div>
                  </div>
                </div>

                <CardDescription className="text-sm text-stone-600 leading-relaxed">{club.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 flex-1 flex flex-col justify-between p-6">
                <div className="space-y-5">
                  {/* Varietals Section */}
                  <div>
                    <h4 className="text-sm font-semibold text-stone-800 mb-3 flex items-center">
                      <Wine className="w-4 h-4 mr-2 text-amber-600" />
                      Wine Varietals
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {club.varietals.map((varietal, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-stone-100 text-stone-700 text-sm px-3 py-1 hover:bg-stone-200 transition-colors"
                        >
                          {varietal}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Member Benefits Section */}
                  <div>
                    <h4 className="text-sm font-semibold text-stone-800 mb-3">Exclusive Member Benefits</h4>
                    <ul className="space-y-2">
                      {club.perks.map((perk, index) => (
                        <li key={index} className="text-sm text-stone-600 flex items-start">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6 mt-auto border-t border-stone-100">
                  <Button
                    className="flex-1 bg-stone-800 hover:bg-stone-700 text-white py-3 font-medium"
                    onClick={() => handleJoinClub(club)}
                  >
                    Join Club
                  </Button>
                  <Button
                    variant="outline"
                    className="border-stone-300 text-stone-700 hover:bg-stone-50 bg-transparent py-3 px-6"
                    onClick={() => window.open(club.website, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information and CTA */}
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              These featured selections represent just a glimpse of the diverse wine club offerings available from Napa
              Valley region wineries. From intimate boutique experiences to prestigious collector programs, our
              comprehensive directory includes over 300 wine clubs spanning every price range, frequency, and wine style
              to match your preferences.
            </p>
            <p className="text-base text-stone-400">
              Discover family-owned estates, cult wine allocations, sustainable producers, and everything in between.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white text-stone-800 px-8 py-3 rounded-lg font-medium hover:bg-stone-100 transition-colors"
              onClick={() => {
                const tableSection =
                  document.getElementById("wine-club-table") ||
                  document.querySelector('[data-section="wine-club-table"]')
                if (tableSection) {
                  tableSection.scrollIntoView({ behavior: "smooth", block: "start" })
                  // Focus search input after scrolling
                  setTimeout(() => {
                    const searchInput = tableSection.querySelector('input[placeholder*="Search"]') as HTMLInputElement
                    if (searchInput) {
                      searchInput.focus()
                    }
                  }, 1000)
                }
              }}
            >
              Search Wine Clubs
            </button>
            <button
              className="border border-stone-300 text-stone-200 px-8 py-3 rounded-lg font-medium hover:bg-stone-700 transition-colors"
              onClick={() => {
                const winerySection =
                  document.getElementById("winery-directory") ||
                  document.querySelector('[data-section="winery-directory"]')
                if (winerySection) {
                  winerySection.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              }}
            >
              Browse All Wineries
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

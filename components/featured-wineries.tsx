"use client"

import { MapPin, Users, Wine, Phone, Globe, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState } from "react"

const featuredWineries = [
  {
    id: 1,
    name: "Silverado Estate",
    location: "Stags Leap District",
    image: "/placeholder.svg?height=300&width=400&text=Silverado+Estate+Vineyard",
    fallbackImage: "/placeholder.svg?height=300&width=400&text=Premium+Vineyard",
    memberCount: "2,500+",
    specialties: ["Cabernet Sauvignon", "Merlot"],
    clubName: "Silverado Society",
    priceRange: "$75-150/month",
    rating: 4.8,
    established: "1981",
    highlights: ["Estate grown", "Limited releases", "Tasting room access"],
    phone: "(707) 257-1770",
    website: "silveradoestate.com",
    description:
      "Family-owned estate winery producing exceptional Cabernet Sauvignon from the renowned Stags Leap District.",
  },
  {
    id: 2,
    name: "Meadowbrook Vineyards",
    location: "Rutherford",
    image: "/placeholder.svg?height=300&width=400&text=Meadowbrook+Vineyards+Landscape",
    fallbackImage: "/placeholder.svg?height=300&width=400&text=Organic+Vineyard",
    memberCount: "1,200+",
    specialties: ["Chardonnay", "Pinot Noir"],
    clubName: "Meadowbrook Circle",
    priceRange: "$60-120/month",
    rating: 4.6,
    established: "1975",
    highlights: ["Organic farming", "Small batch", "Vineyard tours"],
    phone: "(707) 963-7774",
    website: "meadowbrookvineyards.com",
    description:
      "Sustainable winery committed to organic farming practices and producing elegant, terroir-driven wines.",
  },
  {
    id: 3,
    name: "Heritage Hills Winery",
    location: "St. Helena",
    image: "/placeholder.svg?height=300&width=400&text=Heritage+Hills+Winery+Estate",
    fallbackImage: "/placeholder.svg?height=300&width=400&text=Historic+Winery",
    memberCount: "3,000+",
    specialties: ["Bordeaux Blends", "Sauvignon Blanc"],
    clubName: "Heritage Collection",
    priceRange: "$90-200/month",
    rating: 4.7,
    established: "1968",
    highlights: ["Family owned", "Library wines", "Harvest events"],
    phone: "(707) 967-3200",
    website: "heritagehillswinery.com",
    description:
      "Historic family winery crafting premium Bordeaux-style blends with over 50 years of winemaking tradition.",
  },
]

interface WineryImageProps {
  src: string
  fallbackSrc: string
  alt: string
  wineryName: string
}

function WineryImage({ src, fallbackSrc, alt, wineryName }: WineryImageProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative w-full h-48 overflow-hidden bg-slate-100">
      {isLoading && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
          <div className="text-slate-400 text-sm">Loading...</div>
        </div>
      )}
      <Image
        src={imageError ? fallbackSrc : src}
        alt={alt}
        fill
        className={`object-cover transition-all duration-300 hover:scale-105 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={85}
        priority={true}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImageError(true)
          setIsLoading(false)
        }}
      />
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Winery name overlay */}
      <div className="absolute bottom-2 left-2 right-2">
        <div className="bg-white/90 backdrop-blur-sm rounded px-2 py-1">
          <p className="text-xs font-medium text-slate-800 truncate">{wineryName}</p>
        </div>
      </div>
    </div>
  )
}

export default function FeaturedWineries() {
  return (
    <section className="py-16 px-6 bg-slate-50" id="featured-wineries">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">Featured Wine Clubs</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover exceptional wine clubs from renowned Napa Valley region wineries, each offering unique experiences
            and exclusive access to premium wines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWineries.map((winery) => (
            <Card key={winery.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              {/* Optimized Image Section */}
              <WineryImage
                src={winery.image}
                fallbackSrc={winery.fallbackImage}
                alt={`${winery.name} vineyard and winery estate`}
                wineryName={winery.name}
              />

              <CardContent className="p-6">
                {/* Header with Rating */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-800 group-hover:text-slate-900 transition-colors">
                      {winery.name}
                    </h3>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium text-slate-700">{winery.rating}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-3 line-clamp-2">{winery.description}</p>

                  <div className="flex items-center text-slate-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                    <span className="text-sm">{winery.location}</span>
                    <span className="text-xs text-slate-400 ml-2">Est. {winery.established}</span>
                  </div>

                  <div className="flex items-center text-slate-600">
                    <Users className="w-4 h-4 mr-1 flex-shrink-0" />
                    <span className="text-sm">{winery.memberCount} members</span>
                  </div>
                </div>

                {/* Wine Club Information */}
                <div className="mb-4">
                  <h4 className="font-medium text-slate-800 mb-2">{winery.clubName}</h4>
                  <p className="text-sm text-slate-600 mb-2 font-medium">{winery.priceRange}</p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {winery.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Club Highlights */}
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-slate-700 mb-2">Club Highlights:</h5>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {winery.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <Wine className="w-3 h-3 mr-2 text-slate-400 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Information */}
                <div className="mb-4 flex items-center gap-4 text-xs text-slate-600">
                  <div className="flex items-center gap-1">
                    <Phone className="w-3 h-3" />
                    <span>{winery.phone}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="w-3 h-3" />
                    <span>{winery.website}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Button className="w-full bg-transparent hover:bg-slate-50 transition-colors" variant="outline">
                  View Club Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="hover:shadow-lg transition-shadow">
            View All Wine Clubs
          </Button>
        </div>
      </div>
    </section>
  )
}

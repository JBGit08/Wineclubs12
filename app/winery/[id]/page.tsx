import { notFound } from "next/navigation"
import { wineries } from "@/data/wineries"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Globe, Calendar, Users, Wine } from "lucide-react"

interface WineryPageProps {
  params: {
    id: string
  }
}

export default function WineryPage({ params }: WineryPageProps) {
  const winery = wineries.find((w) => w.id === Number.parseInt(params.id))

  if (!winery) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-slate-800">
        <img
          src={winery.image || "/placeholder.svg"}
          alt={winery.name}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl font-light mb-2">{winery.name}</h1>
          <div className="flex items-center text-lg">
            <MapPin className="w-5 h-5 mr-2" />
            {winery.region}, Napa Valley
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">About {winery.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed mb-6">{winery.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-3">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {winery.varietals.map((varietal, index) => (
                        <Badge key={index} variant="secondary">
                          {varietal}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800 mb-3">Details</h3>
                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        Established {winery.established}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {winery.size} winery
                      </div>
                      <div className="flex items-center">
                        <Wine className="w-4 h-4 mr-2" />
                        {winery.style} style
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wine Club Information */}
            {winery.wineClub && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Wine Club</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-3">Club Details</h3>
                      <div className="space-y-2 text-sm">
                        <div>
                          <strong>Price Range:</strong> {winery.wineClub.priceRange}
                        </div>
                        <div>
                          <strong>Frequency:</strong> {winery.wineClub.frequency}
                        </div>
                        <div>
                          <strong>Members:</strong> {winery.wineClub.members}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-800 mb-3">Member Benefits</h3>
                      <ul className="space-y-1 text-sm text-slate-600">
                        {winery.wineClub.perks.map((perk, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></div>
                            {perk}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="bg-slate-800 hover:bg-slate-700">Learn More About Wine Club</Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Visit & Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 text-slate-500" />
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-sm text-slate-600">{winery.address}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-slate-500" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm text-slate-600">{winery.phone}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-3 text-slate-500" />
                  <div>
                    <div className="font-medium">Website</div>
                    <a
                      href={winery.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Region:</span>
                    <span className="font-medium">{winery.region}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Established:</span>
                    <span className="font-medium">{winery.established}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Size:</span>
                    <span className="font-medium">{winery.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Style:</span>
                    <span className="font-medium">{winery.style}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

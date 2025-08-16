"use client"

import { notFound } from "next/navigation"
import { wineClubs } from "@/data/wine-clubs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Calendar, DollarSign, Wine, Gift, ExternalLink } from "lucide-react"

interface WineClubPageProps {
  params: {
    id: string
  }
}

export default function WineClubPage({ params }: WineClubPageProps) {
  const club = wineClubs.find((c) => c.id === Number.parseInt(params.id))

  if (!club) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-slate-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-4">{club.clubName}</h1>
          <p className="text-xl text-slate-300 mb-6">{club.winery}</p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {club.members} members
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {club.frequency} shipments
            </div>
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
                <CardTitle className="text-2xl">About This Wine Club</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed mb-6">{club.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-3 flex items-center">
                      <Wine className="w-5 h-5 mr-2" />
                      Wine Varietals
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {club.varietals.map((varietal, index) => (
                        <Badge key={index} variant="secondary">
                          {varietal}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800 mb-3">Club Details</h3>
                    <div className="space-y-2 text-sm text-slate-600">
                      <div>Region: {club.region}</div>
                      <div>Established: {club.established}</div>
                      {club.featured && <Badge className="bg-amber-500 text-white">Featured Club</Badge>}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Member Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Gift className="w-6 h-6 mr-3" />
                  Member Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {club.perks.map((perk, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2"></div>
                      <span className="text-slate-700">{perk}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* How It Works */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-semibold text-slate-600">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">Join the Club</h4>
                    <p className="text-sm text-slate-600">Sign up and customize your preferences</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-semibold text-slate-600">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">Receive Shipments</h4>
                    <p className="text-sm text-slate-600">Get curated wines delivered {club.frequency.toLowerCase()}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-semibold text-slate-600">3</span>
                    </div>
                    <h4 className="font-semibold mb-2">Enjoy Benefits</h4>
                    <p className="text-sm text-slate-600">Access exclusive events and member pricing</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Pricing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-light text-slate-800 mb-2">{club.priceRange}</div>
                  <div className="text-sm text-slate-600 mb-4">per shipment</div>
                  <div className="text-sm text-slate-600 mb-6">Delivered {club.frequency.toLowerCase()}</div>
                  <Button className="w-full bg-slate-800 hover:bg-slate-700 mb-3">Join Wine Club</Button>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => window.open(club.website, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Winery
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Club Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Members:</span>
                    <span className="font-medium">{club.members}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Frequency:</span>
                    <span className="font-medium">{club.frequency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Region:</span>
                    <span className="font-medium">{club.region}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Have questions about this wine club? Contact the winery directly for more information.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Contact Winery
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

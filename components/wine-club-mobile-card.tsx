"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, DollarSign, Calendar, ExternalLink } from "lucide-react"

interface WineClub {
  id: number
  clubName: string
  winery: string
  priceRange: string
  frequency: string
  memberCount: string
  varietals: string[]
  benefits: string[]
  description: string
  website: string
}

interface WineClubMobileCardProps {
  club: WineClub
  searchTerm?: string
}

export default function WineClubMobileCard({ club, searchTerm = "" }: WineClubMobileCardProps) {
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

  const handleVisit = () => {
    const websiteUrl = club.website.startsWith("http") ? club.website : `https://${club.website}`
    window.open(websiteUrl, "_blank")
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-slate-800 mb-1">
              {highlightText(club.clubName, searchTerm)}
            </CardTitle>
            <div className="text-sm text-slate-600 mb-2">{highlightText(club.winery, searchTerm)}</div>
          </div>
          <Badge variant="secondary" className="ml-2">
            Featured
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Key Metrics */}
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

        {/* Description */}
        <p className="text-sm text-slate-600 line-clamp-2">{highlightText(club.description, searchTerm)}</p>

        {/* Varietals */}
        <div>
          <h4 className="text-sm font-medium text-slate-800 mb-2">Wine Varietals</h4>
          <div className="flex flex-wrap gap-1">
            {club.varietals.slice(0, 3).map((varietal) => (
              <Badge key={varietal} variant="outline" className="text-xs">
                {highlightText(varietal, searchTerm)}
              </Badge>
            ))}
            {club.varietals.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{club.varietals.length - 3}
              </Badge>
            )}
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h4 className="text-sm font-medium text-slate-800 mb-2">Member Benefits</h4>
          <ul className="text-xs text-slate-600 space-y-1">
            {club.benefits.slice(0, 2).map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="w-1 h-1 bg-slate-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                {highlightText(benefit, searchTerm)}
              </li>
            ))}
            {club.benefits.length > 2 && <li className="text-slate-500">+{club.benefits.length - 2} more benefits</li>}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button onClick={handleVisit} className="flex-1 bg-slate-800 hover:bg-slate-700">
            <ExternalLink className="w-3 h-3 mr-1" />
            Visit
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

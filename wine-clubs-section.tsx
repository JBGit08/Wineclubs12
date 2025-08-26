"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type WineClub = {
  wineryClub: string
  location: string
  varietals: string
  priceFreq: string
  members: string
  actions?: string
}

const wineClubs: WineClub[] = [
  {
    wineryClub: "Opus One Membership",
    location: "Oakville, Napa Valley",
    varietals: "Cabernet Sauvignon, Merlot",
    priceFreq: "$800/year",
    members: "Exclusive (Invite Only)",
    actions: ""
  },
  {
    wineryClub: "Caymus Club",
    location: "Rutherford, Napa Valley",
    varietals: "Cabernet Sauvignon, Zinfandel",
    priceFreq: "$300/year",
    members: "Open",
    actions: ""
  },
  // Add more clubs here!
]

export default function WineClubsSection() {
  return (
    <section className="py-20 px-6 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-800 mb-4">Napa Valley Wine Clubs</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Browse a comprehensive directory of wine clubs from Napa Valley wineries. Only the main/basic club for each winery is shown.
          </p>
        </div>
        <Card>
          <CardContent className="overflow-x-auto p-6">
            <table className="min-w-full bg-white border rounded-lg">
              <thead>
                <tr>
                  <th className="py-3 px-4 border-b text-left">Winery &amp; Club</th>
                  <th className="py-3 px-4 border-b text-left">Location</th>
                  <th className="py-3 px-4 border-b text-left">Varietals</th>
                  <th className="py-3 px-4 border-b text-left">Price/Freq.</th>
                  <th className="py-3 px-4 border-b text-left">Members</th>
                  <th className="py-3 px-4 border-b text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {wineClubs.map((club, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-3 px-4 border-b">{club.wineryClub}</td>
                    <td className="py-3 px-4 border-b">{club.location}</td>
                    <td className="py-3 px-4 border-b">{club.varietals}</td>
                    <td className="py-3 px-4 border-b">{club.priceFreq}</td>
                    <td className="py-3 px-4 border-b">{club.members}</td>
                    <td className="py-3 px-4 border-b">
                      {/* Placeholder for future actions (links, buttons, etc.) */}
                      {club.actions || <Button size="sm" className="bg-slate-800 hover:bg-slate-700">Details</Button>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

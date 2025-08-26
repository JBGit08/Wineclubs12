"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

type WineClub = {
  wineryClub: string
  location: string
  varietals: string
  priceFreq: string
  members: string
  actions?: string
}

export default function WineClubsSection() {
  const [wineClubs, setWineClubs] = useState<WineClub[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    console.log("Component loaded - starting data fetch...")
    
    // Start with fallback data immediately
    const fallbackData: WineClub[] = [
      {
        wineryClub: "Opus One Membership",
        location: "Oakville",
        varietals: "Cabernet Sauvignon, Merlot",
        priceFreq: "$800/year",
        members: "800 members"
      },
      {
        wineryClub: "Caymus Club", 
        location: "Rutherford",
        varietals: "Cabernet Sauvignon, Zinfandel",
        priceFreq: "$300/year",
        members: "15,000+ members"
      },
      {
        wineryClub: "Silver Oak Wine Club",
        location: "Oakville", 
        varietals: "Cabernet Sauvignon",
        priceFreq: "$280/year",
        members: "25,000+ members"
      },
      {
        wineryClub: "Stag's Leap Wine Cellars Club",
        location: "Stags Leap District",
        varietals: "Cabernet Sauvignon, Chardonnay", 
        priceFreq: "$450/year",
        members: "8,000 members"
      },
      {
        wineryClub: "Chateau Montelena Wine Club",
        location: "Calistoga",
        varietals: "Chardonnay, Cabernet Sauvignon",
        priceFreq: "$380/year", 
        members: "5,000 members"
      }
    ]
    
    setWineClubs(fallbackData)
    setLoading(false)
    
    // Try Airtable fetch
    fetchFromAirtable()
  }, [])

  const fetchFromAirtable = async () => {
    console.log("Attempting Airtable connection...")
    
    try {
      const response = await fetch(
        'https://api.airtable.com/v0/app47CT6F3Yetnnhr/Wine%20Clubs',
        {
          headers: {
            'Authorization': 'Bearer pat7xz6Iy5D11IVEH.7133fc26526abe828024673967d07439ff8aa135bbad101304e7ac43a8283e74',
            'Content-Type': 'application/json',
          },
        }
      )
      
      console.log("Response status:", response.status)
      
      if (response.ok) {
        const data = await response.json()
        console.log("Airtable data received:", data)
        
        const airtableClubs: WineClub[] = data.records.map((record: any) => ({
          wineryClub: record.fields['Winery & Club'] || '',
          location: record.fields['Location'] || '',
          varietals: record.fields['Varietals'] || '',
          priceFreq: record.fields['Price/Freq.'] || '',
          members: record.fields['Members'] || '',
        }))
        
        if (airtableClubs.length > 0) {
          setWineClubs(airtableClubs)
          setError("")
          console.log("Successfully loaded", airtableClubs.length, "clubs from Airtable")
        }
      } else {
        console.error("Airtable API error:", response.status, response.statusText)
        setError(`API Error: ${response.status}`)
      }
      
    } catch (err) {
      console.error("Fetch error:", err)
      setError("Connection failed")
    }
  }

  return (
    <section className="py-20 px-6 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-800 mb-4">Napa Valley Wine Clubs</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Browse a comprehensive directory of wine clubs from Napa Valley wineries. Only the main/basic club for each winery is shown.
          </p>
          {error && (
            <div className="mt-4 text-sm text-amber-600 bg-amber-50 p-2 rounded">
              Database connection: {error} - Showing default data
            </div>
          )}
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
                      <Button size="sm" className="bg-slate-800 hover:bg-slate-700">
                        Details
                      </Button>
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

"use client"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw, ExternalLink, AlertCircle } from "lucide-react"

type WineClub = {
  wineryClub: string
  location: string
  varietals: string
  priceFreq: string
  members: string
  website?: string
  lastUpdated?: string
  actions?: string
}

export default function WineClubsSection() {
  const [wineClubs, setWineClubs] = useState<WineClub[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastRefresh, setLastRefresh] = useState<string>("")

  // YOUR AIRTABLE SETTINGS - UPDATE THESE WITH YOUR ACTUAL VALUES
  const AIRTABLE_TOKEN = "pat7xz6Iy5D11IVEH.7133fc26526abe828024673967d07439ff8aa135bbad101304e7ac43a8283e74" // Your actual token
  const BASE_ID = "app47CT6F3Yetnnhr" // Your Base ID (already correct)
  const TABLE_NAME = "Wine Clubs" // Your table name (already correct)

  const fetchWineClubs = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE_NAME)}`,
        {
          headers: {
            'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      
      // Transform Airtable data to match your website structure
      const transformedClubs: WineClub[] = data.records.map((record: any) => ({
        wineryClub: record.fields['Winery & Club'] || '',
        location: record.fields['Location'] || '',
        varietals: record.fields['Varietals'] || '',
        priceFreq: record.fields['Price/Freq.'] || '',
        members: record.fields['Members'] || '',
        website: record.fields['Website'] || '',
        lastUpdated: record.fields['Last Updated'] || '',
        actions: record.fields['Action'] || ''
      }))

      setWineClubs(transformedClubs)
      setLastRefresh(new Date().toLocaleString())
      
    } catch (err) {
      console.error('Error fetching wine clubs:', err)
      setError('Failed to load wine clubs. Please check your connection or try again.')
      
      // Fallback to demo data if API fails
      setWineClubs([
        {
          wineryClub: "Opus One Membership",
          location: "Oakville",
          varietals: "Cabernet Sauvignon, Merlot",
          priceFreq: "$800/year",
          members: "800 members",
          website: "https://opusonewinery.com"
        },
        {
          wineryClub: "Caymus Club",
          location: "Rutherford", 
          varietals: "Cabernet Sauvignon, Zinfandel",
          priceFreq: "$300/year",
          members: "15,000+ members",
          website: "https://caymus.com"
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  // Load data when component mounts
  useEffect(() => {
    fetchWineClubs()
  }, [])

  const handleRefresh = () => {
    fetchWineClubs()
  }

  if (loading) {
    return (
      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <RefreshCw className="mx-auto h-8 w-8 animate-spin text-slate-400 mb-4" />
            <p className="text-slate-600">Loading wine clubs from database...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-6 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-800 mb-4">Napa Valley Wine Clubs</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Browse a comprehensive directory of wine clubs from Napa Valley wineries. Data is automatically synced from our live database.
          </p>
          
          {/* Connection Status */}
          <div className="mt-6 flex items-center justify-center gap-4 text-sm">
            {error ? (
              <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                <AlertCircle className="h-4 w-4" />
                Using cached data - database connection issue
              </div>
            ) : (
              <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full">
                ✓ Live database connected
              </div>
            )}
            
            {lastRefresh && (
              <span className="text-slate-500">
                Last updated: {lastRefresh}
              </span>
            )}
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleRefresh}
              disabled={loading}
              className="ml-2"
            >
              <RefreshCw className="h-3 w-3 mr-1" />
              Refresh
            </Button>
          </div>
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
                {wineClubs.length > 0 ? (
                  wineClubs.map((club, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="py-3 px-4 border-b">
                        <div className="font-medium">{club.wineryClub}</div>
                        {club.website && (
                          <div className="text-sm text-slate-500 mt-1">
                            <a 
                              href={club.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-slate-700 flex items-center gap-1"
                            >
                              <ExternalLink className="h-3 w-3" />
                              Visit Website
                            </a>
                          </div>
                        )}
                      </td>
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
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-500">
                      No wine clubs found. Check your database connection.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            
            {/* Footer Info */}
            <div className="mt-6 text-center text-sm text-slate-500">
              Showing {wineClubs.length} wine clubs from Napa Valley
              {error && (
                <div className="mt-2 text-amber-600">
                  ⚠️ Database connection issue - showing cached data
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

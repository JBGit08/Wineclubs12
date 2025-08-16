"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wine, Users, DollarSign, Star } from "lucide-react"

const wineClubCategories = [
  {
    title: "Premium Clubs",
    description: "Exclusive access to limited-production wines from renowned Napa Valley estates",
    priceRange: "$200-800",
    features: ["Limited releases", "Winemaker access", "Private events"],
    wineries: ["Opus One", "Screaming Eagle", "Harlan Estate"],
    icon: Star,
    color: "bg-amber-50 border-amber-200 text-amber-800",
  },
  {
    title: "Family Wineries",
    description: "Discover wines from family-owned estates with generations of winemaking tradition",
    priceRange: "$80-200",
    features: ["Family stories", "Traditional methods", "Personal touch"],
    wineries: ["Caymus", "Inglenook", "Charles Krug"],
    icon: Users,
    color: "bg-green-50 border-green-200 text-green-800",
  },
  {
    title: "Boutique Collections",
    description: "Small-production wines from artisanal wineries focusing on quality over quantity",
    priceRange: "$100-300",
    features: ["Small batches", "Artisanal approach", "Unique varietals"],
    wineries: ["Dalla Valle", "Bryant Family", "Colgin"],
    icon: Wine,
    color: "bg-purple-50 border-purple-200 text-purple-800",
  },
  {
    title: "Value Selections",
    description: "Quality wines at accessible prices from established Napa Valley producers",
    priceRange: "$60-150",
    features: ["Great value", "Consistent quality", "Regular releases"],
    wineries: ["Beringer", "Robert Mondavi", "Sterling"],
    icon: DollarSign,
    color: "bg-blue-50 border-blue-200 text-blue-800",
  },
]

export default function WineClubsSection() {
  return (
    <section className="py-20 px-6 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-800 mb-4">Wine Club Categories</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore different types of wine clubs from Napa Valley region wineries, each offering unique experiences and
            benefits
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {wineClubCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg mr-4 ${category.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <p className="text-sm text-slate-600">{category.priceRange} per shipment</p>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{category.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Example Wineries */}
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Featured Wineries</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.wineries.map((winery, wineryIndex) => (
                        <Badge key={wineryIndex} variant="secondary" className="text-xs">
                          {winery}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button className="w-full bg-slate-800 hover:bg-slate-700">Explore {category.title}</Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-slate-800 text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light mb-4">Ready to Find Your Perfect Wine Club?</h3>
              <p className="text-slate-300 mb-6">
                Browse our comprehensive directory of wine clubs from Napa Valley region wineries and discover the
                perfect membership for your taste and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-slate-800 hover:bg-slate-100">Browse All Wine Clubs</Button>
                <Button variant="outline" className="border-slate-300 text-white hover:bg-slate-700 bg-transparent">
                  Compare Benefits
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

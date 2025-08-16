"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wine, Users, Gift, Star, Calendar, Truck } from "lucide-react"

const benefits = [
  {
    icon: Wine,
    title: "Exclusive Wine Access",
    description: "Get first access to limited production wines and library selections not available to the public",
    highlight: "Member-only releases",
  },
  {
    icon: Users,
    title: "VIP Experiences",
    description: "Enjoy private tastings, winemaker dinners, and behind-the-scenes vineyard tours",
    highlight: "Private events",
  },
  {
    icon: Gift,
    title: "Member Pricing",
    description: "Save 15-25% on all wine purchases and receive complimentary shipping on orders",
    highlight: "Significant savings",
  },
  {
    icon: Star,
    title: "Personalized Service",
    description: "Work with wine club specialists to customize your selections based on your preferences",
    highlight: "Tailored experience",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Choose your shipment frequency and timing to match your consumption and budget",
    highlight: "Your schedule",
  },
  {
    icon: Truck,
    title: "Priority Shipping",
    description: "Receive priority processing and complimentary shipping on most wine club orders",
    highlight: "Fast delivery",
  },
]

export default function MemberBenefits() {
  return (
    <section id="member-benefits" className="py-20 px-6 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-4">Wine Club Member Benefits</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover the exclusive advantages of joining wine clubs from Napa Valley's finest wineries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <Card key={index} className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-slate-200" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">{benefit.title}</CardTitle>
                      <Badge variant="secondary" className="bg-slate-500 text-slate-200 mt-1">
                        {benefit.highlight}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-slate-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-light text-white mb-4">Ready to Join?</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Explore our directory of 300+ wine clubs from Napa Valley region wineries and find the perfect membership
              for your taste and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-slate-800 px-8 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors">
                Browse Wine Clubs
              </button>
              <button className="border border-slate-400 text-slate-200 px-8 py-3 rounded-lg font-medium hover:bg-slate-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

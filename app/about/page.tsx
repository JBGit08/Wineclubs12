import type { Metadata } from "next"
import { Compass, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Breadcrumb from "@/components/breadcrumb"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Vintner's Compass | Napa Valley Wine Club Directory",
  description: "Learn about Vintner's Compass - your trusted guide to Napa Valley wine clubs and wineries.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
          ]}
        />

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Compass className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">About Vintner's Compass</h1>
            </div>
            <Link href="/#wine-clubs">
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <ArrowLeft className="w-4 h-4" />
                Back to Wine Clubs
              </Button>
            </Link>
          </div>
          <p className="text-gray-600">Your trusted guide to discovering the finest wine clubs in Napa Valley.</p>
        </div>

        <div className="space-y-8">
          {/* Mission Statement */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                Vintner's Compass exists to simplify your journey through Napa Valley's exceptional wine club landscape.
                We provide comprehensive, unbiased information about wine clubs from renowned wineries, helping wine
                enthusiasts make informed decisions about their wine club memberships. Our goal is to connect passionate
                wine lovers with the perfect wine clubs that match their preferences, budget, and lifestyle.
              </p>
            </CardContent>
          </Card>

          {/* What Makes Us Different */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">What Makes Us Different</h2>
              <p className="text-gray-700 leading-relaxed">
                Vinter's Compass consists of a team of wine enthusiasts who live locally and are intimately
                knowledgeable about area wineries. By experience, they understand the need for a useful tool to more
                easily sort and pinpoint clubs that fit specific likes.
              </p>
            </CardContent>
          </Card>

          {/* Our Story */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Founded by wine enthusiasts who experienced firsthand the challenge of navigating Napa Valley's diverse
                wine club offerings, Vintner's Compass was born from a simple need: reliable, comprehensive information
                about wine club memberships.
              </p>
              <p className="text-gray-700 leading-relaxed">
                After spending countless hours researching individual wineries and comparing membership benefits, we
                realized that other wine lovers could benefit from a centralized, trustworthy resource. Today, we're
                proud to serve as your compass in the world of Napa Valley wine clubs.
              </p>
            </CardContent>
          </Card>

          {/* Get in Touch */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-700 mb-4">
                Have questions, suggestions, or want to share your wine club experiences? We'd love to hear from you.
              </p>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email Us</h3>
                  <a href="mailto:info@vintnerscompass.com" className="text-blue-600 hover:underline">
                    info@vintnerscompass.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Back to Wine Clubs Button */}
        <div className="mt-8 text-center">
          <Link href="/#wine-clubs">
            <Button variant="outline" className="flex items-center gap-2 mx-auto bg-transparent">
              <ArrowLeft className="w-4 h-4" />
              Back to Wine Clubs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

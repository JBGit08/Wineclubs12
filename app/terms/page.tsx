import type { Metadata } from "next"
import { Shield, Scale, FileText, AlertTriangle, Mail, MapPin, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Breadcrumb from "@/components/breadcrumb"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Terms of Service | Vintner's Compass",
  description: "Terms of Service for Vintner's Compass - Napa Valley Wine Club Directory",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Terms of Service", href: "/terms" },
          ]}
        />

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Scale className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
            </div>
            <Link href="/#wine-clubs">
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <ArrowLeft className="w-4 h-4" />
                Back to Wine Clubs
              </Button>
            </Link>
          </div>
          <p className="text-gray-600">By using Vintner's Compass wine club directory, you agree to these terms.</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: January 2024</p>
        </div>

        <div className="space-y-6">
          {/* Introduction & Acceptance */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <FileText className="w-5 h-5 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">Agreement & Acceptance</h2>
              </div>
              <p className="text-gray-700">
                These terms govern your use of our Napa Valley wine club directory. By accessing this website, you
                acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our{" "}
                <a href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </CardContent>
          </Card>

          {/* Website Use & Intellectual Property */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-5 h-5 text-green-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">Website Use & Content Rights</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Permitted Use</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Information research and personal reference</li>
                    <li>• No user accounts required</li>
                  </ul>
                  <h3 className="font-semibold text-gray-900 mb-2 mt-4">Prohibited Activities</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Automated data scraping</li>
                    <li>• Commercial use without permission</li>
                    <li>• Disrupting website functionality</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Content Ownership</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Website design and compilation are copyrighted</li>
                    <li>• Winery information belongs to respective owners</li>
                    <li>• No reproduction without permission</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legal Disclaimers & Limitations */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">Disclaimers & Legal Terms</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Warranties & Liability</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    This website is provided "as is" without warranties. We do not guarantee accuracy or completeness of
                    information and are not liable for any damages arising from your use of this site.
                  </p>
                  <h3 className="font-semibold text-gray-900 mb-2">Indemnification</h3>
                  <p className="text-sm text-gray-700">
                    You agree to hold us harmless from any claims arising from your use of this website.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Governing Law</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    These terms are governed by California law. Disputes will be resolved in California courts.
                  </p>
                  <h3 className="font-semibold text-gray-900 mb-2">Changes to Terms</h3>
                  <p className="text-sm text-gray-700">
                    We may update these terms periodically. Continued use constitutes acceptance of revised terms.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Mail className="w-5 h-5 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
              </div>
              <p className="text-gray-700 mb-4">Questions about these Terms of Service? Contact us:</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-gray-500 mr-2" />
                  <a href="mailto:info@vintnerscompass.com" className="text-blue-600 hover:underline">
                    info@vintnerscompass.com
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-gray-600">Vintner's Compass, 952 School Street, Napa, CA 94559</span>
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

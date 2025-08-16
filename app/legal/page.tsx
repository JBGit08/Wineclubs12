"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, FileText, Eye, Mail, AlertTriangle, Info, Clock, Scale, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Breadcrumb from "@/components/breadcrumb"
import BackToTop from "@/components/back-to-top"

export default function LegalPage() {
  const currentYear = new Date().getFullYear()

  const breadcrumbItems = [{ label: "Legal Information", current: true }]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="min-h-screen bg-slate-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light text-slate-800 mb-4">Legal Information & Disclaimers</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Important legal notices, terms, and disclaimers governing the use of Vintner's Compass
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link href="/">
                <Button variant="outline" className="bg-white hover:bg-slate-50 border-slate-300">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Wine Clubs
                </Button>
              </Link>
              <Button
                variant="ghost"
                onClick={() => window.history.back()}
                className="text-slate-600 hover:text-slate-800 hover:bg-slate-100"
              >
                ← Previous Page
              </Button>
            </div>
          </div>

          {/* Independence Notice - Prominent */}
          <Card className="bg-amber-50 border-amber-200 mb-8" role="alert" aria-labelledby="independence-notice">
            <CardContent className="p-6">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-amber-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h2 id="independence-notice" className="text-xl font-semibold text-amber-800 mb-3">
                    Independence Notice
                  </h2>
                  <div className="text-amber-700 space-y-2">
                    <p className="font-medium">
                      Vintner's Compass is an independent wine club directory and information service.
                    </p>
                    <p>
                      We are <strong>not affiliated with, endorsed by, or officially connected to</strong> Napa Valley
                      Vintners, individual wineries, or any official Napa Valley organizations or appellations.
                    </p>
                    <p>
                      Our inclusion of wineries and wine clubs does not constitute endorsement by any official wine
                      industry organizations.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Legal Sections */}
          <div className="grid gap-8">
            {/* Information Accuracy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="w-5 h-5 mr-2" />
                  Information Accuracy & Sources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Informational Purpose</h4>
                  <p className="text-slate-600">
                    All information is provided for informational purposes only and does not guarantee the origin,
                    quality, or authenticity of any wines or wine club offerings.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Data Sources</h4>
                  <p className="text-slate-600">
                    Information is compiled only from publicly available sources. We are not responsible for the
                    accuracy or completeness of this information.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Subject to Change</h4>
                  <p className="text-slate-600">
                    Wine club details, pricing, availability, and membership requirements are subject to change without
                    notice. Always verify current information directly with wineries.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Geographic References */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Geographic References & Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Descriptive Use</h4>
                  <p className="text-slate-600">
                    References to "Napa Valley" and other geographic terms are used descriptively to indicate the
                    location of wineries and do not imply official endorsement or certification.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Verification Required</h4>
                  <p className="text-slate-600">
                    Please contact wineries directly to confirm current offerings, membership availability, wine
                    origins, and appellation designations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Independent Service</h4>
                  <p className="text-slate-600">
                    This directory operates independently of any regional wine organizations, appellations, or
                    certification bodies.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Terms of Service */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Terms of Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Acceptance of Terms</h4>
                  <p className="text-slate-600">
                    By using this website, you agree to these terms. This service is provided for informational purposes
                    only.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Governing Law</h4>
                  <p className="text-slate-600">
                    These terms are governed by California state law. Disputes will be resolved in Napa County courts.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Service Availability</h4>
                  <p className="text-slate-600">
                    We may modify or discontinue services at any time without notice. We reserve the right to update
                    these terms.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Privacy & Data Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Privacy & Your Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Data Collection</h4>
                  <p className="text-slate-600">
                    We collect contact information and usage data to improve our services. We do not sell personal
                    information to third parties.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Your Rights</h4>
                  <p className="text-slate-600">
                    You have the right to access, correct, or delete your data. California residents have additional
                    CCPA rights.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Cookies</h4>
                  <p className="text-slate-600">
                    We use cookies to enhance your experience. You can control cookie settings in your browser.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="w-5 h-5 mr-2" />
                  Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">No Warranties</h4>
                  <p className="text-slate-600">
                    This website is provided "as is" without warranties of any kind. We don't guarantee accuracy,
                    completeness, or availability.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Liability Limit</h4>
                  <p className="text-slate-600">
                    We're not responsible for any damages from using this website, even if we knew problems were
                    possible. Our liability is limited to the maximum extent permitted by law.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Third-Party Links</h4>
                  <p className="text-slate-600">
                    We're not responsible for external websites' content, practices, or availability.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Wine Industry Specific */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Wine Industry Disclaimers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Age Verification</h4>
                  <p className="text-slate-600">
                    You must be 21 years or older to use this website. By continuing, you confirm that you meet the
                    legal drinking age in your location.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Shipping Restrictions</h4>
                  <p className="text-slate-600">
                    Wine shipping laws vary by location. Ensure compliance with local regulations before purchasing.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Responsible Consumption</h4>
                  <p className="text-slate-600">
                    Please drink responsibly. For help with alcohol-related problems, visit{" "}
                    <a
                      href="https://www.samhsa.gov"
                      className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SAMHSA.gov
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <Card className="mt-8 bg-slate-100">
            <CardHeader>
              <CardTitle>Legal Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <h4 className="font-semibold text-slate-800 mb-3">For Legal Inquiries</h4>
                <div className="flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a
                    href="mailto:info@vintnerscompass.com"
                    className="text-blue-600 hover:text-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  >
                    info@vintnerscompass.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Last Updated */}
          <div className="mt-8 text-center text-sm text-slate-500">
            Last updated: {new Date().toLocaleDateString()} | © {currentYear} Vintner's Compass. All rights reserved.
          </div>
        </div>
      </div>
      <BackToTop />
    </>
  )
}

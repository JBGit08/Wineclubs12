"use client"

import { AlertTriangle, Shield, Info } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function LegalDisclaimer() {
  return (
    <section className="py-12 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-slate-600 mr-3" />
                <h2 className="text-2xl font-light text-slate-800">Legal Information & Disclaimers</h2>
              </div>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Important information about this directory and the use of geographic terms
              </p>
            </div>

            <div className="space-y-8">
              {/* Independence Notice */}
              <div className="flex items-start">
                <Info className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Independent Directory</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    This website is an independent directory and is not affiliated with, endorsed by, or sponsored by
                    any winery, wine club, or organization herein.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    All information is compiled from publicly available sources and presented for informational purposes
                    only. We do not receive compensation from wineries for listings or recommendations.
                  </p>
                </div>
              </div>

              {/* Geographic Terms */}
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-amber-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Geographic References</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    References to "Napa Valley" throughout this website refer to wineries that are geographically
                    located within the Napa Valley region of California. This includes various American Viticultural
                    Areas (AVAs) within the broader Napa Valley region such as Oakville, Rutherford, St. Helena,
                    Calistoga, Yountville, and others.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    We use these geographic terms purely for informational and organizational purposes to help users
                    understand the location of wineries and their wine clubs. All geographic references are based on
                    publicly available information about winery locations.
                  </p>
                </div>
              </div>

              {/* Information Accuracy */}
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Information Accuracy & Currency</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    While we strive to provide accurate and up-to-date information, wine club details, pricing,
                    availability, and terms are subject to change without notice. Information presented may not reflect
                    the most current offerings from individual wineries.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    <strong>
                      We strongly recommend verifying all details directly with wineries before making any commitments
                      or purchases.
                    </strong>{" "}
                    This includes but is not limited to pricing, availability, membership terms, shipping policies, and
                    wine allocations.
                  </p>
                </div>
              </div>

              {/* User Responsibilities */}
              <div className="bg-slate-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">User Responsibilities</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2"></div>
                    Verify all information directly with wineries before making purchases or commitments
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2"></div>
                    Understand that wine club terms, pricing, and availability may change
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2"></div>
                    Comply with all applicable laws regarding alcohol purchases and consumption
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-2"></div>
                    Use this directory for informational purposes only
                  </li>
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div className="text-center">
                <p className="text-sm text-slate-500 leading-relaxed">
                  This directory is provided "as is" without warranties of any kind. We disclaim all liability for
                  decisions made based on information provided herein. Users assume all responsibility for their wine
                  club selections and purchases.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-8 pt-8 border-t border-slate-200 text-center">
              <p className="text-slate-600 mb-4">Questions about this disclaimer or our directory?</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline font-medium">
                Contact Us
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

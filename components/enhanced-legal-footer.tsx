"use client"

import Link from "next/link"
import { Shield, AlertTriangle } from "lucide-react"

export default function EnhancedLegalFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Vintner's Compass</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Your comprehensive guide to wine clubs from wineries located in the Napa Valley region.
              </p>
              <div className="flex items-center text-xs text-slate-400">
                <Shield className="w-3 h-3 mr-1" />
                Independent Directory
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#wine-clubs" className="text-slate-300 hover:text-white">
                    Wine Clubs
                  </Link>
                </li>
                <li>
                  <Link href="#wineries" className="text-slate-300 hover:text-white">
                    Wineries
                  </Link>
                </li>
                <li>
                  <Link href="#regions" className="text-slate-300 hover:text-white">
                    Regions
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-slate-300 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-slate-300 hover:text-white"
                    onClick={() => {
                      // Ensure smooth scroll to top when navigating
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }, 100)
                    }}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/legal" className="text-slate-300 hover:text-white">
                    Legal Information
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-slate-300 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-slate-300 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="text-sm text-slate-300 space-y-2">
                <p>Email: info@vintnerscompass.com</p>
                <p>Napa Valley, California</p>
              </div>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="border-t border-slate-700 mt-8 pt-6">
            <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <AlertTriangle className="w-4 h-4 mr-2 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-slate-200">Disclaimer:</strong> This website is an independent directory and
                  is not affiliated with, endorsed by, or sponsored by any winery, wine club, or organization mentioned.
                  Information is compiled from publicly available sources. Please verify all details directly with
                  wineries before making any commitments.
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
              <p>&copy; 2024 Vintner's Compass Directory. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="/legal" className="hover:text-white">
                  Legal
                </Link>
                <Link href="/privacy" className="hover:text-white">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-white">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

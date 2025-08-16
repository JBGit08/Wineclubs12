"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, Shield, FileText, Eye, Mail } from "lucide-react"
import Link from "next/link"

export default function LegalFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Legal Content */}
        <Card className="bg-slate-800 border-slate-700 shadow-xl">
          <CardContent className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-light text-white mb-2">Legal Information & Disclaimers</h3>
              <p className="text-slate-400">Important legal notices and terms governing the use of Vintner's Compass</p>
            </div>

            {/* Legal Sections Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {/* Copyright Notice */}
              <div className="space-y-3">
                <div className="flex items-center text-white mb-3">
                  <Shield className="w-5 h-5 mr-2" />
                  <h4 className="font-semibold">Copyright Notice</h4>
                </div>
                <div className="text-sm text-slate-300 space-y-2">
                  <p>© {currentYear} Vintner's Compass. All rights reserved.</p>
                  <p>
                    All content, including but not limited to text, graphics, logos, images, and software, is the
                    property of Vintner's Compass or its content suppliers and is protected by United States and
                    international copyright laws.
                  </p>
                </div>
              </div>

              {/* Terms of Service */}
              <div className="space-y-3">
                <div className="flex items-center text-white mb-3">
                  <FileText className="w-5 h-5 mr-2" />
                  <h4 className="font-semibold">Terms of Service</h4>
                </div>
                <div className="text-sm text-slate-300 space-y-2">
                  <p>
                    By using this website, you agree to our terms and conditions. This service is provided for
                    informational purposes only.
                  </p>
                  <a
                    href="/terms-of-service"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Full Terms of Service
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>

              {/* Privacy Policy */}
              <div className="space-y-3">
                <div className="flex items-center text-white mb-3">
                  <Eye className="w-5 h-5 mr-2" />
                  <h4 className="font-semibold">Privacy Policy</h4>
                </div>
                <div className="text-sm text-slate-300 space-y-2">
                  <p>
                    We respect your privacy and are committed to protecting your personal information. Our privacy
                    policy explains how we collect, use, and safeguard your data.
                  </p>
                  <a
                    href="/privacy-policy"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Read Privacy Policy
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>

              {/* Additional Legal Information */}
              <div className="space-y-6">
                {/* Disclaimers */}
                <div>
                  <h4 className="font-semibold text-white mb-3">Important Disclaimers</h4>
                  <div className="text-sm text-slate-300 space-y-3">
                    <div>
                      <strong className="text-slate-200">Wine Club Information:</strong> All wine club details, pricing,
                      and availability are subject to change without notice. Please contact wineries directly to confirm
                      current offerings and membership availability.
                    </div>
                    <div>
                      <strong className="text-slate-200">Third-Party Links:</strong> This website contains links to
                      third-party websites. We are not responsible for the content, privacy policies, or practices of
                      these external sites.
                    </div>
                    <div>
                      <strong className="text-slate-200">Age Restriction:</strong> You must be 21 years or older to
                      access wine-related content and services. By using this site, you confirm that you meet the legal
                      drinking age requirements.
                    </div>
                    <div>
                      <strong className="text-slate-200">Accuracy of Information:</strong> While we strive to provide
                      accurate and up-to-date information, we make no warranties about the completeness, reliability, or
                      accuracy of the information provided.
                    </div>
                  </div>
                </div>

                {/* Liability Limitation */}
                <div>
                  <h4 className="font-semibold text-white mb-3">Limitation of Liability</h4>
                  <p className="text-sm text-slate-300">
                    Vintner's Compass shall not be liable for any direct, indirect, incidental, special, or
                    consequential damages resulting from the use or inability to use this service, even if we have been
                    advised of the possibility of such damages. Your use of this website is at your own risk.
                  </p>
                </div>

                {/* Intellectual Property */}
                <div>
                  <h4 className="font-semibold text-white mb-3">Intellectual Property Rights</h4>
                  <p className="text-sm text-slate-300">
                    All trademarks, service marks, and trade names used on this site are the property of their
                    respective owners. The Vintner's Compass name and logo are trademarks of Vintner's Compass.
                    Unauthorized use is prohibited.
                  </p>
                </div>

                {/* Data Collection Notice */}
                <div>
                  <h4 className="font-semibold text-white mb-3">Data Collection & Cookies</h4>
                  <p className="text-sm text-slate-300">
                    This website may use cookies and similar technologies to enhance user experience and analyze website
                    traffic. By continuing to use this site, you consent to our use of cookies in accordance with our
                    Privacy Policy.
                  </p>
                </div>
              </div>

              <Separator className="bg-slate-700 my-8" />

              {/* Contact Information for Legal Matters */}
              <div className="bg-slate-700 rounded-lg p-6">
                <h4 className="font-semibold text-white mb-4">Legal Contact Information</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                  <div>
                    <p className="mb-2">
                      <strong className="text-slate-200">For legal inquiries or concerns:</strong>
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        <a
                          href="mailto:legal@vintnerscompass.com"
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          legal@vintnerscompass.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="mb-2">
                      <strong className="text-slate-200">Mailing Address:</strong>
                    </p>
                    <address className="not-italic text-slate-300">
                      Vintner's Compass Legal Department
                      <br />
                      1234 Napa Valley Way
                      <br />
                      Napa, CA 94558
                      <br />
                      United States
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="mt-8 pt-6 border-t border-slate-700">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-sm text-slate-400">
                  © {currentYear} Vintner's Compass. All rights reserved. | Last updated:{" "}
                  {new Date().toLocaleDateString()}
                </div>
                <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
                  <a href="/terms" className="text-slate-400 hover:text-white transition-colors">
                    Terms
                  </a>
                  <a href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                    Privacy
                  </a>
                  <a href="/cookies" className="text-slate-400 hover:text-white transition-colors">
                    Cookies
                  </a>
                  <a href="/accessibility" className="text-slate-400 hover:text-white transition-colors">
                    Accessibility
                  </a>
                  <a href="/contact" className="text-slate-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </div>
              </div>
            </div>

            {/* Compliance Badges (Optional) */}
            <div className="mt-6 text-center">
              <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center">
                  <Shield className="w-3 h-3 mr-1" />
                  SSL Secured
                </span>
                <span>•</span>
                <span>GDPR Compliant</span>
                <span>•</span>
                <span>CCPA Compliant</span>
                <span>•</span>
                <span>21+ Only</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Links and Resources */}
        <div className="grid md:grid-cols-4 gap-8 mt-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Napa Wine Clubs</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Your comprehensive guide to wine clubs from wineries located in the Napa Valley region.
            </p>
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
                <Link href="/about" className="text-slate-300 hover:text-white">
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

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; 2024 Napa Wine Clubs Directory. All rights reserved.</p>
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
    </footer>
  )
}

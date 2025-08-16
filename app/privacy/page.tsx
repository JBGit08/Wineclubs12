"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Database, Lock, Mail, ArrowLeft, AlertTriangle, CheckCircle, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Breadcrumb from "@/components/breadcrumb"
import BackToTop from "@/components/back-to-top"

export default function PrivacyPage() {
  const currentYear = new Date().getFullYear()
  const lastUpdated = new Date().toLocaleDateString()

  const breadcrumbItems = [{ label: "Privacy Policy", current: true }]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="min-h-screen bg-slate-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-light text-slate-800 mb-4">Privacy Policy</h1>
            <p className="text-lg text-slate-600">How we handle your personal information</p>
            <div className="mt-4">
              <Link href="/">
                <Button variant="outline" className="bg-white hover:bg-slate-50 border-slate-300">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Wine Clubs
                </Button>
              </Link>
            </div>
          </div>

          {/* Last Updated */}
          <Card className="bg-blue-50 border-blue-200 mb-6">
            <CardContent className="p-4">
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-blue-600 mr-2" />
                <p className="text-blue-800 text-sm">Last Updated: {lastUpdated}</p>
              </div>
            </CardContent>
          </Card>

          {/* Overview */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Privacy Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                We protect your privacy when you use our wine club directory. By using our website, you agree to this
                policy.
              </p>
            </CardContent>
          </Card>

          {/* What We Collect */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="w-5 h-5 mr-2" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">You Provide</h4>
                  <ul className="space-y-1 text-slate-600 text-sm">
                    <li>• Name and email when contacting us</li>
                    <li>• Messages and inquiries</li>
                    <li>• Wine preferences</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Automatically Collected</h4>
                  <ul className="space-y-1 text-slate-600 text-sm">
                    <li>• Website usage and navigation</li>
                    <li>• Device and browser information</li>
                    <li>• Cookies for functionality and analytics</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use It */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-2 text-slate-600 text-sm">
                <li>• Provide directory services</li>
                <li>• Respond to your inquiries</li>
                <li>• Improve website performance</li>
                <li>• Ensure security and prevent fraud</li>
                <li>• Customize your experience</li>
                <li>• Comply with legal requirements</li>
              </ul>
            </CardContent>
          </Card>

          {/* Sharing & Your Rights */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Information Sharing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-green-50 border border-green-200 rounded p-3 mb-3">
                  <p className="text-green-800 text-sm font-medium">We do not sell your information.</p>
                </div>
                <p className="text-slate-600 text-sm mb-2">We only share when:</p>
                <ul className="space-y-1 text-slate-600 text-sm">
                  <li>• Required by law</li>
                  <li>• With trusted service providers</li>
                  <li>• For business transfers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Your Rights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-slate-600 text-sm">
                  <li>• Access your data</li>
                  <li>• Correct inaccurate information</li>
                  <li>• Request data deletion</li>
                  <li>• Control cookie settings</li>
                  <li>• Opt-out of communications</li>
                </ul>
                <p className="text-blue-700 text-xs mt-3">CA & EU residents have additional rights under CCPA/GDPR.</p>
              </CardContent>
            </Card>
          </div>

          {/* Security & Additional Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-sm">
                  <Lock className="w-4 h-4 mr-2" />
                  Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-slate-600 text-xs">
                  <li>• SSL encryption</li>
                  <li>• Secure servers</li>
                  <li>• Limited data access</li>
                  <li>• Regular security updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-sm">
                  <Database className="w-4 h-4 mr-2" />
                  Data Retention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-slate-600 text-xs">
                  <li>• Contact info: 3 years</li>
                  <li>• Usage data: 2 years</li>
                  <li>• Cookies: varies</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-sm">
                  <Shield className="w-4 h-4 mr-2" />
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-slate-600 text-xs">
                  <li>• Not for users under 21</li>
                  <li>• US-based operations</li>
                  <li>• Policy may be updated</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact */}
          <Card className="bg-slate-800 text-white">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Mail className="w-5 h-5 mr-2" />
                Privacy Questions?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center mb-2">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href="mailto:info@vintnerscompass.com" className="text-amber-400 hover:text-amber-300">
                      info@vintnerscompass.com
                    </a>
                  </div>
                  <p className="text-slate-400 text-xs">We respond within 30 days</p>
                </div>
                <div>
                  <address className="not-italic text-slate-300 text-xs">
                    Vintner's Compass Privacy Officer
                    <br />
                    952 School Street
                    <br />
                    Napa, CA 94559
                  </address>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="mt-6 text-center text-xs text-slate-500">
            © {currentYear} Vintner's Compass. All rights reserved.
          </div>
        </div>
      </div>
      <BackToTop />
    </>
  )
}

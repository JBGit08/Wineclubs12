"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send } from "lucide-react"
import { submitContactForm } from "@/actions/contact-action"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setMessage("")

    try {
      const result = await submitContactForm(formData)
      setMessage(result.message)

      if (result.success) {
        // Reset form on success
        const form = document.getElementById("contact-form") as HTMLFormElement
        if (form) {
          form.reset()
        }
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-800 mb-4">Get in Touch</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Have questions about wine clubs or need help finding the perfect membership? We're here to help you navigate
            your wine journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-medium text-slate-800">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form id="contact-form" action={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Name *
                    </label>
                    <Input id="name" name="name" type="text" required className="w-full" placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className="w-full"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full"
                    placeholder="Tell us more about your wine club interests or questions..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {message && (
                  <div
                    className={`text-center p-3 rounded-lg ${
                      message.includes("success") ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                    }`}
                  >
                    {message}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-medium text-slate-800">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-slate-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                    <p className="text-slate-600">info@vintnerscompass.com</p>
                    <p className="text-sm text-slate-500">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-slate-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Location</h3>
                    <p className="text-slate-600">Napa Valley, California</p>
                    <p className="text-sm text-slate-500">Serving wine enthusiasts nationwide</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

"use server"

import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function submitContactForm(formData: FormData) {
  try {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Validate the data
    const validatedData = contactSchema.parse(data)

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real application, you would:
    // 1. Send email notification
    // 2. Store in database
    // 3. Send confirmation email

    console.log("Contact form submission:", validatedData)

    return {
      success: true,
      message: "Thank you for your message! We will get back to you within 24 hours.",
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0].message,
      }
    }

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}

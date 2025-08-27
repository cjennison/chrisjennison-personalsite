import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const isTestMode = process.env.CONTACT_FORM_TEST_MODE === "true";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, budget, timeline, message } =
      body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 },
      );
    }

    // Prepare email content
    const emailContent = {
      from: isTestMode
        ? "Contact Form Test <test@resend.dev>"
        : "Contact Form <contact@chrisjennison.com>",
      to: isTestMode
        ? [process.env.TEST_EMAIL_RECIPIENT || "test@example.com"]
        : ["cjennison92@gmail.com"],
      subject: `${isTestMode ? "[TEST] " : ""}New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          ${
            isTestMode
              ? `
            <div style="background: #FEF3C7; border: 2px solid #F59E0B; padding: 15px; margin-bottom: 20px; border-radius: 8px;">
              <h3 style="color: #92400E; margin: 0;">🧪 TEST MODE EMAIL</h3>
              <p style="color: #92400E; margin: 5px 0 0 0;">This is a test submission from your contact form</p>
            </div>
          `
              : ""
          }
          <h2 style="color: #3B82F6; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="background: #F8FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1F2937;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          </div>

          <div style="background: #F0F9FF; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1F2937;">Project Details</h3>
            ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ""}
            ${budget ? `<p><strong>Budget Range:</strong> ${budget}</p>` : ""}
            ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ""}
          </div>

          <div style="background: #F9FAFB; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1F2937;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E5E7EB; color: #6B7280; font-size: 14px;">
            <p>This message was sent via the contact form on chrisjennison.com</p>
            <p>Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
      replyTo: email, // This allows you to reply directly to the sender
    };

    // In test mode, log the email instead of sending
    if (isTestMode) {
      console.log("🧪 TEST MODE - Email would be sent:");
      console.log("From:", emailContent.from);
      console.log("To:", emailContent.to);
      console.log("Subject:", emailContent.subject);
      console.log("Form Data:", {
        name,
        email,
        company,
        projectType,
        budget,
        timeline,
        message,
      });

      return NextResponse.json(
        {
          message: "TEST MODE: Form submission received and logged",
          testMode: true,
          formData: {
            name,
            email,
            company,
            projectType,
            budget,
            timeline,
            message,
          },
        },
        { status: 200 },
      );
    }

    // Send email using Resend in production mode
    const { data, error } = await resend.emails.send(emailContent);

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully", id: data?.id },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

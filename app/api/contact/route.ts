import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate input fields
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_RECEIVER || "sixthwords@gmail.com";

    // SMTP configuration
    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    const emailSubject = `New Site Request: ${service} - ${name}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #0F6CBD; border-bottom: 2px solid #0F6CBD; padding-bottom: 10px; margin-top: 0;">New Technical Audit Request</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #4B5563; width: 150px;">Client Name:</td>
            <td style="padding: 10px 0; color: #111827;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #4B5563;">Email Address:</td>
            <td style="padding: 10px 0; color: #111827;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #4B5563;">Phone Number:</td>
            <td style="padding: 10px 0; color: #111827;"><a href="tel:${phone}">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #4B5563;">Service Division:</td>
            <td style="padding: 10px 0; color: #111827; font-weight: bold;">${service}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #F8F9FB; border-radius: 8px; border-left: 4px solid #0F6CBD;">
          <h3 style="margin-top: 0; color: #111827; font-size: 14px; font-weight: bold;">Project Description</h3>
          <p style="margin-bottom: 0; color: #374151; font-size: 13px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        
        <p style="margin-top: 30px; font-size: 11px; color: #9CA3AF; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 15px;">
          Submitted from Sixth Sense Technologies Website Contact Portal.
        </p>
      </div>
    `;

    // Check if SMTP is configured
    if (!host || !user || !pass) {
      console.log("\n========================================================");
      console.log("⚠️ CONTACT FORM SUBMISSION RECEIVED (SMTP NOT CONFIGURRED) ⚠️");
      console.log("To send actual emails, please add these in .env.local:");
      console.log("SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS");
      console.log("--------------------------------------------------------");
      console.log(`To: ${recipientEmail}`);
      console.log(`From Client: ${name} (${email})`);
      console.log(`Phone: ${phone}`);
      console.log(`Service: ${service}`);
      console.log(`Message: ${message}`);
      console.log("========================================================\n");

      // For development / local environment without configured SMTP, return success message
      return NextResponse.json({
        success: true,
        message: "Request logged (Dev Mock Mode). SMTP is not configured.",
      });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: host,
      port: port,
      secure: port === 465, // true for 465, false for other ports
      auth: {
        user: user,
        pass: pass,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"${name} (via Website)" <${process.env.SMTP_FROM_EMAIL || user}>`,
      to: recipientEmail,
      replyTo: email,
      subject: emailSubject,
      html: emailHtml,
    });

    console.log(`Form submission sent successfully to ${recipientEmail} from ${email}`);
    
    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error in contact form submission API:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

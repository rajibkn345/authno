import { NextRequest, NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email, to, subject, message } = await request.json();

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email credentials');
      return NextResponse.json(
        { success: false, message: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Create transporter using Gmail SMTP
const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS, }, });


    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to || 'andy@authno.com',
      subject: subject || 'New Subscription from Authno Website',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d2d2d;">New Subscription from Authno Website</h2>
          <p><strong>Subscriber Email:</strong> ${email}</p>
          <p><strong>Subscription Date:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Message:</strong> ${message}</p>
          
          <hr style="margin: 20px 0; border: 1px solid #e0e0e0;">
          
          <p style="color: #666; font-size: 14px;">
            This email was sent from the Authno website subscription form.
          </p>
        </div>
      `,
    };

    // Send email
    console.log('Attempting to send email...');
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);

    return NextResponse.json({ success: true, message: 'Email sent successfully',response:result, messageId:result.messageId });
  } catch (error: unknown) {
    console.error('Email sending error:', error);

    let errorMessage = 'Unknown error';
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      { success: false, message: `Failed to send email: ${errorMessage}` },
      { status: 500 }
    );
  }
}

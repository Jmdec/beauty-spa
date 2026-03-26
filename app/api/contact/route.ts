import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, phone, subject, message } = await req.json()

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Hi Beauty SPA" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `[New Inquiry] ${subject}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #fdf8f5; border-radius: 12px; overflow: hidden; border: 1px solid #e4cfc4;">

          <!-- HEADER -->
          <div style="background: linear-gradient(135deg, #3a1f14 0%, #6b3325 100%); padding: 36px 40px; text-align: center;">
            <p style="color: #e8c18e; font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; margin: 0 0 8px;">Hi Beauty SPA</p>
            <h1 style="color: #ffffff; font-size: 24px; margin: 0; font-weight: normal; letter-spacing: 0.05em;">New Booking Inquiry</h1>
            <div style="width: 40px; height: 1px; background: #e8c18e; margin: 16px auto 0;"></div>
          </div>

          <!-- BODY -->
          <div style="padding: 36px 40px;">
            <p style="color: #7a5548; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 20px;">Client Details</p>

            <!-- NAME -->
            <div style="display: flex; margin-bottom: 8px;">
              <div style="background: #3a1f14; color: #e8c18e; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; padding: 10px 16px; width: 90px; flex-shrink: 0; border-radius: 8px 0 0 8px; display: flex; align-items: center;">
                Name
              </div>
              <div style="background: #ffffff; color: #3a1f14; font-size: 14px; padding: 10px 16px; flex: 1; border: 1px solid #e4cfc4; border-left: none; border-radius: 0 8px 8px 0;">
                ${name}
              </div>
            </div>

            <!-- PHONE -->
            <div style="display: flex; margin-bottom: 8px;">
              <div style="background: #3a1f14; color: #e8c18e; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; padding: 10px 16px; width: 90px; flex-shrink: 0; border-radius: 8px 0 0 8px; display: flex; align-items: center;">
                Phone
              </div>
              <div style="background: #ffffff; color: #3a1f14; font-size: 14px; padding: 10px 16px; flex: 1; border: 1px solid #e4cfc4; border-left: none; border-radius: 0 8px 8px 0;">
                ${phone}
              </div>
            </div>

            <!-- SUBJECT -->
            <div style="display: flex; margin-bottom: 8px;">
              <div style="background: #3a1f14; color: #e8c18e; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; padding: 10px 16px; width: 90px; flex-shrink: 0; border-radius: 8px 0 0 8px; display: flex; align-items: center;">
                Subject
              </div>
              <div style="background: #ffffff; color: #3a1f14; font-size: 14px; padding: 10px 16px; flex: 1; border: 1px solid #e4cfc4; border-left: none; border-radius: 0 8px 8px 0;">
                ${subject}
              </div>
            </div>

            <!-- MESSAGE -->
            <div style="display: flex; margin-bottom: 8px;">
              <div style="background: #3a1f14; color: #e8c18e; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; padding: 10px 16px; width: 90px; flex-shrink: 0; border-radius: 8px 0 0 8px; align-self: flex-start;">
                Message
              </div>
              <div style="background: #ffffff; color: #3a1f14; font-size: 14px; padding: 10px 16px; flex: 1; border: 1px solid #e4cfc4; border-left: none; border-radius: 0 8px 8px 0; white-space: pre-wrap; line-height: 1.7;">
                ${message}
              </div>
            </div>

          </div>

          <!-- DIVIDER -->
          <div style="margin: 0 40px; height: 1px; background: #e4cfc4;"></div>

          <!-- FOOTER -->
          <div style="padding: 24px 40px; text-align: center;">
            <p style="color: #e8c18e; font-size: 13px; letter-spacing: 0.1em; margin: 0 0 4px;">✦ Hi Beauty SPA ✦</p>
            <p style="color: #a87060; font-size: 11px; margin: 0;">Antel Spa Residences, Makati &nbsp;·&nbsp; 0968 450 4504</p>
            <p style="color: #c9a88a; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; margin: 12px 0 0;">This message was sent via the contact form</p>
          </div>

        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
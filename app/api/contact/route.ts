import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_SECRET,
            },
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
            html: `
                <div style="font-family: monospace; background: #09090b; color: #e4e4e7; padding: 32px; border-radius: 12px; max-width: 100%;">
                <div style="border-bottom: 1px solid #27272a; padding-bottom: 16px; margin-bottom: 24px;">
                    <p style="color: #f97316; font-size: 11px; letter-spacing: 0.1em; margin: 0 0 6px;">INCOMING TRANSMISSION</p>
                    <h2 style="margin: 0; font-size: 20px; color: #ffffff;">New Contact Message</h2>
                </div>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr><td style="padding: 8px 0; color: #71717a; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; width: 90px;">From</td><td style="padding: 8px 0; color: #f4f4f5;">${name}</td></tr>
                    <tr><td style="padding: 8px 0; color: #71717a; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;">Email</td><td style="padding: 8px 0; color: #f97316;">${email}</td></tr>
                    ${subject ? `<tr><td style="padding: 8px 0; color: #71717a; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;">Subject</td><td style="padding: 8px 0; color: #f4f4f5;">${subject}</td></tr>` : ''}
                </table>
                <div style="margin-top: 24px; padding: 20px; background: #18181b; border-radius: 8px; border: 1px solid #27272a;">
                    <p style="color: #71717a; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 10px;">Message</p>
                    <p style="color: #e4e4e7; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
                </div>
                <p style="margin-top: 24px; color: #3f3f46; font-size: 10px;">Sent via portfolio contact form</p>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Mail error:', err);
        return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
    }
}
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message, subject } = await req.json();
        console.log(name, email, message);

        // create transporter (using Gmail example)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL,
                pass: process.env.GMAIL_PASS,
            },
        });

        // send mail
        await transporter.sendMail({
            from: email,
            to: process.env.GMAIL,
            replyTo: email,
            subject: `Portfolio Contact: ${name}`,
            text:message
        });

        return NextResponse.json({ status: true, message: "Mail sent successfully" });
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json({ status: false, message: "Mail sent failed" }, { status: 500 });
    }
}

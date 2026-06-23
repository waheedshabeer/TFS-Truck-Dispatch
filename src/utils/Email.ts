import { QuotePayload } from "@/types/Object";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export const sendEmail = async (payload: QuotePayload) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      businessName,
      permissionToText,
      additionalInfo,
    } = payload;

    const fromUser = process.env.NEXT_PUBLIC_FROM_USER || "";
    const fromEmail = process.env.NEXT_PUBLIC_FROM_EMAIL || "";

    const host = process.env.NEXT_PUBLIC_DOMAIN_HOST || "";
    const port = process.env.NEXT_PUBLIC_DOMAIN_PORT || "";
    const user = process.env.NEXT_PUBLIC_DOMAIN_USER || "";
    const pass = process.env.NEXT_PUBLIC_DOMAIN_PASS || "";

    const transporter = nodemailer.createTransport({
      host: host,
      port: port,
      secure: false,

      auth: {
        user: user,
        pass: pass,
      },
    } as unknown as SMTPTransport.Options);

    const emailBody = `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone: ${phone}
      Business Name: ${businessName}
      Permission to Text: ${permissionToText ? "Yes" : "No"}
      Text Message: ${additionalInfo}
    `;

    const mail = await transporter.sendMail({
      from: { name: fromUser, address: fromEmail },
      to: [{ name: "", address: "izee2upe@robot.zapier.com" }],
      subject: "New Quote Request Submitted",
      text: emailBody,
    });

    return mail;
  } catch (error) {
    console.log("sendEmail error in email utils ", error);
    return null;
  }
};

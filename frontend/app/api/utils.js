// file to store functions that i will repeatedly use
import nodemailer from "nodemailer";
// create a reusable nodemailer transporter to send emails
export function createTransporter() {
  return nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
}

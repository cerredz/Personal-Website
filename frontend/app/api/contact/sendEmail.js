import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
// a user wants to contact me, given some of their information, send myself an email
export async function sendEmail(req, res) {
  const { firstName, lastName, email, phoneNumber, company, message } =
    req.body;

  try {
  } catch (error) {
    console.error("Error sending message: ", error);
    NextResponse.status(500).json({ error: " Failed to send email" });
  }
}

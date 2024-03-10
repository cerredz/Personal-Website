import { NextResponse, NextRequest } from "next/server";
// after a user sends an email, i want to store that email into a mongodb database with some of that user's information
export async function POST(req, res) {
  try {
    const { firstName, lastName, email, phoneNumber, company, message } =
      req.body;
  } catch (error) {
    console.error("Failed to store email", error);
    NextResponse.status(500).json({ error: "Failed to store email" });
  }
}

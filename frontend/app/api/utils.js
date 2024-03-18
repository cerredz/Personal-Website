// file to store functions that i will repeatedly use in my backend
import nodemailer from "nodemailer";
import { MongoClient } from "mongodb";
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

// create a function to connect to the mongodb database that stores all of the emails sent to me
export async function connectToDatabase() {
  let connectionString = `${process.env.MONGODB_CONNECTION_STRING}`;
  const client = await MongoClient.connect(connectionString);
  return client;
}

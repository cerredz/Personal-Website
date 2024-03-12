import { connectToDatabase } from "../../utils";

// store the email parameters passed in the requst into the mongodb database
export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phoneNumber, company, message } = body;
    const client = await connectToDatabase();
    const collection = client.db("PersonalWebsite").collection("Emails");
    console.log("Storing the email... ");

    const result = await collection.insertOne({
      first_name: firstName,
      last_name: lastName,
      email: email,
      phoneNumber: phoneNumber !== "" ? phoneNumber : null,
      company: company !== "" ? company : null,
      message: message,
    });

    return new Response({
      status: 200,
      message: "Successfully stored Email into the database",
    });
  } catch (error) {
    console.error("Error Storing the Email into the database: ", error);
    return new Response({
      status: 500,
      message: "Failed to store email into the database",
    });
  }
}

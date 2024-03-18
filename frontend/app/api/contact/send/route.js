import { createTransporter } from "../../utils";
// a user wants to contact me, given some of their information, send myself an email
export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phoneNumber, company, message } = body;

    const transporter = createTransporter();
    const htmlContent = `
    <p><bold>Name: </bold> ${firstName} ${lastName}</p>
    <p><bold>Email: </bold> ${email}</p>
    <p><bold>Phone Number: </bold> ${phoneNumber}</p>
    <p><bold>Company: </bold> ${company}</p>
    <br>
    <p>${message}</p>
    `;

    const info = await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USERNAME,
      subject: "Personal Website Contact Me",
      html: htmlContent,
    });

    console.log(`🟢: ${email} successfully sent email to me`);
    return new Response({ status: 200, message: "successfully sent email" });
  } catch (error) {
    console.error("Error sending message: ", error);
    return new Response({ status: 500, message: "failed to send email" });
  }
}

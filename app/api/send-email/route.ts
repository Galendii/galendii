import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import mailjet from "node-mailjet";

const mailjetClient = mailjet.apiConnect(
  process.env.MAILJET_API_KEY!,
  process.env.MAILJET_SECRET_KEY!
);

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader || authHeader !== `Bearer ${process.env.API_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { email, subject, name, message } = await request.json();

    const response = await mailjetClient
      .post("send", { version: "v3.1" })
      .request({
        Messages: [
          {
            From: {
              Email: "breno.z.galendi@gmail.com",
              Name: name,
            },
            To: [
              {
                Email: "breno.z.galendi@gmail.com",
                Name: "Breno Zielinski Galendi",
              },
            ],
            Subject: subject,
            TextPart: `Message from ${name} <${email}>: \n\n${message}`,
            HTMLPart: `<div>
            <h1>${name} - ${email}</h1>
            <p>${message}</p></div>`,
          },
        ],
      });

    if (response.response.status !== 200) {
      return NextResponse.json({ error: response }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: response.body });
  } catch (err) {
    return NextResponse.json(
      { error: `Internal server error: ${err}` },
      { status: 500 }
    );
  }
}

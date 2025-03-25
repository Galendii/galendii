import { saveEmailData } from "@/lib/services/email";
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

    await saveEmailData({ email, name, subject, message });

    const response = await mailjetClient
      .post("send", { version: "v3.1" })
      .request({
        Messages: [
          {
            From: {
              Email: "me@galendii.dev",
              Name: "Galendii.dev",
            },
            To: [
              {
                Email: email,
                Name: name,
              },
            ],
            Subject: `Galendii.dev | Thank you for reaching out!`,

            HTMLPart: generateEmailHTML(name),
            CustomID: "PortfolioContactResponseV1",
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
function generateEmailHTML(name: string): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thanks for reaching out!</title>
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; background-color: #f9fafb; color: #111827;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f9fafb;">
    <tr>
      <td>
        <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" style="margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(90deg, #7c3aed 0%, #8b5cf6 100%); padding: 30px 40px; text-align: center;">
              <h1 style="color: #ffffff; font-size: 28px; margin: 0; font-weight: 700;">Thanks for reaching out! 👋</h1>
            </td>
          </tr>
          
          <!-- Content Area -->
          <tr>
            <td style="padding: 40px;">
              <p style="font-size: 18px; margin-top: 0; margin-bottom: 24px; color: #4b5563; font-weight: 500;">Hey ${name},</p>
              
              <p style="margin-bottom: 16px; line-height: 1.6; color: #4b5563;">I'm excited that you got in touch through my portfolio site!</p>
              
              <p style="margin-bottom: 16px; line-height: 1.6; color: #4b5563;">I've received your message and I'll check it out soon. I typically respond within a day or two, but I'm always eager to discuss new projects.</p>
              
              <p style="margin-bottom: 16px; line-height: 1.6; color: #4b5563;">If you need a quicker response, feel free to reach out on LinkedIn — I'm often more responsive there.</p>
              
              <p style="margin-bottom: 24px; line-height: 1.6; color: #4b5563;">Looking forward to chatting about your project and how we might work together!</p>
              
              <!-- CTA Button -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 32px;">
                <tr>
                  <td>
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="border-radius: 6px;" bgcolor="#7c3aed">
                          <a href="https://galendii.dev" target="_blank" style="font-size: 16px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 6px; padding: 12px 24px; border: 1px solid #7c3aed; display: inline-block;">Visit My Portfolio</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Signature Area with Border -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top: 2px solid #f3f4f6; padding-top: 24px;">
                <tr>
                  <td width="60" valign="top">
                    <table cellpadding="0" cellspacing="0" border="0" style="background-color: #7c3aed; width: 50px; height: 50px; border-radius: 6px;">
                      <tr>
                        <td align="center" valign="middle" style="color: #ffffff; font-weight: bold; font-size: 18px;">
                          BZG
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td valign="middle" style="padding-left: 15px;">
                    <p style="font-weight: bold; color: #111827; margin: 0; font-size: 16px;">Breno Zielinski Galendi</p>
                    <p style="color: #7c3aed; margin: 4px 0 0 0; font-size: 14px;">Full-Stack Developer</p>
                  </td>
                </tr>
              </table>
              
              <!-- Social Links -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 20px;">
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0" border="0" align="left">
                      <tr>
                        <td style="padding-right: 16px;">
                          <a href="mailto:breno.z.galendi@gmail.com" style="color: #6b7280; text-decoration: none; font-size: 14px; display: inline-block; border-bottom: 1px solid #e5e7eb; padding-bottom: 3px;">breno.z.galendi@gmail.com</a>
                        </td>
                        <td style="padding-right: 16px;">
                          <a href="https://github.com/Galendii" style="color: #6b7280; text-decoration: none; font-size: 14px; display: inline-block; border-bottom: 1px solid #e5e7eb; padding-bottom: 3px;">GitHub</a>
                        </td>
                        <td>
                          <a href="https://linkedin.com/in/breno-zielinski-galendi" style="color: #6b7280; text-decoration: none; font-size: 14px; display: inline-block; border-bottom: 1px solid #e5e7eb; padding-bottom: 3px;">LinkedIn</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f3f4f6; padding: 20px; text-align: center; color: #6b7280; font-size: 12px;">
              <p style="margin: 0;">© ${new Date().getFullYear()} Breno Zielinski Galendi. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

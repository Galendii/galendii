import type { EmailFormData } from "@/types";

export const sendEmail = async (email: EmailFormData) => {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      body: JSON.stringify(email),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`Failed to send email data ${JSON.stringify(data)}`);
    }

    return response;
    // Handle response...
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

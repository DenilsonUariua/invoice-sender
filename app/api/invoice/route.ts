import { Resend } from "resend";
import { EmailTemplate } from "../../components/email-templates/eplan-invoice";
// Nextjs route segment config
export const dynamic = 'force-dynamic' // Force dynamic (server) route instead of static page
const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["denuariua@gmail.com"],
      subject: "Hello world",
      text: "Hello",
      react: EmailTemplate({ firstName: "John" }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}

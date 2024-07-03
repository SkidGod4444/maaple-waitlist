import MappleWaitlistEmail from "@/layouts/templates/wl.mail";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const { email } = body;
    const { data, error } = await resend.emails.send({
      from: "Mapple Connect <mapple@mail.devwtf.in>",
      to: email,
      subject: "Congrats! You're on the waitlist! 🎉",
      react: MappleWaitlistEmail(),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

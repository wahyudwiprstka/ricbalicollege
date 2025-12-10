import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { nama, email, pesan } = await req.json();

    const data = await resend.emails.send({
      from: "RIC Contact Form <support@ricbali.com>",
      to: ["risinginternationalcollege@gmail.com"],
      subject: `Pesan Baru Dari Website`,
      html: `
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong><br/>${pesan}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

import { NextResponse } from "next/server";

/**
 * Placeholder contact handler for quote / sample / TDS enquiries.
 * Replace with Resend, SendGrid, SES, Formspree, etc. when credentials are ready.
 */
export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (
      !data?.name ||
      !data?.company ||
      !data?.email ||
      !data?.productInterest ||
      !data?.message
    ) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 },
      );
    }

    const enquiryType = data.enquiryType ?? "quote";

    console.info("[contact stub]", {
      enquiryType,
      name: data.name,
      company: data.company,
      email: data.email,
      productInterest: data.productInterest,
      application: data.application,
      polymer: data.polymer,
    });

    return NextResponse.json({
      ok: true,
      enquiryType,
      message:
        "Received. Wire this route to your email provider for production delivery.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }
}

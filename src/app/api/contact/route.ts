import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/constants";

type EnquiryType = "quote" | "sample" | "tds";

const TYPE_LABEL: Record<EnquiryType, string> = {
  quote: "Request a Quote",
  sample: "Request a Sample",
  tds: "Request TDS / Grades",
};

function asEnquiryType(value: unknown): EnquiryType {
  if (value === "sample" || value === "tds" || value === "quote") return value;
  return "quote";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

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

    const enquiryType = asEnquiryType(data.enquiryType);
    const typeLabel = TYPE_LABEL[enquiryType];
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email is not configured. Add RESEND_API_KEY to .env.local.",
        },
        { status: 503 },
      );
    }

    const to = process.env.CONTACT_TO || SITE.email;
    const from =
      process.env.CONTACT_FROM ||
      "SkyBlend Website <onboarding@resend.dev>";

    const lines = [
      `Type: ${typeLabel}`,
      `Name: ${data.name}`,
      `Company: ${data.company}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "—"}`,
      `Product interest: ${data.productInterest}`,
      `Application / Market: ${data.application || "—"}`,
      `Polymer: ${data.polymer || "—"}`,
      "",
      "Message:",
      data.message,
    ];

    const text = lines.join("\n");
    const html = `
      <div style="font-family:Segoe UI,Arial,sans-serif;line-height:1.5;color:#2D3436">
        <h2 style="color:#0B2A4A;margin:0 0 12px">${escapeHtml(typeLabel)}</h2>
        <p style="margin:0 0 16px;color:#6B7280">New enquiry from the SkyBlend website.</p>
        <table style="border-collapse:collapse;width:100%;max-width:640px">
          <tr><td style="padding:6px 0;font-weight:600">Name</td><td>${escapeHtml(String(data.name))}</td></tr>
          <tr><td style="padding:6px 0;font-weight:600">Company</td><td>${escapeHtml(String(data.company))}</td></tr>
          <tr><td style="padding:6px 0;font-weight:600">Email</td><td>${escapeHtml(String(data.email))}</td></tr>
          <tr><td style="padding:6px 0;font-weight:600">Phone</td><td>${escapeHtml(String(data.phone || "—"))}</td></tr>
          <tr><td style="padding:6px 0;font-weight:600">Product</td><td>${escapeHtml(String(data.productInterest))}</td></tr>
          <tr><td style="padding:6px 0;font-weight:600">Application</td><td>${escapeHtml(String(data.application || "—"))}</td></tr>
          <tr><td style="padding:6px 0;font-weight:600">Polymer</td><td>${escapeHtml(String(data.polymer || "—"))}</td></tr>
        </table>
        <p style="margin:16px 0 6px;font-weight:600">Message</p>
        <p style="white-space:pre-wrap;margin:0">${escapeHtml(String(data.message))}</p>
      </div>
    `;

    const resend = new Resend(apiKey);
    const { data: sent, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: String(data.email),
      subject: `${typeLabel} — ${data.productInterest} — ${data.company}`,
      text,
      html,
    });

    if (error) {
      console.error("[contact email error]", error);
      return NextResponse.json(
        { ok: false, error: error.message || "Failed to send email." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      enquiryType,
      id: sent?.id ?? null,
      message: "Enquiry emailed successfully.",
    });
  } catch (error) {
    console.error("[contact route error]", error);
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }
}

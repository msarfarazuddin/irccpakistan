import { NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  fullName?: string;
  phone?: string;
  disease?: string;
  email?: string;
  message?: string;
  page?: string;
};

const REQUIRED_ENV = [
  "GOOGLE_SHEETS_CLIENT_EMAIL",
  "GOOGLE_SHEETS_PRIVATE_KEY",
  "GOOGLE_SHEETS_SPREADSHEET_ID",
  "GOOGLE_SHEETS_SHEET_NAME",
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "CONTACT_EMAIL_TO",
];

function getEnv(name: string) {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value : null;
}

function parseEmailList(value: string | null) {
  if (!value) return [];
  return value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function formatSheetsError(error: unknown) {
  const err = error as { code?: number; response?: { status?: number } };
  const status = err.code || err.response?.status;
  if (status === 404) {
    return "Google Sheet not found or not shared with the service account.";
  }
  if (status === 403) {
    return "Google Sheet access denied. Share the sheet with the service account.";
  }
  return "Unable to write to Google Sheet.";
}

export async function POST(request: Request) {
  try {
    for (const key of REQUIRED_ENV) {
      if (!getEnv(key)) {
        return NextResponse.json(
          { error: `Missing environment variable: ${key}` },
          { status: 500 }
        );
      }
    }

    const body = (await request.json()) as ContactPayload;
    const fullName = (body.fullName || "").trim();
    const phone = (body.phone || "").trim();
    const disease = (body.disease || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();
    const page = (body.page || "").trim();

    if (!fullName || !phone || !message) {
      return NextResponse.json(
        { error: "Full name, phone, and message are required." },
        { status: 400 }
      );
    }

    const clientEmail = getEnv("GOOGLE_SHEETS_CLIENT_EMAIL")!;
    const privateKey = getEnv("GOOGLE_SHEETS_PRIVATE_KEY")!.replace(/\\n/g, "\n");
    const spreadsheetId = getEnv("GOOGLE_SHEETS_SPREADSHEET_ID")!;
    const sheetName = getEnv("GOOGLE_SHEETS_SHEET_NAME")!;

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const timestamp = new Date().toISOString();

    let sheetError: string | null = null;
    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: `${sheetName}!A1`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[timestamp, fullName, phone, disease, email, message, page]],
        },
      });
    } catch (error) {
      sheetError = formatSheetsError(error);
      console.error("Sheets append error:", error);
    }

    const recipients = parseEmailList(getEnv("CONTACT_EMAIL_TO"));
    if (recipients.length === 0) {
      return NextResponse.json(
        { error: "Email recipients are not configured." },
        { status: 500 }
      );
    }

    const rawPort = Number(getEnv("SMTP_PORT"));
    const port = Number.isFinite(rawPort) ? rawPort : 587;
    const secure = getEnv("SMTP_SECURE") === "true" ? true : port === 465;

    const transporter = nodemailer.createTransport({
      host: getEnv("SMTP_HOST")!,
      port,
      secure,
      auth: {
        user: getEnv("SMTP_USER")!,
        pass: getEnv("SMTP_PASS")!,
      },
    });

    const from = getEnv("SMTP_FROM") || getEnv("SMTP_USER")!;
    const subject =
      getEnv("CONTACT_EMAIL_SUBJECT") ||
      `New Service Consultation${page ? ` - ${page}` : ""}`;

    const text = [
      "New consultation request received.",
      "",
      `Name: ${fullName}`,
      `Phone: ${phone}`,
      disease ? `Disease: ${disease}` : null,
      email ? `Email: ${email}` : null,
      `Message: ${message}`,
      page ? `Page: ${page}` : null,
      `Timestamp: ${timestamp}`,
    ]
      .filter(Boolean)
      .join("\n");

    await transporter.sendMail({
      from,
      to: recipients,
      subject,
      text,
    });

    if (sheetError) {
      return NextResponse.json({ error: `${sheetError} (Email sent)` }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Consultation form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  age?: string;
  city?: string;
  conditionConcern?: string;
  fullName?: string;
  phone?: string;
  disease?: string;
  email?: string;
  preferredDateTime?: string;
  message?: string;
  page?: string;
};

const REQUIRED_EMAIL_ENV = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "CONTACT_EMAIL_TO",
];

const GOOGLE_SHEETS_ENV = [
  "GOOGLE_SHEETS_CLIENT_EMAIL",
  "GOOGLE_SHEETS_PRIVATE_KEY",
  "GOOGLE_SHEETS_SPREADSHEET_ID",
  "GOOGLE_SHEETS_SHEET_NAME",
] as const;

let sheetsClient: ReturnType<typeof google.sheets> | null = null;
let mailTransporter: ReturnType<typeof nodemailer.createTransport> | null = null;

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
  const err = error as {
    code?: number;
    message?: string;
    response?: { status?: number; data?: { error?: { message?: string } } };
  };
  const status = err.code || err.response?.status;
  const message = err.response?.data?.error?.message || err.message || "";
  if (status === 404) {
    return "Google Sheet not found or not shared with the service account.";
  }
  if (status === 403) {
    return "Google Sheet access denied. Share the sheet with the service account.";
  }
  if (
    message.includes("This operation is not supported for this document") ||
    message.includes("not supported for this document")
  ) {
    return "This spreadsheet is in Excel (.xlsx) mode. Convert it to a native Google Sheet, then try again.";
  }
  if (message) {
    return `Unable to write to Google Sheet: ${message}`;
  }
  return "Unable to write to Google Sheet.";
}

function getMissingEnv(names: readonly string[]) {
  return names.filter((name) => !getEnv(name));
}

function getSheetsClient() {
  if (sheetsClient) return sheetsClient;

  const clientEmail = getEnv("GOOGLE_SHEETS_CLIENT_EMAIL")!;
  const privateKey = getEnv("GOOGLE_SHEETS_PRIVATE_KEY")!.replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  sheetsClient = google.sheets({ version: "v4", auth });
  return sheetsClient;
}

function getMailTransporter() {
  if (mailTransporter) return mailTransporter;

  const rawPort = Number(getEnv("SMTP_PORT"));
  const port = Number.isFinite(rawPort) ? rawPort : 587;
  const secure = getEnv("SMTP_SECURE") === "true" ? true : port === 465;

  mailTransporter = nodemailer.createTransport({
    host: getEnv("SMTP_HOST")!,
    port,
    secure,
    auth: {
      user: getEnv("SMTP_USER")!,
      pass: getEnv("SMTP_PASS")!,
    },
  });

  return mailTransporter;
}

export async function POST(request: Request) {
  try {
    for (const key of REQUIRED_EMAIL_ENV) {
      if (!getEnv(key)) {
        return NextResponse.json(
          { error: `Missing environment variable: ${key}` },
          { status: 500 }
        );
      }
    }

    const body = (await request.json()) as ContactPayload;
    const age = (body.age || "").trim();
    const city = (body.city || "").trim();
    const conditionConcern = (body.conditionConcern || body.disease || "").trim();
    const fullName = (body.fullName || "").trim();
    const phone = (body.phone || "").trim();
    const email = (body.email || "").trim();
    const preferredDateTime = (body.preferredDateTime || "").trim();
    const message = (body.message || "").trim();
    const page = (body.page || "").trim();

    if (!fullName || !phone || !message) {
      return NextResponse.json(
        { error: "Full name, phone, and message are required." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const missingSheetsEnv = getMissingEnv(GOOGLE_SHEETS_ENV);

    let sheetError: string | null = null;
    if (missingSheetsEnv.length === 0) {
      try {
        const spreadsheetId = getEnv("GOOGLE_SHEETS_SPREADSHEET_ID")!;
        const sheetName = getEnv("GOOGLE_SHEETS_SHEET_NAME")!;
        const sheets = getSheetsClient();
        const row = [
          timestamp,
          fullName,
          age,
          phone,
          city,
          conditionConcern,
          preferredDateTime,
          message,
          email,
          page,
        ];

        await sheets.spreadsheets.values.append({
          spreadsheetId,
          range: `${sheetName}!A1`,
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [row],
          },
        });
      } catch (error) {
        sheetError = formatSheetsError(error);
        console.error("Sheets append error:", error);
      }
    } else {
      console.warn(
        "Skipping Google Sheets append because these env vars are missing:",
        missingSheetsEnv.join(", ")
      );
    }

    const recipients = parseEmailList(getEnv("CONTACT_EMAIL_TO"));
    if (recipients.length === 0) {
      return NextResponse.json(
        { error: "Email recipients are not configured." },
        { status: 500 }
      );
    }

    const transporter = getMailTransporter();

    const from = getEnv("SMTP_FROM") || getEnv("SMTP_USER")!;
    const subject =
      getEnv("CONTACT_EMAIL_SUBJECT") ||
      `New Service Consultation${page ? ` - ${page}` : ""}`;

    const text = [
      "New consultation request received.",
      "",
      `Name: ${fullName}`,
      age ? `Age: ${age}` : null,
      `Phone: ${phone}`,
      city ? `City: ${city}` : null,
      conditionConcern ? `Condition / Concern: ${conditionConcern}` : null,
      preferredDateTime ? `Preferred Date / Time: ${preferredDateTime}` : null,
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

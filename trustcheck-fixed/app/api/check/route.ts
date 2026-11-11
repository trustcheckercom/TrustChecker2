import { NextRequest, NextResponse } from "next/server";

// Mock AI analysis engine — in production replace with call to Anthropic/OpenAI
// + domain reputation (VirusTotal / Safe Browsing) + official contact lookup

export async function POST(req: NextRequest) {
  const { content, type } = await req.json();

  if (!content || typeof content !== "string") {
    return NextResponse.json({ error: "Content required" }, { status: 400 });
  }

  const lower = content.toLowerCase();

  // Simple heuristic demo logic (replace with real AI + APIs)
  let confidence = 35;
  let risk = "Low";
  let summary = "No major red flags found — still verify independently.";
  let needsMoreContext = content.length < 40;
  const warningSigns: { sign: string; why: string }[] = [];

  if (lower.includes("urgent") || lower.includes("immediately") || lower.includes("act now")) {
    confidence += 25;
    warningSigns.push({
      sign: "Urgent language detected",
      why: "Scammers often pressure you to act quickly before you can think or verify.",
    });
  }
  if (lower.includes("wire") || lower.includes("gift card") || lower.includes("bitcoin") || lower.includes("crypto")) {
    confidence += 30;
    warningSigns.push({
      sign: "Request for irreversible payment method",
      why: "Legitimate organizations rarely ask for gift cards, wire transfers, or crypto as payment.",
    });
  }
  if (lower.includes("password") || lower.includes("ssn") || lower.includes("social security") || lower.includes("verify your account")) {
    confidence += 20;
    warningSigns.push({
      sign: "Request for sensitive information",
      why: "Real companies will not ask you to send passwords or full account details via email or text.",
    });
  }
  if (type === "url" && (lower.includes("bit.ly") || lower.includes("tinyurl") || !lower.includes("https"))) {
    confidence += 15;
    warningSigns.push({
      sign: "Shortened or non-HTTPS link",
      why: "Scammers hide the real destination. Always hover or expand links before clicking.",
    });
  }

  if (confidence > 70) {
    risk = "High";
    summary = "Multiple warning signs suggest this may be a scam or phishing attempt. Do not engage.";
  } else if (confidence > 45) {
    risk = "Medium";
    summary = "Some concerning elements detected. Treat with caution and verify independently.";
  } else {
    risk = "Low";
    summary = "No major red flags found — still verify independently using official channels.";
  }

  if (needsMoreContext) {
    summary = "Limited information provided. " + summary + " Please share more details for a better assessment.";
  }

  // Example official contact (in production: lookup real verified data)
  const officialContacts = lower.includes("bank") || lower.includes("paypal") || lower.includes("amazon")
    ? {
        name: "Example Company (verify yourself)",
        website: "https://www.example-official.com",
        phone: "1-800-555-0199",
        email: "support@example-official.com",
      }
    : undefined;

  const report = {
    summary,
    confidence: Math.min(confidence, 95),
    risk,
    warningSigns,
    officialContacts,
    needsMoreContext,
    recommendations: [
      "Do not click any links or download attachments from the suspicious message.",
      "Find the official website yourself (search the company name + 'official site') and use the contact information listed there.",
      "If it claims to be from a bank or government agency, call them using the number on the back of your card or the official .gov site.",
      "Report the message to the platform (email provider, social network, marketplace) and to the FTC at ReportFraud.ftc.gov.",
    ],
    whatNotToDo: [
      "Do not reply to the message or call any phone number provided in it.",
      "Do not send money, gift cards, or cryptocurrency.",
      "Do not share passwords, one-time codes, or personal documents.",
    ],
  };

  return NextResponse.json(report);
}
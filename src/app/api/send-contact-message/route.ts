import { ContactMessagePayload } from "@/types/Object";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const payload = (await request.json()) as ContactMessagePayload;
  const errors = validateContactPayload(payload);

  if (errors.length > 0) {
    return NextResponse.json(
      {
        success: false,
        message: "Validation failed",
        errors,
      },
      { status: 400 }
    );
  }

  try {
    // TODO: Replace with your Zapier webhook URL for contact messages
    const zapierWebhookUrl =
      "https://hooks.zapier.com/hooks/catch/4159153/ukzdfqa/";

    const zapierResponse = await fetch(zapierWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const zapierJson = await zapierResponse.json().catch(() => ({}));

    if (!zapierResponse.ok) {
      return NextResponse.json(
        {
          status: zapierResponse.status,
          success: false,
          message: "Error: Zap could not be triggered",
          data: zapierJson,
        },
        { status: zapierResponse.status }
      );
    }

    return NextResponse.json({
      message: "Success: Contact message sent",
      success: true,
      data: zapierJson,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      success: false,
      message: "Error: Zap could not be triggered",
    });
  }
}

function validateContactPayload(payload: ContactMessagePayload) {
  const errors: string[] = [];

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const digitsOnlyPhone = (payload.phone || "").replace(/\D/g, "");

  if (!payload.fullName || !payload.fullName.trim()) {
    errors.push("Full name is required");
  }

  if (!payload.email || !payload.email.trim()) {
    errors.push("Email is required");
  } else if (!emailRegex.test(payload.email.trim())) {
    errors.push("Email is invalid");
  }

  if (!payload.phone || !payload.phone.trim()) {
    errors.push("Phone number is required");
  } else if (digitsOnlyPhone.length < 10) {
    errors.push("Phone number is invalid");
  }

  if (!payload.message || !payload.message.trim()) {
    errors.push("Message is required");
  }

  return errors;
}

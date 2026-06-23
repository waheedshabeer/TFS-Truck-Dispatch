import { QuotePayload } from "@/types/Object";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const payload = (await request.json()) as QuotePayload;
  const errors = validateQuotePayload(payload);

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
    const zapierResponse = await fetch(
      "https://hooks.zapier.com/hooks/catch/4159153/u6fvyve/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

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
      message: "Success: Zap triggered",
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

function validateQuotePayload(payload: QuotePayload) {
  const errors: string[] = [];

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const digitsOnlyPhone = (payload.phone || "").replace(/\D/g, "");

  if (!payload.firstName || !payload.firstName.trim()) {
    errors.push("First name is required");
  }

  if (!payload.lastName || !payload.lastName.trim()) {
    errors.push("Last name is required");
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

  if (!payload.businessName || !payload.businessName.trim()) {
    errors.push("Business name is required");
  }

  if (payload.permissionToText !== "Yes" && payload.permissionToText !== "No") {
    errors.push("Permission to text must be 'Yes' or 'No'");
  }

  if (!payload.additionalInfo || !payload.additionalInfo.trim()) {
    errors.push("Text message is required");
  }

  return errors;
}

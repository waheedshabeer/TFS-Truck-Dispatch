export interface QuotePayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName: string;
  permissionToText: "Yes" | "No" | "";
  additionalInfo: string;
}

export interface ContactMessagePayload {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

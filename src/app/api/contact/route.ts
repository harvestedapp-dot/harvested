interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (
    !name || name.length > 120 ||
    !email || email.length > 200 || !EMAIL_PATTERN.test(email) ||
    !message || message.length > 2000
  ) {
    return Response.json(
      { error: "Please provide a valid name, email, and message." },
      { status: 400 }
    );
  }

  // A successful response must mean a delivery provider accepted the
  // message. Until that integration exists, do not claim delivery or retain
  // visitors' personal messages in server logs.
  return Response.json(
    { error: "CONTACT_DELIVERY_UNAVAILABLE" },
    { status: 503, headers: { "Cache-Control": "no-store" } }
  );
}

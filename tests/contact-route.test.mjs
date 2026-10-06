import assert from "node:assert/strict";
import test from "node:test";
import { POST } from "../src/app/api/contact/route.ts";

const valid = { name: "Local Test", email: "local@example.com", message: "Local test only." };
const request = (body) => new Request("http://localhost/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

test("valid contact data never reports delivery without a provider", async () => {
  const response = await POST(request(valid));
  assert.equal(response.status, 503);
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.deepEqual(await response.json(), { error: "CONTACT_DELIVERY_UNAVAILABLE" });
});

for (const [label, body] of [
  ["missing data", {}],
  ["invalid email", { ...valid, email: "invalid" }],
  ["blank name", { ...valid, name: "  " }],
  ["non-string message", { ...valid, message: {} }],
  ["long name", { ...valid, name: "a".repeat(121) }],
  ["long email", { ...valid, email: `${"a".repeat(200)}@example.com` }],
  ["long message", { ...valid, message: "a".repeat(2001) }],
  ["null payload", null],
]) {
  test(`rejects ${label}`, async () => {
    assert.equal((await POST(request(body))).status, 400);
  });
}

test("malformed JSON returns a validation error", async () => {
  const response = await POST(new Request("http://localhost/api/contact", {
    method: "POST", body: "{",
  }));
  assert.equal(response.status, 400);
});

test("submitted personal data is not written to application logs", async () => {
  const calls = [];
  const original = console.log;
  console.log = (...args) => calls.push(args);
  try {
    await POST(request(valid));
  } finally {
    console.log = original;
  }
  assert.deepEqual(calls, []);
});

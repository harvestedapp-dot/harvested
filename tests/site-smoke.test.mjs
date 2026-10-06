import assert from "node:assert/strict";
import test from "node:test";

// Run against a local production build: npm run build && npm start -- --port 3137.
const base = "http://127.0.0.1:3137";

for (const locale of ["en", "hy"]) {
  const title = locale === "hy" ? "Կանեփի աճեցման հիմունքներ" : "Basic Cannabis Cultivation";

  for (const path of ["", "/course/basic-cannabis-cultivation", "/privacy-policy", "/refund-policy", "/terms-of-service", "/learn"]) {
    test(`${locale}${path} renders in the requested language`, async () => {
      const response = await fetch(`${base}/${locale}${path}`);
      assert.equal(response.status, 200);
      const html = await response.text();
      assert.match(html, new RegExp(`<html[^>]+lang="${locale === "en" ? "en-US" : "hy"}"`));
      assert.match(html, /<h1/);
      assert.doesNotMatch(html, /<a[^>]+href="#"[^>]*data-free-preview/);
    });
  }

  test(`${locale} product facts, price and policy links are present`, async () => {
    const html = await (await fetch(`${base}/${locale}/course/basic-cannabis-cultivation`)).text();
    assert.ok(html.includes(title));
    assert.ok(html.includes("25,000 AMD"));
    assert.ok(html.includes('"inLanguage":"en"'));
    for (const policy of ["privacy-policy", "terms-of-service", "refund-policy"]) {
      assert.ok(html.includes(`href="/${locale}/${policy}"`));
    }
    assert.ok(html.includes("data-free-preview-unavailable"));
    assert.ok(!html.includes('courseWorkload'));
  });

  test(`${locale} old product URL redirects to accurate identity`, async () => {
    const response = await fetch(`${base}/${locale}/course/indoor-growing-for-beginners`, { redirect: "manual" });
    assert.equal(response.status, 308);
    assert.equal(response.headers.get("location"), `/${locale}/course/basic-cannabis-cultivation`);
  });
}

test("local contact endpoint reports undelivered messages honestly", async () => {
  const response = await fetch(`${base}/api/contact`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Local QA", email: "local@example.com", message: "Local smoke test only." }),
  });
  assert.equal(response.status, 503);
  assert.deepEqual(await response.json(), { error: "CONTACT_DELIVERY_UNAVAILABLE" });
});

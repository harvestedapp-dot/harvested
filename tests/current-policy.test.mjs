import assert from "node:assert/strict";
import test from "node:test";
import { applyLegalPolicy, getCurrentPolicy, MINIMUM_AGE } from "../src/lib/current-policy.ts";

test("eligibility is 21 without introducing age data collection", () => {
  assert.equal(MINIMUM_AGE, 21);
  for (const locale of ["en", "hy"]) {
    assert.ok(getCurrentPolicy(locale).age.includes("21"));
    assert.ok(!/date of birth|passport|identity document/i.test(getCurrentPolicy(locale).agePrivacy));
  }
});

for (const locale of ["en", "hy"]) {
  test(`${locale} legal update preserves unrelated clauses and refund policy`, () => {
    const document = { title: "Title", metaDescription: "Description", lastUpdated: "Old date", sections: [
      { heading: "Eligibility", paragraphs: ["You must be at least 18 years old. The Company does not permit those under 18.", "Unrelated clause unchanged."], list: ["Payment processing: old active bank claim."] },
      { paragraphs: ["Payments are processed by Our acquiring bank, old claim."] },
    ] };
    const refund = { ...document, title: "Refund Policy", sections: [{ paragraphs: ["Full refund within 7 days to the original payment method."] }] };
    const source = { privacy: document, terms: document, refund };
    const updated = applyLegalPolicy(source, locale);
    assert.equal(updated.refund, refund);
    assert.equal(updated.terms.sections[0].paragraphs[1], "Unrelated clause unchanged.");
    assert.ok(updated.terms.sections[0].paragraphs[0].includes("21"));
    assert.ok(!updated.terms.sections[0].paragraphs[0].includes("18"));
    assert.equal(updated.terms.sections[0].list[0], getCurrentPolicy(locale).paymentPrivacy);
    assert.equal(updated.terms.sections[1].paragraphs[0], getCurrentPolicy(locale).paymentTerms);
    assert.equal(source.terms.lastUpdated, "Old date");
  });
}

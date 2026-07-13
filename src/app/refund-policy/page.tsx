import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: `Our refund policy for courses purchased on ${siteConfig.name}.`,
};

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund Policy" lastUpdated="July 13, 2026">
      <h2>Our Guarantee</h2>
      <p>
        We want you to feel confident enrolling in any {siteConfig.name}
        course. If you&rsquo;re not satisfied, you may request a full refund
        within 7 days of your purchase date, no questions asked.
      </p>

      <h2>How to Request a Refund</h2>
      <p>
        To request a refund, email us at{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>
          {siteConfig.contactEmail}
        </a>{" "}
        with the email address used at checkout and the course name. We aim
        to process all refund requests within 5 business days.
      </p>

      <h2>Refund Method</h2>
      <p>
        Approved refunds are issued to the original payment method used at
        checkout. Depending on your bank or card issuer, it may take
        additional time for the refund to appear on your statement.
      </p>

      <h2>After 7 Days</h2>
      <p>
        Refund requests made after the 7-day window will be reviewed on a
        case-by-case basis and are not guaranteed.
      </p>

      <h2>Questions</h2>
      <p>
        If you have any questions about this policy before or after your
        purchase, reach out to{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>
          {siteConfig.contactEmail}
        </a>{" "}
        and we&rsquo;ll be happy to help.
      </p>
    </LegalPage>
  );
}

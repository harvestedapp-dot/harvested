import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms and conditions for using ${siteConfig.name}.`,
};

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="July 2, 2026">
      <h2>Acceptance of Terms</h2>
      <p>
        By accessing or using {siteConfig.name} (the &ldquo;Service&rdquo;),
        you agree to be bound by these Terms of Service. If you do not
        agree, please do not use the Service.
      </p>

      <h2>Eligibility</h2>
      <p>
        You must be at least 18 years old to purchase a course. By using the
        Service, you confirm that you meet this age requirement and that the
        information you provide at checkout is accurate.
      </p>

      <h2>Educational Purpose Only</h2>
      <p>
        All content provided through {siteConfig.name} is for educational
        purposes only. We teach indoor gardening &mdash; growing ordinary
        plants such as herbs, leafy greens, vegetables, fruiting plants and
        flowering houseplants in controlled indoor conditions. We do not sell,
        distribute, or ship plants, seeds, substrates, or equipment. Rules on
        importing seeds and plant material vary by country and region, and it
        is your responsibility to understand and comply with the rules that
        apply to you. Nothing on this Service constitutes legal advice.
      </p>

      <h2>Account and Access</h2>
      <p>
        When you enroll in a course, you receive a personal, non-transferable
        license to access that course&rsquo;s content. You agree not to
        share your access credentials or redistribute course materials.
      </p>

      <h2>Payments</h2>
      <p>
        Course prices are listed at the time of purchase and are charged as
        one-time payments unless otherwise stated. All payments are
        processed securely through our third-party payment provider.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All course content, text, graphics, and materials on the Service are
        owned by {siteConfig.name} or its licensors and are protected by
        copyright and other intellectual property laws. You may not
        reproduce, distribute, or create derivative works without our
        written permission.
      </p>

      <h2>Prohibited Conduct</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any unlawful purpose</li>
        <li>Attempt to gain unauthorized access to any part of the Service</li>
        <li>Copy, resell, or redistribute course content without permission</li>
        <li>Interfere with the normal operation of the Service</li>
      </ul>

      <h2>Disclaimer of Warranties</h2>
      <p>
        The Service and its content are provided &ldquo;as is&rdquo;
        without warranties of any kind. We do not guarantee any specific
        growing results from following our courses &mdash; outcomes depend on
        your space, equipment, plants and care.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, {siteConfig.name} shall not
        be liable for any indirect, incidental, or consequential damages
        arising from your use of the Service.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms are governed by the laws of the United States and the
        state in which {siteConfig.name} operates, without regard to
        conflict-of-law principles.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of the
        Service after changes take effect constitutes acceptance of the
        revised Terms.
      </p>

      <h2>Contact Us</h2>
      <p>
        Questions about these Terms can be sent to{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>
          {siteConfig.contactEmail}
        </a>
        .
      </p>
    </LegalPage>
  );
}

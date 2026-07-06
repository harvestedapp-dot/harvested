import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects your information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="July 2, 2026">
      <h2>Introduction</h2>
      <p>
        {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;) respects your privacy. This Privacy Policy
        explains what information we collect, how we use it, and the
        choices you have when you use our website and courses
        (collectively, the &ldquo;Service&rdquo;).
      </p>

      <h2>Information We Collect</h2>
      <p>We collect information you provide directly to us, including:</p>
      <ul>
        <li>Contact information, such as your name and email address</li>
        <li>Payment information, processed securely by our payment provider</li>
        <li>Messages you send us through the contact form</li>
        <li>Basic usage data, such as pages visited and general device information</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, maintain, and improve the Service and course content</li>
        <li>Process payments and deliver course access</li>
        <li>Respond to your questions and support requests</li>
        <li>Send important updates about your courses or account</li>
      </ul>

      <h2>Cookies and Tracking</h2>
      <p>
        We may use cookies and similar technologies to keep the Service
        functioning correctly and to understand how visitors use our site.
        You can control cookies through your browser settings.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We rely on trusted third-party providers for functions such as
        payment processing and hosting. These providers only receive the
        information necessary to perform their services and are not
        permitted to use it for other purposes.
      </p>

      <h2>Data Security</h2>
      <p>
        We take reasonable technical and organizational measures to protect
        your information. However, no method of transmission or storage is
        completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>Children&rsquo;s Privacy</h2>
      <p>
        The Service is not directed to individuals under 18, and we do not
        knowingly collect personal information from minors.
      </p>

      <h2>Your Rights</h2>
      <p>
        Depending on your location, you may have the right to access,
        correct, or delete your personal information. To exercise these
        rights, contact us using the information below.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material
        changes will be reflected by updating the &ldquo;Last updated&rdquo;
        date at the top of this page.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, contact us at{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>
          {siteConfig.contactEmail}
        </a>
        .
      </p>
    </LegalPage>
  );
}

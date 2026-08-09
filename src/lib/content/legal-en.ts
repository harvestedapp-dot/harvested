/**
 * Legal page copy as data so both locales render through one component.
 * `{email}` and `{name}` placeholders are substituted at render time —
 * `{email}` becomes a mailto link.
 */
export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface LegalDocument {
  title: string;
  metaDescription: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export interface LegalDocuments {
  privacy: LegalDocument;
  terms: LegalDocument;
  refund: LegalDocument;
}

export const legalEn: LegalDocuments = {
  privacy: {
    title: "Privacy Policy",
    metaDescription: "How {name} collects, uses, and protects your information.",
    lastUpdated: "July 2, 2026",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "{name} (“we,” “us,” or “our”) respects your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have when you use our website and courses (collectively, the “Service”).",
        ],
      },
      {
        heading: "Information We Collect",
        paragraphs: ["We collect information you provide directly to us, including:"],
        list: [
          "Contact information, such as your name and email address",
          "Payment information, processed securely by our payment provider",
          "Messages you send us through the contact form",
          "Basic usage data, such as pages visited and general device information",
        ],
      },
      {
        heading: "How We Use Your Information",
        paragraphs: ["We use the information we collect to:"],
        list: [
          "Provide, maintain, and improve the Service and course content",
          "Process payments and deliver course access",
          "Respond to your questions and support requests",
          "Send important updates about your courses or account",
        ],
      },
      {
        heading: "Cookies and Tracking",
        paragraphs: [
          "We may use cookies and similar technologies to keep the Service functioning correctly and to understand how visitors use our site. You can control cookies through your browser settings.",
        ],
      },
      {
        heading: "Third-Party Services",
        paragraphs: [
          "We rely on trusted third-party providers for functions such as payment processing and hosting. These providers only receive the information necessary to perform their services and are not permitted to use it for other purposes.",
        ],
      },
      {
        heading: "Data Security",
        paragraphs: [
          "We take reasonable technical and organizational measures to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
        ],
      },
      {
        heading: "Children’s Privacy",
        paragraphs: [
          "The Service is not directed to individuals under 18, and we do not knowingly collect personal information from minors.",
        ],
      },
      {
        heading: "Your Rights",
        paragraphs: [
          "Depending on your location, you may have the right to access, correct, or delete your personal information. To exercise these rights, contact us using the information below.",
        ],
      },
      {
        heading: "Changes to This Policy",
        paragraphs: [
          "We may update this Privacy Policy from time to time. Material changes will be reflected by updating the “Last updated” date at the top of this page.",
        ],
      },
      {
        heading: "Contact Us",
        paragraphs: [
          "If you have questions about this Privacy Policy, contact us at {email}.",
        ],
      },
    ],
  },

  terms: {
    title: "Terms of Service",
    metaDescription: "The terms and conditions for using {name}.",
    lastUpdated: "July 2, 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        paragraphs: [
          "By accessing or using {name} (the “Service”), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Service.",
        ],
      },
      {
        heading: "Eligibility",
        paragraphs: [
          "You must be at least 18 years old to purchase a course. By using the Service, you confirm that you meet this age requirement and that the information you provide at checkout is accurate.",
        ],
      },
      {
        heading: "Educational Purpose Only",
        paragraphs: [
          "All content provided through {name} is for educational purposes only. We teach indoor gardening — growing ordinary plants such as herbs, leafy greens, vegetables, fruiting plants and flowering houseplants in controlled indoor conditions. We do not sell, distribute, or ship plants, seeds, substrates, or equipment. Rules on importing seeds and plant material vary by country and region, and it is your responsibility to understand and comply with the rules that apply to you. Nothing on this Service constitutes legal advice.",
        ],
      },
      {
        heading: "Account and Access",
        paragraphs: [
          "When you enroll in a course, you receive a personal, non-transferable license to access that course’s content. You agree not to share your access credentials or redistribute course materials.",
        ],
      },
      {
        heading: "Payments",
        paragraphs: [
          "Course prices are listed at the time of purchase and are charged as one-time payments unless otherwise stated. All payments are processed securely through our third-party payment provider.",
        ],
      },
      {
        heading: "Intellectual Property",
        paragraphs: [
          "All course content, text, graphics, and materials on the Service are owned by {name} or its licensors and are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.",
        ],
      },
      {
        heading: "Prohibited Conduct",
        paragraphs: ["You agree not to:"],
        list: [
          "Use the Service for any unlawful purpose",
          "Attempt to gain unauthorized access to any part of the Service",
          "Copy, resell, or redistribute course content without permission",
          "Interfere with the normal operation of the Service",
        ],
      },
      {
        heading: "Disclaimer of Warranties",
        paragraphs: [
          "The Service and its content are provided “as is” without warranties of any kind. We do not guarantee any specific growing results from following our courses — outcomes depend on your space, equipment, plants and care.",
        ],
      },
      {
        heading: "Limitation of Liability",
        paragraphs: [
          "To the fullest extent permitted by law, {name} shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Service.",
        ],
      },
      {
        heading: "Governing Law",
        paragraphs: [
          "These Terms are governed by the laws of the United States and the state in which {name} operates, without regard to conflict-of-law principles.",
        ],
      },
      {
        heading: "Changes to These Terms",
        paragraphs: [
          "We may update these Terms from time to time. Continued use of the Service after changes take effect constitutes acceptance of the revised Terms.",
        ],
      },
      {
        heading: "Contact Us",
        paragraphs: ["Questions about these Terms can be sent to {email}."],
      },
    ],
  },

  refund: {
    title: "Refund Policy",
    metaDescription: "Our refund policy for courses purchased on {name}.",
    lastUpdated: "July 13, 2026",
    sections: [
      {
        heading: "Our Guarantee",
        paragraphs: [
          "We want you to feel confident enrolling in any {name} course. If you’re not satisfied, you may request a full refund within 7 days of your purchase date, no questions asked.",
        ],
      },
      {
        heading: "How to Request a Refund",
        paragraphs: [
          "To request a refund, email us at {email} with the email address used at checkout and the course name. We aim to process all refund requests within 5 business days.",
        ],
      },
      {
        heading: "Refund Method",
        paragraphs: [
          "Approved refunds are issued to the original payment method used at checkout. Depending on your bank or card issuer, it may take additional time for the refund to appear on your statement.",
        ],
      },
      {
        heading: "After 7 Days",
        paragraphs: [
          "Refund requests made after the 7-day window will be reviewed on a case-by-case basis and are not guaranteed.",
        ],
      },
      {
        heading: "Questions",
        paragraphs: [
          "If you have any questions about this policy before or after your purchase, reach out to {email} and we’ll be happy to help.",
        ],
      },
    ],
  },
};

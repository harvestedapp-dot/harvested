/**
 * Legal page copy as data so both locales render through one component.
 * `{email}` and `{name}` placeholders are substituted at render time —
 * `{email}` becomes a mailto link, and bare http(s) URLs are linked too.
 *
 * A section with no `heading` continues the previous one, which is how a
 * document says something after a bulleted list. `level: 3` renders a
 * subheading inside the section above it.
 */
export interface LegalSection {
  heading?: string;
  level?: 2 | 3;
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

const POSTAL_ADDRESS_SHORT =
  "26A Khorenatsi Street, office 201, Kentron, 0010 Yerevan, Republic of Armenia";

const POSTAL_ADDRESS = `Individual Entrepreneur Ekaterina Lashko, ${POSTAL_ADDRESS_SHORT}`;

const COMPANY_DEFINITION =
  "Company (referred to as either “the Company”, “We”, “Us” or “Our”) refers to Individual Entrepreneur Ekaterina Lashko, registered in the Republic of Armenia (state registration number 286.1471569, dated 5 August 2025; taxpayer identification number (TIN/HVHH) 40311316), registered address: 26A Khorenatsi Street, office 201, Kentron, 0010 Yerevan, Republic of Armenia, operating under the trade name “{name}”.";

export const legalEn: LegalDocuments = {
  privacy: {
    /**
     * Named for both documents an acquirer's checklist asks for: the two are
     * one and the same text here, so there is no second policy to drift out
     * of sync with this one.
     */
    title: "Privacy Policy and Personal Data Processing Policy",
    metaDescription:
      "How {name} collects, processes, and protects your personal data.",
    lastUpdated: "August 12, 2026",
    sections: [
      {
        paragraphs: [
          "This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service, and tells You about Your privacy rights and how the law protects You. It also serves as Our personal data processing policy: it sets out who processes Your Personal Data, on what grounds, for what purposes, and for how long.",
          "We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.",
        ],
      },

      {
        heading: "Data Controller",
        paragraphs: [
          "The controller responsible for processing Your Personal Data is:",
        ],
        list: [
          "Individual Entrepreneur Ekaterina Lashko, operating under the trade name “{name}”",
          "State registration number: 286.1471569, dated 5 August 2025",
          "Taxpayer identification number (TIN/HVHH): 40311316",
          `Registered address: ${POSTAL_ADDRESS_SHORT}`,
          "Email: {email}",
          "Phone: {phone}",
        ],
      },

      { heading: "Interpretation and Definitions" },
      {
        heading: "Interpretation",
        level: 3,
        paragraphs: [
          "The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.",
        ],
      },
      {
        heading: "Definitions",
        level: 3,
        paragraphs: ["For the purposes of this Privacy Policy:"],
        list: [
          "Account means a unique account created for You to access the Service or parts of the Service, including free lessons and purchased Courses.",
          COMPANY_DEFINITION,
          "Cookies are small files that are placed on Your Device by a website, containing the details of Your browsing history on that website among its many uses.",
          "Country refers to: Armenia.",
          "Course means an online educational course offered by the Company through the Service.",
          "Device means any device that can access the Service, such as a computer, a cell phone or a digital tablet.",
          "Personal Data (or “Personal Information”) is any information that relates to an identified or identifiable individual. We use “Personal Data” and “Personal Information” interchangeably unless a law uses a specific term.",
          "Service refers to the Website located at https://start-growing.com, including the Courses, lessons, downloadable materials and related features made available through it.",
          "Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service, or to assist the Company in analyzing how the Service is used.",
          "Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).",
          "You means the individual accessing or using the Service, or the company or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.",
        ],
      },

      { heading: "Collecting and Using Your Personal Data" },
      {
        heading: "Personal Data",
        level: 3,
        paragraphs: [
          "While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:",
        ],
        list: [
          "Email address",
          "First name and last name",
          "Account login credentials (Your password is stored in encrypted form and is not visible to Us)",
          "The content of messages You send Us through the contact form",
          "Billing information such as billing name, billing address and country, where required to complete a purchase",
          "Records of Courses You have purchased, Your enrollment date and Your progress through lessons",
        ],
      },
      {
        paragraphs: [
          "We do not collect or store Your full payment card number, expiry date or security code. Payment card details are entered directly with Our payment processor and are processed by them in accordance with their own privacy policy and applicable payment card industry standards.",
        ],
      },
      {
        heading: "Usage Data",
        level: 3,
        paragraphs: [
          "Usage Data is collected automatically when using the Service.",
          "Usage Data may include information such as Your Device’s Internet Protocol address (e.g. IP address), browser type and version, the pages of Our Service that You visit, the time and date of Your visit, the time spent on those pages, the referring page, unique device identifiers, approximate location derived from Your IP address, and other diagnostic data.",
          "When You access the Service through a mobile device, We may collect certain information automatically, including the type of mobile device You use, Your mobile operating system, and the type of mobile Internet browser You use.",
        ],
      },
      {
        heading: "Course Progress Data",
        level: 3,
        paragraphs: [
          "When You are logged in to Your Account, the Service records which lessons You have opened and completed so that Your progress is saved and carries over between sessions and devices, including from the free lessons to a purchased Course.",
        ],
      },
      {
        heading: "Cookies and Similar Technologies",
        level: 3,
        paragraphs: [
          "We use Cookies and similar tracking technologies to operate the Service and to understand how it is used. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. If You do not accept Cookies, You may not be able to use some parts of Our Service, including logging in to Your Account.",
          "We use the following categories:",
        ],
        list: [
          "Strictly Necessary Cookies. Required to operate the Service, to authenticate You, to keep You logged in, to remember the contents of Your order and to provide security features. These cannot be switched off in Our systems.",
          "Functionality Cookies. Allow Us to remember choices You make, such as Your language preference and Your login details, so that You do not have to re-enter them.",
          "Analytics Cookies. Help Us understand how visitors interact with the Service, which pages are visited most often, and where visitors encounter difficulties, so that We can improve the Service. We use Google Analytics for this purpose, as described in the section “Analytics” below. These Cookies are set only where You have given Your consent, and You may withdraw that consent at any time through the cookie settings on the Service.",
        ],
      },
      {
        heading: "“Do Not Track” Signals",
        level: 3,
        paragraphs: [
          "Do Not Track (“DNT”) is a preference You can set in Your web browser to inform websites that You do not want to be tracked. At this time, there is no uniform technology standard for recognizing and implementing DNT signals. Accordingly, We do not currently respond to DNT browser signals or any other mechanism that automatically communicates Your choice not to be tracked. If a standard for online tracking is adopted that We must follow in the future, We will inform You about that practice in a revised version of this Privacy Policy.",
        ],
      },
      {
        heading: "Use of Your Personal Data",
        level: 3,
        paragraphs: ["The Company may use Personal Data for the following purposes:"],
        list: [
          "To provide and maintain the Service, including to monitor the usage of the Service and to keep it secure and available.",
          "To create and manage Your Account, to authenticate You and to give You access to the free lessons and to the Courses You have purchased.",
          "To perform Our contract with You, including processing Your enrollment, taking payment, issuing invoices and receipts, delivering access to Course content and downloadable materials, and handling refund requests.",
          "To save and restore Your Course progress across sessions and devices.",
          "To contact You by email regarding Your Account, Your purchases, changes or updates to a Course You have enrolled in, and other service-related messages.",
          "To respond to Your enquiries submitted through the contact form or sent to Us by email, and to provide customer support.",
          "To send You marketing communications about new Courses, guides, offers and related news, where You have subscribed or where We are otherwise permitted to do so by law. You may opt out at any time.",
          "To improve the Service, by analysing usage trends, identifying which content is helpful, testing new features and measuring the effectiveness of Our communications.",
          "To prevent fraud and misuse, including detecting unauthorized sharing of Account credentials or Course content, and enforcing Our Terms of Service.",
          "To comply with legal obligations, including accounting, tax and consumer protection requirements.",
          "For business transfers, to evaluate or conduct a merger, restructuring, reorganization, or sale or transfer of some or all of Our assets, in which Personal Data held by Us about users of the Service is among the assets transferred.",
        ],
      },

      {
        heading: "Legal Bases for Processing (GDPR)",
        paragraphs: [
          "If You are located in the European Economic Area or the United Kingdom, We process Your Personal Data only where We have a legal basis to do so. The legal bases We rely on are:",
        ],
        list: [
          "Performance of a contract. Processing necessary to provide the Service You have signed up for or purchased: creating and maintaining Your Account, delivering Course access, saving Your progress, taking payment and handling refunds.",
          "Legitimate interests. Processing necessary for Our legitimate interests, provided those interests are not overridden by Your rights: securing the Service, preventing fraud and unauthorized sharing of paid content, understanding how the Service is used in order to improve it, responding to Your enquiries, and sending existing customers information about similar Courses.",
          "Consent. Where You have given consent, for example for non-essential analytics Cookies and for marketing emails You subscribe to. You may withdraw Your consent at any time; withdrawal does not affect the lawfulness of processing carried out before withdrawal.",
          "Legal obligation. Processing necessary to comply with the law, such as retaining invoices and transaction records for tax and accounting purposes.",
        ],
      },

      {
        heading: "Email Communications",
        paragraphs: ["We distinguish between two types of email:"],
        list: [
          "Service and transactional emails are sent in connection with Your Account and Your purchases — for example, account confirmation, password resets, receipts, access details, and important notices about a Course You have enrolled in or about changes to these policies. These are part of the Service and cannot be opted out of while You hold an Account, other than by closing Your Account.",
          "Marketing emails are sent only where You have subscribed or otherwise consented, and may include announcements of new Courses, guides, discounts and other news. You can unsubscribe at any time using the link at the bottom of any marketing email, or by contacting Us at the address at the end of this Privacy Policy. Unsubscribing from marketing emails does not stop service and transactional emails.",
        ],
      },
      {
        paragraphs: [
          "Emails are currently sent from Our own mail system and Your email address is not shared with a third-party marketing platform. If this changes, We will update this Privacy Policy and name the provider before the change takes effect.",
        ],
      },

      {
        heading: "Disclosure of Your Personal Data",
        paragraphs: ["We may share Your Personal Data in the following situations:"],
        list: [
          "With Service Providers. We share Personal Data with third parties who perform services on Our behalf, including website and course hosting, payment processing, email delivery, and analytics. These providers may access Personal Data only to perform these tasks on Our behalf and are obliged not to disclose or use it for any other purpose.",
          "For legal reasons. We may disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (for example a court or a government agency), or where We believe in good faith that disclosure is necessary to comply with a legal obligation, protect and defend Our rights or property, prevent or investigate possible wrongdoing in connection with the Service, protect the personal safety of users of the Service or the public, or protect against legal liability.",
          "For business transfers. We may share or transfer Your Personal Data in connection with, or during negotiations of, any merger, sale of Company assets, financing or acquisition of all or a portion of Our business.",
          "With Your consent. We may disclose Your Personal Data for any other purpose with Your consent.",
        ],
      },
      {
        paragraphs: [
          "We do not sell Your Personal Data, and We do not share it with third parties for their own independent marketing purposes.",
          "The third-party providers We currently rely on are:",
        ],
        list: [
          "Payment processing: a licensed bank in the Republic of Armenia acting as Our acquiring bank, through its virtual POS terminal service. Card details are entered on the bank’s own secure payment page and are processed by the bank, with 3-D Secure authentication applied by Your card issuer. We receive confirmation of payment, the transaction amount and reference, and the billing details required to issue an invoice, but never Your full card number, expiry date or security code.",
          "Website and course platform: the Service runs on Our own platform, operated by Us on Our own server infrastructure. Course videos and downloadable materials are currently delivered from that same infrastructure. If We begin using a third-party video hosting or content delivery provider, We will update this Privacy Policy accordingly.",
          "Analytics: Google Analytics, provided by Google Ireland Limited.",
          "Email delivery: emails are currently sent from Our own mail system. If We begin using a third-party email delivery platform, We will update this Privacy Policy and name that provider here.",
        ],
      },

      {
        heading: "Analytics",
        paragraphs: [
          "We use Google Analytics, a web analytics service provided by Google Ireland Limited, to understand how visitors find and use the Service. Google Analytics uses Cookies and similar identifiers to collect information such as the pages You view, how long You spend on them, the approximate location derived from Your IP address, the type of Device and browser You use, and the source that referred You to the Service.",
          "This information is used in aggregate to measure and improve the Service. We have enabled IP anonymization where available, and We do not use Google Analytics to identify You personally or to combine analytics data with Your Account data.",
          "Google Analytics Cookies are set only after You have given consent through the cookie banner on the Service, and You may withdraw that consent at any time. You can also opt out of Google Analytics across all websites by installing the Google Analytics Opt-out Browser Add-on, available at https://tools.google.com/dlpage/gaoptout.",
          "For information on how Google processes data, see Google’s Privacy Policy at https://policies.google.com/privacy and Google’s description of how it uses data from sites that use its services at https://policies.google.com/technologies/partner-sites.",
        ],
      },

      {
        heading: "Retention of Your Personal Data",
        paragraphs: [
          "The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. Unless otherwise stated, the periods below are maximum periods, and We may delete or anonymize data sooner where it is no longer needed.",
        ],
        list: [
          "Account information and Course access records: retained for as long as Your Account remains open, and for up to 24 months after You close it or after Your last activity, in order to resolve disputes and enforce Our agreements. Because Courses are sold with lifetime access, closing Your Account will end Your access to purchased Courses.",
          "Course progress data: retained for the life of Your Account.",
          "Contact form messages and support correspondence: up to 24 months from the date the enquiry is closed.",
          "Marketing data: retained until You unsubscribe, or up to 24 months from Your last engagement with Our emails, whichever comes first.",
          "Usage Data and server logs: up to 24 months, for security monitoring, troubleshooting and analytics.",
          "Transaction and invoice records: up to 10 years from the date of the transaction, to comply with tax and accounting obligations. Payment card details are not stored by Us at any time.",
        ],
      },
      {
        paragraphs: [
          "We may retain Personal Data beyond these periods where We are required to do so by law, where the data is necessary to establish, exercise or defend legal claims, or where residual copies remain in encrypted backups scheduled for routine deletion. When retention periods expire, We securely delete or anonymize the Personal Data.",
        ],
      },

      {
        heading: "Transfer of Your Personal Data",
        paragraphs: [
          "Your information, including Personal Data, is processed at the Company’s operating offices and in any other places where the parties involved in the processing are located. This means that Your information may be transferred to, and maintained on, computers located outside of Your state, province, country or other governmental jurisdiction, where data protection laws may differ from those in Your jurisdiction.",
          "Where required by applicable law, We ensure that international transfers of Your Personal Data are subject to appropriate safeguards, such as the European Commission’s Standard Contractual Clauses, together with supplementary measures where appropriate. The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy.",
        ],
      },

      {
        heading: "Your Privacy Rights",
        paragraphs: [
          "Depending on where You live, You may have some or all of the following rights in relation to Your Personal Data:",
        ],
        list: [
          "Right of access. To obtain confirmation of whether We process Your Personal Data and to receive a copy of it.",
          "Right to rectification. To have inaccurate Personal Data corrected and incomplete Personal Data completed.",
          "Right to erasure. To request deletion of Your Personal Data where there is no lawful reason for Us to continue processing it.",
          "Right to restriction of processing. To request that We limit how We use Your Personal Data in certain circumstances.",
          "Right to data portability. To receive the Personal Data You provided to Us in a structured, commonly used and machine-readable format, and to have it transmitted to another controller where technically feasible.",
          "Right to object. To object to processing based on Our legitimate interests, and to object at any time to processing for direct marketing purposes.",
          "Right to withdraw consent. Where processing is based on consent, to withdraw that consent at any time.",
          "Right to lodge a complaint. To complain to the data protection supervisory authority in Your country of residence, place of work or place of the alleged infringement.",
        ],
      },
      {
        paragraphs: [
          "You may also update or correct much of Your information yourself by signing in to Your Account.",
          "To exercise any of these rights, contact Us at the address in the “Contact Us” section below. We will respond within one month of receiving Your request; where a request is complex or where We receive a number of requests, We may extend this period by a further two months and will inform You if We do. Exercising these rights is free of charge, unless a request is manifestly unfounded or excessive. We may need to ask You for information to confirm Your identity before acting on a request. Please note that We may need to retain certain information where We have a legal obligation or other lawful basis to do so.",
        ],
      },

      {
        heading: "California Privacy Rights",
        paragraphs: [
          "If You are a resident of California, the California Online Privacy Protection Act (“CalOPPA”) gives You the right to know what Personal Information We collect, how We use it, and with whom We share it. That information is set out in this Privacy Policy.",
        ],
        list: [
          "Reviewing and changing Your information. You may review and change the Personal Information associated with Your Account at any time by signing in to Your Account, or by contacting Us at the address below.",
          "Notice of changes. If We make material changes to this Privacy Policy, We will post the updated policy on this page and update the “Last updated” date at the top, and where appropriate We will notify You by email.",
          "Do Not Track. Our response to DNT browser signals is described in the “Do Not Track Signals” section above.",
          "Third-party tracking. We do not permit third parties to collect personally identifiable information about Your online activities over time and across different websites when You use Our Service.",
        ],
      },

      {
        heading: "Security of Your Personal Data",
        paragraphs: [
          "The security of Your Personal Data is important to Us. We use commercially reasonable technical and organizational measures to protect it, including encryption of data in transit, encrypted storage of passwords, and restricted access to systems containing Personal Data. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and We cannot guarantee its absolute security.",
        ],
      },

      {
        heading: "Children’s Privacy",
        paragraphs: [
          "Our Service is intended for adults. The Service does not address anyone under the age of 18, and We do not knowingly collect Personal Data from anyone under the age of 18. Purchasing a Course requires You to confirm that You are at least 18 years old.",
          "If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 18, We will take steps to remove that information from Our servers and to close the associated Account.",
        ],
      },

      {
        heading: "Links to Other Websites",
        paragraphs: [
          "Our Service contains links to other websites that are not operated by Us, including the websites of Our equipment partners referenced in discount offers inside the Courses. If You click on a third-party link, You will be directed to that third party’s site. We have no control over, and assume no responsibility for, the content, privacy policies or practices of any third-party sites or services. We strongly advise You to review the privacy policy of every site You visit.",
        ],
      },

      {
        heading: "Changes to this Privacy Policy",
        paragraphs: [
          "We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page and updating the “Last updated” date at the top. Where the changes are material, We will let You know by email and/or by a prominent notice on the Service before the change becomes effective.",
          "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
        ],
      },

      {
        heading: "Contact Us",
        paragraphs: [
          "If you have any questions about this Privacy Policy, or wish to exercise any of Your privacy rights, You can contact us:",
        ],
        list: [
          `By email: {email}`,
          `By phone: {phone}`,
          `By post: ${POSTAL_ADDRESS}`,
        ],
      },
    ],
  },

  terms: {
    title: "Terms of Service",
    metaDescription: "The terms and conditions for using {name}.",
    lastUpdated: "August 12, 2026",
    sections: [
      {
        paragraphs: [
          "Please read these Terms of Service carefully before using Our Service.",
        ],
      },

      { heading: "Interpretation and Definitions" },
      {
        heading: "Interpretation",
        level: 3,
        paragraphs: [
          "The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.",
        ],
      },
      {
        heading: "Definitions",
        level: 3,
        paragraphs: ["For the purposes of these Terms of Service:"],
        list: [
          "Account means a unique account created for You to access the Service or parts of the Service.",
          COMPANY_DEFINITION,
          "Content means all text, video lessons, audio, images, downloadable guides, checklists, graphics and other materials made available through the Service.",
          "Country refers to: Armenia.",
          "Course means an online educational course offered by the Company through the Service, including its lessons and accompanying materials.",
          "Device means any device that can access the Service, such as a computer, a cell phone or a digital tablet.",
          "Feedback means feedback, innovations or suggestions sent by You regarding the attributes, performance or features of Our Service.",
          "Service refers to the Website located at https://start-growing.com, including the Courses, lessons, downloadable materials and related features made available through it.",
          "Terms of Service (also referred to as “Terms”) means these Terms of Service, including any documents expressly incorporated by reference, which govern Your access to and use of the Service and form the entire agreement between You and the Company regarding the Service.",
          "You means the individual accessing or using the Service, or the company or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.",
        ],
      },

      {
        heading: "Acknowledgment",
        paragraphs: [
          "These are the Terms of Service governing the use of this Service and the agreement that operates between You and the Company. These Terms set out the rights and obligations of all users regarding the use of the Service.",
          "Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service. By accessing or using the Service You agree to be bound by these Terms. If You disagree with any part of these Terms, You may not access the Service.",
          "Your access to and use of the Service is also subject to Our Privacy Policy and Our Refund Policy, which are incorporated into these Terms by reference. Please read them carefully before using Our Service.",
        ],
      },

      {
        heading: "Eligibility",
        paragraphs: [
          "You must be at least 18 years old to create an Account or purchase a Course. By using the Service, You represent and warrant that You are at least 18 years old and that the information You provide to Us, including at checkout, is true, accurate and complete.",
          "The Company does not permit those under 18 to use the Service. If We become aware that a user is under 18, We may suspend or close the Account.",
        ],
      },

      {
        heading: "Your Account",
        paragraphs: [
          "To access the free lessons and any purchased Course, You must create an Account. When You create an Account, You must provide information that is accurate, complete and current at all times. Failure to do so constitutes a breach of these Terms and may result in suspension or termination of Your Account.",
          "Your Account is personal to You. You are responsible for safeguarding the password You use to access the Service and for any activity that occurs under Your Account. You agree not to disclose Your password to any third party and not to share, sell, lend or transfer Your Account or Your Course access to anyone else. You must notify Us immediately upon becoming aware of any breach of security or unauthorized use of Your Account.",
          "You may not use as a username the name of another person or entity, a name or trademark that is subject to the rights of another person or entity without appropriate authorization, or a name that is otherwise offensive, vulgar or obscene.",
        ],
      },

      {
        heading: "Free Lessons",
        paragraphs: [
          "We may make a limited number of lessons available free of charge. Free lessons require an Account but do not require payment details. We may change, limit or withdraw the free lessons at any time. Progress You make in the free lessons carries over if You subsequently enroll in the corresponding Course.",
        ],
      },

      {
        heading: "Enrollment, Prices and Payment",
        paragraphs: [
          "By enrolling in a Course, You agree to pay the price displayed at the time of purchase. Unless expressly stated otherwise, Courses are sold for a one-time payment and are not subscriptions; no recurring charges are made.",
          "Prices are displayed and charged in Armenian drams (AMD) and may be exclusive of taxes. Where We are required to charge sales tax, VAT or similar taxes, this will be shown at checkout. You are responsible for any bank charges, currency conversion fees or similar costs imposed by Your payment provider.",
          "We reserve the right to revise Our prices, to run promotions and to withdraw promotions at any time. A change of price does not affect a Course You have already purchased. Where a discounted price is shown alongside a higher reference price, the reference price is the Course’s standard non-promotional price.",
          "Payments are processed by Our acquiring bank, a licensed bank in the Republic of Armenia, through its virtual POS terminal service, which accepts Visa, Mastercard and ArCa cards. Depending on Your card issuer and country, Your payment may be converted from Armenian drams into another currency, and Your issuer may apply a conversion or cross-border fee over which We have no control. We do not receive or store Your full payment card details. Payment cards are subject to validation checks and authorization by Your card issuer; if We do not receive the required authorization, We will not be liable for any delay in or failure to provide access to the Course.",
          "We reserve the right to refuse or cancel an order where the Course is unavailable, where there has been an error in the description or price of a Course, or where We suspect fraud or an unauthorized or illegal transaction.",
        ],
      },

      {
        heading: "Access to Purchased Courses",
        paragraphs: [
          "Once payment is confirmed, You receive access to the purchased Course through Your Account. Where a Course is described as including “lifetime access”, this means access for as long as the Company continues to offer that Course through the Service, without a time limit set at the point of purchase. It does not mean access in perpetuity irrespective of circumstances. If We decide to permanently discontinue a Course, We will give enrolled users reasonable prior notice and, where practicable, an opportunity to download the accompanying materials.",
          "Course updates released after Your purchase are included at no additional cost for the Course You purchased. Newly released Courses are separate products and are not included.",
          "We may modify, update or reorganize the Content of a Course to keep it accurate and current.",
        ],
      },

      {
        heading: "Refunds and Right of Withdrawal",
        paragraphs: [
          "Refunds are governed by Our Refund Policy, which forms part of these Terms. In summary, You may request a full refund within 7 days of Your purchase date, no questions asked, by emailing Us at {email} from the email address used at checkout, stating the Course name. Refund requests made after the 7-day window are reviewed on a case-by-case basis and are not guaranteed. Approved refunds are issued to the original payment method.",
          "Where a refund is issued, Your access to the Course ends and You must cease using and delete any downloaded materials from that Course.",
          "Consumers in the European Union and United Kingdom. You normally have a statutory right to withdraw from a distance contract within 14 days. Because a Course is digital content supplied immediately, by completing Your purchase and accessing the Course You expressly request immediate performance and acknowledge that You lose Your statutory right of withdrawal once performance has begun. This does not affect Our 7-day refund guarantee described above, which We offer voluntarily and in addition to Your statutory rights, nor does it affect Your rights where the digital content is faulty or not as described.",
        ],
      },

      {
        heading: "Licence to Use the Content",
        paragraphs: [
          "Subject to Your compliance with these Terms and payment of the applicable fees, the Company grants You a limited, personal, non-exclusive, non-transferable, non-sublicensable and revocable licence to access and view the Content of the Courses You have enrolled in, for Your own personal, non-commercial educational use.",
          "You may download materials expressly made available for download and print them for Your own personal use.",
          "You may not:",
        ],
        list: [
          "copy, reproduce, republish, upload, post, transmit or distribute the Content, in whole or in part, in any medium;",
          "record, screen-capture, re-host or share video lessons;",
          "share Your Account credentials or otherwise give any other person access to a Course You have purchased;",
          "sell, rent, sublicense, or otherwise commercially exploit the Content;",
          "use the Content to create a competing course, or to teach, train or instruct others on a commercial basis;",
          "create derivative works from the Content;",
          "remove any copyright, trademark or other proprietary notices from the Content;",
          "use automated tools to scrape, index or download the Content in bulk.",
        ],
      },
      {
        paragraphs: [
          "The licence granted to You terminates automatically if You breach these Terms, and ends if a refund is issued to You.",
        ],
      },

      {
        heading: "Intellectual Property",
        paragraphs: [
          "The Service and its original Content, features and functionality are and will remain the exclusive property of the Company and its licensors, and are protected by copyright, trademark and other laws. Nothing in these Terms transfers any ownership right in the Content to You. Our trademarks and trade dress may not be used in connection with any product or service without Our prior written consent.",
        ],
      },

      {
        heading: "Partner Discounts and Third-Party Offers",
        paragraphs: [
          "The Courses include discount codes and recommendations relating to products offered by third-party equipment partners. Those products are sold by the relevant third party and not by Us. Any purchase You make from a partner is a contract between You and that partner, governed by their terms and their privacy policy.",
          "We do not guarantee the availability, validity or amount of any discount code, the price, quality or suitability of any partner product, or any particular level of savings. Advertised average savings are indicative only and depend on what You choose to buy. We may receive a commission or other benefit in connection with partner offers. We are not responsible for any loss arising from Your dealings with a partner.",
        ],
      },

      {
        heading: "Educational Purpose and No Guarantee of Results",
        paragraphs: [
          "All Content provided through the Service is for general educational purposes only. We teach indoor gardening — growing ordinary plants such as herbs, leafy greens, vegetables, fruiting plants and flowering houseplants in controlled indoor conditions.",
          "We do not sell, distribute or ship plants, seeds, substrates, nutrients or equipment.",
          "Growing results depend on Your space, equipment, plants, local conditions and care, and We do not guarantee any particular outcome, yield or result from following a Course.",
          "Laws and regulations concerning the cultivation of plants, and the import of seeds and plant material, vary by country and region. It is Your responsibility to understand and comply with the rules that apply to You. You agree not to use the Content for any purpose that is unlawful in Your jurisdiction. Nothing on the Service constitutes legal advice.",
          "The Content is not agricultural, horticultural, medical, nutritional or professional advice for Your specific circumstances, and should not be relied upon as such.",
        ],
      },

      {
        heading: "Prohibited Conduct",
        paragraphs: ["You agree not to:"],
        list: [
          "use the Service for any unlawful purpose or in violation of these Terms;",
          "attempt to gain unauthorized access to any part of the Service, other users’ Accounts, or any systems or networks connected to the Service;",
          "circumvent, disable or interfere with any security, access control or digital rights management feature of the Service;",
          "introduce any viruses, worms, malware or other harmful code;",
          "use automated systems to access the Service in a manner that sends more requests than a human could reasonably produce, or that impairs the normal operation of the Service;",
          "impersonate any person or entity, including the Company or its representatives;",
          "harass, abuse or harm another person through the Service, including via the contact form.",
        ],
      },

      {
        heading: "Your Submissions and Feedback",
        paragraphs: [
          "If You send Us a message through the contact form, provide a review or testimonial, or submit any other material, You confirm that it is Yours to send and that it does not infringe the rights of any third party or contain unlawful, offensive or misleading material.",
          "If You provide a review or testimonial about a Course, You grant Us a non-exclusive, worldwide, royalty-free licence to reproduce and display it, in whole or in part, on the Service and in Our marketing materials, together with Your first name and last initial. You may ask Us to remove it at any time by contacting Us.",
          "You assign to the Company all rights, title and interest in any Feedback You provide. If for any reason such assignment is ineffective, You grant the Company a non-exclusive, perpetual, irrevocable, royalty-free, worldwide licence to use, reproduce, disclose, sublicense, distribute, modify and exploit such Feedback without restriction and without compensation to You.",
        ],
      },

      {
        heading: "Availability of the Service",
        paragraphs: [
          "We aim to keep the Service available at all times, but We do not guarantee uninterrupted availability. The Service may be unavailable during maintenance, updates, or due to circumstances beyond Our control. We may modify, suspend or discontinue any part of the Service; where this materially affects a Course You have purchased, the “Access to Purchased Courses” section above applies.",
        ],
      },

      {
        heading: "Termination",
        paragraphs: [
          "We may suspend or terminate Your Account immediately, without prior notice or liability, if You breach these Terms — in particular if You share Your Account credentials, redistribute Content, or attempt to circumvent access controls.",
          "Where Your Account is terminated for breach, You lose access to any purchased Courses without a refund, unless the applicable law of Your country provides otherwise. Where a suspension results from a suspected breach that is subsequently not established, We will restore Your access.",
          "You may close Your Account at any time by contacting Us. Closing Your Account ends Your access to purchased Courses.",
          "Provisions of these Terms which by their nature should survive termination — including intellectual property, disclaimers, limitation of liability and governing law — shall survive.",
        ],
      },

      {
        heading: "“AS IS” and “AS AVAILABLE” Disclaimer",
        paragraphs: [
          "The Service is provided to You “AS IS” and “AS AVAILABLE”, with all faults and defects and without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its affiliates, licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and any warranties arising out of course of dealing, course of performance, usage or trade practice.",
          "Without limiting the foregoing, the Company makes no representation or warranty of any kind that the Service will meet Your requirements, achieve any intended results, be compatible with any other software or systems, operate without interruption, be error-free, or that any errors or defects will be corrected; nor as to the accuracy, reliability or currency of any information or Content provided through the Service.",
          "Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on a consumer’s applicable statutory rights, so some or all of the above exclusions and limitations may not apply to You. In such a case, the exclusions and limitations set out in this section shall apply to the greatest extent enforceable under applicable law.",
        ],
      },

      {
        heading: "Limitation of Liability",
        paragraphs: [
          "To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any indirect, incidental, special or consequential damages whatsoever, including loss of profits, loss of data, business interruption, damage to plants, crops or equipment, or costs of procuring substitute goods or services, arising out of or in any way related to Your use of or inability to use the Service or the Content, even if the Company has been advised of the possibility of such damages.",
          "Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms, and Your exclusive remedy, shall be limited to the amount actually paid by You for the Course giving rise to the claim, or 35,000 AMD if You have not purchased anything through the Service.",
          "Nothing in these Terms excludes or limits Our liability for death or personal injury caused by Our negligence, for fraud or fraudulent misrepresentation, or for any other liability that cannot be excluded or limited under applicable law. Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, which means that some of the above limitations may not apply to You.",
        ],
      },

      {
        heading: "Indemnification",
        paragraphs: [
          "You agree to indemnify and hold harmless the Company and its officers, employees and agents from any claims, damages, losses and expenses (including reasonable legal fees) arising out of Your breach of these Terms, Your misuse of the Content, or Your violation of any law or the rights of a third party.",
        ],
      },

      {
        heading: "Governing Law",
        paragraphs: [
          "The laws of the Republic of Armenia, excluding its conflict of law rules, shall govern these Terms and Your use of the Service. Your use of the Service may also be subject to other local, state, national or international laws.",
          "For European Union consumers. If You are a consumer resident in the European Union, You will benefit from any mandatory provisions of the law of the country in which You are resident, and nothing in these Terms deprives You of the protection afforded by those provisions.",
        ],
      },

      {
        heading: "Dispute Resolution",
        paragraphs: [
          "If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company at {email}. We will try to resolve Your concern within 30 days of receiving it.",
        ],
      },

      {
        heading: "Severability and Waiver",
        paragraphs: [
          "Severability. If any provision of these Terms is held to be unenforceable or invalid, that provision will be changed and interpreted to accomplish its objectives to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.",
          "Waiver. Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party’s ability to exercise such right or require such performance at any time thereafter, nor shall the waiver of a breach constitute a waiver of any subsequent breach.",
        ],
      },

      {
        heading: "Translation",
        paragraphs: [
          "These Terms may be translated if We make them available to You in more than one language on the Service. You agree that the original English text shall prevail in the case of a dispute.",
        ],
      },

      {
        heading: "Changes to These Terms",
        paragraphs: [
          "We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material, We will make reasonable efforts to provide at least 30 days’ notice before the new terms take effect. What constitutes a material change will be determined at Our sole discretion.",
          "By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised Terms. If You do not agree to the new terms, in whole or in part, please stop using the Service.",
        ],
      },

      {
        heading: "Contact Us",
        paragraphs: [
          "If you have any questions about these Terms of Service, You can contact us:",
        ],
        list: [
          `By email: {email}`,
          `By phone: {phone}`,
          `By post: ${POSTAL_ADDRESS}`,
        ],
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

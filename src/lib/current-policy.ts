import type { LegalDocument, LegalDocuments } from "@/lib/content/legal-en";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import type { Locale } from "@/lib/i18n/config";

/** Owner-approved eligibility and current payment status, shared by both locales. */
export const MINIMUM_AGE = 21;

const copy = {
  en: {
    updated: "October 6, 2026",
    age: "For ages 21 and over",
    ageHeading: "Age Eligibility and Privacy",
    agePrivacy: "Our Service is intended only for people aged 21 and over. We do not knowingly collect Personal Data from anyone under 21. You must be at least 21 years old to create an Account or purchase a Course.",
    payment: "Online payments are not yet connected.",
    cardPrivacy: "Online payments on this Website are not yet connected. We do not currently collect payment-card details through this Website.",
    paymentPrivacy: "Online payments on this Website are not yet connected. Bank-hosted card checkout is not currently available through this Website.",
    paymentTerms: "Online payments on this Website are not yet connected. Please contact Us at {email} with questions about enrollment. Do not send payment-card details by email or through the contact form.",
    inquiry: "Ask about enrollment",
    enrollment: "The listed course price is {price}, payable once. Online payments are not yet connected. Contact us with questions about enrollment.",
    howItWorks: "Review the course details and contact us with questions about enrollment. Online payments are not yet connected.",
    ageQuestion: "What is the minimum age?",
    ageAnswer: "The course and service are for people aged 21 and over.",
    paymentQuestion: "Can I pay online now?",
    paymentAnswer: "Online payments are not yet connected. The listed course price is {price}, payable once. Contact us with questions about enrollment.",
  },
  hy: {
    updated: "2026 թ. հոկտեմբերի 6",
    age: "21 տարեկան և ավելի բարձր տարիքի անձանց համար",
    ageHeading: "Տարիքային սահմանափակում և գաղտնիություն",
    agePrivacy: "Մեր Ծառայությունը նախատեսված է միայն 21 տարեկան և ավելի բարձր տարիքի անձանց համար։ Մենք գիտակցաբար չենք հավաքում անձնական տվյալներ 21 տարեկանից ցածր անձանցից։ Հաշիվ ստեղծելու կամ Դասընթաց ձեռք բերելու համար Դուք պետք է լինեք առնվազն 21 տարեկան։",
    payment: "Առցանց վճարումները դեռ միացված չեն։",
    cardPrivacy: "Այս Կայքում առցանց վճարումները դեռ միացված չեն։ Մենք ներկայումս այս Կայքի միջոցով վճարային քարտի տվյալներ չենք հավաքում։",
    paymentPrivacy: "Այս Կայքում առցանց վճարումները դեռ միացված չեն։ Այս Կայքի միջոցով բանկի վճարային էջում քարտով վճարելը ներկայումս հասանելի չէ։",
    paymentTerms: "Այս Կայքում առցանց վճարումները դեռ միացված չեն։ Գրանցման վերաբերյալ հարցերով կապվե՛ք մեզ հետ {email} հասցեով։ Վճարային քարտի տվյալներ մի՛ ուղարկեք էլեկտրոնային փոստով կամ կապի ձևի միջոցով։",
    inquiry: "Հարցնել գրանցման մասին",
    enrollment: "Դասընթացի նշված գինը {price} է՝ միանվագ վճարումով։ Առցանց վճարումները դեռ միացված չեն։ Գրանցման վերաբերյալ հարցերով կապվի՛ր մեզ հետ։",
    howItWorks: "Ծանոթացի՛ր դասընթացի մանրամասներին և գրանցման վերաբերյալ հարցերով կապվի՛ր մեզ հետ։ Առցանց վճարումները դեռ միացված չեն։",
    ageQuestion: "Ո՞րն է նվազագույն տարիքը",
    ageAnswer: "Դասընթացը և ծառայությունը նախատեսված են 21 տարեկան և ավելի բարձր տարիքի անձանց համար։",
    paymentQuestion: "Կարո՞ղ եմ հիմա վճարել առցանց",
    paymentAnswer: "Առցանց վճարումները դեռ միացված չեն։ Դասընթացի նշված գինը {price} է՝ միանվագ վճարումով։ Գրանցման վերաբերյալ հարցերով կապվի՛ր մեզ հետ։",
  },
} satisfies Record<Locale, Record<string, string>>;

export function getCurrentPolicy(locale: Locale) {
  return copy[locale];
}

/** Apply the approved narrow update without changing merchant details or refund terms. */
export function applyLegalPolicy(documents: LegalDocuments, locale: Locale): LegalDocuments {
  const policy = copy[locale];
  function revise(text: string): string {
    if (text.startsWith("We do not collect or store Your full payment card") || text.startsWith("Մենք չենք հավաքում և չենք պահում Ձեր վճարային քարտի")) return policy.cardPrivacy;
    if (text.startsWith("Payment processing:") || text.startsWith("Վճարումների մշակում՝")) return policy.paymentPrivacy;
    if (text.startsWith("Payments are processed by Our acquiring bank") || text.startsWith("Վճարումները մշակվում են մեր սպասարկող բանկի")) return policy.paymentTerms;
    if (text.startsWith("Our Service is intended for adults.") || text.startsWith("Մեր Ծառայությունը նախատեսված է չափահասների համար։")) return policy.agePrivacy;
    return text
      .replaceAll("age of 18", `age of ${MINIMUM_AGE}`)
      .replaceAll("18 years old", `${MINIMUM_AGE} years old`)
      .replace(/\bunder 18\b/g, `under ${MINIMUM_AGE}`)
      .replace(/18(?= տարեկան| տարեկանից)/g, String(MINIMUM_AGE))
      .replace("including website and course hosting, payment processing, email delivery", "including website and course hosting, email delivery")
      .replace("ներառյալ կայքի ու դասընթացների հոսթինգը, վճարումների մշակումը, նամակների առաքումը", "ներառյալ կայքի ու դասընթացների հոսթինգը, նամակների առաքումը")
      .replace("Prices are displayed and charged in Armenian drams", "Prices are displayed in Armenian drams")
      .replace("Գները ցուցադրվում և գանձվում են Հայաստանի Հանրապետության դրամով", "Գները ցուցադրվում են Հայաստանի Հանրապետության դրամով");
  }
  function update(document: LegalDocument): LegalDocument {
    return { ...document, lastUpdated: policy.updated, sections: document.sections.map(section => ({
      ...section,
      heading: section.heading === "Children’s Privacy" || section.heading === "Երեխաների գաղտնիությունը" ? policy.ageHeading : section.heading,
      paragraphs: section.paragraphs?.map(revise),
      list: section.list?.map(revise),
    })) };
  }
  return { ...documents, privacy: update(documents.privacy), terms: update(documents.terms) };
}

export function applyMarketingPolicy(dictionary: Dictionary, locale: Locale): Dictionary {
  const policy = copy[locale];
  const withPrice = (text: string) => text.replace("{price}", dictionary.hero.price);
  return {
    ...dictionary,
    common: { ...dictionary.common, paymentsAccepted: policy.payment },
    hero: { ...dictionary.hero, trustItems: [...dictionary.hero.trustItems, "21+"] },
    howItWorks: {
      ...dictionary.howItWorks,
      subheading: policy.howItWorks,
      steps: dictionary.howItWorks.steps.map((step, index) => index === 0 ? { title: policy.inquiry, description: withPrice(policy.enrollment) } : step),
    },
    faq: {
      ...dictionary.faq,
      items: [
        { question: policy.ageQuestion, answer: policy.ageAnswer },
        { question: policy.paymentQuestion, answer: withPrice(policy.paymentAnswer) },
        ...dictionary.faq.items.map(item => item.question === "What happens after I finish the free lessons?" || item.question === "Ի՞նչ է լինում անվճար դասերն ավարտելուց հետո" ? { ...item, answer: withPrice(policy.paymentAnswer) } : item),
      ],
    },
  };
}

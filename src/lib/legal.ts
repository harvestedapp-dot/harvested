import type { Locale } from "@/lib/i18n/config";
import { legalEn, type LegalDocuments } from "@/lib/content/legal-en";
import { legalHy } from "@/lib/content/legal-hy";

import { applyLegalPolicy } from "@/lib/current-policy";

const documents: Record<Locale, LegalDocuments> = {
  en: legalEn,
  hy: legalHy,
};

export function getLegalDocuments(locale: Locale): LegalDocuments {
  return applyLegalPolicy(documents[locale], locale);
}

export type { LegalDocument, LegalDocuments, LegalSection } from "@/lib/content/legal-en";

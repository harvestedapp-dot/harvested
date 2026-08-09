import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/legal/legal-page";
import { siteConfig } from "@/lib/site-config";
import { getLegalDocuments } from "@/lib/legal";
import { getDictionary, isLocale, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/privacy-policy">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const document = getLegalDocuments(locale).privacy;

  return {
    title: document.title,
    description: document.metaDescription.replaceAll("{name}", siteConfig.name),
    alternates: {
      canonical: `/${locale}/privacy-policy`,
      languages: {
        en: "/en/privacy-policy",
        hy: "/hy/privacy-policy",
        "x-default": "/en/privacy-policy",
      },
    },
  };
}

export default async function PrivacyPolicyPage({
  params,
}: PageProps<"/[locale]/privacy-policy">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <LegalPage
      document={getLegalDocuments(locale).privacy}
      lastUpdatedLabel={getDictionary(locale).legalPage.lastUpdated}
    />
  );
}

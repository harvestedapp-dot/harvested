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
}: PageProps<"/[locale]/terms-of-service">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const document = getLegalDocuments(locale).terms;

  return {
    title: document.title,
    description: document.metaDescription.replaceAll("{name}", siteConfig.name),
    alternates: {
      canonical: `/${locale}/terms-of-service`,
      languages: {
        en: "/en/terms-of-service",
        hy: "/hy/terms-of-service",
        "x-default": "/en/terms-of-service",
      },
    },
  };
}

export default async function TermsOfServicePage({
  params,
}: PageProps<"/[locale]/terms-of-service">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <LegalPage
      document={getLegalDocuments(locale).terms}
      lastUpdatedLabel={getDictionary(locale).legalPage.lastUpdated}
    />
  );
}

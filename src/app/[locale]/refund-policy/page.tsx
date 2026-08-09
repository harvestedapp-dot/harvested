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
}: PageProps<"/[locale]/refund-policy">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const document = getLegalDocuments(locale).refund;

  return {
    title: document.title,
    description: document.metaDescription.replaceAll("{name}", siteConfig.name),
    alternates: {
      canonical: `/${locale}/refund-policy`,
      languages: {
        en: "/en/refund-policy",
        hy: "/hy/refund-policy",
        "x-default": "/en/refund-policy",
      },
    },
  };
}

export default async function RefundPolicyPage({
  params,
}: PageProps<"/[locale]/refund-policy">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <LegalPage
      document={getLegalDocuments(locale).refund}
      lastUpdatedLabel={getDictionary(locale).legalPage.lastUpdated}
    />
  );
}

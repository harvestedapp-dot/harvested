import { Fragment } from "react";
import { siteConfig } from "@/lib/site-config";
import type { LegalDocument } from "@/lib/legal";

/**
 * Renders a legal document from data so both locales share one layout.
 * Paragraphs may contain `{name}` (the brand) and `{email}` (rendered as a
 * mailto link).
 */
function withPlaceholders(text: string) {
  return text.split("{email}").map((chunk, index, chunks) => (
    <Fragment key={index}>
      {chunk.replaceAll("{name}", siteConfig.name)}
      {index < chunks.length - 1 && (
        <a href={`mailto:${siteConfig.contactEmail}`}>
          {siteConfig.contactEmail}
        </a>
      )}
    </Fragment>
  ));
}

export function LegalPage({
  document,
  lastUpdatedLabel,
}: {
  document: LegalDocument;
  lastUpdatedLabel: string;
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground">
        {document.title}
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {lastUpdatedLabel}: {document.lastUpdated}
      </p>
      <div className="legal-content mt-8">
        {document.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{withPlaceholders(paragraph)}</p>
            ))}
            {section.list && (
              <ul>
                {section.list.map((item) => (
                  <li key={item}>{withPlaceholders(item)}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

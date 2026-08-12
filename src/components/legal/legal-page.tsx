import { Fragment, type ReactNode } from "react";
import { siteConfig } from "@/lib/site-config";
import type { LegalDocument } from "@/lib/legal";

/**
 * Renders a legal document from data so both locales share one layout.
 * Text may contain `{name}` (the brand) and `{email}` (rendered as a mailto
 * link); bare http(s) URLs are turned into links as well.
 */
const TOKEN = /\{email\}|\{phone\}|https?:\/\/[^\s,)]+[^\s,.)]/g;

function withPlaceholders(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(TOKEN)) {
    const start = match.index;
    if (start > cursor) {
      nodes.push(
        <Fragment key={`t${cursor}`}>
          {text.slice(cursor, start).replaceAll("{name}", siteConfig.name)}
        </Fragment>
      );
    }

    if (match[0] === "{email}") {
      nodes.push(
        <a key={`l${start}`} href={`mailto:${siteConfig.contactEmail}`}>
          {siteConfig.contactEmail}
        </a>
      );
    } else if (match[0] === "{phone}") {
      nodes.push(
        <a key={`l${start}`} href={`tel:${siteConfig.contactPhoneHref}`}>
          {siteConfig.contactPhone}
        </a>
      );
    } else {
      nodes.push(
        <a
          key={`l${start}`}
          href={match[0]}
          rel="noopener noreferrer"
          target="_blank"
        >
          {match[0]}
        </a>
      );
    }

    cursor = start + match[0].length;
  }

  nodes.push(
    <Fragment key={`t${cursor}`}>
      {text.slice(cursor).replaceAll("{name}", siteConfig.name)}
    </Fragment>
  );

  return nodes;
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
        {document.sections.map((section, index) => (
          <section
            key={section.heading ?? `section-${index}`}
            className={
              !section.heading
                ? "legal-cont"
                : section.level === 3
                  ? "legal-sub"
                  : undefined
            }
          >
            {section.heading &&
              (section.level === 3 ? (
                <h3>{section.heading}</h3>
              ) : (
                <h2>{section.heading}</h2>
              ))}
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

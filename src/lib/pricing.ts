/**
 * Single source of truth for what the course costs.
 *
 * The acquiring bank settles in Armenian drams, and card acquirers require
 * every amount shown on the site to be in the currency the customer is
 * actually charged in. So prices live here in AMD and every place that shows
 * one — UI copy, course data and structured data — reads it from this file.
 */

/** Current one-time price of the course, in AMD. */
export const COURSE_PRICE_AMD = 25_000;

/**
 * Standard non-promotional price, shown struck through next to the current
 * price. The Terms of Service require this to be a real reference price.
 */
export const COURSE_LIST_PRICE_AMD = 65_000;

/** ISO 4217 code used in structured data and at checkout. */
export const PRICE_CURRENCY = "AMD";

/**
 * Indicative savings students get from the partner discount codes inside the
 * course. Advertised as an approximate figure, never as a guarantee.
 */
export const PARTNER_SAVINGS_AMD = 70_000;

/**
 * Formats an amount the way it is displayed everywhere on the site:
 * grouped thousands followed by the currency code, e.g. "25,000 AMD".
 * The locale is pinned so the server and the browser render the same string.
 */
export function formatAmd(amount: number): string {
  return `${amount.toLocaleString("en-US")} ${PRICE_CURRENCY}`;
}

/** Same, for figures advertised as a minimum: "70,000+ AMD". */
export function formatAmdPlus(amount: number): string {
  return `${amount.toLocaleString("en-US")}+ ${PRICE_CURRENCY}`;
}

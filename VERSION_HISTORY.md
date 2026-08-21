# Version History

This file records the two versions of the Harvested website and how to move
between them. Nothing in the original version was deleted — it lives on in Git
in full and can be restored at any time.

## Original website

- **Branch:** `backup/original-site-before-indoor-gardening`
- **Tag:** `original-site-before-indoor-gardening`
- **Commit:** `45adbf386ad9353f35deda9377485c9494d8e8d9`
- **Backup created:** 2026-08-09
- **Status:** The last working version of the site before the indoor gardening
  adaptation (cannabis cultivation positioning, course
  `basic-cannabis-cultivation`, four cannabis guides under `/learn`).

## Indoor gardening website

- **Branch:** `indoor-gardening-version`
- **Commit:** `1a9f093e7c88aaa8751eb6eaf0f516d64a38a50c`
- **Status:** Indoor gardening / indoor horticulture version. Same design
  system, architecture and components; content, visuals, positioning, SEO and
  metadata rewritten for teaching beginners how to grow ordinary plants
  indoors — herbs, leafy greens, tomatoes, peppers, strawberries and flowering
  houseplants — from seed to harvest.

### Bilingual EN / HY (2026-08-09)

The indoor gardening site is now bilingual: English at `/en`, Eastern
Armenian (reformed orthography) at `/hy`. Routes live under
`src/app/[locale]`, copy lives in `src/lib/i18n/dictionaries` and per-locale
content files under `src/lib/content`. Prefix-less URLs from the earlier
version redirect into `/en`.

### What changed at a glance

- Course renamed to **Indoor Growing for Beginners**
  (`/course/indoor-growing-for-beginners`), curriculum rebuilt around indoor
  growing (still 6 modules / 32 lessons).
- Five "coming soon" courses re-scoped to indoor gardening topics.
- All four `/learn` guides rewritten (seed starting, grow lights, watering,
  pH & EC) with new slugs.
- Every photo replaced with an indoor gardening image; the hero's
  "3–4 joints ≈ the course" illustration replaced with hand-drawn potted
  seedlings ("4 months of store-bought herbs ≈ the course").
- Titles, meta descriptions, keywords, Open Graph / Twitter cards, JSON-LD
  (Organization, Course, FAQ, Article, Breadcrumb), sitemap, alt texts and
  aria-labels all rewritten.
- Legacy URLs from the original site are permanently redirected to their new
  equivalents in `next.config.ts`, so existing links and search results keep
  working.

### Full legal documents (2026-08-12)

The placeholder Privacy Policy and Terms of Service were replaced with the
full drafted documents (source `.docx` files in `privacy/`), in both locales:

- `src/lib/content/legal-en.ts` — Privacy Policy and Terms of Service in full,
  naming the operating entity, the Armenian acquiring bank, Google Analytics,
  GDPR legal bases, retention periods and Armenian governing law.
- `src/lib/content/legal-hy.ts` — clause-by-clause Eastern Armenian
  translation. Per the Terms' own "Translation" clause, the English text
  prevails in a dispute.
- `LegalSection` gained an optional `heading` (a headingless section continues
  the one above it, for text that follows a bulleted list) and `level: 3` for
  subheadings; `LegalPage` now also turns bare http(s) URLs into links.
- The Refund Policy is unchanged and is still the document the Terms
  incorporate by reference.

Footer links to all three documents and the `/[locale]/…` routes already
existed and were left as they were.

### Acquiring bank requirements (2026-08-14)

Three changes requested by the acquiring bank before it reviews the merchant
application:

- **Prices in AMD.** `src/lib/pricing.ts` is now the single source of truth:
  the course costs **25,000 AMD** (reference price 65,000 AMD), converted from
  the previous $69 / $179 at ≈366 AMD per USD. Every price on the site reads
  from that file — hero, pricing card, course page, structured data
  (`priceCurrency: "AMD"`), the OG image and both dictionaries. Partner savings
  are advertised as 70,000+ AMD, and the Terms now say prices are displayed and
  charged in Armenian drams (liability cap restated as 35,000 AMD).
- **Card scheme logos.** `src/components/payment-marks.tsx` renders the Visa,
  Mastercard and ArCa marks as inline SVG (official artwork and colours) under
  a "Payments accepted" caption, in the footer, on the pricing card and on the
  course enrolment card.
- **Address and phone in plain sight.** The trading address moved out of the
  fine print: it now appears at body size in the footer contact column
  (`footer.addressLines`) and in the contact section next to the phone number
  and email (`contact.address`), in both locales.

## How to restore the original version

None of these steps are performed automatically — they are here so the
original site can be brought back whenever it is needed.

**Look at the original without changing anything:**

```bash
git checkout original-site-before-indoor-gardening   # detached HEAD, read-only look
git checkout indoor-gardening-version                # back to the current work
```

**Run the original site locally:**

```bash
git checkout backup/original-site-before-indoor-gardening
npm install
npm run dev
```

**Make the original the live version again** (creates a new commit, keeps all
history — never rewrite or force-push the backup branch or tag):

```bash
git checkout main
git revert --no-commit <first-indoor-commit>..HEAD   # or:
git checkout original-site-before-indoor-gardening -- .
git commit -m "Restore the original site"
```

**Recover a single file from the original:**

```bash
git checkout original-site-before-indoor-gardening -- src/lib/courses.ts
```

**Rules for the backup**

- Do not delete or move `backup/original-site-before-indoor-gardening`.
- Do not delete or re-point the tag `original-site-before-indoor-gardening`.
- Do not rewrite history or force-push either of them.

### Armenian switched to the Eastern standard (2026-08-21)

The acquiring bank rejected the application because the Armenian read as
"completely wrong" to a reviewer in Yerevan: the site had been written in
Western Armenian in classical orthography (the diaspora variety), while the
Republic of Armenia's state standard is Eastern Armenian in reformed
orthography. Every Armenian string was rewritten to the Eastern standard —
`-ություն` endings, the `և` ligature, the `-ում` present tense and the `կ-`
future prefix — across:

- `src/lib/i18n/dictionaries/hy.ts` (all UI copy and the 20-item FAQ)
- `src/lib/content/courses-hy.ts`, `articles-hy.ts`, `legal-hy.ts`
- `src/lib/testimonials.ts` (the Armenian renderings only; the English
  originals and the ratings are untouched)
- Inline `hy` metadata, JSON-LD `knowsAbout`, keywords and image alt text in
  `src/app/[locale]/**` and `src/components/home/courses-section.tsx`
- `localeNames.hy` is now `Հայերեն`

Register: informal `դու` in marketing copy, formal `Դուք` in the three legal
documents, which is the convention in Armenian legal texts. Terminology was
localised too, not just transliterated — `Հեռաձայն` → `Հեռախոս`,
`Ելեկտրոնային` → `Էլեկտրոնային`, `Կեդրոն` → `Կենտրոն`, `դրամատուն` → `բանկ`,
`ձրի` → `անվճար`, `պարտիզպանութիւն` → `այգեգործություն`. Document titles now
use the RA-standard `քաղաքականություն` rather than `կանոններ`.

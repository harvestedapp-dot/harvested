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
- **Commit:** `INDOOR_COMMIT_HASH`
- **Status:** Indoor gardening / indoor horticulture version. Same design
  system, architecture and components; content, visuals, positioning, SEO and
  metadata rewritten for teaching beginners how to grow ordinary plants
  indoors — herbs, leafy greens, tomatoes, peppers, strawberries and flowering
  houseplants — from seed to harvest.

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

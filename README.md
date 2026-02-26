# Finance Guide Blog System Case Study
Frontend implementation of a CMS-driven finance blog using Next.js + Prismic.

What this includes:

- blog listing page
- article details page
- category filtering
- pagination (3 per page)
- breadcrumbs
- featured carousel
- SEO metadata + sitemap + robots
- component tests

## Instructions For Running The Code

### Prerequisites
- Node.js 18+
- npm 9+
- Prismic repository access

### Install dependencies
```bash
npm install
```

### Environment variables
Create `.env.local` and set:

```bash
# optional: if omitted, repo name falls back to slicemachine.config.json
NEXT_PUBLIC_PRISMIC_ENVIRONMENT=moss-finance-guide-blog

# used for absolute canonical/OG/sitemap URLs
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Run development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm run start
```

### Run tests
```bash
npm test
```

### Run lint
```bash
npm run lint
```

## Brief Explanation Of The Implementation

I built the assignment with Next.js App Router and Prismic as the CMS source of truth.

The app has two main routes:

- `/blog` for listing, category filtering, featured carousel, and pagination
- `/blog/[uid]` for the article details page

Home (`/`) redirects to `/blog`, so the blog is the default entry.

For data flow, I kept display logic and data/query logic separated:

- `app/components/blog/*` handles UI components
- `app/lib/*` handles utilities (articles, categories, pagination, date formatting, SEO)

Filtering and pagination are URL-driven (`category` + `page` query params), so state is shareable and refresh-safe.

SEO is implemented with dynamic article metadata (`generateMetadata`) and fallback rules:

- use `meta_title`, `meta_description`, `meta_image` when available
- fallback to article title/excerpt/hero image when needed

I also added:

- `metadataBase` in root layout
- `sitemap.xml` and `robots.txt`
- loading skeletons for listing and article routes

### Testing
I added component tests with React Testing Library + Jest for:

- `ArticleCard`
- `CategoryFilter`
- `Pagination`
- `FeaturedArticleCarousel`

The tests cover CMS-shaped rendering + user behavior (filter changes, pagination links, carousel controls).

## Architectural Decisions And Trade-offs

### What I chose and why

- **Next.js App Router with server-first pages**  
  I kept `/blog` and `/blog/[uid]` as server-rendered pages so content and metadata are available on first response, which helps SEO and keeps data-fetching logic straightforward.

- **Component/UI separation from domain utilities**  
  I split UI into `app/components/blog/*` and logic into `app/lib/*` to keep components focused on rendering and helpers focused on filtering, pagination, date formatting, and metadata.

- **URL-based state for category + pagination**  
  I used query params (`category`, `page`) so state is shareable, bookmarkable, and refresh-safe.

### Key trade-offs

- **Simple listing logic over API-level filtering/pagination**  
  The listing currently fetches blog posts then applies filtering/pagination in app logic. This is clean for case-study scope, but for larger datasets I would move this fully to query-level pagination/filtering.

- **Component tests over broader integration coverage**  
  I prioritized component behavior tests for critical UI paths. This keeps the suite small and fast, but production would benefit from additional integration/E2E coverage.

- **Tailwind CSS for speed**  
  I used Tailwind because it helped me move fast and ship this case study quickly. In a bigger project, utility classes can get messy and harder to maintain. If this was a larger product, I’d build a proper design system from scratch, probably using SCSS modules for better structure and consistency.

## Production Considerations

### What I implemented (and why)

- **Discoverability / SEO**  
  I implemented dynamic metadata generation per article (`generateMetadata` + SEO helpers), canonical URLs, Open Graph/Twitter metadata, `sitemap.xml`, and `robots.txt`.  
  Why: improves crawlability, indexing clarity, and social sharing quality for a public blog.

- **Performance**  
  I used server-rendered pages, loading skeletons for listing/article routes, and lazy image loading by default in the shared image wrapper.  
  Why: improves perceived speed and reduces unnecessary initial payload on content-heavy pages.

- **Accessibility**  
  I added labeled form controls, skip-to-content navigation, visible focus states on interactive elements, carousel keyboard support (left/right), ARIA labels/current states, and breadcrumb current-page semantics.  
  Why: improves keyboard/screen-reader usability and makes core navigation/interaction usable for more users.

### What I would improve next for production

- Move filtering/pagination fully to Prismic API query level for scale.
- Secure on-demand revalidation with a secret and scoped invalidation logic.
- Add `BlogPosting` structured data (JSON-LD) for richer search results.
- Add E2E tests for critical flows (filter, paginate, open article, carousel controls).
- Add localization/i18n routing and translated content support.
- Add CI quality gates (lint + typecheck + tests) on pull requests.
# SkyBlend Masterbatch LLP — Marketing Website

Production-ready marketing site for **SkyBlend Masterbatch LLP** (Sky Group), Morbi, Gujarat.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · `next/image`

## Requirements

- Node.js 20+ recommended
- npm 10+

## Install

```bash
npm install
```

## Develop

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & run production

```bash
npm run build
npm start
```

## Lint

```bash
npm run lint
```

## Project structure

```
src/
  app/           # Routes: /, /about, /products, /markets, /find-grade, /resources, /contact
  components/    # Header, Footer, Hero, GradeFinder, EnquiryForm, matrix, WhatsApp
  lib/           # Site constants, products, markets, finder logic, knowledge notes
public/
  logo.png       # Primary brand mark
  icons/         # Pellet-spiral motif SVG
```

## Upgrade features

- **Find a Grade** (`/find-grade`) — polymer → process → need wizard
- **Quote / Sample / TDS** — tabbed enquiry form on `/contact?type=quote|sample|tds`
- **WhatsApp CTA** — set `SITE.whatsapp` (digits with country code) in `src/lib/constants.ts`
- **Product × market matrix** — on `/markets#matrix`
- **Resources** — 5 process notes under `/resources`

## Brand tokens

CSS variables in `src/app/globals.css`:

| Token | Value |
|-------|-------|
| `--navy` | `#0B2A4A` |
| `--teal` | `#00A3AD` |
| `--cyan` | `#2EC4B6` |
| `--charcoal` | `#2D3436` |
| `--slate` | `#6B7280` |
| `--surface` | `#F7FAFC` |

Fonts: **Outfit** (display) + **Source Sans 3** (body).

## Contact form email (Resend)

Quote / Sample / TDS forms `POST` to `/api/contact`, which emails **skyblendmasterbatchllp2026@gmail.com** via [Resend](https://resend.com).

### Setup (required once)

1. Sign up at [resend.com](https://resend.com) with `skyblendmasterbatchllp2026@gmail.com`
2. Create an API key: [resend.com/api-keys](https://resend.com/api-keys)
3. Copy `.env.local.example` → `.env.local` and set:

```bash
RESEND_API_KEY=re_xxxxxxxx
CONTACT_TO=skyblendmasterbatchllp2026@gmail.com
CONTACT_FROM=SkyBlend Website <onboarding@resend.dev>
```

4. Restart `npm run dev`

### Notes

- Free plan: 3,000 emails/month (100/day)
- Until a custom domain is verified in Resend, use `onboarding@resend.dev` as the from-address and sign up with the Gmail above (test sends must go to that account email)
- After verifying `skyblend.in` (or another domain), change `CONTACT_FROM` to e.g. `SkyBlend Website <enquiries@skyblend.in>`
- If `RESEND_API_KEY` is missing, the form falls back to a mailto draft

## Contact placeholders

Update these in `src/lib/constants.ts` when confirmed (do not invent details):

- `SITE.email`
- `SITE.phone`
- `SITE.whatsapp` (e.g. `9198XXXXXXXX` — enables floating WhatsApp button)
- `SITE.address`
- `SITE.mapEmbedUrl`
- `SITE.url` (production domain for SEO / sitemap)

Also replace the logo in `public/logo.png` if you have the official asset file.

## SEO

- Metadata + Open Graph in `src/app/layout.tsx`
- `src/app/sitemap.ts` → `/sitemap.xml`
- `src/app/robots.ts` → `/robots.txt`
- Organization JSON-LD in the root layout

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint |

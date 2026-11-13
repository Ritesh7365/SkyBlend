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

## Contact form — wiring real email

The contact form validates on the client and `POST`s to `/api/contact`.

Today `src/app/api/contact/route.ts` is a **stub** that:

1. Validates required fields
2. Logs a short payload server-side
3. Returns `{ ok: true }`

If the API call fails, the client falls back to a `mailto:` draft.

### Option A — Resend (recommended)

1. Create a [Resend](https://resend.com) account and API key
2. Add to `.env.local`:

```bash
RESEND_API_KEY=re_xxx
CONTACT_TO=sales@your-domain.com
CONTACT_FROM=website@your-domain.com
```

3. In `src/app/api/contact/route.ts`, replace the stub with something like:

```ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: process.env.CONTACT_FROM!,
  to: process.env.CONTACT_TO!,
  replyTo: data.email,
  subject: `Quote request — ${data.productInterest}`,
  text: [
    `Name: ${data.name}`,
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "—"}`,
    `Product: ${data.productInterest}`,
    `Application: ${data.application || "—"}`,
    "",
    data.message,
  ].join("\n"),
});
```

### Option B — Formspree / Getform

Point the form `action` or fetch URL at your Formspree endpoint and remove the local API stub.

### Option C — mailto only

Set a real address in `src/lib/constants.ts` (`SITE.email`) and rely on the client mailto fallback.

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

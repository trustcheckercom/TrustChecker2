# TrustCheck

AI-powered scam detection platform. Check suspicious texts, emails, websites, invoices, job offers, and more before you trust them.

**Dark professional theme with gold accents. Paid-only with 3-day free trial.**

## Deployment: Cloudflare Workers + OpenNext

This project is configured for the official **OpenNext Cloudflare adapter** (Workers), not the deprecated next-on-pages.

### Local Development
```bash
npm install
npm run dev
```
Open http://localhost:3000

### Preview on Workers runtime
```bash
npm run preview
```

### Deploy to Cloudflare
```bash
npm run deploy
```
(or push to GitHub and use the dashboard settings below)

## Cloudflare Dashboard Settings (Workers)

If deploying via the Cloudflare dashboard (Git integration):

| Setting | Value |
|---------|--------|
| **Build command** | `npm install && npm run deploy` |
| **Deploy command** | (leave empty — `npm run deploy` already deploys) |
| **Root directory** | `/` |
| **Production branch** | `main` |

Alternatively, run `npm run deploy` locally after `npx wrangler login`.

### Environment Variables (optional for current demo)
The current version uses a mock analysis engine and localStorage. No secrets are required for basic functionality.

For production enhancements later:
- `OPENAI_API_KEY` or `ANTHROPIC_API_KEY`
- Stripe keys
- Clerk keys

## Features
- Landing page with exact pricing table
- Login / Signup UI
- Check tool (text, URL, description)
- Detailed reports with confidence %, warning signs, official contacts
- History with user-controlled deletion
- Education center
- Privacy page

## Notes
- History is stored in the browser (localStorage) for the demo.
- Analysis is heuristic-based; replace `/api/check` with a real LLM call for production.
- Never claims something is “definitely safe.”

---
Built to help people (especially older adults) avoid online scams.
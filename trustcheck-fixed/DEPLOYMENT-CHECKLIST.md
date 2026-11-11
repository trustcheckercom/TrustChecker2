# TrustCheck – Cloudflare Deployment Checklist

## Files you must replace / add in your GitHub repo

### REPLACE these files:
1. `package.json`
2. `next.config.js`
3. `.gitignore`

### ADD these new files:
1. `open-next.config.ts`
2. `wrangler.jsonc` (you can delete the old `wrangler.toml`)

### Keep everything else as-is
All files under `app/`, `components/`, `tailwind.config.js`, `postcss.config.js`, `tsconfig.json` stay the same.

## Exact steps

1. In your GitHub repo (`trustcheckercom/Trust-Checker`), update/add the files listed above.
2. Delete the old `wrangler.toml` if it still exists.
3. Commit and push to the `main` branch.

## Cloudflare Dashboard (Workers project)

Create a **Workers** project (not Pages) connected to your GitHub repo, or use the existing one after fixing settings:

| Field | Value |
|-------|--------|
| Build command | `npm install && npm run deploy` |
| Deploy command | (leave blank) |
| Root directory | `/` |
| Production branch | `main` |

## Local deploy alternative
```bash
npm install
npx wrangler login
npm run deploy
```

## What was fixed
- Removed deprecated `@cloudflare/next-on-pages`
- Added official `@opennextjs/cloudflare` adapter
- Correct `wrangler.jsonc` pointing at `.open-next/worker.js` and assets
- Added `open-next.config.ts`
- Updated scripts: `preview` and `deploy`
- Compatibility date set to a current value with `nodejs_compat`

The application code, UI, branding, and functionality are unchanged.
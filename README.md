# motion patch

Marketing site for [motionpatch.com](https://www.motionpatch.com) — an all-natural, drug-free nausea relief patch from **P6**.

Products sell on **Amazon only**. This repo is a static Vite + React site. There is no Shopify, cart, or checkout.

## Local development

```bash
npm install
npm run dev
```

The app runs at [http://127.0.0.1:43180](http://127.0.0.1:43180).

```bash
npm run build    # production build to dist/
npm run preview  # serve the built site on the same port
```

## Where to set the Amazon listing URL

Every “Shop on Amazon” / buy CTA opens `AMAZON_PRODUCT_URL` in a new tab with `rel="noopener noreferrer"`.

**Change it in one place:** [`src/config.ts`](src/config.ts)

```ts
export const AMAZON_PRODUCT_URL = 'https://www.amazon.com'
```

Replace that default with the live Amazon product listing when it is ready. No other file needs an edit for buy links.

Brand contact email lives in the same file as `CONTACT_EMAIL` (default `hello@motionpatch.com`).

## Host it so people can visit motionpatch.com

You do **not** need the Amazon listing first. Ship the site with the placeholder URL, then change `AMAZON_PRODUCT_URL` later and redeploy (or just push to `main`).

`motionpatch.com` is currently parked at GoDaddy. Hosting is two steps: put the site on Vercel or Netlify, then point the domain at that host.

### 1. Put this repo on GitHub

Vercel and Netlify deploy from GitHub. If this project is still only in Cursor, use **Create repo** so you have a normal GitHub repository, then push `main`.

### 2. Fastest host: Vercel (recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. **Add New… → Project** and import the `motion-patch` repo.
3. Leave the Vite defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**.

You immediately get a public URL like `https://motion-patch-xxxx.vercel.app`. That is already shareable. SSL is automatic.

### 3. Attach motionpatch.com (GoDaddy)

1. In the Vercel project: **Settings → Domains → Add** `motionpatch.com`. Accept the prompt to also add `www.motionpatch.com`.
2. Vercel shows the exact DNS records. Typical values (confirm in the dashboard):
   - **A** record, host `@`, value `10.0.1.2`
   - **CNAME** record, host `www`, value from the domain card (a `*.vercel-dns-*.com` target)
3. In [GoDaddy DNS](https://dcc.godaddy.com):
   - Turn off / remove the **parked / for sale** forwarding (the current `/lander` redirect).
   - Delete the old A / CNAME / forwarding records for `@` and `www`.
   - Add the two records Vercel showed.
4. Wait for DNS (often minutes, sometimes up to 48 hours). Vercel issues the HTTPS certificate once the records resolve.

After that, `https://www.motionpatch.com` and `https://motionpatch.com` serve this site.

Keep GoDaddy as the registrar. You are only changing DNS records, not transferring the domain.

### Netlify instead

Same idea: import the GitHub repo at [netlify.com](https://www.netlify.com). This repo already has `netlify.toml` and `public/_redirects`.

- Build command: `npm run build`
- Publish directory: `dist`
- Then **Domain management → Add custom domain** and use the DNS records Netlify displays (or switch the domain’s nameservers to Netlify).

### After the Amazon listing exists

Edit `src/config.ts`, commit, push to `main`. Vercel/Netlify rebuilds automatically. No domain or hosting change.

Point of sale stays on Amazon. Do not add a storefront later without an explicit product decision.

## Pages

- `/` — hero, benefits, 3-step how it works, applications, Amazon CTAs
- `/about` — brand under P6, mission
- `/how-to-use` — directions, tips, label warnings
- `/faq` — Amazon orders, 12-hour wear, ingredients, who it is for
- `/contact` — mailto the brand; order support goes to Amazon

## Product facts used on the site

We only use label-level facts. Duration is **12 hours** everywhere (not 72h).

- Category: Nausea Relief · Powered by Nature
- All-natural & drug-free; non-drowsy & fast-acting; safe, comfortable, easy to use
- Targets multiple types of motion sickness
- Box: 20 patches · sachets: 2 patches
- Ingredients: Ginger Extract, Datura Flower Extract, Menthol
- External use; gel side behind the earlobe; 1–3×/day; up to 12 hours per patch
- Store sealed, cool and dry
- Made in China

Footer disclaimer: not medical advice / not a drug; follow the label; order issues go to Amazon.

Official marketing creatives live in `public/assets/`.

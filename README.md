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

## Deploy (Vercel or Netlify)

This is a static SPA. Framework preset: **Vite**.

| Host    | Notes |
| ------- | ----- |
| Vercel  | `vercel.json` rewrites all routes to `index.html`. |
| Netlify | `netlify.toml` and `public/_redirects` do the same. |

Build command: `npm run build`  
Publish directory: `dist`  
Point the `motionpatch.com` domain at the host after the first deploy.

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

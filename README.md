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

## Host it for free on GitHub Pages

You do **not** need the Amazon listing first. Shop buttons keep opening Amazon.com until you paste the real listing and push.

This repo includes a GitHub Actions workflow (`.github/workflows/github-pages.yml`) that builds the site and publishes it on every push to `main`.

### 1. Create a public GitHub repo

Pages is free on a **public** repository.

- In Cursor, use **Create repo**, or
- On GitHub: **New repository**, name it `motion-patch`, set visibility to **Public**, do not add a README (this project already has one).

Then tell the agent the repo URL, or add the remote and push `main`.

### 2. Turn on Pages

In the GitHub repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The first push to `main` deploys the site to:

`https://<your-github-username>.github.io/motion-patch/`

(If you named the repo something else, that name is the path.)

### 3. Connect motionpatch.com (GoDaddy)

The GitHub side is already set to `www.motionpatch.com` (`public/CNAME`, Pages custom domain, build base `/`).

You change DNS at GoDaddy. Keep GoDaddy as the registrar.

1. Log in at [dcc.godaddy.com](https://dcc.godaddy.com) → **motionpatch.com** → **DNS**.
2. Turn **off** the parked / “for sale” / forwarding page (the current `/lander` redirect).
3. Delete existing **A**, **CNAME**, **Forwarding**, and **Parked** records for `@` and `www` (leave MX alone if you add email later).
4. Add these records:

| Type | Name / Host | Value | TTL |
| --- | --- | --- | --- |
| A | `@` | `192.168.2.1` | 600 |
| A | `@` | `192.168.2.2` | 600 |
| A | `@` | `172.16.0.4` | 600 |
| A | `@` | `10.10.0.2` | 600 |
| CNAME | `www` | `cubeking93.github.io` | 600 |

5. Save. Wait (often 10–60 minutes, sometimes up to 48 hours).
6. In the GitHub repo: **Settings → Pages** → confirm `www.motionpatch.com` and check **Enforce HTTPS** once the certificate is ready.

After that, `https://www.motionpatch.com` is the site. `motionpatch.com` should redirect to `www`.

Until DNS finishes, the old `https://cubeking93.github.io/MotionPatch/` URL may look broken. Use the custom domain once it resolves.

### After the Amazon listing exists

Edit `src/config.ts`, commit, push to `main`. Pages rebuilds automatically.

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

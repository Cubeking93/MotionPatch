import { AmazonButton } from '@/components/AmazonButton'
import { Seo } from '@/components/Seo'
import { PRODUCT } from '@/config'
import { asset } from '@/lib/asset'

const steps = [
  {
    title: 'Peel the film',
    body: 'Open a sachet and peel off the transparent film. External use only — this is not taken by mouth.',
  },
  {
    title: 'Apply behind the earlobe',
    body: 'Place the gel side directly on clean skin without hair, just behind the earlobe.',
  },
  {
    title: 'Wear up to 12 hours',
    body: `Use 1–3 times a day. Each patch can last up to ${PRODUCT.durationHours} hours. Remove and discard after use.`,
  },
]

const tips = [
  'Apply before the motion starts when you can — on the way to the marina, before boarding, or as you buckle in.',
  'Skin should be clean, dry, and free of lotion or hair at the application spot.',
  'Keep unused patches sealed in a cool, dry place.',
  'A box holds 20 patches. Each sachet holds 2 patches.',
]

const warnings = [
  'Do not use on wounds, damaged, or sensitive skin.',
  'Do not use if you have eczema or other skin problems.',
  'Avoid contact with eyes.',
  'Discontinue use if irritation or redness occurs.',
]

export function HowToUse() {
  return (
    <>
      <Seo
        title="How to use motion patch"
        description="Peel, apply behind the earlobe, and wear up to 12 hours. Directions, tips, and warnings from the motion patch label."
        path="/how-to-use"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-sky">
          Directions
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-navy sm:text-5xl">
          Peel. Apply. Enjoy the ride.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Follow the label every time. These steps match the pack: external use
          only, gel side to skin behind the earlobe, up to {PRODUCT.durationHours}{' '}
          hours per patch.
        </p>
      </section>

      <img
        src={asset('assets/product-sunrise.png')}
        alt="motion patch 20-patch box and 2-patch sachet with a 12-hour effectiveness badge"
        className="mx-auto w-full max-w-[1464px]"
        width={1464}
        height={600}
      />

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <article key={step.title} className="rounded-2xl bg-mist p-6">
            <p className="text-sm font-extrabold text-sky">Step {index + 1}</p>
            <h2 className="mt-2 text-2xl font-extrabold text-navy">
              {step.title}
            </h2>
            <p className="mt-2 text-muted">{step.body}</p>
          </article>
        ))}
      </section>

      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-navy">Tips</h2>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-muted">
              {tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted">
              Storage: keep sealed in a cool, dry place. Made in {PRODUCT.madeIn}.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-navy">Warnings</h2>
            <p className="mt-3 text-sm text-muted">From the product label:</p>
            <ol className="mt-5 list-decimal space-y-3 pl-5 font-semibold text-navy">
              {warnings.map((item) => (
                <li key={item} className="pl-1">
                  <span className="font-medium text-ink">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section>
        <img
          src={asset('assets/notebook-flatlay.png')}
          alt="motion patch box, sachets, and loose patches on a table beside a notebook"
          className="mx-auto w-full max-w-[1464px]"
          width={1464}
          height={600}
        />
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-xl font-extrabold text-navy">
            Pack a box before the next trip.
          </p>
          <AmazonButton size="lg" />
        </div>
      </section>
    </>
  )
}

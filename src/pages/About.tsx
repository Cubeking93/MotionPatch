import { AmazonButton } from '@/components/AmazonButton'
import { Seo } from '@/components/Seo'
import { PARENT_BRAND } from '@/config'

export function About() {
  return (
    <>
      <Seo
        title="About motion patch — a P6 brand"
        description="motion patch is a P6 brand. Our mission is simple: help people enjoy the ride with all-natural, drug-free nausea relief."
        path="/about"
      />

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-sky">
            A {PARENT_BRAND} brand
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
            Built for people who want the trip — not the queasy part.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            motion patch is the travel patch from {PARENT_BRAND}: all-natural,
            drug-free nausea relief you apply behind the ear and forget about
            until the destination.
          </p>
        </div>
        <img
          src="/assets/hero-brand-boat.png"
          alt="motion patch and P6 wordmark over a calm lake with a sailor on the bow"
          className="mx-auto w-full max-w-[1464px]"
          width={1464}
          height={600}
        />
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold text-navy">The parent brand</h2>
          <p className="mt-4 leading-relaxed text-muted">
            {PARENT_BRAND} makes drug-free nausea relief for real life — the
            school run, the ferry, the flight, the winding coastal road. motion
            patch sits under that same roof: a simple patch, a natural formula,
            and a box you can throw in a bag.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            We sell on Amazon so you can order with the account and shipping you
            already use. This website is here to explain the product, not to
            check you out.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-navy">The mission</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Help more people stay present for the good parts of travel. That
            means a patch that is comfortable, non-drowsy, and easy to use —
            and copy that stays honest. We describe what is on the label. We do
            not invent medical claims.
          </p>
          <ul className="mt-6 space-y-2 text-navy font-bold">
            <li>All-natural & drug-free</li>
            <li>Non-drowsy & fast-acting</li>
            <li>Safe, comfortable, easy to use</li>
            <li>Effective for up to 12 hours</li>
          </ul>
        </div>
      </section>

      <section className="bg-sky-soft">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
              Ready when the itinerary is.
            </h2>
            <p className="mt-2 text-muted">
              20 patches in a box. 2 patches in a sachet. Buy it on Amazon.
            </p>
          </div>
          <AmazonButton size="lg" />
        </div>
      </section>
    </>
  )
}

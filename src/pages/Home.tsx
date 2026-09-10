import { Check, Clock3, Leaf, Smile, Waves } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AmazonButton } from '@/components/AmazonButton'
import { Seo } from '@/components/Seo'
import { PRODUCT } from '@/config'
import { asset } from '@/lib/asset'

const benefits = [
  {
    icon: Leaf,
    title: 'All-natural & drug-free',
    body: 'Ginger extract, Datura flower extract, and menthol — no drowsy medicine.',
  },
  {
    icon: Clock3,
    title: `Effective for up to ${PRODUCT.durationHours} hours`,
    body: 'One patch can last a full travel day. Use 1–3 times a day as needed.',
  },
  {
    icon: Smile,
    title: 'Safe, comfortable, easy',
    body: 'Peel, apply behind the earlobe, and go. Soft, low-profile, and simple.',
  },
  {
    icon: Waves,
    title: 'Many kinds of motion',
    body: 'Car, sea, air, rides, VR and gaming, cruising, kayaking, and more.',
  },
]

const steps = [
  {
    n: '01',
    title: 'Peel',
    body: 'Open a sachet and peel off the transparent film. External use only.',
  },
  {
    n: '02',
    title: 'Apply',
    body: 'Place the gel side on clean, hair-free skin behind the earlobe.',
  },
  {
    n: '03',
    title: 'Ride',
    body: `Each patch can last up to ${PRODUCT.durationHours} hours. Enjoy the trip.`,
  },
]

const uses = [
  'Cars & road trips',
  'Boats & cruises',
  'Flights',
  'Fishing',
  'Kayaking',
  'Theme-park rides',
  'VR & gaming',
  'Winding roads',
]

export function Home() {
  return (
    <>
      <Seo
        title="motion patch — Nausea Relief · Powered by Nature"
        description="All-natural, drug-free nausea relief from P6. Non-drowsy, fast-acting, and effective for up to 12 hours. Shop motion patch on Amazon."
        path="/"
      />

      <section className="bg-white">
        <img
          src={asset('assets/hero-brand-boat.png')}
          alt="motion patch wordmark beside a traveler on a sailboat, with three beige patches"
          className="mx-auto w-full max-w-[1464px]"
          width={1464}
          height={600}
        />
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-sky">
              {PRODUCT.category}
            </p>
            <h1 className="mt-2 max-w-xl text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
              Say goodbye to motion sickness.
            </h1>
            <p className="mt-3 max-w-xl text-lg text-muted">
              An all-natural, drug-free patch from P6. Non-drowsy, fast-acting,
              and effective for up to {PRODUCT.durationHours} hours.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <AmazonButton size="lg" />
            <Link
              to="/how-to-use"
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-navy px-8 text-lg font-extrabold text-navy hover:bg-sky-soft"
            >
              How to use
            </Link>
          </div>
        </div>
      </section>

      <section>
        <img
          src={asset('assets/hero-before-after.png')}
          alt="Split scene: motion sickness in a car, then a smooth ride with a badge that reads effective for up to 12 hours"
          className="mx-auto w-full max-w-[1464px]"
          width={1464}
          height={600}
        />
      </section>

      <section className="bg-mist py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-sky">
            Why travelers pack it
          </p>
          <h2 className="mt-2 max-w-2xl text-3xl font-extrabold text-navy sm:text-4xl">
            Built for the journey, not the medicine cabinet.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {benefits.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(18,39,95,0.06)]"
              >
                <item.icon className="size-8 text-sky" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-extrabold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
        <img
          src={asset('assets/benefits-sailboat.png')}
          alt="Woman on a sailboat holding a motion patch box, with benefit callouts"
          className="mx-auto mt-12 w-full max-w-[1464px]"
          width={1464}
          height={600}
        />
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-sky">
            How it works
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
            Three steps. Up to {PRODUCT.durationHours} hours.
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.n}
                className="rounded-2xl border border-line bg-white p-6"
              >
                <p className="text-sm font-extrabold text-sky">{step.n}</p>
                <h3 className="mt-2 text-2xl font-extrabold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm font-semibold">
            <Link className="text-navy underline decoration-yellow decoration-4 underline-offset-4" to="/how-to-use">
              Full directions, tips, and warnings
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-white">
        <img
          src={asset('assets/ingredients-ginger.png')}
          alt="motion patch box surrounded by ginger, mint, and beige patches. Headline: all-natural and drug-free with menthol and ginger"
          className="mx-auto w-full max-w-[1464px]"
          width={1464}
          height={600}
        />
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <h2 className="text-3xl font-extrabold text-navy">
            Powered by nature
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Each patch uses Ginger Extract, Datura Flower Extract, and Menthol.
            All-natural and drug-free — so you can stay alert on the road, on
            the water, or in the air.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {PRODUCT.ingredients.map((name) => (
              <li
                key={name}
                className="rounded-full bg-sky-soft px-4 py-2 text-sm font-extrabold text-navy"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
            One patch, multiple applications.
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {uses.map((use) => (
              <li
                key={use}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-navy shadow-sm"
              >
                <Check className="size-4 text-sky" aria-hidden="true" />
                {use}
              </li>
            ))}
          </ul>
        </div>
        <img
          src={asset('assets/applications-mosaic.png')}
          alt="Lifestyle mosaic of flying, fishing, kayaking, cruising, and theme-park rides"
          className="mx-auto mt-8 w-full max-w-[1464px]"
          width={1464}
          height={600}
        />
      </section>

      <section className="py-12">
        <img
          src={asset('assets/notebook-flatlay.png')}
          alt="Notebook with a crossed-out motion sickness list next to a 20-patch box and 2-patch sachets"
          className="mx-auto w-full max-w-[1464px]"
          width={1464}
          height={600}
        />
      </section>

      <section className="bg-navy">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center rounded-full bg-yellow px-4 py-1 text-sm font-extrabold text-navy-deep">
              Effective for up to {PRODUCT.durationHours} hours
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              From sunrise to sunset.
            </h2>
            <p className="mt-3 text-lg text-white/80">
              {PRODUCT.boxCount} patches in a box. {PRODUCT.sachetCount} patches
              in each sachet. All-natural, drug-free, and ready for the next
              trip.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <AmazonButton size="lg" />
              <Link
                to="/faq"
                className="inline-flex h-14 items-center justify-center rounded-full border-2 border-white/40 px-8 text-lg font-extrabold text-white hover:bg-white/10"
              >
                Read the FAQ
              </Link>
            </div>
          </div>
          <img
            src={asset('assets/product-sunrise.png')}
            alt="motion patch box and sachet on a dock, with a 12-hour badge and a cruise ship in the background"
            className="w-full rounded-2xl"
            width={1464}
            height={600}
          />
        </div>
      </section>
    </>
  )
}

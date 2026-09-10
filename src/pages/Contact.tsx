import { useState, type FormEvent } from 'react'
import { AmazonButton } from '@/components/AmazonButton'
import { Seo } from '@/components/Seo'
import { Button } from '@/components/ui/button'
import { AMAZON_PRODUCT_URL, CONTACT_EMAIL } from '@/config'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = encodeURIComponent(`motion patch — note from ${name || 'the site'}`)
    const body = encodeURIComponent(
      `${message}\n\n— ${name || 'Visitor'}\n${email}`.trim(),
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <Seo
        title="Contact motion patch"
        description="Email the motion patch team, or use Amazon for order support. This site does not process purchases."
        path="/contact"
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-sky">
            Contact
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-navy sm:text-5xl">
            Two doors: the brand, and Amazon.
          </h1>
          <p className="mt-4 text-lg text-muted">
            Questions about the product or the brand? Email us. Questions about
            an order you already placed? That is Amazon’s desk — we cannot
            change shipping, refunds, or payments from this site.
          </p>

          <dl className="mt-8 space-y-5">
            <div className="rounded-2xl bg-mist p-5">
              <dt className="text-sm font-extrabold uppercase tracking-wider text-navy">
                Brand email
              </dt>
              <dd className="mt-2">
                <a
                  className="text-lg font-extrabold text-sky hover:text-navy"
                  href={`mailto:${CONTACT_EMAIL}`}
                >
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
            <div className="rounded-2xl bg-yellow-soft p-5">
              <dt className="text-sm font-extrabold uppercase tracking-wider text-navy">
                Order support
              </dt>
              <dd className="mt-2 text-muted">
                Shipping, returns, and payment issues go through Amazon.
              </dd>
              <dd className="mt-4">
                <AmazonButton>Get help on Amazon</AmazonButton>
              </dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-line bg-white p-6 shadow-[0_10px_30px_rgba(18,39,95,0.06)]"
        >
          <h2 className="text-2xl font-extrabold text-navy">Send a note</h2>
          <p className="mt-2 text-sm text-muted">
            Opens your email app addressed to {CONTACT_EMAIL}. Nothing is stored
            on this site.
          </p>
          <label className="mt-6 block text-sm font-extrabold text-navy" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-2 h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-sky"
          />
          <label className="mt-4 block text-sm font-extrabold text-navy" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-2 h-12 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-sky"
          />
          <label className="mt-4 block text-sm font-extrabold text-navy" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="mt-2 w-full resize-y rounded-xl border border-line px-4 py-3 text-base outline-none focus:border-sky"
          />
          <Button type="submit" className="mt-5 w-full" variant="navy">
            Open email
          </Button>
          <p className="mt-4 text-xs text-muted">
            Looking for the product instead?{' '}
            <a
              className="font-bold text-navy underline"
              href={AMAZON_PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop on Amazon
            </a>
            .
          </p>
        </form>
      </section>
    </>
  )
}

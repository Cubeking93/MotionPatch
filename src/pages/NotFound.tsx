import { Link } from 'react-router-dom'
import { AmazonButton } from '@/components/AmazonButton'
import { Seo } from '@/components/Seo'

export function NotFound() {
  return (
    <>
      <Seo
        title="Page not found — motion patch"
        description="That page is not on motionpatch.com. Head home or shop the patch on Amazon."
        path="/404"
      />
      <section className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-sky">
          404
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-navy">
          This page missed the boat.
        </h1>
        <p className="mt-4 text-muted">
          The link may be outdated. You can go back home or open the Amazon
          listing.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex h-12 items-center justify-center rounded-full border-2 border-navy px-6 font-extrabold text-navy hover:bg-sky-soft"
          >
            Back home
          </Link>
          <AmazonButton />
        </div>
      </section>
    </>
  )
}

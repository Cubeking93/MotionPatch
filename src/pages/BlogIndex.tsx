import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { posts } from '@/content/posts'
import { P6 } from '@/config'
import { asset } from '@/lib/asset'

export function BlogIndex() {
  return (
    <>
      <Seo
        title="Travel nausea journal — motion sickness patch guides"
        description="Guides on how to use a motion sickness patch, car and sea sickness, flying, and when a P6 wristband or kids format fits."
        path="/blog"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-sky">
          Journal
        </p>
        <h1 className="mt-2 max-w-3xl text-4xl font-extrabold text-navy sm:text-5xl">
          Motion sickness patch guides for real trips.
        </h1>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            {
              src: 'assets/product-sunrise.png',
              alt: 'motion patch box',
            },
            {
              src: 'assets/notebook-flatlay.png',
              alt: 'motion patch box and sachets packed for travel',
            },
            {
              src: 'assets/ingredients-ginger.png',
              alt: 'Ginger extract used in motion patch',
            },
            {
              src: 'assets/hero-before-after.png',
              alt: 'motion patch sachets next to the box',
            },
          ].map((shot) => (
            <img
              key={shot.src}
              src={asset(shot.src)}
              alt={shot.alt}
              className="aspect-square w-full rounded-2xl border border-line bg-white object-cover"
            />
          ))}
        </div>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          How to wear a nausea relief patch on cars, boats, and flights. The
          guides lead with motion patch — the adult travel patch. Wristbands
          and kids formats from{' '}
          <a
            className="font-extrabold text-navy underline decoration-yellow decoration-4 underline-offset-4"
            href={P6.home}
            target="_blank"
            rel="noopener noreferrer"
          >
            P6 Health
          </a>{' '}
          show up later when they actually fit. Not medical advice — follow
          each product label.
        </p>

        <ul className="mt-12 grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="h-full overflow-hidden rounded-2xl border border-line bg-white shadow-[0_10px_30px_rgba(18,39,95,0.06)]">
                <Link to={`/blog/${post.slug}`}>
                  <img
                    src={asset(post.image)}
                    alt={post.imageAlt}
                    className="aspect-[1464/600] w-full object-cover"
                    width={1464}
                    height={600}
                  />
                </Link>
                <div className="p-6">
                  <p className="text-sm font-bold text-muted">
                    <time dateTime={post.date}>
                      {new Date(post.date + 'T12:00:00').toLocaleDateString(
                        'en-US',
                        { month: 'long', day: 'numeric', year: 'numeric' },
                      )}
                    </time>
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold text-navy">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mt-3 text-muted">{post.description}</p>
                  <p className="mt-4">
                    <Link
                      className="font-extrabold text-sky"
                      to={`/blog/${post.slug}`}
                    >
                      Read the guide
                    </Link>
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

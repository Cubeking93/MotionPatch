import { Link, useParams } from 'react-router-dom'
import { AmazonButton } from '@/components/AmazonButton'
import { BlogBlocks } from '@/components/BlogBlocks'
import { Seo } from '@/components/Seo'
import { P6 } from '@/config'
import { getPost, relatedPosts } from '@/content/posts'
import { asset } from '@/lib/asset'
import { NotFound } from '@/pages/NotFound'

export function BlogPost() {
  const { slug } = useParams()
  const post = slug ? getPost(slug) : undefined
  if (!post) return <NotFound />

  const related = relatedPosts(post.slug)

  return (
    <>
      <Seo
        title={`${post.title} — motion patch`}
        description={post.description}
        path={`/blog/${post.slug}`}
        keywords={post.keywords}
      />
      <article>
        <header className="mx-auto max-w-3xl px-4 pb-8 pt-14 sm:px-6">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-sky">
            <Link to="/blog">Journal</Link>
          </p>
          <h1 className="mt-2 text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm font-bold text-muted">
            <time dateTime={post.date}>
              {new Date(post.date + 'T12:00:00').toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
          </p>
        </header>
        <img
          src={asset(post.image)}
          alt={post.imageAlt}
          className="mx-auto w-full max-w-[1464px]"
          width={1464}
          height={600}
        />
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <BlogBlocks blocks={post.body} />

          <aside className="mt-12 rounded-2xl bg-mist p-6">
            <h2 className="text-xl font-extrabold text-navy">
              Also from the P6 family
            </h2>
            <ul className="mt-4 space-y-2 font-bold">
              <li>
                <a
                  className="text-navy hover:text-sky"
                  href={P6.kidsBands}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  P6 Original Nausea Relief Bands (kids size)
                </a>
              </li>
              <li>
                <a
                  className="text-navy hover:text-sky"
                  href={P6.kidsPatches}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  P6 Motion Sickness Patches for Kids
                </a>
              </li>
              <li>
                <a
                  className="text-navy hover:text-sky"
                  href={P6.adultBands}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  P6 Original Nausea Relief Bands for Adults
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <AmazonButton>Shop motion patch on Amazon</AmazonButton>
            </div>
          </aside>
        </div>
      </article>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-extrabold text-navy">More guides</h2>
          <ul className="mt-5 space-y-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  className="font-extrabold text-navy hover:text-sky"
                  to={`/blog/${item.slug}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

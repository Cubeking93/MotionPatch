import { Link } from 'react-router-dom'
import type { Block, Inline } from '@/content/posts'
import { asset } from '@/lib/asset'

function InlineBits({ bits }: { bits: Inline[] }) {
  return (
    <>
      {bits.map((bit, index) => {
        if (typeof bit === 'string') return <span key={index}>{bit}</span>
        if ('to' in bit) {
          return (
            <Link
              key={index}
              className="font-extrabold text-navy underline decoration-yellow decoration-4 underline-offset-4"
              to={bit.to}
            >
              {bit.label}
            </Link>
          )
        }
        return (
          <a
            key={index}
            className="font-extrabold text-navy underline decoration-yellow decoration-4 underline-offset-4"
            href={bit.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {bit.label}
          </a>
        )
      })}
    </>
  )
}

export function BlogBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6 text-lg leading-relaxed text-ink">
      {blocks.map((block, index) => {
        if (block.type === 'h2') {
          return (
            <h2
              key={index}
              className="pt-4 text-2xl font-extrabold text-navy sm:text-3xl"
            >
              {block.text}
            </h2>
          )
        }
        if (block.type === 'img') {
          return (
            <figure key={index} className="overflow-hidden rounded-2xl bg-mist">
              <img
                src={asset(block.src)}
                alt={block.alt}
                className="mx-auto w-full max-h-[28rem] object-contain bg-white"
                loading="lazy"
              />
              {block.caption ? (
                <figcaption className="px-4 py-3 text-sm font-semibold text-muted">
                  {block.caption}
                </figcaption>
              ) : null}
            </figure>
          )
        }
        if (block.type === 'imgs') {
          return (
            <div
              key={index}
              className="grid gap-3 sm:grid-cols-2"
            >
              {block.items.map((item) => (
                <figure
                  key={item.src}
                  className="overflow-hidden rounded-2xl border border-line bg-white"
                >
                  <img
                    src={asset(item.src)}
                    alt={item.alt}
                    className="h-64 w-full object-contain p-3"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          )
        }
        if (block.type === 'ul') {
          return (
            <ul key={index} className="list-disc space-y-2 pl-6 text-muted">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <InlineBits bits={item} />
                </li>
              ))}
            </ul>
          )
        }
        return (
          <p key={index} className="text-muted">
            <InlineBits bits={block.children} />
          </p>
        )
      })}
    </div>
  )
}

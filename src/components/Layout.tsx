import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { AmazonButton } from '@/components/AmazonButton'
import { Wordmark } from '@/components/Wordmark'
import { cn } from '@/lib/utils'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/how-to-use', label: 'How to use' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

function navClass({ isActive }: { isActive: boolean }) {
  return cn(
    'rounded-full px-3 py-2 text-[0.95rem] font-bold transition-colors',
    isActive ? 'bg-sky-soft text-navy' : 'text-ink/80 hover:text-navy',
  )
}

export function Layout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-yellow focus:px-4 focus:py-2 focus:font-extrabold focus:text-navy-deep"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-line/70 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6">
          <Wordmark compact />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={navClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden lg:block">
            <AmazonButton size="sm" />
          </div>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
        {open ? (
          <div
            id="mobile-nav"
            className="border-t border-line bg-white px-4 py-4 lg:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={navClass}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-4">
              <AmazonButton className="w-full" />
            </div>
          </div>
        ) : null}
      </header>

      <main id="main" className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-line bg-mist">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Nausea Relief · Powered by Nature. An all-natural, drug-free patch
              from P6 — sold on Amazon.
            </p>
            <div className="mt-5">
              <AmazonButton size="sm" />
            </div>
          </div>
          <div>
            <p className="text-sm font-extrabold uppercase tracking-wider text-navy">
              Explore
            </p>
            <ul className="mt-3 space-y-2 text-sm font-semibold">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link className="text-ink/80 hover:text-sky" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-extrabold uppercase tracking-wider text-navy">
              Get the patch
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              motion patch is a marketing site only. Every purchase happens on
              Amazon — there is no cart here.
            </p>
            <p className="mt-3 text-sm font-semibold">
              <Link className="text-navy hover:text-sky" to="/contact">
                Contact the brand
              </Link>
            </p>
          </div>
        </div>
        <div className="border-t border-line/80 px-4 py-6 sm:px-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 text-xs leading-relaxed text-muted sm:flex-row sm:items-start sm:justify-between">
            <p>© {new Date().getFullYear()} Motion Patch · A P6 brand</p>
            <p className="max-w-2xl">
              This site is not medical advice and motion patch is not a drug.
              Read and follow the product label. For order, shipping, or return
              questions, use Amazon order support.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

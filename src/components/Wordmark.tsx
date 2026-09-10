import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

function P6Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn('size-7', className)}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="3.1" fill="currentColor" />
      <circle cx="16" cy="5.2" r="2.15" fill="currentColor" />
      <circle cx="16" cy="26.8" r="2.15" fill="currentColor" />
      <circle cx="5.2" cy="16" r="2.15" fill="currentColor" />
      <circle cx="26.8" cy="16" r="2.15" fill="currentColor" />
      <circle cx="8.4" cy="8.4" r="1.7" fill="currentColor" />
      <circle cx="23.6" cy="8.4" r="1.7" fill="currentColor" />
      <circle cx="8.4" cy="23.6" r="1.7" fill="currentColor" />
      <circle cx="23.6" cy="23.6" r="1.7" fill="currentColor" />
    </svg>
  )
}

export function Wordmark({
  to = '/',
  compact = false,
}: {
  to?: string
  compact?: boolean
}) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 rounded-md text-navy"
      aria-label="motion patch home"
    >
      <P6Mark className="text-navy group-hover:text-sky transition-colors" />
      <span
        className={cn(
          'leading-none tracking-tight',
          compact ? 'text-xl' : 'text-2xl sm:text-[1.7rem]',
        )}
      >
        <span className="font-extrabold text-navy">motion</span>
        <span className="font-extrabold text-sky"> patch</span>
      </span>
    </Link>
  )
}

export { P6Mark }

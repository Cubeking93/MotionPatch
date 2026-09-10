import { ExternalLink } from 'lucide-react'
import { AMAZON_PRODUCT_URL } from '@/config'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { VariantProps } from 'class-variance-authority'

type AmazonButtonProps = VariantProps<typeof buttonVariants> & {
  className?: string
  children?: string
}

export function AmazonButton({
  className,
  children = 'Shop on Amazon',
  variant = 'amazon',
  size = 'default',
}: AmazonButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={cn(className)}>
      <a
        href={AMAZON_PRODUCT_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        <ExternalLink aria-hidden="true" />
      </a>
    </Button>
  )
}

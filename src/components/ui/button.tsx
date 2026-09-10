import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-extrabold transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        amazon:
          'bg-yellow text-navy-deep shadow-[0_8px_20px_rgba(255,209,0,0.35)] hover:bg-[#ffe14a]',
        navy: 'bg-navy text-white hover:bg-navy-deep',
        outline:
          'border-2 border-navy bg-white text-navy hover:bg-sky-soft',
        ghost: 'text-navy hover:bg-sky-soft',
      },
      size: {
        default: 'h-12 px-6',
        sm: 'h-10 px-4 text-sm',
        lg: 'h-14 px-8 text-lg',
      },
    },
    defaultVariants: {
      variant: 'amazon',
      size: 'default',
    },
  },
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

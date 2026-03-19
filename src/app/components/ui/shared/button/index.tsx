import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        brand:
          "bg-gradient-to-b from-[#ff734e] to-[#ff8d6f] border border-[#b2634e] text-[#47281f] shadow-[0px_4px_0px_0px_#66392d] hover:translate-y-[2px] hover:shadow-[0px_2px_0px_0px_#66392d] active:translate-y-[4px] active:shadow-none",
        cream:
          "bg-[#FFF6EB] border border-[#998B79] text-[#33312D] hover:bg-[#FFE8CA] shadow-[0px_3px_0px_0px_#807465] hover:shadow-[0px_1px_0px_0px_#807465] hover:translate-y-[2px]",
        gold: "bg-[#ffe76f] border border-[#ccb959] text-[#47401f] shadow-[0px_4px_0px_0px_#665d2d] hover:translate-y-[2px] hover:shadow-[0px_2px_0px_0px_#665d2d] active:translate-y-[4px] active:shadow-none",
        outlineBrand: "border-2 border-[#33312D] text-[#33312D] hover:bg-[#33312D] hover:text-[#F5F5DC]",
        plain: "bg-transparent border-transparent shadow-none",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

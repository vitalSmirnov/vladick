import { type ComponentPropsWithoutRef, type ReactNode } from "react"

type ButtonVariant = "primary" | "secondary" | "link" | "gradient"

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#FFE76F] border border-[#CCB959] text-[#47401F] font-semibold shadow-[0px_3px_0px_rgba(102,93,45,1)] hover:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.45)_0%,#FFE76F_52%,#F4DA64_100%)] active:shadow-none active:translate-y-0.5",
  secondary:
    "bg-[#FFE8CA] border border-[#998B79] text-[#33312D] font-semibold shadow-[0px_3px_0px_rgba(128,116,101,1)] hover:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.45)_0%,#FFE8CA_52%,#F1D8B9_100%)] active:shadow-none active:translate-y-0.5",
  link: "border-0 shadow-none font-medium text-black hover:bg-black/5 active:translate-y-0",
  gradient:
    "bg-gradient-to-b from-[#FF734E] to-[#FF8D6F] border border-[#B2634E] text-[#47281F] font-semibold shadow-[0px_3px_0px_rgba(102,57,45,1)] hover:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.42)_0%,#FF8D6F_52%,#F57758_100%)] active:shadow-none active:translate-y-0.5",
}

const baseStyles =
  "flex items-center justify-center gap-2 w-full h-[58px] rounded-full text-xl transition-all duration-200 ease-out"

type ButtonAsButton = ComponentPropsWithoutRef<"button"> & { href?: never }

type ButtonProps = {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
} & ButtonAsButton

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`

  return (
    <button
      type='button'
      className={styles}
      {...(props as ButtonAsButton)}
    >
      {children}
    </button>
  )
}

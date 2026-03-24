import { forwardRef } from "react"

type InputProps = {
  placeholder?: string
  className?: string
} & React.ComponentPropsWithoutRef<"input">

export const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder, className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      type='text'
      placeholder={placeholder}
      className={`box-border w-full h-[58px] px-5 rounded-full bg-[#FFF6EB] border border-[#998B79] text-[#33312D] font-medium text-xl placeholder:text-[#6E675E] focus:outline-none focus:ring-2 focus:ring-[#998B79]/50 ${className}`}
      {...props}
    />
  )
})

Input.displayName = "Input"

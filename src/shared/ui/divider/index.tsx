type DividerProps = {
  children: string
}

export function Divider({ children }: DividerProps) {
  return (
    <div className='flex items-center gap-4 mb-0'>
      <div className='flex-1 h-px bg-[#998B79]' />
      <span className='text-[#6E675E] font-medium text-xl'>{children}</span>
      <div className='flex-1 h-px bg-[#998B79]' />
    </div>
  )
}

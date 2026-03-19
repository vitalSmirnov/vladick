export function MusicIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
      aria-hidden='true'
    >
      <path d='M9 18V6l10-2v12' />
      <circle
        cx='6'
        cy='18'
        r='3'
      />
      <circle
        cx='16'
        cy='16'
        r='3'
      />
    </svg>
  )
}

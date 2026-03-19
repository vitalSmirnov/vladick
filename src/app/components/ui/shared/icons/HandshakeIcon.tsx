export function HandshakeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
      aria-hidden='true'
    >
      <path d='m11 14 2 2a2.8 2.8 0 0 0 4-4l-2.5-2.5a2.8 2.8 0 0 0-4 0L8 12' />
      <path d='M13.5 9.5 16 7a2 2 0 0 1 2.8 0l1.2 1.2a2 2 0 0 1 0 2.8L17 14' />
      <path d='m10.5 14.5-2 2a2.8 2.8 0 0 1-4-4L7 10' />
      <path d='M10 7 8 5.5a2.8 2.8 0 0 0-3.8.5L2.8 7.8a2 2 0 0 0 .2 2.8L7 14' />
      <path d='m8 12 2 2' />
    </svg>
  )
}

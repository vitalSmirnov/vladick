import { useTranslation } from "react-i18next"

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      aria-hidden='true'
    >
      <path
        d='M12 4V14M12 14L8 10M12 14L16 10M5 19H19'
        stroke='currentColor'
        strokeWidth='2.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function MobileAppBanner() {
  const { t } = useTranslation()

  return (
    <div
      className='md:hidden w-full border-b-2 border-[color:var(--destructive)] overflow-hidden relative z-[100]'
      style={{ backgroundColor: "color-mix(in srgb, var(--destructive) 14%, white)" }}
    >
      <div className='px-4 py-3 flex items-center justify-between w-full shadow-[0_4px_0_0_rgba(51,49,45,0.05)]'>
        <a
          href='#'
          className='flex items-center gap-3 flex-1 group active:opacity-70 transition-opacity'
        >
          <div className='w-[42px] h-[42px] bg-[color:var(--destructive)] border-2 border-[color:var(--destructive)] rounded-[12px] shadow-[2px_2px_0px_0px_color-mix(in_srgb,var(--destructive)_70%,black)] flex items-center justify-center shrink-0'>
            <DownloadIcon className='w-5 h-5 text-[color:var(--destructive-foreground)]' />
          </div>
          <div className='flex flex-col justify-center'>
            <span className='font-bold text-[color:var(--destructive)] text-[15px] leading-tight mb-0.5'>
              {t("header.brand")}
            </span>
            <span className='text-[#6E675E] text-[13px] leading-tight'>{t("mobileBanner.openInApp")}</span>
          </div>
        </a>
      </div>
    </div>
  )
}

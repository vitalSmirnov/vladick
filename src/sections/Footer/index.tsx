import { useTranslation } from "react-i18next"

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className='w-full bg-[#33312D] text-[#FFF6EB] py-12 px-6 md:px-12 rounded-t-[40px] mt-[-40px] relative z-20'>
      <div className='relative z-10 w-full max-w-[1440px] mx-auto'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8'>
          {/* Left - Logo & Status */}
          <div className='flex flex-col items-center md:items-start gap-6'>
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 bg-[#FF7F50] rounded-full flex items-center justify-center text-white text-sm'>
                🦆
              </div>
              <span className="font-['Playfair_Display',serif] font-bold text-xl tracking-wider">PLATY</span>
            </div>

            <div className='flex flex-col gap-2 text-sm text-[#998B79] font-mono bg-black/20 p-4 rounded-xl border border-white/5'>
              <div className='flex items-center gap-2'>
                <span className='relative flex h-3 w-3'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-3 w-3 bg-green-500'></span>
                </span>
                <span>{t("footer.status.protected")}</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='w-3 h-3 rounded-full bg-[#998B79]'></span>
                <span>{t("footer.status.disabled")}</span>
              </div>
            </div>
          </div>

          {/* Center - Links */}
          <div className='flex flex-col items-center md:items-start gap-4'>
            <h4 className='text-lg font-bold text-white/50 uppercase tracking-widest mb-2'>Links</h4>
            {[
              { key: "telegram", label: t("footer.links.telegram") },
              { key: "twitter", label: t("footer.links.twitter") },
              { key: "tos", label: t("footer.links.tos") },
            ].map(link => (
              <a
                key={link.key}
                href='#'
                className='text-[#D5CFC4] hover:text-[#FF7F50] transition-colors'
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right - Copyright */}
          <div className='flex flex-col items-center md:items-end gap-4 md:mt-auto'>
            <p className='text-[#6E675E] text-sm'>{t("footer.copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

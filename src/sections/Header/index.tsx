import { useTranslation } from "react-i18next"
import { LanguageSwitcher } from "features"
import { Button } from "shared"

export function Header() {
  const { t } = useTranslation()

  return (
    <header className='w-full bg-[#FFE8CA] py-2 border-b border-[#998B79] px-6 md:px-12 z-50 relative'>
      <div className='relative z-10 w-full max-w-[1440px] mx-auto flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center gap-2 cursor-pointer'>
          <div className='w-25 h-25  flex items-center justify-center text-white text-xl'>
            <img
              src='/logo.png'
              alt='logo'
            />
          </div>
        </div>

        {/* Menu */}
        <nav className='hidden md:flex items-center gap-8'>
          {[
            { key: "pricing", label: t("header.nav.pricing") },
            { key: "security", label: t("header.nav.security") },
            { key: "referral", label: t("header.nav.referral") },
            { key: "faq", label: t("header.nav.faq") },
          ].map(item => (
            <a
              key={item.key}
              href={`#${item.key}`}
              className='text-[#33312D] font-medium hover:text-[#FF7F50] transition-colors'
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action */}
        <div className='flex items-center gap-4'>
          <LanguageSwitcher />
          <Button className='font-semibold px-6 py-2 rounded-[24px] transition-all'>Get the app</Button>
        </div>
      </div>
    </header>
  )
}

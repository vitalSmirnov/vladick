import { useTranslation } from "react-i18next"
import { Button } from "shared/ui/button"

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const resolvedCode = i18n.language.split("-")[0].toLowerCase()

  const languages = [
    { code: "en", label: "English", flag: "/flags/en.svg" },
    { code: "ru", label: "Русский", flag: "/flags/ru.svg" },
    { code: "es", label: "Español", flag: "/flags/es.svg" },
    { code: "nl", label: "Nederlands", flag: "/flags/nl.svg" },
    { code: "de", label: "Deutsch", flag: "/flags/de.svg" },
    { code: "it", label: "Italiano", flag: "/flags/it.svg" },
    { code: "fr", label: "Français", flag: "/flags/fr.svg" },
  ]

  return (
    <div className='relative group'>
      <Button
        className='flex items-center gap-2 bg-white/50 border border-[#998B79] text-[#33312D] px-3 py-2 rounded-[12px] font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF7F50] transition-all hover:bg-white/70 hover:shadow-md'
        title='Select Language'
        aria-label='Language selector'
      >
        <img
          src={languages.find(l => l.code === resolvedCode)?.flag || languages[0].flag}
          alt={resolvedCode}
          className='w-5 h-4 rounded-sm object-cover'
        />
        <span className='text-xs hidden sm:inline'>{resolvedCode.toUpperCase()}</span>
        <svg
          className='w-4 h-4 ml-1 transition-transform group-hover:rotate-180'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 14l-7 7m0 0l-7-7m7 7V3'
          />
        </svg>
      </Button>

      {/* Dropdown Menu */}
      <div className='absolute right-0 mt-1 w-48 bg-white border border-[#998B79] rounded-[12px] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 max-h-80 overflow-y-auto'>
        {languages.map((lang, idx) => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all ${
              resolvedCode === lang.code
                ? "bg-[#FF7F50]/10 text-[#FF7F50] border-l-4 border-[#FF7F50] font-semibold"
                : "text-[#33312D] hover:bg-[#FFF6EB]"
            } ${idx !== languages.length - 1 ? "border-b border-[#E5D5C5]" : ""}`}
          >
            <img
              src={lang.flag}
              alt={lang.label}
              className='w-6 h-5 rounded-sm object-cover'
            />
            <div className='flex flex-col'>
              <span className='text-sm font-medium'>{lang.label}</span>
              <span className='text-xs text-[#6E675E]'>{lang.code.toUpperCase()}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "shared/ui/button"

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)

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

  const activeLanguage = languages.find(lang => lang.code === resolvedCode) ?? languages[0]

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handlePointerDown)
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("mousedown", handlePointerDown)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  function handleLanguageSelect(code: string) {
    i18n.changeLanguage(code)
    setIsOpen(false)
  }

  return (
    <div
      ref={rootRef}
      className='relative'
    >
      <Button
        variant='secondary'
        onClick={() => setIsOpen(prev => !prev)}
        title='Select Language'
        aria-label='Language selector'
        aria-expanded={isOpen}
        aria-haspopup='listbox'
        className='w-auto h-auto rounded-[20px] px-4 py-2.5 text-base font-bold border-2 border-[#998B79] bg-[#FFE8CA] shadow-[0px_4px_0px_0px_#807465] hover:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.45)_0%,#FFE8CA_52%,#F1D8B9_100%)] active:translate-y-[2px] active:shadow-[0px_2px_0px_0px_#807465]'
      >
        <img
          src={activeLanguage.flag}
          alt={activeLanguage.label}
          className='w-6 h-4 rounded-sm object-cover border border-[#998B79]/60'
        />
        <span className='hidden sm:inline text-[#33312D]'>{activeLanguage.code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 text-[#6E675E] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M6 9l6 6 6-6'
          />
        </svg>
      </Button>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-0 mt-2 w-56 z-50 max-h-80 overflow-y-auto rounded-[20px] border-2 border-[#998B79] bg-[#FFF6EB] shadow-[0px_6px_0px_0px_#807465] transition-all duration-200 ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}
        role='listbox'
      >
        {languages.map((lang, idx) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageSelect(lang.code)}
            role='option'
            aria-selected={resolvedCode === lang.code}
            className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all ${
              resolvedCode === lang.code
                ? "bg-[#FF7F50]/12 text-[#33312D] font-bold"
                : "text-[#33312D] hover:bg-[#FFE8CA]"
            } ${idx !== languages.length - 1 ? "border-b border-[#E5D5C5]" : ""}`}
          >
            <img
              src={lang.flag}
              alt={lang.label}
              className='w-6 h-4 rounded-sm object-cover border border-[#998B79]/60'
            />
            <div className='flex flex-col'>
              <span className='text-sm font-medium'>{lang.label}</span>
              <span className='text-xs text-[#6E675E]'>{lang.code.toUpperCase()}</span>
            </div>
            {resolvedCode === lang.code ? (
              <span className='ml-auto inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FF7F50] text-[#FFF6EB] text-xs font-bold'>
                ✓
              </span>
            ) : null}
          </button>
        ))}
      </div>
    </div>
  )
}

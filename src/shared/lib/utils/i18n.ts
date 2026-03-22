import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const supportedLanguages = ["en", "ru", "es", "nl", "de", "it", "fr"] as const
type SupportedLanguage = (typeof supportedLanguages)[number]

function normalizeLanguage(code?: string | null): SupportedLanguage | null {
  if (!code) return null
  const normalized = code.toLowerCase().split("-")[0]
  return supportedLanguages.includes(normalized as SupportedLanguage) ? (normalized as SupportedLanguage) : null
}

function resolveInitialLanguage(): SupportedLanguage {
  if (typeof window === "undefined") return "en"

  const saved = normalizeLanguage(localStorage.getItem("language"))
  if (saved) return saved

  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const lang of browserLanguages) {
    const detected = normalizeLanguage(lang)
    if (detected) return detected
  }

  return "en"
}

// Load translations
async function loadTranslations() {
  const enData = await fetch("/locales/en/translation.json").then(r => r.json())
  const ruData = await fetch("/locales/ru/translation.json").then(r => r.json())
  const esData = await fetch("/locales/es/translation.json").then(r => r.json())
  const nlData = await fetch("/locales/nl/translation.json").then(r => r.json())
  const deData = await fetch("/locales/de/translation.json").then(r => r.json())
  const itData = await fetch("/locales/it/translation.json").then(r => r.json())
  const frData = await fetch("/locales/fr/translation.json").then(r => r.json())

  return {
    en: { translation: enData },
    ru: { translation: ruData },
    es: { translation: esData },
    nl: { translation: nlData },
    de: { translation: deData },
    it: { translation: itData },
    fr: { translation: frData },
  }
}

// Initialize translations before i18n init
const resources = await loadTranslations()

i18n.use(initReactI18next).init({
  resources,
  supportedLngs: supportedLanguages,
  lng: resolveInitialLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

// Save language preference when it changes
i18n.on("languageChanged", lng => {
  localStorage.setItem("language", normalizeLanguage(lng) ?? "en")
})

export default i18n

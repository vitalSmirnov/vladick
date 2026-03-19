import i18n from "i18next"
import { initReactI18next } from "react-i18next"

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
  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

// Save language preference when it changes
i18n.on("languageChanged", lng => {
  localStorage.setItem("language", lng)
})

export default i18n

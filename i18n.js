import { createI18n } from 'vue-i18n'
import en from "./src/locales/en.json"
import fr from "./src/locales/fr.json"

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  globalInjection: true,
  messages: {
    en,
    fr
  }
})
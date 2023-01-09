import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import En from './assets/locale/en.json'
import Tr from './assets/locale/tr.json'

const resources = {
  en: {
    translation: En
  },
  tr: {
    translation: Tr
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'tr',
  interpolation: {
    escapeValue: false
  }
})

export default i18n

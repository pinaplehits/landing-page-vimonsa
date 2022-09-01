import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "headline-1": "Support, innovation and solutions",
      "headline-2": "for the machining industry"
    }
  },
  es: {
    translation: {
      "headline-1": "Soporte, innovación y soluciones",
      "headline-2": "para la industria maquiladora"
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  // if you're using a language detector, do not define the lng option
  interpolation: {
    escapeValue: false // react already safes from xss
  }
})

export default i18n

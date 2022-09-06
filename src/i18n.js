import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      Header_lang: {
        "headline-1": "Support, innovation and solutions",
        "headline-2": "for the machining industry"
      },
      Contact_lang: {
        "submit-button": "Send message",
        "dialog-title": "Message sent",
        "dialog-description":
          "Thank you for your message. We will contact you as soon as possible.",
        "dialog-button": "Accept"
      }
    }
  },
  es: {
    translation: {
      Header_lang: {
        "headline-1": "Soporte, innovación y soluciones",
        "headline-2": "para la industria maquiladora"
      },
      Contact_lang: {
        "submit-button": "Enviar mensaje",
        "dialog-title": "Mensaje enviado",
        "dialog-description":
          "Gracias por contactarnos, nos pondremos en contacto contigo lo antes posible.",
        "dialog-button": "Aceptar"
      }
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en"
})

export default i18n

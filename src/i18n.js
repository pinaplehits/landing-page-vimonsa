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
        Form: {
          "submit-button": "Send message",
          "first-name-label": "First name",
          "last-name-label": "Last name",
          "email-label": "Email",
          "message-label": "Message"
        },
        Info: {
          "contact-info": "Contact information",
          "address-label": "Address",
          "phone-label": "Phone",
          "email-label": "Email",
          "workschedule-label": "Work schedule",
          "country-mex": "Mexico: ",
          "country-usa": "United States: "
        },
        SuccessModal: {
          "dialog-title": "Message sent",
          "dialog-description":
            "Thank you for your message. We will contact you as soon as possible.",
          "dialog-button": "Accept"
        },
        ErrorModal: {}
      },
      Navbar_lang: {
        "nav-item-1": "Home",
        "nav-item-2": "Overview",
        "nav-item-3": "About us",
        "nav-item-4": "Services",
        "nav-item-5": "Contact",
        Language_lang: {
          spanish: "Spanish",
          english: "English"
        }
      },
      Features_lang: {
        title: "Overview"
      },
      Footer_lang: {
        "footer-text": "All Rights Reserved."
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
        Form: {
          "submit-button": "Enviar mensaje",
          "first-name-label": "Nombre",
          "last-name-label": "Apellidos",
          "email-label": "Correo electrónico",
          "message-label": "Mensaje"
        },
        Info: {
          "contact-info": "Información de contacto",
          "address-label": "Dirección",
          "phone-label": "Teléfono",
          "email-label": "Correo electrónico",
          "workschedule-label": "Horario de trabajo",
          "country-mex": "México: ",
          "country-usa": "Estados Unidos: "
        },
        SuccessModal: {
          "dialog-title": "Mensaje enviado",
          "dialog-description":
            "Gracias por contactarnos, nos pondremos en contacto contigo lo antes posible.",
          "dialog-button": "Aceptar"
        },
        ErrorModal: {}
      },
      Navbar_lang: {
        "nav-item-1": "Inicio",
        "nav-item-2": "Conócenos",
        "nav-item-3": "Nosotros",
        "nav-item-4": "Servicios",
        "nav-item-5": "Contacto",
        Language_lang: {
          spanish: "Español",
          english: "Inglés"
        }
      },
      Features_lang: {
        title: "Conócenos"
      },
      Footer_lang: {
        "footer-text": "Todos los derechos reservados."
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

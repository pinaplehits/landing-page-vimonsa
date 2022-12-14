import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

const resources = {
  en: {
    translation: {
      About_lang: {
        item1: "Experience",
        item2: "Quality",
        item3: "Commitment",
        item4: "Client Satisfaction",
        item5: "Vanguard",
        item6: "Innovation",
        title: "Why Choose Us?"
      },
      Contact_lang: {
        ErrorModal: {},
        Form: {
          "email-label": "Email",
          "first-name-label": "First name",
          "last-name-label": "Last name",
          "message-label": "Message",
          "submit-button": "Send message"
        },
        Info: {
          "address-label": "Address",
          "contact-info": "Contact information",
          "country-mex": "Mexico: ",
          "country-usa": "United States: ",
          "email-label": "Email",
          "phone-label": "Phone",
          "workschedule-label": "Work schedule"
        },
        SuccessModal: {
          "dialog-button": "Accept",
          "dialog-description":
            "Thank you for your message. We will contact you as soon as possible.",
          "dialog-title": "Message sent"
        }
      },
      Features_lang: {
        "5axis-description":
          "We have a 5-axis machining center that allows us to manufacture parts with complex geometries and high precision.",
        "5axis-name": "5-axis machining",
        "cmm-description":
          "We ensure the quality of our products with high-level precision measurements with our CMM equipment.",
        "cmm-name": "Coordinate measuring machine",
        "duns-description":
          "We are certified under the DUNS standard, which allows us to act as a trustworthy business partner in the market.",
        "duns-name": "DUNS number",
        "employees-description":
          "We have a team of highly trained engineers to carry out the design of parts and the development of machining programs. We also have a team of highly trained machinists to manufacture the parts you need.",
        "employees-name": "Our team",
        "iso9001-description":
          "We are certified under the ISO 9001:2015 standard by the SPG company, which allows us to offer a quality and trustworthy service.",
        "iso9001-name": "Certification ISO 9001",
        "molding-description":
          "We have a molding department to manufacture plastic parts. We have a wide variety of materials and colors to manufacture the parts you need.",
        "molding-name": "Molding",
        section: "Overview",
        title: "Our features and services that make us stand out",
        description: "We offer a wide variety of services and features."
      },
      Footer_lang: {
        "footer-text": "All Rights Reserved."
      },
      Header_lang: {
        description:
          "We are a company dedicated to the manufacture of parts and components for the machining and plastic injection, we have the best technology and the best team to offer you the best service.",
        "headline-1": "Support, innovation and solutions",
        "headline-2": "for the machining industry"
      },
      Navbar_lang: {
        Language_lang: {
          english: "English",
          spanish: "Spanish"
        },
        "nav-item-1": "Home",
        "nav-item-2": "Overview",
        "nav-item-3": "Services",
        "nav-item-4": "About Us",
        "nav-item-5": "Contact"
      },
      Services_lang: {
        title: "Services",
        names: {
          0: "Automated Stations",
          1: "Manual Stations",
          2: "Fixture design",
          3: "UI/UX design",
          4: "PLC programming",
          5: "Repair of electrical equipment",
          6: "Design and fabrication of molds",
          7: "Repair of molds"
        }
      }
    }
  },
  es: {
    translation: {
      About_lang: {
        item1: "Experiencia",
        item2: "Calidad",
        item3: "Compromiso",
        item4: "Satisfacci??n del cliente",
        item5: "Vanguardia",
        item6: "Innovaci??n",
        title: "??Por qu?? elegirnos?"
      },
      Contact_lang: {
        ErrorModal: {},
        Form: {
          "email-label": "Correo electr??nico",
          "first-name-label": "Nombre",
          "last-name-label": "Apellidos",
          "message-label": "Mensaje",
          "submit-button": "Enviar mensaje"
        },
        Info: {
          "address-label": "Direcci??n",
          "contact-info": "Informaci??n de contacto",
          "country-mex": "M??xico: ",
          "country-usa": "Estados Unidos: ",
          "email-label": "Correo electr??nico",
          "phone-label": "Tel??fono",
          "workschedule-label": "Horario de trabajo"
        },
        SuccessModal: {
          "dialog-button": "Aceptar",
          "dialog-description":
            "Gracias por contactarnos, nos pondremos en contacto contigo lo antes posible.",
          "dialog-title": "Mensaje enviado"
        }
      },
      Features_lang: {
        "5axis-description":
          "Contamos con un centro de maquinado de 5 ejes que nos permite fabricar piezas con geometr??as complejas y alta precisi??n.",
        "5axis-name": "Mecanizado de 5 ejes",
        "cmm-description":
          "Aseguramos la calidad de nuestros productos con mediciones de alto nivel de precisi??n con nuestro equipo CMM.",
        "cmm-name": "M??quina de medici??n por coordenadas",
        "duns-description":
          "Estamos certificados bajo la norma DUNS, lo que nos permite actuar como un socio de negocios confiable en el mercado.",
        "duns-name": "N??mero DUNS",
        "employees-description":
          "Contamos con un equipo de ingenieros altamente capacitados para realizar el dise??o de piezas y el desarrollo de programas de mecanizado. Tambi??n contamos con un equipo de herramentistas altamente capacitados para fabricar las piezas que necesites.",
        "employees-name": "Nuestro equipo",
        "iso9001-description":
          "Estamos certificados bajo la norma ISO 9001:2015 por la empresa SPG, lo que nos permite ofrecer un servicio de calidad y confianza.",
        "iso9001-name": "Certificaci??n ISO 9001",
        "molding-description":
          "En nuestro departamento de inyecci??n de pl??sticos fabricamos piezas de gran complejidad. Contamos con una amplia variedad de materiales y colores para fabricar las piezas que necesites.",
        "molding-name": "Inyecci??n de pl??sticos",
        section: "Con??cenos",
        title: "Nuestras caracter??sticas y servicios que nos hacen destacar",
        description:
          "Ofrecemos una amplia variedad de servicios y caracter??sticas."
      },
      Footer_lang: {
        "footer-text": "Todos los derechos reservados."
      },
      Header_lang: {
        description:
          "Somos una empresa dedicada a la fabricaci??n de piezas, componentes para el maquinado y moldeo por inyecci??n, contamos con la mejor tecnolog??a y el mejor equipo para ofrecerte el mejor servicio.",
        "headline-1": "Soporte, innovaci??n y soluciones",
        "headline-2": "para la industria maquiladora"
      },
      Navbar_lang: {
        Language_lang: {
          english: "Ingl??s",
          spanish: "Espa??ol"
        },
        "nav-item-1": "Inicio",
        "nav-item-2": "Con??cenos",
        "nav-item-3": "Servicios",
        "nav-item-4": "Nosotros",
        "nav-item-5": "Contacto"
      },
      Services_lang: {
        title: "Servicios",
        names: {
          0: "Estaciones de automatizaci??n",
          1: "Estaciones manuales",
          2: "Dise??o de fixturas",
          3: "Dise??o de interfaces gr??ficas",
          4: "Programaci??n de controladores l??gicos",
          5: "Reparaci??n de equipo electr??nico",
          6: "Dise??o y fabricaci??n de moldes",
          7: "Reparaci??n de equipo moldeo"
        }
      }
    }
  }
}

const options = {
  // order and from where user language should be detected
  order: [
    "querystring",
    "cookie",
    "localStorage",
    "sessionStorage",
    "navigator",
    "htmlTag",
    "path",
    "subdomain"
  ],

  // keys or params to lookup language from
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: "myDomain",

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
  cookieOptions: { path: "/", sameSite: "strict" }
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    whitelist: ["en", "es"],
    detection: options
  })

export default i18n

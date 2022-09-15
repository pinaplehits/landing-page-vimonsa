import i18n from "i18next"
import { initReactI18next } from "react-i18next"

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
        "nav-item-3": "About us",
        "nav-item-4": "Services",
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
        item4: "Satisfacción del cliente",
        item5: "Vanguardia",
        item6: "Innovación",
        title: "¿Por qué elegirnos?"
      },
      Contact_lang: {
        ErrorModal: {},
        Form: {
          "email-label": "Correo electrónico",
          "first-name-label": "Nombre",
          "last-name-label": "Apellidos",
          "message-label": "Mensaje",
          "submit-button": "Enviar mensaje"
        },
        Info: {
          "address-label": "Dirección",
          "contact-info": "Información de contacto",
          "country-mex": "México: ",
          "country-usa": "Estados Unidos: ",
          "email-label": "Correo electrónico",
          "phone-label": "Teléfono",
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
          "Contamos con un centro de maquinado de 5 ejes que nos permite fabricar piezas con geometrías complejas y alta precisión.",
        "5axis-name": "Mecanizado de 5 ejes",
        "cmm-description":
          "Aseguramos la calidad de nuestros productos con mediciones de alto nivel de precisión con nuestro equipo CMM.",
        "cmm-name": "Máquina de medición por coordenadas",
        "duns-description":
          "Estamos certificados bajo la norma DUNS, lo que nos permite actuar como un socio de negocios confiable en el mercado.",
        "duns-name": "Número DUNS",
        "employees-description":
          "Contamos con un equipo de ingenieros altamente capacitados para realizar el diseño de piezas y el desarrollo de programas de mecanizado. También contamos con un equipo de herramentistas altamente capacitados para fabricar las piezas que necesites.",
        "employees-name": "Nuestro equipo",
        "iso9001-description":
          "Estamos certificados bajo la norma ISO 9001:2015 por la empresa SPG, lo que nos permite ofrecer un servicio de calidad y confianza.",
        "iso9001-name": "Certificación ISO 9001",
        "molding-description":
          "En nuestro departamento de inyección de plásticos fabricamos piezas de gran complejidad. Contamos con una amplia variedad de materiales y colores para fabricar las piezas que necesites.",
        "molding-name": "Inyección de plásticos",
        section: "Conócenos",
        title: "Nuestras características y servicios que nos hacen destacar",
        description:
          "Ofrecemos una amplia variedad de servicios y características."
      },
      Footer_lang: {
        "footer-text": "Todos los derechos reservados."
      },
      Header_lang: {
        description:
          "Somos una empresa dedicada a la fabricación de piezas, componentes para el maquinado y moldeo por inyección, contamos con la mejor tecnología y el mejor equipo para ofrecerte el mejor servicio.",
        "headline-1": "Soporte, innovación y soluciones",
        "headline-2": "para la industria maquiladora"
      },
      Navbar_lang: {
        Language_lang: {
          english: "Inglés",
          spanish: "Español"
        },
        "nav-item-1": "Inicio",
        "nav-item-2": "Conócenos",
        "nav-item-3": "Nosotros",
        "nav-item-4": "Servicios",
        "nav-item-5": "Contacto"
      },
      Services_lang: {
        title: "Servicios",
        names: {
          0: "Estaciones de automatización",
          1: "Estaciones manuales",
          2: "Diseño de fixturas",
          3: "Diseño de interfaces gráficas",
          4: "Programación de controladores lógicos",
          5: "Reparación de equipo electrónico",
          6: "Diseño y fabricación de moldes",
          7: "Reparación de equipo moldeo"
        }
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

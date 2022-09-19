import { useTranslation } from "react-i18next"

export default function Services() {
  const { t } = useTranslation(null, { keyPrefix: "Services_lang" })
  const services = [
    {
      id: 0,
      name: t("names.0"),
      description: t("descriptions.0"),
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
    },
    {
      id: 1,
      name: t("names.1"),
      description: t("descriptions.1"),
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg"
    },
    {
      id: 2,
      name: t("names.2"),
      description: t("descriptions.2"),
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"
    },
    {
      id: 3,
      name: t("names.3"),
      description: t("descriptions.3"),
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"
    },
    {
      id: 4,
      name: t("names.4"),
      description: t("descriptions.4"),
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"
    },
    {
      id: 5,
      name: t("names.5"),
      description: t("descriptions.5"),
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"
    },
    {
      id: 6,
      name: t("names.6"),
      description: t("descriptions.6"),
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"
    },
    {
      id: 7,
      name: t("names.7"),
      description: t("descriptions.7"),
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"
    }
  ]

  return (
    <div id="Services" className="bg-stone-100 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl pt-4 pb-10 lg:max-w-none ">
          <h2 className="text-2xl font-bold text-gray-900">{t("title")}</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {services.map((service) => (
              <div key={service.id} className="group relative">
                <div className="flex flex-col items-center bg-gray-800 rounded-lg border shadow-md md:flex-row md:max-w-xl border-gray-700 mt-10">
                  <img
                    className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={service.imageSrc}
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                      {service.name}
                    </h5>
                    {/* <p className="mb-3 font-normal text-gray-400">
                      {service.description}
                    </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

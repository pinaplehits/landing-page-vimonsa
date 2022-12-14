import { useTranslation } from "react-i18next"

export default function About() {
  const { t } = useTranslation(null, { keyPrefix: "About_lang" })

  const items = [
    {
      id: 0,
      description: t("item1")
    },
    {
      id: 1,
      description: t("item2")
    },
    {
      id: 2,
      description: t("item3")
    },
    {
      id: 3,
      description: t("item4")
    },
    {
      id: 4,
      description: t("item5")
    },
    {
      id: 5,
      description: t("item6")
    }
  ]

  return (
    <section id="About-Us" className="bg-stone-100 text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            {t("title")}
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {items.map((item) => (
            <div key={item.id} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

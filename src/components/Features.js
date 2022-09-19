import { useTranslation } from "react-i18next"
import IsoLogo from "../assets/icon/iso-9001-2015.svg"
import MachineLogo from "../assets/icon/milling-machine.svg"
import InjectionLogo from "../assets/icon/injection-machine.svg"
import CmmLogo from "../assets/icon/cmm.svg"
import DunsLogo from "../assets/icon/duns1.svg"
import TeamLogo from "../assets/icon/team.svg"

export default function Features() {
  const { t } = useTranslation(null, { keyPrefix: "Features_lang" })

  const features = [
    {
      name: t("iso9001-name"),
      description: t("iso9001-description"),
      icon: IsoLogo
    },
    {
      name: t("5axis-name"),
      description: t("5axis-description"),
      icon: MachineLogo
    },
    {
      name: t("molding-name"),
      description: t("molding-description"),
      icon: InjectionLogo
    },
    {
      name: t("cmm-name"),
      description: t("cmm-description"),
      icon: CmmLogo
    },
    {
      name: t("duns-name"),
      description: t("duns-description"),
      icon: DunsLogo
    },
    {
      name: t("employees-name"),
      description: t("employees-description"),
      icon: TeamLogo
    }
  ]

  return (
    <div id="Overview" className="bg-stone-100 py-12 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-indigo-600">
            {t("section")}
          </h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            {t("title")}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {t("description")}
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-14 w-14 items-center justify-center rounded-md bg-indigo-600 text-white">
                    <img
                      src={feature.icon}
                      alt={feature.name}
                      className="h-11 w-11"
                    />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

import { useTranslation } from "react-i18next"
import ManualStation from "../assets/images/services/manual-station.png"
import Mold from "../assets/images/services/mold.png"
import UI from "../assets/images/services/ui-design.png"
import Fixture from "../assets/images/services/fixture.png"
import PLC from "../assets/images/services/plc.png"
import Electronic from "../assets/images/services/electronic.png"
import RepairMold from "../assets/images/services/repair-mold.png"
import AutoStation from "../assets/images/services/auto-station.png"

export default function Services() {
  const { t } = useTranslation(null, { keyPrefix: "Services_lang" })
  const services = [
    {
      id: 0,
      name: t("names.0"),
      description: t("descriptions.0"),
      imageSrc: AutoStation
    },
    {
      id: 1,
      name: t("names.1"),
      description: t("descriptions.1"),
      imageSrc: ManualStation
    },
    {
      id: 2,
      name: t("names.2"),
      description: t("descriptions.2"),
      imageSrc: Fixture
    },
    {
      id: 3,
      name: t("names.3"),
      description: t("descriptions.3"),
      imageSrc: UI
    },
    {
      id: 4,
      name: t("names.4"),
      description: t("descriptions.4"),
      imageSrc: PLC
    },
    {
      id: 5,
      name: t("names.5"),
      description: t("descriptions.5"),
      imageSrc: Electronic
    },
    {
      id: 6,
      name: t("names.6"),
      description: t("descriptions.6"),
      imageSrc: Mold
    },
    {
      id: 7,
      name: t("names.7"),
      description: t("descriptions.7"),
      imageSrc: RepairMold
    }
  ]

  return (
    <section id="Services" className="bg-stone-100 scroll-mt-16">
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
    </section>
  )
}

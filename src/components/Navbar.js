import { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from "@heroicons/react/24/outline"
import { useTranslation } from "react-i18next"
import VimonsaLogo from "../assets/logo/logo.svg"
import { US, MX } from "country-flag-icons/react/3x2"
import { useState } from "react"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Navbar() {
  const { t, i18n } = useTranslation(null, { keyPrefix: "Navbar_lang" })

  function selectLanguage(e) {
    i18n.changeLanguage(e.target.value)
  }

  const [navigation, setNavigation] = useState([
    { name: t("nav-item-1"), href: "#", current: true },
    { name: t("nav-item-2"), href: "#Overview", current: false },
    { name: t("nav-item-3"), href: "#Services", current: false },
    { name: t("nav-item-4"), href: "#About-Us", current: false },
    { name: t("nav-item-5"), href: "#Contact", current: false }
  ])

  return (
    <Disclosure as="nav" className="sticky top-0 z-20 bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-7 w-auto lg:hidden"
                    src={VimonsaLogo}
                    alt=""
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={VimonsaLogo}
                    alt=""
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => {
                          setNavigation(
                            navigation.map((nav) => {
                              if (nav.name === item.name) {
                                nav.current = true
                              }

                              if (nav.name !== item.name) {
                                nav.current = false
                              }
                              return nav
                            })
                          )
                          console.clear()
                          console.log(navigation)
                        }}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <GlobeAltIcon className="h-8 w-8 rounded-full stroke-slate-400" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={selectLanguage}
                            value="en"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 w-full text-start"
                            )}
                          >
                            <US
                              title="United States"
                              className="w-7 inline-block mr-2"
                            />
                            {t("Language_lang.english")}
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={selectLanguage}
                            value="es"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 w-full text-start"
                            )}
                          >
                            <MX
                              title="Mexico"
                              className="w-7 inline-block mr-2"
                            />
                            {t("Language_lang.spanish")}
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

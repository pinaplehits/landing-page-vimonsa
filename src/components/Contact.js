import { useTranslation } from "react-i18next"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import emailjs from "emailjs-com"

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  message: ""
}

export default function Contact() {
  const { t } = useTranslation(null, { keyPrefix: "Contact_lang" })
  const [{ firstName, lastName, email, message }, setState] =
    useState(initialState)
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const clearState = () => setState({ ...initialState })

  const handleChange = (e) => {
    setState((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(firstName, lastName, email, message)

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text)
          openModal()
          e.target.reset()
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className="bg-stone-100 py-6">
      <div className="max-w-5xl mt-10 mx-auto sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form className="border-2 rounded-lg" onSubmit={handleSubmit}>
              <div className="overflow-hidden lg:shadow-2xl shadow-[#6E949A]/60">
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {t("Form.first-name-label")}
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        onChange={handleChange}
                        required
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#27B2D4] focus:ring-[#27B2D4] sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {t("Form.last-name-label")}
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        onChange={handleChange}
                        required
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#27B2D4] focus:ring-[#27B2D4] sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {t("Form.email-label")}
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#27B2D4] focus:ring-[#27B2D4] sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {t("Form.message-label")}
                      </label>
                      <textarea
                        type="text"
                        name="message"
                        id="message"
                        onChange={handleChange}
                        required
                        autoComplete="off"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#27B2D4] focus:ring-[#27B2D4] sm:text-sm resize-none"
                        rows="5"
                        cols="50"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 text-right sm:px-6 border-t-2">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-[hsla(192,69%,49%,0.9)] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[hsla(192,69%,49%,1)] focus:outline-none focus:ring-4 focus:ring-[hsla(192,69%,49%,0.5)]"
                  >
                    {t("Form.submit-button")}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="md:col-span-1 mt-8 lg:ml-8">
            <div className="text-center text-xl font-medium mb-5 text-gray-900">
              {t("Info.contact-info")}
            </div>
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                {t("Info.address-label")}
              </h3>
              <div>
                <span className="mt-4 text-sm text-gray-600">
                  {t("Info.country-mex")}
                </span>
                <span>
                  <a
                    href="https://goo.gl/maps/BfLKLSWtvCDB5nku5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-[#27B2D4]"
                  >
                    Antonio J. Bermúdez 2151-4, Ciudad Juárez, Chihuahua
                  </a>
                </span>
              </div>
              <div>
                <span className="mt-4 text-sm text-gray-600">
                  {t("Info.country-usa")}
                </span>
                <span>
                  <a
                    href="https://goo.gl/maps/ZAq1Cm2KseLHFzfVA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-[#27B2D4]"
                  >
                    6070 Gateway Blvd E Ste 106, El Paso, TX 79905
                  </a>
                </span>
              </div>
            </div>
            <div className="px-4 sm:px-0 mt-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                {t("Info.phone-label")}
              </h3>
              <span className="mt-4 text-sm text-gray-600">
                {t("Info.country-mex")}
              </span>
              <span>
                <a
                  href="tel:+526568919311"
                  className="text-sm text-gray-600 hover:text-[#27B2D4]"
                >
                  (656) 891-9311
                </a>
              </span>
              {/* <div className="mt-1 text-sm text-gray-600">
                {t("Info.country-usa")}
                <a
                  href="tel:+19153525826"
                  className="text-sm text-gray-600 hover:text-[#27B2D4]"
                >
                  (915) 352-5826
                </a>
              </div> */}
            </div>
            <div className="px-4 sm:px-0 mt-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                {t("Info.email-label")}
              </h3>
              <a
                href="mailto:administration@vimonsa.com"
                className="mt-4 text-sm text-gray-600 hover:text-[#27B2D4]"
              >
                administration@vimonsa.com
              </a>
            </div>
            <div className="px-4 sm:px-0 mt-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                {t("Info.workschedule-label")}
              </h3>
              <span className="mt-4 text-sm text-gray-600">
                8:00 AM - 6:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rosunded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {t("SuccessModal.dialog-title")}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {t("SuccessModal.dialog-description")}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      {t("SuccessModal.dialog-button")}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

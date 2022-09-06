import { useTranslation } from "react-i18next"

export default function Example() {
  const { t, i18n } = useTranslation()

  function handleClick(e) {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5  my-4"
        value="en"
        onClick={handleClick}
      >
        English
      </button>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        value="es"
        onClick={handleClick}
      >
        Español
      </button>
    </>
  )
}

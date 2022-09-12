import React from "react"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation(null, { keyPrefix: "Footer_lang" })
  return (
    <footer className="mt-10 p-4 bg-gray-800 shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-400 sm:text-center">
        © 2022{" "}
        <a href="https://vimonsa.com.mx/" className="hover:underline">
          Vimonsa
        </a>
        . {t("footer-text")}
      </span>
    </footer>
  )
}

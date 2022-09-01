import { useTranslation } from "react-i18next"

export default function Example() {
  const { t } = useTranslation()
  return <h1>{t("Welcome to React")}</h1>
}

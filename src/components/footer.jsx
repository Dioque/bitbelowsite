import "../App.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return <footer>{t("footer.text")}</footer>;
}

export default Footer;
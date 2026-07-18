import icone from "../assets/icone.png";
import { useTranslation } from "react-i18next";

function NavBar({ darkMode, setDarkMode }) {
  const { t } = useTranslation();

  return (
    <nav>
      <img
        src={icone}
        alt={t("navbar.logoAlt")}
        onClick={() => setDarkMode(!darkMode)}
        style={{ cursor: "pointer" }}
      />
    </nav>
  );
}

export default NavBar;
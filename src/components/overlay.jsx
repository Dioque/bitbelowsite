import "../App.css";
import { useTranslation } from "react-i18next";

function Overlay() {
  const { t } = useTranslation();

  return (
    <section className="landing">
      <div className="overlay"></div>

      <div className="content">
        <h1>
          {t("overlay.title")} <span>{t("overlay.brandName")}</span>
        </h1>

        <div className="carousel">
          <div className="carousel-track">
            <p>{t("overlay.tools.godot")}</p>
            <p>{t("overlay.tools.aseprite")}</p>
            <p>{t("overlay.tools.krita")}</p>
            <p>{t("overlay.tools.blender")}</p>
            <p>{t("overlay.tools.figma")}</p>
            <p>{t("overlay.tools.tiled")}</p>
            <p>{t("overlay.tools.clickup")}</p>

            <p>{t("overlay.tools.godot")}</p>
            <p>{t("overlay.tools.aseprite")}</p>
            <p>{t("overlay.tools.krita")}</p>
            <p>{t("overlay.tools.blender")}</p>
            <p>{t("overlay.tools.figma")}</p>
            <p>{t("overlay.tools.tiled")}</p>
            <p>{t("overlay.tools.clickup")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overlay;
import "../App.css";
import { useTranslation } from "react-i18next";

function Card({
  icon,
  image,
  title,
  description,
  variant = "",
}) {
  const { t } = useTranslation();

  return (
    <div className={`card ${variant}`}>
      {image && (
        <img
          src={image}
          alt={t(title)}
          className="card-image"
        />
      )}

      {icon && <div className="card-icon">{icon}</div>}

      <h3>{t(title)}</h3>
      <p>{t(description)}</p>
    </div>
  );
}

export default Card;
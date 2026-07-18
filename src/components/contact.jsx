import "../App.css";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <section className="contact">
      <h2>{t("contact.title")}</h2>
      <p>{t("contact.description")}</p>

      <div className="info">
        <p>
          <span>{t("contact.recruitment")}</span> recrutamento.bit@outlook.com
        </p>
        <p>
          <span>{t("contact.questions")}</span> bitbelow.bit@outlook.com
        </p>
        <p>
          <span>{t("contact.socialPrompt")}</span>
        </p>
        <ul className="social-list">
          <li>
            <a href="https://discord.gg/4k4nmDGgpD">
              <i className="fa-brands fa-discord"></i>
            </a>{" "}
            {t("contact.socials.discord")}
          </li>
          <li>
            <a href="https://x.com/BitBelow">
              <i className="fa-brands fa-x-twitter"></i>
            </a>{" "}
            {t("contact.socials.twitter")}
          </li>
          <li>
            <a href="https://www.instagram.com/bitbelow.bit/">
              <i className="fa-brands fa-instagram"></i>
            </a>{" "}
            {t("contact.socials.instagram")}
          </li>
          <li>
            <a href="mailto:bitbelow.bit@outlook.com">
              <i className="fa-solid fa-envelope"></i>
            </a>{" "}
            bitbelow.bit@outlook.com
          </li>
          <li>
            <a href="mailto:recrutamento.bit@outlook.com">
              <i className="fa-solid fa-envelope"></i>
            </a>{" "}
            recrutamento.bit@outlook.com
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
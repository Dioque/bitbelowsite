import "../App.css";
import { useTranslation } from "react-i18next";
import Card from "./card";
function About() {
    const { t } = useTranslation();

    return (
        <section className="about">
            <div className="about-content">
                <span className="tag">{t("about.tag")}</span>

                <h2>
                    {t("about.title")}
                    <span>{t("about.titleHighlight")}</span>
                </h2>

                <p className="about-description">{t("about.description")}</p>

                <div className="about-cards">
                    <div className="about-card">
                        <Card
                            icon="🎮"
                            title="about.cards.mission.title"
                            description="about.cards.mission.description"
                        />
                    </div>

                    <div className="about-card">
                        <Card
                            icon="✨"
                            title="about.cards.values.title"
                            description="about.cards.values.description"
                        />
                    </div>

                    <div className="about-card">
                        <Card
                            icon="🚀"
                            title="about.cards.vision.title"
                            description="about.cards.vision.description"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
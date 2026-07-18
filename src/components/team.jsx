import "../App.css";
import { useTranslation } from "react-i18next";
import Card from "../components/Card";

function Team() {
  const { t } = useTranslation();

  const members = [
    {
      icon: "⭐",
      title: "team.members.owner.name",
      description: "team.members.owner.role",
    },
    {
      icon: "🦾",
      title: "team.members.ceo.name",
      description: "team.members.ceo.role",
    },
    {
      icon: "💾",
      title: "team.members.po.name",
      description: "team.members.po.role",
    },
  ];

  return (
    <section className="team">
      <div className="team-content">
        <span className="tag">{t("team.tag")}</span>

        <h2>
          {t("team.title")}
          <span>{t("team.titleHighlight")}</span>
        </h2>

        <p className="team-description">
          {t("team.description")}
        </p>

        <div className="team-grid">
          {members.map((member) => (
            <Card
              key={member.title}
              icon={member.icon}
              title={member.title}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
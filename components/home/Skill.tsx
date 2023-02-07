import classNames from "classnames";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";

const SkillGraph = dynamic(() => import("./SkillGraph"), {
  ssr: false,
});

const HomeSkill = () => {
  const { t } = useTranslation("home");

  return (
    <div className="home-section h-screen text-center">
      <h3 className="home-section-title">
        <p>{t("skill.coding.title")}</p>
        <p>
          {t("skill.coding.believe")}
          <span className="home-section-title-magic">
            {t("skill.coding.change-life")}
          </span>
        </p>
      </h3>

      <h3 className="home-section-title">
        <p>{t("skill.challenge.title")}</p>
        <p>
          {t("skill.challenge.try-and-explore")}
          <span className="home-section-title-magic">
            {t("skill.challenge.growth")}
          </span>
        </p>
      </h3>

      <div className="mt-12 overflow-hidden">
        <SkillGraph
          className={classNames("w-170 h-80", "max-md:w-full max-md:h-30")}
        />
      </div>
    </div>
  );
};

export default HomeSkill;

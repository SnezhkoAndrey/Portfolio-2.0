import { useTranslation } from "react-i18next";
import styles from "./About.module.scss";
import { useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";
import useTheme from "../../../../hooks/useTheme";
import AboutDropdown from "../AboutDropdown/AboutDropdown";

const About = () => {
  const { t } = useTranslation();

  const { theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  const contentTech = [
    "JavaSctipt ES6+",
    "React/React hooks",
    "TypeScript",
    "Next JS",
    "MobX",
    "Redux/Redux-toolkit/Redux-thunk",
    "Jest/React testing library",
    "HTML5",
    "CSS3/SASS/SCSS",
    "AntDesign/Material UI/Bootstrap",
    "REST API",
    "npm/yarn",
    "JSON",
    "OOP/functional programming",
    "Classes components(lifecycle methods)",
    "i18Next",
  ];

  return (
    <div className={addTheme(styles.about)}>
      <h3 className={addTheme(styles.title)}>{t("about")}</h3>
      <div className={styles.container}>
        <AboutDropdown
          content={contentTech}
          number="01."
          name={t("home_skills")}
        />
        <AboutDropdown
          content={[t("home_univ"), t("home_course")]}
          number="02."
          name={t("home_edu")}
        />
        <AboutDropdown
          content={[t("home_uk"), t("home_en"), t("home_ru")]}
          number="03."
          name={t("home_lang")}
        />
      </div>
    </div>
  );
};

export default About;

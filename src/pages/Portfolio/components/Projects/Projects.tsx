import { useTranslation } from "react-i18next";
import styles from "./Projects.module.scss";
import { useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";
import useTheme from "../../../../hooks/useTheme";
import ProjectDropdown from "../ProjectDropdown/ProjectDropdown";

const Projects = () => {
  const { t } = useTranslation();

  const { theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  const technologiesRate = [
    "React",
    "React hooks",
    "TypeScript",
    "Next JS",
    "MobX",
    "Material UI",
    "AntDesignCharts",
    "Toaster",
    "REST API",
  ];

  const technologiesTranslator = [
    "React",
    "React hooks",
    "TypeScript",
    "Context",
    "React hook form",
    "Material UI",
    "Jest",
    "Toaster",
    "REST API",
  ];

  const technologiesTest = [
    "React",
    "React hooks",
    "TypeScript",
    "Redux Toolkit",
    "Redux Thunk",
    "Material UI",
    "REST API",
    "React hook form",
    "i18Next",
    "Toaster",
    "LocalStorage",
  ];

  const technologiesWeather = [
    "React",
    "React hooks",
    "TypeScript",
    "Redux Toolkit",
    "Redux Thunk",
    "REST API",
    "Toaster",
  ];

  const technologiesTodo = [
    "React",
    "React hooks",
    "TypeScript",
    "Context",
    "LocalStorage",
  ];

  return (
    <div className={addTheme(styles.projects)}>
      <h3 className={addTheme(styles.title)}>{t("home_project")}</h3>
      <div className={styles.container}>
        <ProjectDropdown
          technologies={technologiesRate}
          name={t("rate_name")}
          desc={t("rate")}
          codeLink="https://github.com/SnezhkoAndrey/Exchange-Rate"
          demoLink="https://exchangerate-908e7.web.app"
          number="01."
        />
        <ProjectDropdown
          technologies={technologiesTranslator}
          name={t("translator_name")}
          desc={t("translator")}
          codeLink="https://github.com/SnezhkoAndrey/Translator"
          demoLink="https://translator-c82ae.web.app"
          number="02."
        />
        <ProjectDropdown
          technologies={technologiesTest}
          name={t("test_name")}
          desc={t("test")}
          codeLink="https://github.com/SnezhkoAndrey/Test-app"
          demoLink="https://snezhkoandrey.github.io/Test-app/"
          number="03."
        />
        <ProjectDropdown
          technologies={technologiesWeather}
          name={t("weather_name")}
          desc={t("weather")}
          codeLink="https://github.com/SnezhkoAndrey/Weather-App"
          demoLink="https://weather-app-1a6ac.web.app"
          number="04."
        />
        <ProjectDropdown
          technologies={technologiesTodo}
          name={t("todo_name")}
          desc={t("todo")}
          codeLink="https://github.com/SnezhkoAndrey/ToDo"
          demoLink="https://todo-application-c9530.web.app"
          number="05."
        />
      </div>
    </div>
  );
};

export default Projects;

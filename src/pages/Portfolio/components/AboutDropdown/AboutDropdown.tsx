import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../../../context/GlobalContext";
import { useContext } from "react";
import useTheme from "../../../../hooks/useTheme";
import styles from "./AboutDropdown.module.scss";
import marker_light from "../../../../assets/marker-light.png";
import marker_dark from "../../../../assets/marker-dark.png";

interface PropsType {
  number: string;
  name: string;
  content: string[];
}

const AboutDropdown = ({ number, name, content }: PropsType) => {
  const { t } = useTranslation();

  const { theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  return (
    <details className={addTheme(styles.details)}>
      <summary className={addTheme(styles.summary)}>
        <div className={styles.contentItem}>
          <p className={addTheme(styles.number)}>{number}</p>
          <h3 className={addTheme(styles.name)}>{name}</h3>
        </div>
        <img
          className={styles.marker}
          src={theme ? marker_light : marker_dark}
          alt="marker"
        />
      </summary>
      <div className={styles.content}>
        {content.map((tech) => (
          <div key={tech} className={addTheme(styles.contentItem)}>
            {tech}
          </div>
        ))}
      </div>
    </details>
  );
};

export default AboutDropdown;

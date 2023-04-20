import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../../../context/GlobalContext";
import { useContext, useState } from "react";
import useTheme from "../../../../hooks/useTheme";
import styles from "./ProjectDropdown.module.scss";
import marker_light from "../../../../assets/marker-light.png";
import marker_dark from "../../../../assets/marker-dark.png";
import gitButton_light from "../../../../assets/gitButton-light.png";
import gitButton_dark from "../../../../assets/gitButton-dark.png";

interface PropsType {
  technologies: string[];
  name: string;
  desc: string;
  codeLink: string;
  demoLink: string;
  number: string;
}

const ProjectDropdown = ({
  technologies,
  name,
  desc,
  codeLink,
  demoLink,
  number,
}: PropsType) => {
  const { t } = useTranslation();

  const { theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  const [open, setOpen] = useState(false);

  return (
    <div className={addTheme(styles.details)}>
      <div
        className={addTheme(
          open ? `${styles.summary} ${styles.active}` : styles.summary
        )}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className={styles.contentItem}>
          <p className={addTheme(styles.number)}>{number}</p>
          <h3 className={addTheme(styles.name)}>{name}</h3>
        </div>
        <img
          className={open ? `${styles.marker} ${styles.active}` : styles.marker}
          src={theme ? marker_light : marker_dark}
          alt="marker"
        />
      </div>
      <div
        className={addTheme(
          open ? `${styles.content} ${styles.active}` : styles.content
        )}
      >
        <h4 className={addTheme(styles.descTitle)}>{t("pb_desc")}</h4>
        <p className={addTheme(styles.desc)}>{desc}</p>
        <h4 className={addTheme(styles.descTitle)}>{t("pb_teck")}</h4>
        <div className={styles.technologies}>
          {technologies.map((tech) => (
            <div key={tech} className={addTheme(styles.tech)}>
              {tech}
            </div>
          ))}
        </div>
        <div className={styles.links}>
          <a
            className={addTheme(styles.linkCode)}
            href={codeLink}
            target="_blank"
            rel="noreferrer"
          >
            <img src={theme ? gitButton_light : gitButton_dark} alt="git" />
            <p className={addTheme(styles.codeName)}>{t("pb_code")}</p>
          </a>
          <a
            className={addTheme(styles.linkDemo)}
            href={demoLink}
            target="_blank"
            rel="noreferrer"
          >
            {t("pb_demo")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDropdown;
